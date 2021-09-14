import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { center, radius, ellipsoid, height, granularity, extrudedHeight, numberOfVerticalLines } from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryCircleOutline',
  props: {
    ...center,
    ...radius,
    ...ellipsoid,
    ...height,
    ...granularity,
    ...extrudedHeight,
    ...numberOfVerticalLines
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CircleOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
