<script lang="ts">
import { defineComponent, getCurrentInstance, HTMLAttributes, provide } from 'vue'
import { Cesium as CesiumNative, EntityEmitType, VcComponentInternalInstance, } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables/index'
import { mergeDescriptors } from '@vue-cesium/utils/mergeDescriptors'
import { position, plane } from '@vue-cesium/utils/cesiumProps'
import { vcKey } from '@vue-cesium/utils/config'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'

export default defineComponent({
  name: 'VcEntity',
  props: {
    ...position,
    ...plane,
    id: String,
    name: String,
    availability: Object,
    show: {
      type: Boolean,
      default: true
    },
    description: [String, Object],
    orientation: Object,
    viewFrom: Object,
    parent: Object,
    billboard: Object,
    corridor: Object,
    cylinder: Object,
    ellipse: Object,
    ellipsoid: Object,
    box: Object,
    label: Object,
    model: Object,
    tileset: Object,
    path: Object,
    point: Object,
    polygon: Object,
    polyline: Object,
    properties: Object,
    polylineVolume: Object,
    rectangle: Object,
    wall: Object,
    enableEvent: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    'beforeLoad',
    'ready',
    'destroyed',
    'update:billboard',
    'update:box',
    'update:corridor',
    'update:cylinder',
    'update:ellipse',
    'update:ellipsoid',
    'update:ellipse',
    'update:label',
    'update:model',
    'update:path',
    'update:plane',
    'update:point',
    'update:polygon',
    'update:polyline',
    'update:polylineVolume',
    'update:rectangle',
    'update:tileset',
    'update:wall'
  ],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Entity'
    instance.cesiumEvents = ['definitionChanged']
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { emit } = ctx

    // methods
    instance.mount = async () => {
      const entity = $services?.entities?.add(instance.cesiumObject)
      return $services?.entities.contains(entity)
    }

    instance.unmount = async () => {
      return $services?.entities?.remove(instance.cesiumObject as CesiumNative.Entity)
    }

    const updateGraphics = (graphics, emitType: EntityEmitType) => {
      const listener = getInstanceListener(instance, emitType)
      if (listener) {
        emit(emitType, graphics)
      } else {
        instance.cesiumObject[emitType.substr(7)] = graphics
      }
      return true
    }

    const getServices = () => {
      return mergeDescriptors($services, {
        get entity() {
          return instance.cesiumObject
        },
        get entityViewModel() {
          return instance.proxy
        }
      })
    }

    provide(vcKey, getServices())

    return {
      createPromise: commonState.createPromise,
      load: commonState.load,
      unload: commonState.unload,
      reload: commonState.reload,
      renderVNode: commonState.renderVNode,
      updateGraphics: updateGraphics,
      getCesiumObject: () => instance.cesiumObject
    }
  },
  render() {
    return this.renderVNode()
  },
  stubVNode: {
    attrs(instance: VcComponentInternalInstance): HTMLAttributes {
      return {
        class: instance.proxy.$options.name
      }
    }
  }
})
</script>
