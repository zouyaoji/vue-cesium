import { CameraOption } from '@vue-cesium/utils/types'
import { PropType } from 'vue'

export default {
  cesiumPath: String,
  animation: {
    type: Boolean,
    default: false
  },
  baseLayerPicker: {
    type: Boolean,
    default: false
  },
  fullscreenButton: {
    type: Boolean,
    default: false
  },
  vrButton: {
    type: Boolean,
    default: false
  },
  geocoder: {
    type: [Boolean, Array] as PropType<boolean | Array<Cesium.GeocoderService>>,
    default: false
  },
  homeButton: {
    type: Boolean,
    default: false
  },
  infoBox: {
    type: Boolean,
    default: true
  },
  sceneModePicker: {
    type: Boolean,
    default: false
  },
  selectionIndicator: {
    type: Boolean,
    default: true
  },
  timeline: {
    type: Boolean,
    default: false
  },
  navigationHelpButton: {
    type: Boolean,
    default: false
  },
  navigationInstructionsInitiallyVisible: {
    type: Boolean,
    default: false
  },
  scene3DOnly: {
    type: Boolean,
    default: false
  },
  shouldAnimate: {
    type: Boolean,
    default: false
  },
  clockViewModel: Object as PropType<Cesium.ClockViewModel>,
  selectedImageryProviderViewModel: Object as PropType<Cesium.ProviderViewModel>,
  imageryProviderViewModels: Array as PropType<Array<Cesium.ProviderViewModel>>,
  selectedTerrainProviderViewModel: Object as PropType<Cesium.ProviderViewModel>,
  terrainProviderViewModels: Array as PropType<Array<Cesium.ProviderViewModel>>,
  imageryProvider: Object as PropType<Cesium.ImageryProvider>,
  terrainProvider: Object as PropType<Cesium.TerrainProvider>,
  skyBox: {
    type: [Object, Boolean] as PropType<Cesium.SkyBox>,
    default: () => undefined
  },
  skyAtmosphere: {
    type: [Object, Boolean] as PropType<Cesium.SkyAtmosphere>,
    default: () => undefined
  },
  fullscreenElement: {
    type: [String, Element] as PropType<string | Element>
  },
  useDefaultRenderLoop: {
    type: Boolean,
    default: true
  },
  targetFrameRate: Number,
  showRenderLoopErrors: {
    type: Boolean,
    default: true
  },
  useBrowserRecommendedResolution: {
    type: Boolean,
    default: true
  },
  automaticallyTrackDataSourceClocks: {
    type: Boolean,
    default: true
  },
  contextOptions: Object,
  sceneMode: {
    type: Number,
    default: 3
  },
  mapProjection: Object as PropType<Cesium.MapProjection>,
  globe: Object as PropType<Cesium.Globe>,
  orderIndependentTranslucency: {
    type: Boolean,
    default: true
  },
  creditContainer: [String, Element] as PropType<string | Element>,
  creditViewport: [String, Element] as PropType<string | Element>,
  dataSources: Object as PropType<Cesium.DataSourceCollection>,
  terrainExaggeration: {
    type: Number,
    default: 1.0
  },
  shadows: {
    type: Boolean,
    default: false
  },
  terrainShadows: {
    type: Number,
    default: 3
  },
  mapMode2D: {
    type: Number,
    default: 1
  },
  projectionPicker: {
    type: Boolean,
    default: false
  },
  requestRenderMode: {
    type: Boolean,
    default: false
  },
  maximumRenderTimeChange: {
    type: Number,
    default: 0.0
  },
  debugShowFramesPerSecond: {
    type: Boolean,
    default: false
  },
  showCredit: {
    type: Boolean,
    default: true
  },
  accessToken: String,
  camera: {
    type: Object,
    default: () => ({
      position: {
        lng: 105,
        lat: 29.999999999999993,
        height: 19059568.497290563
      },
      heading: 360,
      pitch: -90,
      roll: 0
    })
  },
  navigation: {
    // for supermap
    type: Boolean,
    default: false
  },
  TZCode: {
    type: String
    // default: new Date().getTimezoneOffset() === 0 ? 'UTC' : 'UTC' + '+' + -(new Date().getTimezoneOffset() / 60)
  },
  UTCOffset: {
    type: Number
    // default: new Date().getTimezoneOffset()
  },
  removeCesiumScript: {
    type: Boolean,
    default: true
  },
  autoSortImageryLayers: {
    type: Boolean,
    default: true
  },
  enableMouseEvent: {
    type: Boolean,
    default: true
  },
  skeleton: {
    type: [Boolean, Object],
    default: () => ({
      dark: false,
      animation: 'wave',
      square: true,
      bordered: true,
      color: undefined
    })
  }
}
