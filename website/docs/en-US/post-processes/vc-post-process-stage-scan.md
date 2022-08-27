## VcPostProcessStageScan

Packaged scanning effects, radar scanning and circular scanning.

### Basic usage

Basic usage of VcPostProcessStageScan component.

:::demo Use the `vc-post-process-stage-scan` tag to add post-processing scanning effects on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-post-process-stage-scan ref="radar" type="radar" :options="options1"></vc-post-process-stage-scan>
    <vc-post-process-stage-scan ref="circle" type="circle" :options="options2"></vc-post-process-stage-scan>
    <vc-layer-imagery>
      <vc-imagery-provider-osm></vc-imagery-provider-osm>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="load">Reload</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        options1: {
          position: [117.217124, 31.809777],
          radius: 1500,
          interval: 1500,
          color: [255, 255, 0, 255]
        },
        options2: {
          position: [117.257124, 31.809777],
          radius: 1500,
          interval: 1500,
          color: [255, 0, 0, 255]
        }
      }
    },
    methods: {
      onViewerReady({ viewer }) {
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(117.237124, 31.809777, 10000.0),
          orientation: {
            heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north)
            pitch: Cesium.Math.toRadians(-90), // default value (looking down)
            roll: 0.0 // default value
          },
          duration: 3
        })
      },
      unload() {
        this.$refs.circle.unload()
        this.$refs.radar.unload()
      },
      load() {
        this.$refs.circle.load()
        this.$refs.radar.load()
      },
      reload() {
        this.$refs.circle.reload()
        this.$refs.radar.reload()
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ------- | ------ | --------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| type | string | `'radar'` | `optional` Specify the scan type, optional values are'radar','circle'. |
| options | Object | `{ position: [0, 0], radius: 1500, interval: 3500, color: [0, 0, 0, 255] }` | `optional` Specify optional parameters. |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |
