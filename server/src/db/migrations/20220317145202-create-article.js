/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-17 22:52:02
 * @LastEditTime : 2022-03-18 10:21:34
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\db\migrations\20220317145202-create-article.js
 * @Description  : 
 */
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Articles', {
      createAt: { type: Sequelize.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
      updateAt: { type: Sequelize.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
      id: { type: Sequelize.INTEGER, allowNull: true, autoIncrement: true, primaryKey: true, },
      uid: { type: Sequelize.UUID, allowNull: true, defaultValue: Sequelize.UUIDV4, unique: true },
      // base
      title: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      author: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      publish: { type: Sequelize.STRING, allowNull: true, defaultValue: 'draft', },
      tags: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      // article
      cover: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      content: { type: Sequelize.TEXT, allowNull: true, defaultValue: '', },
      extension: { type: Sequelize.STRING, allowNull: true, defaultValue: 'markdown', },
      excerpt: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Articles');
  }
};