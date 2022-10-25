/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-17 19:34:47
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\routes\v2\article.ts
 * @Description  : 
 */
import { ArticleController } from '../../controllers';

import { IRoute } from '@/types';

const articleRoutes: IRoute[] = [
  // 文章系列
  { method: 'get', path: '/articles', fn: ArticleController.getList, authRequired: false,  },
  { method: 'get', path: '/article', fn: ArticleController.get, authRequired: false, },
  { method: 'post', path: '/article', fn: ArticleController.post, authRequired: true, },
  { method: 'put', path: '/article', fn: ArticleController.put, authRequired: true, },
  { method: 'delete', path: '/article', fn: ArticleController.delete, authRequired: true, },
]

export default articleRoutes;