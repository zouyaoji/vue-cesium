## VcImageryProviderUrltemplate

Loading a tiled imagery provider that provides imagery by requesting tiles using a specified URL template. It is equivalent to initializing a `Cesium.UrlTemplateImageryProvider` instance.

**Note**: It needs to be a subcomponent of `vc-layer-imagery` to load normally.

### Basic usage

Basic usage of the `vc-imagery-provider-urltemplate` component.

:::demo Use the `vc-layer-imagery` tag to add the imagery layer with UrlTemplateImageryProvider to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
      <vc-imagery-provider-urltemplate ref="provider" :projection-transforms="projectionTransforms" :url="url"></vc-imagery-provider-urltemplate>
    </vc-layer-imagery>
    <!-- 用于测试 projectionTransforms  -->
    <vc-layer-imagery :sortOrder="5">
      <vc-imagery-provider-tianditu map-style="img_w" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
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
          <el-select v-model="url" placeholder="Select">
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
      const projectionTransforms = ref(null)
      projectionTransforms.value = {
        from: 'GCJ02',
        to: 'WGS84'
      }
      const options = [
        {
          value: 'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
          label: 'amap-image'
        },
        {
          value: 'https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
          label: 'amap-vector'
        },
        {
          value: 'https://www.songluck.com/raster/osm_chengdu/{z}/{x}/{y}.png',
          label: 'custom mapbox'
        }
      ]
      const url = ref('https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}')
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
        projectionTransforms,
        url,
        options
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
|url|string\|Cesium.Resource||`required` The URL template to use to request tiles.|
|pickFeaturesUrl|string\|Cesium.Resource||`optional` The URL template to use to pick features. |
|urlSchemeZeroPadding|AnyObject||`optional` Gets the URL scheme zero padding for each tile coordinate.|
|subdomains|string\|Array|`'abc'`|`optional` The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.|
|credit|string\| Cesium.Credit|`''`|`optional` A credit for the data source, which is displayed on the canvas.|
|minimumLevel|Number|`0`|`optional` The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems.|
|maximumLevel|Number||`optional` The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.|
|rectangle|VcRectangle||`optional` The rectangle, in radians, covered by the image. |
|tilingScheme|Cesium.GeographicTilingScheme \| Cesium.WebMercatorTilingScheme||`optional` The tiling scheme specifying how the ellipsoidal surface is broken into tiles. If this parameter is not provided, a WebMercatorTilingScheme is used.|
|ellipsoid|Cesium.Ellipsoid||`optional` The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.|
|tileWidth|Number|`256`|`optional` Pixel width of image tiles.|
|tileHeight|Number|`256`|`optional` Pixel height of image tiles.|
|hasAlphaChannel|Boolean|`true`|`optional` true if the images provided by this imagery provider include an alpha channel; otherwise, false. If this property is false, an alpha channel, if present, will be ignored. If this property is true, any images without an alpha channel will be treated as if their alpha is 1.0 everywhere. When this property is false, memory usage and texture upload time are potentially reduced.|
|getFeatureInfoFormats|Array||`optional` The formats in which to get feature information at a specific location when UrlTemplateImageryProvider#pickFeatures is invoked. If this parameter is not specified, feature picking is disabled.|
|enablePickFeatures|Boolean|`true`|`optional` If true, UrlTemplateImageryProvider#pickFeatures will request the options.pickFeaturesUrl and attempt to interpret the features included in the response. If false, UrlTemplateImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you know your data source does not support picking features or if you don't want this provider's features to be pickable. Note that this can be dynamically overridden by modifying the UriTemplateImageryProvider#enablePickFeatures property.|
|customTags|AnyObject||`optional` Allow to replace custom keywords in the URL template. The object must have strings as keys and functions as values.|
| projectionTransforms | ProjectionTransforms | `false` | `optional` Specify the projection transformation parameters. |

### Events

| Name         | Parameters                              | Description                                                          |
| ------------ | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready        | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed    | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| errorEvent   | TileProviderError                       | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider                         | Triggers when the provider is ready for use.                         |

### Reference

- Refer to the official documentation: **[UrlTemplateImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/UrlTemplateImageryProvider.html)**
