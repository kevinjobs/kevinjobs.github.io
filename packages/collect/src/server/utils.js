const fs = require('fs');

function saveFile(p, file) {
  const reader = fs.createReadStream(file.path);
  const upStream = fs.createWriteStream(p);
  
  reader.pipe(upStream);
}

function getFormatDate() {
	const d = new Date();
  const month = d.getMonth().toString().length === 1 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
  const day = d.getDate().toString().length === 1 ? '0' + d.getDate() : d.getDate();
  const date = d.getFullYear().toString() + month.toString() + day.toString();
  return date;
}

function resp(code, msg, data = undefined) {
  return JSON.stringify({
    code,
    msg,
    data,
  })
}

function ensurePath(p) {
  if (!fs.existsSync(p)) {
    fs.mkdir(p, {recursive: true}, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
}

function extraceExt(name) {
  const extension = '.' + name.split('.').pop();
  return extension;
}

module.exports = {
  saveFile,
  getFormatDate,
  resp,
  extraceExt,
  ensurePath
}