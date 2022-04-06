/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-02 23:43:55
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\corridor\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  VcCallbackPropertyFunction,
  VcCartesian3Array,
  VcColor,
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
  height,
  heightReference,
  extrudedHeight,
  extrudedHeightReference,
  cornerType,
  granularity,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows,
  distanceDisplayCondition,
  classificationType,
  zIndex
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
const corridorGraphicsProps = {
  ...show,
  ...positions,
  ...width,
  ...height,
  ...heightReference,
  ...extrudedHeight,
  ...extrudedHeightReference,
  ...cornerType,
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
  name: 'VcGraphicsCorridor',
  props: corridorGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CorridorGraphics'
    useGraphics(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsCorridorProps = {
  /**
   * A boolean Property specifying the visibility of the corridor.
   */
  show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the array of VcCartesian3Array positions that define the centerline of the corridor.
   */
  positions?: VcCartesian3Array
  /**
   * A numeric Property specifying the distance between the edges of the corridor.
   */
  width?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the altitude of the corridor relative to the ellipsoid surface.
   */
  height?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying what the height is relative to.
   */
  heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the altitude of the corridor's extruded face relative to the ellipsoid surface.
   */
  extrudedHeight?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying what the extrudedHeight is relative to.
   */
  extrudedHeightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A CornerType Property specifying the style of the corners.
   */
  cornerType?: number | Cesium.CornerType | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the distance between each latitude and longitude.
   */
  granularity?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A boolean Property specifying whether the corridor is filled with the provided material.
   * Default value: true
   */
  fill?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the material used to fill the corridor.
   * Default value: white
   */
  material?: VcMaterial
  /**
   * A boolean Property specifying whether the corridor is outlined.
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
   * Default value: 1.0
   */
  outlineWidth?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * An enum Property specifying whether the corridor casts or receives shadows from light sources.
   * Default value: Cesium.ShadowMode.DISABLED
   */
  shadows?: number | Cesium.ShadowMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying at what distance from the camera that this corridor will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * An enum Property specifying whether this corridor will classify terrain, 3D Tiles, or both when on the ground.
   * Deault value: Cesium.ClassificationType.BOTH
   */
  classificationType?: number | Cesium.ShadowMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the zIndex of the corridor, used for ordering. Only has an effect if height and extrudedHeight are undefined, and if the corridor is static.
   */
  zIndex?: number
  /**
   * Triggers before the VcGraphicsCorridor is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGraphicsCorridor is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcGraphicsCorridor is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
}

export type VcGraphicsCorridorRef = VcComponentPublicInstance<VcGraphicsCorridorProps>
