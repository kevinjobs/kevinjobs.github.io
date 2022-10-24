var IP_ADDRESS = "localhost";  // 部署上线时请修改为本机的 IPv4 地址

/**
 * 以下内容请勿修改
 */
var SERVER_PORT = "9527";
var SERVER_URL = "http://" + IP_ADDRESS + ":" + SERVER_PORT;
var FRONT_PORT = "80";
var FRONT_URL = "http://" + IP_ADDRESS + ":" + FRONT_PORT;
// 上传项目后端网址
var ADD_ITEM_URL = SERVER_URL + "/item";
// 获取所有项目后端网址
var ALL_ITEMS_URL = SERVER_URL + "/items/all";
var ITEMS_NOT_EXPIRES_URL = SERVER_URL + "/items/not-expires";
// 上传文件后端网址
var postFormatterUrl = SERVER_URL + "/upload";
var UPLOAD_URL = SERVER_URL + "/upload";
// 用户提交表单后端网址
var formUrl = SERVER_URL + "/form";
// 临时文件夹地址
var UPLOAD_TMP_URL = FRONT_URL + "/upload/tmp";

// 让 jquery 支持跨域请求;
jQuery.support.cors = true;