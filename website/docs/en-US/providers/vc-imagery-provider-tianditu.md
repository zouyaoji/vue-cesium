## VcImageryProviderTianditu

Loading a tiled imagery provider that provides tiled imagery hosted by a Tianditu REST API.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

### Basic usage

Basic usage of the `vc-imagery-provider-tianditu` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with VcImageryProviderTianditu to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- Annotation layer -->
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="20">
      <vc-imagery-provider-tianditu mapStyle="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="10">
      <vc-imagery-provider-tianditu :mapStyle="mapStyle" token="436ce7e50d27eede2f2929307e6b33c0" ref="provider"></vc-imagery-provider-tianditu>
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
          <span class="demonstration">Switch</span>
          <el-select v-model="mapStyle" placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
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
      const options = [
        {
          value: 'img_c',
          label: 'img_c'
        },
        {
          value: 'img_w',
          label: 'img_w'
        },
        {
          value: 'vec_c',
          label: 'vec_c'
        },
        {
          value: 'vec_w',
          label: 'vec_w'
        },
        {
          value: 'ter_c',
          label: 'ter_c'
        },
        {
          value: 'ter_w',
          label: 'ter_w'
        },
        {
          value: 'ibo_c',
          label: 'ibo_c'
        },
        {
          value: 'ibo_w',
          label: 'ibo_w'
        }
      ]
      const mapStyle = ref('img_c')
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
        contrast,
        options,
        mapStyle
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| mapStyle | String | `'img_w'` | `optional` The map type of Tianditu service. |cia_c/cia_w/cta_c/cta_w/cva_c/cva_w/ela_c/ela_w/eva_c/eva_w/img_c/img_w/ter_c/ter_w/vec_c/vec_w/ibo_c/ibo_w|
| credit | String\|Object | `'天地图全球影像服务'` | `optional` A credit for the data source, which is displayed on the canvas.  |
| token | String | | `optional` Tianditu application key. [Application Address](http://lbs.tianditu.gov.cn/home.html) |
| protocol | String | `https` | `optional` Specify the request protocol type. Can be `https` or `http`. |
| rectangle | Object | | `optional` The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider. |
| minimumLevel | Number | `0` | `optional` The minimum tile level to request, or undefined if there is no minimum.  |
| maximumLevel | Number | `20` | `optional` The maximum tile level to request, or undefined if there is no maximum. |
| projectionTransforms | Boolean\|Object | `false` | `optional` Specify the projection transformation parameters. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

### Reference

- **[MapService](http://lbs.tianditu.gov.cn/server/MapService.html)**
