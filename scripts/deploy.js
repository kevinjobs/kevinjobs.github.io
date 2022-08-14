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
const path = require("path");

const distDir = path.join(__dirname, "../dist");

// 默认情况下 github pages 会忽略点号开头的文件夹和文件夹
// 在根目录创建一个 .nojekyll 可以避免这个行为
const nojekyll = path.join(__dirname, "../.nojekyll");
const distNojekyll = path.join(distDir, ".nojekyll");
fs.copyFileSync(nojekyll, distNojekyll);

ghpages.publish(distDir, deployConfig, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('deploy success');
  }
});

