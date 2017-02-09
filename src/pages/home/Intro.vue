<template>
  <div class="intro-wrapper">
      <div class="intro-item" v-for="item in intro">
        <h2>{{item.title}}</h2>
        <p>{{item.desc}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
      intro: [{
        title: 'Approachable',
        desc: 'Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!'
      }, {
        title: 'Versatile',
        desc: 'Simple, minimal core with an incrementally adoptable stack that can handle apps of any scale.'
      }, {
        title: 'Performant',
        desc: '17kb min+gzip Runtime Blazing Fast Virtual DOM Minimal Optimization Efforts'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@green: #42b983;
h2 {
  color: @green;
}
p {
  color: #999;
}
.intro-wrapper {
  padding: 100px 0;
  text-align: center;
}
.intro-item {
  display: inline-block;
  width: 240px;
  height: 200px;
  padding: 0 20px;
  vertical-align: top;
}
</style>
