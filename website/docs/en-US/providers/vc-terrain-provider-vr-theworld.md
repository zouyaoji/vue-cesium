## VcTerrainProviderVrTheworld

Loading a terrain provider that that produces terrain geometry by tessellating height maps retrieved from a VT MÄK VR-TheWorld server. It is equivalent to initializing a `Cesium.VRTheWorldTerrainProvider` instance.

### Basic usage

Basic usage of the `vc-terrain-provider-vr-theworld` component.

:::demo Use the `vc-terrain-provider-vr-theworld` tag to add the online terrain tile service provided by VrTheWorld to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady" :imageryProvider="imageryProvider">
    <vc-terrain-provider-vr-theworld ref="provider"></vc-terrain-provider-vr-theworld>
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

| Name      | Type           | Default | Description                                                                                |
| --------- | -------------- | ------- | ------------------------------------------------------------------------------------------ |
| url       | String\|Object |         | `required` The URL of the VR-TheWorld TileMap.                                             |
| token     | String         |         | `optional` The ellipsoid. If this parameter is not specified, the WGS84 ellipsoid is used. |
| ellipsoid | Object         |         | `optional` A credit for the data source, which is displayed on the canvas.                 |

### Events

| Name         | Parameters                         | Description                                                          |
| ------------ | ---------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | Vue Instance                       | Triggers before the cesiumObject is loaded.                          |
| ready        | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | Vue Instance                       | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                  | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | TerrainProvider                    | Triggers when the provider is ready for use.                         |

### Reference

- Refer to the official documentation: **[VRTheWorldTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/VRTheWorldTerrainProvider.html)**
