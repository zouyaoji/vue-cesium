/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-11 10:47:57
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitive-collections\label\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import {
  VcPickEvent,
  VcCartesian2,
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
  backgroundColor,
  backgroundPadding,
  disableDepthTestDistance,
  distanceDisplayCondition,
  eyeOffset,
  fillColor,
  font,
  heightReference,
  horizontalOrigin,
  id,
  outlineColor,
  outlineWidth,
  pixelOffset,
  pixelOffsetScaleByDistance,
  position,
  scale,
  scaleByDistance,
  show,
  showBackground,
  labelStyle,
  text,
  translucencyByDistance,
  verticalOrigin,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { primitiveCollectionEmits } from '@vue-cesium/utils/emits'

export const labelProps = {
  ...backgroundColor,
  ...backgroundPadding,
  ...disableDepthTestDistance,
  ...distanceDisplayCondition,
  ...eyeOffset,
  ...fillColor,
  ...font,
  ...heightReference,
  ...horizontalOrigin,
  ...id,
  ...outlineColor,
  ...outlineWidth,
  ...pixelOffset,
  ...pixelOffsetScaleByDistance,
  ...position,
  ...scale,
  ...scaleByDistance,
  ...show,
  ...showBackground,
  ...labelStyle,
  ...text,
  totalScale: {
    type: Number,
    default: 1.0
  },
  ...translucencyByDistance,
  ...verticalOrigin,
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcLabel',
  props: labelProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Label'
    usePrimitiveCollectionItems(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcLabelProps = {
  /**
   * Specify the background color of this label.
   * Default value: { x: 0.165, y: 0.165, z: 0.165, w: 0.8 }
   */
  backgroundColor?: VcColor
  /**
   * Specify the background padding, in pixels, of this label. The x value controls horizontal padding, and the y value controls vertical padding.
   * Default value: { x: 7, y: 5 }
   */
  backgroundPadding?: VcCartesian2
  /**
   * Specify the distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied.
   */
  disableDepthTestDistance?: number
  /**
   * Specify the condition specifying at what distance from the camera that this label will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * Specify the 3D VcPosition offset applied to this label in eye coordinates. Eye coordinates is a left-handed coordinate system, where x points towards the viewer's right, y points up, and z points into the screen. Eye coordinates use the same scale as world and model coordinates, which is typically meters.
   * Default value: { x: 0, y: 0, z: 0 }
   */
  eyeOffset?: VcPosition
  /**
   * Specify the fill color of this label.
   * Default value: white
   */
  fillColor?: VcColor
  /**
   * Specify the font used to draw this label. Fonts are specified using the same syntax as the CSS 'font' property.
   * Default value: 30px sans-serif
   */
  font?: string
  /**
   * Specify the height reference of this label.
   */
  heightReference?: number
  /**
   * Specify the horizontal origin of this label, which determines if the label is drawn to the left, center, or right of its anchor position.
   */
  horizontalOrigin?: number
  /**
   * Specify the user-defined value returned when the label is picked.
   */
  id?: any
  /**
   * Specify the outline color of this label.
   * Default value: black
   */
  outlineColor?: VcColor
  /**
   * Specify the outline width of this label.
   * Default value: 1.0
   */
  outlineWidth?: number
  /**
   * Specify the pixel offset in screen space from the origin of this label. This is commonly used to align multiple labels and billboards at the same position, e.g., an image and text. The screen space origin is the top, left corner of the canvas; x increases from left to right, and y increases from top to bottom.
   */
  pixelOffset?: VcCartesian2
  /**
   * Specify near and far pixel offset scaling properties of a Label based on the Label's distance from the camera. A label's pixel offset will be scaled between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the lower and upper bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the label's pixel offset scaling remains clamped to the nearest bound. If undefined, pixelOffsetScaleByDistance will be disabled.
   */
  pixelOffsetScaleByDistance?: VcNearFarScalar
  /**
   * Specify the VcPosition of this label.
   */
  position?: VcPosition
  /**
   * Specify the uniform scale that is multiplied with the label's size in pixels. A scale of 1.0 does not change the size of the label; a scale greater than 1.0 enlarges the label; a positive scale less than 1.0 shrinks the label.
   */
  scale?: number
  /**
   * Specify near and far scaling properties of a Label based on the label's distance from the camera. A label's scale will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the lower and upper bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the label's scale remains clamped to the nearest bound. If undefined, scaleByDistance will be disabled.
   */
  scaleByDistance?: VcNearFarScalar
  /**
   * Determines if this label will be shown. Use this to hide or show a label, instead of removing it and re-adding it to the collection.
   */
  show?: boolean
  /**
   * Determines if a background behind this label will be shown.
   * Default value: false
   */
  showBackground?: boolean
  /**
   * Specify the style of this label.
   */
  labelStyle?: number
  /**
   * Specify the text of this label.
   */
  text?: string
  /**
   * Specify near and far translucency properties of a Label based on the Label's distance from the camera. A label's translucency will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the lower and upper bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the label's translucency remains clamped to the nearest bound. If undefined, translucencyByDistance will be disabled.
   */
  translucencyByDistance?: VcNearFarScalar
  /**
   * Specify the vertical origin of this label, which determines if the label is to the above, below, or at the center of its anchor position.
   */
  verticalOrigin?: number
  /**
   * Specifies whether to respond to mouse pick events.
   * Default Value: true
   */
  enableMouseEvent?: boolean
  /**
   * Triggers before the label is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the label is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the label is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the mouse is pressed on this label.
   */
  onMousedown?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse bounces up on this label.
   */
  onMouseup?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks on this label.
   */
  onClick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks outside this label.
   */
  onClickout?: (evt: VcPickEvent) => void
  /**
   * Triggers when the left mouse button double-clicks this label.
   */
  onDblclick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves on this label.
   */
  onMousemove?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves over to this label.
   */
  onMouseover?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves out of this label.
   */
  onMouseout?: (evt: VcPickEvent) => void
}

export type VcLabelRef = VcComponentPublicInstance<VcLabelProps>
