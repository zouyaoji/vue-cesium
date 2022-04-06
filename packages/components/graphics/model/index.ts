/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-06 11:11:16
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\model\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  VcCallbackPropertyFunction,
  VcCartesian2,
  VcColor,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcDistanceDisplayCondition,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  uri,
  scale,
  minimumPixelSize,
  maximumScale,
  incrementallyLoadTextures,
  runAnimations,
  clampAnimations,
  shadows,
  heightReference,
  silhouetteColor,
  silhouetteSize,
  color,
  colorBlendMode,
  colorBlendAmount,
  imageBasedLightingFactor,
  lightColor,
  distanceDisplayCondition,
  nodeTransformations,
  articulations,
  clippingPlanes
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const modelGraphicsProps = {
  ...show,
  ...uri,
  ...scale,
  ...minimumPixelSize,
  ...maximumScale,
  ...incrementallyLoadTextures,
  ...runAnimations,
  ...clampAnimations,
  ...shadows,
  ...heightReference,
  ...silhouetteColor,
  ...silhouetteSize,
  ...color,
  ...colorBlendMode,
  ...colorBlendAmount,
  ...imageBasedLightingFactor,
  ...lightColor,
  ...distanceDisplayCondition,
  ...nodeTransformations,
  ...articulations,
  ...clippingPlanes
}
export default defineComponent({
  name: 'VcGraphicsModel',
  props: modelGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ModelGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsModelProps = {
  /**
   * A boolean Property specifying the visibility of the model.
   * Default value: true
   */
  show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A string or Resource Property specifying the URI of the glTF asset.
   */
  uri?: string | Cesium.Resource | Cesium.CallbackProperty | VcCallbackPropertyFunction<string>
  /**
   * A numeric Property specifying a uniform linear scale.
   * Default value: 1.0
   */
  scale?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the approximate minimum pixel size of the model regardless of zoom.
   * Default value: 0.0
   */
  minimumPixelSize?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * The maximum scale size of a model. An upper limit for minimumPixelSize.
   */
  maximumScale?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Determine if textures may continue to stream in after the model is loaded.
   * Default value: true
   */
  incrementallyLoadTextures?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A boolean Property specifying if glTF animations specified in the model should be started.
   * Default value: true
   */
  runAnimations?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A boolean Property specifying if glTF animations should hold the last pose for time durations with no keyframes.
   * Default value: true
   */
  clampAnimations?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * An enum Property specifying whether the model casts or receives shadows from light sources.
   */
  shadows?: number | Cesium.ShadowMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying what the height is relative to.
   * Default value: HeightReference.NONE
   */
  heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the VcColor of the silhouette.
   */
  silhouetteColor?: VcColor
  /**
   * A numeric Property specifying the size of the silhouette in pixels.
   * Default value: 0.0
   */
  silhouetteSize?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the Color that blends with the model's rendered color.
   * Default value: white
   */
  color?: VcColor
  /**
   * An enum Property specifying how the color blends with the model.
   * Default value: Cesium.ColorBlendMode.HIGHLIGHT
   */
  colorBlendMode?: number | Cesium.ColorBlendMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two.
   * Default value: 0.5
   */
  colorBlendAmount?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A property specifying the contribution from diffuse and specular image-based lighting.
   * Default value: [1.0, 1.0]
   */
  imageBasedLightingFactor?: VcCartesian2
  /**
   * A property specifying the light color when shading the model. When undefined the scene's light color is used instead.
   */
  lightColor?: VcColor
  /**
   * A Property specifying at what distance from the camera that this model will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * An object, where keys are names of nodes, and values are TranslationRotationScale Properties describing the transformation to apply to that node. The transformation is applied after the node's existing transformation as specified in the glTF, and does not replace the node's existing transformation.
   */
  nodeTransformations?: Cesium.TranslationRotationScale
  /**
   * An object, where keys are composed of an articulation name, a single space, and a stage name, and the values are numeric properties.
   */
  articulations?: any
  /**
   * A property specifying the ClippingPlaneCollection used to selectively disable rendering the model.
   */
  clippingPlanes?: Cesium.ClippingPlaneCollection | VcCallbackPropertyFunction<Cesium.ClippingPlaneCollection>
  /**
   * Triggers before the VcGraphicsModel is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGraphicsModel is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcGraphicsModel is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
}

export type VcGraphicsModelRef = VcComponentPublicInstance<VcGraphicsModelProps>
