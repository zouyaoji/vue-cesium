/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-15 21:59:25
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\grid\index.ts
 */
import type { PropType, ExtractPropTypes } from 'vue'
import type { VcColor, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { useProviders } from '@vue-cesium/composables'
import { tilingScheme, ellipsoid, tileWidth, tileHeight, glowColor } from '@vue-cesium/utils/cesium-props'
import { makeColor } from '@vue-cesium/utils/cesium-helpers'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const gridImageryProviderProps = {
  ...tilingScheme,
  ...ellipsoid,
  cells: {
    type: Number,
    default: 8
  },
  color: {
    type: [String, Object, Array] as PropType<VcColor>,
    default: () => [1.0, 1.0, 1.0, 0.4],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  },
  ...glowColor,
  glowWidth: {
    type: Number,
    default: 6
  },
  backgroundColor: {
    type: [String, Array, Object] as PropType<VcColor>,
    default: () => [0.0, 0.5, 0.0, 0.2],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  },
  ...tileWidth,
  ...tileHeight,
  canvasSize: {
    type: Number,
    default: 256
  }
}
export default defineComponent({
  name: 'VcImageryProviderGrid',
  props: gridImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'GridImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderGridProps = ExtractPropTypes<typeof gridImageryProviderProps>
