/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-12-31 09:45:46
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\babel.config.js
 */
module.exports = {
  // ATTENTION!!
  // Preset ordering is reversed, so `@babel/typescript` will called first
  // Do not put `@babel/typescript` before `@babel/env`, otherwise will cause a compile error
  // See https://github.com/babel/babel/issues/12066
  presets: [
    [
      '@babel/env',
      {
        loose: false,
        modules: false
      }
    ],
    '@babel/typescript'
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    ['@babel/plugin-proposal-private-methods', { loose: false }],
    '@babel/transform-runtime'
  ],
  overrides: [
    {
      test: /\.vue$/,
      plugins: ['@babel/transform-typescript']
    }
  ],
  env: {
    utils: {
      ignore: ['**/*.test.ts', '**/*.spec.ts'],
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false
          }
        ]
      ],
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            root: ['vue-cesium'],
            alias: {
              '@vue-cesium': 'vue-cesium/lib'
            }
          }
        ]
      ]
    }
  }
}
