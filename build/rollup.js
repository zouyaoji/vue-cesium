const path = require('path')
const chalk = require('chalk')
const ora = require('ora')
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const cjs = require('rollup-plugin-commonjs')
const nodeResolve = require('@rollup/plugin-node-resolve')
const replace = require('rollup-plugin-re')
const vuePlugin = require('rollup-plugin-vue').default
const uglify = require('rollup-plugin-uglify')
const scssSmartAsset = require('rollup-plugin-scss-smart-asset')
const notifier = require('node-notifier')
const argv = require('yargs').argv
const utils = require('./utils')
const config = require('./config')
const alias = require('@rollup/plugin-alias')

process.env.NODE_ENV = 'production'
// process.env.NODE_ENV = 'development'

const formats = argv.format ? argv.format.split(',').map((s) => s.trim()) : ['es', 'cjs', 'umd']

const srcPath = utils.resolve('src')
// form list of all packages to bundle
getAllPackages()
  .then((packages) => {
    // traverse all provided formats
    return formats.reduce((prev, format) => {
      return prev.then(() => {
        if (format === 'umd') {
          packages = packages.slice(0, 1)
          packages[0].entry = config.umdEntry
        }
        // bundle each package in provided format
        return packages.reduce((prev, pkg) => {
          return prev.then(() => makeBundle(bundleOptions(format, pkg, process.env.NODE_ENV)))
        }, Promise.resolve())
      })
    }, Promise.resolve())
  })
  .then(() => {
    notifier.notify({
      title: config.fullname,
      message: 'All done!'
    })
  })
  .catch((err) => {
    console.log(chalk.red(err.stack))
    process.exit(1)
  })

/********************************************************/
/* HELPERS                                              */
/********************************************************/
function getAllPackages () {
  const packages = [
    // main package
    {
      entry: config.entry,
      jsName: 'index',
      cssName: undefined,
      globName: config.fullname,
      amdName: config.fullname
    }
  ]

  return Promise.all([
    packagesFromPath(utils.resolve('src/components'), utils.resolve('src/components')),
    packagesFromPath(utils.resolve('src/components/imageryLayer'), 'src/components'),
    packagesFromPath(utils.resolve('src/components/terrain'), 'src/components'),
    packagesFromPath(utils.resolve('src/components/datasource'), 'src/components'),
    packagesFromPath(utils.resolve('src/components/entity'), 'src/components'),
    packagesFromPath(utils.resolve('src/components/primitiveCollection'), 'src/components'),
    packagesFromPath(utils.resolve('src/components/primitive'), 'src/components'),
    packagesFromPath(utils.resolve('src/components/geometryInstance'), 'src/components'),
    packagesFromPath(utils.resolve('src/components/control'), 'src/components'),
    packagesFromPath(utils.resolve('src/components/tool'), 'src/components'),
    packagesFromPath(utils.resolve('src/components/visualization'), 'src/components'),
    packagesFromPath(utils.resolve('src/mixins'), srcPath),
    packagesFromPath(utils.resolve('src/mixins/providers'), srcPath),
    packagesFromPath(utils.resolve('src/mixins/datasource'), srcPath),
    packagesFromPath(utils.resolve('src/mixins/graphics'), srcPath),
    packagesFromPath(utils.resolve('src/mixins/primitives'), srcPath),
    packagesFromPath(utils.resolve('src/mixins/tool'), srcPath),
    packagesFromPath(utils.resolve('src/exts'), srcPath),
    packagesFromPath(utils.resolve('src/exts/imageryProvider'), srcPath),
    packagesFromPath(utils.resolve('src/exts/wind'), srcPath),
    packagesFromPath(utils.resolve('src/utils'), srcPath)
  ]).then((otherPackages) => {
    return packages.concat(otherPackages.reduce((all, packages) => all.concat(packages), []))
  })
}

function packagesFromPath (searchPath, basePath = srcPath) {
  return utils.readDir(searchPath).then((entries) =>
    entries.reduce((packages, entry) => {
      return packages.concat(entryToPackage(entry, basePath))
    }, [])
  )
}

function entryToPackage (entry, basePath = srcPath) {
  let entryPath = entry.path
  if (!/\.js$/i.test(entryPath)) {
    entryPath = path.join(entry.path, 'index.js')
  }
  const jsName = path
    .relative(basePath, entryPath.replace(/\.js$/i, ''))
    .split(path.sep)
    .join('/')
  const pkgName = jsName.replace(/\/index$/i, '')
  let pkg = {}
  if (jsName === 'control/navigation/index') {
    pkg = {
      entry: entryPath,
      jsName,
      pkgName,
      cssName: 'vc-navigation'
    }
  } else if (jsName === 'control/navigationSM/index') {
    pkg = {
      entry: entryPath,
      jsName,
      pkgName,
      cssName: 'vc-navigation-sm'
    }
  } else {
    pkg = {
      entry: entryPath,
      jsName,
      pkgName
    }
  }

  return utils.fileExists(entryPath) ? pkg : []
}

function bundleOptions (format, pkg, env = 'development') {
  const options = Object.assign({}, pkg, {
    outputPath: config.outputPath,
    input: {
      input: pkg.entry
    },
    output: {
      format,
      banner: config.banner,
      name: pkg.globName,
      amd: pkg.amdName
        ? {
          id: pkg.amdName
        }
        : undefined
    },
    format,
    env,
    // used before commonjs resolve
    replaces: Object.assign(
      {
        '@import ~': '@import ',
        '@import "~': '@import "'
      },
      config.replaces
    )
    // defines: {
    //   IS_STANDALONE: false,
    // },
  })

  // es/cjs external resolver
  const external = (id, parentId) => {
    if (!parentId) {
      return false
    }
    parentId = parentId.split(path.sep).join('/')
    if (/\.(sass|s?css|vue)$/i.test(id)) {
      return false
    }
    // check internal components imports
    const componentsRegExp = /components\/.*/i
    return !(
      componentsRegExp.test(parentId) &&
      (id.slice(0, 2) === './' ||
        id.match(/\.vue\?rollup-plugin-vue/i) ||
        (componentsRegExp.test(id) && path.basename(path.dirname(id)) === path.basename(path.dirname(parentId))))
    )
  }
  // es/cjs path replacements in 2 phases
  const patterns = [
    [
      // components/**/* -> **/* replacement
      {
        test: /'(\.{1,2})\/components\/([^']*)'/gi,
        replace: (m1, m2, m3) => `'${m2}/${m3}'`
      },
      // mixins/utils/exts path inside components replacement
      {
        include: ['src/components/**/*'],
        test: /'(?:\.{2}\/){2,3}((?:mixins|utils|exts)[^']*)'/gi,
        replace: (m1, m2) => (m1.split('../').length === 3 ? `'../${m2}'` : `'../../${m2}'`)
      }
    ]
  ]
  options.replaces['process.env.NODE_ENV'] = `'${env}'`
  options.replaces['process.env.VUECESIUM_DEBUG'] = JSON.stringify(process.env.NODE_ENV !== 'production')
  switch (format) {
    case 'umd':
      options.jsName += '.' + format
      options.cssName = undefined
      // // const ol = {}
      // options.output.globals = (id) => {
      //   if (id === 'vue') return 'Vue'
      //   // if (ol[id] != null) {
      //   //   return ol[id]
      //   // }
      // }

      options.input.external = (id, parent, resolved) => {
        if (['vue'].includes(id)) return true

        if (!resolved && /^ol\/.+/.test(id)) {
          // ol[id] = id.replace(/\//g, '.')
          return true
        }

        return false
      }
      // options.replaces['process.env.NODE_ENV'] = `'${env}'`
      // options.replaces['process.env.VUECESIUM_DEBUG'] = JSON.stringify(process.env.NODE_ENV !== 'production')
      // options.minify = true
      break
    case 'cjs':
      options.input.external = external
      options.patterns = patterns
      break
    case 'es':
      options.input.external = external
      options.patterns = patterns
      break
  }

  return options
}

function makeBundle (options = {}) {
  let stylesPromise = Promise.resolve([])
  const plugins = [
    // compile-time variables replace
    replace({
      sourceMap: true,
      include: ['src/**/*'],
      replaces: options.replaces,
      defines: options.defines
    }),
    vuePlugin({
      sourceMap: true,
      css: false
    }),
    alias({
      'vue': require.resolve('vue/dist/vue.esm.js')
    }),
    scssSmartAsset({
      postcssUrlConfig: {
        url: 'inline'
      },
      output: styles => {
        stylesPromise = Promise.resolve(styles || [])
      },
    }),
    babel({
      runtimeHelpers: true,
      sourceMap: true,
      include: [
        'src/**/*'
      ],
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
    }),
    nodeResolve({
      mainFields: ['main', 'module', 'jsnext:main'],
      browser: true
    }),
    cjs({ include: 'node_modules/**' }),
    // paths replace
    ...(options.patterns
      ? options.patterns.map((patterns) =>
        replace({
          include: ['src/**/*'],
          sourceMap: true,
          patterns
        })
      )
      : [])
  ]

  if (options.minify) {
    // options.jsName += '.min'
    // if (options.cssName) {
    //   options.cssName += '.min'
    // }

    plugins.push(
      uglify({
        mangle: true,
        sourceMap: true,
        compress: {
          warnings: false
        },
        output: {
          comments: (node, comment) => {
            const text = comment.value
            const type = comment.type
            if (type === 'comment2') {
              // multiline comment
              return /@preserve|@license|@cc_on/i.test(text)
            }
          }
        }
      })
    )
  }

  if (options.format === 'umd') {
    // <<<<<< adds this line into the bundle.js >>>>>>>  const global = window;
    options.output.intro = 'var global = typeof self !== undefined ? self : this;'
  }
  const jsOutputPath = path.join(options.outputPath, options.jsName) + '.js'
  const cssOutputPath = options.cssName ? path.join(options.outputPath, options.cssName) + '.css' : undefined
  const spinner = ora({
    discardStdin: false,
    text: chalk.bold.blue(`making ${options.format} ${options.jsName} bundle...`)
  }).start()
  // prepare rollup bundler
  return rollup
    .rollup(Object.assign({}, options.input, { plugins }))
    .then((bundle) => {
      // generate bundle
      const outputOptions = Object.assign({}, options.output, {
        sourcemap: true,
        sourcemapFile: jsOutputPath,
        isWrite: true
      })
      return bundle.generate(outputOptions, true)
    })
    .then((result) => {
      for (const js of result.output) {
        // concatenate all styles from Sass and Vue files
        if (!cssOutputPath) {
          return { js, css: undefined }
        }
        return stylesPromise
          .then((styles) => {
            const files = styles.reduce((all, css) => {
              if (!css.code) return all

              return all.concat(
                Object.assign(css, {
                  sourcesRelativeTo: css.id
                })
              )
            }, [])

            const css = utils.concatFiles(files, cssOutputPath, options.output.banner)

            return utils.postcssProcess(css, options.minify)
          })
          .then((css) => ({ js, css }))
      }
    })
    .then(({ js, css }) => {
      // write js / css bundles to output path
      return Promise.all([
        utils.writeFile(jsOutputPath, js.code),
        utils.writeFile(jsOutputPath + '.map', JSON.stringify(js.map)),
        css && utils.writeFile(cssOutputPath, css.code),
        css && utils.writeFile(cssOutputPath + '.map', JSON.stringify(css.map))
      ])
    })
    .then(([jsSrc, jsMap, cssSrc, cssMap]) => {
      // output results
      spinner.succeed(chalk.green(`bundle ${options.format} ${options.jsName} was created successfully`))

      console.log(jsSrc.path, chalk.gray(jsSrc.size))
      console.log(jsMap.path, chalk.gray(jsMap.size))
      cssSrc && console.log(cssSrc.path, chalk.gray(cssSrc.size))
      cssMap && console.log(cssMap.path, chalk.gray(cssMap.size))
    })
    .catch((err) => {
      spinner.fail(chalk.red(`bundle ${options.jsName} could not be created`))
      throw err
    })
}
