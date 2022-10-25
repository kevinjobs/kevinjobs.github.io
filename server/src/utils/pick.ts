/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-17 16:53:13
 * @LastEditTime : 2022-03-17 16:55:09
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\utils\pick.ts
 * @Description  : 
 */
export default function pick(obj: object, keys: string[]) {
  return keys.reduce((o, k) => {
    if (obj && Object.prototype.hasOwnProperty.call(obj, k)) {
      o[k] = obj[k];
    }
    return o;
  }, {});
}
