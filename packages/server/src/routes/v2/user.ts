/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-16 11:18:56
 * @LastEditTime : 2022-03-16 11:21:13
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\routes\v2\user.ts
 * @Description  : 
 */
import { IRoute } from "@/types";

import { UserController } from "../../controllers";

const authRoutes: IRoute[] = [
  { method: 'get', path: '/users', fn: UserController.getList, authRequired: true, },
  { method: 'delete', path: '/user', fn: UserController.delete, authRequired: true, },
  { method: 'put', path: '/user', fn: UserController.put, authRequired: true,},
]

export default authRoutes;