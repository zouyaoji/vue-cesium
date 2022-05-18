/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-05-18 11:51:23
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\config-provider\src\index.ts
 */
import { defineComponent, PropType, renderSlot, VNode } from 'vue'
import { provideGlobalConfig } from '@vue-cesium/composables/use-global-config'
import { Language } from '@vue-cesium/locale'
import Chinese from '@vue-cesium/locale/lang/zh-hans'

export default defineComponent({
  name: 'VcConfigProvider',
  props: {
    locale: {
      type: Object as PropType<Language>,
      default: () => Chinese
    },
    cesiumPath: {
      type: String,
      default: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js'
    },
    accessToken: {
      type: String,
      default:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OGE2MjZlOC1mMzhiLTRkZjQtOWEwZi1jZTE0MWY0YzhlMTAiLCJpZCI6MjU5LCJpYXQiOjE2NDM3MjU1NzZ9.ptZ5tVXvMmuWRC0WhjtYTg-17nQh14fgxBsx0HJiVXQ'
    }
  },

  setup(props, { slots }) {
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  }
})

export type VcConfigProviderProps = {
  /**
   * Locale Object.
   */
  locale?: Language
  /**
   * CesiumJS path for vue-cesium.
   * Default value: https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js
   */
  cesiumPath?: string
  /**
   * Cesium Ion defaultAccessToken
   * Default value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OGE2MjZlOC1mMzhiLTRkZjQtOWEwZi1jZTE0MWY0YzhlMTAiLCJpZCI6MjU5LCJpYXQiOjE2NDM3MjU1NzZ9.ptZ5tVXvMmuWRC0WhjtYTg-17nQh14fgxBsx0HJiVXQ
   */
  accessToken?: string
}

export interface VcConfigProviderSlots {
  /**
   * This is where vc-viewer may go into
   */
  default: () => VNode[]
}
