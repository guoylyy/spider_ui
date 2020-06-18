const path = require('path')
const config = require('../server.config.js')
const fs = require('fs.extra')
fs.mkdirRecursiveSync(config.logPath)
const pm2Config = {
    apps : [{
        name				: config.appName,
        script				: path.join(__dirname, '../../bin/www'),
        args                : [config.port],
        watch				: false,
        max_memory_restart	: '10G',
        instances			: 'max',
        exec_mode			: 'cluster',
        log_date_format		: 'YYYY-MM-DD HH:mm:ss',
        error_file			: `${config.logPath}/error.log`,
        out_file			: `${config.logPath}/info.log`,
        env_production      : {"NODE_ENV": "production"},
        env_fat             : {"NODE_ENV": "fat"},
        merge_logs			: true
    }]
}

module.exports = pm2Config;