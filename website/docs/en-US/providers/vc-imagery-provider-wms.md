## VcImageryProviderWms

Loading a tiled imagery provider that provides tiled imagery hosted by a Web Map Service (WMS) server. It is equivalent to initializing a `Cesium.WebMapServiceImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

### Basic usage

Basic usage of the `vc-imagery-provider-wms` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with WebMapServiceImageryProvider to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <vc-imagery-provider-wms
        ref="provider"
        url="https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows"
        layers="Hydrography:bores"
        :parameters="{transparent: true, format: 'image/png'}"
      ></vc-imagery-provider-wms>
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
      const onViewerReady = cesiumInstance => {
        cesiumInstance.viewer.camera.setView({
          destination: Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.97, -5.73)
        })
      }
      return {
        provider,
        unload,
        reload,
        load,
        alpha,
        brightness,
        contrast,
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
| url | string\|Object | | `required` The URL of the WMS service. The URL supports the same keywords as the UrlTemplateImageryProvider. |
| layers | string | | `required` The layers to include, separated by commas. |
| parameters | Object | | `optional` Additional parameters to pass to the WMS server in the GetMap URL. |
| getFeatureInfoParameters | Object | | `optional` Additional parameters to pass to the WMS server in the GetFeatureInfo URL. |
| enablePickFeatures | boolean | `true` | `optional` If true, WebMapServiceImageryProvider#pickFeatures will invoke the GetFeatureInfo operation on the WMS server and return the features included in the response. If false, WebMapServiceImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you know your WMS server does not support GetFeatureInfo or if you don't want this provider's features to be pickable. Note that this can be dynamically overridden by modifying the WebMapServiceImageryProvider#enablePickFeatures property. |
| getFeatureInfoFormats | Array | | `optional` The formats in which to try WMS GetFeatureInfo requests. |
| rectangle | Object\|Array | | `optional` The rectangle of the layer. |
| tilingScheme | Object | | `optional` The tiling scheme to use to divide the world into tiles. |
| ellipsoid      | Cesium.Ellipsoid | | `optional` The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used. |
| tileWidth | number | `256` | `optional` The width of each tile in pixels. |
| tileHeight | number | `256` | `optional` The height of each tile in pixels. |
| minimumLevel | number | `0` | `optional` The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems. |
| maximumLevel | number | | `optional` The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. If not specified, there is no limit. |
| crs | string | | `optional` CRS specification, for use with WMS specification >= 1.3.0. |
| srs | string | | `optional` SRS specification, for use with WMS specification 1.1.0 or 1.1.1 |
| credit | Credit\| string | | `optional` A credit for the data source, which is displayed on the canvas. |
| subdomains | string\| Array | `'abc'` | `optional` The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain. |
| clock | Object | | `optional` A Clock instance that is used when determining the value for the time dimension. Required when options.times is specified. |
| times | Object | | `optional` TimeIntervalCollection with its data property being an object containing time dynamic dimension and their values. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

### Reference

- Refer to the official documentation: **[WebMapServiceImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/WebMapServiceImageryProvider.html)**
