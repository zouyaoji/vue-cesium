import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  positions,
  granularity,
  maximumHeights,
  minimumHeights,
  ellipsoid,
  vertexFormat
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryWall',
  props: {
    ...positions,
    ...granularity,
    ...maximumHeights,
    ...minimumHeights,
    ...ellipsoid,
    ...vertexFormat
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'WallGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
