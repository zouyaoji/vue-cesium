/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2021-10-12 15:51:21
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\theme-default\gulpfile.ts
 */
/* eslint-disable no-console */

import chalk from 'chalk'
import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import postcss from 'gulp-postcss'

import { buildOutput } from '../../build/paths'

import path from 'path'

const noVcPrefixFile = /(index|base)/

const sass = gulpSass(dartSass)
export const distFolder = './lib'

/**
 * compile theme-chalk scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function compile() {
  return gulp
    .src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(postcss())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, details => {
        console.log(
          `${chalk.cyan(details.name)}: ${chalk.yellow(details.stats.originalSize / 1000)} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
        )
      })
    )
    .pipe(
      rename(path => {
        if (!noVcPrefixFile.test(path.basename)) {
          path.basename = `vc-${path.basename}`
        }
      })
    )
    .pipe(gulp.dest(distFolder))
}

/**
 * copy font to lib/fonts
 * @returns
 */
function copyFont() {
  return gulp.src('./src/fonts/**').pipe(gulp.dest(`${distFolder}/fonts`))
}

const distBundle = path.resolve(buildOutput, './vue-cesium/theme-default')

/**
 * copy from packages/theme-default/lib to dist/theme-default
 */
function copyToLib() {
  return gulp.src(distFolder + '/**').pipe(gulp.dest(distBundle))
}

/**
 * copy source file to packages
 */

function copySourceToLib() {
  return gulp.src('./src/**').pipe(gulp.dest(path.resolve(distBundle, './src')))
}

export const build = gulp.series(compile, copyFont, copyToLib, copySourceToLib)

export default build
