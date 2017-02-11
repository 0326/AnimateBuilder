import Ani from './animation.js'

let aniBase = `.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}`

let aniInfinite = `
.animated.infinite {
  animation-iteration-count: infinite;
}`

// 将Ani对象转化为二层数组展示
let aniList = []
for (let aniTypes in Ani) {
  let item = {
    type: aniTypes,
    list: []
  }
  for(let animate in Ani[aniTypes]) {
    item.list.push({
      name: animate,
      cssCode: Ani[aniTypes][animate]
    })
  }
  aniList.push(item)
}
// console.log(aniList)

export default {
  aniBase,
  aniInfinite,
  aniList,
  getAniCode (type, name) {
    return Ani[type][name]
  }
}
