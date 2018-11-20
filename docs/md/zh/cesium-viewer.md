# 场景容器

`CesiumViewer`是用于构建 Cesium 应用程序的基础部件，它将所有标准的 Cesium 部件组合成一个可重复使用的包。 此部件通常可以利用 mixin 来扩展，以此增加对各种应用程序有用的功能函数。\
场景容器的实质是通过 Cesium.Viewer 初始化的一个 DOM 节点，用于挂载其他 DOM 节点或者组件。此部件初始化完成后默认会有 Cesiumwidget, dataSources、 如果需要二次开发或者手动控制其子组件，可以在 `ready` 事件中使用返回的 `Cesium` 和 `Viewer` 实例进行手动控制。

## 实例属性

|属性名|类型|默认值|描述|
|------|------|-----|---|
|animation|Boolean|false|`optional`是否显示动画控件|
|baseLayerPicker| Boolean|false|`optional`是否显示基础图层切换按钮|
|fullscreenButton|Boolean| false| `optional`是否显示全屏切换按钮|
|vrButton|Boolean|false|`optional`是否显示 VR 功能按钮|
|geocoder|Boolean|false|`optional`是否显示地理编码器搜索框|
|homeButton|Boolean|false|`optional`是否显示主页按钮|
|infoBox|Boolean|true|`optional`是否显示信息框|
|sceneModePicker|Boolean|false|`optional`是否显示场景模式切换按钮|
|selectionIndicator|Boolean|true|`optional`是否显示选择指示符|
|timeline|Boolean|false|`optional`是否显示时间轴控件|
|navigation|Boolean|false|`optional`是否显示导航控件（SuperMap）|
|navigationHelpButton|Boolean|false|`optional`是否显示导航帮助按钮|
|navigationInstructionsInitiallyVisible|Boolean|false|`optional`是展开导航帮助面板，否点击navigationHelpButton才能展开面板。|
|scene3DOnly|Boolean|false|`optional`如果为true，则每个几何实例仅以3D形式呈现以节省GPU内存。|
|shouldAnimate|Boolean|false|`optional`true if the clock should attempt to advance simulation time by default, false otherwise. |
|fullscreenElement|Element \| String|document.body|`optional`按下全屏按钮时要放入全屏模式的元素或ID。|
|useDefaultRenderLoop|Boolean|true|`optional`如果此部件能够控制渲染循环，设置为true，反之设置为false。|
|targetFrameRate|Number||`optional`使用默认渲染循环时的目标帧速率。|
|showRenderLoopErrors|Boolean|true|`optional`如果设置为true，发生渲染循环错误时，将自动给用户显示一个包含错误信息的HTML面板。|
|automaticallyTrackDataSourceClocks|Boolean|true|`optional`如果设置为true，将自动跟踪新添加数据源的时钟设置，如果数据源的时钟变更，则更新。如需单独设置时钟，请将此项设置为false。|
|contextOptions|Object||`optional`Context and WebGL 创建属性与传递给Scene匹配的选项。|
|orderIndependentTranslucency|Boolean|true|`optional`如果此项设置为true，并且使用设备支持，将使用与顺序无关的半透明。|
|creditContainer|Element \| String||`optional`指定包含CreditDisplay信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。|
|creditViewport|Element \| String||`optional`指定包含CreditDisplay弹出框信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。|
|terrainExaggeration|Number|1.0|`optional`用于夸大地形的标量。请注意，设置地形夸张不会修改其它任何数据。|
|shadows|Boolean|false|`optional`确定阴影是否由太阳投射形成。|
|terrainShadows|Number|3|`optional`确定地形是否投射或接受来自太阳的阴影。|
|mapMode2D|Number|1|`optional`确定二维地图是可旋转的或是可以在在水平方向上无限滚动。|
|projectionPicker|Boolean|false|`optional`是否显示投影切换按钮|
|camera|Object|| `optional` 场景相机位置.默认定位到全球范围内的中国。|
---

## 事件

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
---

## 示例

### 初始化Viewer控制部件显隐

#### 代码

```html
<template>
  <div class="viewer" ref="myViewer">
    <div class="row" style="position: absolute; left: 1%; top: 2%; width: 100%; z-index: 9999; color: white">
      <span>动画部件</span>
      <el-switch v-model="animation"></el-switch>
      <span>时间轴部件</span>
      <el-switch v-model="timeline"></el-switch>
      <span>基础图层拾取器</span>
      <el-switch v-model="baseLayerPicker"></el-switch>
      <span>全屏按钮</span>
      <el-switch v-model="fullscreenButton"></el-switch>
      <span>信息提示框</span>
      <el-switch v-model="infoBox"></el-switch>
    </div>
    <cesium-viewer :animation="animation" :baseLayerPicker="baseLayerPicker" :timeline="timeline" 
      :fullscreenButton="fullscreenButton" :fullscreenElement="fullscreenElement" :infoBox="infoBox" @ready="ready">
    </cesium-viewer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        animation: true,
        timeline: true,
        baseLayerPicker: false,
        fullscreenButton: true,
        infoBox: true,
        fullscreenElement: document.body
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.fullscreenElement = this.$refs.myViewer
        viewer.entities.add({
          id: '成都欢迎你',
          position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
          billboard: new Cesium.BillboardGraphics({
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.1
          }),
          label: new Cesium.LabelGraphics ({
            text: 'Hello Word',
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

<style scoped>
.viewer {
  width: 100%;
  height: 400px;
}
</style>
```

#### 预览

<doc-preview>
  <template>
    <div class="viewer" ref="myViewer">
      <div class="row" style="position: absolute; left: 1%; top: 2%; width: 100%; z-index: 9999; color: white">
        <span>动画部件</span>
        <el-switch v-model="animation"></el-switch>
        <span>时间轴部件</span>
        <el-switch v-model="timeline"></el-switch>
        <span>基础图层拾取器</span>
        <el-switch v-model="baseLayerPicker"></el-switch>
        <span>全屏按钮</span>
        <el-switch v-model="fullscreenButton"></el-switch>
        <span>信息提示框</span>
        <el-switch v-model="infoBox"></el-switch>
      </div>
      <cesium-viewer :animation="animation" :baseLayerPicker="baseLayerPicker" :timeline="timeline" 
        :fullscreenButton="fullscreenButton" :fullscreenElement="fullscreenElement" :infoBox="infoBox" @ready="ready">
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          animation: true,
          timeline: true,
          baseLayerPicker: false,
          fullscreenButton: true,
          infoBox: true,
          fullscreenElement: document.body
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.fullscreenElement = this.$refs.myViewer
          viewer.entities.add({
            id: '成都欢迎你',
            position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
            billboard: new Cesium.BillboardGraphics({
              image: 'https://zouyaoji.top/vue-cesium/favicon.png',
              scale: 0.1
            }),
            label: new Cesium.LabelGraphics ({
              text: 'Hello Word',
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

  <style scoped>
  .viewer {
    width: 100%;
    height: 400px;
  }
  </style>
</doc-preview>