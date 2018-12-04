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
import PolylineGraphics from '@/entities/PolylineGraphics.vue'
import PolygonGraphics from '@/entities/PolygonGraphics.vue'

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

export default {
  install (Vue, options) {
    let cesiumPath = options ? options.cesiumPath : 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
    Vue.prototype._Cesium = () => ({ cesiumPath })
    Vue.component('cesium-viewer', CesiumViewer)
    Vue.component(ImageryLayer.name, ImageryLayer)
    Vue.component(ArcGisMapServerImageryProvider.name, ArcGisMapServerImageryProvider)
    Vue.component(BingMapsImageryProvider.name, BingMapsImageryProvider)
    Vue.component(MapboxImageryProvider.name, MapboxImageryProvider)
    Vue.component(OpenStreetMapImageryProvider.name, OpenStreetMapImageryProvider)
    Vue.component(SingleTileImageryProvider.name, SingleTileImageryProvider)
    Vue.component(UrlTemplateImageryProvider.name, UrlTemplateImageryProvider)
    Vue.component(WebMapTileServiceImageryProvider.name, WebMapTileServiceImageryProvider)
    Vue.component(SuperMapImageryProvider.name, SuperMapImageryProvider)

    Vue.component('polyline-entity', PolylineGraphics)
    Vue.component('polygon-entity', PolygonGraphics)

    Vue.component('cesium-3dtileset', Cesium3DTileset)
    Vue.component('model-primitive', Model)
    Vue.component('point-collection', PointCollection)
    Vue.component('polyline-collection', PolylineCollection)
    Vue.component('label-collection', LabelCollection)
    Vue.component('point-primitive', PointPrimitive)
    Vue.component('polyline-primitive', Polyline)
    Vue.component('label-primitive', Label)

    Vue.component('measure-distance', MeasureDistance)
    Vue.component('measure-area', MeasureArea)
    Vue.component('measure-height', MeasureHeight)
  },
  version
}

export {
  CesiumViewer, ImageryLayer, ArcGisMapServerImageryProvider, BingMapsImageryProvider, MapboxImageryProvider, OpenStreetMapImageryProvider, SingleTileImageryProvider,
  UrlTemplateImageryProvider, WebMapTileServiceImageryProvider, SuperMapImageryProvider, Cesium3DTileset, PolylineGraphics, PolygonGraphics, PointCollection,
  PolylineCollection, PointPrimitive, Polyline, LabelCollection, Label, MeasureDistance, MeasureArea, MeasureHeight, Model
}
