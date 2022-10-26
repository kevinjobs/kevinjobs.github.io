const {exec} = require("child_process");
const fs = require('fs');
const path = require('path');
const {execCallback} = require('./index');

const command = 'rimraf ./dist/* && tsc';

exec(command, (err, stdout, stderr) => execCallback(err, stdout, stderr, () => {
  const src = path.join(__dirname, "../src/db/database.json");
  const dest = path.join(__dirname, "../dist/db/database.json");
  fs.copyFileSync(src, dest);
}))

