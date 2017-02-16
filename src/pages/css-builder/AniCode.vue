<template>
  <div class="ani-code-wrapper">
    <div class="class-list">class="animated {{aniName}}"</div>
    <pre class="pre-code" :data-clipboard-text="aniCode">
      <code id="J_CssCode" class="language-css"></code>
    </pre>
  </div>
</template>

<script>
import bus from '../../eventBus.js'
import Clipboard from 'clipboard'
// import toast from '../../components/Toast.vue'
import util from '../../util.js'

export default {
  name: 'ani-code',
  data () {
    return {
      aniName: '',
      aniCode: '\n\n/* this is css code, click to copy */\n/* 这里是css代码，点击复制到粘贴板 */'
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

    /* eslint-disable no-new */
    new Clipboard('.pre-code').on('success', (e) => {
      util.aniCss($('pre.pre-code'), this.aniName.replace('infinite', ''))
      this.$toast('代码已复制', {
        duration: 1000,
        className: ['et-info', 'animated', 'fadeInLeft'],
        horizontalPosition: 'left',
        verticalPosition: 'bottom'
      })
      e.clearSelection()
    }).on('error', function (e) {
      console.log('该浏览器不支持自动复制，请手动复制到粘贴板')
    })
  },
  mounted () {
    let aniCode = Prism.highlight(this.aniCode, Prism.languages.css)
    $('#J_CssCode').html(aniCode)
  },
  methods: {
    copyCode () {

    },
    // 将用户调整过的值更新到代码
    injectCode (cssProp, value) {
      let ijCode = this.aniCode

      if (cssProp === 'animation-infinite') {
        if (value) {
          this.aniName += ' infinite'
          ijCode = ijCode.replace(/\n {2}animation-iteration-count: \d+;/, '')
          ijCode += `\n.animated.infinite {\n  animation-iteration-count: infinite;\n}`
        } else {
          this.aniName = this.aniName.replace(' infinite', '')
          ijCode = ijCode.replace(`\n.animated.infinite {\n  animation-iteration-count: infinite;\n}`, '')
        }
        return ijCode
      }

      // 在代码中匹配属性，匹配到直接替换，否则新增
      if (ijCode.indexOf(cssProp) > 0) {
        const reg = new RegExp(cssProp + '.+;', 'ig')
        ijCode = ijCode.replace(reg, cssProp + ': ' + value + ';')
      } else {
        const reg = /\n\.animated {\n/
        ijCode = ijCode.replace(reg, '\n.animated {\n' + `  ${cssProp}: ${value};\n`)
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
