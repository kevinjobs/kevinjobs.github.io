/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-05-25 20:56:27
 * @LastEditTime : 2022-05-29 19:08:16
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \submitter\src\server\db.js
 * @Description  : 
 */
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { dbPath } = require('./config');

const adapters = new FileSync(dbPath);
const db = low(adapters);

db.defaults({items: []}).write();
db.defaults({postFileRecords: []}).write();
db.defaults({postFormRecords: []}).write();

module.exports = db;