<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-28 14:52:50
 * @LastEditTime: 2021-10-29 17:05:00
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\en-US\overlays\vc-overlay-windmap.md
-->

## VcOverlayWindmap

Load a windmap overlay to viewer.

### Basic usage

Basic usage of VcOverlayWindmap component.

:::demo Use the `vc-overlay-windmap` tag to add a heatmap overlay to the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="ready">
    <vc-overlay-windmap ref="wind" v-if="windData !== null" :data="windData" :options="particleSystemOptions"></vc-overlay-windmap>
    <vc-layer-imagery :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
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
          <span>maxParticles</span>
          <el-slider v-model="particleSystemOptions.maxParticles" :min="1" :max="65536" :step="1"></el-slider>
          <span>particleHeight</span>
          <el-slider v-model="particleSystemOptions.particleHeight" :min="1" :max="10000" :step="1"></el-slider>
          <span>fadeOpacity</span>
          <el-slider v-model="particleSystemOptions.fadeOpacity" :min="0.90" :max="0.999" :step="0.001"></el-slider>
          <span>dropRate</span>
          <el-slider v-model="particleSystemOptions.dropRate" :min="0.0" :max="0.1" :step="0.001"></el-slider>
          <span>dropRateBump</span>
          <el-slider v-model="particleSystemOptions.dropRateBump" :min="0.0" :max="0.2" :step="0.001"></el-slider>
          <span>speedFactor</span>
          <el-slider v-model="particleSystemOptions.speedFactor" :min="0.5" :max="8" :step="0.1"></el-slider>
          <span>lineWidth</span>
          <el-slider v-model="particleSystemOptions.lineWidth" :min="0.01" :max="16" :step="0.01"></el-slider>
        </div>
      </el-col>
    </el-row>
  </div>
</el-row>

<script>
  export default {
    data() {
      return {
        windData: null,
        particleSystemOptions: {
          maxParticles: 64 * 64,
          particleHeight: 100.0,
          fadeOpacity: 0.996,
          dropRate: 0.003,
          dropRateBump: 0.01,
          speedFactor: 1.0,
          lineWidth: 4.0
        }
      }
    },
    methods: {
      ready() {
        this.loadNetCDF('https://zouyaoji.top/vue-cesium/SampleData/wind/demo.nc').then(data => {
          this.windData = data
        })
      },
      unload() {
        this.$refs.wind.unload()
      },
      load() {
        this.$refs.wind.load()
      },
      reload() {
        this.$refs.wind.reload()
      },
      async loadNetCDF(filePath) {
        let _this = this
        return new Promise(function (resolve) {
          var request = new XMLHttpRequest()
          request.open('GET', filePath)
          request.responseType = 'arraybuffer'
          request.onload = function () {
            var arrayToMap = function (array) {
              return array.reduce(function (map, object) {
                map[object.name] = object
                return map
              }, {})
            }
            var NetCDF = new netcdfjs(request.response)
            let data = {}
            var dimensions = arrayToMap(NetCDF.dimensions)
            data.dimensions = {}
            data.dimensions.lon = dimensions['lon'].size
            data.dimensions.lat = dimensions['lat'].size
            data.dimensions.lev = dimensions['lev'].size
            var variables = arrayToMap(NetCDF.variables)
            var uAttributes = arrayToMap(variables['U'].attributes)
            var vAttributes = arrayToMap(variables['V'].attributes)
            data.lon = {}
            data.lon.array = new Float32Array(NetCDF.getDataVariable('lon').flat())
            data.lon.min = Math.min(...data.lon.array)
            data.lon.max = Math.max(...data.lon.array)
            data.lat = {}
            data.lat.array = new Float32Array(NetCDF.getDataVariable('lat').flat())
            data.lat.min = Math.min(...data.lat.array)
            data.lat.max = Math.max(...data.lat.array)
            data.lev = {}
            data.lev.array = new Float32Array(NetCDF.getDataVariable('lev').flat())
            data.lev.min = Math.min(...data.lev.array)
            data.lev.max = Math.max(...data.lev.array)
            data.U = {}
            data.U.array = new Float32Array(NetCDF.getDataVariable('U').flat())
            data.U.min = uAttributes['min'].value
            data.U.max = uAttributes['max'].value
            data.V = {}
            data.V.array = new Float32Array(NetCDF.getDataVariable('V').flat())
            data.V.min = vAttributes['min'].value
            data.V.max = vAttributes['max'].value
            resolve(data)
          }
          request.send()
        })
      }
    }
  }
</script>
```

:::

### Props

| Name    | Type    | Default | Description                                                  |
| ------- | ------- | ------- | ------------------------------------------------------------ |
| data    | Object  |         | `required` Specify wind map data.                            |
| show    | Boolean | `true`  | `optional` Specify whether to display the wind map.          |
| options | Object  |         | `optional` Specify the rendering parameters of the wind map. |

:::tip

default options:

```js
{
  maxParticles: 64 * 64,
  particleHeight: 100.0,
  fadeOpacity: 0.996,
  dropRate: 0.003,
  dropRateBump: 0.01,
  speedFactor: 1.0,
  lineWidth: 4.0
}
```

:::

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- 3D-Wind-Field: [3D-Wind-Field](https://github.com/RaymanNg/3D-Wind-Field)
