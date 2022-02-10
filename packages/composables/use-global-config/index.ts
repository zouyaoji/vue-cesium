/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-02-09 16:19:57
 * @LastEditTime: 2022-02-09 16:49:56
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-global-config\index.ts
 */
import { ConfigProviderContext, configProviderContextKey } from '@vue-cesium/utils/config'
import { inject, ref, computed, unref, provide, getCurrentInstance } from 'vue'
import type { Ref, App } from 'vue'
import { hasOwn, isObject, merge } from '@vue-cesium/utils/util'
import { MaybeRef } from '@vue-cesium/utils/types'

const cache = ref<ConfigProviderContext>({})

export function useGlobalConfig<K extends keyof ConfigProviderContext>(key: K): Ref<ConfigProviderContext[K]>
export function useGlobalConfig(): Ref<ConfigProviderContext>
export function useGlobalConfig(key?: keyof ConfigProviderContext) {
  const config = inject(configProviderContextKey, cache)
  if (key) {
    return isObject(config.value) && hasOwn(config.value, key) ? computed(() => config.value[key]) : ref(undefined)
  } else {
    return config
  }
}

export const provideGlobalConfig = (config: MaybeRef<ConfigProviderContext>, app?: App) => {
  const inSetup = !!getCurrentInstance()
  const oldConfig = inSetup ? useGlobalConfig() : undefined

  const provideFn = app?.provide ?? (inSetup ? provide : undefined)
  if (!provideFn) {
    console.warn('provideGlobalConfig', 'provideGlobalConfig() can only be used inside setup().')
    return
  }

  const context = computed(() => {
    const cfg = unref(config)
    if (!oldConfig) return cfg
    return merge(oldConfig.value, cfg)
  })
  provideFn(configProviderContextKey, context)
  cache.value = context.value
  return context
}
