/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-16 00:44:23
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\wmts\index.ts
 */
import type { ExtractPropTypes } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import {
  url,
  format,
  clock,
  times,
  tileWidth,
  tileHeight,
  tilingScheme,
  rectangle,
  minimumLevel,
  maximumLevel,
  ellipsoid,
  credit,
  subdomains,
  dimensions
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const wmtsImageryProviderProps = {
  ...url,
  ...format,
  layer: {
    type: String,
    required: true
  },
  wmtsStyle: {
    type: String,
    required: true
  },
  tileMatrixSetID: {
    type: String,
    required: true
  },
  tileMatrixLabels: Array,
  ...clock,
  ...times,
  ...dimensions,
  ...tileWidth,
  ...tileHeight,
  ...tilingScheme,
  ...rectangle,
  ...minimumLevel,
  ...maximumLevel,
  ...ellipsoid,
  ...credit,
  ...subdomains
}
export default defineComponent({
  name: 'VcImageryProviderWmts',
  props: wmtsImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'WebMapTileServiceImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderWmtsProps = ExtractPropTypes<typeof wmtsImageryProviderProps>
