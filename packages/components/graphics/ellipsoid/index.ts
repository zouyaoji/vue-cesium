import type {
  VcCallbackPropertyFunction,
  VcColor,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcDistanceDisplayCondition,
  VcMaterial,
  VcPosition,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  distanceDisplayCondition,
  fill,
  heightReference,
  innerRadii,
  material,
  maximumClock,
  maximumCone,
  minimumClock,
  minimumCone,
  outline,
  outlineColor,
  outlineWidth,
  radii,
  shadows,
  show,
  slicePartitions,
  stackPartitions,
  subdivisions
} from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-04 22:25:05
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\ellipsoid\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const ellipsoidGraphicsProps = {
  ...show,
  ...radii,
  ...innerRadii,
  ...minimumClock,
  ...maximumClock,
  ...minimumCone,
  ...maximumCone,
  ...heightReference,
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...stackPartitions,
  ...slicePartitions,
  ...subdivisions,
  ...shadows,
  ...distanceDisplayCondition
}
export default defineComponent({
  name: 'VcGraphicsEllipsoid',
  props: ellipsoidGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'EllipsoidGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export interface VcGraphicsEllipsoidProps {
  /**
   * A boolean Property specifying the visibility of the ellipsoid.
   * Default value: truec
   */
  show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A VcPosition Property specifying the radii of the ellipsoid.
   */
  radii?: VcPosition
  /**
   * A VcPosition Property specifying the inner radii of the ellipsoid.
   */
  innerRadii?: VcPosition
  /**
   * A Property specifying the minimum clock angle of the ellipsoid.
   * Default value: 0.0
   */
  minimumClock?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the maximum clock angle of the ellipsoid.
   * Default value: 2*PI
   */
  maximumClock?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the minimum cone angle of the ellipsoid.
   * Default value: 0.0
   */
  minimumCone?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the maximum cone angle of the ellipsoid.
   * Default value: PI
   */
  maximumCone?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying what the height from the entity position is relative to.
   * Default value: HeightReference.NONE
   */
  heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the altitude of the ellipse's extruded face relative to the ellipsoid surface.
   */
  extrudedHeight?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying what the extrudedHeight is relative to.
   * Default value: HeightReference.NONE
   */
  extrudedHeightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A boolean Property specifying whether the ellipsoid is filled with the provided material.
   * Default value: true
   */
  fill?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the material used to fill the ellipse.
   * Default value: white
   */
  material?: VcMaterial
  /**
   * A boolean Property specifying whether the ellipsoid is outlined.
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
   * A Property specifying the number of stacks.
   * Default value: 64
   */
  stackPartitions?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the number of radial slices.
   * Default value: 64
   */
  slicePartitions?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the number of samples per outline ring, determining the granularity of the curvature.
   * Default value: 128
   */
  subdivisions?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * An enum Property specifying whether the ellipsoid casts or receives shadows from light sources.
   * Default value: Cesium.ShadowMode.DISABLED
   */
  shadows?: number | Cesium.ShadowMode | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying at what distance from the camera that this ellipsoid will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * Triggers before the VcGraphicsEllipsoid is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGraphicsEllipsoid is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGraphicsEllipsoid is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
}

export type VcGraphicsEllipsoidRef = VcComponentPublicInstance<VcGraphicsEllipsoidProps>
