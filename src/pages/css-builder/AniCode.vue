<template>
 <div class="ani-code-wrapper">
    <pre v-on:click="copyCode"><code  class="language-css">{{msg}}</code></pre>
  </div>
</template>

<script>
import bus from '../../eventBus.js'
import animationCss from '../../assets/animation-css/index.js'

export default {
  name: 'ani-code',
  data () {
    return {
      msg: `@keyframes bounce {
  from, 20%, 53%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
}

.bounce {
  animation-name: bounce;
  transform-origin: center bottom;
}
`
    }
  },
  created () {
    console.log(animationCss)
    bus.$on('cssBuilderAniSelected', event => {
      console.log('ply', event)
    })
  },
  methods: {
    copyCode (e) {
      console.log('已copy代码')
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
  cursor: pointer;
  .language-css {
    margin: 0;
    border-radius: 0;
    height: 100%;
    font-size: 12px;
    box-sizing: border-box;
  }
}
</style>
