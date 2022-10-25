/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-17 19:59:48
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\routes\v2\index.ts
 * @Description  : 
 */
import Router from '@koa/router';
import validate from '../../middlewares/validate.mid';
import { IRoute } from '@/types';
import auth from '../../middlewares/auth.mid';

import articleRoutes from './article';
import authRoutes from './auth';
import logRoutes from './log';
import pictureRoutes from './picture';
import propertyRoutes from "./property";
import userRoutes from './user';

const router = new Router();

const routes: IRoute[] = [
  ...articleRoutes,
  ...authRoutes,
  ...logRoutes,
  ...pictureRoutes,
  ...propertyRoutes,
  ...userRoutes,
];

routes.map(r => {
  switch (r.method) {
    case 'get':
      {
        const middlewares = [];
        if (r.authRequired) middlewares.push(auth(r.allowLevel));
        if (r.validation) middlewares.push(validate(r.validation));
        middlewares.push(r.fn);
        router.get(r.path, ...middlewares);
      }
      break;
    case 'post':
      {
        const middlewares = [];
        if (r.authRequired) middlewares.push(auth(r.allowLevel));
        if (r.validation) middlewares.push(validate(r.validation));
        middlewares.push(r.fn);
        router.post(r.path, ...middlewares);
      }
      break;
    case 'put':
      {
        const middlewares = [];
        if (r.authRequired) middlewares.push(auth(r.allowLevel));
        if (r.validation) middlewares.push(validate(r.validation));
        middlewares.push(r.fn);
        router.put(r.path, ...middlewares);
      }
      break;
    case 'delete':
      {
        const middlewares = [];
        if (r.authRequired) middlewares.push(auth(r.allowLevel));
        if (r.validation) middlewares.push(validate(r.validation));
        middlewares.push(r.fn);
        router.delete(r.path, ...middlewares);
      }
      break;
  }
});

export {
  router,
  routes,
}
