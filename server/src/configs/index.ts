/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-09 22:31:37
 * @LastEditTime : 2022-03-18 10:55:48
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\configs\index.ts
 * @Description  : 
 */
import { IConfig } from '../types';

const config: IConfig = {
  token: {
    secret: `9WufUXCTsxQb*R@33PBIzh%IQSH6xN%OX%M0rtt@ig2hJ$$OW
             @^tz9Vn$mJ1rcPEynKOUSmVcBST7&Nvvy*tYKEPGS4Ky6pT2kr`,
    expiresIn: '1d',
  },
  log: {
    path: './logs',
  }
};

export default config;