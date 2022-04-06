/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-06 09:23:59
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\label\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
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
  text,
  font,
  labelStyle,
  scale,
  showBackground,
  backgroundColor,
  backgroundPadding,
  pixelOffset,
  eyeOffset,
  horizontalOrigin,
  verticalOrigin,
  heightReference,
  fillColor,
  outlineColor,
  outlineWidth,
  translucencyByDistance,
  pixelOffsetScaleByDistance,
  scaleByDistance,
  distanceDisplayCondition,
  disableDepthTestDistance
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const labelGraphicsProps = {
  ...show,
  ...text,
  ...font,
  ...labelStyle,
  ...scale,
  ...showBackground,
  ...backgroundColor,
  ...backgroundPadding,
  ...pixelOffset,
  ...eyeOffset,
  ...horizontalOrigin,
  ...verticalOrigin,
  ...heightReference,
  ...fillColor,
  ...outlineColor,
  ...outlineWidth,
  ...translucencyByDistance,
  ...pixelOffsetScaleByDistance,
  ...scaleByDistance,
  ...distanceDisplayCondition,
  ...disableDepthTestDistance
}
export default defineComponent({
  name: 'VcGraphicsLabel',
  props: labelGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'LabelGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsLabelProps = {
  /**
   * A boolean Property specifying the visibility of the label.
   * Default value: true
   */
  show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the text. Explicit newlines '\n' are supported.
   */
  text?: string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>
  /**
   * A Property specifying the CSS font.
   * Default value: 30px sans-serif
   */
  font?: string | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>
  /**
   * A Property specifying the LabelStyle.
   * Default value: Cesium.LabelStyle.FILL
   */
  labelStyle?: number | Cesium.LabelStyle | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the scale to apply to the text.
   * Default value: 1.0
   */
  scale?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A boolean Property specifying the visibility of the background behind the label.
   * Default value: false
   */
  showBackground?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the background Color.
   * Default value: { x: 0.165, y: 0.165, z: 0.165, w: 0.8 }
   */
  backgroundColor?: VcColor
  /**
   * A VcCartesian2 Property specifying the horizontal and vertical background padding in pixels.
   * Default value: { x: 7, y: 5 }
   */
  backgroundPadding?: VcCartesian2
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
   * Default value: HorizontalOrigin.CENTER
   */
  horizontalOrigin?: number | Cesium.HorizontalOrigin | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the VerticalOrigin.
   * Default value: VerticalOrigin.CENTER
   */
  verticalOrigin?: number | Cesium.VerticalOrigin | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying what the height is relative to.
   * Default value: HeightReference.NONE
   */
  heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the fill Color.
   * Default value: white
   */
  fillColor?: VcColor
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
   * A VcNearFarScalar Property used to set translucency based on distance from the camera.
   */
  translucencyByDistance?: VcNearFarScalar
  /**
   * A VcNearFarScalar Property used to set pixelOffset based on distance from the camera.
   */
  pixelOffsetScaleByDistance?: VcNearFarScalar
  /**
   * A VcNearFarScalar Property used to set scale based on distance from the camera.
   */
  scaleByDistance?: VcNearFarScalar
  /**
   * A Property specifying at what distance from the camera that this label will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * A Property specifying the distance from the camera at which to disable the depth test to.
   */
  disableDepthTestDistance?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Triggers before the VcGraphicsLabel is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGraphicsLabel is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcGraphicsLabel is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
}

export type VcGraphicsLabelRef = VcComponentPublicInstance<VcGraphicsLabelProps>
