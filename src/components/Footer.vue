<template>
  <div class="footer-wrapper">
    <h2>Awesome Works</h2>
    <ul>
      <li><a href="http://animateplus.com/easing-visualizer/#">Animate Plus</a></li>
      <li><a href="https://daneden.github.io/animate.css/#">Animate.css</a></li>
    </ul>
    <h2>Friend Links</h2>
    <ul>
      <li><a href="http://vuejs.org/" target="_blank">Vue.js</a></li>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div class="bottom-footer">
      <p>Copyright © 2016-2017 @动感小前端</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'com-footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.bottom-footer {
  padding: 30px 0;
  background-color: #eee;
  /*background-color: #060303;*/
  text-align: center;
  /*color: #fff;*/
}
</style>
