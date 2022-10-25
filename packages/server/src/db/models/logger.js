/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-17 22:59:53
 * @LastEditTime : 2022-03-18 10:19:28
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\models\logger.js
 * @Description  : 
 */
'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Logger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Logger.init({
    id: { type: DataTypes.INTEGER, allowNull: true, autoIncrement: true, primaryKey: true, },
    datetime: { type: DataTypes.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
    ip: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    method: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    url: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    status: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0, },
    spent: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    message: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    length: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
  },{
    sequelize,
    modelName: 'LoggerModel',
    timestamps: false,
    tableName: 'Loggers'
  });
  return Logger;
};