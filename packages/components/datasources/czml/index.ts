/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-19 17:46:30
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\datasources\czml\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useDatasources } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { show, enableMouseEvent, sourceUri, credit } from '@vue-cesium/utils/cesium-props'
import { VcEntityProps } from '../../entity/src'
import { datasourceEmits } from '@vue-cesium/utils/emits'

export const czmlDatasourceProps = {
  ...show,
  ...enableMouseEvent,
  entities: {
    type: Array as PropType<Array<VcEntityProps>>,
    default: () => []
  },
  czml: {
    type: [String, Object] as PropType<string | Cesium.Resource>,
    required: true
  },
  ...sourceUri,
  ...credit,
  destroy: {
    type: Boolean,
    default: false
  }
}
export default defineComponent({
  name: 'VcDatasourceCzml',
  props: czmlDatasourceProps,
  emits: datasourceEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CzmlDataSource'
    const datasourcesState = useDatasources(props, ctx, instance)

    if (undefined === datasourcesState) {
      return
    }

    instance.createCesiumObject = async () => {
      const options = datasourcesState.transformProps(props)
      return Cesium.CzmlDataSource.load(props.czml, options)
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

export type VcDatasourceCzmlProps = ExtractPropTypes<typeof czmlDatasourceProps>
