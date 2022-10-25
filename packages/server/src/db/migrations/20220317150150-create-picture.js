/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-17 23:01:50
 * @LastEditTime : 2022-03-18 10:21:43
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\db\migrations\20220317150150-create-picture.js
 * @Description  : 
 */
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pictures', {
      createAt: { type: Sequelize.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
      updateAt: { type: Sequelize.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
      id: { type: Sequelize.INTEGER, allowNull: true, autoIncrement: true, primaryKey: true, },
      uid: { type: Sequelize.UUID, allowNull: true, defaultValue: Sequelize.UUIDV4, unique: true },
      // base
      title: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      author: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      publish: { type: Sequelize.STRING, allowNull: true, defaultValue: 'draft', },
      tags: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      // picture
      source: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      description: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      width: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0, },
      height: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0, },
      latitude: { type: Sequelize.FLOAT, allowNull: true, defaultValue: 0.0, },
      longitude: { type: Sequelize.FLOAT, allowNull: true, defaultValue: 0.0, },
      latitudeRef: { type: Sequelize.STRING, allowNull: true, defaultValue: 'E', },
      longitudeRef: { type: Sequelize.STRING, allowNull: true, defaultValue: 'N', },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pictures');
  }
};