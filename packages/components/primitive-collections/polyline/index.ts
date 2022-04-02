/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-21 08:59:40
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitive-collections\polyline\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcDistanceDisplayCondition,
  VcMaterial,
  VcPickEvent,
  VcPosition,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { usePrimitiveCollectionItems } from '@vue-cesium/composables'
import { distanceDisplayCondition, id, loop, material, positions, show, width, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { primitiveCollectionEmits } from '@vue-cesium/utils/emits'

export const polylineProps = {
  ...distanceDisplayCondition,
  ...id,
  ...loop,
  ...material,
  ...positions,
  ...show,
  ...width,
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPolyline',
  props: polylineProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Polyline'
    usePrimitiveCollectionItems(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPolylineProps = {
  /**
   * true if this polyline will be shown; otherwise, false.
   * Default value: true
   */
  show?: boolean
  /**
   * The width of the polyline in pixels.
   * Default: 1.0
   */
  width?: number
  /**
   * Whether a line segment will be added between the last and first line positions to make this line a loop.
   * Default value: false
   */
  loop?: boolean
  /**
   * The material.
   */
  material?: VcMaterial
  /**
   * The positions.
   */
  position?: VcPosition
  /**
   * The user-defined object to be returned when this polyline is picked.
   */
  id?: any
  /**
   * The condition specifying at what distance from the camera that this polyline will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * Specifies whether to respond to mouse pick events.
   * Default Value: true
   */
  enableMouseEvent?: boolean
  /**
   * Triggers before the VcPolyline is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcPolyline is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcPolyline is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the mouse is pressed on this point.
   */
  onMousedown?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse bounces up on this point.
   */
  onMouseup?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks on this point.
   */
  onClick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks outside this point.
   */
  onClickout?: (evt: VcPickEvent) => void
  /**
   * Triggers when the left mouse button double-clicks this point.
   */
  onDblclick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves on this point.
   */
  onMousemove?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves over to this point.
   */
  onMouseover?: (evt: VcPickEvent) => void
  /**
   * 	Triggers when the mouse moves out of this point.
   */
  onMouseout?: (evt: VcPickEvent) => void
}

export type VcPolylineRef = VcComponentPublicInstance<VcPolylineProps>
