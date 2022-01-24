/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 10:43:56
 * @LastEditTime : 2022-01-24 18:24:43
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\deploy.js
 * @Description  : 
 */
const ghpages = require('gh-pages');
const fs = require('fs');

// 避免 github pages 忽略该文件夹
fs.copyFileSync('./.nojekyll', './out/.nojekyll');

const now = getNow();

ghpages.publish('out', {
  branch: 'gh-pages',
  repo: 'git@github.com:kevinjobs/kevinjobs.github.io.git',
  message: `update ${now}`,
  dotfiles: true,
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('deploy success: ' + now);
  }
});

function getNow() {
  const d = new Date();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  const year = d.getFullYear();
  const hour = d.getHours();
  const min = d.getMinutes();
  const s = d.getSeconds();
  
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-') + ' ' + [hour, min, s].join(':');
}