/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-19 21:22:03
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\datasources\kml\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useDatasources, useVueCesium } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { show, enableMouseEvent, data, sourceUri, clampToGround, ellipsoid, credit } from '@vue-cesium/utils/cesium-props'
import { datasourceEmits } from '@vue-cesium/utils/emits'
import { VcEntityProps } from '../../entity/src'

export const kmlDatasourceProps = {
  ...show,
  ...enableMouseEvent,
  entities: {
    type: Array as PropType<Array<VcEntityProps>>,
    default: () => []
  },
  ...data,
  camera: Object as PropType<Cesium.Camera>,
  canvas: HTMLCanvasElement,
  ...sourceUri,
  ...clampToGround,
  ...ellipsoid,
  ...credit,
  destroy: {
    type: Boolean,
    default: false
  }
}
export default defineComponent({
  name: 'VcDatasourceKml',
  props: kmlDatasourceProps,
  emits: datasourceEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'KmlDataSource'
    const datasourcesState = useDatasources(props, ctx, instance)
    const vc = useVueCesium()

    instance.createCesiumObject = async () => {
      const options: any = datasourcesState?.transformProps(props)
      if (!options.camera) {
        options.camera = vc?.viewer.camera
      }
      if (!options.canvas) {
        options.canvas = vc?.viewer.canvas
      }
      return Cesium.KmlDataSource.load(props.data || '', options)
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

export type VcDatasourceKmlProps = ExtractPropTypes<typeof kmlDatasourceProps>
