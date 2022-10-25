/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-18 09:11:48
 * @LastEditTime : 2022-03-18 11:58:20
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\db\models\index.js
 * @Description  : 
 */
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.resolve(__dirname, '../database.json'))[env];
const db = {};

const isTest = process.env.NODE_ENV === 'test';

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    isTest
      ? await sequelize.sync({alter: false})
      : console.log('DB Connection has been established successfully');
  } catch (err) {
    console.error('Unable to connect to the database: ', err);
  }
};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.connect = connect;

module.exports = db;
