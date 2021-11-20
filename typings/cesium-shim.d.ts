declare namespace Cesium {
  function createDefaultImageryProviderViewModels(): Array<ProviderViewModel>
  function createDefaultTerrainProviderViewModels(): Array<ProviderViewModel>
  function sprintf(...args: any[]): string
  function appendForwardSlash(url: string): string
  const knockout: any
  const when: any
  const Uri: any
  const GlobeSurfaceTile: any
  const ManagedArray: any
  const VERSION: string
  const ClearCommand: any
  const Pass: any
  const VertexArray: any
  const BufferUsage: any
  const ShaderProgram: any
  const RenderState: any
  const DrawCommand: any
  const ComputeCommand: any
  const Sampler: any
  const Texture: any
  const Framebuffer: any
  const ShaderSource: any
  interface Viewer {
    viewerWidgetResized: Event
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
    _vcPickScreenSpaceEventHandler: ScreenSpaceEventHandler
    _vcViewerScreenSpaceEventHandler: ScreenSpaceEventHandler
  }

  interface Timeline {
    makeLabel?(time: JulianDate): string
    addEventListener?(type, listener, useCapture): void
  }

  interface Scene {
    frameState: any
    pickPositionWorldCoordinates(pickPositionWorldCoordinates: Cesium.Cartesian2, result?: Cesium.Cartesian3): Cesium.Cartesian3
    _performanceDisplay: any
    tweens: any
  }

  interface Globe {
    pickTriangle?(
      ray: Ray,
      scene: Scene,
      projection: MapProjection,
      cullBackFaces: boolean
    ):
      | {
          intersection: Cartesian3
          v0: Cartesian3
          v1: Cartesian3
          v2: Cartesian3
        }
      | undefined
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
    _update(): void
  }

  interface BillboardCollection {
    _billboards: Billboard[]
  }

  interface LabelCollection {
    _labels: Label[]
  }

  interface PointPrimitiveCollection {
    _pointPrimitives: PointPrimitive[]
  }

  interface PolylineCollection {
    _polylines: Polyline[]
  }

  interface PrimitiveCollection {
    _primitives: Array<Primitive | any>
  }

  // eslint-disable-next-line no-var
  var SuperMapImageryProvider: any
  // eslint-disable-next-line no-var
  var TiandituImageryProvider: any
  // eslint-disable-next-line no-var
  var GeoTerrainProvider: any
  // eslint-disable-next-line no-var
  var BaiduMapImageryProvider: any

  namespace ScreenSpaceEventParamsType {
    export interface LEFT_DOWN {
      position: Cesium.Cartesian2
    }
    export interface LEFT_UP {
      position: Cesium.Cartesian2
    }
    export interface LEFT_CLICK {
      position: Cesium.Cartesian2
    }
    export interface LEFT_DOUBLE_CLICK {
      position: Cesium.Cartesian2
    }
    export interface RIGHT_DOWN {
      position: Cesium.Cartesian2
    }
    export interface RIGHT_UP {
      position: Cesium.Cartesian2
    }
    export interface RIGHT_CLICK {
      position: Cesium.Cartesian2
    }
    export interface MIDDLE_DOWN {
      position: Cesium.Cartesian2
    }
    export interface MIDDLE_UP {
      position: Cesium.Cartesian2
    }
    export interface MIDDLE_CLICK {
      position: Cesium.Cartesian2
    }
    export interface MOUSE_MOVE {
      startPosition: Cesium.Cartesian2
      endPosition: Cesium.Cartesian2
    }
    export type WHEEL = number
    export interface PINCH_START {
      position1: Cesium.Cartesian2
      position2: Cesium.Cartesian2
    }
    export type PINCH_END = undefined

    export interface PINCH_MOVE {
      distance: {
        startPosition: Cesium.Cartesian2
        endPosition: Cesium.Cartesian2
      }
      angleAndHeight: {
        startPosition: Cesium.Cartesian2
        endPosition: Cesium.Cartesian2
      }
    }
  }
}

// eslint-disable-next-line no-var
declare var XE: any
// eslint-disable-next-line no-var
declare var XbsjCesium: any
// eslint-disable-next-line no-var
declare var XbsjEarth: any
// eslint-disable-next-line no-var
declare var mars3d: any
// eslint-disable-next-line no-var
declare var DC: any
// eslint-disable-next-line no-var
declare var DcCore: any
