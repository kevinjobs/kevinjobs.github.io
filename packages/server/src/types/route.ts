/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-17 19:59:22
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\types\route.ts
 * @Description  : 
 */
import Koa from 'koa';

interface IRoute {
  method: 'get' | 'post' | 'put' | 'delete',
  path: string,
  fn(ctx: Koa.Context): void,
  authRequired?: boolean,
  /**
   * 0: superuser
   * 1: admin
   * 2: vip
   * 3: common user
   */
  allowLevel?: 0 | 1 | 2 | 3,
  validation?: {
    body?: {
      properties: object,
    },
    params?: {
      properties: object,
    },
    query?: {
      properties: object,
    },
  },
}

export {
    IRoute,
};