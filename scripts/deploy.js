const ghpages = require('gh-pages');
const fs = require('fs-extra');
const path = require("path");

const DIST_PATH = path.join(__dirname, "../dist");
const CONFIG_PATH = path.join(__dirname, "../configs");

/**
 * get now date time
 * @returns {string} date time
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

/**
 * 默认情况下 github pages 会忽略点号开头的文件夹和文件夹
 * 这样生成的 .next 文件夹无法被识别
 * 在根目录创建一个 .nojekyll 可以避免这个行为
 */
function makeNoJekyll(dist) {
  const nojekyll = path.join(__dirname, CONFIG_PATH, ".nojekyll");
  const distNojekyll = path.join(dist, ".nojekyll");
  fs.copySync(nojekyll, distNojekyll, {overwrite: false});
}

/**
 * publish to gh pages
 * @param dist dist path
 * @param config deploy config
 */
function publish(dist, config) {
  makeNoJekyll(dist);

  ghpages.publish(dist, config, function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log('deploy success');
    }
  }).then();
}

function getDeployConfig() {
  const deployConfigPath = path.join(CONFIG_PATH, "deploy.json");
  const config = fs.readJsonSync(deployConfigPath, {encoding: "utf-8"});
  config.message = `update ${getNow()}`;
  return config;
}

publish(DIST_PATH, getDeployConfig());
