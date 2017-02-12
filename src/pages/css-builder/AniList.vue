<template>
  <div class="ani-list-wrapper">
    <div class="ani-list-content" v-for="anis in aniList">
      <div class="ani-type-name">{{anis.type}}</div>
      <ul class="anis-list">
        <li v-for="ani in anis.list" v-on:click.capture="aniClick" :type="anis.type">{{ani.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import bus from '../../eventBus.js'
import util from '../../util.js'
import animation from '../../assets/animation-css/index.js'

export default {
  name: 'ani-list',
  methods: {
    aniClick (e) {
      const $0 = $(e.target)
      const aniType = $0.attr('type')
      const aniName = $0.text()
      const aniCode = animation.getAniCode(aniType, aniName) + animation.aniBase
      util.aniCss($0, 'pulse')
      bus.$emit('cssBuilderAniSelected', {
        aniName,
        aniType,
        aniCode
      })
    }
  },
  data () {
    return {
      aniList: animation.aniList
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
