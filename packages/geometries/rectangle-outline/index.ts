import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  rectangle,
  ellipsoid,
  granularity,
  height,
  rotation,
  extrudedHeight
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryRectangleOutline',
  props: {
    ...rectangle,
    ...ellipsoid,
    ...granularity,
    ...height,
    ...rotation,
    ...extrudedHeight
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'RectangleOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
