# wms-imagery-provider

`wms-imagery-provider` Loads the image layer of the WMS service as a `imagery-layer` subcomponent.

## Example

### add wms-imagery to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
       <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <wms-imagery-provider :url="url" :layers="layers" :parameters="parameters"></wms-imagery-provider>
       </imagery-layer>
      </cesium-viewer>
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>switch layer</span>
        <md-select v-model="layers" placeholder="switch layer" @selected="mdSelected">
          <md-option
            v-for="item in options"
            :key="item.value"
            :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          url: 'https://www.ncei.noaa.gov/thredds/wms/gfs-004-files/201809/20180916/gfs_4_20180916_0000_000.grb2',
          layers: 'Precipitable_water_entire_atmosphere_single_layer',
          parameters: {
            ColorScaleRange: '0.1,66.8'
          },
          alpha: 1,
          brightness: 1,
          contrast: 1,
          options: [{
            label: 'WMS:Rainfall',
            value: 'Precipitable_water_entire_atmosphere_single_layer'
          }, {
            label: 'WMS:Air Pressure',
            value: 'Pressure_surface'
          }]
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.cesiumInstance = cesiumInstance
        },
        mdSelected (value) {
          if (value === 'Precipitable_water_entire_atmosphere_single_layer') {
            this.parameters = {
              ColorScaleRange: '0.1,66.8'
            }
          } else if (value === 'Pressure_surface') {
            this.parameters = {
              ColorScaleRange: '51640,103500'
            }
          }
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready">
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <wms-imagery-provider :url="url" :layers="layers" :parameters="parameters"></wms-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
    <div class="demo-tool">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>switch layer</span>
      <md-select v-model="layers" placeholder="switch layer" @selected="mdSelected">
        <md-option v-for="item in options" :key="item.value" :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: 'https://www.ncei.noaa.gov/thredds/wms/gfs-004-files/201809/20180916/gfs_4_20180916_0000_000.grb2',
        layers: 'Precipitable_water_entire_atmosphere_single_layer',
        parameters: {
          ColorScaleRange: '0.1,66.8'
        },
        alpha: 1,
        brightness: 1,
        contrast: 1,
        options: [
          {
            label: 'WMS:Rainfall',
            value: 'Precipitable_water_entire_atmosphere_single_layer'
          },
          {
            label: 'WMS:Air Pressure',
            value: 'Pressure_surface'
          }
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.cesiumInstance = cesiumInstance
      },
      mdSelected(value) {
        if (value === 'Precipitable_water_entire_atmosphere_single_layer') {
          this.parameters = {
            ColorScaleRange: '0.1,66.8'
          }
        } else if (value === 'Pressure_surface') {
          this.parameters = {
            ColorScaleRange: '51640,103500'
          }
        }
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

- Reference official document [WebMapServiceImageryProvider](https://cesiumjs.org/Cesium/Build/Documentation/WebMapServiceImageryProvider.html)

## Events

| name       | parameter         | description                                                                                                                                                                                                                                                |
| ---------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ready      | {Cesium, viewer}  | Triggers when TiandituImageryLayer is ready. It returns a core class of Cesium, a viewer instance.                                                                                                                                                         |
| errorEvent | TileProviderError | Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError. |
