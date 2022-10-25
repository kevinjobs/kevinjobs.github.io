/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-16 16:45:57
 * @LastEditTime : 2022-03-18 15:05:02
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\services\token.service.ts
 * @Description  : 
 */
import { ApiError, encrypt } from '../utils';
import { UserModel } from '../db/models';
import jwt from 'jsonwebtoken';
import config from '../configs';
import httpStatus from 'http-status';
import { IUser } from '../types';

export default class TokenService {
  static async generate(loginUser: IUser) {
    const { name, password } = loginUser;
    
    const result = await UserModel.findOne({where: {name}});
    if (!result) {
      throw new ApiError(httpStatus.NOT_FOUND, `用户:[${name}]不存在`);
    }

    if (!result.isCorrectPassword(password)) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'wrong password');
    }

    const { secret, expiresIn } = config.token;
    const token = jwt.sign(result.get(), secret, {expiresIn});

    return token;
  }
}