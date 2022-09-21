## VcImageryProviderWmts

Loading a tiled imagery provider that provides tiled imagery served by [WMTS 1.0.0](http://www.opengeospatial.org/standards/wmts) compliant servers. It is equivalent to initializing a `Cesium.WebMapTileServiceImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

### Basic usage

Basic usage of the `vc-imagery-provider-wmts` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with WebMapTileServiceImageryProvider to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <!-- https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/1.0.0/WMTSCapabilities.xml -->
      <vc-imagery-provider-wmts
        ref="provider"
        url="https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/tile/1.0.0/World_Street_Map/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg"
        layer="World_Street_Map"
        format="image/jpeg"
        wmtsStyle="default"
        tileMatrixSetID="default028mm"
      ></vc-imagery-provider-wmts>
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

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | string\|Object | | `required`The base URL for the WMTS GetTile operation (for KVP-encoded requests) or the tile-URL template (for RESTful requests). The tile-URL template should contain the following variables: {style}, {TileMatrixSet}, {TileMatrix}, {TileRow}, {TileCol}. The first two are optional if actual values are hardcoded or not required by the server. The {s} keyword may be used to specify subdomains.。 |
| format | string | `'image/jpeg'` | `optional` The MIME type for images to retrieve from the server. |
| wmtsStyle | string | | `required`The layer name for WMTS requests. |
| style | string | | `required`The style name for WMTS requests. |
| tileMatrixSetID | string | | `required`The identifier of the TileMatrixSet to use for WMTS requests. |
| tileMatrixLabels | Array | | `optional` A list of identifiers in the TileMatrix to use for WMTS requests, one per TileMatrix level. |
| clock | Clock | | `optional` A Clock instance that is used when determining the value for the time dimension. Required when options.times is specified. |
| times | TimeIntervalCollection | | `optional` TimeIntervalCollection with its data property being an object containing time dynamic dimension and their values. |
| dimensions   | VcPosition | | `optional` A object containing static dimensions and their values. |
| tileWidth | number | `256` | `optional` The tile width in pixels. |
| tileHeight | number | `256` | `optional` The tile height in pixels. |
| tilingScheme | TilingScheme | | `optional` The tiling scheme corresponding to the organization of the tiles in the TileMatrixSet. |
| rectangle | VcRectangle\|Array | | `optional` The rectangle covered by the layer. |
| minimumLevel | number | `0` | `optional` The minimum level-of-detail supported by the imagery provider. |
| maximumLevel | number | | `optional` The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. |
| ellipsoid | Ellipsoid | | `optional` The ellipsoid. If not specified, the WGS84 ellipsoid is used. |
| credit | Credit | string | | `optional` A credit for the data source, which is displayed on the canvas. |
| subdomains | string \| Array | `'abc'` | `optional` The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

### Reference

- Refer to the official documentation: **[WebMapTileServiceImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/WebMapTileServiceImageryProvider.html)**
