import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  center,
  radius,
  ellipsoid,
  height,
  granularity,
  vertexFormat,
  extrudedHeight,
  stRotation
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryCircle',
  props: {
    ...center,
    ...radius,
    ...ellipsoid,
    ...height,
    ...granularity,
    ...vertexFormat,
    ...extrudedHeight,
    ...stRotation
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CircleGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
