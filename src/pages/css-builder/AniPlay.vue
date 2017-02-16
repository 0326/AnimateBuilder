<template>
 <div class="ani-play-wrapper">
    <div class="ani-logo-box">
      <div class="tips" v-bind:style="{lineHeight: canvasHeight + 'px'}">
        上传图片
        <input v-on:click="uploadImg" v-on:change="fileChange" type="file" accept="image/*">
      </div>
      <canvas v-show="imgFile" id="J_ImgCanvas" class="J_AniLogo img-canvas" width="100px" height="100px"></canvas>
      <logo v-show="!imgFile" class="J_AniLogo"></logo>
    </div>
    <div class="param-box">
      <div v-for="(item, idx) in aniParams" class="range-input-box" :name="item.name">
        <label>{{item.name}}</label>
        <input
          v-on:change="rangeChange"
          :css-prop="item.cssProp"
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
      isLoadingFile: false,
      imgFile: null,
      canvasHeight: 100,
      msg: 'Welcome to Your Vue.js App',
      aniName: '',
      aniCssObj: { },
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
        cssProp: 'animation-iteration-count',
        min: 1,
        max: 10,
        value: '1'
      }, {
        name: '无限循环',
        type: 'checkbox',
        cssProp: 'animation-infinite'
      }]
    }
  },
  created () {
    bus.$on('cssBuilderAniSelected', event => {
      // 新动画选择后需要重置参数
      this.aniCssObj = {}
      this.aniParams.forEach((item) => {
        if (item.type === 'range') {
          item.value = 1
        }
      })

      this.aniName = event.aniName
      // 重新执行动画
      util.aniCss($('.J_AniLogo'), this.aniName)
    })
  },
  components: { Logo },
  methods: {
    parseCode () {

    },
    rangeChange (e) {
      const $0 = $(e.target)
      const $logo = $('.J_AniLogo')
      let val = $0.val()
      let currInput = this.aniParams[$0.attr('idx')]

      let cssProp = currInput.cssProp
      let cssVal = null
      switch (cssProp) {
        case 'animation-duration':
          cssVal = val + 's'
          break
        case 'animation-iteration-count':
          cssVal = val
          break
        case 'animation-infinite':
          cssVal = e.target.checked
          cssVal ? $('input[css-prop="animation-iteration-count"]')[0].disabled = true : $('input[css-prop="animation-iteration-count"]')[0].disabled = false
          $logo.toggleClass('infinite')
          break
      }

      currInput.value = val

      bus.$emit('cssBuilderAniParamChange', {
        cssProp: cssProp,
        value: cssVal
      })

      this.aniCssObj[cssProp] = cssVal
      $logo.css(this.aniCssObj)
      util.aniCss($logo, this.aniName, () => {
        $logo.attr('style', '')
      })
    },
    uploadImg (e) {
      if (this.isLoadingFile) {
        console.log('正在打开...')
        return e.preventDefault()
      } else {
        this.isLoadingFile = true
        setTimeout(() => {
          this.isLoadingFile = false
        }, 10000)
      }
    },
    fileChange (e) {
      let file = e.target.files[0]
      console.log('change..')
      this.isLoadingFile = false

      if (!file) {
        return
      }

      if (!file.type.match('image.*')) {
        return alert('请上传图片文件！')
      }
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (obj) => {
        this.renderImg(obj)
      }
    },
    renderImg (obj) {
      let canvasEl = document.getElementById('J_ImgCanvas')
      let ctx = canvasEl.getContext('2d')
      let currImg = new Image()
      currImg.src = obj.target.result
      currImg.onload = (e) => {
        // 注意缩放大小，限制最大宽高200
        if (currImg.width >= 200 && currImg.width >= currImg.height) {
          canvasEl.width = 200
          canvasEl.height = 200 * currImg.height / currImg.width
        } else if (currImg.height > 200 && currImg.height > currImg.width) {
          canvasEl.height = 200
          canvasEl.width = 200 * currImg.width / currImg.height
        } else {
          canvasEl.width = currImg.width
          canvasEl.height = currImg.height
        }
        ctx.drawImage(currImg, 0, 0, canvasEl.width, canvasEl.height)
        this.imgFile = currImg
        this.canvasHeight = canvasEl.height
      }
    } // end
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@green: #42b983;
@deep: #35495E;
.ani-logo-box {
  position: relative;
  display: inline-block;
  margin: 80px 0;
  cursor: pointer;
  /*.img-canvas {
    border: 6px solid @green;
  }*/
  .tips {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 18px;
    line-height: 100px;
    color: #fff;
    background-color: rgba(0, 0, 0, .6);
    input {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0;
      z-index: 2;
      cursor: pointer;
    }
  }
  &:hover .tips {
    display: block;

  }
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
