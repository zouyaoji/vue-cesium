/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 10:53:42
 * @LastEditTime: 2021-10-29 10:26:54
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\gulpfile.ts
 */
import gulp from 'gulp'
import debug from 'gulp-debug'
import ts from 'gulp-typescript'
import path from 'path'
import { buildOutput } from '../../build/paths'

import type { Settings } from 'gulp-typescript'

export const esm = './es'
export const cjs = './lib'

const inputs = ['./**/*.ts', '!gulpfile.ts', '!./node_modules', '!./tests/*.ts', '../../typings/**/*.ts']

function createProject(settings: Settings = {}) {
  return ts.createProject('../../tsconfig.json', {
    // temporarily disabled
    // TODO: remove this
    strict: false,
    ...settings
  })
}

function compileEsm() {
  // return gulp.src(inputs).pipe(debug()).pipe(createProject()()).pipe(gulp.dest(esm))
  return gulp
    .src(inputs)
    .pipe(createProject({ module: 'esnext' })())
    .pipe(gulp.dest(esm))
}

function compileCjs() {
  return gulp
    .src(inputs)
    .pipe(createProject({ module: 'commonjs' })())
    .pipe(gulp.dest(cjs))
}

const distBundle = path.resolve(buildOutput, './vue-cesium')

/**
 * copy from packages/utils/lib to dist/utils
 */
function copyEsm() {
  return gulp.src(cjs + '/**').pipe(gulp.dest(path.resolve(distBundle, './lib/utils')))
}

function copyCjs() {
  return gulp.src(esm + '/**').pipe(gulp.dest(path.resolve(distBundle, './es/utils')))
}

export const build = gulp.series(compileEsm, compileCjs, copyEsm, copyCjs)

export default build
