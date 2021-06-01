(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/vc-viewer.md?vue&type=template&id=e4a729f2

var vc_viewervue_type_template_id_e4a729f2_hoisted_1 = {
  class: "content element-doc"
};

var vc_viewervue_type_template_id_e4a729f2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcviewer\"><a class=\"header-anchor\" href=\"#vcviewer\">¶</a> VcViewer</h2><p>The basic component used to build the <code>Cesium</code> application is essentially a DOM node initialized by <code>Cesium.Viewer</code>, which is used to mount other DOM nodes or components.</p><p><strong>Note:</strong> Other components of <code>vue-cesium</code> or custom components composed of them need to be placed under this component to load normally. After the initialization is complete, you can obtain the returned <code>Cesium</code> and <code>Viewer</code> instances in the <code>ready</code> event for Cesium API development, or use <code>ref</code> to obtain the component&#39;s <code>createPromise</code> object to get the Viewer instance.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of <code>vc-viewer</code>.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag and some of its response properties to initialize the 3D earth, and mount the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" navigation and "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" entity component. For detailed API, please refer to their documentation.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer\n    ref=\"vcViewer\"\n    :animation=\"animation\"\n    :baseLayerPicker=\"baseLayerPicker\"\n    :timeline=\"timeline\"\n    :fullscreenButton=\"fullscreenButton\"\n    :fullscreenElement=\"fullscreenElement\"\n    :infoBox=\"infoBox\"\n    :showCredit=\"showCredit\"\n    @ready=\"onViewerReady\"\n    @leftClick=\"onLeftClick\"\n  >\n    <vc-navigation :offset=\"offset\" @compass-evt=\"onNavigationEvt\" :otherOpts=\"otherOpts\" @zoom-evt=\"onNavigationEvt\"></vc-navigation>\n    <vc-entity v-model:billboard=\"billboard\" ref=\"entity\" @click=\"onEntityClick\" :position=\"{lng: 108, lat: 32}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-billboard ref=\"billboard\" image=\"https://zouyaoji.top/vue-cesium/favicon.png\"></vc-graphics-billboard>\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Destroy</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n    <el-row v-if=\"!loading\">\n      <el-switch v-model=\"animation\" active-color=\"#13ce66\" inactive-text=\"Animation\"> </el-switch>\n      <el-switch v-model=\"timeline\" active-color=\"#13ce66\" inactive-text=\"Timeline\"> </el-switch>\n      <el-switch v-model=\"baseLayerPicker\" active-color=\"#13ce66\" inactive-text=\"BaseLayerPicker\"> </el-switch>\n      <el-switch v-model=\"fullscreenButton\" active-color=\"#13ce66\" inactive-text=\"FullscreenButton\"> </el-switch>\n      <el-switch v-model=\"infoBox\" active-color=\"#13ce66\" inactive-text=\"InfoBox\"> </el-switch>\n      <el-switch v-model=\"showCredit\" active-color=\"#13ce66\" inactive-text=\"Credit\"> </el-switch>\n    </el-row>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        loading: true,\n        animation: true,\n        timeline: true,\n        baseLayerPicker: false,\n        fullscreenButton: true,\n        infoBox: true,\n        showCredit: true,\n        fullscreenElement: document.body,\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 150]\n        },\n        billboard: {},\n        offset: [10, 25],\n        otherOpts: {\n          offset: [0, 32],\n          position: 'bottom-right'\n        }\n      }\n    },\n    watch: {\n      timeline(val) {\n        this.otherOpts.offset = val ? [0, 30] : this.fullscreenButton ? [30, 5] : [0, 5]\n      },\n      fullscreenButton(val) {\n        if (!this.timeline && !val) {\n          this.otherOpts.offset = [0, 5]\n        } else if (!this.timeline && val) {\n          this.otherOpts.offset = [30, 5]\n        }\n      }\n    },\n    mounted() {\n      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {\n        console.log('viewer is loaded.')\n      })\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        this.loading = false\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      },\n      onEntityClick(e) {\n        console.log(e)\n      },\n      onLeftClick(e) {\n        console.log(e)\n      },\n\n      load() {\n        this.$refs.vcViewer.load().then(e => {\n          console.log(e)\n          this.loading = false\n        })\n      },\n      unload() {\n        this.$refs.vcViewer.unload().then(e => {\n          console.log(e)\n          this.loading = true\n        })\n      },\n      reload() {\n        this.loading = true\n        this.$refs.vcViewer.reload().then(e => {\n          console.log(e)\n          this.loading = false\n        })\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>showCredit</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Whether to display the default Logo and loading data copyright information.</td><td></td></tr><tr><td>autoSortImageryLayers</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code>Whether to automatically sort image layers according to the layer <code>sortOrder</code> property when adding image layers.</td><td></td></tr><tr><td>removeCesiumScript</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to remove the CesiumJS tag when <code>vc-viewer</code> is destroyed.</td><td></td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to trigger the event.</td><td></td></tr><tr><td>skeleton</td><td>Boolean|Object</td><td><code>{ dark: false, animation: &#39;wave&#39;, square: true, bordered: true, color: undefined }</code></td><td><code>optional</code> Specify whether to display the skeleton background during initialization. Animation optional values <code>wave</code>, <code>pulse</code>, <code>pulse-x</code>, <code>pulse-y</code>, <code>fade</code>, <code>blink</code>, <code>none</code></td><td></td></tr><tr><td>TZcode</td><td>String</td><td><code>UTM</code></td><td><code>optional</code> The custom Timeline formatted date is the time zone code used.</td><td></td></tr><tr><td>UTCoffset</td><td>String</td><td><code>-(new Date().getTimezoneOffset())</code></td><td><code>optional</code> The time difference (minutes) between local time and UTC time. Customize Timeline to format the date to use.</td><td></td></tr><tr><td>accessToken</td><td>String</td><td></td><td><code>optional</code>To specify the accessToken, use the data source of Cesium ion to apply for an account at <a href=\"https://cesium.com/ion/\">https://cesium.com/ion/</a> to obtain the Access Token. It is usually specified in Vue.use().</td><td></td></tr><tr><td>cesiumPath</td><td>String</td><td><code>&#39;https://unpkg.com/cesium/Build/Cesium/Cesium.js&#39;</code></td><td><code>optional</code>Specify an example of the cesium library used in the current scene. It is usually specified in Vue.use().</td><td></td></tr><tr><td>------</td><td>-----</td><td>---</td><td></td><td></td></tr><tr><td>animation</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>If set to false, the Animation widget will not be created.</td><td></td></tr><tr><td>baseLayerPicker</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>If set to false, the BaseLayerPicker widget will not be created.</td><td></td></tr><tr><td>fullscreenButton</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>If set to false, the FullscreenButton widget will not be created.</td><td></td></tr><tr><td>vrButton</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>If set to true, the VRButton widget will be created.</td><td></td></tr><tr><td>geocoder</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>If set to false, the Geocoder widget will not be created.</td><td></td></tr><tr><td>homeButton</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>If set to false, the HomeButton widget will not be created.</td><td></td></tr><tr><td>infoBox</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code>If set to false, the InfoBox widget will not be created.</td><td></td></tr><tr><td>sceneModePicker</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>If set to false, the SceneModePicker widget will not be created.</td><td></td></tr><tr><td>selectionIndicator</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code>If set to false, the SelectionIndicator widget will not be created.</td><td></td></tr><tr><td>timeline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>If set to false, the Timeline widget will not be created.</td><td></td></tr><tr><td>navigationHelpButton</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>If set to false, the navigation help button will not be created.</td><td></td></tr><tr><td>navigationInstructionsInitiallyVisible</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>True if the navigation instructions should initially be visible, or false if the should not be shown until the user explicitly clicks the button.</td><td></td></tr><tr><td>scene3DOnly</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>When true, each geometry instance will only be rendered in 3D to save GPU memory.</td><td></td></tr><tr><td>shouldAnimate</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>true if the clock should attempt to advance simulation time by default, false otherwise.</td><td></td></tr><tr><td>clockViewModel</td><td>Object</td><td></td><td><code>optional</code>The clock view model to use to control current time.</td><td></td></tr><tr><td>imageryProvider</td><td>Object</td><td></td><td><code>optional</code> The imagery provider to use. This value is only valid if <code>baseLayerPicker</code> is set to false.<code>vue-cesium</code> has replaced the default one with <code>NaturalEarthII</code> that comes with Cesium resources.</td><td></td></tr><tr><td>terrainProvider</td><td>Object</td><td></td><td><code>optional</code> The terrain provider to use</td><td></td></tr><tr><td>skyBox</td><td>Object|false</td><td></td><td><code>optional</code> The skybox used to render the stars. When undefined, the default stars are used. If set to false, no skyBox, Sun, or Moon will be added.</td><td></td></tr><tr><td>skyAtmosphere</td><td>Object</td><td></td><td><code>optional</code> Blue sky, and the glow around the Earth&#39;s limb. Set to false to turn it off.</td><td></td></tr><tr><td>fullscreenElement</td><td>Element</td><td><code>document.body</code></td><td><code>optional</code>The element or id to be placed into fullscreen mode when the full screen button is pressed.</td><td></td></tr><tr><td>useDefaultRenderLoop</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code>True if this widget should control the render loop, false otherwise.</td><td></td></tr><tr><td>targetFrameRate</td><td>Number</td><td></td><td><code>optional</code>The target frame rate when using the default render loop.</td><td></td></tr><tr><td>showRenderLoopErrors</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code>If true, this widget will automatically display an HTML panel to the user containing the error, if a render loop error occurs.</td><td></td></tr><tr><td>automaticallyTrackDataSourceClocks</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code>If true, this widget will automatically track the clock settings of newly added DataSources, updating if the DataSource&#39;s clock changes. Set this to false if you want to configure the clock independently.</td><td></td></tr><tr><td>contextOptions</td><td>Object</td><td></td><td><code>optional</code>Context and WebGL creation properties corresponding to options passed to Scene.</td><td></td></tr><tr><td>sceneMode</td><td>Number</td><td><code>3</code></td><td><code>optional</code> The initial scene mode. <strong>COLUMBUS_VIEW: 1, SCENE2D: 2, SCENE3D: 3</strong></td><td>1/2/3</td></tr><tr><td>orderIndependentTranslucency</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code>If true and the configuration supports it, use order independent translucency.</td><td></td></tr><tr><td>creditContainer</td><td>Element | String</td><td></td><td><code>optional</code>The DOM element or ID that will contain the CreditDisplay. If not specified, the credits are added to the bottom of the widget itself.</td><td></td></tr><tr><td>creditViewport</td><td>Element | String</td><td></td><td><code>optional</code>The DOM element or ID that will contain the credit pop up created by the CreditDisplay. If not specified, it will appear over the widget itself.</td><td></td></tr><tr><td>dataSources</td><td>Object</td><td></td><td><code>optional</code> The collection of data sources visualized by the widget. If this parameter is provided, the instance is assumed to be owned by the caller and will not be destroyed when the viewer is destroyed.</td><td></td></tr><tr><td>terrainExaggeration</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code>A scalar used to exaggerate the terrain. Note that terrain exaggeration will not modify any other primitive as they are positioned relative to the ellipsoid.</td><td></td></tr><tr><td>shadows</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>Determines if shadows are cast by the sun.</td><td></td></tr><tr><td>terrainShadows</td><td>Number</td><td><code>3</code></td><td><code>optional</code>Determines if the terrain casts or receives shadows from the sun.<strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>mapMode2D</td><td>Number</td><td><code>1</code></td><td><code>optional</code>Determines if the 2D map is rotatable or can be scrolled infinitely in the horizontal direction.<strong>ROTATE: 0, INFINITE_SCROLL: 1</strong></td><td>0/1</td></tr><tr><td>projectionPicker</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>If set to true, the ProjectionPicker widget will be created.</td><td></td></tr><tr><td>requestRenderMode</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>If true, rendering a frame will only occur when needed as determined by changes within the scene. Enabling reduces the CPU/GPU usage of your application and uses less battery on mobile, but requires using Scene#requestRender to render a new frame explicitly in this mode. This will be necessary in many cases after making changes to the scene in other parts of the API. See Improving Performance with Explicit Rendering.</td><td></td></tr><tr><td>maximumRenderTimeChange</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> If requestRenderMode is true, this value defines the maximum change in simulation time allowed before a render is requested. See Improving Performance with Explicit Rendering.</td><td></td></tr><tr><td>camera</td><td>Object</td><td></td><td><code>optional</code> Scene camera position. Default positioning to China worldwide. <strong>structure: { position: { lng: number, lat: number, height: number }, heading: number, pitch: number, roll: number }</strong></td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th><th>Source</th></tr></thead><tbody><tr><td>cesiumReady</td><td>Cesium</td><td>Triggers when CesiumJS is successfully loaded.</td><td>-</td></tr><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before vc-viewer is loaded.</td><td>-</td></tr><tr><td>ready</td><td>{Cesium, viewer, vm}</td><td>Triggers when vc-viewer is successfully loaded.</td><td>-</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when vc-viewer is destroyed.</td><td>-</td></tr><tr><td>viewerWidgetResized</td><td></td><td>Triggers when a component changes on vc-viewer.</td><td>-</td></tr><tr><td>------</td><td>----</td><td>----</td><td>---</td></tr><tr><td>selectedEntityChanged</td><td>Entity</td><td>Gets the event that is raised when the selected entity changes.</td><td>Viewer</td></tr><tr><td>trackedEntityChanged</td><td>Entity</td><td>Gets the event that is raised when the tracked entity changes.</td><td>Viewer</td></tr><tr><td>layerAdded</td><td>imageryLayer, index</td><td>An event that is raised when a layer is added to the collection. Event handlers are passed the layer that was added and the index at which it was added.</td><td>Viewer.imageryLayers</td></tr><tr><td>layerMoved</td><td>imageryLayer, newIndex, oldIndex</td><td>An event that is raised when a layer changes position in the collection. Event handlers are passed the layer that was moved, its new index after the move, and its old index prior to the move.</td><td>Viewer.imageryLayers</td></tr><tr><td>layerRemoved</td><td>imageryLayer, index</td><td>An event that is raised when a layer is removed from the collection. Event handlers are passed the layer that was removed and the index from which it was removed.</td><td>Viewer.imageryLayers</td></tr><tr><td>layerShownOrHidden</td><td>imageryLayer, index, flag</td><td>An event that is raised when a layer is shown or hidden by setting the ImageryLayer#show property. Event handlers are passed a reference to this layer, the index of the layer in the collection, and a flag that is true if the layer is now shown or false if it is now hidden.</td><td>iewer.imageryLayers</td></tr><tr><td>dataSourceAdded</td><td>dataSource</td><td>An event that is raised when a data source is added to the collection. Event handlers are passed the data source that was added.</td><td>Viewer.dataSources</td></tr><tr><td>dataSourceMoved</td><td>dataSource</td><td>An event that is raised when a data source changes position in the collection. Event handlers are passed the data source that was moved, its new index after the move, and its old index prior to the move.</td><td>Viewer.dataSources</td></tr><tr><td>dataSourceRemoved</td><td>dataSource</td><td>An event that is raised when a data source is removed from the collection. Event handlers are passed the data source that was removed.</td><td>Viewer.entities</td></tr><tr><td>collectionChanged</td><td>collection, added, removed, changed</td><td>Gets the event that is fired when entities are added or removed from the collection. The generated event is a EntityCollection.collectionChangedEventCallback.</td><td>Viewer.entities</td></tr><tr><td>morphComplete</td><td>object</td><td>The event fired at the completion of a scene transition.</td><td>Viewer.scene</td></tr><tr><td>morphStart</td><td>object</td><td>The event fired at the beginning of a scene transition.</td><td>Viewer.scene</td></tr><tr><td>postRender</td><td>scene</td><td>Gets the event that will be raised immediately after the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.</td><td>Viewer.scene</td></tr><tr><td>preRender</td><td>scene</td><td>Gets the event that will be raised after the scene is updated and immediately before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.</td><td>Viewer.scene</td></tr><tr><td>postUpdate</td><td>scene</td><td>Gets the event that will be raised immediately after the scene is updated and before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.</td><td>Viewer.scene</td></tr><tr><td>preUpdate</td><td>scene</td><td>Gets the event that will be raised before the scene is updated or rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.</td><td>Viewer.scene</td></tr><tr><td>renderError</td><td>scene, error</td><td>Gets the event that will be raised when an error is thrown inside the render function. The Scene instance and the thrown error are the only two parameters passed to the event handler. By default, errors are not rethrown after this event is raised, but that can be changed by setting the rethrowRenderErrors property.</td><td>Viewer.scene</td></tr><tr><td>terrainProviderChanged</td><td></td><td>Gets an event that&#39;s raised when the terrain provider is changed.</td><td>Viewer.scene</td></tr><tr><td>changed</td><td>number</td><td>Gets the event that will be raised when the camera has changed by percentageChanged.</td><td>Viewer.camera</td></tr><tr><td>moveEnd</td><td></td><td>Gets the event that will be raised when the camera has stopped moving.</td><td>Viewer.camera</td></tr><tr><td>moveStart</td><td></td><td>Gets the event that will be raised at when the camera starts to move.</td><td>Viewer.camera</td></tr><tr><td>onStop</td><td></td><td>An Event that is fired whenever Clock#stopTime is reached.</td><td>Viewer.clock</td></tr><tr><td>onTick</td><td></td><td>An Event that is fired whenever Clock#tick is called.</td><td>Viewer.clock</td></tr><tr><td>errorEvent</td><td></td><td>Gets an event that is raised when the terrain provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.</td><td>Viewer.terrainProvider</td></tr><tr><td>cameraClicked</td><td></td><td>Gets an Event that is fired when the user clicks the camera icon.</td><td>Viewer.infoBox.viewModel</td></tr><tr><td>closeClicked</td><td></td><td>Gets an Event that is fired when the user closes the info box.</td><td>Viewer.infoBox.viewModel</td></tr><tr><td>leftClick</td><td>{position: point}</td><td>Represents a mouse left click event.</td><td>ScreenSpaceEventType</td></tr><tr><td>leftDoubleClick</td><td>{position: point}</td><td>Represents a mouse left double click event.</td><td>ScreenSpaceEventType</td></tr><tr><td>leftDown</td><td>{position: point}</td><td>Represents a mouse left button down event.</td><td>ScreenSpaceEventType</td></tr><tr><td>leftUp</td><td>{position: point}</td><td>Represents a mouse left button up event.</td><td>ScreenSpaceEventType</td></tr><tr><td>middleClick</td><td>{position: point}</td><td>Represents a mouse middle click event.</td><td>ScreenSpaceEventType</td></tr><tr><td>middleDown</td><td>{position: point}</td><td>Represents a mouse middle button down event.</td><td>ScreenSpaceEventType</td></tr><tr><td>middleUp</td><td>{position: point}</td><td>Represents a mouse middle button up event.</td><td>ScreenSpaceEventType</td></tr><tr><td>mouseMove</td><td>{startPosition: point, endPosition: point}</td><td>Represents a mouse move event.</td><td>ScreenSpaceEventType</td></tr><tr><td>pinchEnd</td><td></td><td>Represents the end of a two-finger event on a touch surface.</td><td>ScreenSpaceEventType</td></tr><tr><td>pinchMove</td><td>{distance: {startPosition: point, endPosition: point}, angleAndHeight: {startPosition: point, endPosition: point}}</td><td>Represents a change of a two-finger event on a touch surface.</td><td>ScreenSpaceEventType</td></tr><tr><td>pinchStart</td><td>{position1: point, position2: point}</td><td>Represents the start of a two-finger event on a touch surface.</td><td>ScreenSpaceEventType</td></tr><tr><td>rightClick</td><td>{position: point}</td><td>Represents a mouse right click event.</td><td>ScreenSpaceEventType</td></tr><tr><td>rightDown</td><td>{position: point}</td><td>Represents a mouse left button down event.</td><td>ScreenSpaceEventType</td></tr><tr><td>rightUp</td><td>{position: point}</td><td>Represents a mouse right button up event.</td><td>ScreenSpaceEventType</td></tr><tr><td>wheel</td><td>delta</td><td>Represents a mouse wheel event.</td><td>ScreenSpaceEventType</td></tr><tr><td>imageryLayersUpdatedEvent</td><td></td><td>Gets an event that&#39;s raised when an imagery layer is added, shown, hidden, moved, or removed.</td><td>Viewer.scene.globe</td></tr><tr><td>terrainProviderChanged</td><td></td><td>Gets an event that&#39;s raised when the terrain provider is changed. This should be the same as the scene Triggers.</td><td>Viewer.scene.globe</td></tr><tr><td>tileLoadProgressEvent</td><td></td><td>Gets an event that&#39;s raised when the length of the tile load queue has changed since the last render frame. When the load queue is empty, all terrain and imagery for the current view have been loaded. The event passes the new length of the tile load queue.</td><td>Viewer.scene.globe</td></tr></tbody></table><h3 id=\"ref-methods\"><a class=\"header-anchor\" href=\"#ref-methods\">¶</a> Ref methods</h3><table><thead><tr><th>method</th><th>returns</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td>{Cesium, viewer, vm} | <code>false</code></td><td>Load the component. It returns <code>ReadyObj</code> on success, and <code>false on failure.</code></td></tr><tr><td>unload</td><td>Boolean</td><td>Destroy the component. It returns <code>ReadyObj</code> on success, and <code>false on failure.</code></td></tr><tr><td>reload</td><td>{Cesium, viewer, vm} | <code>false</code></td><td>Reload the component. It returns <code>ReadyObj</code> on success, and <code>false on failure.</code></td></tr><tr><td>getCesiumObject</td><td>Object</td><td>Get the Cesium object loaded by this component.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <a href=\"https://cesium.com/docs/cesiumjs-ref-doc/Viewer.html\">Viewer</a></li></ul>", 8);

function vc_viewervue_type_template_id_e4a729f2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_viewervue_type_template_id_e4a729f2_hoisted_1, [vc_viewervue_type_template_id_e4a729f2_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/vc-viewer.md?vue&type=template&id=e4a729f2

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/vc-viewer.md?vue&type=script&lang=ts


/* harmony default export */ var vc_viewervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */],
          _createCommentVNode = vue_esm_browser["j" /* createCommentVNode */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Destroy");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        var _component_vc_navigation = _resolveComponent("vc-navigation");

        var _component_vc_graphics_billboard = _resolveComponent("vc-graphics-billboard");

        var _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        var _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              ref: "vcViewer",
              animation: _ctx.animation,
              baseLayerPicker: _ctx.baseLayerPicker,
              timeline: _ctx.timeline,
              fullscreenButton: _ctx.fullscreenButton,
              fullscreenElement: _ctx.fullscreenElement,
              infoBox: _ctx.infoBox,
              showCredit: _ctx.showCredit,
              onReady: _ctx.onViewerReady,
              onLeftClick: _ctx.onLeftClick
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_navigation, {
                  offset: _ctx.offset,
                  onCompassEvt: _ctx.onNavigationEvt,
                  otherOpts: _ctx.otherOpts,
                  onZoomEvt: _ctx.onNavigationEvt
                }, null, 8, ["offset", "onCompassEvt", "otherOpts", "onZoomEvt"]), _createVNode(_component_vc_entity, {
                  billboard: _ctx.billboard,
                  "onUpdate:billboard": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.billboard = $event;
                  }),
                  ref: "entity",
                  onClick: _ctx.onEntityClick,
                  position: {
                    lng: 108,
                    lat: 32
                  },
                  point: _ctx.point,
                  label: _ctx.label
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_billboard, {
                      ref: "billboard",
                      image: "https://zouyaoji.top/vue-cesium/favicon.png"
                    }, null, 512), _createVNode(_component_vc_graphics_rectangle, {
                      coordinates: [130, 20, 80, 25],
                      material: "green"
                    })];
                  }),
                  _: 1
                }, 8, ["billboard", "onClick", "point", "label"])];
              }),
              _: 1
            }, 8, ["animation", "baseLayerPicker", "timeline", "fullscreenButton", "fullscreenElement", "infoBox", "showCredit", "onReady", "onLeftClick"]), _createVNode(_component_el_row, {
              class: "demo-toolbar"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_row, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_button, {
                      type: "danger",
                      round: "",
                      onClick: _ctx.unload
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_1];
                      }),
                      _: 1
                    }, 8, ["onClick"]), _createVNode(_component_el_button, {
                      type: "danger",
                      round: "",
                      onClick: _ctx.load
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_2];
                      }),
                      _: 1
                    }, 8, ["onClick"]), _createVNode(_component_el_button, {
                      type: "danger",
                      round: "",
                      onClick: _ctx.reload
                    }, {
                      default: _withCtx(function () {
                        return [_hoisted_3];
                      }),
                      _: 1
                    }, 8, ["onClick"])];
                  }),
                  _: 1
                }), !_ctx.loading ? (_openBlock(), _createBlock(_component_el_row, {
                  key: 0
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_switch, {
                      modelValue: _ctx.animation,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                        return _ctx.animation = $event;
                      }),
                      "active-color": "#13ce66",
                      "inactive-text": "Animation"
                    }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                      modelValue: _ctx.timeline,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                        return _ctx.timeline = $event;
                      }),
                      "active-color": "#13ce66",
                      "inactive-text": "Timeline"
                    }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                      modelValue: _ctx.baseLayerPicker,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.baseLayerPicker = $event;
                      }),
                      "active-color": "#13ce66",
                      "inactive-text": "BaseLayerPicker"
                    }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                      modelValue: _ctx.fullscreenButton,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                        return _ctx.fullscreenButton = $event;
                      }),
                      "active-color": "#13ce66",
                      "inactive-text": "FullscreenButton"
                    }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                      modelValue: _ctx.infoBox,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                        return _ctx.infoBox = $event;
                      }),
                      "active-color": "#13ce66",
                      "inactive-text": "InfoBox"
                    }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                      modelValue: _ctx.showCredit,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                        return _ctx.showCredit = $event;
                      }),
                      "active-color": "#13ce66",
                      "inactive-text": "Credit"
                    }, null, 8, ["modelValue"])];
                  }),
                  _: 1
                })) : _createCommentVNode("", true)];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512)]);
      }

      var democomponentExport = {
        data: function data() {
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
          };
        },
        watch: {
          timeline: function timeline(val) {
            this.otherOpts.offset = val ? [0, 30] : this.fullscreenButton ? [30, 5] : [0, 5];
          },
          fullscreenButton: function fullscreenButton(val) {
            if (!this.timeline && !val) {
              this.otherOpts.offset = [0, 5];
            } else if (!this.timeline && val) {
              this.otherOpts.offset = [30, 5];
            }
          }
        },
        mounted: function mounted() {
          this.$refs.vcViewer.createPromise.then(function (_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
            console.log('viewer is loaded.');
          });
        },
        methods: {
          onViewerReady: function onViewerReady(_ref2) {
            var Cesium = _ref2.Cesium,
                viewer = _ref2.viewer;
            this.loading = false;
          },
          onNavigationEvt: function onNavigationEvt(e) {
            console.log(e);
          },
          onEntityClick: function onEntityClick(e) {
            console.log(e);
          },
          onLeftClick: function onLeftClick(e) {
            console.log(e);
          },
          load: function load() {
            var _this = this;

            this.$refs.vcViewer.load().then(function (e) {
              console.log(e);
              _this.loading = false;
            });
          },
          unload: function unload() {
            var _this2 = this;

            this.$refs.vcViewer.unload().then(function (e) {
              console.log(e);
              _this2.loading = true;
            });
          },
          reload: function reload() {
            var _this3 = this;

            this.loading = true;
            this.$refs.vcViewer.reload().then(function (e) {
              console.log(e);
              _this3.loading = false;
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/vc-viewer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/vc-viewer.md



vc_viewervue_type_script_lang_ts.render = vc_viewervue_type_template_id_e4a729f2_render

/* harmony default export */ var vc_viewer = __webpack_exports__["default"] = (vc_viewervue_type_script_lang_ts);

/***/ })

}]);