import { version } from '../package.json'
import CesiumViewer from '@/viewer/CesiumViewer.vue'
import ImageryLayer from '@/imageryLayers/ImageryLayer.vue'
import ArcGisMapServerImageryProvider from '@/imageryLayers/ArcGisMapServerImageryProvider.vue'
import BingMapsImageryProvider from '@/imageryLayers/BingMapsImageryProvider.vue'
import MapboxImageryProvider from '@/imageryLayers/MapboxImageryProvider.vue'
import OpenStreetMapImageryProvider from '@/imageryLayers/OpenStreetMapImageryProvider.vue'
import SingleTileImageryProvider from '@/imageryLayers/SingleTileImageryProvider.vue'
import UrlTemplateImageryProvider from '@/imageryLayers/UrlTemplateImageryProvider.vue'
import WebMapTileServiceImageryProvider from '@/imageryLayers/WebMapTileServiceImageryProvider.vue'
import SuperMapImageryProvider from '@/imageryLayers/SuperMapImageryProvider.vue'

import Entity from '@/entities/Entity.vue'
import BillboardGraphics from '@/entities/BillboardGraphics.vue'
import BoxGraphics from '@/entities/BoxGraphics.vue'
import CorridorGraphics from '@/entities/CorridorGraphics.vue'
import CylinderGraphics from '@/entities/CylinderGraphics.vue'
import EllipseGraphics from '@/entities/EllipseGraphics.vue'
import EllipsoidGraphics from '@/entities/EllipsoidGraphics.vue'
import LabelGraphics from '@/entities/LabelGraphics.vue'
import ModelGraphics from '@/entities/ModelGraphics.vue'
import PathGraphics from '@/entities/PathGraphics.vue'
import PlaneGraphics from '@/entities/PlaneGraphics.vue'
import PointGraphics from '@/entities/PointGraphics.vue'
import PolygonGraphics from '@/entities/PolygonGraphics.vue'
import PolylineGraphics from '@/entities/PolylineGraphics.vue'
import PolylineVolumeGraphics from '@/entities/PolylineVolumeGraphics.vue'
import RectangleGraphics from '@/entities/RectangleGraphics.vue'
import WallGraphics from '@/entities/WallGraphics.vue'

import PointCollection from '@/primitives/PointPrimitiveCollection.vue'
import PolylineCollection from '@/primitives/PolylineCollection.vue'
import LabelCollection from '@/primitives/LabelCollection.vue'
import PointPrimitive from '@/primitives/PointPrimitive.vue'
import Polyline from '@/primitives/Polyline.vue'
import Label from '@/primitives/Label.vue'
import Cesium3DTileset from '@/primitives/Cesium3DTileset.vue'
import Model from '@/primitives/Model.vue'

import MeasureDistance from '@/measure/MeasureDistance.vue'
import MeasureArea from '@/measure/MeasureArea.vue'
import MeasureHeight from '@/measure/MeasureHeight.vue'

import CesiumHeatMap from '@/extra/CesiumHeatMap.vue'

export default {
  install (Vue, options) {
    let cesiumPath = options
      ? options.cesiumPath
      : 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
    let accessToken = options
      ? options.accessToken
      : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMGRjM2QxYi04ODM2LTQzMDEtOGJmOS1mNDlkY2Q2NjE4MjciLCJpZCI6MjU5LCJpYXQiOjE1MjU5NjYyMDd9.xW9loNLo68KE3ReAHd-Lp73M8qJKhI9vA0wYL-qJX_I'
    Vue.prototype._Cesium = () => ({ cesiumPath, accessToken })
    Vue.component('cesium-viewer', CesiumViewer)
    Vue.component(ImageryLayer.name, ImageryLayer)
    Vue.component(
      ArcGisMapServerImageryProvider.name,
      ArcGisMapServerImageryProvider
    )
    Vue.component(BingMapsImageryProvider.name, BingMapsImageryProvider)
    Vue.component(MapboxImageryProvider.name, MapboxImageryProvider)
    Vue.component(
      OpenStreetMapImageryProvider.name,
      OpenStreetMapImageryProvider
    )
    Vue.component(SingleTileImageryProvider.name, SingleTileImageryProvider)
    Vue.component(UrlTemplateImageryProvider.name, UrlTemplateImageryProvider)
    Vue.component(
      WebMapTileServiceImageryProvider.name,
      WebMapTileServiceImageryProvider
    )
    Vue.component(SuperMapImageryProvider.name, SuperMapImageryProvider)

    Vue.component(Entity.name, Entity)
    Vue.component(BillboardGraphics.name, BillboardGraphics)
    Vue.component(BoxGraphics.name, BoxGraphics)
    Vue.component(CorridorGraphics.name, CorridorGraphics)
    Vue.component(CylinderGraphics.name, CylinderGraphics)
    Vue.component(EllipseGraphics.name, EllipseGraphics)
    Vue.component(EllipsoidGraphics.name, EllipsoidGraphics)
    Vue.component(LabelGraphics.name, LabelGraphics)
    Vue.component(ModelGraphics.name, ModelGraphics)
    Vue.component(PathGraphics.name, PathGraphics)
    Vue.component(PlaneGraphics.name, PlaneGraphics)
    Vue.component(PointGraphics.name, PointGraphics)
    Vue.component(PolygonGraphics.name, PolygonGraphics)
    Vue.component(PolylineGraphics.name, PolylineGraphics)
    Vue.component(PolylineVolumeGraphics.name, PolylineVolumeGraphics)
    Vue.component(RectangleGraphics.name, RectangleGraphics)
    Vue.component(WallGraphics.name, WallGraphics)

    Vue.component(Cesium3DTileset.name, Cesium3DTileset)
    Vue.component(PolylineCollection.name, PolylineCollection)
    Vue.component(Polyline.name, Polyline)
    Vue.component(LabelCollection.name, LabelCollection)
    Vue.component(Label.name, Label)
    Vue.component(PointCollection.name, PointCollection)
    Vue.component(PointPrimitive.name, PointPrimitive)

    Vue.component('model-primitive', Model)
    Vue.component('measure-distance', MeasureDistance)
    Vue.component('measure-area', MeasureArea)
    Vue.component('measure-height', MeasureHeight)

    Vue.component(CesiumHeatMap.name, CesiumHeatMap)
  },
  version
}

export {
  CesiumViewer,
  ImageryLayer,
  ArcGisMapServerImageryProvider,
  BingMapsImageryProvider,
  MapboxImageryProvider,
  OpenStreetMapImageryProvider,
  SingleTileImageryProvider,
  UrlTemplateImageryProvider,
  WebMapTileServiceImageryProvider,
  SuperMapImageryProvider,
  Entity,
  BillboardGraphics,
  BoxGraphics,
  CorridorGraphics,
  CylinderGraphics,
  EllipseGraphics,
  EllipsoidGraphics,
  LabelGraphics,
  ModelGraphics,
  PathGraphics,
  PlaneGraphics,
  PointGraphics,
  PolygonGraphics,
  PolylineGraphics,
  PolylineVolumeGraphics,
  RectangleGraphics,
  WallGraphics,
  Cesium3DTileset,
  PointCollection,
  PolylineCollection,
  PointPrimitive,
  Polyline,
  LabelCollection,
  Label,
  MeasureDistance,
  MeasureArea,
  MeasureHeight,
  Model,
  CesiumHeatMap
}
