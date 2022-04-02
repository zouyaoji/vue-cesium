/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 10:18:32
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\datasources\kml\index.ts
 */
import type { PropType, VNode } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcDatasource, VcReadyObject } from '@vue-cesium/utils/types'
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
  },
  screenOverlayContainer: [Element, String]
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

export type VcDatasourceKmlProps = {
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
   * A url, parsed KML document, or Blob containing binary KMZ data or a parsed KML document.
   */
  data?: string | Cesium.Resource | Blob
  /**
   * The camera that is used for viewRefreshModes and sending camera properties to network links.
   */
  camera?: Cesium.Camera
  /**
   * 	The canvas that is used for sending viewer properties to network links.
   */
  canvas?: HTMLCanvasElement
  /**
   * Overrides the url to use for resolving relative links and other KML network features.
   */
  sourceUri?: string | Cesium.Resource
  /**
   * true if we want the geometry features (Polygons, LineStrings and LinearRings) clamped to the ground.
   * Default value: false
   */
  clampToGround?: boolean
  /**
   * The global ellipsoid used for geographical calculations.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * A credit for the data source, which is displayed on the canvas.
   */
  credit?: string | Cesium.Credit
  screenOverlayContainer?: Element | string
  /**
   * Whether to destroy the data source in addition to removing it.
   * Default value: false
   */
  destroy?: boolean
  /**
   * Triggers before the VcDatasourceKml is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcDatasourceKml is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcDatasourceKml is destroyed.
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
  /**
   * Triggers when the data source refreshes a network link.
   */
  onRefreshEvent?: (datasource: Cesium.KmlDataSource, url: string) => void
  /**
   * Triggers when the data source finds an unsupported node type.
   */
  onUnsupportedNodeEvent?: (
    datasource: Cesium.KmlDataSource,
    parentEntity: any,
    node: any,
    entityCollection: any,
    styleCollection: any,
    sourceResource: any,
    uriResolver: any
  ) => void
}

export type VcDatasourceKmlRef = VcComponentPublicInstance<VcDatasourceKmlProps>

export interface VcDatasourceKmlSlots {
  /**
   * Slot for vc-entity.
   */
  default: () => VNode[]
}
