/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-06 11:38:31
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\point\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  VcCallbackPropertyFunction,
  VcColor,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcDistanceDisplayCondition,
  VcNearFarScalar,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  pixelSize,
  heightReference,
  color,
  outlineColor,
  outlineWidth,
  scaleByDistance,
  translucencyByDistance,
  distanceDisplayCondition,
  disableDepthTestDistance
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const pointGraphicsProps = {
  ...show,
  ...pixelSize,
  ...heightReference,
  ...color,
  ...outlineColor,
  ...outlineWidth,
  ...scaleByDistance,
  ...translucencyByDistance,
  ...distanceDisplayCondition,
  ...disableDepthTestDistance
}
export default defineComponent({
  name: 'VcGraphicsPoint',
  props: pointGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PointGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsPointProps = {
  /**
   * A boolean Property specifying the visibility of the point.
   * Default value: true
   */
  show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A numeric Property specifying the size in pixels.
   * Default value: 1
   */
  pixelSize?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying what the height is relative to.
   * Default value: Cesium.HeightReference.NONE
   */
  heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the VcColor of the point.
   * Default value: white
   */
  color?: VcColor
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
   * A VcNearFarScalar Property used to scale the point based on distance.
   */
  scaleByDistance?: VcNearFarScalar
  /**
   * A VcNearFarScalar Property used to set translucency based on distance from the camera.
   */
  translucencyByDistance?: VcNearFarScalar
  /**
   * A Property specifying at what distance from the camera that this point will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * A Property specifying the distance from the camera at which to disable the depth test to.
   */
  disableDepthTestDistance?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Triggers before the VcGraphicsPoint is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGraphicsPoint is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGraphicsPoint is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
}

export type VcGraphicsPointRef = VcComponentPublicInstance<VcGraphicsPointProps>
