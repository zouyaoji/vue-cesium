/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-06 13:06:14
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\polygon\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  VcCallbackPropertyFunction,
  VcColor,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcDistanceDisplayCondition,
  VcMaterial,
  VcPolygonHierarchy,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  hierarchy,
  height,
  heightReference,
  extrudedHeight,
  extrudedHeightReference,
  stRotation,
  granularity,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  perPositionHeight,
  closeTop,
  closeBottom,
  arcType,
  shadows,
  distanceDisplayCondition,
  classificationType,
  zIndex
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const polygonGraphicsProps = {
  ...show,
  ...hierarchy,
  ...height,
  ...heightReference,
  ...extrudedHeight,
  ...extrudedHeightReference,
  ...stRotation,
  ...granularity,
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...perPositionHeight,
  ...closeTop,
  ...closeBottom,
  ...arcType,
  ...shadows,
  ...distanceDisplayCondition,
  ...classificationType,
  ...zIndex
}
export default defineComponent({
  name: 'VcGraphicsPolygon',
  props: polygonGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolygonGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsPolygonProps = {
  /**
   * A boolean Property specifying the visibility of the polygon.
   * Default value: true
   */
  show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the VcPolygonHierarchy.
   */
  hierarchy?: VcPolygonHierarchy
  /**
   * A numeric Property specifying the altitude of the polygon relative to the ellipsoid surface.
   */
  height?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying what the height is relative to.
   */
  heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the altitude of the polygon's extruded face relative to the ellipsoid surface.
   */
  extrudedHeight?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying what the extrudedHeight is relative to.
   */
  extrudedHeightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric property specifying the rotation of the polygon texture counter-clockwise from north.
   * Default value: 0.0
   */
  stRotation?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the angular distance between each latitude and longitude point.
   */
  granularity?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A boolean Property specifying whether the polygon is filled with the provided material.
   */
  fill?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the material used to fill the polygon.
   * Default value: white
   */
  material?: VcMaterial
  /**
   * A boolean Property specifying whether the polygon is outlined.
   * Default value: false
   */
  outline?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the Color of the outline.
   * Default value: black
   */
  outlineColor?: VcColor
  /**
   * A numeric Property specifying the width of the outline.
   * Note: This property will be ignored on all major browsers on Windows platforms. For details, see (@link https://github.com/CesiumGS/cesium/issues/40}.
   * Default value: 1.0
   */
  outlineWidth?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A boolean specifying whether or not the height of each position is used.
   * Default value: false
   */
  perPositionHeight?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * When false, leaves off the top of an extruded polygon open.
   * Default value: true
   */
  closeTop?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * When false, leaves off the bottom of an extruded polygon open.
   * Default value: true
   */
  closeBottom?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * The type of line the polygon edges must follow.
   */
  arcType?: number | Cesium.ArcType | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * An enum Property specifying whether the polygon casts or receives shadows from light sources.
   * Default value: Cesium.ShadowMode.DISABLED
   */
  shadows?: number | Cesium.ShadowMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying at what distance from the camera that this polygon will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * An enum Property specifying whether this polygon will classify terrain, 3D Tiles, or both when on the ground.
   * Default value: Cesium.ClassificationType.BOTH
   */
  classificationType?: number | Cesium.ClassificationType | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A property specifying the zIndex used for ordering ground geometry. Only has an effect if the polygon is constant and neither height or extrudedHeight are specified.
   */
  zIndex?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Triggers before the VcGraphicsPolygon is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGraphicsPolygon is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGraphicsPolygon is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
}

export type VcGraphicsPolygonRef = VcComponentPublicInstance<VcGraphicsPolygonProps>
