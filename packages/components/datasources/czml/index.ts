/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-10-27 15:14:53
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\datasources\czml\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useDatasources } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { show, enableMouseEvent, sourceUri, credit } from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcDatasourceCzml',
  props: {
    ...show,
    ...enableMouseEvent,
    entities: {
      type: Array,
      default: () => []
    },
    czml: {
      type: [String, Object],
      required: true
    },
    ...sourceUri,
    ...credit,
    destroy: {
      type: Boolean,
      default: false
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'definitionChanged', 'clusterEvent', 'collectionChanged', 'changedEvent', 'errorEvent', 'loadingEvent'],
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
