import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  center,
  semiMajorAxis,
  semiMinorAxis,
  ellipsoid,
  height,
  extrudedHeight,
  rotation,
  stRotation,
  granularity,
  numberOfVerticalLines
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryEllipseOutline',
  props: {
    ...center,
    ...semiMajorAxis,
    ...semiMinorAxis,
    ...ellipsoid,
    ...height,
    ...extrudedHeight,
    ...rotation,
    ...stRotation,
    ...granularity,
    ...numberOfVerticalLines
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'EllipseOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
