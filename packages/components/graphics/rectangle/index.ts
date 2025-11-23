import type {
  VcCallbackPropertyFunction,
  VcColor,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcDistanceDisplayCondition,
  VcMaterial,
  VcReadyObject,
  VcRectangle
} from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  classificationType,
  coordinates,
  distanceDisplayCondition,
  extrudedHeight,
  extrudedHeightReference,
  fill,
  granularity,
  height,
  heightReference,
  material,
  outline,
  outlineColor,
  outlineWidth,
  rotation,
  shadows,
  show,
  stRotation,
  zIndex
} from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-06 13:50:48
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\rectangle\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const rectangleGraphicsProps = {
  ...show,
  ...coordinates,
  ...height,
  ...heightReference,
  ...extrudedHeight,
  ...extrudedHeightReference,
  ...rotation,
  ...stRotation,
  ...granularity,
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...shadows,
  ...distanceDisplayCondition,
  ...classificationType,
  ...zIndex
}
export default defineComponent({
  name: 'VcGraphicsRectangle',
  props: rectangleGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'RectangleGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export interface VcGraphicsRectangleProps {
  /**
   * A boolean Property specifying the visibility of the rectangle.
   * Default value: true
   */
  show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * The Property specifying the VcRectangle.
   */
  coordinates?: VcRectangle
  /**
   * A numeric Property specifying the altitude of the rectangle relative to the ellipsoid surface.
   */
  height?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A CornerType Property specifying the style of the corners.
   * Default value: Cesium.HeightReference.NONE
   */
  heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the altitude of the rectangle's extruded face relative to the ellipsoid surface.
   */
  extrudedHeight?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying what the extrudedHeight is relative to.
   * Default value: Cesium.HeightReference.NONE
   */
  extrudedHeightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric property specifying the rotation of the rectangle clockwise from north.
   * Default value: 0.0
   */
  rotation?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric property specifying the rotation of the rectangle texture counter-clockwise from north.
   * Default value: 0.0
   */
  stRotation?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the angular distance between points on the rectangle.
   */
  granularity?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A boolean Property specifying whether the rectangle is filled with the provided material.
   * Default value: true
   */
  fill?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the material used to fill the rectangle.
   * Default value: white
   */
  material?: VcMaterial
  /**
   * A boolean Property specifying whether the rectangle is outlined.
   * Default value: false
   */
  outline?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the VcColor of the outline.
   * Default value: black
   */
  outlineColor?: VcColor
  /**
   * A numeric Property specifying the the outline width in pixels.
   * Default value: 1.0
   */
  outlineWidth?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * An enum Property specifying whether the rectangle casts or receives shadows from light sources.
   * Default value: Cesium.ShadowMode.DISABLED
   */
  shadows?: number | Cesium.ShadowMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying at what distance from the camera that this rectangle will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * An enum Property specifying whether this rectangle will classify terrain, 3D Tiles, or both when on the ground.
   * Default value: Cesium.ClassificationType.BOTH
   */
  classificationType?: number | Cesium.ClassificationType | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the zIndex used for ordering ground geometry. Only has an effect if the rectangle is constant and neither height or extrudedHeight are specified.
   */
  zIndex?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Triggers before the VcGraphicsRectangle is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGraphicsRectangle is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGraphicsRectangle is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
}

export type VcGraphicsRectangleRef = VcComponentPublicInstance<VcGraphicsRectangleProps>
