/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-02-10 16:40:14
 * @LastEditTime : 2022-02-10 16:40:14
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\configs\deploy.config.js
 * @Description  : 
 */
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

module.exports = {
  branch: 'gh-pages',
  repo: 'git@github.com:kevinjobs/kevinjobs.github.io.git',
  message: `update ${getNow()}`,
  dotfiles: true,
}
