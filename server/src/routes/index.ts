/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-17 19:41:59
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\routes\index.ts
 * @Description  : 
 */
import Router from '@koa/router';

import { router as v2router } from './v2';

const router = new Router({
  prefix: '/v2'
});

router.use(v2router.routes());

export default router;