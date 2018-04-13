# 场景容器

`SmViewer`是用于构建 Cesium 应用程序的基础部件，它将所有标准的 Cesium 部件组合成一个可重复使用的包。 此部件通常可以利用 mixin 来扩展，以此增加对各种应用程序有用的功能函数。\
场景容器的实质是通过 Cesium.Viewer 初始化的一个 DOM 节点，用于挂载其他 DOM 节点或者组件。此部件初始化完成后默认会有 Cesiumwidget, dataSources、 如果需要二次开发或者手动控制其子组件，可以在 `ready` 事件中使用返回的 `Cesium` 和 `Viewer` 实例进行手动控制。

Viewer

* cesiumWidget
  * clock
  * scene
    * imageryLayers
    * terrainProvider
    * camera
    * primitives
    * groundPrimitives
* dataSources
  * changedEvent
  * errorEvent
  * loadingEvent
  * dataSource
    * entities
* imageryLayers
  * imageryLayer
* scene
* clock

每一个 Viewer 都会自动初始化一个 CesiumWidget.

## 实例属性

### 静态属性

仅且可以初始化配置，不支持响应式。

---

| Name                                   | Type                       | Default                                  | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------- | -------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| navigationInstructionsInitiallyVisible | Boolean                    | false                                    | optional True if the navigation instructions should initially be visible, or false if the should not be shown until the user explicitly clicks the button.                                                                                                                                                                                                                                              |
| scene3DOnly                            | Boolean                    | false                                    | optional When true, each geometry instance will only be rendered in 3D to save GPU memory.                                                                                                                                                                                                                                                                                                              |
| clockViewModel                         | ClockViewModel             | new ClockViewModel(options.clock)        | optional The clock view model to use to control current time.                                                                                                                                                                                                                                                                                                                                           |
| selectedImageryProviderViewModel       | ProviderViewModel          |                                          | optional The view model for the current base imagery layer, if not supplied the first available base layer is used. This value is only valid if options.baseLayerPicker is set to true.                                                                                                                                                                                                                 |
| imageryProviderViewModels              | Array.\<ProviderViewModel> | createDefaultImageryProviderViewModels() | optional The array of ProviderViewModels to be selectable from the BaseLayerPicker. This value is only valid if options.baseLayerPicker is set to true.                                                                                                                                                                                                                                                 |
| selectedTerrainProviderViewModel       | ProviderViewModel          |                                          | optional The view model for the current base terrain layer, if not supplied the first available base layer is used. This value is only valid if options.baseLayerPicker is set to true.                                                                                                                                                                                                                 |
| terrainProviderViewModels              | Array.\<ProviderViewModel> | createDefaultTerrainProviderViewModels() | optional The array of ProviderViewModels to be selectable from the BaseLayerPicker. This value is only valid if options.baseLayerPicker is set to true.                                                                                                                                                                                                                                                 |
| imageryProvider                        | ImageryProvider            | new BingMapsImageryProvider()            | optional The imagery provider to use. This value is only valid if options.baseLayerPicker is set to false.                                                                                                                                                                                                                                                                                              |
| terrainProvider                        | TerrainProvider            | new EllipsoidTerrainProvider()           | optional The terrain provider to use                                                                                                                                                                                                                                                                                                                                                                    |
| skyBox                                 | SkyBox                     |                                          | optional The skybox used to render the stars. When undefined, the default stars are used.                                                                                                                                                                                                                                                                                                               |
| skyAtmosphere                          | SkyAtmosphere              |                                          | optional Blue sky, and the glow around the Earth's limb. Set to false to turn it off.                                                                                                                                                                                                                                                                                                                   |
| fullscreenElement                      | Element &#124; String      | document.body                            | optional The element or id to be placed into fullscreen mode when the full screen button is pressed.                                                                                                                                                                                                                                                                                                    |
| useDefaultRenderLoop                   | Boolean                    | true                                     | optional True if this widget should control the render loop, false otherwise.                                                                                                                                                                                                                                                                                                                           |
| targetFrameRate                        | Number                     |                                          | optional The target frame rate when using the default render loop.                                                                                                                                                                                                                                                                                                                                      |
| showRenderLoopErrors                   | Boolean                    | true                                     | optional If true, this widget will automatically display an HTML panel to the user containing the error, if a render loop error occurs.                                                                                                                                                                                                                                                                 |
| automaticallyTrackDataSourceClocks     | Boolean                    | true                                     | optional If true, this widget will automatically track the clock settings of newly added DataSources, updating if the DataSource's clock changes. Set this to false if you want to configure the clock independently.                                                                                                                                                                                   |
| contextOptions                         | Object                     | optional                                 | Context and WebGL creation properties corresponding to options passed to Scene.                                                                                                                                                                                                                                                                                                                         |
| mapProjection                          | MapProjection              | new GeographicProjection()               | optional The map projection to use in 2D and Columbus View modes.                                                                                                                                                                                                                                                                                                                                       |
| globe                                  | Globe                      | new Globe(mapProjection.ellipsoid)       | optional The globe to use in the scene. If set to false, no globe will be added.                                                                                                                                                                                                                                                                                                                        |
| orderIndependentTranslucency           | Boolean                    | true                                     | optional If true and the configuration supports it, use order independent translucency.                                                                                                                                                                                                                                                                                                                 |
| creditContainer                        | Element &#124; String      |                                          | optional The DOM element or ID that will contain the CreditDisplay. If not specified, the credits are added to the bottom of the widget itself.                                                                                                                                                                                                                                                         |
| creditViewport                         | Element &#124; String      |                                          | optional The DOM element or ID that will contain the credit pop up created by the CreditDisplay. If not specified, it will appear over the widget itself.                                                                                                                                                                                                                                               |
| dataSources                            | DataSourceCollection       | new DataSourceCollection()               | optional The collection of data sources visualized by the widget. If this parameter is provided, the instance is assumed to be owned by the caller and will not be destroyed when the viewer is destroyed.                                                                                                                                                                                              |
| terrainShadows                         | ShadowMode                 | ShadowMode.RECEIVE_ONLY                  | optional Determines if the terrain casts or receives shadows from the sun.                                                                                                                                                                                                                                                                                                                              |
| mapMode2D                              | MapMode2D                  | MapMode2D.INFINITE_SCROLL                | optional Determines if the 2D map is rotatable or can be scrolled infinitely in the horizontal direction.                                                                                                                                                                                                                                                                                               |
| requestRenderMode                      | Boolean                    | false                                    | optional If true, rendering a frame will only occur when needed as determined by changes within the scene. Enabling improves performance of the application, but requires using Scene#requestRender to render a new frame explicitly in this mode. This will be necessary in many cases after making changes to the scene in other parts of the API. See Improving Performance with Explicit Rendering. |  |  |
| maximumRenderTimeChange                | Number                     | 0.0                                      | optional If requestRenderMode is true, this value defines the maximum change in simulation time allowed before a render is requested. See Improving Performance with Explicit Rendering.                                                                                                                                                                                                                |

---

### 响应式属性

可以初始化配置，支持响应式。

---

| Name                 | Type      | Default           | Description                                                                                       |
| -------------------- | --------- | ----------------- | ------------------------------------------------------------------------------------------------- |
| selectionIndicator   | Boolean   | true              | optional If set to false, the SelectionIndicator widget will not be created.                      |
| infoBox              | Boolean   | true              | optional If set to false, the InfoBox widget will not be created.                                 |
| geocoder             | Boolean   | false             | optional If set to false, the Geocoder widget will not be created.                                |
| homeButton           | Boolean   | true              | optional If set to false, the HomeButton widget will not be created.                              |
| sceneModePicker      | Boolean   | false             | optional If set to false, the SceneModePicker widget will not be created.                         |
| projectionPicker     | Boolean   | false             | optional If set to true, the ProjectionPicker widget will be created.                             |
| baseLayerPicker      | Boolean   | false             | optional If set to false, the BaseLayerPicker widget will not be created.                         |
| navigationHelpButton | Boolean   | false             | optional If set to false, the navigation help button will not be created.                         |
| animation            | Boolean   | false             | optional If set to false, the Animation widget will not be created.                               |
| timeline             | Boolean   | false             | optional If set to false, the Timeline widget will not be created.                                |
| fullscreenButton     | Boolean   | false             | optional If set to false, the FullscreenButton widget will not be created.                        |
| vrButton             | Boolean   | false             | optional If set to true, the VRButton widget will be created.                                     |
| navigation           | Boolean   | false             | optional 是否显示导航控件。如需显示，需在初始化 viewer 时此项设置为 true                          |
| sceneMode            | SceneMode | SceneMode.SCENE3D | optional The initial scene mode.                                                                  |
| shouldAnimate        | Boolean   | false             | optional true if the clock should attempt to advance simulation time by default, false otherwise. |
| terrainExaggeration  | Number    | 1.0               | optional A scalar used to exaggerate the terrain.                                                 |
| shadows              | Boolean   | false             | optional Determines if shadows are cast by the sun.                                               |
| camera               | Object    |                   |                                                                                                   |

---

## 事件

Viewer 是个基础部件，除了能够响应自己的事件外，把 dataSources, entities, imageryLayers, scene 等属性的事件也挂这儿，方便使用。

| 事件名                | 参数   | 描述                               | 来源   |
| --------------------- | ------ | ---------------------------------- | ------ |
| selectedEntityChanged | Entity | 场景选中实体发生改变时触发此事件。 | Viewer |
| trackedEntityChanged  | Entity | 场景跟踪实体发生改变时触发此事件。 | Viewer |
| dataSourceAdded |DataSource|场景添加一个数据源时触发此事件。|
