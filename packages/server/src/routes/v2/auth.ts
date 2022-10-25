/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-17 20:00:17
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\routes\v2\auth.ts
 * @Description  : 
 */
import { IRoute } from "@/types";
import * as validation from '../../validations';
import { AuthController } from "../../controllers";

const authRoutes: IRoute[] = [
  {
    method: 'post',
    path: '/token',
    fn: AuthController.token,
    authRequired: false,
  },
  {
    method: 'post',
    path: '/register',
    fn: AuthController.register,
    authRequired: false,
    validation: validation.register,
  },
]

export default authRoutes;