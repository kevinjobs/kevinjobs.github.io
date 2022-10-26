import { ArticleService } from '../services';
import Koa from 'koa';

export default class PostController {
  // 获取
  static get = async (ctx: Koa.Context) => {
    const { uid } = ctx.query;
    const result = await ArticleService.getOneByUid(String(uid));
    ctx.body = { code: 1, msg: '成功获取文章', data: result };
    return ctx;
  }

  // 新增
  static post = async (ctx: Koa.Context) => {
    const article = ctx.request.body;
    const result = await ArticleService.addOne(article);
    ctx.body = { code: 1, msg: '成功添加文章', data: result };
    return ctx;
  }

  // 修改 & 更新
  static put = async (ctx: Koa.Context) => {
    const { uid } = ctx.query;
    const article = ctx.request.body;
    const updatedArticle = await ArticleService.updateOneByUid(String(uid), article); 
    ctx.body = { code: 1, msg: '更新成功', data: updatedArticle };
    return ctx;
  }

  // 删除
  static delete = async (ctx: Koa.Context) => {
    const { uid } = ctx.query;
    await ArticleService.deleteOneByUid(String(uid));
    ctx.body = { code: 1, msg: '删除成功' };
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
    const result = await ArticleService.getAllArticles(
      Number(offset),
      Number(limit),
      String(orderBy),
      String(order)
    );
    ctx.body = {
      code: 1,
      msg: '获取文章列表成功',
      data: result.rows,
      totals: result.totals,
      offset: Number(offset),
      limit: Number(limit),
    };
    return ctx;
  }
}
