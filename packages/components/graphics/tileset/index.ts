/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-06 13:53:50
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\tileset\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcCallbackPropertyFunction, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import { show, uri, maximumScreenSpaceError } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'

export const tilesetGraphicsProps = {
  ...show,
  ...uri,
  ...maximumScreenSpaceError
}
export default defineComponent({
  name: 'VcGraphicsTileset',
  props: tilesetGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Cesium3DTilesetGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsTilesetProps = {
  /**
   * A boolean Property specifying the visibility of the tileset.
   * Default value: true
   */
  show?: boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction<boolean>
  /**
   * A string or Resource Property specifying the URI of the tileset.
   */
  uri?: number | Cesium.CallbackProperty | VcCallbackPropertyFunction<number>
  /**
   * Triggers before the VcGraphicsTileset is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGraphicsTileset is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGraphicsTileset is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when a property or sub-property is changed or modified.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
}

export type VcGraphicsTilesetRef = VcComponentPublicInstance<VcGraphicsTilesetProps>
