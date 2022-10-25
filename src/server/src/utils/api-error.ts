/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-16 10:13:57
 * @LastEditTime : 2022-03-16 10:25:44
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\utils\api-error.ts
 * @Description  : Api Error extends Error
 */
export default class ApiError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(statusCode: number, message: string, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}