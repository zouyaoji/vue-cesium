/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-25 11:10:21
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitive-collections\billboard\index.ts
 */
import type { ExtractPropTypes } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  VcPickEvent,
  VcCartesian2,
  VcColor,
  VcComponentInternalInstance,
  VcDistanceDisplayCondition,
  VcNearFarScalar,
  VcPosition,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { usePrimitiveCollectionItems } from '@vue-cesium/composables'
import {
  alignedAxis,
  color,
  disableDepthTestDistance,
  distanceDisplayCondition,
  eyeOffset,
  height,
  heightReference,
  horizontalOrigin,
  id,
  image,
  pixelOffset,
  pixelOffsetScaleByDistance,
  position,
  rotation,
  scale,
  scaleByDistance,
  show,
  sizeInMeters,
  translucencyByDistance,
  verticalOrigin,
  width,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { primitiveCollectionEmits } from '@vue-cesium/utils/emits'

export const billboardProps = {
  ...alignedAxis,
  ...color,
  ...disableDepthTestDistance,
  ...distanceDisplayCondition,
  ...eyeOffset,
  ...height,
  ...heightReference,
  ...horizontalOrigin,
  ...id,
  ...image,
  ...pixelOffset,
  ...pixelOffsetScaleByDistance,
  ...position,
  ...rotation,
  ...scale,
  ...scaleByDistance,
  ...show,
  ...sizeInMeters,
  ...translucencyByDistance,
  ...verticalOrigin,
  ...width,
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcBillboard',
  props: billboardProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Billboard'
    usePrimitiveCollectionItems(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

// export type VcBillboardProps = ExtractPropTypes<typeof billboardProps>
export type VcBillboardProps = {
  /**
   * Specify the aligned axis in world space. The aligned axis is the unit vector that the billboard up vector points towards. The default is the zero vector, which means the billboard is aligned to the screen up vector.
   */
  alignedAxis?: VcPosition
  /**
   * Specify the color that is multiplied with the billboard's texture. This has two common use cases. First, the same white texture may be used by many different billboards, each with a different color, to create colored billboards. Second, the color's alpha component can be used to make the billboard translucent as shown below. An alpha of 0.0 makes the billboard transparent, and 1.0 makes the billboard opaque.
   * Default value: white
   */
  color?: VcColor
  /**
   * Specify the distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied.
   */
  disableDepthTestDistance?: number
  /**
   * Specify the condition specifying at what distance from the camera that this billboard will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * Specify the 3D offset applied to this billboard in eye coordinates. Eye coordinates is a left-handed coordinate system, where x points towards the viewer's right, y points up, and z points into the screen. Eye coordinates use the same scale as world and model coordinates, which is typically meters.
   */
  eyeOffset?: VcPosition
  /**
   * Specify a height for the billboard. If undefined, the image height will be used.
   */
  height?: number
  /**
   * Specify the height reference of this billboard.
   */
  heightReference?: number
  /**
   * Specify the horizontal origin of this billboard, which determines if the billboard is to the left, center, or right of its anchor position.
   * Default value: 0
   */
  horizontalOrigin?: number
  /**
   * Specify the user-defined object returned when the billboard is picked.
   */
  id?: any
  /**
   * Specify the image to be used for this billboard. If a texture has already been created for the given image, the existing texture is used.
   */
  image?: string
  /**
   * Specify the pixel offset in screen space from the origin of this billboard. This is commonly used to align multiple billboards and labels at the same position, e.g., an image and text. The screen space origin is the top, left corner of the canvas; x increases from left to right, and y increases from top to bottom.
   * Default value: { x:0, y: 0 }
   */
  pixelOffset?: VcCartesian2
  /**
   * Specify near and far pixel offset scaling properties of a Billboard based on the billboard's distance from the camera. A billboard's pixel offset will be scaled between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the lower and upper bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the billboard's pixel offset scale remains clamped to the nearest bound. If undefined, pixelOffsetScaleByDistance will be disabled.
   */
  pixelOffsetScaleByDistance?: VcNearFarScalar
  /**
   * Specify the position of this billboard.
   */
  position?: VcPosition
  /**
   * Specify the rotation angle in radians.
   */
  rotation?: number
  /**
   * Specify the uniform scale that is multiplied with the billboard's image size in pixels. A scale of 1.0 does not change the size of the billboard; a scale greater than 1.0 enlarges the billboard; a positive scale less than 1.0 shrinks the billboard.
   */
  scale?: number
  /**
   * Specify near and far scaling properties of a Billboard based on the billboard's distance from the camera. A billboard's scale will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the lower and upper bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the billboard's scale remains clamped to the nearest bound. If undefined, scaleByDistance will be disabled.
   */
  scaleByDistance?: VcNearFarScalar
  /**
   * Determines if this billboard will be shown. Use this to hide or show a billboard, instead of removing it and re-adding it to the collection.
   */
  show?: boolean
  /**
   *  Determines if the billboard size is in meters or pixels. true to size the billboard in meters; otherwise, the size is in pixels.
   */
  sizeInMeters?: boolean
  /**
   * Specify near and far translucency properties of a Billboard based on the billboard's distance from the camera. A billboard's translucency will interpolate between the NearFarScalar#nearValue and NearFarScalar#farValue while the camera distance falls within the lower and upper bounds of the specified NearFarScalar#near and NearFarScalar#far. Outside of these ranges the billboard's translucency remains clamped to the nearest bound. If undefined, translucencyByDistance will be disabled.
   */
  translucencyByDistance?: VcNearFarScalar
  /**
   * Specify the vertical origin of this billboard, which determines if the billboard is to the above, below, or at the center of its anchor position.
   */
  verticalOrigin?: number
  /**
   * Specify a width for the billboard. If undefined, the image width will be used.
   */
  width?: number
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
   * Triggers when the mouse is pressed on this billboard.
   */
  mousedown?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse bounces up on this billboard.
   */
  mouseup?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks on this billboard.
   */
  click?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks outside this billboard.
   */
  clickout?: (evt: VcPickEvent) => void
  /**
   * Triggers when the left mouse button double-clicks this billboard.
   */
  dblclick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves on this billboard.
   */
  mousemove?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves over to this billboard.
   */
  mouseover?: (evt: VcPickEvent) => void
  /**
   * 	Triggers when the mouse moves out of this billboard.
   */
  mouseout?: (evt: VcPickEvent) => void
}
