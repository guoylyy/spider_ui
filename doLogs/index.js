import Winston from 'winston'
import 'winston-daily-rotate-file'
import config from './logConfig'
import path from 'path'
export function errorLogs() {
    const winston = new Winston.Logger({
        transports: [
            new (Winston.transports.File)({//输出错误日志
                name: 'app-error-log',
                timestamp: () =>new Date().toLocaleString(),
                filename: path.join(config.logPath, `app.${config.appName}_${config.port}.error.log`),
                level: 'error'
            }),
        ],
        exitOnError: false
    })
    return winston;
}

export function infoLogs() {
    const winston = new Winston.Logger({//日常监控日志
        transports: [
            new (Winston.transports.DailyRotateFile)({
                name: 'app-dailyInfo-log',
                timestamp: () =>new Date().toLocaleString(),
                filename: path.join(config.logPath, `app.${config.appName}_${config.port}-%DATE%.log`),
                datePattern: 'YYYY-MM-DD',//YYYY-MM-DD HH:MM:SS
                maxSize: '20m',
                maxFiles: '7d'//string:14d:7天，int:5:保留5个文件
            })
        ]
    });
    return winston;
}