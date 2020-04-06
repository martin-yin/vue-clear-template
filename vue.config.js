/* eslint-disable @typescript-eslint/no-var-requires */
const CompressionPlugin = require('compression-webpack-plugin')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')
const version = require('./package.json').version

module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
    })

    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
    if (process.env.NODE_ENV === 'production') {
      const externals = {
        vue: 'Vue',
        axios: 'axios',
        'element-ui': 'ELEMENT',
        'vue-router': 'VueRouter',
        vuex: 'Vuex'
      }
      config.externals(externals)
      const cdn = {
        css: [
        ],
        js: [
          // vue
          'https://cdn.bootcss.com/vue/2.6.11/vue.min.js',
          // vue-router
          'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
          // vuex
          'https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js',
          // axios
          'https://cdn.bootcss.com/axios/0.19.2/axios.min.js'
        ]
      }
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdn
          return args
        })
      config
        .plugin('compression')
        .use(CompressionPlugin, [{
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          cache: true
        }])

      config.plugin('sentry').use(
        SentryWebpackPlugin, [{
          release: `vue-clear-teamplate@${version}`,
          include: './dist/js', // 需要上传到sentry服务器的资源目录,会自动匹配 js 以及 map 文件
          urlPrefix: '~/js',
          ignoreFile: '.sentrycliignore',
          configFile: 'sentry.properties', // 不用改
          ignore: ['node_modules'] // 忽略文件目录, 当然我们在 inlcude 中制定了文件路径,这个忽略目录可以不加
        }]
      )
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.douban.com/v2',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
