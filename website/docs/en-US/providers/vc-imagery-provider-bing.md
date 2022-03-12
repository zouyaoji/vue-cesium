## VcImageryProviderBing

Loading a tiled imagery provider using the Bing Maps Imagery REST API. It is equivalent to initializing a `Cesium.BingMapsImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

### Basic usage

Basic usage of the `vc-imagery-provider-bing` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with BingMapsImageryProvider to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <!-- (https://www.bingmapsportal.com/) Apply for Key. -->
      <vc-imagery-provider-bing
        ref="provider"
        bm-key="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"
        :map-style="mapStyle"
      ></vc-imagery-provider-bing>
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
          value: 'Aerial',
          label: 'Aerial'
        },
        {
          value: 'AerialWithLabels',
          label: 'AerialWithLabels'
        },
        {
          value: 'Road',
          label: 'Road'
        },
        {
          value: 'CanvasDark',
          label: 'CanvasDark'
        }
      ]
      const mapStyle = ref('Aerial')
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
| url | String \| Object | `'https://dev.virtualearth.net'` | `required` The url of the Bing Maps server hosting the imagery. |
| **bmKey** | String | | `optional` The Bing Maps key for your application, which can be created at [https://www.bingmapsportal.com/](https://www.bingmapsportal.com/). **Note that it is bmKey** |
| tileProtocol | String | | `optional` The protocol to use when loading tiles, e.g. 'http:' or 'https:'. By default, tiles are loaded using the same protocol as the page. |
| mapStyle | String | `'Aerial'` | `optional` The type of Bing Maps imagery to load. |Aerial/AerialWithLabels/AerialWithLabelsOnDemand/CanvasDark/CanvasGray/CanvasLight/
| culture | String | `''` | `optional` The culture to use when requesting Bing Maps imagery. Not all cultures are supported. See http://msdn.microsoft.com/en-us/library/hh441729.aspx for information on the supported cultures. |
| ellipsoid | Object | | `optional` The ellipsoid. If not specified, the WGS84 ellipsoid is used. |
| tileDiscardPolicy | Object | | `optional` The policy that determines if a tile is invalid and should be discarded. By default, a DiscardEmptyTileImagePolicy will be used, with the expectation that the Bing Maps server will send a zero-length response for missing tiles. To ensure that no tiles are discarded, construct and pass a NeverTileDiscardPolicy for this parameter. |

:::tip

Tip: In addition to passing `Cesium.Rectangle`, the `rectangle` property can also pass `PlainObject(RectangleInDegreeOption|Cartesian4Option`) and `Array<number>` (degrees)

:::

:::tipflex

```js
// RectangleInDegreeOption
{
  west: number,
  south: number,
  east: number,
  north: number
}
```

```js
// Cartesian4Option
{
  x: number,
  y: number,
  z: number,
  w: number
}
```

```js
// Array<number> in degrees
;[number, number, number, number]
```

:::

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

### Reference

- Refer to the official documentation: **[BingMapsImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/BingMapsImageryProvider.html)**
