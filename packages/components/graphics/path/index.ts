import type {
  VcCallbackPropertyFunction,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcDistanceDisplayCondition,
  VcMaterial,
  VcReadyObject
} from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import { distanceDisplayCondition, material, show, width } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-06 11:17:48
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\path\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const pathGraphicsProps = {
  ...show,
  leadTime: [Number, Object, Function],
  trailTime: [Number, Object, Function],
  ...width,
  resolution: {
    type: [Number, Object, Function],
    default: 60
  },
  ...material,
  ...distanceDisplayCondition
}
export default defineComponent({
  name: 'VcGraphicsPath',
  props: pathGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PathGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export interface VcGraphicsPathProps {
  /**
   * A boolean Property specifying the visibility of the path.
   * Default value: true
   */
  show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A Property specifying the number of seconds in front the object to show.
   */
  leadTime?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the number of seconds behind of the object to show.
   */
  trailTime?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A numeric Property specifying the width in pixels.
   * Default value: 1.0
   */
  width?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Gets or sets the Property specifying whether the box is outlined.
   * Default value: 60
   */
  resolution?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * A Property specifying the material used to draw the path.
   * Default value: white
   */
  material?: VcMaterial
  /**
   * A Property specifying at what distance from the camera that this path will be displayed.
   */
  distanceDisplayCondition?: VcDistanceDisplayCondition
  /**
   * Triggers before the VcGraphicsPath is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGraphicsPath is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGraphicsPath is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
}

export type VcGraphicsPathRef = VcComponentPublicInstance<VcGraphicsPathProps>
