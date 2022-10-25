/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-16 17:53:36
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\middlewares\onerror.mid.ts
 * @Description  : 
 */
import Koa from 'koa';

export default function onerror () {
  return async function (ctx: Koa.Context, next: Koa.Next) {
    try {
      await next();
    } catch (err) {
      handleSequelizeDatabaseError(err, ctx);
      ctx.app.emit('error', err, ctx);
    }
  }
}

function handleSequelizeDatabaseError (err: any, ctx: Koa.Context) {
  const isDev = process.env.NODE_ENV === 'dev';

  let msg: any;

  ctx.status = err.status || 500;

  if (err instanceof Error) {
    if (isDev) {
      if (err.name) msg.name = err.name;
      if (err.message) msg.message = err.message;
      if (err.stack) msg.stack = err.stack;
    } else {
      msg = err.message || '没有具体错误信息';
    }
  }

  ctx.body = { code: 0, msg: msg, };
}