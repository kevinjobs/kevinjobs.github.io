function execCallback(err, stdout, stderr, cb=null) {
    if (err) {
        console.error(err);
        return;
    }

    if (stderr) {
        console.error(stderr);
        return;
    }

    console.log(stdout);

    if (cb) cb();
}

module.exports = {
    execCallback
};