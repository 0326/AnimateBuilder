<template>
  <div class="css-picker-wrapper">
    <h1>Use Animation Builder App</h1>
    <p>If you wanna a simple css animation, you can choose one type animation, and we'll generate the animation code for you. Maybe what you want is some pice of css code , rather ran an css or js animation libery. Here is the demo:</p>
    <div class="css-picker-demo">
      <div class="btn-group J_AniGroup">
        <div v-for="(type, idx) in animations"
          v-bind:class="{'btn active':1, selected: !idx}"
          v-on:click="runAni"
          :idx="idx">{{type.name}}</div>
        <div href="#" class="btn active" v-on:click="runAni">more effects...</div>
      </div>
      <div class="code-wrapper">
        <div class="code-content code-css">
          <pre>
            {{currCode}}
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../../components/Logo.vue'
export default {
  name: 'ani-app',
  data () {
    return {
      animations: [{
        name: 'callout.pulse',
        code: '\n{\n  transform: scale(2);\n  transition: 2s;\n}'
      }, {
        name: 'callout.tada',
        code: '\n{\n  transform: scale(3);\n  transition: 2s;\n}'
      }, {
        name: 'callout.shake',
        code: '\n{\n  transform: scale(24);\n  transition: 2s;\n}'
      }, {
        name: 'callout.flash',
        code: '\n{\n  transform: scale(3);\n  transition: 2s;\n}'
      }, {
        name: 'transition.flipBounceXIn',
        code: '\n{\n  transform: scale(3);\n  transition: 2s;\n}'
      }, {
        name: 'transition.flipXIn',
        code: '\n{\n  transform: scale(24);\n  transition: 2s;\n}'
      }, {
        name: 'transition.slideLeftIn',
        code: '\n{\n  transform: scale(24);\n  transition: 2s;\n}'
      }, {
        name: 'transition.bounceIn',
        code: '\n{\n  transform: scale(222);\n  transition: 2s;\n}'
      }],
      currCode: null
    }
  },
  components: { logo },
  methods: {
    runAni (event) {
      const $el = $(event.target)
      $('.J_AniGroup').find('.btn').removeClass('selected')
      $el.addClass('selected').velocity($el.text(), { duration: 650 })
      this.currCode = this.animations[$el.attr('idx')].code
      if ($el.attr('href')) {
        location.href = $el.attr('href')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@green: #42b983;
@pink: #ff5252;
h1 {
  margin-bottom: 30px;
}
p {
  max-width: 860px;
  margin: 20px auto;
}
.css-picker-wrapper {
  margin: 0 auto;
  background-color: #111;
  padding: 50px 20px;
  color: #fff;
}
.btn {
  display: inline-block !important;
  padding: 3px 8px;
  &.selected {
    background-color: @pink;
    text-decoration: none;
  }
}
.code-wrapper {
  display: inline-block;
  width: 400px;
  .code-content {
    height: 140px;
    max-width: 300px;
    margin-left: 30px;
    overflow-y: scroll;
    text-align: left;
    padding: 10px;
    border: 2px solid @pink;
    background-color: #222;
    color: #8ab2f2;
  }
  pre {
    margin: 0;
  }
}
.css-picker-demo {
  text-align: center;
  .btn-group {
    width: 400px;
    display: inline-block;
    text-align: right;
    vertical-align: top;
  }
}
</style>
