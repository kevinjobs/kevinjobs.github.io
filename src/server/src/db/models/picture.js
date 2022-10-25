/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-17 23:01:50
 * @LastEditTime : 2022-03-18 10:21:23
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\models\picture.js
 * @Description  : 
 */
'use strict';
const {
  Model
} = require('sequelize');
const { v4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Picture.init({
    createAt: { type: DataTypes.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
    updateAt: { type: DataTypes.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
    id: { type: DataTypes.INTEGER, allowNull: true, autoIncrement: true, primaryKey: true, },
    uid: { type: DataTypes.UUID, allowNull: true, defaultValue: v4, unique: true },
    // base
    title: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    author: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    publish: { type: DataTypes.STRING, allowNull: true, defaultValue: 'draft', },
    tags: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    // picture
    source: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    description: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    width: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0, },
    height: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0, },
    latitude: { type: DataTypes.FLOAT, allowNull: true, defaultValue: 0.0, },
    longitude: { type: DataTypes.FLOAT, allowNull: true, defaultValue: 0.0, },
    latitudeRef: { type: DataTypes.STRING, allowNull: true, defaultValue: 'E', },
    longitudeRef: { type: DataTypes.STRING, allowNull: true, defaultValue: 'N', },
  },{
    sequelize,
    modelName: 'PictureModel',
    timestamps: false,
    tableName: 'Pictures'
  });
  return Picture;
};