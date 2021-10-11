/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:22
 * @LastEditTime: 2021-10-11 13:07:50
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\.prettierrc.js
 */
module.exports = {
  printWidth: 150,
  tabWidth: 2,
  endOfLine: 'auto',
  useTabs: false,
  singleQuote: true,
  semi: false,
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    }
  ]
}
