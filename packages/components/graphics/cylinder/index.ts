/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-03 11:35:07
 * @LastEditors: ayiyiyo
 * @Description:
 * @FilePath: \vue-cesium\packages\components\graphics\cylinder\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
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
import { VcCallbackPropertyFunction, VcMaterial, VcColor, VcDistanceDisplayCondition, VcReadyObject } from '@vue-cesium/utils/types'
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

// export type VcGraphicsCylinderProps = ExtractPropTypes<typeof cylinderGraphicsProps>
export type VcGraphicsCylinderProps = {
  /**
   * Gets or sets the boolean Property specifying the visibility of the cylinder.
   * Default Value: true
   */
  show?: boolean
  /**
   *Gets or sets the numeric Property specifying the length of the cylinder.
   */
  length?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   *Gets or sets the numeric Property specifying the width of the outline.
   */
  topRadius?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   *Gets or sets the numeric Property specifying the altitude of the corridor.
   */
  bottomRadius?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Gets or sets the Property specifying the HeightReference.
   * Default Value: HeightReference.NONE
   */
  heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   *Gets or sets the numeric Property specifying the altitude of the corridor extrusion. Setting this property creates a corridor shaped volume starting at height and ending at this altitude.
   */
  extrudedHeight?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Gets or sets the Property specifying the extruded HeightReference.
   * Default Value: HeightReference.NONE
   */
  extrudedHeightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Gets or sets the CornerType Property specifying how corners are styled.
   * Default Value: CornerType.ROUNDED
   */
  cornerType?: number | Cesium.CornerType | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Gets or sets the numeric Property specifying the sampling distance between each latitude and longitude point.
   * Default Value: {CesiumMath.RADIANS_PER_DEGREE}
   */
  granularity?: number
  /**
   * Gets or sets the boolean Property specifying whether the corridor is filled with the provided material.
   * Default Value: true
   */
  fill?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * Gets or sets the Property specifying the material used to fill the cylinder.
   * Default Value: Color.WHITE
   */
  material?: VcMaterial
  /**
   * Gets or sets the Property specifying whether the box is outlined.
   * Default Value: false
   */
  outline?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * Gets or sets the Property specifying the Color of the outline.
   * Default Value: Color.BLACK
   */
  outlineColor?: VcColor
  /**
   * Gets or sets the numeric Property specifying the width of the outline.
   * Note: This property will be ignored on all major browsers on Windows platforms. For details, see (@link https://github.com/CesiumGS/cesium/issues/40}.
   * Default Value: 1.0
   */
  outlineWidth?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Get or sets the enum Property specifying whether the box casts or receives shadows from light sources.
   * Default Value: ShadowMode.DISABLED
   */
  shadows?: number | Cesium.ShadowMode | VcCallbackPropertyFunction<number>
  /**
   * Gets or sets the DistanceDisplayCondition Property specifying at what distance from the camera that this box will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * Gets or sets the ClassificationType Property specifying whether this corridor will classify terrain, 3D Tiles, or both when on the ground.
   * Default Value: ClassificationType.BOTH
   */
  classificationType?: number | Cesium.ClassificationType | VcCallbackPropertyFunction<Cesium.ClassificationType>
  /**
   * Gets or sets the zIndex Property specifying the ordering of the corridor. Only has an effect if the coridor is static and neither height or exturdedHeight are specified.
   * Default Value: 0
   */
  zIndex?: number
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
