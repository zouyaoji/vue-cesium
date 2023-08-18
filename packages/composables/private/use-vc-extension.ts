/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-25 16:05:16
 * @LastEditTime: 2023-08-18 01:08:33
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\composables\private\use-vc-extension.ts
 */
import { MaterialExtend, RectangleExtend, ShadowMapShaderExtend } from '@vue-cesium/shared'

const vcExtends = [RectangleExtend, ShadowMapShaderExtend, MaterialExtend]

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
