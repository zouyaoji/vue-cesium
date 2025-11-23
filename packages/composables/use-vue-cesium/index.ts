/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:02
 * @LastEditTime: 2022-10-20 01:49:37
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-vue-cesium\index.ts
 */
import type { VcViewerProvider } from '@vue-cesium/utils/types'
import { logger } from '@vue-cesium/utils'
import { vcKey } from '@vue-cesium/utils/config'
import { getCurrentInstance, inject } from 'vue'

export default function useVueCesium(containerId?: string): VcViewerProvider {
  const instance = getCurrentInstance()
  const provides = instance?.parent === null ? instance.vnode.appContext && instance.vnode.appContext.provides : (instance?.parent as any)?.provides
  if ((!provides || !(vcKey in provides)) && !containerId) {
    containerId = 'cesiumContainer'
  }
  if (instance) {
    if (containerId) {
      const $vc = instance.appContext.config.globalProperties?.$VueCesium?.[containerId]
      if (!$vc) {
        logger.warn(`Failed to get $vc, reason: vc-viewer with containerId: ${containerId} was not found.`)
      }
      return $vc
    }
    else {
      return inject<VcViewerProvider>(vcKey)
    }
  }
  else {
    logger.warn('VueCesium useVueCesium() can only be used inside setup().')
  }
}
