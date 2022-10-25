import { IProperty } from '@/types';
import httpStatus from 'http-status';
import { PropertyModel } from '../db/models';
import { ApiError } from '../utils';

export default class PropertyService {
  static async getOneByUid(uid: string) {
    const result = await PropertyModel.findOne({where: {uid}});
    if (!result) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, `Cannot find property record, uid: ${uid}`);
    } else return result;
  }

  static async addOne(property: IProperty) {
    const result = await PropertyModel.create(property);
    if (!result) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, `Add new property record failed.`);
    } else return result;
  }

  static async updateOneByUid(uid: string, property: IProperty) {
    const [result] = await PropertyModel.update(property, {where: {uid}});
    if (!result) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, `Update property record: ${uid} failed`);
    } else return undefined;
  }

  static async deleteOneByUid(uid: string) {
    const result = await PropertyModel.destroy({where: {uid: uid}});
    if (!result) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, `Cannot find the property record: ${uid}`);
    } else return result;
  }

  static async getAll(offset: number, limit: number, orderBy: string, order: string) {
    const { count, rows } = await PropertyModel.findAndCountAll({
      order: [
        [orderBy as string, order as string],
      ],
      offset: Number(offset),
      limit: Number(limit),
    });
    if (rows.length < 0) {
      throw new ApiError(httpStatus.NO_CONTENT, 'No property record.')
    } else {
      return {
        rows,
        totals: count,
        offset: offset,
        limit: limit
      }
    }
  }
}
