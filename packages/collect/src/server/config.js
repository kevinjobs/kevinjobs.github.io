/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-05-29 11:51:27
 * @LastEditTime : 2022-05-29 19:25:22
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \submitter\src\server\config.js
 * @Description  : 
 */
const path = require('path');

const basePath = path.join(__dirname, '../../');

const dbPath = path.join(basePath, 'db.json');
const srcPath = path.join(basePath, 'src');

const uploadPath = path.join(srcPath, 'front/upload');
const uploadTmpPath = path.join(uploadPath, 'tmp');

module.exports = {
  dbPath,
  srcPath,
  uploadPath,
  uploadTmpPath,
}