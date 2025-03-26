const User = require('./models/User');
const Cart = require('./models/Cart');
const Coupon = require('./models/Coupon');
const Product = require('./models/Product');
const Review = require('./models/Review');
const Order = require('./models/Order');
const OrderLine = require('./models/OrderLine');
const Receipt = require('./models/Receipt');
const CartItem = require('./models/CartItem');
const DeliveredOrder = require('./models/DeliveredOrder');

const seedData = async () => {
  await User.bulkCreate([
    { user_id: 1, username: 'jojo', name: 'John', lastname: 'Doe', phone_number: '1234567890', role: 'client', password: '123456789', email: 'john.doe@example.com', address: '123 Main St', house_details: 'Apartment 2B', name_road: 'Main Road', district: 'Central District', province: 'Bangkok', postal_code: '10200' },
    { user_id: 2, username: 'yaya', name: 'Suriya', lastname: 'Phongkham', phone_number: '0812345678', role: 'admin', password: '123456789', email: 'suriya@example.com', address: '10/5 Moo 6', house_details: 'House No.18', name_road: 'Ban Phe', district: 'Mueang', province: 'Rayong', postal_code: '21160' },
    { user_id: 3, username: 'kiki', name: 'Kanya', lastname: 'Srisuk', phone_number: '0867891234', role: 'owner', password: '123456789', email: 'kanya@example.com', address: '88/9 Moo 3', house_details: 'Townhouse B', name_road: 'Rayong Road', district: 'Kleng', province: 'Rayong', postal_code: '21110' },
    { user_id: 6, username: 'reginababy', name: 'regina', lastname: 'mills', phone_number: '1234567890', role: 'client', password: 'reginababy', email: 'regina@gmail.com', address: '123asdfghjk', house_details: '3', name_road: 'main', district: 'main', province: 'storybook', postal_code: '12378' },
    { user_id: 7, username: 'john_doe', name: 'John', lastname: 'Doe', phone_number: '1234567890', role: 'admin', password: 'password123', email: 'john.doe@example.com', address: '123 Main St', house_details: 'Apt 4B', name_road: 'Main Road', district: 'District X', province: 'Province Y', postal_code: '12345' },
    { user_id: 8, username: 'user1', name: 'User', lastname: 'One', phone_number: '0111111111', role: 'client', password: '123456789', email: 'usr1@gmail.com', address: 'adsad', house_details: '', name_road: 'adsasad', district: 'adssada', province: 'dasdad', postal_code: '10901' },
    { user_id: 47, username: 'bb', name: 'Bob', lastname: 'Builder', phone_number: '0123456789', role: 'packaging staff', password: '123456789', email: 'bob@gmail.com', address: 'asdsad', house_details: '', name_road: 'adssadsa', district: 'asdsada', province: 'asdsada', postal_code: '10901' },
    { user_id: 193, username: 'sara', name: 'Sherlock', lastname: 'Holmes', phone_number: '0123456789', role: 'delivering staff', password: '123456789', email: 'bob@gmail.com', address: '221B', house_details: '', name_road: '6XE UK', district: 'Baker Street', province: 'London', postal_code: '10900' }
  ]);

  await Cart.bulkCreate([
    { cart_id: 1, user_id: 1 },
    { cart_id: 6, user_id: 2 },
    { cart_id: 2, user_id: 6 },
    { cart_id: 7, user_id: 8 }
  ]);
  
  await Coupon.bulkCreate([
    { coupon_id: 1, discount_details: "5% discount", coupon_code: "TEST", coupon_status: "AVAILABLE", coupon_condition: "Minimum purchase of 500 baht" },
    { coupon_id: 2, discount_details: "7% discount", coupon_code: "TESTER", coupon_status: "AVAILABLE", coupon_condition: "Minimum purchase of 700 baht." },
    { coupon_id: 3, discount_details: "10% discount", coupon_code: "TENTEN", coupon_status: "AVAILABLE", coupon_condition: "Minimum purchase of 1,000 baht" },
    { coupon_id: 4, discount_details: "10% discount", coupon_code: "SECOND", coupon_status: "AVAILABLE", coupon_condition: "Minimum purchase of 500 baht" },
    { coupon_id: 5, discount_details: "15% discount", coupon_code: "TEST123", coupon_status: "AVAILABLE", coupon_condition: "Minimum purchase of 300 baht" },
    { coupon_id: 6, discount_details: "20% discount", coupon_code: "EXISTINGCODE", coupon_status: "AVAILABLE", coupon_condition: "Minimum purchase of 200 baht" },
    { coupon_id: 7, discount_details: "10% discount", coupon_code: "5ORMORE", coupon_status: "AVAILABLE", coupon_condition: "Minimum purchase of 5 products" },
    { coupon_id: 8, discount_details: "10% discount", coupon_code: "NEWONE", coupon_status: "AVAILABLE", coupon_condition: "Minimum purchase of 500 baht" },
    { coupon_id: 13, discount_details: "8% discount", coupon_code: "CANTUSE", coupon_status: "UNAVAILABLE", coupon_condition: "Minimum purchase of 100 baht" },
    { coupon_id: 14, discount_details: "10% discount", coupon_code: "THIRD", coupon_status: "AVAILABLE", coupon_condition: "Minimum purchase of 500 baht" }
  ]);


  await Product.bulkCreate([
    { lot_id: 'LOT001', grade: 'A', RemainLotamount: 143, LotamountStock: 151, status: 'Available', base_price: 500, sale_price: 600, image_path: '/images/lot001.png', exp_date: new Date('2024-10-25 18:45:24') },
    { lot_id: 'LOT002', grade: 'B', RemainLotamount: 295, LotamountStock: 297, status: 'Available', base_price: 700, sale_price: 850, image_path: '/images/lot002.png', exp_date: new Date('2024-10-25 18:45:30') },
    { lot_id: 'LOT004', grade: 'C', RemainLotamount: 96, LotamountStock: 98, status: 'Available', base_price: 300, sale_price: 400, image_path: '/images/lot004.png', exp_date: new Date('2024-11-20') },
    { lot_id: 'LOT005', grade: 'A', RemainLotamount: 42, LotamountStock: 48, status: 'Available', base_price: 400, sale_price: 500, image_path: '/images/lot005.png', exp_date: new Date('2024-11-30') },
    { lot_id: 'Lot006', grade: 'B', RemainLotamount: 20, LotamountStock: 20, status: 'Available', base_price: 300, sale_price: 500, image_path: '/images/image-1730472152786-973341105.png', exp_date: new Date('2024-11-10 17:00:00') },
    { lot_id: 'Lot007', grade: 'C', RemainLotamount: 12, LotamountStock: 12, status: 'Available', base_price: 300, sale_price: 500, image_path: '/images/image-1730473367975-757524260.png', exp_date: new Date('2024-11-10 17:00:00') },
    { lot_id: 'Lot008', grade: 'A', RemainLotamount: 25, LotamountStock: 28, status: 'Available', base_price: 500, sale_price: 800, image_path: '/images/image-1730473426388-103652746.png', exp_date: new Date('2024-12-10 17:00:00') },
    { lot_id: 'Lot009', grade: 'A', RemainLotamount: 30, LotamountStock: 30, status: 'Available', base_price: 500, sale_price: 800, image_path: '/images/image-1730618564276-678754617.png', exp_date: new Date('2024-12-10 17:00:00') }
  ]);

  
  await CartItem.bulkCreate([
    { product_in_cart_id: 82, amount: 1, cart_id: 1, lot_id: "LOT001", grade: "A" },
    { product_in_cart_id: 87, amount: 1, cart_id: 1, lot_id: "Lot007", grade: "C" },
    { product_in_cart_id: 95, amount: 1, cart_id: 7, lot_id: "LOT002", grade: "B" }
  ]);

  await Order.bulkCreate([
    { order_id: 46, user_id: 6, total_price: 2350, delivery_status: 'sent the packet', payment_status: 'Approved', status_for_ledger: 'not done', packed_status: 'packed', slip_payment: '/images/image-1730280903348-156052495.jpg', order_date: new Date('2024-10-30 09:34:57') },
    { order_id: 47, user_id: 1, total_price: 4350, delivery_status: 'sent the packet', payment_status: 'Approved', status_for_ledger: 'not done', packed_status: 'packed', slip_payment: '/images/image-1730478188231-803218375.png', order_date: new Date('2024-11-01 16:22:50') },
    { order_id: 48, user_id: 1, total_price: 3100, delivery_status: 'sent the packet', payment_status: 'Approved', status_for_ledger: 'not done', packed_status: 'packed', slip_payment: '/images/image-1730480773460-170102003.jpg', order_date: new Date('2024-11-01 17:06:09') },
    { order_id: 49, user_id: 1, total_price: 600, delivery_status: 'yet to send', payment_status: 'Rejected', status_for_ledger: 'not done', packed_status: 'not packed yet', slip_payment: '/images/image-1730480820957-602049382.jpg', order_date: new Date('2024-11-01 17:06:57') },
    { order_id: 51, user_id: 8, total_price: 1850, delivery_status: 'sent the packet', payment_status: 'Approved', status_for_ledger: 'not done', packed_status: 'packed', slip_payment: '/images/image-1739808610731-255562329.jpg', order_date: new Date('2025-02-08 06:09:48') },
    { order_id: 52, user_id: 1, total_price: 1700, delivery_status: 'yet to send', payment_status: 'Approved', status_for_ledger: 'not done', packed_status: 'packed', slip_payment: '/images/image-1739022399466-579866125.jpg', order_date: new Date('2025-02-10 15:46:23') },
    { order_id: 53, user_id: 1, total_price: 600, delivery_status: 'yet to send', payment_status: 'Yet to check', status_for_ledger: 'not done', packed_status: 'not packed yet', slip_payment: '/images/image-1740401736684-321099819.jpg', order_date: new Date('2025-02-24 12:55:32') },
    { order_id: 54, user_id: 1, total_price: 3300, delivery_status: 'sent the packet', payment_status: 'Approved', status_for_ledger: 'not done', packed_status: 'packed', slip_payment: '/images/image-1740407900475-629183215.jpg', order_date: new Date('2025-02-24 15:08:16') },
    { order_id: 999, user_id: 1, total_price: 12700, delivery_status: 'sent the packet', payment_status: 'Approved', status_for_ledger: 'not done', packed_status: 'packed', slip_payment: 'no path', order_date: new Date('2025-03-10 12:37:39') },
  ]);

  
  await OrderLine.bulkCreate([
    { order_line_id: 64, order_id: 46, lot_id: 'LOT001', grade: 'A', amount: 1 },
    { order_line_id: 65, order_id: 46, lot_id: 'LOT002', grade: 'B', amount: 1 },
    { order_line_id: 66, order_id: 46, lot_id: 'LOT004', grade: 'C', amount: 1 },
    { order_line_id: 67, order_id: 46, lot_id: 'LOT005', grade: 'A', amount: 1 },
    { order_line_id: 68, order_id: 47, lot_id: 'Lot007', grade: 'C', amount: 2 },
    { order_line_id: 69, order_id: 47, lot_id: 'LOT004', grade: 'C', amount: 2 },
    { order_line_id: 70, order_id: 47, lot_id: 'LOT002', grade: 'B', amount: 3 },
    { order_line_id: 71, order_id: 48, lot_id: 'LOT005', grade: 'A', amount: 2 },
    { order_line_id: 72, order_id: 48, lot_id: 'Lot007', grade: 'C', amount: 1 },
    { order_line_id: 73, order_id: 48, lot_id: 'Lot008', grade: 'A', amount: 2 },
    { order_line_id: 74, order_id: 49, lot_id: 'LOT001', grade: 'A', amount: 1 },
    { order_line_id: 77, order_id: 51, lot_id: 'LOT005', grade: 'A', amount: 2 },
    { order_line_id: 78, order_id: 51, lot_id: 'LOT002', grade: 'B', amount: 1 },
    { order_line_id: 79, order_id: 52, lot_id: 'LOT001', grade: 'A', amount: 2 },
    { order_line_id: 80, order_id: 52, lot_id: 'Lot007', grade: 'C', amount: 1 },
    { order_line_id: 81, order_id: 53, lot_id: 'LOT001', grade: 'A', amount: 1 },
    { order_line_id: 82, order_id: 54, lot_id: 'LOT001', grade: 'A', amount: 2 },
    { order_line_id: 83, order_id: 54, lot_id: 'LOT002', grade: 'B', amount: 2 },
    { order_line_id: 84, order_id: 54, lot_id: 'LOT004', grade: 'C', amount: 1 },
  ]);
  

  await Receipt.bulkCreate([
    { receipt_id: 2, user_id: 2, order_id: 46, Receipt_path: '/images/receipt_46.png', receipt_date: new Date('2024-11-02 11:29:11') },
    { receipt_id: 3, user_id: 2, order_id: 48, Receipt_path: '/images/receipt_48.png', receipt_date: new Date('2024-11-03 05:31:11') },
    { receipt_id: 4, user_id: 2, order_id: 48, Receipt_path: '/images/receipt_48.png', receipt_date: new Date('2024-11-03 07:27:44') }
  ]);

  await Review.bulkCreate([
    { review_id: 3, username: 'jojo', star: '3', comment: 'ส่งช้าไปหน่อย แต่สินค้าโอเค', like_count: 3, dislike_count: 3, order_id: 48, lot_id: 'LOT004', grade: 'C' },
    { review_id: 7, username: 'jojo', star: '5', comment: 'ส่งไวของดี', like_count: 12, dislike_count: 0, order_id: 48, lot_id: 'LOT008', grade: 'A' },
    { review_id: 38, username: 'testcustomer', star: '3', comment: 'Average product.', like_count: 3, dislike_count: 3, order_id: 49, lot_id: 'LOT001', grade: 'A' }
  ]);

  await DeliveredOrder.bulkCreate([
    { deliver_id: 2, ems_code: 'EMS123456789', order_id: 46, staff_id: 2 },
    { deliver_id: 3, ems_code: 'EMS987654321', order_id: 47, staff_id: 2 },
    { deliver_id: 4, ems_code: 'EMS0123456789', order_id: 46, staff_id: 2 },
    { deliver_id: 13, ems_code: 'EMS0123456789', order_id: 49, staff_id: 193 },
    { deliver_id: 21, ems_code: 'EMS0123456754', order_id: 54, staff_id: 193 },
    { deliver_id: 44, ems_code: 'EMS0123456754', order_id: 51, staff_id: 193 },
  ]);
  

  console.log('✅ Seed data has been inserted');
};

module.exports = seedData;
