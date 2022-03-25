/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-02 09:55:32
 * @LastEditors: ayiyiyo
 * @Description:
 * @FilePath: \vue-cesium\packages\components\graphics\corridor\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import type { ExtractPropTypes } from 'vue'
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
import { graphicsEmits } from '@vue-cesium/utils/emits'
import {
  VcCartesian3Array,
  VcCallbackPropertyFunction,
  VcMaterial,
  VcColor,
  VcDistanceDisplayCondition,
  VcReadyObject
} from '@vue-cesium/utils/types'
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
  emits: graphicsEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CorridorGraphics'
    useGraphics(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

// export type VcGraphicsCorridorProps = ExtractPropTypes<typeof corridorGraphicsProps>
export type VcGraphicsCorridorProps = {
  /**
   * Gets or sets the boolean Property specifying the visibility of the corridor.
   * Default Value: true
   */
  show?: boolean
  /**
   *Gets or sets a Property specifying the array of Cartesian3 positions that define the centerline of the corridor.
   */
  position?: VcCartesian3Array
  /**
   *Gets or sets the numeric Property specifying the width of the outline.
   */
  width?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   *Gets or sets the numeric Property specifying the altitude of the corridor.
   */
  height?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
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
