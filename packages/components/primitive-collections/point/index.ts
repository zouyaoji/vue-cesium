/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-11 10:50:46
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitive-collections\point\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  VcPickEvent,
  VcColor,
  VcComponentInternalInstance,
  VcDistanceDisplayCondition,
  VcNearFarScalar,
  VcPosition,
  VcReadyObject,
  VcComponentPublicInstance
} from '@vue-cesium/utils/types'
import { usePrimitiveCollectionItems } from '@vue-cesium/composables'
import {
  color,
  disableDepthTestDistance,
  distanceDisplayCondition,
  id,
  outlineColor,
  outlineWidth,
  pixelSize,
  position,
  scaleByDistance,
  show,
  translucencyByDistance,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { primitiveCollectionEmits } from '@vue-cesium/utils/emits'

export const pointProps = {
  ...color,
  ...disableDepthTestDistance,
  ...distanceDisplayCondition,
  ...id,
  ...outlineColor,
  ...outlineWidth,
  ...pixelSize,
  ...position,
  ...scaleByDistance,
  ...show,
  ...translucencyByDistance,
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPoint',
  props: pointProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PointPrimitive'
    usePrimitiveCollectionItems(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPointProps = {
  /**
   * Specify the inner color of the point.
   * Default value: white
   */
  color?: VcColor
  /**
   * Specify the distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied.
   */
  disableDepthTestDistance?: number
  /**
   * Specify the condition specifying at what distance from the camera that this point will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * Specify the user-defined value returned when the point is picked.
   */
  id?: any
  /**
   * Specify the outline color of the point.
   * Default value: black
   */
  outlineColor?: VcColor
  /**
   * Specify the outline width in pixels. This width adds to pixelSize, increasing the total size of the point.
   * Default value: 1.0
   */
  outlineWidth?: number
  /**
   * Specify the inner size of the point in pixels.
   * Default value: 0.0
   */
  pixelSize?: number
  /**
   * Specify the position of this point.
   */
  position?: VcPosition
  /**
   * Specify the near and far scaling properties of a point based on the point's distance from the camera. A point's scale will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the lower and upper bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the point's scale remains clamped to the nearest bound. This scale multiplies the pixelSize and outlineWidth to affect the total size of the point. If undefined, scaleByDistance will be disabled.
   */
  scaleByDistance?: VcNearFarScalar
  /**
   * Determines if this point will be shown. Use this to hide or show a point, instead of removing it and re-adding it to the collection.
   */
  show?: boolean
  /**
   * Specify the near and far translucency properties of a point based on the point's distance from the camera. A point's translucency will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the lower and upper bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the point's translucency remains clamped to the nearest bound. If undefined, translucencyByDistance will be disabled.
   */
  translucencyByDistance?: VcNearFarScalar
  /**
   * Specifies whether to respond to mouse pick events.
   * Default Value: true
   */
  enableMouseEvent?: boolean
  /**
   * Triggers before the VcPoint is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcPoint is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcPoint is destroyed.
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

export type VcPointRef = VcComponentPublicInstance<VcPointProps>
