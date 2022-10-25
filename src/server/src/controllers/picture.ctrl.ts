/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-09 22:31:37
 * @LastEditTime : 2022-03-17 19:24:38
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\controllers\picture.ctrl.ts
 * @Description  : 
 */
import Koa from 'koa';
import { PictureService } from '../services';

export default class PostController {
  // 获取
  static get = async (ctx: Koa.Context) => {
    const { uid } = ctx.query;
    const result = await PictureService.getOneByUid(String(uid));
    ctx.body = { code: 1, msg: 'get success', data: result, };
    return ctx;
  }

  // 新增
  static post = async (ctx: Koa.Context) => {
    const picture = ctx.request.body;
    const result = await PictureService.addOne(picture);
    ctx.body = { code: 1, msg: 'add success', data: result };
    return ctx;
  }

  // 修改 & 更新
  static put = async (ctx: Koa.Context) => {
    const { uid } = ctx.query;
    const picture = ctx.request.body;
    await PictureService.updateOneByUid(String(uid), picture);
    ctx.body = { code: 1, msg: 'updated success' };
    return ctx;
  }

  // 删除
  static delete = async (ctx: Koa.Context) => {
    const { uid } = ctx.query;
    await PictureService.deleteOneByUid(String(uid));
    ctx.body = { code: 1, msg: 'deleted success', };
    return ctx;
  }

  // 获取列表
  static getList = async (ctx: Koa.Context) => {
    const {
      offset = 0,
      limit = 8,
      orderBy = 'createAt',
      order = 'asc', // asc or desc
    } = ctx.query;
    const { rows, totals } = await PictureService.getAllArticles(
      Number(offset),
      Number(limit),
      String(orderBy),
      String(order)
    )
    ctx.body = {
      code: 1,
      msg: 'get picture list success',
      data: rows,
      totals: totals,
      offset: Number(offset),
      limit: Number(limit),
    };
    return ctx;
  }
}
