/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-18 14:24:09
 * @LastEditTime : 2022-03-18 14:25:34
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\index.ts
 * @Description  : 
 */
import https from 'https';
import http from 'http';
import fs from 'fs';
import db from './db/models';
import app from './app';
// db connect and authenticate.
db.connect();

let server: any;

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';
const isProd = process.env.NODE_ENV === 'production';

const port = 5000;
const host = isDev || isTest ? 'localhost' : '0.0.0.0';

const options = {
  key: fs.readFileSync("./ssl/server.key", "utf8"),
  cert: fs.readFileSync("./ssl/server.crt", "utf8")
};

if (isDev || isTest) {
  server = http.createServer(app.callback()).listen(port, host)
} else if (isProd) {
  server = https.createServer(options, app.callback()).listen(port, host)
};

console.log(`Start at ${host}:${port}...`);

export default server;