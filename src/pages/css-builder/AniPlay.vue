<template>
 <div class="ani-play-wrapper">
    <div class="ani-logo-box">
      <logo id="J_AniLogo"></logo>
    </div>
    <div class="param-box">
      <div class="range-input-box">
        <label for="r1">sdfds</label>
        <input id="r1" type="range" min="0" max="100" value="70"/>
        <span>22</span>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../../components/Logo.vue'
import bus from '../../eventBus.js'
import util from '../../util.js'

export default {
  name: 'ani-play',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    bus.$on('cssBuilderAniSelected', event => {
      const $0 = $('#J_AniLogo')
      util.aniCss($0, event)
      console.log(document.getElementById('J_AniLogo').style)
    })
  },
  components: { Logo }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@green: #42b983;
@deep: #35495E;
.ani-logo-box {
  margin: 80px 0;
}

</style>
