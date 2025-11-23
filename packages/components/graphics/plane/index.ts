import type {
  VcCallbackPropertyFunction,
  VcCartesian2,
  VcColor,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcDistanceDisplayCondition,
  VcMaterial,
  VcPlane,
  VcReadyObject
} from '@vue-cesium/utils/types'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-06 11:35:50
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\plane\index.ts
 */
import type { PropType } from 'vue'
import { useGraphics } from '@vue-cesium/composables'
import { makeCartesian2 } from '@vue-cesium/utils/cesium-helpers'
import { distanceDisplayCondition, fill, material, outline, outlineColor, outlineWidth, plane, shadows, show } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const planeGraphicsProps = {
  ...show,
  ...plane,
  // 和 BoxGraphics.dimensions 区分
  dimensions: {
    type: [Object, Array, Function] as PropType<VcCartesian2>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  },
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...shadows,
  ...distanceDisplayCondition
}
export default defineComponent({
  name: 'VcGraphicsPlane',
  props: planeGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PlaneGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export interface VcGraphicsPlaneProps {
  /**
   * A boolean Property specifying the visibility of the plane.
   * Default value: true
   */
  show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A VcPlane Property specifying the normal and distance for the plane.
   */
  plane?: VcPlane
  /**
   * A VcCartesian2 Property specifying the width and height of the plane.
   */
  dimensions?: VcCartesian2
  /**
   * A boolean Property specifying whether the plane is filled with the provided material.
   * Default Value: true
   */
  fill?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the material used to fill the plane.
   * Default value: white
   */
  material?: VcMaterial
  /**
   * A boolean Property specifying whether the plane is outlined.
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
   * Note: This property will be ignored on all major browsers on Windows platforms. For details, see (@link https://github.com/CesiumGS/cesium/issues/40}.
   * Default value: 1.0
   */
  outlineWidth?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * An enum Property specifying whether the plane casts or receives shadows from light sources.
   * Default value: ShadowMode.DISABLED
   */
  shadows?: number | Cesium.ShadowMode | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying at what distance from the camera that this plane will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * Triggers before the VcGraphicsPlane is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGraphicsPlane is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGraphicsPlane is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
}

export type VcGraphicsPlaneRef = VcComponentPublicInstance<VcGraphicsPlaneProps>
