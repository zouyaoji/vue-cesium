import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  length,
  topRadius,
  bottomRadius,
  slices,
  numberOfVerticalLines
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryCylinderOutline',
  props: {
    ...length,
    ...topRadius,
    ...bottomRadius,
    ...slices,
    ...numberOfVerticalLines,
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CylinderOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
