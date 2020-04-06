import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Report from './utils/report'

const version = require('../package.json').version

Vue.config.productionTip = false
const IS_DEV = process.env.NODE_ENV === 'development'
if (!IS_DEV) {
  const sentry = Report.getInstance(Vue, {
    dsn: 'https://e12da137872f45ef8edc73a023076c4d@sentry.io/5189810',
    release: `vue-clear-teamplate@${version}`,
    environment: 'Prod'
  })
  window.$sentry = sentry
  // 全局监控 Vue errorHandler
  Vue.config.errorHandler = (error, vm, info) => {
    window.$sentry.log({
      error,
      type: 'vue errorHandler',
      vm,
      info
    })
  }
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
