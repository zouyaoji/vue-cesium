/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2021-12-05 09:46:07
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\plugins\vue-cesium-alias.ts
 */
import { VC_PKG, VC_PREFIX } from '../utils/constants'
import { getDistPackages } from '../utils/pkg'
import type { Plugin } from 'rollup'

export async function VueCesiumAlias(): Promise<Plugin> {
  const pkgs = await getDistPackages()

  return {
    name: 'vue-cesium-alias-plugin',
    resolveId(id, importer, options) {
      if (!id.startsWith(VC_PREFIX)) return

      const THEME_CHALK = `${VC_PREFIX}/theme-default`
      if (id.startsWith(THEME_CHALK)) {
        return {
          id: id.replaceAll(THEME_CHALK, `${VC_PKG}/theme-default`),
          external: 'absolute'
        }
      }

      let updatedId = id
      for (const pkg of pkgs) {
        if (id.startsWith(pkg.name)) updatedId = updatedId.replace(pkg.name, pkg.dir)
      }
      return this.resolve(id, importer, { skipSelf: true, ...options })
    }
  }
}
