/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-08-27 23:08:53
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\datasources\czml\index.ts
 */
import type { PropType, VNode } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcDatasource, VcPickEvent, VcReadyObject } from '@vue-cesium/utils/types'
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
    type: [String, Object, Array] as PropType<string | Cesium.Resource | Array<any>>,
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

export type VcDatasourceCzmlProps = {
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
   * A url or CZML object to be processed.
   */
  czml: string | Cesium.Resource | any[]
  /**
   * Overrides the url to use for resolving relative links.
   */
  sourceUri?: string | Cesium.Resource
  /**
   * A credit for the data source, which is displayed on the canvas.
   */
  credit?: string | Cesium.Credit
  /**
   * Whether to destroy the data source in addition to removing it.
   * Default value: false
   */
  destroy?: boolean
  /**
   * Triggers before the VcDatasourceCzml is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcDatasourceCzml is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcDatasourceCzml is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the mouse is pressed on this datasource.
   */
  onMousedown?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse bounces up on this datasource.
   */
  onMouseup?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks on this datasource.
   */
  onClick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks outside this datasource.
   */
  onClickout?: (evt: VcPickEvent) => void
  /**
   * Triggers when the left mouse button double-clicks this datasource.
   */
  onDblclick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves on this datasource.
   */
  onMousemove?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves over to this datasource.
   */
  onMouseover?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves out of this datasource.
   */
  onMouseout?: (evt: VcPickEvent) => void
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

export type VcDatasourceCzmlRef = VcComponentPublicInstance<VcDatasourceCzmlProps>

export interface VcDatasourceCzmlSlots {
  /**
   * Slot for vc-entity.
   */
  default: () => VNode[]
}
