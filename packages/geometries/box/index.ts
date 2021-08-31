import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { dimensions, vertexFormat } from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGeometryBox',
  props: {
    ...dimensions,
    ...vertexFormat
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BoxGeometry'
    const geometriesState = useGeometries(props, ctx, instance)

    // methods
    instance.createCesiumObject = async () => {
      const options: any = geometriesState.transformProps(props)
      return Cesium.BoxGeometry.fromDimensions(options)
    }

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
