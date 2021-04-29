declare namespace Cesium {
  function createDefaultImageryProviderViewModels (): Array<ProviderViewModel>
  function createDefaultTerrainProviderViewModels (): Array<ProviderViewModel>
  function sprintf (...args: any[]): string
  function appendForwardSlash (url: string): string
  const knockout: any
  const when: any
  const Uri: any
  const GlobeSurfaceTile: any
  interface Viewer {
    viewerWidgetResized?: Event
    _selectionIndicator?: SelectionIndicator
    _infoBox?: InfoBox
    _geocoder?: Geocoder
    _homeButton?: HomeButton
    _sceneModePicker?: SceneModePicker
    _projectionPicker?: ProjectionPicker
    _baseLayerPicker?: BaseLayerPicker
    _baseLayerPickerDropDown?: Element
    _navigationHelpButton?: NavigationHelpButton
    _animation?: Animation
    _timeline?: Timeline
    _fullscreenButton?: FullscreenButton
    _vrButton?: VRButton
    _terrainExaggeration: number
    _eventHelper?: EventHelper
    _toolbar?: Element
    _element?: Element
    _onInfoBoxCameraClicked?(val: InfoBoxViewModel): void
    _onInfoBoxClockClicked?(val: InfoBoxViewModel): void
    _clearObjects?: () => void
    _clearTrackedObject?(val: InfoBoxViewModel): void
  }

  interface Timeline {
    makeLabel?(time: JulianDate): string
    addEventListener?(type, listener, useCapture): void
  }

  interface Scene {
    frameState: any
    pickPositionWorldCoordinates (pickPositionWorldCoordinates: Cesium.Cartesian2, result?: Cesium.Cartesian3) : Cesium.Cartesian3
    _performanceDisplay: any
  }

  interface Globe {
    pickTriangle?(ray: Ray, scene: Scene, projection: MapProjection, cullBackFaces: boolean): {
      intersection: Cartesian3
      v0: Cartesian3
      v1: Cartesian3
      v2: Cartesian3
    } | undefined
  }

  // interface GlobeSurfaceTile {
  //   pickTriangle?(ray: Ray, mode: SceneMode, projection: MapProjection, cullBackFaces: boolean): {
  //     intersection: Cartesian3
  //     v0: Cartesian3
  //     v1: Cartesian3
  //     v2: Cartesian3
  //   } | undefined
  // }

  interface ImageryLayer {
    /**
     * Specify the relative order of the layers.
     */
    sortOrder?: number
  }

  interface ImageryLayerCollection {
    _layers: ImageryLayer[]
    _update (): void
  }

  interface BillboardCollection {
    _billboards: Billboard []
  }

  interface LabelCollection {
    _labels: Label []
  }

  interface PointPrimitiveCollection {
    _pointPrimitives: PointPrimitive []
  }

  interface PolylineCollection {
    _polylines: Polyline []
  }

  // eslint-disable-next-line no-var
  var SuperMapImageryProvider: any
  // eslint-disable-next-line no-var
  var TiandituImageryProvider: any
  // eslint-disable-next-line no-var
  var GeoTerrainProvider: any
  // eslint-disable-next-line no-var
  var BaiduMapImageryProvider: any

}

// eslint-disable-next-line no-var
declare var XE: any
// eslint-disable-next-line no-var
declare var XbsjCesium: any
// eslint-disable-next-line no-var
declare var XbsjEarth: any
