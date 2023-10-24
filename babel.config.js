/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2023-10-24 15:26:22
 * @LastEditors: zouyaoji 370681295@qq.com
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
      '@babel/preset-env',
      {
        loose: false,
        modules: false
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    // Stage 0
    // '@babel/plugin-proposal-function-bind',
    // Stage 1
    // '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-logical-assignment-operators',
    ['@babel/plugin-proposal-optional-chaining', { loose: false }],
    // ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
    // '@babel/plugin-proposal-do-expressions',
    // Stage 2
    // ['@babel/plugin-proposal-decorators', { legacy: true }],
    // '@babel/plugin-proposal-function-sent',
    // '@babel/plugin-proposal-export-namespace-from',
    // '@babel/plugin-proposal-numeric-separator',
    // '@babel/plugin-proposal-throw-expressions',
    // Stage 3
    // '@babel/plugin-syntax-dynamic-import',
    // '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['@babel/plugin-proposal-private-methods', { loose: false }],
    // '@babel/plugin-proposal-json-strings',

    // other
    '@vue/babel-plugin-jsx',
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
          '@babel/preset-env',
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
