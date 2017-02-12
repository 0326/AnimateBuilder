<template>
 <div class="ani-play-wrapper">
    <div class="ani-logo-box">
      <logo id="J_AniLogo"></logo>
    </div>
    <div class="param-box">
      <div v-for="(item, idx) in aniParams" class="range-input-box" :name="item.name">
        <label>{{item.name}}</label>
        <input
          v-on:change="rangeChange"
          :type="item.type"
          :step="item.step"
          :idx="idx"
          :name="item.name"
          :min="item.min"
          :max="item.max"
          :value="item.value"/>
        <span>{{item.value}}</span>
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
      msg: 'Welcome to Your Vue.js App',
      ananiName: '',
      aniParams: [{
        name: '动画时长',
        type: 'range',
        step: '0.05',
        cssProp: 'animation-duration',
        min: 0.75,
        max: 10,
        value: '1'
      }, {
        name: '循环次数',
        type: 'range',
        step: '1',
        cssProp: 'animation-fff',
        min: 1,
        max: 10,
        value: '1'
      }, {
        name: '无线循环',
        type: 'checkbox',
        cssProp: 'animation-infinie'
      }]
    }
  },
  created () {
    bus.$on('cssBuilderAniSelected', event => {
      this.aniName = event.aniName
      // 重新执行动画
      util.aniCss($('#J_AniLogo'), this.aniName)
      // 重新设置参数
      // TODO
    })
  },
  components: { Logo },
  methods: {
    parseCode () {

    },
    rangeChange (e) {
      const $0 = $(e.target)
      let time = $0.val()
      let currInput = this.aniParams[$0.attr('idx')]
      let cssProp = currInput.cssProp
      let cssVal = this.addPt(cssProp, time)

      currInput.value = time

      bus.$emit('cssBuilderAniParamChange', {
        cssProp: cssProp,
        value: cssVal
      })

      $('#J_AniLogo').css(cssProp, cssVal)
      util.aniCss($('#J_AniLogo'), this.aniName, () => {
        $('#J_AniLogo').css(cssProp, '')
      })
    },
    addPt (cssProp, value) {
      let pt = 's'
      if (cssProp === 'animation-duration') {
        pt = 's'
      }
      return value + pt
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@green: #42b983;
@deep: #35495E;
.ani-logo-box {
  margin: 80px 0;
}
.range-input-box {
  display: flex;
  margin-bottom: 16px;

  &.disabled {
    color: #aaa;
    input {
      cursor: default;
    }
  }
  label {
    flex: 1;
    text-align: right;
  }
  span{
    flex: 1;
    text-align: left;
  }
  input {
    flex: 2;
    margin: 0 10px;
    cursor: pointer;
  }
}
</style>
