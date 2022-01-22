/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 14:50:14
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometry-instance\src\index.ts
 */
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcGeometry } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode, PropType, ref, h, provide } from 'vue'
import type { ExtractPropTypes } from 'vue'
import { useCommon } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { modelMatrix, id } from '@vue-cesium/utils/cesium-props'
import { getInstanceListener, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { hSlot } from '@vue-cesium/utils/private/render'
import { vcKey } from '@vue-cesium/utils/config'
import { commonEmits } from '@vue-cesium/utils/emits'
export const geometryInstanceProps = {
  geometry: Object as PropType<Cesium.Geometry | Cesium.GeometryFactory>,
  ...modelMatrix,
  ...id,
  attributes: Object
}
const emits = {
  ...commonEmits,
  'update:geometry': (payload: VcGeometry) => true
}
export default defineComponent({
  name: 'VcGeometryInstance',
  props: geometryInstanceProps,
  emits: emits,
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
      if (parentVM.__childCount !== undefined) {
        vcIndex.value = parentVM.__childCount.value || 0
        parentVM.__childCount.value += 1
      }

      const geometryInstance = instance.cesiumObject as Cesium.GeometryInstance
      parentVM.__updateGeometryInstances?.(geometryInstance, vcIndex.value)
      return true
    }
    instance.unmount = async () => {
      const geometryInstance = instance.cesiumObject as Cesium.GeometryInstance
      const parentVM = getVcParentInstance(instance).proxy as VcComponentPublicInstance
      parentVM.__removeGeometryInstances?.(geometryInstance)
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
              class: kebabCase(instance.proxy?.$options.name || ''),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryInstanceProps = ExtractPropTypes<typeof geometryInstanceProps>
export type VcGeometryInstanceEmits = typeof emits
