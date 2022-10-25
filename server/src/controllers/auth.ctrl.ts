/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 12:29:30
 * @LastEditTime : 2022-03-17 19:36:20
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\controllers\auth.ctrl.ts
 * @Description  : 
 */
import Koa from 'koa';
import { UserService, TokenService } from '../services';

export default class AuthController {
  static token = async (ctx: Koa.Context) => {
    const user = ctx.request.body;
    const token = await TokenService.generate(user);
    ctx.body = { code: 1, msg: '获取token成功', data: token };
    return ctx;
  }

  static register = async (ctx: Koa.Context) => {
    // to-do: should validate it
    const user = ctx.request.body;
    // console.log('user' + user);
    const newUser = await UserService.createOne(user);
    ctx.body = { code: 1, msg: 'user added', data: newUser };
    return ctx;
  }
}