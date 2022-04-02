## VcImageryProviderSingletile

Loading a tiled imagery provider that provides a single, top-level imagery tile. It is equivalent to initializing a `Cesium.SingleTileImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

### Basic usage

Basic usage of the `vc-imagery-provider-singletile` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with SingleTileImageryProvider to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <vc-imagery-provider-singletile
        ref="provider"
        url="https://zouyaoji.top/vue-cesium/SampleData/images/worldimage.jpg"
      ></vc-imagery-provider-singletile>
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
      return {
        provider,
        unload,
        reload,
        load,
        alpha,
        brightness,
        contrast
      }
    }
  }
</script>
```

:::

### Props

| Name      | Type                    | Default | Description                                                               |
| --------- | ----------------------- | ------- | ------------------------------------------------------------------------- |
| url       | string\|Cesium.Resource |         | `required`The url for the tile.                                           |
| rectangle | VcRectangle             |         | `optional`The rectangle, in radians, covered by the image.                |
| credit    | string\|Cesium.Credit   |         | `optional`A credit for the data source, which is displayed on the canvas. |
| ellipsoid | Ceisum.Ellipsoid        |         | `optional`The ellipsoid. If not specified, the WGS84 ellipsoid is used.   |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

### Reference

- Refer to the official documentation: **[SingleTileImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/SingleTileImageryProvider.html)**
