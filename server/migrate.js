const {exec} = require("child_process");

const mode = process.argv.slice(2)

exec(`npx cross-env NODE_ENV=${mode} sequelize-cli db:migrate`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }

  if (stderr) {
    console.error(stderr);
    return;
  }

  console.log(stdout);
})