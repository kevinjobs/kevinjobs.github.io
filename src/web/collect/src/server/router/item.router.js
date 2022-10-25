const db = require('../db.js');
const dayjs = require('dayjs');
const IsSameOrAfter = require('dayjs/plugin/isSameOrAfter');

/**
 * 获取还未过期的项目
 * @param {context} ctx koa context
 * @param {next} next koa next
 */
async function handleFetchItemsNotExpires(ctx, next) {
  const items = db.get('items').value();

  let data = [];

  for (let i = 0; i < items.length; i++) {
    if (isNotExpired(items[i].expiration)) {
      data.push(items[i]);
    }
  }

  // 按截止时间排序
  data = sortByDate(data, "asc");

  ctx.body = {
    code: 0,
    msg: 'get success',
    msgCN: '获取成功',
    data
  };
}

/**
 * 获取所有项目
 * @param {context} ctx koa context
 * @param {next} next koa next
 */
async function handleFetchItems(ctx, next) {
  let items = db.get('items').value();

  items = sortByDate(items);

  ctx.body = {
    code: 0,
    msg: 'get success',
    msgCN: '获取成功',
    data: items
  };
}

/**
 * 删除一个项目，通过项目名
 * 因此项目名必须是独一无二的
 * @param {context} ctx koa context
 * @param {next} next koa next
 */
async function handleDelItem(ctx, next) {
  const { projectName } = ctx.request.body;

  db.get('items')
    .remove({projectName})
    .write();

  ctx.body = {
    code: 0,
    msg: 'delete success',
    msgCN: '删除成功'
  }
}

/**
 * 新增一个项目
 * @param {context} ctx koa context
 * @param {next} next koa next
 */
async function handleAddItem(ctx, next) {
  // const { projectName, expiration } = ctx.request.body;

  db.get('items')
    .push({...ctx.request.body})
    .write();

  ctx.body = {
    code: 0,
    msg: 'add success',
    msgCN: '添加成功'
  }
}

/**
 * 判断一个日期是否为今天或今天以后，
 * 用以判断项目是否过期。
 * to-do: 精确到秒
 * @param {date} d 日期
 * @returns boolean
 */
function isNotExpired (d) {
  dayjs.extend(IsSameOrAfter);
  return dayjs(d).isSameOrAfter(dayjs(), 'date');
}

/**
 * 按日期给项目排序
 * @param {Array} arr 项目列表
 * @param {String} order 排序方式，asc：升序
 * @returns 排序后的项目列表
 */
function sortByDate(arr, order="asc") {
	// 按截止时间排序
  return arr.sort(function(a, b) {
  	dayjs.extend(IsSameOrAfter);

  	let sameOrAfter = dayjs(a["expiration"]).isSameOrAfter(b["expiration"], "date");

  	if (sameOrAfter) {
  		if (order === "asc") {
  			return 1;
  		} else {
  			return -1;
  		}
  	} else {
  		if (order === "asc") {
  			return -1;
  		} else {
  			return 1;
  		}
  	}
  })
}

module.exports = {
  handleFetchItemsNotExpires,
  handleAddItem,
  handleDelItem,
  handleFetchItems
}