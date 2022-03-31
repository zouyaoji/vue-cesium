## TencentImageryProvider

Load the tencent tile service.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

### Basic usage

Basic usage of the `vc-imagery-provider-tencent` component.

:::demo uses the `vc-layer-imagery` tag to add a tile service layer provided by Tencent on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
      <vc-imagery-provider-tencent
        :mapStyle="mapStyle"
        :styleId="styleId"
        :projectionTransforms="projectionTransforms"
        ref="provider"
      ></vc-imagery-provider-tencent>
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
        <div class="block" style="display: flex; flex-direction: column;">
          <span class="demonstration">alpha</span>
          <el-slider v-model="alpha" :min="0" :max="1" :step="0.01"></el-slider>
          <span class="demonstration">brightness</span>
          <el-slider v-model="brightness" :min="0" :max="5" :step="0.01"></el-slider>
          <span class="demonstration">contrast</span>
          <el-slider v-model="contrast" :min="0" :max="5" :step="0.01"></el-slider>
          <span class="demonstration">switch style</span>
          <el-select v-model="mapStyle" placeholder="mapStyle">
            <el-option v-for="item in mapStyleOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
          <span class="demonstration" v-if="mapStyle === 'vector'">switch styleId</span>
          <el-select v-model="styleId" placeholder="styleId" v-if="mapStyle === 'vector'">
            <el-option v-for="item in styleIdOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
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
      const mapStyleOptions = [
        {
          value: 'img',
          label: 'satellite'
        },
        {
          value: 'terrain',
          label: 'terrain'
        },
        {
          value: 'vector',
          label: 'vector'
        }
      ]
      const styleIdOptions = [
        {
          value: '1',
          label: 'classic'
        },
        {
          value: '2',
          label: 'label 1'
        },
        {
          value: '3',
          label: 'label 2'
        },
        {
          value: '4',
          label: 'Mo Yuan'
        },
        {
          value: '8',
          label: 'Bai Qian'
        },
        {
          value: '9',
          label: 'Grey'
        }
      ]
      const mapStyle = ref('vector')
      const styleId = ref('1')
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
      const projectionTransforms = {
        from: 'GCJ02',
        to: 'WGS84'
      }
      return {
        provider,
        unload,
        reload,
        load,
        alpha,
        brightness,
        contrast,
        mapStyleOptions,
        mapStyle,
        styleIdOptions,
        styleId,
        projectionTransforms
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | ----- |
| url | string | |`optional` Specify the URL template.|
|subdomains|Array\<string\>|`['1', '2', '3']`|`optional` Specify the service polling parameters.|
| mapStyle | string | `'vector'` | `optional` Specify the map style type of the tencent service. | img/terrain/vector |
| styleId | string | `'1'` | `optional` Specify the map style type of the tencent service. | 1/2/3/4/8/9 |
| protocol | String | | `optional` Specify protocol of service. |https/http|
| credit | string\|Cesium.Credit | `''` | `optional` 	A credit for the data source, which is displayed on the canvas. |
| rectangle | VcRectangle | | `optional` The rectangle, in radians, covered by the image.|
| minimumLevel | number | `0` | `optional` 	The minimum level-of-detail supported by the imagery provider. |
| maximumLevel | number | `20` | `optional` The maximum level-of-detail supported by the imagery provider. |
| tilingScheme | Cesium.GeographicTilingScheme \| Cesium.WebMercatorTilingScheme | `new Cesium.WebMercatorTilingScheme()` | `optional` The tiling scheme specifying how the ellipsoidal surface is broken into tiles.  |
| projectionTransforms | false\|ProjectionTransforms | `false` | `optional` Specify the projection transformation parameters. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

### Reference

- Refer to **[DCSDK](http://dc.dvgis.cn/#/editor?type=baselayer&example=tencent)**
