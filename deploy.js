/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 10:43:56
 * @LastEditTime : 2022-01-24 14:41:05
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\deploy.js
 * @Description  : 
 */
const ghpages = require('gh-pages');

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