import express from 'express'
import compression from 'compression'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import routes from './routes'
import { errorLogs, infoLogs } from './doLogs';

const app = express()

//错误日志
app.logger = errorLogs();
//监控日志
app.dailyInfo = infoLogs();

app.use(helmet({
    hsts: false,
}))
app.use(compression())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json({
    limit: '10MB'
}))
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(cookieParser())

app.use((req, res, next) => {
    res.set('Cache-Control','no-cache, no-store, must-revalidate');
    res.set('Pragma','no-cache');
    res.set('Expires','0');
    next()
})


app.use('/_api', routes.webapi.default);
app.use('/', routes.commonRouter.default);

if(process.env.NODE_ENV === "fat" || process.env.NODE_ENV === undefined){
    app.use('/static', express.static(path.join(__dirname, './dist')));
}

app.use(function (req, res, next) {
    return res.redirect('/exception/404')
})
app.use(function (err, req, res, next) {
    return res.send(err.message + '\n' + err.stack).status(err.status || 500)
})


export default app
