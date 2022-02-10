/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-02-09 23:47:58
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\config.ts
 */
import type { Language } from '@vue-cesium/locale'
import type { InjectionKey, Ref } from 'vue'
import type { AnyObject } from './types'

const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'
export interface ConfigProviderContext {
  cesiumPath?: string
  accessToken?: string
  locale?: Language
  cfg?: AnyObject // for mars3d
  __scriptPromise?: Promise<unknown>
  __viewerUnloadingPromise?: Promise<boolean>
}

const vcKey = hasSymbol ? Symbol('VueCesium') : 'VueCesium'

const fabKey = hasSymbol ? Symbol('_vc_f_') : '_vc_f_'

const measurementKey = hasSymbol ? Symbol('_vc_measurement_') : '_vc_measurement_'

export { vcKey, fabKey, measurementKey }

export const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>> = Symbol()
