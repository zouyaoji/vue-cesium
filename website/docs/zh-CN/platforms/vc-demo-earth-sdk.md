## EarthSDK Demo

 vue-cesium 使用 CesiumLab 的 EarthSDK 开发时只需要在引入 VueCesium 时通过配置项 `cesiumPath` 指定为 EarthSDK 库地址即可。

```javascript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(VueCesium, {
  cesiumPath: 'https://earthsdk.com/v/last/XbsjEarth/XbsjEarth.js'
})
app.mount('#app')
```

或者在 `vc-viewer` 组件上将 `cesiumPath` 地址指定为 EarthSDK 路径。

`vc-viewer` 加载成功会返回 { Cesium, viewer, earth }, 通过该 `earth` 使用 EarthSDK API 进行相关开发即可， 如下面的例子：

### 基础用法

使用 VueCesium 加载 EarthSDK

:::demo 通过 `vc-viewer` 的 cesiumPath 属性指定使用 EarthSDK。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer
    ref="vcViewer"
    :cesiumPath="cesiumPath"
    :animation="animation"
    :timeline="timeline"
    :fullscreenButton="fullscreenButton"
    :fullscreenElement="fullscreenElement"
    @ready="onViewerReady"
    @leftClick="onLeftClick"
  >
    <vc-navigation :offset="offset" @compass-evt="onNavigationEvt" :otherOpts="otherOpts" @zoom-evt="onNavigationEvt"></vc-navigation>
    <vc-entity v-model:billboard="billboard" ref="entity" @click="onEntityClick" :position="{lng: 108, lat: 32}" :point="point" :label="label">
      <vc-graphics-billboard ref="billboard" image="https://zouyaoji.top/vue-cesium/favicon.png"></vc-graphics-billboard>
      <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
    </vc-entity>
    <!-- 天地图注记 -->
    <vc-layer-imagery :sortOrder="20">
      <vc-provider-imagery-tianditu mapStyle="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
    </vc-layer-imagery>
    <!-- 天地图影像 -->
    <vc-layer-imagery :sortOrder="10">
      <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">销毁</el-button>
      <el-button type="danger" round @click="load">加载</el-button>
      <el-button type="danger" round @click="reload">重载</el-button>
    </el-row>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        animation: true,
        timeline: true,
        fullscreenButton: true,
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
        },
        cesiumPath: 'https://earthsdk.com/v/last/XbsjEarth/XbsjEarth.js'
      }
    },
    mounted() {
      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {
        console.log('viewer is loaded.')
      })
    },
    methods: {
      onViewerReady({ Cesium, viewer, earth }) {
        console.log(earth)
        // 1.1.2 场景配置
        earth.sceneTree.root = {
          expand: true,
          title: '预览场景',
          children: [
            {
              ref: 'polyline1',
              czmObject: {
                xbsjType: 'Polyline',
                positions: [
                  [1.6049052178907162, 0.4547675537396452, 0],
                  [2.266206367018494, 0.4857724702174004, -5.6841204016160695e-9],
                  [2.8083374819013205, 0.9842980731992482, -6.859619106471648e-9]
                ]
              }
            },
            {
              czmObject: {
                name: '默认影像',
                xbsjType: 'Imagery',
                xbsjImageryProvider: XE.Obj.Imagery.defaultImageryProviderConfig
              }
            }
          ]
        }
        var polyline1 = earth.sceneTree.$refs.polyline1.czmObject
        // 1.1.3 设置相机位置
        // earth.camera.position.toString()和earth.camera.toAllJSONStr()这两个方法可获取相机位置
        earth.camera.position = [1.9801824720243058, 0.5645924417726427, 8556103.623693792]
        earth.camera.rotation = [2.6645352591003757e-15, -1.5694528555019995, 0]
        // 1.1.3 设置初始值
        polyline1.width = 4
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
        })
      },
      unload() {
        this.$refs.vcViewer.unload().then(e => {
          console.log(e)
        })
      },
      reload() {
        this.$refs.vcViewer.reload().then(e => {
          console.log(e)
        })
      }
    }
  }
</script>
```

:::

### 参考

- EarthSDK 官网： **[EarthSDK](https://www.earthsdk.com/)**
