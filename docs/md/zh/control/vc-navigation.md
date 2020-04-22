# 导航罗盘

`vc-navigation` 组件用于加载导航罗盘部件。**注意：** 使用此组件需要引入 `import 'vue-cesium/lib/vc-navigation.css'`，需要`css-loader`。

## 示例

### 加载导航罗盘部件

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer :timeline="timeline" @ready="ready" :camera.sync="camera">
        <vc-navigation :options="options"></vc-navigation>
        <vc-layer-imagery>
          <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>罗盘部件</span>
        <md-switch v-model="options.enableCompass"></md-switch>
        <span>缩放部件</span>
        <md-switch v-model="options.enableZoomControl"></md-switch>
        <span>罗盘外环是否可用</span>
        <md-switch v-model="options.enableCompassOuterRing"></md-switch>
        <span>比例尺部件</span>
        <md-switch v-model="options.enableDistanceLegend"></md-switch>
        <span>位置信息部件</span>
        <md-switch v-model="options.enableLocationBar"></md-switch>
      </div>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          timeline: true,
          options: {
            enableCompass: true,
            enableZoomControl: true,
            // enableZoomControl: {
            //   // 缩放比例
            //    zoomAmount: 2,
            //   // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是经纬度{lng: number, lat: number, height: number}或者 rectangle{west: number,south: number,east: number,north: number}
            //   defaultResetView: {
            //     lng: 105, lat: 29.999999999999993, height: 19059568.497290563
            //   },
            //   overrideCamera: false
            //   },
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
            enableMyLocation: true
          },
          camera: {
            position: {
              lng: -105,
              lat: 32,
              height: 100000
            }
          }
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer :timeline="timeline" @ready="ready">
      <vc-navigation :options="options"></vc-navigation>
      <vc-layer-imagery>
        <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>罗盘部件</span>
      <md-switch v-model="options.enableCompass"></md-switch>
      <span>缩放部件</span>
      <md-switch v-model="options.enableZoomControl"></md-switch>
      <span>罗盘外环是否可用</span>
      <md-switch v-model="options.enableCompassOuterRing"></md-switch>
      <span>比例尺部件</span>
      <md-switch v-model="options.enableDistanceLegend"></md-switch>
      <span>位置信息部件</span>
      <md-switch v-model="options.enableLocationBar"></md-switch>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        timeline: true,
        options: {
          enableCompass: true,
          // enableZoomControl: true,
          enableZoomControl: {
            // 缩放比例
            zoomAmount: 2,
            // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是经纬度{lng: number, lat: number, height: number}或者 rectangle{west: number,south: number,east: number,north: number}
            defaultResetView: {
              lng: 105,
              lat: 29.999999999999993,
              height: 19059568.497290563
            },
            overrideCamera: false
          },
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
          enableMyLocation: true
        }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| enableCompass | Boolean | `true` | `optional` 指定是否启用罗盘部件。 |
| enableZoomControl | Boolean\|Object | `true` | `optional` 指定是否启用缩放部件。 |
| enableZoomControl.zoomAmount | Number | `2` | `optional` 缩放控件缩放系数。 |
| enableZoomControl.defaultResetView | Object |  | `optional` 重置相机参数。 |
| enableZoomControl.overrideCamera | Boolean | `false` | `optional` 缩放控件默认相机位置参数是否覆盖 vc-viewer 上的相机参数。 |
| enableDistanceLegend | Boolean | `true` | `optional` 指定是否启用距离比例尺部件。 |
| enableCompassOuterRing | Boolean | `true` | `optional` 指定罗盘部件是否可用。 |
| enableLocationBar | Boolean\|Object | `true` | `optional` 指定位置信息部件是否可用。 |
| enablePrintView | Boolean\|Object | `true` | `optional` 指定打印部件是否可用。 |

---

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
