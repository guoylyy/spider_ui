- models 接口封装
    CommonModel:node-fetch封装，用于node请求接口
    ApiController:提供了ajax的一些公共方法
- config 配置文件
- routes 路由层
- views  ejs
    only index.ejs 公共模板，动态加载静态资源
- src    react

webpack.config.js
   配置文件，存放打包地址等，一般情况下禁止修改，lockGit:true时禁止git提交
   preset:ie8时候需要引用低版本的react，react-dom,redux,具体版本参考pcw-react项目，index.ejs中react引用也需要更改
   
   
- 日志
   - 日志目录根地址
   开发模式下在项目目录的同层 /data/logs/pm2
   测试，生成环境在服务器根目录/data/logs/pm2/下
 - pm2 log:
 /data/logs/pm2/mini_gamecenter/error.log  监控进程异常退出
 /data/logs/pm2/mini_gamecenter/info.log   监控进程重启时间和当前的env
 
 - 接口报错log：
 /data/logs/pm2/mini_gamecenter/app.mini_gamecenter.error.log  接口500 && http.statue !== 200
 
 - 日常监控log(服务器端打点)
 /data/logs/pm2/mini_gamecenter/app.mini_gamecenter-2018-08-31.log  保留7天，打点需求根据需要来定

