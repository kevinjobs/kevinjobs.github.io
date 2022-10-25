/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-17 19:34:57
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\routes\v2\picture.ts
 * @Description  : 
 */
import { PictureController } from '../../controllers';

import { IRoute } from '@/types';

const pictureRoutes: IRoute[] = [
  // 图片系列
  { method: 'get', path: '/pictures', fn: PictureController.getList, authRequired: false, },
  { method: 'get', path: '/picture', fn: PictureController.get, authRequired: false, },
  { method: 'post', path: '/picture', fn: PictureController.post, authRequired: true, },
  { method: 'put', path: '/picture', fn: PictureController.put, authRequired: true, },
  { method: 'delete', path: '/picture', fn: PictureController.delete, authRequired: true, },
]

export default pictureRoutes;