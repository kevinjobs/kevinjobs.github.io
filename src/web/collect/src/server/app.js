/**
 * @author   Kevin Jobs
 * @createAt null
 * @updateAt 2022-09-20
 * @email    me@kevinjobs.com
 */
const path = require("path");
const Koa = require('koa');
const cors = require('@koa/cors');
const onerror = require('koa-onerror');
const logger = require('./middlewares/logger.mid');
const router = require('./router');
const http = require('http');

// 创建 Koa 对象
const app = new Koa();
/**
 * 中间件
 */
// 集中处理异常
onerror(app);
// 处理日志
app.use(logger(path.join(process.cwd(), "logs")));
// 处理跨域请求
app.use(cors());
// 引入路由
app.use(router.routes());

// 设置后端服务器端口
const port = 9527;
// 设置后端服务器监听地址
const host = '0.0.0.0';

// 创建服务
const server = http.createServer(app.callback()).listen(port, host);

console.log(`Backend server has been starting at ${host}:${port}`);
console.log("Notion: the web page is not in this host and port.");

module.exports = server;