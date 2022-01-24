/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 10:43:56
 * @LastEditTime : 2022-01-24 18:03:15
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\deploy.js
 * @Description  : 
 */
const ghpages = require('gh-pages');
const fs = require('fs');

// 避免 github pages 忽略该文件夹
fs.copyFileSync('./.nojekyll', './out/_next/.nojekyll');

ghpages.publish('out', {
  branch: 'gh-pages',
  repo: 'git@github.com:kevinjobs/kevinjobs.github.io.git',
  message: `update ${new Date().valueOf()}`
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('deploy success.');
  }
});