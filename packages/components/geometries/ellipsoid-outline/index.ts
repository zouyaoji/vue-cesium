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
  subdivisions
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryEllipsoidOutline',
  props: {
    ...radii,
    ...innerRadii,
    ...minimumClock,
    ...maximumClock,
    ...minimumCone,
    ...maximumCone,
    ...stackPartitions,
    ...slicePartitions,
    ...subdivisions
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'EllipsoidOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
