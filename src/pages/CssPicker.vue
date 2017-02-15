<template>
  <div class="css-picker-page">
    <app-menu></app-menu>
    <div class="flex-wrapper">
      <div class="flex-1 col-ani-code">
        <ani-code></ani-code>
      </div>
      <div class="flex-1 col-ani-play">
        <ani-play></ani-play>
      </div>
      <div class="flex-1 col-ani-list">
        <ani-list></ani-list>
      </div>
    </div>
    <cfooter class="footer"></cfooter>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import cfooter from '../components/footer.vue'
import AppMenu from '../components/AppMenu.vue'
import AniCode from './css-builder/AniCode.vue'
import AniList from './css-builder/AniList.vue'
import AniPlay from './css-builder/AniPlay.vue'
// import anidata from './css-builder/Anidata.js'

// console.log(anidata)
export default {
  name: 'page-css-picker',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { Logo, AniCode, AniList, AniPlay, AppMenu, cfooter }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@green: #42b983;
@deep: #35495E;
html, body, #app, .css-picker-page, .flex-wrapper {
  height: 100%;
  min-height: 600px;
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

.css-picker-page {
  position: relative;
  margin: 0 auto;
  .footer {
    display: none;
  }
}
.flex-wrapper {
  display: flex;
  box-sizing: border-box;
  .flex-1 {
    flex: 1;
    min-width: 330px;
    box-sizing: border-box;
    border: 1px solid #eee;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
.ani-logo-box {
  margin: 80px 0;
}
.col-ani-code {
  background-color: rgb(39, 40, 34);
}
.col-ani-play {
  text-align: center;
}
.col-ani-list {
  color: #fff;
  text-align: center;
  background-color: @deep;
}
</style>
