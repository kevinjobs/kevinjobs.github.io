import { IArticle } from '../types';
import httpStatus from 'http-status';
import { ArticleModel } from '../db/models';
import { ApiError } from '../utils';

export default class ArticleService {
    static async getOneByUid(uid: string) {
        const result = await ArticleModel.findOne({where: {uid}});
        if (!result) {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, `Cannot find article. uid: ${uid}`);
        } else return result;
    }

    static async addOne(article: IArticle) {
        const result = await ArticleModel.create(article);
        if (!result) {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Add new article failed.');
        } else return result;
    }

    static async updateOneByUid(uid: string, article: IArticle) {
        const [result] = await ArticleModel.update(article, {where: {uid}});
        if (!result) {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, `Update article: ${uid} failed`);
        } else return undefined;
    }

    static async deleteOneByUid(uid: string) {
        const result = await ArticleModel.destroy({where: {uid: uid}});
        if (!result) {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, `无法找到该文章: ${uid}`);
        } else return result;
    }

    static async getAllArticles(offset: number, limit: number, orderBy: string, order: string) {
        const { count, rows } = await ArticleModel.findAndCountAll({
            order: [
                [orderBy as string, order as string],
            ],
            offset: Number(offset),
            limit: Number(limit),
        });
        if (rows.length < 0) {
            throw new ApiError(httpStatus.NO_CONTENT, 'No Article');
        } else {
            return {
                rows,
                totals: count,
                offset: offset,
                limit: limit
            };
        }
    }
}
