import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { positions, granularity, maximumHeights, minimumHeights, ellipsoid } from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryWallOutline',
  props: {
    ...positions,
    ...granularity,
    ...maximumHeights,
    ...minimumHeights,
    ...ellipsoid
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'WallOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
