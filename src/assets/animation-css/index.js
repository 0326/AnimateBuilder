import bounce from './attention_seekers/bounce.js'

export default {
  base: `.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  .animated.infinite {
    animation-iteration-count: infinite;
  }

  .animated.hinge {
    animation-duration: 2s;
  }

  .animated.flipOutX,
  .animated.flipOutY,
  .animated.bounceIn,
  .animated.bounceOut {
    animation-duration: .75s;
  }`,
  bounce
}
