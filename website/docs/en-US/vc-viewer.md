## VcViewer

The basic component for building a `Cesium` application, which is essentially a DOM node initialized by `Cesium.Viewer`, which is used to mount other DOM nodes or subcomponents.The `Cesium` and `Viewer` instances returned from the `ready` event of `vc-viewer` are used for Cesium API development. You can also get the `creatingPromise` object of the component through the `ref` template reference to get the Viewer instance.

**Note:** Other components of `vue-cesium` or custom components composed of them need to be placed under the `vc-viewer` component to load properly.

### Basic usage

Basic usage of `vc-viewer`.

:::demo Use the `vc-viewer` tag and some of its response properties to initialize the 3D earth, and mount the `vc-navigation` navigation and `vc-entity` entity component. For detailed API, please refer to their documentation.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer
    ref="vcViewer"
    :animation="animation"
    :base-layer-picker="baseLayerPicker"
    :timeline="timeline"
    :fullscreen-button="fullscreenButton"
    :fullscreen-element="fullscreenElement"
    :info-box="infoBox"
    :show-credit="showCredit"
    @ready="onViewerReady"
    @left-click="onLeftClick"
  >
    <vc-navigation :offset="offset" @compass-evt="onNavigationEvt" :other-opts="otherOpts" @zoom-evt="onNavigationEvt"></vc-navigation>
    <vc-entity v-model:billboard="billboard" ref="entity" @click="onEntityClick" :position="{lng: 108, lat: 32}" :point="point" :label="label">
      <vc-graphics-billboard ref="billboard" image="https://zouyaoji.top/vue-cesium/favicon.png"></vc-graphics-billboard>
      <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
    </vc-entity>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">Destroy</el-button>
      <el-button type="danger" round @click="load">Load</el-button>
      <el-button type="danger" round @click="reload">Reload</el-button>
    </el-row>
    <el-row v-if="!loading">
      <el-switch v-model="animation" active-color="#13ce66" inactive-text="Animation"> </el-switch>
      <el-switch v-model="timeline" active-color="#13ce66" inactive-text="Timeline"> </el-switch>
      <el-switch v-model="baseLayerPicker" active-color="#13ce66" inactive-text="BaseLayerPicker"> </el-switch>
      <el-switch v-model="fullscreenButton" active-color="#13ce66" inactive-text="FullscreenButton"> </el-switch>
      <el-switch v-model="infoBox" active-color="#13ce66" inactive-text="InfoBox"> </el-switch>
      <el-switch v-model="showCredit" active-color="#13ce66" inactive-text="Credit"> </el-switch>
    </el-row>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        loading: true,
        animation: true,
        timeline: true,
        baseLayerPicker: false,
        fullscreenButton: true,
        infoBox: true,
        showCredit: true,
        fullscreenElement: document.body,
        point: {
          pixelSize: 28,
          color: 'red'
        },
        label: {
          text: 'Hello World',
          pixelOffset: [0, 150]
        },
        billboard: {},
        offset: [10, 25],
        otherOpts: {
          offset: [0, 32],
          position: 'bottom-right'
        }
      }
    },
    watch: {
      timeline(val) {
        this.otherOpts.offset = val ? [0, 30] : this.fullscreenButton ? [30, 5] : [0, 5]
      },
      fullscreenButton(val) {
        if (!this.timeline && !val) {
          this.otherOpts.offset = [0, 5]
        } else if (!this.timeline && val) {
          this.otherOpts.offset = [30, 5]
        }
      }
    },
    mounted() {
      this.$refs.vcViewer.creatingPromise.then(({ Cesium, viewer }) => {
        console.log('viewer is loaded.')
      })
    },
    methods: {
      onViewerReady({ Cesium, viewer }) {
        this.loading = false
      },
      onNavigationEvt(e) {
        console.log(e)
      },
      onEntityClick(e) {
        console.log(e)
      },
      onLeftClick(e) {
        console.log(e)
      },

      load() {
        this.$refs.vcViewer.load().then(e => {
          console.log(e)
          this.loading = false
        })
      },
      unload() {
        this.$refs.vcViewer.unload().then(e => {
          console.log(e)
          this.loading = true
        })
      },
      reload() {
        this.loading = true
        this.$refs.vcViewer.reload().then(e => {
          console.log(e)
          this.loading = false
        })
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
|Name|Type|Default|Description|Accepted Values|
|------|------|-----|---|---|
|camera|VcCamera|| `optional` Scene camera position. Default positioning to China worldwide. |
|showCredit|boolean|`true`| `optional` Specify whether to display the default Logo and loading data copyright information.|
|autoSortImageryLayers|boolean|`true`| `optional` Specify whether to automatically sort imageLayers according to the layer's `sortOrder` property when adding imagelayer.|
|removeCesiumScript|boolean|`true`| `optional` Specify whether to remove the CesiumJS script tag when `vc-viewer` is destroyed.|
|enableMouseEvent|boolean|`true`| `optional` Specifiy whether to trigger mouse events.|
|skeleton|boolean\|VcSkeletonProps|| `optional` Specify whether to show the skeleton background during `vc-viewer` initialization.|
|touchHoldArg|string|'1000'|`optional` Specify the time delay for `vc-viewer` to respond to press events on touchscreens.|
|TZcode|string|| `optional` The time zone code used for timeline date formatting. By default, it is formatted as local time. If you want to display it as UTC universal time, set `UTCoffset` to `new Date().getTimezoneOffset()`|
|UTCoffset|number|| `optional` The time difference (minutes) between local time and UTC time.|
|accessToken|string||`optional` Specify the default [Cesium ion](https://cesium.com/ion/) access token.|
|cesiumPath|string||`optional` Specify the web service address of the CesiumJS library used to initialize the `vc-viewer` component.|
|viewerCreator|VcViewerCreatorFunction||`optional` Specify the initialization method of the viewer when loading non-standard third-party Cesium libraries.|
|containerId|string|`'cesiumContainer'`|`optional` Specifies the id of the `vc-viewer` container div element.。|
|mars3dConfig|Mars3dConfig||`optional` For mars3d only, specifies configuration parameters for the mars3d library used to initialize the `vc-viewer` component.|
|animation|boolean|`false`|`optional` If set to false, the Animation widget will not be created.|
|baseLayerPicker| boolean|`false`|`optional` If set to false, the BaseLayerPicker widget will not be created.|
|fullscreenButton|boolean| `false`| `optional` If set to false, the FullscreenButton widget will not be created.|
|vrButton|boolean|`false`|`optional` If set to true, the VRButton widget will be created.|
|geocoder|boolean\|Array<Cesium.GeocoderService>|`false`|`optional` If set to false, the Geocoder widget will not be created.|
|homeButton|boolean|`false`|`optional` If set to false, the HomeButton widget will not be created.|
|infoBox|boolean|`true`|`optional` If set to false, the InfoBox widget will not be created.|
|sceneModePicker|boolean|`false`|`optional` If set to false, the SceneModePicker widget will not be created.|
|selectionIndicator|boolean|`true`|`optional` If set to false, the SelectionIndicator widget will not be created.|
|timeline|boolean|`false`|`optional` If set to false, the Timeline widget will not be created.|
|navigationHelpButton|boolean|`false`|`optional` If set to false, the navigation help button will not be created.|
|navigationInstructionsInitiallyVisible|boolean|`false`|`optional` True if the navigation instructions should initially be visible, or false if the should not be shown until the user explicitly clicks the button.|
|scene3DOnly|boolean|`false`|`optional` When true, each geometry instance will only be rendered in 3D to save GPU memory.|
|shouldAnimate|boolean|`false`|`optional` true if the clock should attempt to advance simulation time by default, false otherwise. |
|clockViewModel|Cesium.ClockViewModel||`optional` The clock view model to use to control current time.|
|selectedImageryProviderViewModel|Cesium.ProviderViewModel||`optional` The view model for the current base imagery layer, if not supplied the first available base layer is used. This value is only valid if `baseLayerPicker` is set to true.|
|terrainProviderViewModels|Array<Cesium.ProviderViewModel>||`optional` The array of ProviderViewModels to be selectable from the BaseLayerPicker. This value is only valid if `baseLayerPicker` is set to true.|
|imageryProvider|Cesium.ImageryProvider||`optional` The imagery provider to use. This value is only valid if `baseLayerPicker` is set to false.`vue-cesium` has replaced the default one with `NaturalEarthII` that comes with Cesium resources.|
|terrainProvider|Cesium.TerrainProvider||`optional` The terrain provider to use|
|skyBox|Cesium.SkyBox\|false||`optional` The skybox used to render the stars. When undefined, the default stars are used. If set to false, no skyBox, Sun, or Moon will be added.|
|skyAtmosphere|Cesium.skyAtmosphere\|false||`optional` Blue sky, and the glow around the Earth's limb. Set to false to turn it off.|
|fullscreenElement|Element|`document.body`|`optional` The element or id to be placed into fullscreen mode when the full screen button is pressed.|
|useDefaultRenderLoop|boolean|`true`|`optional` True if this widget should control the render loop, false otherwise.|
|targetFrameRate|number||`optional` The target frame rate when using the default render loop.|
|showRenderLoopErrors|boolean|`true`|`optional` If true, this widget will automatically display an HTML panel to the user containing the error, if a render loop error occurs.|
|useBrowserRecommendedResolution|boolean|`true`|`optional` If true, render at the browser's recommended resolution and ignore window.devicePixelRatio.|
|automaticallyTrackDataSourceClocks|boolean|`true`|`optional` If true, this widget will automatically track the clock settings of newly added DataSources, updating if the DataSource's clock changes. Set this to false if you want to configure the clock independently.|
|contextOptions|VcContextOptions||`optional` Context and WebGL creation properties corresponding to options passed to Scene.|
|sceneMode|number\|Cesium.SceneMode|`3`|`optional` The initial scene mode. **COLUMBUS_VIEW: 1, SCENE2D: 2, SCENE3D: 3** |1/2/3|
|mapProjection|Cesium.MapProjection||`optional` The map projection to use in 2D and Columbus View modes.||
|globe|Cesium.Globe\|false||`optional` The globe to use in the scene. If set to false, no globe will be added.||
|orderIndependentTranslucency|boolean|`true`|`optional` If true and the configuration supports it, use order independent translucency.|
|creditContainer|Element \| string||`optional` The DOM element or ID that will contain the CreditDisplay. If not specified, the credits are added to the bottom of the widget itself.|
|creditViewport|Element \| string||`optional` The DOM element or ID that will contain the credit pop up created by the CreditDisplay. If not specified, it will appear over the widget itself.|
|dataSources|Cesium.DataSourceCollection||`optional`  The collection of data sources visualized by the widget. If this parameter is provided, the instance is assumed to be owned by the caller and will not be destroyed when the viewer is destroyed.|
|terrainExaggeration|number|`1.0`|`optional` A scalar used to exaggerate the terrain. Note that terrain exaggeration will not modify any other primitive as they are positioned relative to the ellipsoid.|
|shadows|boolean|`false`|`optional` Determines if shadows are cast by the sun.|
|terrainShadows|number\|Cesium.ShadowMode|`3`|`optional` Determines if the terrain casts or receives shadows from the sun.**DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
|mapMode2D|number\|Cesium.MapMode2D|`1`|`optional` Determines if the 2D map is rotatable or can be scrolled infinitely in the horizontal direction.**ROTATE: 0, INFINITE_SCROLL: 1**|0/1|
|projectionPicker|boolean|`false`|`optional` If set to true, the ProjectionPicker widget will be created.|
|requestRenderMode|boolean|`false`|`optional` If true, rendering a frame will only occur when needed as determined by changes within the scene. Enabling reduces the CPU/GPU usage of your application and uses less battery on mobile, but requires using Scene#requestRender to render a new frame explicitly in this mode. This will be necessary in many cases after making changes to the scene in other parts of the API. See Improving Performance with Explicit Rendering.|
|maximumRenderTimeChange|number|`0.0`|`optional` If requestRenderMode is true, this value defines the maximum change in simulation time allowed before a render is requested. See Improving Performance with Explicit Rendering.|

### Events

<!-- prettier-ignore -->
| Name|Parameters|Description|Source|
|------|----|----|---|
|cesiumReady|(e: typeof Cesium)|Triggers when CesiumJS is successfully loaded.| - |
|beforeLoad|(instance: VcComponentInternalInstance)|Triggers before vc-viewer is loaded.| - |
|ready|(readyObj: VcReadyObject)|Triggers when vc-viewer is successfully loaded.| - |
|destroyed| (instance: VcComponentInternalInstance) |Triggers when vc-viewer is destroyed.| - |
|viewerWidgetResized|(e: ViewerWidgetResizedEvent)|Triggers when a component changes on vc-viewer.| - |
|touchEnd| (e: any) |Triggers when the vc-viewer touch ends..| - |
|selectedEntityChanged|(entity: Cesium.Entity)| Triggers when the selected entity changes. |Viewer|
|trackedEntityChanged|(entity: Cesium.Entity)| Triggers when the tracked entity changes. |Viewer|
|layerAdded|(imageryLayer: Cesium.ImageryLayer, index: number)|Triggers when a layer is added to the collection. Event handlers are passed the layer that was added and the index at which it was added.|Viewer.imageryLayers|
|layerMoved|(imageryLayer: Cesium.ImageryLayer, newIndex: number, oldIndex: number)|Triggers when a layer changes position in the collection. Event handlers are passed the layer that was moved, its new index after the move, and its old index prior to the move.|Viewer.imageryLayers|
|layerRemoved|(imageryLayer: Cesium.ImageryLayer, index: number)|Triggers when a layer is removed from the collection. Event handlers are passed the layer that was removed and the index from which it was removed.|Viewer.imageryLayers|
|layerShownOrHidden|(imageryLayer: Cesium.ImageryLayer, index: number, show: boolean)|Triggers when a layer is shown or hidden by setting the ImageryLayer#show property. Event handlers are passed a reference to this layer, the index of the layer in the collection, and a flag that is true if the layer is now shown or false if it is now hidden.|iewer.imageryLayers|
|dataSourceAdded|(collection: Cesium.DataSourceCollection, dataSource: VcDatasource)|Triggers when a data source is added to the collection. Event handlers are passed the data source that was added.|Viewer.dataSources|
|dataSourceMoved|(dataSource: VcDatasource, newIndex: number, oldIndex: number)|Triggers when a data source changes position in the collection. Event handlers are passed the data source that was moved, its new index after the move, and its old index prior to the move.|Viewer.dataSources|
|dataSourceRemoved|(collection: Cesium.DataSourceCollection, dataSource: VcDatasource)|Triggers when a data source is removed from the collection. Event handlers are passed the data source that was removed.|Viewer.entities|
|collectionChanged|(collection: Cesium.EntityCollection, addedArray: Array<Cesium.Entity>, removedArray: Array<Cesium.Entity>, changedArray: Array<Cesium.Entity>)|Triggers when when entities are added or removed from the collection. The generated event is a EntityCollection.collectionChangedEventCallback.|Viewer.entities|
|morphComplete|(transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean)|Triggers at the completion of a scene transition.|Viewer.scene|
|morphStart|(transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean)|Triggers at the beginning of a scene transition.|Viewer.scene|
|postRender|(scene: Cesium.Scene, time: Cesium.JulianDate)|Triggers immediately after the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.|Viewer.scene|
|preRender|(scene: Cesium.Scene, time: Cesium.JulianDate)|Triggers after the scene is updated and immediately before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.|Viewer.scene|
|postUpdate|(scene: Cesium.Scene, time: Cesium.JulianDate)|Triggers immediately after the scene is updated and before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.|Viewer.scene|
|preUpdate|(scene: Cesium.Scene, time: Cesium.JulianDate)|Triggers before the scene is updated or rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.|Viewer.scene|
|renderError|(scene: Cesium.Scene, error: any)|Triggers when an error is thrown inside the render function. The Scene instance and the thrown error are the only two parameters passed to the event handler. By default, errors are not rethrown after this event is raised, but that can be changed by setting the rethrowRenderErrors property.|Viewer.scene|
|terrainProviderChanged|(provider: VcTerrainProvider)|Triggers when the terrain provider is changed.|Viewer.scene|
|changed|(percent: number)|Triggers when the camera has changed by percentageChanged.|Viewer.camera|
|moveEnd|()|Triggers when the camera has stopped moving.|Viewer.camera|
|moveStart|()|Triggers when the camera starts to move.|Viewer.camera|
|onStop|(clock: Cesium.Clock)|Triggers when Clock#stopTime is reached.|Viewer.clock|
|onTick|(clock: Cesium.Clock)|Triggers when Clock#tick is called.|Viewer.clock|
|errorEvent|(tileProviderError: any)|Triggers when the terrain provider encounters an asynchronous error. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.|Viewer.terrainProvider|
|cameraClicked|(viewModel: Cesium.InfoBoxViewModel)|Triggers when the user clicks the camera icon.|Viewer.infoBox.viewModel|
|closeClicked|(viewModel: Cesium.InfoBoxViewModel)|Triggers when the user closes the info box.|Viewer.infoBox.viewModel|
|leftClick|(evt: { position: Cesium.Cartesian2; })|Triggers when the mouse left button clicked.|ScreenSpaceEventType|
|leftDoubleClick|(evt: { position: Cesium.Cartesian2; })|Triggered when the mouse left button double clicked.|ScreenSpaceEventType|
|leftDown|(evt: { position: Cesium.Cartesian2; })|Triggered when the mouse left button down.|ScreenSpaceEventType|
|leftUp|(evt: { position: Cesium.Cartesian2; })|Triggered when the mouse left button up.|ScreenSpaceEventType|
|middleClick|(evt: { position: Cesium.Cartesian2; })|Triggers when the mouse middle button clicked.|ScreenSpaceEventType|
|middleDown|(evt: { position: Cesium.Cartesian2; })|Triggers when the mouse middle button down.|ScreenSpaceEventType|
|middleUp|(evt: { position: Cesium.Cartesian2; })|Triggers when the mouse middle button up.|ScreenSpaceEventType|
|mouseMove|{startPosition: point, endPosition: point}|Triggers when the mouse move.|ScreenSpaceEventType|
|pinchEnd|()|Triggers when end of a two-finger on a touch surface.|ScreenSpaceEventType|
|pinchMove|(evt: { distance: { startPosition: Cesium.Cartesian2; endPosition: Cesium.Cartesian2 } angleAndHeight: { startPosition: Cesium.Cartesian2 ;endPosition: Cesium.Cartesian2 }})|Triggers when a change of a two-finger on a touch surface.|ScreenSpaceEventType|
|pinchStart|(evt: { position1: Cesium.Cartesian2; position2: Cesium.Cartesian2; })|Triggers when the start of a two-finger on a touch surface.|ScreenSpaceEventType|
|rightClick|(evt: { position: Cesium.Cartesian2; })|Triggers when the mouse right click.|ScreenSpaceEventType|
|rightDown|(evt: { position: Cesium.Cartesian2; })|Triggers when the mouse right button down.|ScreenSpaceEventType|
|rightUp|(evt: { position: Cesium.Cartesian2; })|Triggers when the mouse right button up.|ScreenSpaceEventType|
|wheel|(delta: number)|Triggers when the mouse wheel.|ScreenSpaceEventType|
|imageryLayersUpdatedEvent|()|Triggers when an imagery layer is added, shown, hidden, moved, or removed.|Viewer.scene.globe|
|tileLoadProgressEvent|(length: number)|Triggers when the length of the tile load queue has changed since the last render frame. When the load queue is empty, all terrain and imagery for the current view have been loaded. The event passes the new length of the tile load queue.|Viewer.scene.globe|

### Methods

| Name               | Parameters                               | Description                                     |
| ------------------ | ---------------------------------------- | ----------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | Load components manually.                       |
| reload             | () => Promise\<false \| VcReadyObject\>  | Reload components manually.                     |
| unload             | () => Promise\<boolean\>                 | Destroy the loaded component manually.          |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | Get the creatingPromise.                        |
| getCesiumObject    | () => VcCesiumObject                     | Get the Cesium object loaded by this component. |

### Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where vue-cesium sub tags content goes. | vc-navigation/vc-compass/vc-zoom-control/vc-print/vc-my-location/vc-location-bar/vc-distance-legend/vc-navigation-sm/vc-compass-sm/vc-zoom-control-sm/vc-layer-imagery/vc-entity/vc-terrain-provider-cesium/vc-terrain-provider-arcgis/vc-terrain-provider-tianditu/vc-datasource-custom/vc-datasource-czml/vc-datasource-geojson/vc-datasource-kml/vc-primitive/vc-primitive-classfication/vc-primitive-ground/vc-primitive-ground-polyline/vc-primitive-model/vc-primitive-tileset/vc-primitive-particle/vc-collection-billboard/vc-collection-label/vc-collection-point/vc-collection-polyline/vc-collection-primitive/vc-post-process-stage/vc-post-process-stage-scan/vc-post-process-stage-collection/vc-overlay-html/vc-overlay-heatmap/vc-overlay-wind/vc-overlay-echarts/vc-polygon |

### Reference

- Refer to the official documentation: [Viewer](https://cesium.com/docs/cesiumjs-ref-doc/Viewer.html)
