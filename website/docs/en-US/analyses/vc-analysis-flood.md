<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-31 12:16:42
 * @LastEditTime: 2022-02-17 17:42:19
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\en-US\analyses\vc-analysis-flood.md
-->

## VcAnalysisFlood

Loading the flood analysis component. The essence is to use `vc-primitive-classification` and `vc-geometry-polygon` to dynamically modify the `extrudedHeight` property of `vc-geometry-polygon` to stretch it into a closed volume object, as a simple flood analysis simulation.

**Note** The scene needs to be loaded with terrain or 3DTiles.

### Basic usage

Basic usage of VcAnalysisFlood component.

:::demo Use the `vc-analysis-flood` tags to add a simple flood analysis simulation on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-analysis-flood
      @ready="ready"
      ref="flood"
      :min-height="minHeight"
      :max-height="maxHeight"
      :speed="speed"
      :polygon-hierarchy="polygonHierarchy"
    >
    </vc-analysis-flood>
    <vc-layer-imagery>
      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>
    </vc-layer-imagery>
    <vc-terrain-provider-cesium></vc-terrain-provider-cesium>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
    <el-button type="danger" round @click="start">Start</el-button>
    <el-button type="danger" round @click="pause">{{pausing ? 'Play' : 'Pause'}}</el-button>
    <el-button type="danger" round @click="stop">Stop</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        minHeight: -1,
        maxHeight: 4000,
        speed: 10,
        polygonHierarchy: [
          [102.1, 29.5],
          [106.2, 29.5],
          [106.2, 33.5],
          [102.1, 33.5]
        ],
        pausing: false
      }
    },
    methods: {
      ready(cesiumInstance) {
        console.log(cesiumInstance)
      },
      onViewerReady({ Cesium, viewer }) {
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
          orientation: {
            heading: 6.20312220367255,
            pitch: -0.9937536846355606,
            roll: 0.002443376981836387
          }
        })
      },
      unload() {
        this.$refs.flood.unload()
      },
      load() {
        this.$refs.flood.load()
      },
      reload() {
        this.$refs.flood.reload()
      },
      start() {
        this.$refs.flood.start()
        this.pausing = false
      },
      pause() {
        this.$refs.flood.pause()
        this.pausing = !this.pausing
      },
      stop() {
        this.$refs.flood.stop()
        this.pausing = false
      }
    }
  }
</script>
```

:::

### Props

//---
| Name | Type | Default | Description |
| ---------------- | --------------------- | ------------------------ | ---------------------------------------------- |
| polygonHierarchy |VcPolygonHierarchy | | `required` Specify ths VcPolygonHierarchy of polygon. |
| minHeight | number | `-1 ` | `optional` Specify the minimum elevation. |
| maxHeight | number | `8888` | `optional` Specify the maximum elevation. |
| speed | number | `10` | `optional` Specify the height to increase each frame. |
| color | VcColor | `'rgba(40,150,200,0.6)'` | `optional` Specify the VcColor of water. |
| loop | boolean | `false` | `optional` Specify whether to restart after reaching the maximum height. |

### Event

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |
| stop       | (evt: Cesium.ClassificationPrimitive)   | Triggers when the maxHeight is reached.                |

### Methods

| Name  | Parameters | Description |
| ----- | ---------- | ----------- |
| start |            | Start       |
| pause |            | Pause       |
| stop  |            | Stop        |
