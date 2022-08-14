/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-01-24 14:47:29
 * @LastEditTime : 2022-01-24 14:47:29
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \kevinjobs.github.io\next.config.js
 * @Description  : 
 */
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles')
    ]
  }
}