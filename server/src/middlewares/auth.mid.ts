import jwt from 'jsonwebtoken';
import Koa from 'koa';
import config from '../configs';
import { IRoute, IUser } from '../types';

export default function Auth(level: number = 5) {
  return async function (ctx: Koa.Context, next: Koa.Next) {
    const authorization = ctx.headers['authorization'];
    if (authorization) {
      if (isAuthorizationValid(authorization)) {
        const token = authorizationToken(authorization);
        const user = verifyToken(token) as IUser;
        if (user) {
          // 判断用户等级是否满足
          if (level !== undefined && user["role"] > level) {
            ctx.throw(400, '权限不足');
          } else {
            await next();
          }
        } else {
          ctx.throw(400, 'Invalid token.');
        }
      } else {
        ctx.throw(400, 'Only accept Bearer token.');
      }
    } else {
      ctx.throw(400, 'No token given.');
    }
  }
}

const isAuthorizationValid = (rawAuthorization: string) => {
  const parts = rawAuthorization.split(' ');
  const type = parts[0];
  return type.toLowerCase() === 'bearer';
}

const authorizationToken = (rawAuthorization: string) => {
  const parts = rawAuthorization.split(' ');
  return parts[1];
}

const verifyToken = (token: string) => {
  return jwt.verify(token, config.token.secret);
}
