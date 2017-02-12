<template>
  <div class="page-home">
    <chead></chead>
    <cintro></cintro>
    <ani-picker></ani-picker>
    <ani-builder></ani-builder>
    <ani-app></ani-app>
    <cfooter></cfooter>
  </div>
</template>

<script>
import chead from './home/Head.vue'
import cintro from './home/Intro.vue'
import aniPicker from './home/AniPicker.vue'
import aniBuilder from './home/AniBuilder.vue'
import aniApp from './home/AniApp.vue'
import cfooter from '../components/footer.vue'
export default {
  name: 'page-home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { chead, cintro, aniPicker, aniBuilder, aniApp, cfooter }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@green: #42b983;
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
.page-home {
  text-align: center;
}
.btn-group {
  text-align: center;
  .btn {
    display: inline-block;
    padding: 10px 20px;
    margin: 5px;
    line-height: 20px;
    border-radius: 20px;
    cursor: pointer;
    /*border: 1px solid @green;*/
    background-color: #fff;
    color: @green;
    &.active {
      color: #fff;
      background-color: @green;
    }
  }
}
</style>
