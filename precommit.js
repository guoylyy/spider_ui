const exec = require('child_process').exec;
const lockGit = require('./webpack.config.js').lockGit || false;

exec('git diff HEAD --name-only| grep webpack.config.js', (error, stdout) => {
    var name = stdout.trim();
    if(name === "webpack.config.js" && lockGit){
        console.log('webpack.config.js中lockGit为true时不可修改webpack.config.js内容!禁止commit!');
        process.exit(1);
    }

    if(error !== null){
        console.log(`exec error: ${error}`)
    }
})