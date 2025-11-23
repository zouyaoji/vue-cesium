import type { UserConfig } from 'vitepress'
import buildPkg from '@vue-cesium/build'
import { consola } from 'consola'
import { languages } from '../utils/lang'
import { features } from './features'
import { head } from './head'
import { nav } from './nav'
import { mdPlugin } from './plugins'
import { sidebars } from './sidebars'
import { getViteConfig } from './vite'

import { vueCompiler } from './vue-compiler'

const { REPO_BRANCH, REPO_PATH, docsDirName } = buildPkg

function buildTransformers() {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true
    }
  }

  const transformers = {}
  const directives = [
    'infinite-scroll',
    'loading',
    'popover',
    'click-outside',
    'repeat-click',
    'trap-focus',
    'mousewheel',
    'resize'
  ]
  directives.forEach((k) => {
    transformers[k] = transformer
  })

  return transformers
}

// eslint-disable-next-line node/prefer-global/process
consola.debug(`DOC_ENV: ${process.env.DOC_ENV}`)

const locales = {}
languages.forEach((lang) => {
  locales[`/${lang}`] = {
    label: lang,
    lang
  }
})

function setupConfig(configEnv) {
  const config: UserConfig<any> = {
    title: 'Vue for Cesium',
    description: 'A Vue3 based component library of CesiumJS for developers',
    lastUpdated: true,
    head,
    themeConfig: {
      repo: REPO_PATH,
      docsBranch: REPO_BRANCH,
      docsDir: docsDirName,

      editLinks: true,
      editLinkText: 'Edit this page on GitHub',

      logo: '/images/vue-cesium-logo-normal.svg',
      logoSmall: '/images/vue-cesium-logo-small.svg',
      sidebars,
      nav,
      agolia: {
        apiKey: 'b3694e3d978767bb3204cf6016011711',
        appId: 'WBB6N3B5S9'
      },
      features,
      langs: languages
    },
    cleanUrls: true,
    sitemap: {
      hostname: 'https://zouyaoji.top/vue-cesium'
    },
    locales,
    vite: getViteConfig(configEnv),
    markdown: {
      config: md => mdPlugin(md)
    },
    vue: {
      compiler: vueCompiler,
      template: {
        compilerOptions: {
          hoistStatic: false,
          directiveTransforms: buildTransformers()
        }
      }
    },

    postRender(context) {
      // Inject the teleport markup
      if (context.teleports) {
        const body = Object.entries(context.teleports).reduce(
          (all, [key, value]) => {
            if (key.startsWith('#el-popper-container-')) {
              return `${all}<div id="${key.slice(1)}">${value}</div>`
            }
            return all
          },
          context.teleports.body || ''
        )

        context.teleports = { ...context.teleports, body }
      }

      return context
    }
  }

  return config
}

export default setupConfig
