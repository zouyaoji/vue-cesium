import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode, PropType, ref, h, provide } from 'vue'
import { useCommon } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { modelMatrix, id } from '@vue-cesium/utils/cesium-props'
import { getInstanceListener, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { hSlot } from '@vue-cesium/utils/private/render'
import { vcKey } from '@vue-cesium/utils/config'
export default defineComponent({
  name: 'VcInstanceGeometry',
  props: {
    geometry: Object as PropType<Cesium.Geometry | Cesium.GeometryFactory>,
    ...modelMatrix,
    ...id,
    attributes: Object
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'update:geometry'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.renderByParent = true
    instance.cesiumClass = 'GeometryInstance'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { emit } = ctx
    const vcIndex = ref(0)
    // methods
    instance.createCesiumObject = async () => {
      const options = commonState.transformProps(props) as any
      if (!options.geometry) {
        options.geometry = new Cesium.Geometry({ attributes: new Cesium.GeometryAttributes() })
      }
      return new Cesium.GeometryInstance(options)
    }
    instance.mount = async () => {
      const parentVM = getVcParentInstance(instance).proxy as VcComponentPublicInstance
      vcIndex.value = parentVM.__childCount.value
      parentVM.__childCount.value += 1
      const geometryInstance = instance.cesiumObject as Cesium.GeometryInstance
      parentVM.__updateGeometryInstances(geometryInstance, vcIndex.value)
      return true
    }

    const updateGeometry = geometry => {
      const listener = getInstanceListener(instance, 'update:geometry')
      if (listener) {
        emit('update:geometry', geometry)
      } else {
        const geometryInstance = instance.cesiumObject as Cesium.GeometryInstance
        geometryInstance.geometry = geometry
      }

      return true
    }

    const getServices = () => {
      return mergeDescriptors(commonState.getServices(), {
        get geometryInstance() {
          return instance.cesiumObject as Cesium.GeometryInstance
        }
      })
    }

    // provide
    provide(vcKey, getServices())

    // expose public methods
    Object.assign(instance.proxy, {
      // private but needed by VcGeometryXXX
      __updateGeometry: updateGeometry
    })

    return () =>
      ctx.slots.default
        ? h(
            'i',
            {
              class: kebabCase(instance.proxy.$options.name),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
