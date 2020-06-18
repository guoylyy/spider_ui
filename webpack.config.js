module.exports = {
  lockGit: false,
  preset: 'chrome',
  type: 'node-ssr',
  devPath: 'http://127.0.0.1:8080/',//本地开发环境
  fatPath: 'http://xyx.game.iqiyi.com/static/',//测试环境
  cdnPath: 'http://static.g.iqiyi.com/xyxgamecenter/',//生产环境
  useTempPath:true,//此设置为true的时候，在生产环境下，生成dist_ejs_temp目录，等上传完cdn之后再执行igame rename应用新的姿态资源，保证线上无线切换。
  sourceMap:'',//webpack-devtool自选，默认空，且只在dev模式下生成    '#source-map'
  devBuildOnly:[],//dev模式下生成所有页面打包很慢，提供选择打包页面的参数，Array must
  nodeServerEntry: {
    'gameHome': './src/pages/GameHome/nodeEntry.js',
  },
  favicon: './src/icon/favicon32.ico',
  webpack: function (config) {
    config.entry = {
      'gameHome': './src/pages/GameHome/index.js',
    }
    return config
  },
  devServer: {
    hot: false,
    port: 8080,
    publicPath: 'http://127.0.0.1:8080/',
  }
}
