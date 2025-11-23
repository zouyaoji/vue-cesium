/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-08-12 11:48:54
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \10_vue-cesium\packages\components\geometry-instance\src\index.ts
 */
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcGeometry, VcReadyObject } from '@vue-cesium/utils/types'
import type { PropType, VNode } from 'vue'
import type { VcPrimitiveRef } from '../../primitives'
import { useCommon } from '@vue-cesium/composables'
import { id, modelMatrix } from '@vue-cesium/utils/cesium-props'
import { vcKey } from '@vue-cesium/utils/config'
import { commonEmits } from '@vue-cesium/utils/emits'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { hSlot } from '@vue-cesium/utils/private/render'
import { getInstanceListener, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance, h, provide, ref } from 'vue'

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
  emits,
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
      const parentVM = getVcParentInstance(instance).proxy as VcPrimitiveRef
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
      const parentVM = getVcParentInstance(instance).proxy as VcPrimitiveRef
      parentVM.__removeGeometryInstances?.(geometryInstance)
      return true
    }

    const updateGeometry = (geometry) => {
      const listener = getInstanceListener(instance, 'update:geometry')
      if (listener) {
        emit('update:geometry', geometry)
      }
      else {
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

export type VcGeometryInstanceEmits = typeof emits
export interface VcGeometryInstanceProps {
  /**
   * The geometry to instance.
   */
  'geometry'?: Cesium.Geometry | Cesium.GeometryFactory
  /**
   * The model matrix that transforms to transform the geometry from model to world coordinates.
   */
  'modelMatrix'?: Cesium.Matrix4
  /**
   * A user-defined object to return when the instance is picked with Scene#pick or get/set per-instance attributes with Primitive#getGeometryInstanceAttributes.
   */
  'id'?: any
  /**
   * Per-instance attributes like a show or color attribute shown in the example below.
   */
  'attributes'?: any
  /**
   * Triggers before the VcGeometryInstance is loaded.
   */
  'onBeforeLoad'?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryInstance is successfully loaded.
   */
  'onReady'?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  'onUnready'?: (e: any) => void
  /**
   * Triggers when the VcGeometryInstance is destroyed.
   */
  'onDestroyed'?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the geometry mounted.
   */
  'onUpdate:geometry'?: (payload: VcGeometry) => void
}

export interface VcGeometryInstanceRef extends VcComponentPublicInstance<VcGeometryInstanceProps> {
  /**
   * private but needed by VcGeometryXXX.
   * @param geometry
   */
  __updateGeometry?: (geometry: Cesium.Geometry) => boolean
}

export interface VcGeometryInstanceSlots {
  /**
   * Slot for vc-geometry-xxx.
   */
  default: () => VNode[]
}
