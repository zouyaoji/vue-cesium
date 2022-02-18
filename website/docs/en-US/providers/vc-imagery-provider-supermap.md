## VcImageryProviderSupermap

Loading a tiled imagery provider that provides tiled imagery hosted by a SuperMap iServer.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

### Basic usage

Basic usage of the `vc-imagery-provider-supermap` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with VcImageryProviderSupermap to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <vc-imagery-provider-supermap
        @ready-promise="onImageryProviderReady"
        ref="provider"
        url="https://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult"
      ></vc-imagery-provider-supermap>
    </vc-layer-imagery>
  </vc-viewer>
  <div class="demo-toolbar">
    <el-row>
      <el-button type="danger" round @click="unload">Unload</el-button>
      <el-button type="danger" round @click="load">Load</el-button>
      <el-button type="danger" round @click="reload">Reload</el-button>
    </el-row>
    <el-row>
      <el-col>
        <div class="block">
          <span class="demonstration">Alpha</span>
          <el-slider v-model="alpha" :min="0" :max="1" :step="0.01"></el-slider>
          <span class="demonstration">Brightness</span>
          <el-slider v-model="brightness" :min="0" :max="5" :step="0.01"></el-slider>
          <span class="demonstration">Contrast</span>
          <el-slider v-model="contrast" :min="0" :max="5" :step="0.01"></el-slider>
        </div>
      </el-col>
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
      const alpha = ref(1)
      const brightness = ref(1)
      const contrast = ref(1)
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
      const onImageryProviderReady = imageryProvider => {
        viewer.camera.flyTo({ destination: imageryProvider.rectangle })
      }
      const onViewerReady = cesiumInstance => {
        viewer = cesiumInstance.viewer
      }
      return {
        provider,
        unload,
        reload,
        load,
        alpha,
        brightness,
        contrast,
        onImageryProviderReady,
        onViewerReady
      }
    }
  }
</script>
```

:::

### Props

| Name         | Type    | Default                                | Description                                                                        |
| ------------ | ------- | -------------------------------------- | ---------------------------------------------------------------------------------- |
| url          | String  |                                        | `required` The URL of the SuperMap iServer service.                                |
| name         | String  |                                        | `optional` The name of the layer.                                                  |
| minimumLevel | Number  | `0`                                    | `optional` The minimum tile level to request, or undefined if there is no minimum. |
| maximumLevel | Number  | `20`                                   | `optional` The maximum tile level to request, or undefined if there is no maximum. |
| transparent  | Boolean | `true`                                 | `optional` Whether the parameter of the requested map service is transparent.      |
| credit       | Boolean | `'MapQuest, SuperMap iServer Imagery'` | `optional` A credit for the data source, which is displayed on the canvas.         |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

### Reference

- **[SuperMapImageryProvider](http://support.supermap.com.cn:8090/webgl/docs/Documentation/SuperMapImageryProvider.html)**
