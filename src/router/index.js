import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home'
import CssBuilder from 'pages/CssBuilder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/css-builder',
      name: 'CssBuilder',
      component: CssBuilder
    }
  ]
})
