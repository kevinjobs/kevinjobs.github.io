/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-17 23:13:57
 * @LastEditTime : 2022-03-18 10:18:56
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\db\migrations\20220317151357-create-logger.js
 * @Description  : 
 */
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Loggers', {
      id: { type: Sequelize.INTEGER, allowNull: true, autoIncrement: true, primaryKey: true, },
      datetime: { type: Sequelize.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
      ip: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      method: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      url: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      status: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0, },
      spent: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      message: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      length: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Loggers');
  }
};