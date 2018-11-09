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
|mapMode2D|Number|1|`optional`确定地形是否投射或接受来自太阳的阴影。|
|projectionPicker|Boolean|false|`optional`是否显示投影切换按钮|
|camera|Object|| `optional` 场景相机位置.|
---

## 事件

| 事件名|参数|描述|
|---|------|---|
| selectedEntityChanged| Entity| 场景选中实体发生改变时触发此事件。 |
| trackedEntityChanged| Entity| 场景跟踪实体发生改变时触发此事件。 |
| dataSourceAdded|DataSource| 场景添加一个数据源时触发此事件。   |

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