## VcViewer

构建 `Cesium` 应用程序的基础组件，其实质是通过 `Cesium.Viewer` 初始化的一个 DOM 节点，用于挂载其他 DOM 节点或者子组件。

**注意:** `vue-cesium` 的其他组件或由它们构成的自定义组件都需要放在该组件下面才能正常加载。初始化完成后，可以在 `ready` 事件中获取返回的 `Cesium` 和 `Viewer` 实例用于 Cesium API 开发，也可以通过 `ref` 来获取组件的 `createPromise` 对象来得到 Viewer 实例。

### 基础用法

三维场景容器组件的基础用法。

:::demo 使用 `vc-viewer` 标签和它的一些响应属性来初始化三维球，并挂载 `vc-navigation` 导航和 `vc-entity` 实体组件，详细 API 请查阅它们的文档。

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
    </vc-entity>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">销毁</el-button>
      <el-button type="danger" round @click="load">加载</el-button>
      <el-button type="danger" round @click="reload">重载</el-button>
    </el-row>
    <el-row v-if="!loading">
      <el-switch v-model="animation" active-color="#13ce66" inactive-text="动画"> </el-switch>
      <el-switch v-model="timeline" active-color="#13ce66" inactive-text="时间轴"> </el-switch>
      <el-switch v-model="baseLayerPicker" active-color="#13ce66" inactive-text="基础图层"> </el-switch>
      <el-switch v-model="fullscreenButton" active-color="#13ce66" inactive-text="全屏按钮"> </el-switch>
      <el-switch v-model="infoBox" active-color="#13ce66" inactive-text="信息提示框"> </el-switch>
      <el-switch v-model="showCredit" active-color="#13ce66" inactive-text="版权信息"> </el-switch>
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
          pixelSize: 28
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

### 属性

<!-- prettier-ignore -->
|属性名|类型|默认值|描述|可选值|
|------|------|-----|---|---|
|camera|Object|| `optional` 指定初始化场景相机位置，默认定位到全球范围内的中国。  |
|showCredit|Boolean|`true`| `optional` 是否显示默认 Logo 和 加载数据版权信息。|
|autoSortImageryLayers|Boolean|`true`| `optional` 添加影像图层时是否根据图层 `sortOrder` 属性自动排序。|
|removeCesiumScript|Boolean|`true`| `optional` 指定`vc-viewer` 销毁时是否移除CesiumJS标签。|
|enableMouseEvent|Boolean|`true`| `optional` 指定是否触发事件。|
|skeleton|Boolean\|Object|`{ dark: false, animation: 'wave', square: true, bordered: true, color: undefined }`| `optional` 指定初始化时是否显示骨架背景。动画可选值 `wave`, `pulse`, `pulse-x`, `pulse-y`, `fade`, `blink`, `none`|
|TZcode|String|`UTM`| `optional` 自定义 Timeline 格式化日期是所用时区代码。|
|UTCoffset|String|`-(new Date().getTimezoneOffset())`| `optional` 本地时间与UTC时间的时差（分钟）。自定义 Timeline 格式化日期使用。|
|accessToken|String||`optional`指定accessToken，使用Cesium ion的数据源需要到[https://cesium.com/ion/](https://cesium.com/ion/)申请一个账户，获取Access Token。一般是Vue.use()的时候指定。|
|cesiumPath|String|`'https://unpkg.com/cesium/Build/Cesium/Cesium.js'`|`optional`指定当前场景使用的 cesium 库的例子。一般是Vue.use()的时候指定。|
|animation|Boolean|`false`|`optional`是否显示动画控件。|
|baseLayerPicker| Boolean|`false`|`optional`是否显示基础图层切换按钮。|
|fullscreenButton|Boolean| `false`| `optional`是否显示全屏切换按钮。|
|vrButton|Boolean|`false`|`optional`是否显示 VR 功能按钮。|
|geocoder|Boolean|`false`|`optional`是否显示地理编码器搜索框。|
|homeButton|Boolean|`false`|`optional`是否显示主页按钮。|
|infoBox|Boolean|`true`|`optional`是否显示信息框。|
|sceneModePicker|Boolean|`false`|`optional`是否显示场景模式切换按钮。|
|selectionIndicator|Boolean|`true`|`optional`是否显示选择指示符。|
|timeline|Boolean|`false`|`optional`是否显示时间轴控件。|
|navigationHelpButton|Boolean|`false`|`optional`是否显示导航帮助按钮。|
|navigationInstructionsInitiallyVisible|Boolean|`false`|`optional`是展开导航帮助面板，否点击navigationHelpButton才能展开面板。|
|scene3DOnly|Boolean|`false`|`optional`如果为true，则每个几何实例仅以3D形式呈现以节省GPU内存。|
|clockViewModel|Object||`optional`用于控制当前时间的时钟视图模型。|
|shouldAnimate|Boolean|`false`|`optional`true 是否开始时间模拟。 |
|imageryProvider|Object||`optional` 指定初始化时加载的影像。`vue-cesium` 已经将默认的替换成引用 Cesium 资源自带的`NaturalEarthII` 了。|
|terrainProvider|Object||`optional` 指定初始化时加载的地形。|
|skyBox|Object\|false||`optional` 指定初始化时加载的天空盒。 `undefined` 是默认的星空背景，`false`则天空盒、太阳、月亮等都不会添加。|
|skyAtmosphere|Object\|false||`optional` 蓝天，以及围绕地球四肢的辉光。 设置为false可将其关闭。|
|fullscreenElement|Element \| String|`document.body`|`optional`按下全屏按钮时要放入全屏模式的元素或ID。|
|useDefaultRenderLoop|Boolean|`true`|`optional` 是否开启默认的循环渲染控制。|
|targetFrameRate|Number| - |`optional`使用默认渲染循环时的目标帧速率。|
|showRenderLoopErrors|Boolean|`true`|`optional`如果设置为true，发生渲染循环错误时，将自动给用户显示一个包含错误信息的 HTML 面板。|
|useBrowserRecommendedResolution|Boolean|`true`|`optional`如果为true，则以浏览器建议的分辨率进行渲染，并忽略window.devicePixelRatio。|
|automaticallyTrackDataSourceClocks|Boolean|`true`|`optional`如果设置为true，将自动跟踪新添加数据源的时钟设置，如果数据源的时钟变更，则更新。如需单独设置时钟，请将此项设置为false。|
|contextOptions|Object||`optional`Context and WebGL 创建属性与传递给Scene匹配的选项。|
|sceneMode|Number|`3`|`optional` 指定场景模式。**COLUMBUS_VIEW: 1, SCENE2D: 2, SCENE3D: 3** |1/2/3|
|orderIndependentTranslucency|Boolean|`true`|`optional`如果此项设置为true，并且使用设备支持，将使用与顺序无关的半透明。|
|creditContainer|Element \| String||`optional`指定包含CreditDisplay信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。|
|creditViewport|Element \| String||`optional`指定包含CreditDisplay弹出框信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。|
|dataSources|Object||`optional` 指定初始化时加载的数据源集合。如果指定了数据源集合，`Viewer` 销毁时不会销毁它。|
|terrainExaggeration|Number|`1.0`|`optional`用于夸大地形的标量。请注意，设置地形夸张不会修改其它任何数据。|
|shadows|Boolean|`false`|`optional`确定阴影是否由太阳投射形成。|
|terrainShadows|Number|`3`|`optional`确定地形是否反射或接受来自太阳的阴影。**DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** |0/1/2/3|
|mapMode2D|Number|`1`|`optional`确定二维地图是可旋转的或是可以在在水平方向上无限滚动。**ROTATE: 0, INFINITE_SCROLL: 1**|0/1|
|projectionPicker|Boolean|`false`|`optional`是否显示投影切换按钮。|
|requestRenderMode|Boolean|`false`|`optional`如果为true，则仅根据场景中的更改确定是否需要渲染帧。 启用可减少应用程序的CPU / GPU使用率，并减少移动设备上的电池消耗，但需要使用Scene＃requestRender在此模式下显式渲染新帧。 在API的其他部分对场景进行更改后，在许多情况下这是必要的。|
|maximumRenderTimeChange|Number|`0.0`|`optional`如果requestRenderMode为true，则此值定义在请求渲染之前允许的最大模拟时间更改。|

### 事件

<!-- prettier-ignore -->
| 事件名|参数|描述|来源|
|------|----|----|---|
|cesiumReady|Cesium|CesiumJS加载成功时触发。| - |
|beforeLoad|Vue Instance|对象加载前触发。| - |
|ready|{Cesium, viewer, vm}|对象加载完成时触发。| - |
|destroyed| Vue Instance |对象销毁时触发。| - |
|viewerWidgetResized| |vc-viewer 上有部件发生变化时触发。| - |
|------|----|----|---|
|selectedEntityChanged|entity|场景选中实体发生改变时触发此事件。事件参数表示选中的实体，或者undefined（未选中）|Viewer|
|trackedEntityChanged|entity|场景跟踪实体发生改变时触发此事件。事件参数表示跟踪的实体。|Viewer|
|layerAdded|imageryLayer, index|场景添加某影像图层后触发该事件。事件参数表示改图层和它的索引。|Viewer.imageryLayers|
|layerMoved|imageryLayer, newIndex, oldIndex|场景某影像图层发生移动后触发该事件。事件参数表示该图层和它以前的索引以及新索引。|Viewer.imageryLayers|
|layerRemoved|imageryLayer, index|场景移除某影像图层后触发该事件。事件参数表示该图层和它的索引。|Viewer.imageryLayers|
|layerShownOrHidden|imageryLayer, index, flag|场景中某图层可见性设置ImageryLayer#show发生改变时触发该事件。事件参数表示发生改变的图层，图层索引，以及图层是否可见。|iewer.imageryLayers|
|dataSourceAdded|dataSource|场景添加某数据源后触发该事件。事件参数表示该数据源。|Viewer.dataSources|
|dataSourceMoved|dataSource|场景移动某数据源后发生后触发该事件。事件参数表示该数据源和它以前的索引以及新索引。|Viewer.dataSources|
|dataSourceRemoved|dataSource|场景移除某数据源后触发该事件。事件参数表示该数据源。|Viewer.entities|
|collectionChanged|collection, added, removed, changed|场景实体集合添加、移除或者改变实体后触发该事件。事件参数表示该实体集合，以及添加的实体数组、移除的实体数组、改变的实体数组。|Viewer.entities|
|morphComplete|object|场景投影转换完成后触发该事件。事件参数是一个包含scene的对象。|Viewer.scene|
|morphStart|object|场景投影转换开始时触发该事件。事件参数是一个包含scene的对象。|Viewer.scene|
|postRender|scene, currentTime|场景每帧渲染结束后触发该事件。事件参数是scene实例和当前时间。|Viewer.scene|
|preRender|scene, currentTime|场景刷新后但在每帧渲染开始时触发该事件。事件参数是scene实例和当前时间。|Viewer.scene|
|postUpdate|scene, currentTime|场景刷新后但在每帧渲染前触发该事件。事件参数是scene实例和当前时间。|Viewer.scene|
|preUpdate|scene, currentTime|场景刷新或者渲染前触发该事件。事件参数是scene实例和当前时间。|Viewer.scene|
|renderError|scene, error|场景抛出渲染异常时触发该事件。事件参数是scene实例和异常。|Viewer.scene|
|terrainProviderChanged||场景地形提供者发生改变时触发该事件。|Viewer.scene|
|changed|number|场景相机按percentageChanged设定比例改变后触发该事件。|Viewer.camera|
|moveEnd||场景相机停止移动后触发该事件。|Viewer.camera|
|moveStart||场景相机开始移动时触发该事件。|Viewer.camera|
|onStop||场景时钟每当到达停止时间时触发该事件。|Viewer.clock|
|onTick||场景时钟每当调用Clock#tick触发该事件。|Viewer.clock|
|errorEvent||场景地形提供者遇到异步错误时触发该事件。|Viewer.terrainProvider|
|cameraClicked||infoBox弹窗上点击相机事件。|Viewer.infoBox.viewModel|
|closeClicked||infoBox弹窗关闭事件。|Viewer.infoBox.viewModel|
|leftClick|{position: point}|鼠标左键单击事件。|Viewer.screenSpaceEventHandler|
|leftDoubleClick|{position: point}|鼠标左键双击事件。|Viewer.screenSpaceEventHandler|
|leftDown|{position: point}|鼠标左键按下事件。|Viewer.screenSpaceEventHandler|
|leftUp|{position: point}|鼠标左键弹起事件|Viewer.screenSpaceEventHandler|
|middleClick|{position: point}|鼠标中键单击事件。|Viewer.screenSpaceEventHandler|
|middleDown|{position: point}|鼠标中键按下事件。|Viewer.screenSpaceEventHandler|
|middleUp|{position: point}|鼠标中键弹起事件。|Viewer.screenSpaceEventHandler|
|mouseMove|{startPosition: point, endPosition: point}|鼠标移动事件。|Viewer.screenSpaceEventHandler|
|pinchEnd||触摸设备双指操作结束事件。|Viewer.screenSpaceEventHandler|
|pinchMove|{distance: {startPosition: point, endPosition: point}, angleAndHeight: {startPosition: point, endPosition: point}}|触摸设备双指操作移动事件。|Viewer.screenSpaceEventHandler|
|pinchStart|{position1: point, position2: point}|触摸设备双指操作开始事件。|Viewer.screenSpaceEventHandler|
|rightClick|{position: point}|鼠标右键单击事件。|Viewer.screenSpaceEventHandler|
|rightDown|{position: point}|鼠标右键按下事件。|Viewer.screenSpaceEventHandler|
|rightUp|{position: point}|鼠标弹起事件。|Viewer.screenSpaceEventHandler|
|wheel|delta|鼠标中轮滚动事件。|Viewer.screenSpaceEventHandler|
|imageryLayersUpdatedEvent||在添加，显示，隐藏，移动或删除图像图层时触发。|Viewer.scene.globe|
|terrainProviderChanged||地形改变事件。这个应该和 scene 触发的一样。|Viewer.scene.globe|
|tileLoadProgressEvent||获取自上一个渲染帧以来切片加载队列的长度发生更改时引发的事件。 当加载队列为空时，当前视图的所有地形和图像均已加载。 该事件将传递图块加载队列的新长度。|Viewer.scene.globe|

### ref 方法

| 方法名          | 返回                            | 描述                                                   |
| --------------- | ------------------------------- | ------------------------------------------------------ |
| load            | {Cesium, viewer, vm} \| `false` | 执行加载操作。成功返回 `ReadyObj`, 失败返回 `false。`  |
| unload          | Boolean                         | 执行销毁操作。成功返回 `true`, 失败返回 `false`。      |
| reload          | {Cesium, viewer, vm} \| `false` | 执行重载操作。 成功返回 `ReadyObj`, 失败返回 `false。` |
| getCesiumObject | Object                          | 获取该组件加载的 Cesium 对象。                         |

### 参考

- 官方文档： **[Viewer](https://cesium.com/docs/cesiumjs-ref-doc/Viewer.html)**
