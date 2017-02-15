<template>
  <div class="file-input-wrapper" >
    <input v-on:click="uploadImg" v-on:change="fileChange" type="file" accept="image/png">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    text: String,
    default: '上传图片'
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  p {
    margin: 0;
  }
</style>
