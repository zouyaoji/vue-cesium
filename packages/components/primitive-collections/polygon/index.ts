/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-19 22:09:27
 * @LastEditTime: 2022-03-11 10:52:02
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitive-collections\polygon\index.ts
 */
import type { WatchStopHandle } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, onUnmounted, watch } from 'vue'
import type {
  VcPickEvent,
  VcAppearance,
  VcCartesian3Array,
  VcComponentInternalInstance,
  VcPolygonHierarchy,
  VcReadyObject,
  VcComponentPublicInstance
} from '@vue-cesium/utils/types'
import { usePrimitiveCollectionItems } from '@vue-cesium/composables'
import {
  id,
  show,
  enableMouseEvent,
  positions,
  classificationType,
  polygonHierarchy,
  clampToGround,
  appearance,
  depthFailAppearance,
  ellipsoid,
  allowPicking,
  asynchronous
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { PolygonPrimitive } from '@vue-cesium/shared'
import { makeAppearance, makeCartesian3Array, makePolygonHierarchy } from '@vue-cesium/utils/cesium-helpers'
import { primitiveCollectionEmits } from '@vue-cesium/utils/emits'

export const polygonProps = {
  ...positions,
  ...polygonHierarchy,
  ...appearance,
  ...depthFailAppearance,
  ...show,
  ...id,
  ...classificationType,
  ...clampToGround,
  ...ellipsoid,
  ...allowPicking,
  ...asynchronous,
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPolygon',
  props: polygonProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolygonPrimitive'
    const primitiveCollectionItemsState = usePrimitiveCollectionItems(props, ctx, instance)

    if (primitiveCollectionItemsState === void 0) {
      return
    }

    // watcch
    let unwatchFns: Array<WatchStopHandle> = []
    unwatchFns.push(
      watch(
        () => props.clampToGround,
        val => {
          const polygonPrimitive = instance.cesiumObject as PolygonPrimitive
          polygonPrimitive && (polygonPrimitive.clampToGround = val as boolean)
        }
      )
    )
    unwatchFns.push(
      watch(
        () => props.positions,
        val => {
          const polygonPrimitive = instance.cesiumObject as PolygonPrimitive
          polygonPrimitive && (polygonPrimitive.positions = makeCartesian3Array(val!) as Array<Cesium.Cartesian3>)
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.polygonHierarchy,
        val => {
          const polygonPrimitive = instance.cesiumObject as PolygonPrimitive
          polygonPrimitive && (polygonPrimitive.polygonHierarchy = makePolygonHierarchy(val!) as Cesium.PolygonHierarchy)
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.appearance,
        val => {
          const polygonPrimitive = instance.cesiumObject as PolygonPrimitive
          polygonPrimitive && (polygonPrimitive.appearance = makeAppearance.call(instance, val!) as Cesium.Appearance)
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.depthFailAppearance,
        val => {
          const polygonPrimitive = instance.cesiumObject as PolygonPrimitive
          polygonPrimitive && (polygonPrimitive.depthFailAppearance = makeAppearance.call(instance, val!) as Cesium.Appearance)
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.show,
        val => {
          const polygonPrimitive = instance.cesiumObject as PolygonPrimitive
          polygonPrimitive && (polygonPrimitive.show = val)
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.classificationType,
        val => {
          const polygonPrimitive = instance.cesiumObject as PolygonPrimitive
          polygonPrimitive && (polygonPrimitive.classificationType = val as number)
        }
      )
    )

    // methods
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionItemsState.transformProps(props)
      return new PolygonPrimitive(options)
    }

    instance.mount = async () => {
      const primitives = primitiveCollectionItemsState.$services.primitives
      const collectionItem = instance.cesiumObject
      ;(collectionItem as any)._vcParent = primitives
      return primitives && primitives.add(collectionItem)
    }

    instance.unmount = async () => {
      const primitives = primitiveCollectionItemsState.$services.primitives
      const collectionItem = instance.cesiumObject
      return primitives && !primitives.isDestroyed() && primitives.remove(collectionItem)
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPolygonProps = {
  /**
   * A user-defined object to return when the instance is picked with Scene#pick or get/set per-instance attributes with Primitive#getGeometryInstanceAttributes.
   */
  id?: any
  /**
   * Determines if this primitive will be shown.
   * Default value: true
   */
  show?: boolean
  positions?: VcCartesian3Array
  classificationType?: number
  /**
   * 	A polygon hierarchy that can include holes.
   */
  polygonHierarchy?: VcPolygonHierarchy
  /**
   * Specify whether the drawing result object is attached to the ground or 3dtiles. Only polyline and polygon objects work.
   */
  clampToGround?: boolean
  /**
   * The appearance used to render the primitive.
   */
  appearance?: VcAppearance
  /***
   * The appearance used to shade this primitive when it fails the depth test.
   */
  depthFailAppearance?: VcAppearance
  /**
   * The ellipsoid to be used as a reference.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.
   */
  allowPicking?: boolean
  /**
   * Determines if the primitive will be created asynchronously or block until ready.
   */
  asynchronous?: boolean
  /**
   * Specifies whether to respond to mouse pick events.
   * Default Value: true
   */
  enableMouseEvent?: boolean
  /**
   * Triggers before the VcPolygon is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcPolygon is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcPolygon is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the mouse is pressed on this polygon.
   */
  mousedown?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse bounces up on this polygon.
   */
  mouseup?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks on this polygon.
   */
  click?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks outside this polygon.
   */
  clickout?: (evt: VcPickEvent) => void
  /**
   * Triggers when the left mouse button double-clicks this polygon.
   */
  dblclick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves on this polygon.
   */
  mousemove?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves over to this polygon.
   */
  mouseover?: (evt: VcPickEvent) => void
  /**
   * 	Triggers when the mouse moves out of this polygon.
   */
  mouseout?: (evt: VcPickEvent) => void
}

export type VcPolygonRef = VcComponentPublicInstance<VcPolygonProps>
