import Koa from 'koa';
import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs'
import config from '../configs';
import { ILog } from '../types';
import { LoggerModel } from '../db/models';

const logger = () => {
  return async function (ctx: Koa.Context, next: Koa.Next) {
    const startTime = new Date().getTime(); // 记录请求开始时间
    await next();
    const endTime = new Date().getTime();   // 记录请求结束时间
  
    const log: ILog = {
      datetime: dayjs(startTime).format('YYYY-MM-DD HH:mm:ss'),
      ip: ctx.request.ip,
      method: ctx.request.method,
      url: ctx.request.url,
      status: ctx.response.status,
      message: ctx.response.message,
      spent: humanizeTime(endTime - startTime),
      length: humanizeBytes(ctx.response.length),
    }
  
    let logStrs = [];
    for (let i in log) logStrs.push(log[i]);
  
    // 控制台显示日志
    // 如果是测试环境则不显示
    const isTest = process.env.NODE_ENV === 'test';
    !isTest && console.log(logStrs.join(' '));
  
    /**
     * 将日志写入文件
     */
    const logPath = config.log.path;
    const timeInDay = dayjs().format('YYYY-MM-DD');
  
    fs.stat(logPath, (err: any, stat: any) => {
      if (err) fs.mkdirSync(logPath);
      const filePath = path.join(logPath, `${timeInDay}.log`);
      const msg = logStrs.join(' ') + '\n';
      fs.writeFileSync(filePath, msg, {encoding: 'utf8', flag: 'a'});
    });
  
    /**
     * write logs to db
     */
    try {
      await LoggerModel.create(log);
    } catch(err) {
      // console.log(err);
    }
  }
}

export const humanizeTime = (t: number) :string => {
  /**
   * 将毫秒转化为秒
   * @param {number} t 以毫秒计的时间
   * @return {string}
   */

  if (t < 10000) {
    return humanizeNumber(t) + 'ms';
  }
  else {
    return humanizeNumber(Math.round(t / 1000)) + 's';
  }
}

export const humanizeBytes = (s: any) => {
  /**
   * 转换字节为 MB GB 等
   */
  let finalSize = '';
  const size = parseInt(s);
  const bLimit = 1024;
  const kbLimit = bLimit * 1024;
  const mbLimit = kbLimit * 1024;
  const gbLimit = mbLimit * 1024;
  if (size < bLimit) {
    finalSize = size + 'B';
  } else if (size < kbLimit) {
    finalSize = (size / 1024).toFixed(2) + 'KB';
  } else if (size < mbLimit) {
    finalSize = (size / (1024 * 1024)).toFixed(2) + 'MB';
  } else if (size < gbLimit) {
    finalSize = (size / (1024 * 1024 * 1024)).toFixed(2) + 'GB';
  } else {
    finalSize = (size / (1024 * 1024 * 1024 * 1024)).toFixed(2) + 'TB';
  }

  let sizestr = finalSize.toString();
  let len = sizestr.indexOf('\.');
  let dec = sizestr.substr(len + 1, 2);
  if (dec === '00') {
    return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
  }
  
  return sizestr;
}

export const humanizeNumber = (n: number) :string => {
  /**
   * 在长数字间添加逗号等，使其更加易读
   * @param {any} n
   * @return {string}
   */
  const d = ',';
  const s = '.';
  const arr: string[] = n.toString().split('.');
  arr[0] = arr[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + d);
  return arr.join(s);
}

export const trimSpaceBothEnds = (text: string) :string => {
  /**
   * 清除字符串两端的空格
   * @param {string} text
   * @return {string}
   */
  return text.replace(/(^\s*)|(\s*$)/g, '');
}

export default logger;