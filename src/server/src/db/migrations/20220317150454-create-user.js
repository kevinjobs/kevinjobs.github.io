/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-17 23:04:54
 * @LastEditTime : 2022-03-18 10:21:52
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\db\migrations\20220317150454-create-user.js
 * @Description  : 
 */
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      createAt: { type: Sequelize.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
      updateAt: { type: Sequelize.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
      id: { type: Sequelize.INTEGER, allowNull: true, autoIncrement: true, primaryKey: true, },
      uid: { type: Sequelize.UUID, allowNull: true, defaultValue: Sequelize.UUIDV4, unique: true },
      // base
      name: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      password: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      // others
      nickname: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      avatar: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      homepage: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      birthday: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      gender: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      location: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      motto: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      description: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
      role: { type: Sequelize.NUMBER, allowNull: true, defaultValue: 3, },
      invitation: { type: Sequelize.STRING, allowNull: true, defaultValue: '', },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};