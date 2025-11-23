/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2024-02-28 22:52:54
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\utils\config.ts
 */
import type { Language } from '@vue-cesium/locale'
import type { Emitter } from 'mitt'
import type { InjectionKey, Ref } from 'vue'
import type { DCConfig, Mars3dConfig, VcMittEvents } from './types'

const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'
export interface ConfigProviderContext {
  cesiumPath?: string
  accessToken?: string
  locale?: Language
  mars3dConfig?: Mars3dConfig // for mars3d
  dcConfig?: DCConfig // for dc-sdk 3.0+
  reloadMode?: 'once' | 'all'
  __scriptPromise?: Promise<unknown>
  __viewerUnloadingPromise?: Promise<boolean>
  showNotify?: boolean
  debug?: boolean
  $q?: any
  vcMitt?: Emitter<VcMittEvents>
  [propName: string]: any
}

const vcKey = hasSymbol ? Symbol('VueCesium') : 'VueCesium'

const fabKey = hasSymbol ? Symbol('_vc_f_') : '_vc_f_'

const measurementKey = hasSymbol ? Symbol('_vc_measurement_') : '_vc_measurement_'

export { fabKey, measurementKey, vcKey }

export const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>> = Symbol('vc_config_provider')
