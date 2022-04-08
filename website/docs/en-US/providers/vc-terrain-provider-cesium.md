<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-29 16:12:05
 * @LastEditTime: 2022-03-04 15:39:32
 * @LastEditors: Weibo Cao
 * @Description:
 * @FilePath: \vue-cesium\website\docs\en-US\providers\vc-terrain-provider-cesium.md
-->

## VcTerrainProviderCesium

Loading a terrain provider that accesses terrain data in a Cesium terrain format. It is equivalent to initializing a `Cesium.CesiumTerrainProvider` instance. If the `url` is empty, the CesiumIon online global terrain will be loaded via `Cesium.createWorldTerrain` by default. CesiumIon authorization is required. For details, go to [`https://cesium.com/ion/`](https://cesium.com/ion/) Apply for an account and get Access Token.

### Basic usage

Basic usage of the `vc-terrain-provider-cesium` component.

:::demo Use the `vc-terrain-provider-cesium` tag to add the online terrain tile provided by Cesium Ion to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady" :imageryProvider="imageryProvider">
    <vc-terrain-provider-cesium ref="provider"></vc-terrain-provider-cesium>
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
      const imageryProvider = ref(null)
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
      const onViewerReady = ({ Cesium, viewer }) => {
        imageryProvider.value = new Cesium.ArcGisMapServerImageryProvider({
          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
        })
        var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)
        var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)
        viewer.camera.lookAt(target, offset)
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
      }
      return {
        provider,
        unload,
        reload,
        load,
        imageryProvider,
        onViewerReady
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
| url | string | | `required` The URL of the Cesium terrain server. |
| requestVertexNormals | boolean | `false` | `optional` Flag that indicates if the client should request additional lighting information from the server, in the form of per vertex normals if available.|
| requestWaterMask | boolean | `false` | `optional` Flag that indicates if the client should request per tile water masks from the server, if available.|
| requestMetadata | boolean | `true` | `optional` Flag that indicates if the client should request per tile metadata from the server, if available.|
| ellipsoid | Cesium.Ellipsoid | | `optional` The ellipsoid. If not specified, the WGS84 ellipsoid is used.|
| credit | string | | `optional` A credit for the data source, which is displayed on the canvas.|

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | TerrainProvider                         | Triggers when the provider is ready for use.                         |

### Reference

- Refer to the official documentation: **[CesiumTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/CesiumTerrainProvider.html)**
