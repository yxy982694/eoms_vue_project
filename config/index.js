'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/': {
           target: 'http://10.89.138.133/',
           changeOrigin: true,
           logLevel: 'debug'
       },
    },
    // proxyTable: {
    //   '/haeoms': {
    //       // target: 'http://192.168.139.17:9091/',
    //       // target: 'http://10.89.138.133:9011/',
    //       // target: 'http://10.89.138.133:9012/',
    //       // target: 'http://10.89.138.133:9012/',
    //       target: 'http://10.89.135.117:9091/',
    //       // http://10.217.1.31:9082/workbench/menu/getMenuTree?type=050101
    //       // target: 'http://192.168.139.3:9014/',
    //       // target: 'http://10.89.138.133:9091/',
    //       // target: 'http://10.217.1.31:8080/',
    //       // target: 'http://10.217.1.31:9082/',
    //       // target: 'http://192.168.139.10:9011/',
    //       // target: 'http://10.89.138.145:9091/',
    //       changeOrigin: true,
    //       logLevel: 'debug',
    //       pathRewrite: {
    //         '^/haeoms': '/haeoms'
    //       }
    //    },
    // },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    //index.html打包后的文件名
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),// 打包后,资源在硬盘的存储根路径
    assetsSubDirectory: './',// 打包后css,js,图片等的文件名,把这个路径添加到名称前面
    assetsPublicPath: './',// 图片,css,js等被引入的路径
    // assetsSubDirectory: 'static',
    // assetsPublicPath: './',

    /**
     * Source Maps
     */
    productionSourceMap: false,
    // productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}