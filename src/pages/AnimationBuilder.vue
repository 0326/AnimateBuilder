<template>
  <div class="css-builder-page">
    <app-menu></app-menu>
    <div class="css-builder-wrapper">
    </div>
    <cfooter class="footer"></cfooter>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import AppMenu from '../components/AppMenu.vue'
import cfooter from '../components/footer.vue'
// console.log(anidata)
export default {
  name: 'page-animation-builder',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { Logo, AppMenu, cfooter }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@green: #42b983;
@deep: #35495E;
html, body, #app, .css-builder-page, .flex-wrapper {
  height: 100%;
  min-height: 600px;
  text-align: center;
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
  color: @green;
}
.css-builder-wrapper {
  height: 100%;
  background: #000 url(//7xp4vm.com1.z0.glb.clouddn.com/todbg.jpg) no-repeat;
  background-size: cover;
}
</style>
