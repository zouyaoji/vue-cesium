import { version } from '../package.json'
import CesiumViewer from './viewer/CesiumViewer.vue'
import SuperMapImageryLayer from './layers/SuperMapImageryLayer.vue'
import ArcGisMapServerImageryLayer from './layers/ArcGisMapServerImageryLayer.vue'
import BingMapsImageryLayer from './layers/BingMapsImageryLayer.vue'
import WebMapTileServiceImageryLayer from './layers/WebMapTileServiceImageryLayer.vue'
import UrlTemplateImageryLayer from './layers/UrlTemplateImageryLayer.vue'
import SingleTileImageryLayer from './layers/SingleTileImageryLayer.vue'
import MapboxImageryLayer from './layers/MapboxImageryLayer.vue'
import OpenStreetMapImageryLayer from './layers/OpenStreetMapImageryLayer.vue'
import Cesium3DTileset from './models/Cesium3DTileset.vue'
import PolylineGraphics from './entities/PolylineGraphics.vue'
import PointCollection from './primitives/PointPrimitiveCollection.vue'
import PolylineCollection from './primitives/PolylineCollection.vue'
import LabelCollection from './primitives/LabelCollection.vue'
import PointPrimitive from './primitives/PointPrimitive.vue'
import Polyline from './primitives/Polyline.vue'
import Label from './primitives/Label.vue'
import MeasureDistance from './measure/MeasureDistance.vue'

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
    Vue.component('supermap-imagery-layer', SuperMapImageryLayer)
    Vue.component('arcgis-imagery-layer', ArcGisMapServerImageryLayer)
    Vue.component('bingmaps-imagery-layer', BingMapsImageryLayer)
    Vue.component('wmts-imagery-layer', WebMapTileServiceImageryLayer)
    Vue.component('urltemplate-imagery-layer', UrlTemplateImageryLayer)
    Vue.component('singletile-imagery-layer', SingleTileImageryLayer)
    Vue.component('mapbox-imagery-layer', MapboxImageryLayer)
    Vue.component('openstreetmap-imagery-layer', OpenStreetMapImageryLayer)
    Vue.component('cesium-3dtileset', Cesium3DTileset)
    Vue.component('polyline-entity', PolylineGraphics)
    Vue.component('point-collection', PointCollection)
    Vue.component('polyline-collection', PolylineCollection)
    Vue.component('label-collection', LabelCollection)
    Vue.component('point-primitive', PointPrimitive)
    Vue.component('polyline-primitive', Polyline)
    Vue.component('label-primitive', Label)
    Vue.component('measure-distance', MeasureDistance)
  },
  version
}

export {
  CesiumViewer, SuperMapImageryLayer, ArcGisMapServerImageryLayer, BingMapsImageryLayer, WebMapTileServiceImageryLayer, UrlTemplateImageryLayer,
  SingleTileImageryLayer, MapboxImageryLayer, OpenStreetMapImageryLayer, Cesium3DTileset, PolylineGraphics, PointCollection, PolylineCollection,
  PointPrimitive, Polyline, LabelCollection, Label, MeasureDistance
}
