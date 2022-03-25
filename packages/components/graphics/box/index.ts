/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-02-18 09:14:36
 * @LastEditors: ayiyiyo
 * @Description:
 * @FilePath: \vue-cesium\packages\components\graphics\box\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  dimensions,
  heightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows,
  distanceDisplayCondition
} from '@vue-cesium/utils/cesium-props'
import { VcPosition, VcCallbackPropertyFunction, VcMaterial, VcColor, VcDistanceDisplayCondition, VcReadyObject } from '@vue-cesium/utils/types'
import { kebabCase } from '@vue-cesium/utils/util'
import { graphicsEmits } from '@vue-cesium/utils/emits'
export const boxGraphicsProps = {
  ...show,
  ...dimensions,
  ...heightReference,
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...shadows,
  ...distanceDisplayCondition
}
export default defineComponent({
  name: 'VcGraphicsBox',
  props: boxGraphicsProps,
  emits: graphicsEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BoxGraphics'
    useGraphics(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

// export type VcGraphicsBoxProps = ExtractPropTypes<typeof boxGraphicsProps>
export type VcGraphicsBoxProps = {
  /**
   * A boolean Property specifying the visibility of the box.
   * Default value: true
   */
  show?: boolean
  /**
   * Gets or sets Cartesian3 Property property specifying the length, width, and height of the box.
   */
  dimensions?: VcPosition
  /**
   * Gets or sets the Property specifying the HeightReference.
   * Default Value: HeightReference.NONE
   */
  heightReference?: number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   *Gets or sets the boolean Property specifying whether the box is filled with the provided material.
   *Default Value: true
   */
  fill?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * Gets or sets the material used to fill the box.
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
