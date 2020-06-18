const pkg = require('../package')
const fs = require('fs.extra')
import path from 'path'
const port = process.argv[2] || 3000;
let logPath = `/data/logs/pm2/${pkg.name}_${port}`;
if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined){
    logPath = path.resolve(__dirname,'../../',`.${logPath}`);
    fs.mkdirRecursiveSync(logPath)
}
const config = {
    logPath,
    port,
    appName:pkg.name
}

export default config;