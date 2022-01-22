/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-15 23:42:48
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\osm\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { fileExtension, rectangle, minimumLevel, maximumLevel, ellipsoid } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const osmImageryProviderProps = {
  url: {
    type: String,
    default: 'https://a.tile.openstreetmap.org'
  },
  ...fileExtension,
  ...rectangle,
  ...minimumLevel,
  ...maximumLevel,
  ...ellipsoid,
  credit: {
    type: [String, Object] as PropType<string | Cesium.Credit>,
    default: 'MapQuest, Open Street Map and contributors, CC-BY-SA'
  }
}
export default defineComponent({
  name: 'VcImageryProviderOsm',
  props: osmImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'OpenStreetMapImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderOsmProps = ExtractPropTypes<typeof osmImageryProviderProps>
