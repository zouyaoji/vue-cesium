# VcWindMap

The `vc-windmap` component is used to load the wind direction map, it is carried from the open source project [3D-Wind-Field](https://github.com/RaymanNg/3D-Wind-Field).

## Example

### Load VcWindMap

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer scene3DOnly animation timeline @ready="ready">
        <vc-layer-imagery>
          <vc-provider-imagery-tile-single :url="urlLayer"></vc-provider-imagery-tile-single>
        </vc-layer-imagery>
        <vc-windmap ref="windmap" :data="windData" :particleSystemOptions="particleSystemOptions"> </vc-windmap>
      </vc-viewer>
      <div class="demo-tool">
        <span>maxParticles</span>
        <vue-slider v-model="particleSystemOptions.maxParticles" :min="1" :max="65536" :interval="1"></vue-slider>
        <span>particleHeight</span>
        <vue-slider v-model="particleSystemOptions.particleHeight" :min="1" :max="10000" :interval="1"></vue-slider>
        <span>fadeOpacity</span>
        <vue-slider v-model="particleSystemOptions.fadeOpacity" :min="0.90" :max="0.999" :interval="0.001"></vue-slider>
        <span>dropRate</span>
        <vue-slider v-model="particleSystemOptions.dropRate" :min="0.0" :max="0.1" :interval="0.001"></vue-slider>
        <span>dropRateBump</span>
        <vue-slider v-model="particleSystemOptions.dropRateBump" :min="0.0" :max="0.2" :interval="0.001"></vue-slider>
        <span>speedFactor</span>
        <vue-slider v-model="particleSystemOptions.speedFactor" :min="0.5" :max="100" :interval="0.1"></vue-slider>
        <span>lineWidth</span>
        <vue-slider v-model="particleSystemOptions.lineWidth" :min="0.01" :max="16" :interval="0.01"></vue-slider>
        <span>switch data</span>
        <md-select v-model="data" placeholder="switchData" @selected="switchData">
          <md-option v-for="item in options" :key="item.value" :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
    </div>
  </template>
  <script>
    const NetCDFReader = require('netcdfjs')
    export default {
      data() {
        return {
          urlLayer: './statics/SampleData/worldimage.jpg',
          urlNetCDF: './statics/SampleData/windData/demo.nc',
          windData: {},
          options: [
            {
              label: 'Global Data',
              value: 1
            },
            {
              label: 'China Data',
              value: 2
            }
          ],
          data: 0,
          particleSystemOptions: {
            particlesTextureSize: 128,
            maxParticles: 128 * 128,
            particleHeight: 100.0,
            fadeOpacity: 0.996,
            dropRate: 0.003,
            dropRateBump: 0.01,
            speedFactor: 4.0,
            lineWidth: 4.0
          }
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          this.data = 1
          this.switchData(1)
        },
        switchData(val) {
          const { Cesium, viewer } = this.cesiumInstance
          let _this = this
          if (val === 1) {
            this.loadNetCDF(this.urlNetCDF).then((data) => {
              _this.windData = data
            })
          } else if (val === 2) {
            Cesium.Resource.fetchJson({ url: './statics/SampleData/windData/wind.json' }).then((data) => {
              data.lat.array = new Float32Array(data.lon.array)
              data.lat.array = new Float32Array(data.lat.array)
              data.lev.array = new Float32Array(data.lev.array)
              data.U.array = new Float32Array(data.U.array)
              data.V.array = new Float32Array(data.V.array)
              _this.windData = data
            })
          }
        },
        async loadNetCDF(filePath) {
          let _this = this
          return new Promise(function(resolve) {
            var request = new XMLHttpRequest()
            request.open('GET', filePath)
            request.responseType = 'arraybuffer'
            request.onload = function() {
              var arrayToMap = function(array) {
                return array.reduce(function(map, object) {
                  map[object.name] = object
                  return map
                }, {})
              }
              var NetCDF = new NetCDFReader(request.response)
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
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer scene3DOnly animation timeline @ready="ready">
      <vc-layer-imagery>
        <vc-provider-imagery-tile-single :url="urlLayer"></vc-provider-imagery-tile-single>
      </vc-layer-imagery>
      <vc-windmap ref="windmap" :data="windData" :particleSystemOptions="particleSystemOptions"> </vc-windmap>
    </vc-viewer>
    <div class="demo-tool">
      <span>maxParticles</span>
      <vue-slider v-model="particleSystemOptions.maxParticles" :min="1" :max="65536" :interval="1"></vue-slider>
      <span>particleHeight</span>
      <vue-slider v-model="particleSystemOptions.particleHeight" :min="1" :max="10000" :interval="1"></vue-slider>
      <span>fadeOpacity</span>
      <vue-slider v-model="particleSystemOptions.fadeOpacity" :min="0.90" :max="0.999" :interval="0.001"></vue-slider>
      <span>dropRate</span>
      <vue-slider v-model="particleSystemOptions.dropRate" :min="0.0" :max="0.1" :interval="0.001"></vue-slider>
      <span>dropRateBump</span>
      <vue-slider v-model="particleSystemOptions.dropRateBump" :min="0.0" :max="0.2" :interval="0.001"></vue-slider>
      <span>speedFactor</span>
      <vue-slider v-model="particleSystemOptions.speedFactor" :min="0.5" :max="100" :interval="0.1"></vue-slider>
      <span>lineWidth</span>
      <vue-slider v-model="particleSystemOptions.lineWidth" :min="0.01" :max="16" :interval="0.01"></vue-slider>
      <span>switch data</span>
      <md-select v-model="data" placeholder="switchData" @selected="switchData">
        <md-option v-for="item in options" :key="item.value" :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
  </div>
</template>
<script>
  const NetCDFReader = require('netcdfjs')
  export default {
    data() {
      return {
        urlLayer: './statics/SampleData/worldimage.jpg',
        urlNetCDF: './statics/SampleData/windData/demo.nc',
        windData: {},
        options: [
          {
            label: 'Global Data',
            value: 1
          },
          {
            label: 'China Data',
            value: 2
          }
        ],
        data: 0,
        particleSystemOptions: {
          particlesTextureSize: 128,
          maxParticles: 128 * 128,
          particleHeight: 100.0,
          fadeOpacity: 0.996,
          dropRate: 0.003,
          dropRateBump: 0.01,
          speedFactor: 4.0,
          lineWidth: 4.0
        }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        this.data = 1
        this.switchData(1)
      },
      switchData(val) {
        const { Cesium, viewer } = this.cesiumInstance
        let _this = this
        if (val === 1) {
          this.loadNetCDF(this.urlNetCDF).then((data) => {
            _this.windData = data
          })
        } else if (val === 2) {
          Cesium.Resource.fetchJson({ url: './statics/SampleData/windData/wind.json' }).then((data) => {
            data.lat.array = new Float32Array(data.lon.array)
            data.lat.array = new Float32Array(data.lat.array)
            data.lev.array = new Float32Array(data.lev.array)
            data.U.array = new Float32Array(data.U.array)
            data.V.array = new Float32Array(data.V.array)
            _this.windData = data
          })
        }
      },
      async loadNetCDF(filePath) {
        let _this = this
        return new Promise(function(resolve) {
          var request = new XMLHttpRequest()
          request.open('GET', filePath)
          request.responseType = 'arraybuffer'
          request.onload = function() {
            var arrayToMap = function(array) {
              return array.reduce(function(map, object) {
                map[object.name] = object
                return map
              }, {})
            }
            var NetCDF = new NetCDFReader(request.response)
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

## Instance Properties

| name                  | type   | default | description                           |
| --------------------- | ------ | ------- | ------------------------------------- |
| data                  | Object |         | `required` set windmap data.          |
| particleSystemOptions | Object |         | `optional` set particleSystemOptions. |

---

## Events

| name  | parameter        | description                                                                                 |
| ----- | ---------------- | ------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when CesiumWindMap is ready. It returns a core class of Cesium, a viewer instance. |

## Vue Methods

| name    | parameter | description      |
| ------- | --------- | ---------------- |
| destroy |           | destroy windmap. |

## Instructions

- Reference from [3D-Wind-Field](https://github.com/RaymanNg/3D-Wind-Field).
