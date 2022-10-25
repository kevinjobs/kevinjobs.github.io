/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-17 22:54:17
 * @LastEditTime : 2022-03-18 11:42:59
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\models\invitation.js
 * @Description  : 
 */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invitation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  const date = new Date();
  const aWeekLater = date.setDate(date.getDate()+7).valueOf();
  Invitation.init({
    createAt: { type: DataTypes.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
    updateAt: { type: DataTypes.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
    id: { type: DataTypes.INTEGER, allowNull: true, autoIncrement: true, primaryKey: true, },
    code: { type: DataTypes.STRING, allowNull: false, unique: true, },
    available: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: true },
    expireAt: { type: DataTypes.NUMBER, allowNull: true, defaultValue: aWeekLater },
  },{
    sequelize: sequelize,
    modelName: 'InvitationModel',
    timestamps: false,
    tableName: 'Invitations',
  })
  return Invitation;
};