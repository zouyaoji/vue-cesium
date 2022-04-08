/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 11:35:06
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\cylinder\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  VcCallbackPropertyFunction,
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
  length,
  topRadius,
  bottomRadius,
  heightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  numberOfVerticalLines,
  slices,
  shadows,
  distanceDisplayCondition
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { graphicsEmits } from '@vue-cesium/utils/emits'
export const cylinderGraphicsProps = {
  ...show,
  ...length,
  ...topRadius,
  ...bottomRadius,
  ...heightReference,
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...numberOfVerticalLines,
  ...slices,
  ...shadows,
  ...distanceDisplayCondition
}
export default defineComponent({
  name: 'VcGraphicsCylinder',
  props: cylinderGraphicsProps,
  emits: graphicsEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CylinderGraphics'
    useGraphics(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsCylinderProps = {
  /**
   * A boolean Property specifying the visibility of the corridor.
   * Default value: true
   */
  show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * 	A numeric Property specifying the length of the cylinder.
   */
  length?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the radius of the top of the cylinder.
   */
  topRadius?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the radius of the bottom of the cylinder.
   */
  bottomRadius?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying what the height from the entity position is relative to.
   * Default value: HeightReference.NONE
   */
  heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A boolean Property specifying whether the cylinder is filled with the provided material.
   * Default value: true
   */
  fill?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the material used to fill the cylinder.
   * Default value: white
   */
  material?: VcMaterial
  /**
   * A boolean Property specifying whether the cylinder is outlined.
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
   * A numeric Property specifying the number of vertical lines to draw along the perimeter for the outline.
   * Default value: 16
   */
  numberOfVerticalLines?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * The number of edges around the perimeter of the cylinder.
   * Default value: 128
   */
  slices?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
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
   * Triggers before the VcGraphicsCylinder is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGraphicsCylinder is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcGraphicsCylinder is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
}

export type VcGraphicsCylinderRef = VcComponentPublicInstance<VcGraphicsCylinderProps>
