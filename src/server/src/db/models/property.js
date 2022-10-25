'use strict';
const {
  Model
} = require('sequelize');
const {v4} = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
    }
  }
  Property.init({
    createAt: { type: DataTypes.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
    updateAt: { type: DataTypes.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
    id: { type: DataTypes.INTEGER, allowNull: true, autoIncrement: true, primaryKey: true, },
    uid: { type: DataTypes.UUID, allowNull: true, defaultValue: v4, unique: true },
    platform: DataTypes.STRING,
    totalAmount: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    children: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PropertyModel',
    timestamps: false,
    tableName: "Properties"
  });
  return Property;
};