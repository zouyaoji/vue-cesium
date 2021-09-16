/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-09-16 16:25:47
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\directives\gulpfile.ts
 */
import gulp from 'gulp'
import ts from 'gulp-typescript'
import path from 'path'
import { buildOutput } from '../../build/paths'
import rewriter from '../../build/gulp-rewriter'

export const esm = './es'
export const cjs = './lib'
const tsProject = ts.createProject('../../tsconfig.json')

const inputs = ['./**/*.ts', '!./node_modules', '!./__tests__/*.ts', '!./gulpfile.ts', '!./es/**', '../../typings/**/*.ts']

function compileEsm() {
  return gulp.src(inputs).pipe(tsProject()).pipe(rewriter()).pipe(gulp.dest(esm))
}

function compileCjs() {
  return gulp
    .src(inputs)
    .pipe(
      ts.createProject('../../tsconfig.json', {
        module: 'commonjs'
      })()
    )
    .pipe(rewriter())
    .pipe(gulp.dest(cjs))
}

const distBundle = path.resolve(buildOutput, './vue-cesium')

/**
 * copy from packages/directives/lib to dist/directives
 */
function copyEsm() {
  return gulp.src(esm + '/**').pipe(gulp.dest(path.resolve(distBundle, 'es/directives')))
}

function copyCjs() {
  return gulp.src(cjs + '/**').pipe(gulp.dest(path.resolve(distBundle, 'lib/directives')))
}

export const build = gulp.series(compileEsm, compileCjs, copyEsm, copyCjs)

export default build
