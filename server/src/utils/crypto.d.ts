/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-18 14:28:10
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\utils\crypto.d.ts
 * @Description  : 
 */
export default function encrypt (
  passwd: string,
  method?: string,
  secret?: string
): string