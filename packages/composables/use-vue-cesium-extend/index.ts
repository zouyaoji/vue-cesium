/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-15 17:07:25
 * @LastEditTime: 2022-04-15 17:14:22
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-vue-cesium-extend\index.ts
 */

import { RectangleExtend } from '@vue-cesium/shared'

const vcExtends = [RectangleExtend]

let isExtend = false

export default function useVcExtend(viewer: Cesium.Viewer) {
  if (isExtend) {
    return
  }

  vcExtends.forEach(item => {
    item.extend(viewer)
  })

  isExtend = true
}
