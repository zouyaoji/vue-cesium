/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 15:44:51
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\tileset\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
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

export type VcGraphicsTilesetProps = ExtractPropTypes<typeof tilesetGraphicsProps>
