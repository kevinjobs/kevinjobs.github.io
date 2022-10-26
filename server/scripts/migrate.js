const {exec} = require("child_process");
const {execCallback} = require("./index");

const mode = process.argv.slice(2);
const command = `npx cross-env NODE_ENV=${mode} sequelize-cli db:migrate`;

exec(command, execCallback);