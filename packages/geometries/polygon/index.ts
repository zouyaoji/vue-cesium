import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  polygonHierarchy,
  height,
  extrudedHeight,
  vertexFormat,
  stRotation,
  ellipsoid,
  granularity,
  perPositionHeight,
  closeTop,
  closeBottom,
  arcType
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryPolygon',
  props: {
    ...polygonHierarchy,
    ...height,
    ...extrudedHeight,
    ...vertexFormat,
    ...stRotation,
    ...ellipsoid,
    ...granularity,
    ...perPositionHeight,
    ...closeTop,
    ...closeBottom,
    ...arcType
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolygonGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
