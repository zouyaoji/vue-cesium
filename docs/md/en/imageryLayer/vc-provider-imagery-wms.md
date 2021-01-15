# WebMapServiceImageryProvider

The `vc-provider-imagery-wms` component is used to load tiled imagery hosted by a Web Map Service (WMS) server.

## Example

### Load an imagerylayer with WebMapServiceImageryProvider

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
       <vc-layer-imagery ref="wms" :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-wms :url="url" :layers="layers" :parameters="parameters"></vc-provider-imagery-wms>
       </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      </div>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          url: 'http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows',
          layers: 'Hydrography:bores',
          parameters: {
            transparent : true,
            format : 'image/png'
          },
          alpha: 1,
          brightness: 1,
          contrast: 1
        }
      },
      mounted () {
        this.$refs.wms.createPromise.then(( {Cesium, viewer, cesiumObject})=>{
          viewer.camera.setView({
            destination: Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.970, -5.730)
          })
        })
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.cesiumInstance = cesiumInstance
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-layer-imagery ref="wms" :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-wms :url="url" :layers="layers" :parameters="parameters"></vc-provider-imagery-wms>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: 'http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows',
        layers: 'Hydrography:bores',
        parameters: {
          transparent: true,
          format: 'image/png'
        },
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    mounted() {
      this.$refs.wms.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
        viewer.camera.setView({
          destination: Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.97, -5.73)
        })
      })
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.cesiumInstance = cesiumInstance
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ------------------------ | --------------- | ------- | ------------ |
| url | String\|Object | | `required` The URL of the WMS service. The URL supports the same keywords as the UrlTemplateImageryProvider. |
| layers | String | | `required` The layers to include, separated by commas. |
| parameters | Object | | `optional` Additional parameters to pass to the WMS server in the GetMap URL. |
| getFeatureInfoParameters | Object | | `optional` Additional parameters to pass to the WMS server in the GetFeatureInfo URL. |
| enablePickFeatures | Boolean | `true` | `optional` If true, WebMapServiceImageryProvider#pickFeatures will invoke the GetFeatureInfo operation on the WMS server and return the features included in the response. If false, WebMapServiceImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you know your WMS server does not support GetFeatureInfo or if you don't want this provider's features to be pickable. Note that this can be dynamically overridden by modifying the WebMapServiceImageryProvider#enablePickFeatures property. |
| getFeatureInfoFormats | Array | | `optional` The formats in which to try WMS GetFeatureInfo requests. |
| rectangle | Object | | `optional` The rectangle of the layer. **structure: { west: number, south: number, east: number, north: number }** |
| tilingScheme | Object | | `optional` The tiling scheme to use to divide the world into tiles. |
| ellipsoid | Object | | `optional` The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used. |
| tileWidth | Number | `256` | `optional` The width of each tile in pixels. |
| tileHeight | Number | `256` | `optional` The height of each tile in pixels. |
| minimumLevel | Number | `0` | `optional` The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems. |
| maximumLevel | Number | | `optional` The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. If not specified, there is no limit. |
| crs | String | | `optional` CRS specification, for use with WMS specification >= 1.3.0. |
| srs | String | | `optional` SRS specification, for use with WMS specification 1.1.0 or 1.1.1 |
| credit | Credit\| String | | `optional` A credit for the data source, which is displayed on the canvas. |
| subdomains | String\| Array | `'abc'` | `optional` The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain. |
| clock | Object | | `optional` A Clock instance that is used when determining the value for the time dimension. Required when options.times is specified. |
| times | Object | | `optional` TimeIntervalCollection with its data property being an object containing time dynamic dimension and their values. |

---

- Refer to the official document: **[WebMapServiceImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/WebMapServiceImageryProvider.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| errorEvent | TileProviderError | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider | Triggers when the provider is ready for use. |

---
