
/* eslint-disable no-new */
export default {
  aniCss ($0, animationName) {
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    $0.addClass('animated ' + animationName).one(animationEnd, () => {
      $($0).removeClass('animated ' + animationName)
    })
  }
}

