import { PropertyService } from '../services';
import Koa from 'koa';

export default class PostController {
  // 获取
  static get = async (ctx: Koa.Context) => {
    const { uid } = ctx.query;
    const result = await PropertyService.getOneByUid(String(uid));
    ctx.body = { code: 1, msg: 'Get property record success.', data: result };
    return ctx;
  }

  // 新增
  static post = async (ctx: Koa.Context) => {
    const article = ctx.request.body;
    const result = await PropertyService.addOne(article);
    ctx.body = { code: 1, msg: 'Add property record success.', data: result };
    return ctx;
  }

  // 修改 & 更新
  static put = async (ctx: Koa.Context) => {
    const { uid } = ctx.query;
    const article = ctx.request.body;
    const updatedArticle = await PropertyService.updateOneByUid(String(uid), article);
    ctx.body = { code: 1, msg: 'Update property record success.', data: updatedArticle };
    return ctx;
  }

  // 删除
  static delete = async (ctx: Koa.Context) => {
    const { uid } = ctx.query;
    await PropertyService.deleteOneByUid(String(uid));
    ctx.body = { code: 1, msg: 'Delete property record success.' };
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
    const result = await PropertyService.getAll(
      Number(offset),
      Number(limit),
      String(orderBy),
      String(order)
    );
    ctx.body = {
      code: 1,
      msg: 'Get property record success.',
      data: result.rows,
      totals: result.totals,
      offset: Number(offset),
      limit: Number(limit),
    };
    return ctx;
  }
}
