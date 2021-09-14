import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { radius, stackPartitions, slicePartitions, subdivisions } from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometrySphereOutline',
  props: {
    ...radius,
    ...stackPartitions,
    ...slicePartitions,
    ...subdivisions
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'SphereOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
