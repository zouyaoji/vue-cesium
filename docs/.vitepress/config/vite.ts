/* eslint-disable node/prefer-global/process */
import type { Plugin, UserConfig } from 'vitepress'
import path from 'node:path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import buildPkg from '@vue-cesium/build'
import glob from 'fast-glob'
import UnoCSS from 'unocss/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import Inspect from 'vite-plugin-inspect'
import mkcert from 'vite-plugin-mkcert'
import { loadEnv } from 'vitepress'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { MarkdownTransform } from '../plugins/markdown-transform'

const { docPackage, vmPackage, getPackageDependencies, projRoot } = buildPkg

type ViteConfig = Required<UserConfig>['vite']
type ResolveOptions = Required<ViteConfig>['resolve']
type AliasOptions = Required<ResolveOptions>['alias']

const { dependencies: epDeps } = getPackageDependencies(vmPackage)
const { dependencies: docsDeps } = getPackageDependencies(docPackage)
const optimizeDeps = [...new Set([...epDeps, ...docsDeps])].filter(
  dep =>
    !dep.startsWith('@types/')
    && !['@vue-cesium/metadata', 'vue-cesium'].includes(dep)
    && !['normalize.css'].includes(dep)
)
optimizeDeps.push(
  // eslint-disable-next-line antfu/no-top-level-await
  ...(await glob(['dayjs/plugin/*.js'], {
    cwd: path.resolve(projRoot, 'node_modules'),
    onlyFiles: true
  }))
)

const alias: AliasOptions = [
  {
    find: '~/',
    replacement: `${path.resolve(__dirname, '../vitepress')}/`
  },
  ...(process.env.DOC_ENV === 'production'
    ? []
    : [
        {
          find: /^vue-cesium(\/(es|lib))?$/,
          replacement: path.resolve(projRoot, 'packages/vue-cesium/index.ts')
        },
        {
          find: /^vue-cesium\/(es|lib)\/(.*)$/,
          replacement: `${path.resolve(projRoot, 'packages')}/$2`
        }
      ])
]

export function getViteConfig({ mode }: { mode: string }) {
  const env = loadEnv(mode, process.cwd(), '')

  const isBuild = mode === 'production'

  return {
    ssr: {
      noExternal: ['Cesium', 'vue-cesium']
    },
    build: isBuild
      ? {
          target: 'es2022',
          commonjsOptions: {
            transformMixedEsModules: true
          }
        }
      : {
          target: 'es2022'
        },
    css: {
      preprocessorOptions: {
        scss: { api: 'modern-compiler' }
      }
    },
    server: {
      host: true,
      port: 2000,
      fs: {
        allow: [projRoot]
      }
    },
    resolve: {
      alias
    },
    plugins: [
      vueJsx(),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: ['.vitepress/vitepress/components'],

        allowOverrides: true,

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver()
        ],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
      }) as Plugin,

      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true
      }) as Plugin,

      UnoCSS({
        inspector: false
      }),

      MarkdownTransform() as Plugin,
      Inspect(),
      groupIconVitePlugin() as Plugin,
      env.HTTPS ? (mkcert() as Plugin) : undefined
    ],
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2022'
      },
      include: optimizeDeps
    }
  } as ViteConfig
}
