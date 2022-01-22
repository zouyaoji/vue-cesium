/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-15 09:50:23
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\arcgis\terrain.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance, PropType } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { ellipsoid, token } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'
export const arcgisTerrainProviderProps = {
  url: {
    type: [String, Object] as PropType<string | Promise<string> | Promise<Cesium.Resource> | Cesium.Resource>,
    default: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
  },
  ...ellipsoid,
  ...token
}
export default defineComponent({
  name: 'VcTerrainProviderArcgis',
  props: arcgisTerrainProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ArcGISTiledElevationTerrainProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcTerrainProviderArcgisProps = ExtractPropTypes<typeof arcgisTerrainProviderProps>
