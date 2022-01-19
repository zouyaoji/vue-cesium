/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2022-01-17 23:22:34
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\plugins\vue-cesium-alias.ts
 */
import { VC_PKG, VC_PREFIX } from '../utils/constants'
import type { Plugin } from 'rollup'

export function VueCesiumAlias(): Plugin {
  const THEME_DUFAULT = `${VC_PREFIX}/theme-default`

  return {
    name: 'vue-cesium-alias-plugin',
    resolveId(id, importer, options) {
      if (!id.startsWith(VC_PREFIX)) return

      if (id.startsWith(THEME_DUFAULT)) {
        return {
          id: id.replaceAll(THEME_DUFAULT, `${VC_PKG}/theme-default`),
          external: 'absolute'
        }
      }

      return this.resolve(id, importer, { skipSelf: true, ...options })
    }
  }
}
