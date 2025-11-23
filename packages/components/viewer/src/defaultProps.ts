import type { DCConfig, Mars3dConfig, VcCamera, VcContextOptions } from '@vue-cesium/utils/types'
import type { PropType } from 'vue'
import type { VcSkeletonProps } from '../../ui'
import type { VcViewerCreatorFunction } from './useViewer'

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
  baseLayer: {
    type: [Object, Boolean] as PropType<Cesium.ImageryLayer | false>,
    default: () => undefined
  },
  terrainProvider: Object as PropType<Cesium.TerrainProvider>,
  skyBox: {
    type: [Object, Boolean] as PropType<Cesium.SkyBox | false>,
    default: () => undefined
  },
  skyAtmosphere: {
    type: [Object, Boolean] as PropType<Cesium.SkyAtmosphere | false>,
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
  contextOptions: Object as PropType<VcContextOptions>,
  sceneMode: {
    type: Number,
    default: 3
  },
  mapProjection: Object as PropType<Cesium.MapProjection>,
  globe: {
    type: [Object, Boolean] as PropType<Cesium.Globe | false>,
    default: () => undefined
  },
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
  verticalExaggeration: {
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
    type: Object as PropType<VcCamera>,
    default: () =>
      ({
        position: {
          lng: 105,
          lat: 29.999999999999993,
          height: 19059568.497290563
        },
        heading: 360,
        pitch: -90,
        roll: 0
      } as VcCamera)
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
    type: [Boolean, Object] as PropType<boolean | VcSkeletonProps>,
    default: () =>
      ({
        dark: false,
        animation: 'wave',
        square: true,
        bordered: true,
        color: undefined
      } as VcSkeletonProps)
  },
  touchHoldArg: {
    type: String,
    default: '1000'
  },
  viewerCreator: Function as PropType<VcViewerCreatorFunction>,
  mars3dConfig: Object as PropType<Mars3dConfig>,
  dcConfig: Object as PropType<DCConfig>,
  containerId: String
}
