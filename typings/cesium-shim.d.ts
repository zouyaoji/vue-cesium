import { AnyFunction, Cesium as CesiumNative } from '@vue-cesium/utils/types'
// import * as CesiumNative from 'cesium'

declare module 'cesium' {
  /**
   * Returns a formatted string
   * @param args
   */
  function sprintf(...args: any[]): string
  function createDefaultImageryProviderViewModels(): void
  function createDefaultTerrainProviderViewModels(): void
  const knockout: any
  const when: any
  const Tween: any

  interface Viewer {
    viewerWidgetResized?: CesiumNative.Event
    globe?: CesiumNative.Globe
    VcNavigationContaner?: HTMLElement
    _selectionIndicator?: CesiumNative.SelectionIndicator
    _infoBox?: CesiumNative.InfoBox
    _geocoder?: CesiumNative.Geocoder
    _homeButton?: CesiumNative.HomeButton
    _sceneModePicker?: CesiumNative.SceneModePicker
    _projectionPicker?: CesiumNative.ProjectionPicker
    _baseLayerPicker?: CesiumNative.BaseLayerPicker
    _baseLayerPickerDropDown?: Element
    _navigationHelpButton?: CesiumNative.NavigationHelpButton
    _animation?: CesiumNative.Animation
    _timeline?: CesiumNative.Timeline
    _fullscreenButton?: CesiumNative.FullscreenButton
    _vrButton?: CesiumNative.VRButton
    _terrainExaggeration: number
    _eventHelper?: CesiumNative.EventHelper
    _toolbar?: Element
    _onInfoBoxCameraClicked?: AnyFunction
    _onInfoBoxClockClicked?: AnyFunction
    _clearObjects?: AnyFunction
    _clearTrackedObject?: AnyFunction
  }

  interface Timeline {
    makeLabel(time: CesiumNative.JulianDate): string
    addEventListener(type, listener, useCapture): void
  }

  interface Scene {
    frameState: any
    _performanceDisplay: any
  }

  interface Globe {
    pickTriangle: AnyFunction
  }

  class GlobeSurfaceTile {
    pickTriangle: AnyFunction
  }

  interface ImageryLayer {
    /**
     * Specify the relative order of the layers.
     */
    sortOrder?: number
  }

  interface ImageryLayerCollection {
    _layers: CesiumNative.ImageryLayer[]
    _update(): void
  }

  class SuperMapImageryProvider {}
}

declare global {
  // eslint-disable-next-line no-var
  var Cesium: typeof CesiumNative
  // eslint-disable-next-line no-var
  var XE: any
  // eslint-disable-next-line no-var
  var XbsjCesium: any
  // eslint-disable-next-line no-var
  var XbsjEarth: any
}
