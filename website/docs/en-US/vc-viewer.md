## VcViewer

The basic component used to build the `Cesium` application is essentially a DOM node initialized by `Cesium.Viewer`, which is used to mount other DOM nodes or components.

**Note:** Other components of `vue-cesium` or custom components composed of them need to be placed under this component to load normally. After the initialization is complete, you can obtain the returned `Cesium` and `Viewer` instances in the `ready` event for Cesium API development, or use `ref` to obtain the component's `createPromise` object to get the Viewer instance.

### Basic usage

Basic usage of `vc-viewer`.

:::demo Use the `vc-viewer` tag and some of its response properties to initialize the 3D earth, and mount the `vc-navigation` navigation and `vc-entity` entity component. For detailed API, please refer to their documentation.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer
    ref="vcViewer"
    :animation="animation"
    :baseLayerPicker="baseLayerPicker"
    :timeline="timeline"
    :fullscreenButton="fullscreenButton"
    :fullscreenElement="fullscreenElement"
    :infoBox="infoBox"
    :showCredit="showCredit"
    @ready="onViewerReady"
    @leftClick="onLeftClick"
  >
    <vc-navigation :offset="offset" @compass-evt="onNavigationEvt" :otherOpts="otherOpts" @zoom-evt="onNavigationEvt"></vc-navigation>
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
      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {
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
|showCredit|Boolean|`true`| `optional` Whether to display the default Logo and loading data copyright information.|
|autoSortImageryLayers|Boolean|`true`| `optional`Whether to automatically sort image layers according to the layer `sortOrder` property when adding image layers.|
|removeCesiumScript|Boolean|`true`| `optional` Specify whether to remove the CesiumJS tag when `vc-viewer` is destroyed.|
|enableMouseEvent|Boolean|`true`| `optional` Specify whether to trigger the event.|
|skeleton|Boolean\|Object|`{ dark: false, animation: 'wave', square: true, bordered: true, color: undefined }`| `optional` Specify whether to display the skeleton background during initialization. Animation optional values `wave`, `pulse`, `pulse-x`, `pulse-y`, `fade`, `blink`, `none`|
|TZcode|String|| `optional` The custom Timeline formatted date is the time zone code used. vue-cesium formats `Timeline` as local time. If you want to display it as UTC world time, set `UTCoffset` to `new Date().getTimezoneOffset()`.|
|UTCoffset|String|| `optional` The time difference (minutes) between local time and UTC time. Customize Timeline to format the date to use.|
|accessToken|String||`optional`To specify the accessToken, use the data source of Cesium ion to apply for an account at [https://cesium.com/ion/](https://cesium.com/ion/) to obtain the Access Token.|
|cesiumPath|String|`'https://unpkg.com/cesium/Build/Cesium/Cesium.js'`|`optional`Specify an example of the cesium library used in the current scene.|
|------|-----|---|
|animation|Boolean|`false`|`optional`If set to false, the Animation widget will not be created.|
|baseLayerPicker| Boolean|`false`|`optional`If set to false, the BaseLayerPicker widget will not be created.|
|fullscreenButton|Boolean| `false`| `optional`If set to false, the FullscreenButton widget will not be created.|
|vrButton|Boolean|`false`|`optional`If set to true, the VRButton widget will be created.|
|geocoder|Boolean|`false`|`optional`If set to false, the Geocoder widget will not be created.|
|homeButton|Boolean|`false`|`optional`If set to false, the HomeButton widget will not be created.|
|infoBox|Boolean|`true`|`optional`If set to false, the InfoBox widget will not be created.|
|sceneModePicker|Boolean|`false`|`optional`If set to false, the SceneModePicker widget will not be created.|
|selectionIndicator|Boolean|`true`|`optional`If set to false, the SelectionIndicator widget will not be created.|
|timeline|Boolean|`false`|`optional`If set to false, the Timeline widget will not be created.|
|navigationHelpButton|Boolean|`false`|`optional`If set to false, the navigation help button will not be created.|
|navigationInstructionsInitiallyVisible|Boolean|`false`|`optional`True if the navigation instructions should initially be visible, or false if the should not be shown until the user explicitly clicks the button.|
|scene3DOnly|Boolean|`false`|`optional`When true, each geometry instance will only be rendered in 3D to save GPU memory.|
|shouldAnimate|Boolean|`false`|`optional`true if the clock should attempt to advance simulation time by default, false otherwise. |
|clockViewModel|Object||`optional`The clock view model to use to control current time.|
|imageryProvider|Object||`optional` The imagery provider to use. This value is only valid if `baseLayerPicker` is set to false.`vue-cesium` has replaced the default one with `NaturalEarthII` that comes with Cesium resources.|
|terrainProvider|Object||`optional` The terrain provider to use|
|skyBox|Object\|false||`optional` The skybox used to render the stars. When undefined, the default stars are used. If set to false, no skyBox, Sun, or Moon will be added.|
|skyAtmosphere|Object||`optional` Blue sky, and the glow around the Earth's limb. Set to false to turn it off.|
|fullscreenElement|Element|`document.body`|`optional`The element or id to be placed into fullscreen mode when the full screen button is pressed.|
|useDefaultRenderLoop|Boolean|`true`|`optional`True if this widget should control the render loop, false otherwise.|
|targetFrameRate|Number||`optional`The target frame rate when using the default render loop.|
|showRenderLoopErrors|Boolean|`true`|`optional`If true, this widget will automatically display an HTML panel to the user containing the error, if a render loop error occurs.|
|automaticallyTrackDataSourceClocks|Boolean|`true`|`optional`If true, this widget will automatically track the clock settings of newly added DataSources, updating if the DataSource's clock changes. Set this to false if you want to configure the clock independently.|
|contextOptions|Object||`optional`Context and WebGL creation properties corresponding to options passed to Scene.|
|sceneMode|Number|`3`|`optional` The initial scene mode. **COLUMBUS_VIEW: 1, SCENE2D: 2, SCENE3D: 3** |1/2/3|
|orderIndependentTranslucency|Boolean|`true`|`optional`If true and the configuration supports it, use order independent translucency.|
|creditContainer|Element \| String||`optional`The DOM element or ID that will contain the CreditDisplay. If not specified, the credits are added to the bottom of the widget itself.|
|creditViewport|Element \| String||`optional`The DOM element or ID that will contain the credit pop up created by the CreditDisplay. If not specified, it will appear over the widget itself.|
|dataSources|Object||`optional` The collection of data sources visualized by the widget. If this parameter is provided, the instance is assumed to be owned by the caller and will not be destroyed when the viewer is destroyed.|
|terrainExaggeration|Number|`1.0`|`optional`A scalar used to exaggerate the terrain. Note that terrain exaggeration will not modify any other primitive as they are positioned relative to the ellipsoid.|
|shadows|Boolean|`false`|`optional`Determines if shadows are cast by the sun.|
|terrainShadows|Number|`3`|`optional`Determines if the terrain casts or receives shadows from the sun.**DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
|mapMode2D|Number|`1`|`optional`Determines if the 2D map is rotatable or can be scrolled infinitely in the horizontal direction.**ROTATE: 0, INFINITE_SCROLL: 1**|0/1|
|projectionPicker|Boolean|`false`|`optional`If set to true, the ProjectionPicker widget will be created.|
|requestRenderMode|Boolean|`false`|`optional`If true, rendering a frame will only occur when needed as determined by changes within the scene. Enabling reduces the CPU/GPU usage of your application and uses less battery on mobile, but requires using Scene#requestRender to render a new frame explicitly in this mode. This will be necessary in many cases after making changes to the scene in other parts of the API. See Improving Performance with Explicit Rendering.|
|maximumRenderTimeChange|Number|`0.0`|`optional`	If requestRenderMode is true, this value defines the maximum change in simulation time allowed before a render is requested. See Improving Performance with Explicit Rendering.|
|camera|Object: VcCamera|| `optional` Scene camera position. Default positioning to China worldwide. **structure: { position: { lng: number, lat: number, height: number }, heading: number, pitch: number, roll: number }** |

### Events

<!-- prettier-ignore -->
| Name|Parameters|Description|Source|
|------|----|----|---|
|cesiumReady|(e: typeof Cesium)|Triggers when CesiumJS is successfully loaded.| - |
|beforeLoad|(instance: VcComponentInternalInstance)|Triggers before vc-viewer is loaded.| - |
|ready|(readyObj: VcReadyObject)|Triggers when vc-viewer is successfully loaded.| - |
|destroyed| (instance: VcComponentInternalInstance) |Triggers when vc-viewer is destroyed.| - |
|viewerWidgetResized|(e: ViewerWidgetResizedEvent)|Triggers when a component changes on vc-viewer.| - |
|------|----|----|---|
|selectedEntityChanged|(entity: Cesium.Entity)| Gets the event that is raised when the selected entity changes. |Viewer|
|trackedEntityChanged|(entity: Cesium.Entity)| Gets the event that is raised when the tracked entity changes. |Viewer|
|layerAdded|(imageryLayer: Cesium.ImageryLayer, index: number)|An event that is raised when a layer is added to the collection. Event handlers are passed the layer that was added and the index at which it was added.|Viewer.imageryLayers|
|layerMoved|(imageryLayer: Cesium.ImageryLayer, newIndex: number, oldIndex: number)|An event that is raised when a layer changes position in the collection. Event handlers are passed the layer that was moved, its new index after the move, and its old index prior to the move.|Viewer.imageryLayers|
|layerRemoved|(imageryLayer: Cesium.ImageryLayer, index: number)|An event that is raised when a layer is removed from the collection. Event handlers are passed the layer that was removed and the index from which it was removed.|Viewer.imageryLayers|
|layerShownOrHidden|(imageryLayer: Cesium.ImageryLayer, index: number, show: boolean)|An event that is raised when a layer is shown or hidden by setting the ImageryLayer#show property. Event handlers are passed a reference to this layer, the index of the layer in the collection, and a flag that is true if the layer is now shown or false if it is now hidden.|iewer.imageryLayers|
|dataSourceAdded|(collection: Cesium.DataSourceCollection, dataSource: VcDatasource)|An event that is raised when a data source is added to the collection. Event handlers are passed the data source that was added.|Viewer.dataSources|
|dataSourceMoved|(dataSource: VcDatasource, newIndex: number, oldIndex: number)|An event that is raised when a data source changes position in the collection. Event handlers are passed the data source that was moved, its new index after the move, and its old index prior to the move.|Viewer.dataSources|
|dataSourceRemoved|(collection: Cesium.DataSourceCollection, dataSource: VcDatasource)|An event that is raised when a data source is removed from the collection. Event handlers are passed the data source that was removed.|Viewer.entities|
|collectionChanged|(collection: Cesium.EntityCollection, addedArray: Array<Cesium.Entity>, removedArray: Array<Cesium.Entity>, changedArray: Array<Cesium.Entity>)|Gets the event that is fired when entities are added or removed from the collection. The generated event is a EntityCollection.collectionChangedEventCallback.|Viewer.entities|
|morphComplete|(transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean)|The event fired at the completion of a scene transition.|Viewer.scene|
|morphStart|(transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean)|The event fired at the beginning of a scene transition.|Viewer.scene|
|postRender|(scene: Cesium.Scene, time: Cesium.JulianDate)|Gets the event that will be raised immediately after the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.|Viewer.scene|
|preRender|(scene: Cesium.Scene, time: Cesium.JulianDate)|Gets the event that will be raised after the scene is updated and immediately before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.|Viewer.scene|
|postUpdate|(scene: Cesium.Scene, time: Cesium.JulianDate)|Gets the event that will be raised immediately after the scene is updated and before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.|Viewer.scene|
|preUpdate|(scene: Cesium.Scene, time: Cesium.JulianDate)|Gets the event that will be raised before the scene is updated or rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.|Viewer.scene|
|renderError|(scene: Cesium.Scene, error: any)|Gets the event that will be raised when an error is thrown inside the render function. The Scene instance and the thrown error are the only two parameters passed to the event handler. By default, errors are not rethrown after this event is raised, but that can be changed by setting the rethrowRenderErrors property.|Viewer.scene|
|terrainProviderChanged|(provider: VcTerrainProvider)|Gets an event that's raised when the terrain provider is changed.|Viewer.scene|
|changed|(percent: number)|Gets the event that will be raised when the camera has changed by percentageChanged.|Viewer.camera|
|moveEnd|()|Gets the event that will be raised when the camera has stopped moving.|Viewer.camera|
|moveStart|()|Gets the event that will be raised at when the camera starts to move.|Viewer.camera|
|onStop|(clock: Cesium.Clock)|An Event that is fired whenever Clock#stopTime is reached.|Viewer.clock|
|onTick|(clock: Cesium.Clock)|An Event that is fired whenever Clock#tick is called.|Viewer.clock|
|errorEvent|(tileProviderError: any)|Gets an event that is raised when the terrain provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.|Viewer.terrainProvider|
|cameraClicked|(viewModel: Cesium.InfoBoxViewModel)|Gets an Event that is fired when the user clicks the camera icon.|Viewer.infoBox.viewModel|
|closeClicked|(viewModel: Cesium.InfoBoxViewModel)|Gets an Event that is fired when the user closes the info box.|Viewer.infoBox.viewModel|
|leftClick|(evt: { position: Cesium.Cartesian2; })|Represents a mouse left click event.|ScreenSpaceEventType|
|leftDoubleClick|(evt: { position: Cesium.Cartesian2; })|Represents a mouse left double click event.|ScreenSpaceEventType|
|leftDown|(evt: { position: Cesium.Cartesian2; })|Represents a mouse left button down event.|ScreenSpaceEventType|
|leftUp|(evt: { position: Cesium.Cartesian2; })|Represents a mouse left button up event.|ScreenSpaceEventType|
|middleClick|(evt: { position: Cesium.Cartesian2; })|Represents a mouse middle click event.|ScreenSpaceEventType|
|middleDown|(evt: { position: Cesium.Cartesian2; })|Represents a mouse middle button down event.|ScreenSpaceEventType|
|middleUp|(evt: { position: Cesium.Cartesian2; })|Represents a mouse middle button up event.|ScreenSpaceEventType|
|mouseMove|{startPosition: point, endPosition: point}|Represents a mouse move event.|ScreenSpaceEventType|
|pinchEnd|()|Represents the end of a two-finger event on a touch surface.|ScreenSpaceEventType|
|pinchMove|(evt: { distance: { startPosition: Cesium.Cartesian2; endPosition: Cesium.Cartesian2 } angleAndHeight: { startPosition: Cesium.Cartesian2 ;endPosition: Cesium.Cartesian2 }})|Represents a change of a two-finger event on a touch surface.|ScreenSpaceEventType|
|pinchStart|(evt: { position1: Cesium.Cartesian2; position2: Cesium.Cartesian2; })|Represents the start of a two-finger event on a touch surface.|ScreenSpaceEventType|
|rightClick|(evt: { position: Cesium.Cartesian2; })|Represents a mouse right click event.|ScreenSpaceEventType|
|rightDown|(evt: { position: Cesium.Cartesian2; })|Represents a mouse left button down event.|ScreenSpaceEventType|
|rightUp|(evt: { position: Cesium.Cartesian2; })|Represents a mouse right button up event.|ScreenSpaceEventType|
|wheel|(delta: number)|Represents a mouse wheel event.|ScreenSpaceEventType|
|imageryLayersUpdatedEvent|()|Gets an event that's raised when an imagery layer is added, shown, hidden, moved, or removed.|Viewer.scene.globe|
|tileLoadProgressEvent|(length: number)|Gets an event that's raised when the length of the tile load queue has changed since the last render frame. When the load queue is empty, all terrain and imagery for the current view have been loaded. The event passes the new length of the tile load queue.|Viewer.scene.globe|

### Ref methods

| method          | returns                         | Description                                                                           |
| --------------- | ------------------------------- | ------------------------------------------------------------------------------------- |
| load            | {Cesium, viewer, vm} \| `false` | Load the component. It returns `VcReadyObject` on success, and `false on failure.`    |
| unload          | Boolean                         | Destroy the component. It returns `VcReadyObject` on success, and `false on failure.` |
| reload          | {Cesium, viewer, vm} \| `false` | Reload the component. It returns `VcReadyObject` on success, and `false on failure.`  |
| getCesiumObject | Object                          | Get the Cesium object loaded by this component.                                       |

### Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where vue-cesium sub tags content goes. | vc-navigation/vc-compass/vc-zoom-control/vc-print/vc-my-location/vc-location-bar/vc-distance-legend/vc-navigation-sm/vc-compass-sm/vc-zoom-control-sm/vc-layer-imagery/vc-entity/vc-terrain-provider-cesium/vc-terrain-provider-arcgis/vc-terrain-provider-tianditu/vc-datasource-custom/vc-datasource-czml/vc-datasource-geojson/vc-datasource-kml/vc-primitive/vc-primitive-classfication/vc-primitive-ground/vc-primitive-ground-polyline/vc-primitive-model/vc-primitive-tileset/vc-primitive-particle/vc-collection-billboard/vc-collection-label/vc-collection-point/vc-collection-polyline/vc-collection-primitive/vc-post-process-stage/vc-post-process-stage-scan/vc-post-process-stage-collection/vc-overlay-html/vc-overlay-heatmap/vc-overlay-wind/vc-overlay-echarts/vc-polygon |

### Reference

- Refer to the official documentation: [Viewer](https://cesium.com/docs/cesiumjs-ref-doc/Viewer.html)
