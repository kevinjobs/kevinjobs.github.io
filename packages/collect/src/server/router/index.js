const Router = require('@koa/router');
const body = require('koa-body');

const {
  handleFetchItemsNotExpires,
  handleFetchItems,
  handleAddItem,
  handleDelItem
} = require('./item.router');
const { handleUpload } = require('./upload.router');
const { handlePostForm } = require('./form.router');

const items = new Router();
const router = new Router();

/**
 * 获取所有项目
 */
items.post('/items/all', handleFetchItems);
/**
 * 获取还未过期的项目
 */
items.post('/items/not-expires', handleFetchItemsNotExpires);
/**
 * 新增项目
 */
items.post('/item', body(), handleAddItem);
/**
 * 删除项目
 */
items.post('/item/del', body(), handleDelItem);
/**
 * 上传表单：用户提交新的文章和附件
 */
items.post('/form', body(), handlePostForm);
/**
 * 上传文件
 */
const KOA_BODY_OPTS = {
  multipart: true,
  formidable: {
    maxFileSize: 500 * 1024 * 1024 // 最大限制 500MB
  }
}
items.post('/upload', body(KOA_BODY_OPTS), handleUpload);

router.use(items.routes(), items.allowedMethods());

module.exports = router;