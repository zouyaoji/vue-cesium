/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 10:18:27
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\datasources\geojson\index.ts
 */
import type { PropType, VNode } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import type { AnyObject, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcDatasource, VcReadyObject } from '@vue-cesium/utils/types'
import { useDatasources } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { show, enableMouseEvent, data, sourceUri, clampToGround, credit } from '@vue-cesium/utils/cesium-props'
import { makeColor } from '@vue-cesium/utils/cesium-helpers'
import { VcEntityProps } from '../../entity/src'
import { datasourceEmits } from '@vue-cesium/utils/emits'

export const geojsonDatasourceProps = {
  ...show,
  ...enableMouseEvent,
  entities: {
    type: Array as PropType<Array<VcEntityProps>>,
    default: () => []
  },
  ...data,
  ...sourceUri,
  describe: [Function, Object],
  markerSize: {
    type: Number,
    default: 48
  },
  markerSymbol: String,
  markerColor: {
    type: [Object, String, Array] as PropType<VcColor>,
    default: () => ({ x: 0.2549019607843137, y: 0.4117647058823529, z: 0.8823529411764706 }),
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  },
  stroke: {
    type: [Object, String, Array] as PropType<VcColor>,
    default: () => ({ x: 1, y: 1, z: 0 }),
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  },
  strokeWidth: {
    type: Number,
    default: 2
  },
  fill: {
    type: [Object, String, Array] as PropType<VcColor>,
    default: () => ({ x: 1, y: 1, z: 0, w: 0.39215686274509803 }),
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  },
  ...clampToGround,
  ...credit,
  destroy: {
    type: Boolean,
    default: false
  }
}
export default defineComponent({
  name: 'VcDatasourceGeojson',
  props: geojsonDatasourceProps,
  emits: datasourceEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'GeoJsonDataSource'
    const datasourcesState = useDatasources(props, ctx, instance)

    if (undefined === datasourcesState) {
      return
    }

    instance.createCesiumObject = async () => {
      const options: any = datasourcesState.transformProps(props)
      return Cesium.GeoJsonDataSource.load(props.data, options)
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

export type VcDatasourceGeojsonProps = {
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
   * A url, GeoJSON object, or TopoJSON object to be loaded.
   */
  data: Cesium.Resource | string | AnyObject
  /***
   * Overrides the url to use for resolving relative links.
   */
  sourceUri?: string
  /**
   * A function which returns a Property object (or just a string), which converts the properties into an html description.
   */
  describe?: (properties: AnyObject, nameProperty: string) => string | AnyObject
  /**
   * The default size of the map pin created for each point, in pixels.
   * Default value: 48
   */
  markerSize?: number
  /**
   * The default symbol of the map pin created for each point.
   */
  markerSymbol?: string
  /**
   * The default color of the map pin created for each point.
   * Default value: { x: 0.2549019607843137, y: 0.4117647058823529, z: 0.8823529411764706 }
   */
  markerColor?: VcColor
  /**
   * The default color of polylines and polygon outlines.
   * Default value: { x: 1, y: 1, z: 0 }
   */
  stroke?: VcColor
  /**
   * The default width of polylines and polygon outlines.
   * Default value: 2
   */
  strokeWidth?: number
  /**
   * The default color for polygon interiors.
   * Default value: { x: 1, y: 1, z: 0, w: 0.39215686274509803 }
   */
  fill?: VcColor
  /**
   * true if we want the features clamped to the ground.
   */
  clampToGround?: boolean
  /**
   * A credit for the data source, which is displayed on the canvas.
   */
  credit?: string
  /**
   * Whether to destroy the data source in addition to removing it.
   * Default value: false
   */
  destroy?: boolean
  /**
   * Triggers before the VcDatasourceGeojson is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcDatasourceGeojson is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcDatasourceGeojson is destroyed.
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

export type VcDatasourceGeojsonRef = VcComponentPublicInstance<VcDatasourceGeojsonProps>

export interface VcDatasourceGeojsonSlots {
  /**
   * Slot for vc-entity.
   */
  default: () => VNode[]
}
