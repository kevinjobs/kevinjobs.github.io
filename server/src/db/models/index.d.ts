/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-18 09:33:07
 * @LastEditTime : 2022-03-18 15:00:20
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\db\models\index.d.ts
 * @Description  : 
 */
import { Model } from 'sequelize';

declare namespace db {
  class ArticleModel extends Model {}
  class InvitationModel extends Model {}
  class PictureModel extends Model {}
  class UserModel extends Model {
    isCorrectPassword(passwd: string): boolean;
  }
  class LoggerModel extends Model {}
  class PropertyModel extends Model {}
  function connect(): void;
}

export = db;