var gulp = require('gulp')
// var replaceName = require('gulp-replace-name')
// var inject = require('gulp-inject-string')
var tap = require('gulp-tap')
var concat = require('gulp-concat')

/**
 * animation.css 文件转化为js文件
 */
gulp.task('css2js', function () {
  var targetPath = process.cwd() + '/src/assets/animation-css/'
  return gulp.src(targetPath + '**/*.css')
  // .pipe(inject.wrap('export default `', '`\n'))
  .pipe(tap(function (file) {
    var filePath = file.path.replace(targetPath, '').replace('.css', '').split('/')
    var objName = filePath[0]
    var propName = filePath[1]

    var charUnderlineAt = objName.indexOf('_')
    if (charUnderlineAt > 0) {
      var char = objName.charAt(charUnderlineAt + 1)
      objName = objName.replace('_' + char, char.toUpperCase())
    }
    file.contents = Buffer.concat([
      new Buffer('aniObj.' + objName + ' = aniObj.' + objName + ' || {}\naniObj.' + objName + '.' + propName + ' = `'),
      file.contents,
      new Buffer('`\n')
    ])
  }))
  .pipe(concat('animation.js'))
  .pipe(tap(function (file) {
    file.contents = Buffer.concat([
      new Buffer('let aniObj = {}\n'),
      file.contents,
      new Buffer('\nexport default aniObj\n')
    ])
  }))
  .pipe(gulp.dest('./src/assets/animation-css'))
})
