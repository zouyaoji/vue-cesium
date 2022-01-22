/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-16 00:11:59
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\tile-map-service\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import {
  fileExtension,
  credit,
  minimumLevel,
  maximumLevel,
  rectangle,
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight,
  projectionTransforms
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const tmsImageryProviderProps = {
  url: [String, Object] as PropType<string | Promise<string> | Promise<Cesium.Resource> | Cesium.Resource>,
  ...fileExtension,
  ...credit,
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  ...tilingScheme,
  ...ellipsoid,
  ...tileWidth,
  ...tileHeight,
  flipXY: Boolean,
  ...projectionTransforms
}
export default defineComponent({
  name: 'VcImageryProviderTms',
  props: tmsImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'TileMapServiceImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderTmsProps = ExtractPropTypes<typeof tmsImageryProviderProps>
