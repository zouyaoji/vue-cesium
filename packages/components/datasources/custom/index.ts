/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 10:17:58
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\datasources\custom\index.ts
 */
import type { PropType, VNode } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcDatasource, VcReadyObject } from '@vue-cesium/utils/types'
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

export type VcDatasourceCustomProps = {
  /**
   * Specify whether the data source is displayed.
   * Default value: true
   */
  show?: boolean
  /**
   * Specify whether to respond to mouse pick events.
   * Default value: true
   */
  enableMouseEvent?: boolean
  /**
   * Specify the collection of entities to be added to this data source.
   */
  entities?: Array<VcEntityProps>
  /**
   * A human-readable name for this instance.
   */
  name?: string
  /**
   * Whether to destroy the data source in addition to removing it.
   * Default value: false
   */
  destroy?: boolean
  /**
   * Triggers before the VcDatasourceCustom is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcDatasourceCustom is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcDatasourceCustom is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers whenever a new property is assigned. datasource.clock.
   */
  onDefinitionChanged?: (property: Cesium.Property) => void
  /**
   *  Triggers when a new cluster will be displayed. datasource.clustering.
   */
  onClusterEvent?: (
    entities: Array<Cesium.Entity>,
    cluster: { billboard: Cesium.Billboard; label: Cesium.Label; point: Cesium.PointPrimitive }
  ) => void
  /**
   * Triggers when entities are added or removed from the collection.datasource.entities
   */
  onCollectionChanged?: (
    collection: Cesium.EntityCollection,
    addedArray: Array<Cesium.Entity>,
    removedArray: Array<Cesium.Entity>,
    changedArray: Array<Cesium.Entity>
  ) => void
  /**
   * Triggerswhen the underlying data changes.
   */
  onChangedEvent?: (datasource: VcDatasource) => void
  /**
   * Triggers if an error is encountered during processing.
   */
  onErrorEvent?: (datasource: VcDatasource, error: any) => void
  /**
   * Triggers when the data source either starts or stops loading.
   */
  onLoadingEvent?: (datasource: VcDatasource, isLoading: boolean) => void
}

export type VcDatasourceCustomRef = VcComponentPublicInstance<VcDatasourceCustomProps>

export interface VcDatasourceCustomSlots {
  /**
   * Slot for vc-entity.
   */
  default: () => VNode[]
}
