import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const HomeRoute = {
  path: '/',
  name: 'Home',
  component: Home
}

let routes: RouteConfig[] = [
  HomeRoute,
  {
    path: '*',
    redirect: '/'
  }
]

const routerContext = require.context('./', true, /index\.ts$/)
routerContext.keys().forEach(route => {
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  routes = [...routes, ...(routerModule.default || routerModule)]
})

export default new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
