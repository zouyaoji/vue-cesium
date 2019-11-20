const path = require('path')
const chalk = require('chalk')
const pluginUtils = require('rollup-pluginutils')
const utils = require('../utils')

// originally taken from https://github.com/differui/rollup-plugin-sass/blob/master/src/index.js
// adds source map from Sass compiler.
module.exports = function sass (options) {
  options = Object.assign({
    include: [
      '**/*.css',
      '**/*.sass',
      '**/*.scss'
    ],
    exclude: undefined,
    output: false,
    postProcess: style => style,
    banner: '',
    sass: undefined
  }, options)

  const filter = pluginUtils.createFilter(options.include, options.exclude)
  const styles = []
  const styleMaps = {}
  let dest = ''

  return {
    name: 'sass',
    options (opts) {
      dest = typeof options.output === 'string'
        ? options.output
        : opts.dest || opts.entry
      if (dest && (dest.endsWith('.js') || dest.endsWith('.ts'))) {
        dest = dest.slice(0, -3)
        dest = `${dest}.css`
      }
    },
    transform (code, id) {
      if (!filter(id)) return

      const paths = [path.dirname(id), process.cwd()]
      const sassConfig = Object.assign({
        file: id,
        outFile: id,
        sourceMap: true,
        data: code,
        indentedSyntax: path.extname(id) === '.sass' || path.extname(id) === '.less',
        omitSourceMapUrl: true,
        sourceMapContents: true
      }, options.sass)
      sassConfig.includePaths = sassConfig.includePaths
        ? sassConfig.includePaths.concat(paths.filter(x => !sassConfig.includePaths.includes(x)))
        : paths

      try {
        let { css, map } = require('node-sass').renderSync(sassConfig)
        code = css.toString().trim()
        map = map.toString()

        if (!code) return

        return Promise.resolve({ id, code, map })
          .then(options.postProcess)
          .then(style => {
            if (!styleMaps[id]) {
              styles.push(styleMaps[id] = style)
            }

            if (options.output === false) {
              return {
                id: id,
                code: `export default ${JSON.stringify(style.code)}`,
                map: style.map
              }
            }

            return ''
          })
      } catch (error) {
        throw error
      }
    },
    generateBundle () {
      if (!styles.length || options.output === false) {
        return
      }

      if (typeof options.output === 'function') {
        return options.output(styles)
      }

      if (!dest) return

      const res = utils.concatFiles(
        styles.map(({ id, code, map }) => ({
          code,
          map,
          sourcesRelativeTo: id
        })),
        dest,
        options.banner
      )

      return Promise.all([
        utils.writeFile(dest, res.code),
        utils.writeFile(dest + '.map', res.map)
      ]).then(([css, map]) => {
        console.log(css.path, chalk.gray(css.size))
        console.log(map.path, chalk.gray(map.size))

        return { css, map }
      })
    }
  }
}
