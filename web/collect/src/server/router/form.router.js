/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-05-29 10:02:47
 * @LastEditTime : 2022-05-29 18:56:11
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \submitter\server\router\form.router.js
 * @Description  : 
 */
const db = require('../db');
const dayjs = require('dayjs');
const fs = require('fs');
const path = require('path');
const { uploadPath } = require('../config');
const { ensurePath, extraceExt, getFormatDate } = require('../utils');

async function handlePostForm(ctx, next) {
  const body = ctx.request.body;

  const {
    submitProject,
    articleTitle,
    authorName,
    authorDepartment,
    postScript,
    tmpFile
  } = body;

  const projectPath = path.join(uploadPath, submitProject);

  ensurePath(projectPath);

  const flags = {
    articleBody: '',
    attach1: '附件1',
    attach2: '附件2',
    attach3: '附件3',
  }

  const destPath = {};

  for (let file in tmpFile) {
    const src = tmpFile[file];
    const extension = extraceExt(src);
    const date = getFormatDate();
    const name = `【${submitProject.slice(12)}】${articleTitle}(${authorDepartment} ${authorName})${postScript} ${date}${flags[file]}${extension}`
    const dest = path.join(projectPath, name);
    destPath[file] = dest;

    fs.copyFile(src, dest, (err) =>{
      if (err) {
        console.error(err);
      } 
    })
  }

  db.get('postFormRecords')
    .push({...body, destPath, ip: ctx.ip , date: dayjs().format('YYYY-MM-DD HH:mm:ss')})
    .write();

  ctx.body = {code: 1, msg: 'upload form success', msgCN: '提交表单成功'};
  ctx.type = "text/html";
}

module.exports = {
  handlePostForm
}