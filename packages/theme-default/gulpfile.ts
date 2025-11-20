/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2021-12-03 14:47:12
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\theme-default\gulpfile.ts
 */
import type { TaskFunction } from 'gulp'
import path from 'node:path'
import { Transform } from 'node:stream'
import { vcOutput } from '@vue-cesium/build/utils/paths'
import chalk from 'chalk'
import consola from 'consola'
import cssnano from 'cssnano'
import { dest, parallel, series, src } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import gulpPostcss from 'gulp-postcss'
import rename from 'gulp-rename'
import gulpSass from 'gulp-sass'
import postcss from 'postcss'
import dartSass from 'sass'

const distFolder = path.resolve(__dirname, 'dist')
const distBundle = path.resolve(vcOutput, 'theme-default')

/**
 * compile theme-default scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function buildThemeChalk() {
  const sass = gulpSass(dartSass)
  const noElPrefixFile = /index|base|display/
  return src(path.resolve(__dirname, 'src/*.scss'))
    .pipe(sass.sync())
    .pipe(gulpPostcss())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(compressWithCssnano())
    .pipe(
      rename((path) => {
        if (!noElPrefixFile.test(path.basename)) {
          path.basename = `vc-${path.basename}`
        }
      })
    )
    .pipe(dest(distFolder))
}

/**
 * using `postcss` and `cssnano` to compress CSS
 * @returns
 */
function compressWithCssnano() {
  const processor = postcss([
    cssnano({
      preset: [
        'default',
        {
          // avoid color transform
          colormin: false,
          // avoid font transform
          minifyFontValues: false
        }
      ]
    })
  ])
  return new Transform({
    objectMode: true,
    transform(chunk, _encoding, callback) {
      const file = chunk
      if (file.isNull()) {
        callback(null, file)
        return
      }
      if (file.isStream()) {
        callback(new Error('Streaming not supported'))
        return
      }
      const cssString = file.contents!.toString()
      processor.process(cssString, { from: file.path }).then((result) => {
        const name = path.basename(file.path)
        // eslint-disable-next-line node/prefer-global/buffer
        file.contents = Buffer.from(result.css)
        consola.success(`${chalk.cyan(name)}: ${chalk.yellow(cssString.length / 1000)} KB -> ${chalk.green(result.css.length / 1000)} KB`)
        callback(null, file)
      })
    }
  })
}

/**
 * copy from packages/theme-chalk/lib to dist/theme-chalk
 */
export function copyThemeChalkBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle))
}

/**
 * copy source file to packages
 */

export function copyThemeChalkSource() {
  return src(path.resolve(__dirname, 'src/**')).pipe(dest(path.resolve(distBundle, 'src')))
}

export const build: TaskFunction = parallel(copyThemeChalkSource, series(buildThemeChalk, copyThemeChalkBundle))

export default build
