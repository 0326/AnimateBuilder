<template>
  <div class="ani-code-wrapper">
    <div class="class-list">class="animated {{aniName}}"</div>
    <pre class="pre-code" v-on:click="copyCode">
      <code id="J_CssCode" class="language-css"></code>
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
      aniCode: '\n\n/* this is css code, click to copy */'
    }
  },
  created () {
    bus.$on('cssBuilderAniSelected', event => {
      this.aniName = event.aniName
      this.aniCode = '\n' + event.aniCode
      let aniCode = Prism.highlight(this.aniCode, Prism.languages.css)
      $('#J_CssCode').html(aniCode)
    })

    bus.$on('cssBuilderAniParamChange', event => {
      let injectedCode = this.injectCode(event.cssProp, event.value)
      this.aniCode = injectedCode
      let aniCode = Prism.highlight(this.aniCode, Prism.languages.css)
      $('#J_CssCode').html(aniCode)
    })
  },
  mounted () {
    let aniCode = Prism.highlight(this.aniCode, Prism.languages.css)
    $('#J_CssCode').html(aniCode)
  },
  methods: {
    copyCode (e) {
      console.log('已copy代码')
    },
    // 将用户调整过的值更新到代码
    injectCode (cssProp, value) {
      let ijCode = this.aniCode
      if (ijCode.indexOf(cssProp) > 0) {
        const reg = new RegExp(cssProp + '.+;', 'ig')
        ijCode = ijCode.replace(reg, cssProp + ': ' + value + ';')
      }
      return ijCode
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
  position: relative;
  height: 100%;
  cursor: pointer;
  .class-list {
    position: absolute;
    left: 0px;
    top: 0;
    width: 100%;
    padding-left: 10px;
    line-height: 36px;
    border-bottom: 1px solid #fff;
    color: @green;
    background-color: #233;
  }
  .pre-code {
    margin: 0 0 0 10px;
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
