/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-16 17:21:02
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\controllers\index.ts
 * @Description  : 
 */
import AuthController from './auth.ctrl';
import ArticleController from './article.ctrl';
import PictureController from './picture.ctrl';
import PropertyController from "./property.ctrl";
import LogsController from './logs.ctrl';
import UserController from './user.ctrl';

export {
  AuthController,
  ArticleController,
  PictureController,
  PropertyController,
  LogsController,
  UserController,
}