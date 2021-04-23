import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  rectangle,
  vertexFormat,
  ellipsoid,
  granularity,
  height,
  rotation,
  stRotation,
  extrudedHeight
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryRectangle',
  props: {
    ...rectangle,
    ...vertexFormat,
    ...ellipsoid,
    ...granularity,
    ...height,
    ...rotation,
    ...stRotation,
    ...extrudedHeight
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'RectangleGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
