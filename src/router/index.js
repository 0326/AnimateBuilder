import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home'
import CssPicker from 'pages/CssPicker'
import CssBuilder from 'pages/CssBuilder'
import AnimationBuilder from 'pages/AnimationBuilder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/css-picker',
      name: 'CssPicker',
      component: CssPicker
    }, {
      path: '/css-builder',
      name: 'CssBuilder',
      component: CssBuilder
    }, {
      path: '/app',
      name: 'app',
      component: AnimationBuilder
    }
  ]
})
