<template>
  <div class="app-menu-wrapper">
    <div class="head-menu">
      <a v-for="nav in navs" :href="nav.url" :class="{current: hash.indexOf(nav.url) >= 0}">{{nav.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-menu',
  data () {
    let hash = location.hash
    console.log(hash)
    let navs = [{
      name: 'CSS Animation Picker',
      url: '#/css-picker'
    }, {
      name: 'CSS Animation Builder',
      url: '#/css-builder'
    }, {
      name: 'Animation Builder App',
      url: '#/app'
    }]
    return {
      hash,
      navs
    }
  }
}
</script>

<style lang="less" scoped>
@green: #42b983;
.app-menu-wrapper {
  height: 80px;
}
.head-menu {
  position: absolute;
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  a {
    margin: 0 0 0 10px;
    color: #666;
    text-decoration: none;
    &::after {
      content: '/';
      padding-left: 10px;
    }
    &:last-child::after {
      content: '';
      padding: 0;
    }
  }
  a.current {
    color: @green;
  }
}
</style>
