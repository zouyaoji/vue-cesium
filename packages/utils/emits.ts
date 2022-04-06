/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-12 14:34:05
 * @LastEditTime: 2022-04-06 14:59:13
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\emits.ts
 */
import { VcDrawingActiveEvt, VcDrawingDrawEvt, VcDrawingEditorEvt, VcDrawingMouseEvt } from './drawing-types'
import type {
  VcPickEvent,
  VcReadyObject,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcImageryProvider,
  VcPrimitive,
  VcTerrainProvider,
  VcDatasource
} from './types'
export const commonEmits = {
  beforeLoad: (instance: VcComponentInternalInstance) => true,
  ready: (readyObj: VcReadyObject) => readyObj.viewer instanceof Cesium.Viewer,
  destroyed: (instance: VcComponentInternalInstance) => true
}

export const pickEventEmits = {
  mousedown: (evt: VcPickEvent) => true,
  mouseup: (evt: VcPickEvent) => true,
  click: (evt: VcPickEvent) => true,
  clickout: (evt: VcPickEvent) => true,
  dblclick: (evt: VcPickEvent) => true,
  mousemove: (evt: VcPickEvent) => true,
  mouseover: (evt: VcPickEvent) => true,
  mouseout: (evt: VcPickEvent) => true
}

export const graphicsEmits = {
  ...commonEmits,
  definitionChanged: (property: Cesium.Property) => true
}

export const providerEmits = {
  ...commonEmits,
  errorEvent: (evt: Cesium.TileProviderError) => true,
  readyPromise: (provider: VcTerrainProvider | VcImageryProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => true
}

export const primitiveEmits = {
  ...commonEmits,
  ...pickEventEmits,
  readyPromise: (primitive: VcPrimitive, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => true,
  'update:geometryInstances': (instances: Array<Cesium.GeometryInstance>) => true
}

export const primitiveCollectionEmits = {
  ...commonEmits,
  ...pickEventEmits
}

export const datasourceEmits = {
  ...commonEmits,
  ...pickEventEmits,
  definitionChanged: (property: Cesium.Property) => true,
  clusterEvent: (entities: Array<Cesium.Entity>, cluster: { billboard: Cesium.Billboard; label: Cesium.Label; point: Cesium.PointPrimitive }) => true,
  collectionChanged: (
    collection: Cesium.EntityCollection,
    addedArray: Array<Cesium.Entity>,
    removedArray: Array<Cesium.Entity>,
    changedArray: Array<Cesium.Entity>
  ) => true,
  changedEvent: (datasource: VcDatasource) => true,
  errorEvent: (datasource: VcDatasource, error: any) => true,
  loadingEvent: (datasource: VcDatasource, isLoading: boolean) => true,
  refreshEvent: (datasource: Cesium.KmlDataSource, url: string) => true,
  unsupportedNodeEvent: (
    datasource: Cesium.KmlDataSource,
    parentEntity: any,
    node: any,
    entityCollection: any,
    styleCollection: any,
    sourceResource: any,
    uriResolver: any
  ) => true
}

export const drawingEmit = {
  ...commonEmits,
  activeEvt: (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) => true,
  drawEvt: (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer) => true,
  editorEvt: (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) => true,
  mouseEvt: (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer) => true
}

export type CommonEmits = typeof commonEmits
export type PickEventEmits = typeof pickEventEmits
export type ProviderEmits = typeof providerEmits
export type PrimitiveEmits = typeof primitiveEmits
export type PrimitiveCollectionEmits = typeof primitiveCollectionEmits
export type DatasourceEmits = typeof primitiveCollectionEmits
export type DrawingEmit = typeof drawingEmit
export type GraphicsEmits = typeof graphicsEmits
