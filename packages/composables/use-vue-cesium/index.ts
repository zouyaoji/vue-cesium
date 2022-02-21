/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:02
 * @LastEditTime: 2022-02-15 10:06:57
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-vue-cesium\index.ts
 */
import { getCurrentInstance } from 'vue'
import { VcViewerProvider } from '@vue-cesium/utils/types'
import useLog from '@vue-cesium/composables/private/use-log'

export default function useVueCesium() {
  const instance = getCurrentInstance()
  const logger = useLog(undefined)
  if (instance) {
    return instance.appContext.config.globalProperties.$VueCesium as VcViewerProvider
  } else {
    logger.warn('VueCesium useVueCesium() can only be used inside setup().')
  }
}
