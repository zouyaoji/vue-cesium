/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-15 10:32:57
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\cesium-terrain\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { ellipsoid, credit } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const cesiumTerrainProviderProps = {
  url: [String, Object] as PropType<string | Promise<string> | Promise<Cesium.Resource> | Cesium.Resource>,
  requestVertexNormals: {
    type: Boolean,
    default: false
  },
  requestWaterMask: {
    type: Boolean,
    default: false
  },
  requestMetadata: {
    type: Boolean,
    default: true
  },
  ...ellipsoid,
  ...credit
}

export default defineComponent({
  name: 'VcTerrainProviderCesium',
  props: cesiumTerrainProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CesiumTerrainProvider'
    const providersState = useProviders(props, ctx, instance)

    if (undefined === providersState) {
      return
    }
    // methods
    instance.createCesiumObject = async () => {
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true)
      }
      const options = providersState.transformProps(props)
      return Cesium.defined(options.url)
        ? new Cesium.CesiumTerrainProvider(options as any)
        : Cesium.createWorldTerrain({ requestVertexNormals: options.requestVertexNormals, requestWaterMask: options.requestWaterMask })
    }
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcTerrainProviderCesiumProps = ExtractPropTypes<typeof cesiumTerrainProviderProps>
