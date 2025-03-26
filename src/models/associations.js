// const Cart = require('./Cart');
// const CartItem = require('./CartItem');
// const Product = require('./Product');
// const Order = require('./Order'); // Import Order model
// const OrderLine = require('./OrderLine'); // Import OrderLine model
// const User = require('./User');

// // Define associations
// Cart.hasMany(CartItem, { foreignKey: 'cart_id', as: 'items' });
// CartItem.belongsTo(Cart, { foreignKey: 'cart_id', as: 'cart' });
// CartItem.belongsTo(Product, { foreignKey: 'lot_id', targetKey: 'lot_id', as: 'product' });

// Order.hasMany(OrderLine, { foreignKey: 'order_id', as: 'orderLines' });
// OrderLine.belongsTo(Order, { foreignKey: 'order_id', as: 'orders' });

// // Associate Order with User
// Order.belongsTo(User, { as: 'user', foreignKey: 'user_id' });

// module.exports = { Cart, CartItem, Product, Order, OrderLine, User };


// association.js
const Cart = require('./Cart');
const CartItem = require('./CartItem');
const Product = require('./Product');
const Order = require('./Order');
const OrderLine = require('./OrderLine');
const User = require('./User');
const Review = require('./Review');
const DeliveredOrder = require('./DeliveredOrder');
const Receipt = require('./Receipt');

// Cart และ CartItem
Cart.belongsTo(User, { foreignKey: 'user_id' });
Cart.hasMany(CartItem, { foreignKey: 'cart_id', as: 'items' });
CartItem.belongsTo(Cart, { foreignKey: 'cart_id' });

// CartItem → Product (โดยใช้ lot_id + grade แยกกัน)
CartItem.belongsTo(Product, { foreignKey: 'lot_id', targetKey: 'lot_id', as: 'lot' });
CartItem.belongsTo(Product, { foreignKey: 'grade', targetKey: 'grade', as: 'gradeInfo' });

// Order → OrderLine
Order.hasMany(OrderLine, { foreignKey: 'order_id', as: 'orderLines' });
OrderLine.belongsTo(Order, { foreignKey: 'order_id' });

// OrderLine → Product
OrderLine.belongsTo(Product, { foreignKey: 'lot_id', targetKey: 'lot_id', as: 'lot' });
OrderLine.belongsTo(Product, { foreignKey: 'grade', targetKey: 'grade', as: 'gradeInfo' });

// Order → User
Order.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Order, { foreignKey: 'user_id' });

// Review → Order และ Product
Review.belongsTo(Order, { foreignKey: 'order_id' });
Review.belongsTo(Product, { foreignKey: 'lot_id', targetKey: 'lot_id', as: 'lot' });
Review.belongsTo(Product, { foreignKey: 'grade', targetKey: 'grade', as: 'gradeInfo' });

// DeliveredOrder → Order และ User
DeliveredOrder.belongsTo(Order, { foreignKey: 'order_id' });
DeliveredOrder.belongsTo(User, { foreignKey: 'staff_id', targetKey: 'user_id' });

// Receipt → Order และ User
Receipt.belongsTo(Order, { foreignKey: 'order_id' });
Receipt.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
  Cart,
  CartItem,
  Product,
  Order,
  OrderLine,
  User,
  Review,
  DeliveredOrder,
  Receipt,
};

