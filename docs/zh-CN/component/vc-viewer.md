---
title: 场景视图
lang: zh-CN
---

# Viewer 场景视图

构建 `Cesium` 应用程序的基础组件，其实质是通过 `Cesium.Viewer` 初始化的一个 DOM 节点，用于挂载其他 DOM 节点或者子组件。

## 基础用法

使用 `vc-viewer` 标签和它的一些响应属性来初始化三维场景，并挂载 `vc-navigation` 导航和 `vc-entity` 实体组件，详细 API 请查阅它们的文档。

:::demo 此例使用 Vue Composition API 写法。

viewer/usage

:::

## API

### Props

<!-- prettier-ignore -->
|属性名|类型|默认值|描述|
|------|------|-----|---|
|camera|VcCamera|| `optional` 指定初始化场景相机位置，默认在中国。  |
|showCredit|boolean|`true`| `optional` 指定是否显示默认 Logo 和 加载数据版权信息。|
|autoSortImageryLayers|boolean|`true`| `optional` 指定添加影像图层时是否根据图层的 `sortOrder` 属性自动排序。|
|removeCesiumScript|boolean|`false`| `optional` 指定 `vc-viewer` 组件销毁时是否移除CesiumJS标签。|
|enableMouseEvent|boolean|`true`| `optional` 指定是否触发鼠标事件。|
|skeleton|boolean\|VcSkeletonProps|| `optional` 指定 `vc-viewer` 初始化时是否显示骨架背景。|
|touchHoldArg|string|'1000'|`optional` 指定在触摸屏上 `vc-viewer` 响应按下事件的时间延迟。|
|TZcode|string|| `optional` Timeline 日期格式化所用时区代码。默认将 `Timeline` 格式化为本地时间，如果要显示成 UTC 世界时，将 `UTCoffset` 设为 `new Date().getTimezoneOffset()` 即可。|
|UTCoffset|number|| `optional` 本地时间与UTC时间的时差（分钟）。|
|accessToken|string||`optional` 指定 accessToken，使用Cesium ion的数据源需要到[https://cesium.com/ion/](https://cesium.com/ion/)申请一个账户，获取Access Token。|
|cesiumPath|string||`optional` 指定用于初始化 `vc-viewer` 组件的 CesiumJS 库的 Web 服务地址。|
|viewerCreator|VcViewerCreatorFunction||`optional` 指定用于初始化 `vc-viewer` 组件的 viewer 对象，当引入第三方库时可以用该参数来自定义 viewer 对象的初始化方式。|
|containerId|string|`'cesiumContainer'`|`optional` 指定 `vc-viewer` 容器 div 元素的 id。|
|mars3dConfig|Mars3dConfig||`optional` 仅适用于 mars3d，指定用于初始化 `vc-viewer` 组件的 mars3d 库的配置参数。|
|animation|boolean|`false`|`optional` 是否显示动画控件。|
|baseLayer|false\|Cesium.ImageryProvider|`undefined`|`optional` 禁用或配置内部基础图层。|
|baseLayerPicker| boolean|`false`|`optional` 是否显示基础图层切换按钮。|
|fullscreenButton|boolean| `false`| `optional` 是否显示全屏切换按钮。|
|vrButton|boolean|`false`|`optional` 是否显示 VR 功能按钮。|
|geocoder|boolean\|Array<Cesium.GeocoderService>|`false`|`optional` 是否显示地理编码器搜索框。|
|homeButton|boolean|`false`|`optional` 是否显示主页按钮。|
|infoBox|boolean|`true`|`optional` 是否显示信息框。|
|sceneModePicker|boolean|`false`|`optional` 是否显示场景模式切换按钮。|
|selectionIndicator|boolean|`true`|`optional` 是否显示选择指示符。|
|timeline|boolean|`false`|`optional` 是否显示时间轴控件。|
|navigationHelpButton|boolean|`false`|`optional` 是否显示导航帮助按钮。|
|navigationInstructionsInitiallyVisible|boolean|`false`|`optional` 是展开导航帮助面板，否点击navigationHelpButton才能展开面板。|
|scene3DOnly|boolean|`false`|`optional` 如果为true，则每个几何实例仅以3D形式呈现以节省GPU内存。|
|shouldAnimate|boolean|`false`|`optional`true 是否开始时间模拟。 |
|clockViewModel|Cesium.ClockViewModel||`optional`用于控制当前时间的时钟视图模型。|
|selectedImageryProviderViewModel|Cesium.ProviderViewModel||`optional` 使用当前基础图像层的视图模型，如果没有提供第一个可用基础层。仅当`baseLayerPicker`设置为true时有效。|
|terrainProviderViewModels|Array<Cesium.ProviderViewModel>||`optional` 为BaseAlayerPicker中提供可选择的ProviderViewModel数组。仅当`baseLayerPicker`设置为true时有效。|
|imageryProvider|Cesium.ImageryProvider||`optional` 指定初始化时加载的影像。`vue-cesium` 已经将默认的替换成引用 Cesium 资源自带的`NaturalEarthII` 了。|
|terrainProvider|Cesium.TerrainProvider||`optional` 指定初始化时加载的地形。|
|skyBox|Cesium.SkyBox\|false||`optional` 指定初始化时加载的天空盒。 `undefined` 是默认的星空背景，`false`则天空盒、太阳、月亮等都不会添加。|
|skyAtmosphere|Cesium.skyAtmosphere\|false||`optional` 蓝天，地球周围的光芒。设置为false以关闭它。|
|fullscreenElement|Element \| string|`document.body`|`optional` 按下全屏按钮时要放入全屏模式的元素或ID。|
|useDefaultRenderLoop|boolean|`true`|`optional` 是否开启默认的循环渲染控制。|
|targetFrameRate|number| - |`optional` 使用默认渲染循环时的目标帧速率。|
|showRenderLoopErrors|boolean|`true`|`optional` 如果设置为true，发生渲染循环错误时，将自动给用户显示一个包含错误信息的 HTML 面板。|
|useBrowserRecommendedResolution|boolean|`true`|`optional` 如果为true，则以浏览器建议的分辨率进行渲染，并忽略window.devicePixelRatio。|
|automaticallyTrackDataSourceClocks|boolean|`true`|`optional` 如果设置为true，将自动跟踪新添加数据源的时钟设置，如果数据源的时钟变更，则更新。如需单独设置时钟，请将此项设置为false。|
|contextOptions|VcContextOptions||`optional`Context and WebGL 创建属性与传递给Scene匹配的选项。|
|sceneMode|number\|Cesium.SceneMode|`3`|`optional` 指定场景模式。**COLUMBUS_VIEW: 1, SCENE2D: 2, SCENE3D: 3** |
|mapProjection|Cesium.MapProjection||`optional` 使用2D和哥伦布视图模式使用的地图投影。|
|globe|Cesium.Globe\|false||`optional` 场景使用的地球。如果设置为false，则不会添加地球。|
|orderIndependentTranslucency|boolean|`true`|`optional` 如果此项设置为true，并且使用设备支持，将使用与顺序无关的半透明。|
|creditContainer|Element \| string||`optional` 指定包含CreditDisplay信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。|
|creditViewport|Element \| string||`optional` 指定包含CreditDisplay弹出框信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。|
|dataSources|Cesium.DataSourceCollection||`optional` 指定初始化时加载的数据源集合。如果指定了数据源集合，`Viewer` 销毁时不会销毁它。|
|terrainExaggeration|number|`1.0`|`optional`用于夸大地形的标量。请注意，设置地形夸张不会修改其它任何数据。|
|shadows|boolean|`false`|`optional`确定阴影是否由太阳投射形成。|
|terrainShadows|number\|Cesium.ShadowMode|`3`|`optional`确定地形是否反射或接受来自太阳的阴影。**DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |
|mapMode2D|number\|Cesium.MapMode2D|`1`|`optional`确定二维地图是可旋转的或是可以在在水平方向上无限滚动。**ROTATE: 0, INFINITE_SCROLL: 1**|
|projectionPicker|boolean|`false`|`optional`是否显示投影切换按钮。|
|requestRenderMode|boolean|`false`|`optional`如果为true，则仅根据场景中的更改确定是否需要渲染帧。 启用可减少应用程序的CPU / GPU使用率，并减少移动设备上的电池消耗，但需要使用Scene＃requestRender在此模式下显式渲染新帧。 在API的其他部分对场景进行更改后，在许多情况下这是必要的。|
|maximumRenderTimeChange|number|`0.0`|`optional`如果requestRenderMode为true，则此值定义在请求渲染之前允许的最大模拟时间更改。|

### Events

<!-- prettier-ignore -->
| 事件名|参数|描述|
|------|----|----|
|cesiumReady|(e: typeof Cesium)|CesiumJS加载成功时触发。|
|beforeLoad|(instance: VcComponentInternalInstance)|对象加载前触发。|
|ready|(readyObj: VcReadyObject)|对象加载完成时触发。|
|destroyed| (instance: VcComponentInternalInstance) |对象销毁时触发。|
|viewerWidgetResized| (e: ViewerWidgetResizedEvent) |vc-viewer 上有部件发生变化时触发。|
|touchEnd| (e: any) |vc-viewer 上触摸长按结束时触发。|
|selectedEntityChanged|(entity: Cesium.Entity)|场景选中实体发生改变时触发此事件。事件参数表示选中的实体，或者undefined（未选中）|
|trackedEntityChanged|(entity: Cesium.Entity)|场景跟踪实体发生改变时触发此事件。事件参数表示跟踪的实体。|
|layerAdded|(imageryLayer: Cesium.ImageryLayer, index: number)|场景添加某影像图层后触发该事件。事件参数表示改图层和它的索引。|
|layerMoved|(imageryLayer: Cesium.ImageryLayer, newIndex: number, oldIndex: number)|场景某影像图层发生移动后触发该事件。事件参数表示该图层和它以前的索引以及新索引。|
|layerRemoved|(imageryLayer: Cesium.ImageryLayer, index: number)|场景移除某影像图层后触发该事件。事件参数表示该图层和它的索引。|
|layerShownOrHidden|(imageryLayer: Cesium.ImageryLayer, index: number, show: boolean)|场景中某图层可见性设置ImageryLayer#show发生改变时触发该事件。事件参数表示发生改变的图层，图层索引，以及图层是否可见。|
|dataSourceAdded|(collection: Cesium.DataSourceCollection, dataSource: VcDatasource)|场景添加某数据源后触发该事件。事件参数表示该数据源。|
|dataSourceMoved|(dataSource: VcDatasource, newIndex: number, oldIndex: number)|场景移动某数据源后发生后触发该事件。事件参数表示该数据源和它以前的索引以及新索引。|
|dataSourceRemoved|(collection: Cesium.DataSourceCollection, dataSource: VcDatasource)|场景移除某数据源后触发该事件。事件参数表示该数据源。|
|collectionChanged|(collection: Cesium.EntityCollection, addedArray: Array<Cesium.Entity>, removedArray: Array<Cesium.Entity>, changedArray: Array<Cesium.Entity>)|场景实体集合添加、移除或者改变实体后触发该事件。事件参数表示该实体集合，以及添加的实体数组、移除的实体数组、改变的实体数组。|
|morphComplete|(transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean)|场景投影转换完成后触发该事件。事件参数是一个包含scene的对象。|
|morphStart|(transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean)|场景投影转换开始时触发该事件。事件参数是一个包含scene的对象。|
|postRender|(scene: Cesium.Scene, time: Cesium.JulianDate)|场景每帧渲染结束后触发该事件。事件参数是scene实例和当前时间。|
|preRender|(scene: Cesium.Scene, time: Cesium.JulianDate)|场景刷新后但在每帧渲染开始时触发该事件。事件参数是scene实例和当前时间。|
|postUpdate|(scene: Cesium.Scene, time: Cesium.JulianDate)|场景刷新后但在每帧渲染前触发该事件。事件参数是scene实例和当前时间。|
|preUpdate|(scene: Cesium.Scene, time: Cesium.JulianDate)|场景刷新或者渲染前触发该事件。事件参数是scene实例和当前时间。|
|renderError|(scene: Cesium.Scene, error: any)|场景抛出渲染异常时触发该事件。事件参数是scene实例和异常。|
|terrainProviderChanged|(provider: VcTerrainProvider)|场景地形提供者发生改变时触发该事件。|
|changed|(percent: number)|场景相机按percentageChanged设定比例改变后触发该事件。|
|moveEnd|()|场景相机停止移动后触发该事件。|
|moveStart|()|场景相机开始移动时触发该事件。|
|onStop|(clock: Cesium.Clock)|场景时钟每当到达停止时间时触发该事件。|
|onTick|(clock: Cesium.Clock)|场景时钟每当调用Clock#tick触发该事件。|
|errorEvent|(tileProviderError: any)|场景地形提供者遇到异步错误时触发该事件。|
|cameraClicked|(viewModel: Cesium.InfoBoxViewModel)|infoBox弹窗上点击相机事件。|
|closeClicked|(viewModel: Cesium.InfoBoxViewModel)|infoBox弹窗关闭事件。|
|leftClick|(evt: { position: Cesium.Cartesian2; })|鼠标左键单击事件。|
|leftDoubleClick|(evt: { position: Cesium.Cartesian2; })|鼠标左键双击事件。|
|leftDown|(evt: { position: Cesium.Cartesian2; })|鼠标左键按下事件。|
|leftUp|(evt: { position: Cesium.Cartesian2; })|鼠标左键弹起事件|
|middleClick|(evt: { position: Cesium.Cartesian2; })|鼠标中键单击事件。|
|middleDown|(evt: { position: Cesium.Cartesian2; })|鼠标中键按下事件。|
|middleUp|(evt: { position: Cesium.Cartesian2; })|鼠标中键弹起事件。|
|mouseMove|{startPosition: point, endPosition: point}|鼠标移动事件。|
|pinchEnd|()|触摸设备双指操作结束事件。|
|pinchMove|(evt: { distance: { startPosition: Cesium.Cartesian2; endPosition: Cesium.Cartesian2 } angleAndHeight: { startPosition: Cesium.Cartesian2 ;endPosition: Cesium.Cartesian2 }})|触摸设备双指操作移动事件。|
|pinchStart|(evt: { position1: Cesium.Cartesian2; position2: Cesium.Cartesian2; })|触摸设备双指操作开始事件。|
|rightClick|(evt: { position: Cesium.Cartesian2; })|鼠标右键单击事件。|
|rightDown|(evt: { position: Cesium.Cartesian2; })|鼠标右键按下事件。|
|rightUp|(evt: { position: Cesium.Cartesian2; })|鼠标弹起事件。|
|wheel|(delta: number)|鼠标中轮滚动事件。|
|imageryLayersUpdatedEvent|()|在添加，显示，隐藏，移动或删除图像图层时触发。|
|tileLoadProgressEvent|(length: number)|获取自上一个渲染帧以来切片加载队列的长度发生更改时引发的事件。 当加载队列为空时，当前视图的所有地形和图像均已加载。 该事件将传递图块加载队列的新长度。|

### Methods

| 方法名             | 参数                                     | 描述                                        |
| ------------------ | ---------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>  | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\>  | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                 | 手动卸载组件。                              |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                     | 获取该组件加载的 Cesium 对象。              |

### Slots

<!-- prettier-ignore -->
| 插槽名 | 描述 |
| ----- | -----|
| default | vue-cesium 子组件均要放在vc-viewer下。 |

## 注意

`VueCesium` 的其他功能性组件，或由这些功能性组件构成的自定义组件，必须是 `VcViewer` 组件的子组件。

例如下面的代码是错误的：

```html
<template>
  <div>
    <vc-viewer @ready="onViewerReady"></vc-viewer>
    <vc-entity></vc-entity>
    <!-- 错误用法！ -->
  </div>
</template>
```

## 参考

- 官方文档： **[Viewer](https://cesium.com/docs/cesiumjs-ref-doc/Viewer.html)**
