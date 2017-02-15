// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Toast from 'vue-easy-toast'

Vue.use(Toast)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `<div id="app">
    <transition name="slide-left">
      <router-view></router-view>
    </transition>
  </div>`
})
