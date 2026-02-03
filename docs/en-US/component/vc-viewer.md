---
title: Viewer
lang: en-US
---

# Viewer

The basic component for building `Cesium` applications. Essentially, it is a DOM node initialized through `Cesium.Viewer` for mounting other DOM nodes or child components.

## Basic Usage

Use the `vc-viewer` tag and some of its reactive properties to initialize a 3D scene and mount the `vc-navigation` navigation and `vc-entity` entity components. For detailed API, please refer to their documentation.

:::demo This example uses Vue Composition API.

viewer/usage

:::

## API

### Props

<!-- prettier-ignore -->
|Property|Type|Default|Description|
|------|------|-----|---|
|camera|VcCamera|| `optional` Specifies the initial scene camera position, default is China.  |
|showCredit|boolean|`true`| `optional` Specifies whether to display the default Logo and data loading copyright information.|
|autoSortImageryLayers|boolean|`true`| `optional` Specifies whether to automatically sort imagery layers based on the `sortOrder` property when adding them.|
|removeCesiumScript|boolean|`false`| `optional` Specifies whether to remove the CesiumJS script when the `vc-viewer` component is destroyed.|
|enableMouseEvent|boolean|`true`| `optional` Specifies whether to trigger mouse events.|
|skeleton|boolean\|VcSkeletonProps|| `optional` Specifies whether to show skeleton background when `vc-viewer` is initialized.|
|touchHoldArg|string|'1000'|`optional` Specifies the time delay for `vc-viewer` to respond to touch events on touch screens.|
|TZcode|string|| `optional` Timezone code for Timeline date formatting. By default, the `Timeline` will be formatted as local time. To display as UTC world time, set `UTCoffset` to `new Date().getTimezoneOffset()`.|
|UTCoffset|number|| `optional` The difference between local time and UTC time (in minutes).|
|accessToken|string||`optional` Specifies the accessToken. To use Cesium ion data sources, you need to apply for an account at [https://cesium.com/ion/](https://cesium.com/ion/) and get an Access Token.|
|cesiumPath|string||`optional` Specifies the Web service address of the CesiumJS library for initializing the `vc-viewer` component.|
|viewerCreator|VcViewerCreatorFunction||`optional` Specifies the viewer object for initializing the `vc-viewer` component. This parameter can be used to customize the initialization method of the viewer object when importing third-party libraries.|
|containerId|string|`'cesiumContainer'`|`optional` Specifies the id of the container div element for `vc-viewer`.|
|mars3dConfig|Mars3dConfig||`optional` Applicable to mars3d only. Specifies the configuration parameters of the mars3d library for initializing the `vc-viewer` component.|
|animation|boolean|`false`|`optional` Whether to show the animation control.|
|baseLayer|false\|Cesium.ImageryProvider|`undefined`|`optional` Disables or configures the internal base layer.|
|baseLayerPicker| boolean|`false`|`optional` Whether to show the base layer switching button.|
|fullscreenButton|boolean| `false`| `optional` Whether to show the fullscreen button.|
|vrButton|boolean|`false`|`optional` Whether to show the VR button.|
|geocoder|boolean\|Array<Cesium.GeocoderService>|`false`|`optional` Whether to show the geocoder search box.|
|homeButton|boolean|`false`|`optional` Whether to show the home button.|
|infoBox|boolean|`true`|`optional` Whether to show the info box.|
|sceneModePicker|boolean|`false`|`optional` Whether to show the scene mode picker button.|
|selectionIndicator|boolean|`true`|`optional` Whether to show the selection indicator.|
|timeline|boolean|`false`|`optional` Whether to show the timeline control.|
|navigationHelpButton|boolean|`false`|`optional` Whether to show the navigation help button.|
|navigationInstructionsInitiallyVisible|boolean|`false`|`optional` Whether to expand the navigation help panel initially. If false, the panel will expand only when clicking the navigationHelpButton.|
|scene3DOnly|boolean|`false`|`optional` If true, each geometry instance will be rendered only in 3D to save GPU memory.|
|shouldAnimate|boolean|`false`|`optional`Whether to start time simulation. |
|clockViewModel|Cesium.ClockViewModel||`optional`Clock view model for controlling the current time.|
|selectedImageryProviderViewModel|Cesium.ProviderViewModel||`optional` Uses the view model of the current base image layer. If not provided, the first available base layer is used. Only valid when `baseLayerPicker` is set to true.|
|terrainProviderViewModels|Array<Cesium.ProviderViewModel>||`optional` Provides an array of optional ProviderViewModel for BaseAlayerPicker. Only valid when `baseLayerPicker` is set to true.|
|imageryProvider|Cesium.ImageryProvider||`optional` Specifies the imagery to load during initialization. `vue-cesium` has already replaced the default with the `NaturalEarthII` from Cesium resources.|
|terrainProvider|Cesium.TerrainProvider||`optional` Specifies the terrain to load during initialization.|
|skyBox|Cesium.SkyBox\|false||`optional` Specifies the sky box to load during initialization. `undefined` is the default starry sky background. `false` means no sky box, sun, moon, etc. will be added.|
|skyAtmosphere|Cesium.skyAtmosphere\|false||`optional` Blue sky and the glow around the Earth. Set to false to turn it off.|
|fullscreenElement|Element \| string|`document.body`|`optional` The element or ID to put into fullscreen mode when the fullscreen button is pressed.|
|useDefaultRenderLoop|boolean|`true`|`optional` Whether to enable the default render loop control.|
|targetFrameRate|number| - |`optional` The target frame rate when using the default render loop.|
|showRenderLoopErrors|boolean|`true`|`optional` If true, an HTML panel with error information will automatically be displayed to the user when a render loop error occurs.|
|useBrowserRecommendedResolution|boolean|`true`|`optional` If true, rendering will be done at the browser-recommended resolution and window.devicePixelRatio will be ignored.|
|automaticallyTrackDataSourceClocks|boolean|`true`|`optional` If true, the clock settings of newly added data sources will be automatically tracked. If a data source's clock changes, it will be updated. To set the clock individually, set this to false.|
|contextOptions|VcContextOptions||`optional`Context and WebGL creation options matching the options passed to Scene.|
|sceneMode|number\|Cesium.SceneMode|`3`|`optional` Specifies the scene mode. **COLUMBUS_VIEW: 1, SCENE2D: 2, SCENE3D: 3** |
|mapProjection|Cesium.MapProjection||`optional` Map projection used in 2D and Columbus view modes.|
|globe|Cesium.Globe\|false||`optional` The Earth used by the scene. If set to false, no Earth will be added.|
|orderIndependentTranslucency|boolean|`true`|`optional` If this is set to true and the device supports it, order-independent translucency will be used.|
|creditContainer|Element \| string||`optional` Specifies the DOM element or ID containing CreditDisplay information. If not specified, credit information will be added to the bottom of the widget.|
|creditViewport|Element \| string||`optional` Specifies the DOM element or ID containing CreditDisplay popup information. If not specified, credit information will be added to the bottom of the widget.|
|dataSources|Cesium.DataSourceCollection||`optional` Specifies the collection of data sources to load during initialization. If a data source collection is specified, it will not be destroyed when the `Viewer` is destroyed.|
|terrainExaggeration|number|`1.0`|`optional`Scalar for exaggerating terrain. Note that setting terrain exaggeration does not modify any other data.|
|shadows|boolean|`false`|`optional`Determines whether shadows are cast by the sun.|
|terrainShadows|number\|Cesium.ShadowMode|`3`|`optional`Determines whether terrain reflects or receives shadows from the sun. **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |
|mapMode2D|number\|Cesium.MapMode2D|`1`|`optional`Determines whether the 2D map is rotatable or can scroll infinitely in the horizontal direction. **ROTATE: 0, INFINITE_SCROLL: 1**|
|projectionPicker|boolean|`false`|`optional`Whether to show the projection picker button.|
|requestRenderMode|boolean|`false`|`optional`If true, the frame will only be rendered based on changes in the scene. Enabling this can reduce the application's CPU/GPU usage and reduce battery consumption on mobile devices, but requires explicitly calling Scene#requestRender to render a new frame in this mode.|
|maximumRenderTimeChange|number|`0.0`|`optional`If requestRenderMode is true, this value defines the maximum simulated time change allowed before requesting a render.|

### Events

<!-- prettier-ignore -->
| Event|Parameter|Description|
|------|----|----|
|cesiumReady|(e: typeof Cesium)|Triggered when CesiumJS is loaded successfully.|
|beforeLoad|(instance: VcComponentInternalInstance)|Triggered before the object is loaded.|
|ready|(readyObj: VcReadyObject)|Triggered when the object is loaded.|
|destroyed| (instance: VcComponentInternalInstance) |Triggered when the object is destroyed.|
|viewerWidgetResized| (e: ViewerWidgetResizedEvent) |Triggered when a widget on vc-viewer is resized.|
|touchEnd| (e: any) |Triggered when touch long press ends on vc-viewer.|
|selectedEntityChanged|(entity: Cesium.Entity)|Triggered when the selected entity in the scene changes. The event parameter represents the selected entity or undefined (nothing selected)|
|trackedEntityChanged|(entity: Cesium.Entity)|Triggered when the tracked entity in the scene changes. The event parameter represents the tracked entity.|
|layerAdded|(imageryLayer: Cesium.ImageryLayer, index: number)|Triggered when an imagery layer is added to the scene. Parameters are the layer and its index.|
|layerMoved|(imageryLayer: Cesium.ImageryLayer, newIndex: number, oldIndex: number)|Triggered when an imagery layer is moved. Parameters are the layer, previous index, and new index.|
|layerRemoved|(imageryLayer: Cesium.ImageryLayer, index: number)|Triggered when an imagery layer is removed from the scene. Parameters are the layer and its index.|
|layerShownOrHidden|(imageryLayer: Cesium.ImageryLayer, index: number, show: boolean)|Triggered when the visibility of a layer changes. Parameters are the affected layer, its index, and visibility state.|
|dataSourceAdded|(collection: Cesium.DataSourceCollection, dataSource: VcDatasource)|Triggered when a data source is added to the scene. Parameter is the data source.|
|dataSourceMoved|(dataSource: VcDatasource, newIndex: number, oldIndex: number)|Triggered when a data source is moved. Parameters are the data source, previous index, and new index.|
|dataSourceRemoved|(collection: Cesium.DataSourceCollection, dataSource: VcDatasource)|Triggered when a data source is removed from the scene. Parameter is the data source.|
|collectionChanged|(collection: Cesium.EntityCollection, addedArray: Array<Cesium.Entity>, removedArray: Array<Cesium.Entity>, changedArray: Array<Cesium.Entity>)|Triggered when entities are added, removed, or changed. Parameters are the entity collection and arrays of added, removed, and changed entities.|
|morphComplete|(transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean)|Triggered when scene mode transition is complete. Parameter is an object containing the scene.|
|morphStart|(transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean)|Triggered when scene mode transition starts. Parameter is an object containing the scene.|
|postRender|(scene: Cesium.Scene, time: Cesium.JulianDate)|Triggered after each frame is rendered. Parameters are the scene instance and current time.|
|preRender|(scene: Cesium.Scene, time: Cesium.JulianDate)|Triggered after scene update but before each frame is rendered. Parameters are the scene instance and current time.|
|postUpdate|(scene: Cesium.Scene, time: Cesium.JulianDate)|Triggered after scene update but before rendering. Parameters are the scene instance and current time.|
|preUpdate|(scene: Cesium.Scene, time: Cesium.JulianDate)|Triggered before scene update or rendering. Parameters are the scene instance and current time.|
|renderError|(scene: Cesium.Scene, error: any)|Triggered when a render error occurs. Parameters are the scene instance and error.|
|terrainProviderChanged|(provider: VcTerrainProvider)|Triggered when the terrain provider changes.|
|changed|(percent: number)|Triggered when the camera changes by the specified percentage.|
|moveEnd|()|Triggered when the camera stops moving.|
|moveStart|()|Triggered when the camera starts moving.|
|onStop|(clock: Cesium.Clock)|Triggered when the clock reaches the stop time.|
|onTick|(clock: Cesium.Clock)|Triggered when Clock#tick is called.|
|errorEvent|(tileProviderError: any)|Triggered when the terrain provider encounters an asynchronous error.|
|cameraClicked|(viewModel: Cesium.InfoBoxViewModel)|Triggered when the camera button in the infoBox popup is clicked.|
|closeClicked|(viewModel: Cesium.InfoBoxViewModel)|Triggered when the infoBox popup is closed.|
|leftClick|(evt: { position: Cesium.Cartesian2; })|Mouse left click event.|
|leftDoubleClick|(evt: { position: Cesium.Cartesian2; })|Mouse left double click event.|
|leftDown|(evt: { position: Cesium.Cartesian2; })|Mouse left button down event.|
|leftUp|(evt: { position: Cesium.Cartesian2; })|Mouse left button up event|
|middleClick|(evt: { position: Cesium.Cartesian2; })|Mouse middle click event.|
|middleDown|(evt: { position: Cesium.Cartesian2; })|Mouse middle button down event.|
|middleUp|(evt: { position: Cesium.Cartesian2; })|Mouse middle button up event.|
|mouseMove|{startPosition: point, endPosition: point}|Mouse move event.|
|pinchEnd|()|Touch device double finger operation end event.|
|pinchMove|(evt: { distance: { startPosition: Cesium.Cartesian2; endPosition: Cesium.Cartesian2 } angleAndHeight: { startPosition: Cesium.Cartesian2 ;endPosition: Cesium.Cartesian2 }})|Touch device double finger operation move event.|
|pinchStart|(evt: { position1: Cesium.Cartesian2; position2: Cesium.Cartesian2; })|Touch device double finger operation start event.|
|rightClick|(evt: { position: Cesium.Cartesian2; })|Mouse right click event.|
|rightDown|(evt: { position: Cesium.Cartesian2; })|Mouse right button down event.|
|rightUp|(evt: { position: Cesium.Cartesian2; })|Mouse button up event.|
|wheel|(delta: number)|Mouse wheel scroll event.|
|imageryLayersUpdatedEvent|()|Triggered when imagery layers are added, shown, hidden, moved, or removed.|
|tileLoadProgressEvent|(length: number)|Raised when the tile load queue length changes since the last render frame. When the queue is empty, all terrain and imagery in the current view have been loaded. The event passes the new length of the tile load queue.|

### Methods

| Method             | Parameters                               | Description                                                                     |
| ------------------ | ---------------------------------------- | ------------------------------------------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | Manually load the component.                                                    |
| reload             | () => Promise\<false \| VcReadyObject\>  | Manually reload the component.                                                  |
| unload             | () => Promise\<boolean\>                 | Manually unload the component.                                                  |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get a Promise object indicating whether the component was created successfully. |
| getCesiumObject    | () => VcCesiumObject                     | Get the Cesium object loaded by this component.                                 |

### Slots

<!-- prettier-ignore -->
| Slot | Description |
| ----- | -----|
| default | All vue-cesium child components should be placed under vc-viewer. |

## Notes

Other functional components of `VueCesium`, or custom components composed of these functional components, must be child components of the `VcViewer` component.

For example, the following code is incorrect:

```html
<template>
  <div>
    <vc-viewer @ready="onViewerReady"></vc-viewer>
    <vc-entity></vc-entity>
    <!-- Incorrect usage! -->
  </div>
</template>
```

## References

- Official Documentation: **[Viewer](https://cesium.com/docs/cesiumjs-ref-doc/Viewer.html)**
