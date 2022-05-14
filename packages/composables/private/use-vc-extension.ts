/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-25 16:05:16
 * @LastEditTime: 2022-05-13 09:57:29
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\private\use-vc-extension.ts
 */
import { RectangleExtend, ShadowMapShaderExtend } from '@vue-cesium/shared'

const vcExtends = [RectangleExtend, ShadowMapShaderExtend]

export default function useVcExtension() {
  const invokeExtensions = (viewer: Cesium.Viewer) => {
    vcExtends.forEach(item => {
      item.extend(viewer)
    })
  }

  const revokeExtensions = (viewer: Cesium.Viewer) => {
    vcExtends.forEach(item => {
      item.revoke(viewer)
    })
  }

  return {
    invokeExtensions,
    revokeExtensions
  }
}
