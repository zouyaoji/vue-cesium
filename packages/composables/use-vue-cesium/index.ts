/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:02
 * @LastEditTime: 2022-08-12 20:05:16
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-vue-cesium\index.ts
 */
import { getCurrentInstance, inject } from 'vue'
import { VcViewerProvider } from '@vue-cesium/utils/types'
import useLog from '@vue-cesium/composables/private/use-log'
import { vcKey } from '@vue-cesium/utils/config'

export default function useVueCesium(containerId?: string): VcViewerProvider {
  const instance = getCurrentInstance()
  const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : (instance.parent as any).provides
  if ((!provides || !(vcKey in provides)) && !containerId) {
    containerId = 'cesiumContainer'
  }
  const logger = useLog()
  if (instance) {
    if (containerId) {
      const $vc = instance.appContext.config.globalProperties.$VueCesium[containerId]
      if (!$vc) {
        logger.warn(`Failed to get $vc, reason: vc-viewer with containerId: ${containerId} was not found.`)
      }
      return $vc
    } else {
      return inject<VcViewerProvider>(vcKey)
    }
  } else {
    logger.warn('VueCesium useVueCesium() can only be used inside setup().')
  }
}
