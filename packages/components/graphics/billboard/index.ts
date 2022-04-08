/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 11:32:32
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\billboard\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  VcBoundingRectangle,
  VcCallbackPropertyFunction,
  VcCartesian2,
  VcColor,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcDistanceDisplayCondition,
  VcNearFarScalar,
  VcPosition,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  image,
  scale,
  pixelOffset,
  eyeOffset,
  horizontalOrigin,
  verticalOrigin,
  heightReference,
  color,
  rotation,
  alignedAxis,
  sizeInMeters,
  width,
  height,
  scaleByDistance,
  translucencyByDistance,
  pixelOffsetScaleByDistance,
  imageSubRegion,
  distanceDisplayCondition,
  disableDepthTestDistance
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { graphicsEmits } from '@vue-cesium/utils/emits'
export const billboarGraphicsProps = {
  ...image,
  ...scale,
  ...pixelOffset,
  ...eyeOffset,
  ...horizontalOrigin,
  ...verticalOrigin,
  ...heightReference,
  ...color,
  ...rotation,
  ...alignedAxis,
  ...sizeInMeters,
  ...width,
  ...height,
  ...scaleByDistance,
  ...translucencyByDistance,
  ...pixelOffsetScaleByDistance,
  ...disableDepthTestDistance,
  ...show,
  ...distanceDisplayCondition,
  ...imageSubRegion
}
export default defineComponent({
  name: 'VcGraphicsBillboard',
  props: billboarGraphicsProps,
  emits: graphicsEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BillboardGraphics'
    useGraphics(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsBillboardProps = {
  /**
   * A boolean Property specifying the visibility of the billboard.
   * Default value: true
   */
  show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the Image, URI, or Canvas to use for the billboard.
   */
  image?: string | HTMLCanvasElement | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>
  /**
   * A numeric Property specifying the scale to apply to the image size.
   * Default value: 1.0
   */
  scale?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A VcCartesian2 Property specifying the pixel offset.
   * Default value: { x: 0, y: 0 }
   */
  pixelOffset?: VcCartesian2
  /**
   * A VcPosition Property specifying the eye offset.
   * Default value: { x: 0, y: 0, z: 0 }
   */
  eyeOffset?: VcPosition
  /**
   * A Property specifying the HorizontalOrigin.
   * Default value: 0
   */
  horizontalOrigin?: number | Cesium.HorizontalOrigin | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the VerticalOrigin.
   * Default value: 0
   */
  verticalOrigin?: number | Cesium.VerticalOrigin | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying what the height is relative to.
   */
  heightReference?: number | Cesium.HeightReference | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the tint Color of the image.
   * Default value: white
   */
  color?: VcColor
  /**
   * A numeric Property specifying the rotation about the alignedAxis.
   * Default value: 0
   */
  rotation?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A VcPosition Property specifying the unit vector axis of rotation.
   * Default value: { x: 0, y: 0, z: 0 }
   */
  alignedAxis?: VcPosition
  /**
   * A boolean Property specifying whether this billboard's size should be measured in meters.
   * Default value: false
   */
  sizeInMeters?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A numeric Property specifying the width of the billboard in pixels, overriding the native size.
   */
  width?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the height of the billboard in pixels, overriding the native size.
   */
  height?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A VcNearFarScalar Property used to scale the point based on distance from the camera.
   */
  scaleByDistance?: VcNearFarScalar
  /**
   * A VcNearFarScalar Property used to set translucency based on distance from the camera.
   */
  translucencyByDistance?: VcNearFarScalar
  /**
   * A VcNearFarScalar Property used to set pixelOffset based on distance from the camera.
   */
  pixelOffsetScaleByDistance?: VcNearFarScalar
  /**
   * A Property specifying a BoundingRectangle that defines a sub-region of the image to use for the billboard, rather than the entire image, measured in pixels from the bottom-left.
   */
  imageSubRegion?: VcBoundingRectangle
  /**
   * A Property specifying at what distance from the camera that this billboard will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * A Property specifying the distance from the camera at which to disable the depth test to.
   */
  disableDepthTestDistance?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Triggers before the VcGraphicsBillboard is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGraphicsBillboard is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcGraphicsBillboard is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
}

export type VcGraphicsBillboardRef = VcComponentPublicInstance<VcGraphicsBillboardProps>
