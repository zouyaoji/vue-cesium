# 场景容器

`vc-viewer` 是用于构建 Cesium 应用程序的基础组件，场景容器的实质是通过 Cesium.Viewer 初始化的一个 DOM 节点，用于挂载其他 DOM 节点或者组件。默认影像底图改为用`NaturalEarthII`影像了，如果需要二次开发或者手动控制其子组件，可以在 `ready` 事件中使用返回的 `Cesium` 和 `Viewer` 实例进行手动控制。在`2.0.1+`版本中可以通过`ref`来获取组件的`createPromise`对象来执行相关操作。

## 示例

### 用 vc-viewer 组件初始化 Viewer 实例

#### 预览

<doc-preview>
  <template>
    <div class="viewer" ref="viewerContainer">
      <vc-viewer ref="vcViewer" :animation="animation" :baseLayerPicker="baseLayerPicker" :timeline="timeline"
        :fullscreenButton="fullscreenButton" :fullscreenElement="fullscreenElement" :infoBox="infoBox" @ready="ready">
        <vc-navigation :options="options"></vc-navigation>
        <vc-map-overview></vc-map-overview>
        <vc-layer-imagery>
          <vc-provider-imagery-tianditu
            mapStyle="img_c"
            :token="tk"
          ></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
        <vc-layer-imagery ref="layerText">
          <vc-provider-imagery-tianditu mapStyle="cia_c" :token="tk"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>动画部件</span>
        <md-switch v-model="animation"></md-switch>
        <span>时间轴部件</span>
        <md-switch v-model="timeline"></md-switch>
        <span>基础图层拾取器</span>
        <md-switch v-model="baseLayerPicker"></md-switch>
        <span>全屏按钮</span>
        <md-switch v-model="fullscreenButton"></md-switch>
        <span>信息提示框</span>
        <md-switch v-model="infoBox"></md-switch>
      </div>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          options: {
            enableCompass: true,
            enableZoomControl: true,
            // enableZoomControl: {
            //   // 缩放比例
            //    zoomAmount: 2,
            //   // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是经纬度{lng: number, lat: number, height: number}或者 rectangle{west: number,south: number,east: number,north: number}
            //   defaultResetView: {
            //     lng: 105, lat: 29.999999999999993, height: 19059568.497290563, heading: 360, pitch: -90, roll: 0
            //   },
            //   overrideCamera: false
            // },
            enableDistanceLegend: true,
            enableLocationBar: true,
            // enableLocationBar: {
            //   // 获取更精确的高程
            //   gridFileUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/WW15MGH.DAC'
            // },
            enableCompassOuterRing: true,
            enablePrintView: true,
            // enablePrintView: {
            //   // 是否添加 Credit
            //   showCredit: true,
            //   // 是否自动打印
            //   printAutomatically: false
            // },
            // enableMyLocation: true,
            enableMyLocation: {
              // 使用高德api定位
              amap: {
                key: '42d22e6ed83f077bc28b7864718726de'
              }
            }
          },
          animation: true,
          timeline: true,
          baseLayerPicker: false,
          fullscreenButton: true,
          infoBox: true,
          fullscreenElement: document.body,
          tk: '436ce7e50d27eede2f2929307e6b33c0'
        }
      },
      mounted () {
        this.$refs.vcViewer.createPromise.then(({Cesium, viewer})=> {
          console.log('viewer is loaded.')
        })
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          window.viewer = viewer
          window.vm = this
          viewer.scene.globe.depthTestAgainstTerrain = true
          viewer.scene.globe.enableLighting = true
          this.fullscreenElement = this.$refs.viewerContainer
          viewer.entities.add({
            id: '成都欢迎你',
            position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
            billboard: new Cesium.BillboardGraphics({
              image: 'https://zouyaoji.top/vue-cesium/favicon.png',
              scale: 0.1
            }),
            label: new Cesium.LabelGraphics ({
              text: 'Hello Cesium',
              font: '24px sans-serif',
              horizontalOrigin: 1,
              outlineColor: new Cesium.Color(0, 0, 0, 1),
              outlineWidth: 2,
              pixelOffset: new Cesium.Cartesian2(17, -5),
              style: Cesium.LabelStyle.FILL
            })
          })
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer" ref="viewerContainer">
    <vc-viewer
      ref="vcViewer"
      :animation="animation"
      :baseLayerPicker="baseLayerPicker"
      :timeline="timeline"
      :fullscreenButton="fullscreenButton"
      :fullscreenElement="fullscreenElement"
      :infoBox="infoBox"
      @ready="ready"
    >
      <vc-navigation></vc-navigation>
      <vc-layer-imagery>
        <vc-provider-imagery-tianditu mapStyle="img_c" :token="tk"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
      <vc-layer-imagery ref="layerText">
        <vc-provider-imagery-tianditu mapStyle="cia_c" :token="tk"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>动画部件</span>
      <md-switch v-model="animation"></md-switch>
      <span>时间轴部件</span>
      <md-switch v-model="timeline"></md-switch>
      <span>基础图层拾取器</span>
      <md-switch v-model="baseLayerPicker"></md-switch>
      <span>全屏按钮</span>
      <md-switch v-model="fullscreenButton"></md-switch>
      <span>信息提示框</span>
      <md-switch v-model="infoBox"></md-switch>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        animation: true,
        timeline: true,
        baseLayerPicker: false,
        fullscreenButton: true,
        infoBox: true,
        fullscreenElement: document.body,
        tk: '436ce7e50d27eede2f2929307e6b33c0'
      }
    },
    mounted() {
      this.$refs.vcViewer.createPromise.then(({Cesium, viewer}) => {
        console.log('viewer is loaded.')
      })
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.scene.globe.enableLighting = true
        this.fullscreenElement = this.$refs.viewerContainer
        viewer.entities.add({
          id: '成都欢迎你',
          position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
          billboard: new Cesium.BillboardGraphics({
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.1
          }),
          label: new Cesium.LabelGraphics({
            text: 'Hello Cesium',
            font: '24px sans-serif',
            horizontalOrigin: 1,
            outlineColor: new Cesium.Color(0, 0, 0, 1),
            outlineWidth: 2,
            pixelOffset: new Cesium.Cartesian2(17, -5),
            style: Cesium.LabelStyle.FILL
          })
        })
      }
    }
  }
</script>
```

> tips: md-switch 用的是[vue-material组件库](https://vuematerial.io/)，你也可以使用其他组件库。

>  本示例用到的vc-navigation的样式需要单独引入，详见[vc-navigation](https://zouyaoji.top/vue-cesium/#/zh/control/vc-navigation)。

## 属性

<!-- prettier-ignore -->
|属性名|类型|默认值|描述|
|------|------|-----|---|
|animation|Boolean|`false`|`optional`是否显示动画控件|
|baseLayerPicker| Boolean|`false`|`optional`是否显示基础图层切换按钮|
|fullscreenButton|Boolean| `false`| `optional`是否显示全屏切换按钮|
|vrButton|Boolean|`false`|`optional`是否显示 VR 功能按钮|
|geocoder|Boolean|`false`|`optional`是否显示地理编码器搜索框|
|homeButton|Boolean|`false`|`optional`是否显示主页按钮|
|infoBox|Boolean|`true`|`optional`是否显示信息框|
|sceneModePicker|Boolean|`false`|`optional`是否显示场景模式切换按钮|
|selectionIndicator|Boolean|`true`|`optional`是否显示选择指示符|
|timeline|Boolean|`false`|`optional`是否显示时间轴控件|
|navigationHelpButton|Boolean|`false`|`optional`是否显示导航帮助按钮|
|navigationInstructionsInitiallyVisible|Boolean|`false`|`optional`是展开导航帮助面板，否点击navigationHelpButton才能展开面板。|
|scene3DOnly|Boolean|`false`|`optional`如果为true，则每个几何实例仅以3D形式呈现以节省GPU内存。|
|shouldAnimate|Boolean|`false`|`optional`true if the clock should attempt to advance simulation time by default, false otherwise. |
|fullscreenElement|Element \| String|`document.body`|`optional`按下全屏按钮时要放入全屏模式的元素或ID。|
|useDefaultRenderLoop|Boolean|`true`|`optional`如果此部件能够控制渲染循环，设置为true，反之设置为false。|
|targetFrameRate|Number||`optional`使用默认渲染循环时的目标帧速率。|
|showRenderLoopErrors|Boolean|`true`|`optional`如果设置为true，发生渲染循环错误时，将自动给用户显示一个包含错误信息的HTML面板。|
|automaticallyTrackDataSourceClocks|Boolean|`true`|`optional`如果设置为true，将自动跟踪新添加数据源的时钟设置，如果数据源的时钟变更，则更新。如需单独设置时钟，请将此项设置为false。|
|contextOptions|Object||`optional`Context and WebGL 创建属性与传递给Scene匹配的选项。|
|orderIndependentTranslucency|Boolean|`true`|`optional`如果此项设置为true，并且使用设备支持，将使用与顺序无关的半透明。|
|creditContainer|Element \| String||`optional`指定包含CreditDisplay信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。|
|creditViewport|Element \| String||`optional`指定包含CreditDisplay弹出框信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。|
|terrainExaggeration|Number|`1.0`|`optional`用于夸大地形的标量。请注意，设置地形夸张不会修改其它任何数据。|
|shadows|Boolean|`false`|`optional`确定阴影是否由太阳投射形成。|
|terrainShadows|Number|`3`|`optional`确定地形是否投射或接受来自太阳的阴影。|
|mapMode2D|Number|`1`|`optional`确定二维地图是可旋转的或是可以在在水平方向上无限滚动。|
|projectionPicker|Boolean|`false`|`optional`是否显示投影切换按钮|
|logo|Boolean|`true`| `optional` 是否显示默认logo.|
|accessToken|String||`optional`指定accessToken，使用Cesium ion的数据源需要到[https://cesium.com/ion/](https://cesium.com/ion/)申请一个账户，获取Access Token。|
|cesiumPath|String||`optional`指定当前场景使用的 cesium 版本。一般是Vue.use()的时候指定。|
|camera|Object|| `optional` 场景相机位置.默认定位到全球范围内的中国。 **结构：{ position: { lng: number, lat: number, height: number }, heading: number, pitch: number, roll: number }** |
|TZcode|String|`UTM`| `optional` 时区代码。|
|UTCoffset|String|`-(new Date().getTimezoneOffset())`| `optional` UTC时间的时差（分钟）。|
|removeCesiumScript|Boolean|`true`| `optional` vc-viewer销毁时是否移除CesiumJS标签.|
|autoSortImageryLayers|Boolean|`true`| `optional` 添加影像图层时是否根据图层sortOrder属性自动排序。|
---

## 事件

<!-- prettier-ignore -->
| 事件名|参数|描述|来源|
|------|----|----|---|
|selectedEntityChanged|entity|场景选中实体发生改变时触发此事件。事件参数表示选中的实体，或者undefined（为选中）|Viewer|
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
|LEFT_CLICK|{position: point}|鼠标左键单击事件。|ScreenSpaceEventType|
|LEFT_DOUBLE_CLICK|{position: point}|鼠标左键双击事件。|ScreenSpaceEventType|
|LEFT_DOWN|{position: point}|鼠标左键按下事件。|ScreenSpaceEventType|
|LEFT_UP|{position: point}|鼠标左键弹起事件|ScreenSpaceEventType|
|MIDDLE_CLICK|{position: point}|鼠标中键单击事件。|ScreenSpaceEventType|
|MIDDLE_DOWN|{position: point}|鼠标中键按下事件。|ScreenSpaceEventType|
|MIDDLE_UP|{position: point}|鼠标中键弹起事件。|ScreenSpaceEventType|
|MOUSE_MOVE|{startPosition: point, endPosition: point}|鼠标移动事件。|ScreenSpaceEventType|
|PINCH_END||触摸设备双指操作结束事件。|ScreenSpaceEventType|
|PINCH_MOVE|{distance: {startPosition: point, endPosition: point}, angleAndHeight: {startPosition: point, endPosition: point}}|触摸设备双指操作移动事件。|ScreenSpaceEventType|
|PINCH_START|{position1: point, position2: point}|触摸设备双指操作开始事件。|ScreenSpaceEventType|
|RIGHT_CLICK|{position: point}|鼠标右键单击事件。|ScreenSpaceEventType|
|RIGHT_DOWN|{position: point}|鼠标右键按下事件。|ScreenSpaceEventType|
|RIGHT_UP|{position: point}|鼠标弹起事件。|ScreenSpaceEventType|
|WHEEL|delta|鼠标中轮滚动事件。|ScreenSpaceEventType|

---

- 参考官方文档： [Viewer](https://cesium.com/docs/cesiumjs-ref-doc/Viewer.html)
