
/* eslint-disable no-new */
export default {
  aniCss ($0, animationName, callback) {
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    $0.addClass('animated ' + animationName).one(animationEnd, () => {
      $0.hasClass('inifinite') ? null : $0.removeClass('animated ' + animationName)
      callback && callback()
    })
  }
}

