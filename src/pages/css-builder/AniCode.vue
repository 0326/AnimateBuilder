<template>
 <div class="ani-code-wrapper">
    <pre v-on:click="copyCode">
      <code id="J_CssCode" class="language-css">/* this is css code, click to copy */</code>
    </pre>
  </div>
</template>

<script>
import bus from '../../eventBus.js'
// import util from '../../util.js'

export default {
  name: 'ani-code',
  data () {
    return {
      aniName: '',
      aniCode: ''
    }
  },
  created () {
    bus.$on('cssBuilderAniSelected', event => {
      this.aniName = event.aniName
      this.aniCode = event.aniCode
      var aniCode = Prism.highlight(event.aniCode, Prism.languages.css)
      $('#J_CssCode').html(aniCode)
    })
  },
  methods: {
    copyCode (e) {
      console.log('已copy代码')
    }
  },
  components: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@green: #42b983;
@deep: #35495E;
.ani-code-wrapper {
  height: 100%;
  cursor: pointer;
  #J_CssCode {
    height: 100%;
    text-align: left;
  }
  .language-css {
    margin: 0;
    border-radius: 0;
    height: 100%;
    font-size: 12px;
    box-sizing: border-box;
  }
}
</style>
