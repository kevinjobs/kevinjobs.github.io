/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-17 23:04:54
 * @LastEditTime : 2022-03-18 15:06:31
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\db\models\user.js
 * @Description  : 
 */
'use strict';
const {
  Model
} = require('sequelize');
const { v4 } = require('uuid');
const encrypt = require('../../utils/crypto');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    // the password is correct?
    isCorrectPassword(passwd) {
      return this.password === encrypt(passwd);
    }
  }
  User.init({
    createAt: { type: DataTypes.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
    updateAt: { type: DataTypes.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
    id: { type: DataTypes.INTEGER, allowNull: true, autoIncrement: true, primaryKey: true, },
    uid: { type: DataTypes.UUID, allowNull: true, defaultValue: v4, unique: true },
    // base
    name: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue('password', encrypt(value));
      }
    },
    // others
    nickname: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    avatar: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    homepage: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    birthday: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    gender: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    location: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    motto: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    description: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
    role: { type: DataTypes.NUMBER, allowNull: true, defaultValue: 3, },
    invitation: { type: DataTypes.STRING, allowNull: true, defaultValue: '', },
  },{
    sequelize,
    modelName: 'UserModel',
    timestamps: false,
    tableName: 'Users'
  });
  return User;
};