## SuperMap Demo

When vue-cesium uses SuperMap iClient3D for WebGL to develop, you only need to specify the iClient3D library address through the configuration item `cesiumPath` when VueCesium is introduced.

```javascript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(VueCesium, {
  cesiumPath: 'https://www.supermapol.com/earth/Build/Cesium/Cesium.js'
})
app.mount('#app')
```

Or specify the address of cesiumPath as the iClient3D path on the vc-viewer component. Such as the following example:

### Basic usage

Use VueCesium to load SuperMap iClient3D for WebGL

:::demo specifies the use of SuperMap iClient3D for WebGL through the cesiumPath property of `vc-viewer`.

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
    <!-- <vc-entity v-model:billboard="billboard" ref="entity" @click="onEntityClick" :position="{lng: 108, lat: 32}" :point="point" :label="label">
      <vc-graphics-billboard ref="billboard" image="https://zouyaoji.top/vue-cesium/favicon.png"></vc-graphics-billboard>
      <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
    </vc-entity> -->
    <vc-layer-imagery :sortOrder="20">
      <vc-provider-imagery-osm></vc-provider-imagery-osm>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">Unload</el-button>
      <el-button type="danger" round @click="load">Load</el-button>
      <el-button type="danger" round @click="reload">Reload</el-button>
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
        cesiumPath: 'https://www.supermapol.com/earth/Build/Cesium/Cesium.js'
      }
    },
    mounted() {
      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {
        console.log('viewer is loaded.')
      })
    },
    methods: {
      onViewerReady({ Cesium, viewer }) {
        viewer.imageryLayers.removeAll()
        console.log(viewer)
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

### Reference

- Official website: **[ SuperMap iClient3D for WebGL](http://support.supermap.com.cn:8090/webgl/web/index.html)**
