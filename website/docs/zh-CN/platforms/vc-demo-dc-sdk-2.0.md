## DCSDK Demo

vue-cesium 使用数字视觉的 dc-sdk 开发时只需要在引入 VueCesium 时通过配置项 `cesiumPath` 指定为 dc-sdk 库地址即可。

```javascript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(VueCesium, {
  cesiumPath: 'https://resource.dvgis.cn/libs/2.x/dc.base.min.js'
})
app.mount('#app')
```

或者在 `vc-viewer` 组件上将 `cesiumPath` 地址指定为 dc-sdk 路径。 如下面的例子：

`vc-viewer` 加载成功会返回 { Cesium, viewer, dcViewer }, 通过该 `dcViewer` 使用 dc-sdk API 进行相关开发即可， 如下面的例子：

### 基础用法

使用 VueCesium 加载 dc-sdk

:::demo 通过 `vc-viewer` 的 cesiumPath 属性指定使用 dc-sdk。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer
    ref="vcViewer"
    :cesium-path="cesiumPath"
    :animation="animation"
    :timeline="timeline"
    :fullscreenButton="fullscreenButton"
    :fullscreen-element="fullscreenElement"
    @ready="onViewerReady"
    @left-click="onLeftClick"
  >
    <vc-navigation :offset="offset" @compass-evt="onNavigationEvt" :otherOpts="otherOpts" @zoom-evt="onNavigationEvt"></vc-navigation>
    <vc-entity v-model:billboard="billboard" ref="entity" @click="onEntityClick" :position="{lng: 108, lat: 32}" :point="point" :label="label">
      <vc-graphics-billboard ref="billboard" image="https://zouyaoji.top/vue-cesium/favicon.png"></vc-graphics-billboard>
      <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
    </vc-entity>
    <!-- 天地图注记 -->
    <vc-layer-imagery :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <!-- 天地图影像 -->
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
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
        cesiumPath: 'https://resource.dvgis.cn/libs/2.x/dc.base.min.js'
      }
    },
    mounted() {
      this.$refs.vcViewer.creatingPromise.then(({ Cesium, viewer }) => {
        console.log('viewer is loaded.')
      })
    },
    methods: {
      onViewerReady({ Cesium, dcViewer }) {
        console.log(dcViewer)
        const baselayer = DC.ImageryLayerFactory.createAmapImageryLayer({
          style: 'img'
        })
        dcViewer.addBaseLayer(baselayer)
        const layer = new DC.HtmlLayer('layer')
        dcViewer.addLayer(layer)
        const positions = generatePosition(5)
        positions.forEach((item, index) => {
          const divIcon = new DC.DivIcon(
            item,
            `<div style="width:200px;background:rgba(255,255,0,0.2)">我是一个div，你可以对我添加css样式和内容</div>`
          )
          layer.addOverlay(divIcon)
        })

        // dcViewer.flyToPosition(new DC.Position(120.472147621, 30.61004946, 65380.21, 14.0, -40.94))
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
  function generatePosition(num) {
    var list = []
    for (var i = 0; i < num; i++) {
      var lng = 120.38105869 + Math.random() * 0.5
      var lat = 31.10115627 + Math.random() * 0.5
      list.push(new DC.Position(lng, lat))
    }
    return list
  }
</script>
```

:::

### 参考

- 官网：**[dc-sdk](http://dc.dvgis.cn/#/index)**
