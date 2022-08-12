/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:02
 * @LastEditTime: 2022-08-12 11:50:40
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \10_vue-cesium\packages\composables\use-vue-cesium\index.ts
 */
import { getCurrentInstance, inject } from 'vue'
import { VcViewerProvider } from '@vue-cesium/utils/types'
import useLog from '@vue-cesium/composables/private/use-log'
import { vcKey } from '@vue-cesium/utils/config'

export default function useVueCesium(containerId?: string): VcViewerProvider {
  const instance = getCurrentInstance()
  const logger = useLog(undefined)
  if (instance) {
    return containerId ? (instance.appContext.config.globalProperties.$VueCesium[containerId] as VcViewerProvider) : inject<VcViewerProvider>(vcKey)
  } else {
    logger.warn('VueCesium useVueCesium() can only be used inside setup().')
  }
}
