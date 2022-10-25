/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-09 22:31:37
 * @LastEditTime : 2022-03-18 10:22:43
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\models\article.js
 * @Description  : 
 */
'use strict';
const { Model } = require("sequelize");
const { v4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {}

  Article.init({
    createAt: { type: DataTypes.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
    updateAt: { type: DataTypes.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
    id: { type: DataTypes.INTEGER, allowNull: true, autoIncrement: true, primaryKey: true, },
    uid: { type: DataTypes.UUID, allowNull: true, defaultValue: v4, unique: true },
    // base
    title: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    author: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    publish: { type: DataTypes.STRING, allowNull: true, defaultValue: 'draft', },
    tags: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    // article
    cover: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    content: { type: DataTypes.TEXT, allowNull: true, defaultValue: '', },
    extension: { type: DataTypes.STRING, allowNull: true, defaultValue: 'markdown', },
    excerpt: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
  }, {
    sequelize: sequelize,
    modelName: 'ArticleModel',
    timestamps: false,
    tableName: 'Articles',
  });

  return Article;
}