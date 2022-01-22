/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-16 00:07:05
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\tile-coordinates\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcColor, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { tilingScheme, ellipsoid, tileWidth, tileHeight } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const tileCoordinatesImageryProviderProps = {
  ...tilingScheme,
  ...ellipsoid,
  color: {
    type: [Object, String, Array] as PropType<VcColor>,
    default: 'YELLOW'
  },
  ...tileWidth,
  ...tileHeight
}
export default defineComponent({
  name: 'VcImageryProviderTileCoordinates',
  props: tileCoordinatesImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'TileCoordinatesImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderTileCoordinatesProps = ExtractPropTypes<typeof tileCoordinatesImageryProviderProps>
