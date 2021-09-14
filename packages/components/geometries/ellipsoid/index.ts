import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  radii,
  innerRadii,
  minimumClock,
  maximumClock,
  minimumCone,
  maximumCone,
  stackPartitions,
  slicePartitions,
  vertexFormat
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryEllipsoid',
  props: {
    ...radii,
    ...innerRadii,
    ...minimumClock,
    ...maximumClock,
    ...minimumCone,
    ...maximumCone,
    ...stackPartitions,
    ...slicePartitions,
    ...vertexFormat
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'EllipsoidGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
