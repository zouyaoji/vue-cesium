## VcTerrainProviderTianditu

Loading a terrain provider that produces terrain geometry by tessellating height maps retrieved from Elevation Tiles of an Tianditu REST API.

### Basic usage

Basic usage of the `vc-terrain-provider-tianditu` component.

:::demo Use the `vc-terrain-provider-tianditu` tag to add the online terrain tile service provided by Tianditu to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="ready" :camera="{position: [102.8,30.57,6000],heading: 162, pitch: -18.25, roll: 0.05}">
    <vc-terrain-provider-tianditu ref="provider" token="436ce7e50d27eede2f2929307e6b33c0"></vc-terrain-provider-tianditu>
    <vc-layer-imagery>
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery>
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <div class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">Unload</el-button>
      <el-button type="danger" round @click="load">Load</el-button>
      <el-button type="danger" round @click="reload">Reload</el-button>
    </el-row>
  </div>
</el-row>

<script>
  import { ref, getCurrentInstance } from 'vue'
  export default {
    setup() {
      // state
      const instance = getCurrentInstance()
      const provider = ref(null)
      let viewer = undefined
      // methods
      const unload = () => {
        provider.value.unload()
      }
      const reload = () => {
        provider.value.reload()
      }
      const load = () => {
        provider.value.load()
      }
      const ready = ({ Cesium, viewer }) => {}
      return {
        ready,
        provider,
        unload,
        reload,
        load
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string | `'https://{s}.tianditu.gov.cn/'` | `required` Specify the service address. |
| subdomains | Array | `['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']` | Specify the polling subdomain name. |
| pluginPath | string | `'https://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt.js'` | `optional` Specify the address of the Tiantu terrain plugin library. |
| dataType | string | `int` | `optional` Specify the data type. |
| tileType | string | `heightmap` | `optional` Specify the tile type. |
| token | string | | `optional` Specify the Tiantu service secret key. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | TerrainProvider                         | Triggers when the provider is ready for use.                         |

### Reference

- **[Documents of Tianditu](http://lbs.tianditu.gov.cn/docs/#/sanwei/)**
