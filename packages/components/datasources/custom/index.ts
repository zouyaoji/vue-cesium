/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-19 17:29:55
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\datasources\custom\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useDatasources } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { show, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { VcEntityProps } from '../../entity'
import { datasourceEmits } from '@vue-cesium/utils/emits'

export const customDatasourceProps = {
  ...show,
  ...enableMouseEvent,
  entities: {
    type: Array as PropType<Array<VcEntityProps>>,
    default: () => []
  },
  name: String,
  destroy: {
    type: Boolean,
    default: false
  }
}
export default defineComponent({
  name: 'VcDatasourceCustom',
  props: customDatasourceProps,
  emits: datasourceEmits,
  setup(props: VcDatasourceCustomProps, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CustomDataSource'
    useDatasources(props, ctx, instance)

    instance.createCesiumObject = async () => {
      return new Cesium.CustomDataSource(props.name)
    }

    return () =>
      ctx.slots.default
        ? h(
            'i',
            {
              class: kebabCase(instance.proxy?.$options.name || ''),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcDatasourceCustomProps = ExtractPropTypes<typeof customDatasourceProps>
