const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Receipt = sequelize.define('receipt', {
  receipt_id : { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  order_id: { type: DataTypes.INTEGER, allowNull: false },
  receipt_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  Receipt_path: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
}, {
  tableName: 'receipt', 
  timestamps: false 
});

module.exports = Receipt;


