// productController.js
const { Op } = require('sequelize');
const Order = require('../models/Order'); 
const OrderLine = require('../models/OrderLine');
const Product = require('../models/Product');
const moment = require('moment');

exports.getIncomeSummary = async (req, res) => {
  try {
    const year = 2025;
    const incomeSummary = [];

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    for (let month = 0; month < 12; month++) {
      const startDate = new Date(year, month, 1);
      const endDate = new Date(year, month + 1, 0);

      const orders = await Order.findAll({
        where: {
          order_date: {
            [Op.between]: [startDate, endDate]
          }
        },
        attributes: ['total_price']
      });

      const totalIncome = orders.reduce((sum, order) => sum + parseFloat(order.total_price), 0);

      incomeSummary.push({
        month: monthNames[month],
        totalIncome: totalIncome
      });
    }

    res.status(200).json(incomeSummary);
  } catch (error) {
    console.error('Error fetching income summary:', error);
    res.status(500).send({ error: 'Failed to fetch income summary' });
  }
};




exports.getMonthlySalesSummary = async (req, res) => {
  try {
    const { month } = req.params; 
    const startDate = moment(month, 'YYYY-MM').startOf('month').format('YYYY-MM-DD');
    const endDate = moment(month, 'YYYY-MM').endOf('month').format('YYYY-MM-DD');

    // Find orders placed in the given month
    const orders = await Order.findAll({
      where: {
        order_date: {
          [Op.between]: [startDate, endDate] // Get all orders between the start and end of the month
        }
      },
      include: [
        {
          model: OrderLine,
          as: 'orderLines', 
          include: [
            {
              model: Product,
              as: 'lot',
              attributes: ['lot_id', 'base_price', 'sale_price'], 
            },
            {
              model: Product,
              as: 'gradeInfo',
              attributes: ['grade'], 
            }
          ],
        }
      ]
    });

    const salesSummary = {};

    // Iterate through orders and calculate product sales
    orders.forEach(order => {
      order.orderLines.forEach(orderLine => {
        const lot = orderLine.lot;
        const gradeInfo = orderLine.gradeInfo;

        if (lot && gradeInfo) {
          const productKey = `${lot.lot_id} - Grade: ${gradeInfo.grade}`;
          
          if (!salesSummary[productKey]) {
            salesSummary[productKey] = {
              lot_id: lot.lot_id,
              grade: gradeInfo.grade,
              totalQuantity: 0,
              totalRevenue: 0,
              totalCost: 0,
              totalProfit: 0,
            };
          }

          const quantity = orderLine.amount;
          const revenue = lot.sale_price * quantity;
          const cost = lot.base_price * quantity;
          const profit = revenue - cost;

          salesSummary[productKey].totalQuantity += quantity;
          salesSummary[productKey].totalRevenue += revenue;
          salesSummary[productKey].totalCost += cost;
          salesSummary[productKey].totalProfit += profit;
        }

      });
    });

    res.status(200).json(Object.values(salesSummary));
  } catch (error) {
    console.error('Error fetching sales summary:', error);
    res.status(500).send({ error: 'Failed to fetch sales summary' });
  }
};





// Function to get all products that are available
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ where: { status: 'Available' } });
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: error.message || 'An unknown error occurred' });
  }
};


// Function to get a specific product by lot_id and grade
exports.getProduct = async (req, res) => {
  const { lot_id, grade } = req.params;

  try {
    const product = await Product.findOne({
      where: {
        lot_id,
        grade
      }
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: error.message });
  }
};


// Get all products
exports.getProductsList = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { lot_id, grade,  RemainLotamount, LotamountStock, exp_date, base_price, sale_price } = req.body;
    const image_path = req.file ? `/images/${req.file.filename}` : null;
    const status = 'Available';
    const product = await Product.create({
      lot_id,
      grade,
      RemainLotamount,
      LotamountStock,
      exp_date,
      base_price,
      sale_price,
      image_path,
      status 
    });

    res.status(201).json(product);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(400).json({ error: error.message || 'An unknown error occurred' });
  }
};

