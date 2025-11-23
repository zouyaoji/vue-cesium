/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2024-06-08 11:44:06
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\build\plugins\alias.ts
 */
import { PKG_NAME, PKG_PREFIX } from '../utils/constants'
import type { Plugin } from 'rollup'

export function alias(): Plugin {
  const themeDefault = 'theme-default'
  const sourceThemeDefault = `${PKG_PREFIX}/${themeDefault}` as const
  const bundleThemeDefault = `${PKG_NAME}/${themeDefault}` as const

  return {
    name: 'vue-cesium-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(sourceThemeDefault)) return
      return {
        id: id.replaceAll(sourceThemeDefault, bundleThemeDefault),
        external: 'absolute'
      }
    }
  }
}
