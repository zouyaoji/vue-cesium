/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-09-06 01:10:05
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\config.ts
 */
import type { Language } from '@vue-cesium/locale'
import type { InjectionKey, Ref } from 'vue'
import type { Mars3dConfig } from './types'

const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'
export interface ConfigProviderContext {
  cesiumPath?: string
  accessToken?: string
  locale?: Language
  mars3dConfig?: Mars3dConfig // for mars3d
  reloadMode?: 'once' | 'all'
  __scriptPromise?: Promise<unknown>
  __viewerUnloadingPromise?: Promise<boolean>
  [propName: string]: any
}

const vcKey = hasSymbol ? Symbol('VueCesium') : 'VueCesium'

const fabKey = hasSymbol ? Symbol('_vc_f_') : '_vc_f_'

const measurementKey = hasSymbol ? Symbol('_vc_measurement_') : '_vc_measurement_'

export { vcKey, fabKey, measurementKey }

export const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>> = Symbol()
