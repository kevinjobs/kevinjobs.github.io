/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-17 11:26:44
 * @LastEditTime : 2022-03-18 11:56:55
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\services\logs.service.ts
 * @Description  : 
 */
import { ApiError } from '../utils';
import { Op } from 'sequelize';
import { LoggerModel } from '../db/models';
import httpStatus from 'http-status';

export default class LogsService {
  static async getAllLogs(datetime: string, orderBy: string, order: string) {
    const result = await LoggerModel.findAll({
      order: [
        [orderBy as string, order as string]
      ],
      where: {
        datetime: {
          [Op.startsWith]: String(datetime)
        }
      }
    });

    if (result.length === 0) {
      throw new ApiError(httpStatus.NOT_FOUND, 'No Logs');
    }

    return result;
  }

  static async getAllVisitDatas(dates: string[]) {
    const results = [];

    for (let i = 0; i < dates.length; i++) {
      const count = await LoggerModel.count({
        where: {
          datetime: {
            [Op.startsWith]: String(dates[i]),
          }
        }
      });

      results[i] = {
        date: results[i],
        totals: count,
      };
    }

    return results;
  }
}