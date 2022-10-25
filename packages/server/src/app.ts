/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-18 16:18:16
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\app.ts
 * @Description  : 
 */
import Koa from 'koa';
import koaBody from 'koa-body';
import cors from '@koa/cors';
import router from './routes';
// middlewares
import logger from './middlewares/logger.mid';
import onerror from './middlewares/onerror.mid';

// 创建 Koa 对象
const app = new Koa();

// [中间件] logger
app.use(logger());

// [中间件] error handle
app.use(onerror());

// [中间件] 跨域
app.use(cors({maxAge: 86400}));

// [中间件] body
app.use(koaBody({                 
  multipart: true,
  jsonLimit: '10mb',
  formLimit: '10mb',
}));

// [中间件] 路由
app.use(router.routes());

app.on('error', err => console.log(err));

export default app;