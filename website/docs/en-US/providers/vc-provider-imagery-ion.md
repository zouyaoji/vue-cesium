## VcProviderImageryIon

Loading a tiled imagery provider using the Cesium ion REST API. It is equivalent to initializing a `Cesium.IonImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

### Basic usage

Basic usage of the `vc-provider-imagery-ion` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with IonImageryProvider to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <vc-provider-imagery-ion
        ref="provider"
        :assetId="4"
        accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo"
      ></vc-provider-imagery-ion>
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

| Name        | Type           | Default | Description                                           |
| ----------- | -------------- | ------- | ----------------------------------------------------- |
| assetId     | Number         |         | `required` An ion imagery asset ID.                   |
| accessToken | String         |         | `optional` The access token to use.                   |
| server      | String\|Object |         | `optional` The resource to the Cesium ion API server. |

### Events

| Name         | Parameters                         | Description                                                          |
| ------------ | ---------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | Vue Instance                       | Triggers before the cesiumObject is loaded.                          |
| ready        | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | Vue Instance                       | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                  | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                    | Triggers when the provider is ready for use.                         |

### Reference

- Refer to the official documentation: **[IonImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/IonImageryProvider.html)**
