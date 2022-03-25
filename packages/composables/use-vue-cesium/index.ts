/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:02
 * @LastEditTime: 2022-03-04 00:59:58
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-vue-cesium\index.ts
 */
import { getCurrentInstance, inject } from 'vue'
import { VcViewerProvider } from '@vue-cesium/utils/types'
import useLog from '@vue-cesium/composables/private/use-log'
import { vcKey } from '@vue-cesium/utils/config'

export default function useVueCesium(): VcViewerProvider {
  const instance = getCurrentInstance()
  const logger = useLog(undefined)
  if (instance) {
    return inject<VcViewerProvider>(vcKey) || (instance.appContext.config.globalProperties.$VueCesium as VcViewerProvider)
  } else {
    logger.warn('VueCesium useVueCesium() can only be used inside setup().')
  }
}
