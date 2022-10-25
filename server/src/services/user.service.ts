/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-16 09:53:34
 * @LastEditTime : 2022-03-18 12:10:54
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\services\user.service.ts
 * @Description  : 
 */
import { UserModel, InvitationModel } from '../db/models';
import { ApiError } from '../utils';
import { IUser } from '../types';
import status from 'http-status';

export default class UserService {
  /**
   * create a new user
   * @param user User
   * @returns User
   */
  static async createOne(user: IUser) {
    if (await UserModel.findOne({where: {name: user.name}})) {
      throw new ApiError(status.CONFLICT, `User: ${user.name} exists.`);
    }
      
    if (!await InvitationModel.findOne({where: {code: user.invitation}}) && process.env.NODE_ENV !== 'development') {
      throw new ApiError(status.NOT_FOUND, '邀请码不存在');
    }

    const newUser = await UserModel.create(user);

    // set the invitation code available to false when register success
    if (process.env.NODE_ENV !== 'development') {
      await InvitationModel.update(
        {available: false},
        {where: {code: user.invitation}}
      );
    }

    return {...newUser.get(), password: undefined};
  }

  /**
   * get the user list
   * @returns { rows, totals }
   */
  static async getList(): Promise<{ rows: any[]; totals: number; }> {
    const { rows, count } = await UserModel.findAndCountAll();
    return {rows, totals: count};
  }
  
  static async deleteOneByUid(uid: string) {
    const result = await UserModel.destroy({where: {uid: uid}});
    if (!result) {
      throw new ApiError(status.INTERNAL_SERVER_ERROR, `del user: ${uid} failed.`);
    }
  }

  static async updateOneByUid(uid: string, user: IUser) {
    const [result] = await UserModel.update(
      user,
      {where: {uid: uid}}
    );
    if (!result) {
      throw new ApiError(status.INTERNAL_SERVER_ERROR, 'update user failed.');
    }
  }
}