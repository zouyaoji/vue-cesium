/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-10-28 23:37:09
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\gulpfile.ts
 */
import gulp from 'gulp'
import ts from 'gulp-typescript'
import path from 'path'
import through2 from 'through2'

const output = path.resolve(__dirname, '../dist/styles')

const tsProject = ts.createProject('tsconfig.json', {
  declaration: true,
  target: 'ESNEXT',
  skipLibCheck: true,
  module: 'ESNEXT'
})

const rewriter = () => {
  return through2.obj(function (file, _, cb) {
    const compIdentifier = new RegExp('@vue-cesium/components', 'g')
    const compReplacer = '../../../components'
    const themeIdentifier = new RegExp('@vue-cesium/theme-default', 'g')
    const themeReplacer = '../../../../theme-chalk'
    file.contents = Buffer.from(file.contents.toString().replace(compIdentifier, compReplacer).replace(themeIdentifier, themeReplacer))
    cb(null, file)
  })
}

const inputs = '../packages/components/**/style/*.ts'

function compileEsm() {
  return gulp
    .src(inputs)
    .pipe(rewriter())
    .pipe(tsProject())
    .pipe(gulp.dest(path.resolve(output, 'es')))
}

function compileCjs() {
  return gulp
    .src(inputs)
    .pipe(rewriter())
    .pipe(
      ts.createProject('tsconfig.json', {
        declaration: true,
        target: 'ESNEXT',
        skipLibCheck: true,
        module: 'commonjs'
      })()
    )
    .pipe(gulp.dest(path.resolve(output, 'lib')))
}

export const build = gulp.series(compileEsm, compileCjs)

export default build
