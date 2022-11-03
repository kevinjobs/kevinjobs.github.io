import koa from 'koa';
import Ajv from 'ajv';
import { pick, ApiError } from '../utils';
import httpStatus from 'http-status';
import { IRoute } from '../types';

export default function (validation: IRoute['validation']) {
    const ajv = new Ajv();

    const validSchema = pick(validation, ['params', 'body', 'query']);

    return async (ctx: koa.Context, next: koa.Next) => {
        const objects = pick(ctx.request, Object.keys(validSchema));
        const errors = [];

        for (const key in objects) {
            const validate = ajv.compile(validSchema[key]);
            const valid = validate(objects[key]);

            if (!valid) {
                errors.push(...validate.errors.map(err => err.message));
            }
        }

        if (errors.length > 0) {
            const errorMsg = errors.join(', ');
            throw new ApiError(httpStatus.BAD_REQUEST, errorMsg);
        } else {
            await next();
        }
    };
}
