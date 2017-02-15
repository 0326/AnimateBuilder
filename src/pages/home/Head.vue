<template>
  <div class="head-wrapper">
    <div class="head-content">
      <ul class="menu-list">
        <li><a href="#" target="_blank">HOME</a></li>
        <li><a href="#" target="_blank">DOCUMENT</a></li>
        <li><a href="#" target="_blank">BLOG</a></li>
        <li><a href="#" target="_blank">ABOUT</a></li>
      </ul>

      <logo class="animated bounceInUp" ></logo>
      <h1>Animation Builder</h1>
      <p>Inspired by Adobe Creative Cloud, Velocity.js and Vue.js.</p>
      <p>Making the animation workflow between UED and FE easier.</p>

      <div class="btn-group">
        <a class="btn active" href="#/css-picker">GET STARTED</a>
        <a class="btn active" href="https://github.com/0326/AnimateBuilder">GITHUB</a>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../../components/Logo.vue'
export default {
  name: 'head',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { logo }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@green: #42b983;
h1 {
  margin-bottom: 30px;
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
  color: #fff;
  text-decoration: none;
}
.head-wrapper {
  background: #000 url(//7xp4vm.com1.z0.glb.clouddn.com/headbg.5b52162.jpg) no-repeat;
  background-size: cover;
}
.head-content {
  position: relative;
  padding: 150px 0 100px 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
}
.menu-list {
  position: absolute;
  right: 10px;
  top: 10px;
  a {
    font-size: 16px;
    &:hover {
      color: @green;
    }
  }
}
</style>
