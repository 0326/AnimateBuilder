<template>
  <div class="logo-wrapper">
    <div class="logo-box">
      <span class="large">A</span><span class="small">b</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less" scoped>
  .logo-wrapper {
    margin: 0 auto;
    font: 50px/1.6 Arial, sans-serif;
    .logo-box {
      width: 1.6em;
      height: 1.6em;
      padding: .1em;
      margin: 0 auto;
      font-weight: bolder;
      color: #41B883;
      border: .1em solid #41B883;
      background-color: #35495E;
      /*border-radius: 50%;*/
    }
    .large {
      font-size: 1em;
    }
    .small {
      font-size: .76em;
    }
  }
</style>
