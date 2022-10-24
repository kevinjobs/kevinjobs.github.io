const { extraceExt, ensurePath, saveFile } = require('../utils.js');
const { uploadTmpPath }  = require('../config');
const db = require('../db');
const dayjs = require('dayjs');
const path = require('path');

async function handleUpload(ctx, next) {
  const { name } = ctx.request.body;
  const files = ctx.request.files;

  // console.log(files);

  const fileTmpName = name + '-' + new Date().valueOf() + extraceExt(files.file.name);
  
  const fileTmpPath = path.join(uploadTmpPath, fileTmpName);
  
  ensurePath(uploadTmpPath);

  saveFile(fileTmpPath, files.file);

  db.get('postFileRecords')
    .push({fileTmpPath, ip: ctx.ip , origin: files.file.name, date: dayjs().format('YYYY-MM-DD HH:mm:ss')})
    .write();

  ctx.body = {
    code: 1,
    msgCN: '上传成功',
    data: {path: fileTmpPath, origin: files.file.name, name: fileTmpName}
  };

  ctx.type = 'text/html';
}

module.exports = {
  handleUpload
}