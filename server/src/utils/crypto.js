/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-18 12:06:58
 * @LastEditTime : 2022-03-18 12:08:13
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\utils\crypto.js
 * @Description  : 
 */
const crypto = require('crypto');

const encrypt = (
  passwd,
  method = 'sha256',
  secret = `9WufUXCTsxQb*R@33PBIzh%IQSH6xN%OX%M0rtt@ig2hJ$$OW@^tz9Vn$mJ1rcPEynKOUSmVcBST7&Nvvy*tYKEPGS4Ky6pT2kr`
) => {
  const hmac = crypto.createHmac(method, secret);
  hmac.update(passwd);
  return hmac.digest('hex');
}

module.exports = encrypt;