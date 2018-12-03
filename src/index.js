import { version } from '../package.json'
import CesiumViewer from '@/viewer/CesiumViewer.vue'
import ImageryLayer from '@/imageryLayers/ImageryLayer.vue'

import SuperMapImageryLayer from '@/imageryLayers/SuperMapImageryLayer.vue'
import ArcGisMapServerImageryProvider from '@/imageryLayers/ArcGisMapServerImageryProvider.vue'
import BingMapsImageryProvider from '@/imageryLayers/BingMapsImageryProvider.vue'
import WebMapTileServiceImageryLayer from '@/imageryLayers/WebMapTileServiceImageryLayer.vue'
import UrlTemplateImageryLayer from '@/imageryLayers/UrlTemplateImageryLayer.vue'
import SingleTileImageryLayer from '@/imageryLayers/SingleTileImageryLayer.vue'
import MapboxImageryLayer from '@/imageryLayers/MapboxImageryLayer.vue'
import OpenStreetMapImageryLayer from '@/imageryLayers/OpenStreetMapImageryLayer.vue'

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
    let cesiumPath
    if (options) {
      cesiumPath = options.cesiumPath
    } else {
      cesiumPath = 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
    }
    Vue.prototype._Cesium = () => ({ cesiumPath })
    Vue.component('cesium-viewer', CesiumViewer)
    Vue.component(ImageryLayer.name, ImageryLayer)

    Vue.component('supermap-imagery-layer', SuperMapImageryLayer)
    Vue.component(ArcGisMapServerImageryProvider.name, ArcGisMapServerImageryProvider)
    Vue.component(BingMapsImageryProvider.name, BingMapsImageryProvider)
    Vue.component('wmts-imagery-layer', WebMapTileServiceImageryLayer)
    Vue.component('urltemplate-imagery-layer', UrlTemplateImageryLayer)
    Vue.component('singletile-imagery-layer', SingleTileImageryLayer)
    Vue.component('mapbox-imagery-layer', MapboxImageryLayer)
    Vue.component('openstreetmap-imagery-layer', OpenStreetMapImageryLayer)

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
  CesiumViewer, ImageryLayer, SuperMapImageryLayer, ArcGisMapServerImageryProvider, BingMapsImageryProvider, WebMapTileServiceImageryLayer, UrlTemplateImageryLayer,
  SingleTileImageryLayer, MapboxImageryLayer, OpenStreetMapImageryLayer, Cesium3DTileset, PolylineGraphics, PolygonGraphics, PointCollection,
  PolylineCollection, PointPrimitive, Polyline, LabelCollection, Label, MeasureDistance, MeasureArea, MeasureHeight, Model
}
