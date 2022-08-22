/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-06 13:32:13
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\polyline\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  VcCallbackPropertyFunction,
  VcCartesian3Array,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcDistanceDisplayCondition,
  VcMaterial,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  positions,
  width,
  granularity,
  material,
  depthFailMaterial,
  arcType,
  clampToGround,
  shadows,
  distanceDisplayCondition,
  classificationType,
  zIndex
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const polylineGraphicsProps = {
  ...show,
  ...positions,
  ...width,
  ...granularity,
  ...material,
  ...depthFailMaterial,
  ...arcType,
  ...clampToGround,
  ...shadows,
  ...distanceDisplayCondition,
  ...classificationType,
  ...zIndex
}
export default defineComponent({
  name: 'VcGraphicsPolyline',
  props: polylineGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolylineGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})
export type VcGraphicsPolylineProps = {
  /**
   * A boolean Property specifying the visibility of the polyline.
   * Default value: true
   */
  show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the array of VcCartesian3Array positions that define the line strip.
   */
  positions?: VcCartesian3Array
  /**
   * 	A numeric Property specifying the width in pixels.
   */
  width?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the angular distance between each latitude and longitude if arcType is not ArcType.NONE.
   */
  granularity?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the material used to draw the polyline.
   * Default value: white
   */
  material?: VcMaterial
  /**
   * A property specifying the material used to draw the polyline when it is below the terrain.
   */
  depthFailMaterial?: VcMaterial
  /**
   * The type of line the polyline segments must follow.
   */
  arcType?: number | Cesium.ArcType | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A boolean Property specifying whether the Polyline should be clamped to the ground.
   * Default value: false
   */
  clampToGround?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * An enum Property specifying whether the polyline casts or receives shadows from light sources.
   * Default value: Cesium.ShadowMode.DISABLED
   */
  shadows?: number | Cesium.ShadowMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying at what distance from the camera that this polyline will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * An enum Property specifying whether this polyline will classify terrain, 3D Tiles, or both when on the ground.
   * Default value: Cesium.ClassificationType.BOTH
   */
  classificationType?: number | Cesium.ClassificationType | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the zIndex used for ordering ground geometry. Only has an effect if `clampToGround` is true and polylines on terrain is supported.
   */
  zIndex?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Triggers before the VcGraphicsPolyline is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGraphicsPolyline is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGraphicsPolyline is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
}

export type VcGraphicsPolylineRef = VcComponentPublicInstance<VcGraphicsPolylineProps>
