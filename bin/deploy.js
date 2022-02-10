/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 10:43:56
 * @LastEditTime : 2022-02-10 16:42:21
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\bin\deploy.js
 * @Description  : 
 */
const ghpages = require('gh-pages');
const fs = require('fs');
const deployConfig = require('../deploy.config');

// 默认情况下 github pages 会忽略点号开头的文件夹和文件夹
// 在根目录创建一个 .nojekyll 可以避免这个行为
fs.copyFileSync('./.nojekyll', './out/.nojekyll');

ghpages.publish('out', deployConfig, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('deploy success');
  }
});

