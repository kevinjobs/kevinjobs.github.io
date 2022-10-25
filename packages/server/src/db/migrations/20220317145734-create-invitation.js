/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-17 22:57:34
 * @LastEditTime : 2022-03-18 10:17:30
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\db\migrations\20220317145734-create-invitation.js
 * @Description  : 
 */
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invitations', {
      createAt: { type: Sequelize.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
      updateAt: { type: Sequelize.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
      id: { type: Sequelize.INTEGER, allowNull: true, autoIncrement: true, primaryKey: true, },
      code: { type: Sequelize.STRING, allowNull: false, unique: true, },
      available: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: true },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Invitations');
  }
};