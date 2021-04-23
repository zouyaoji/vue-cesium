import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  positions,
  width,
  ellipsoid,
  granularity,
  height,
  extrudedHeight,
  vertexFormat,
  cornerType
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryCorridor',
  props: {
    ...positions,
    ...width,
    ...ellipsoid,
    ...granularity,
    ...height,
    ...extrudedHeight,
    ...vertexFormat,
    ...cornerType
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CorridorGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
