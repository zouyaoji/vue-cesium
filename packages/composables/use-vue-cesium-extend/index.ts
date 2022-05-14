/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-15 17:07:25
 * @LastEditTime: 2022-04-16 20:49:02
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-vue-cesium-extend\index.ts
 */

import { RectangleExtend, ShadowMapShaderExtend } from '@vue-cesium/shared'

const vcExtends = [RectangleExtend, ShadowMapShaderExtend]

export default function useVcExtend(viewer: Cesium.Viewer) {
  vcExtends.forEach(item => {
    item.extend(viewer)
  })
}
