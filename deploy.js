/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 10:43:56
 * @LastEditTime : 2022-01-24 10:44:49
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \nextjs-blog\deploy.js
 * @Description  : 
 */
const ghpages = require('gh-pages');

ghpages.publish('out', {
  branch: 'gh-pages',
  repo: 'git@github.com:kevinjobs/kevinjobs.github.io.git',
  message: 'update by gh-pages auto'
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('deploy success.');
  }
});