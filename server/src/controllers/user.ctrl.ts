import Koa from 'koa';
import { UserService } from '../services';

export default class UserController {
  static getList = async (ctx: Koa.Context) => {
    const {rows, totals} = await UserService.getList();
    ctx.body = { code: 1, msg: 'get user success', data: rows, totals };
    return ctx;
  }

  static delete = async (ctx: Koa.Context) => {
    const { uid } = ctx.query;
    await UserService.deleteOneByUid(String(uid));
    ctx.body = { code: 1, msg: `delete user: ${uid} success.` };
    return ctx;
  }

  static put = async (ctx: Koa.Context) => {
    const { uid } = ctx.query;
    // to-do: validate user
    const user = ctx.request.body;
    await UserService.updateOneByUid(String(uid), user);
    ctx.body = { code: 1, msg: 'user info update', };
    return ctx;
  }
}