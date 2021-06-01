## DCSDK Demo

When vue-cesium uses dc-sdk to develop, you only need to specify the dc-sdk library address through the configuration item `cesiumPath` when VueCesium is introduced.

```javascript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/lib/theme-default/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(VueCesium, {
  cesiumPath: 'http://dc.dvgis.cn/libs/dc-sdk/dc.base.min.js'
})
app.mount('#app')
```

Or specify the address of cesiumPath as the dc-sdk path on the vc-viewer component. Such as the following example:

`vc-viewer` will return {Cesium, viewer, dcViewer} after loading successfully, and you can use the dc-sdk API to carry out related development through the `dcViewer`, as shown in the following example:

### Basic usage

Use VueCesium to load dc-sdk

:::demo specifies the use of dc-sdk through the cesiumPath attribute of `vc-viewer`.

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
        cesiumPath: 'http://dc.dvgis.cn/libs/dc-sdk/dc.base.min.js'
      }
    },
    mounted() {
      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {
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
            `<div style="width:200px;background:rgba(255,255,0,0.2)">I am a div, you can add css style and content to me</div>`
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

### Reference

-Official website: **[dc-sdk](http://dc.dvgis.cn/#/index)**
