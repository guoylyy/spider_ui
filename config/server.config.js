const pkg = require('../package')
const path = require('path')
const development = {
    apiUrl: 'http://apiUrl',
}

const fat = {
    apiUrl: 'http://apiUrl',
}

const production = {
    apiUrl: 'http://apiUrl',
}

const argv = process.argv;
const env = process.env.NODE_ENV || pkg.config.env.toLowerCase()
const envConfigMap = { development, fat, production }
const envConfig = envConfigMap[env] || envConfigMap.production
const port = argv[argv.length-1];
const logPath = `/data/logs/pm2/${pkg.name}_${port}`;
const config = Object.assign({
    port:port,
    appName: `${pkg.name}_${port}`,
    logPath: env === 'development' ? path.resolve(process.cwd(),`..${logPath}`) : logPath,
    title: 'title',
    description: 'description',
    keywords: 'keywords',
}, envConfig)

module.exports = config

