<template>
  <div class="ani-list-wrapper">
    <div class="ani-list-content" v-for="anis in aniList">
      <div class="ani-type-name">{{anis.type}}</div>
      <ul class="anis-list">
        <li v-for="ani in anis.list" v-on:click.capture="aniClick">{{ani}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import bus from '../../eventBus.js'
import util from '../../util.js'
export default {
  name: 'ani-list',
  methods: {
    aniClick (e) {
      const $0 = $(e.target)
      const aniName = $0.text()
      util.aniCss($0, 'pulse')
      bus.$emit('cssBuilderAniSelected', aniName)
    }
  },
  data () {
    return {
      aniList: [{
        type: 'Attention Seekers',
        list: [
          'bounce',
          'flash',
          'pulse',
          'rubberBand',
          'shake',
          'headShake',
          'swing',
          'tada',
          'wobble',
          'jello'
        ]
      }, {
        type: 'Bouncing Entrances',
        list: [
          'bounceIn',
          'bounceInDown',
          'bounceInLeft',
          'bounceInRight',
          'bounceInUp'
        ]
      }, {
        type: 'Bouncing Exits',
        list: [
          'bounceOut',
          'bounceOutDown',
          'bounceOutLeft',
          'bounceOutRight',
          'bounceOutUp'
        ]
      }, {
        type: 'Fading Entrances',
        list: [
          'fadeIn',
          'fadeInDown',
          'fadeInDownBig',
          'fadeInLeft',
          'fadeInLeftBig',
          'fadeInRight',
          'fadeInRightBig',
          'fadeInUp',
          'fadeInUpBig'
        ]
      }, {
        type: 'Fading Exits',
        list: [
          'fadeOut',
          'fadeOutDown',
          'fadeOutDownBig',
          'fadeOutLeft',
          'fadeOutLeftBig',
          'fadeOutRight',
          'fadeOutRightBig',
          'fadeOutUp',
          'fadeOutUpBig'
        ]
      }, {
        type: 'Flippers',
        list: [
          'flipInX',
          'flipInY',
          'flipOutX',
          'flipOutY'
        ]
      }, {
        type: 'lightSpeed',
        list: [
          'lightSpeedIn',
          'lightSpeedOut'
        ]
      }, {
        type: 'Rotating Entrances',
        list: [
          'rotateIn',
          'rotateInDownLeft',
          'rotateInDownRight',
          'rotateInUpLeft',
          'rotateInUpRight'
        ]
      }, {
        type: 'Rotating Exits',
        list: [
          'rotateOut',
          'rotateOutDownLeft',
          'rotateOutDownRight',
          'rotateOutUpLeft',
          'rotateOutUpRight'
        ]
      }, {
        type: 'Zooming Entrances',
        list: [
          'zoomIn',
          'zoomInDown',
          'zoomInLeft',
          'zoomInRight',
          'zoomInUp'
        ]
      }, {
        type: 'Zooming Exits',
        list: [
          'zoomOut',
          'zoomOutDown',
          'zoomOutLeft',
          'zoomOutRight',
          'zoomOutUp'
        ]
      }, {
        type: 'Sliding Entrances',
        list: [
          'slideInDown',
          'slideInLeft',
          'slideInRight',
          'slideInUp'
        ]
      }, {
        type: 'Sliding Exits',
        list: [
          'slideOutDown',
          'slideOutLeft',
          'slideOutRight',
          'slideOutUp'
        ]
      }, {
        type: 'Specials',
        list: [
          'hinge',
          'rollIn',
          'rollOut'
        ]
      }]
    }
  }
}
</script>

<style lang="less" scoped>
@green: #42b983;
@deep: #323F4D;
.ani-list-wrapper {
  box-sizing: border-box;
  height: 100%;
  padding-bottom: 100px;
}
.ani-list-content:last-child {
  margin-bottom: 100px;
}
.ani-type-name {
  padding: 10px 0 0 10px;
  color: #39E1CF;
  line-height: 40px;
  font-size: 20px;
  text-align: left;
}
.anis-list {
  margin: 0;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  li {
    flex: 1;
    display: inline-block;
    margin: 4px;
    padding: 5px 10px;
    font-size: 16px;
    border: 1px solid @green;
    box-sizing: border-box;
    cursor: pointer;
    transition: all .5s;
    &:hover {
      background-color: @green;
      border-color: #fff;
      color: #fff;
    }
  }
}
</style>
