# CesiumWindMap

`cesium-windmap` CesiumWindMap

## Example

### Add a CesiumWindMap to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer scene3DOnly animation timeline @ready="ready">
        <imagery-layer>
          <singletile-imagery-provider :url="urlLayer"></singletile-imagery-provider>
        </imagery-layer>
        <cesium-windmap ref="windmap" :data="windData" :particleSystemOptions="particleSystemOptions">
        </cesium-windmap>
      </cesium-viewer>
      <div class="demo-tool">
        <span>maxParticles</span>
        <vue-slider v-model="particleSystemOptions.maxParticles" :min="1" :max="65536" :interval="1"></vue-slider>
        <span>particleHeight</span>
        <vue-slider v-model="particleSystemOptions.particleHeight" :min="1" :max="10000" :interval="1" ></vue-slider>
        <span>fadeOpacity</span>
        <vue-slider v-model="particleSystemOptions.fadeOpacity" :min="0.90" :max="0.999" :interval="0.001"></vue-slider>
        <span>dropRate</span>
        <vue-slider v-model="particleSystemOptions.dropRate" :min="0.0" :max="0.1" :interval="0.001"></vue-slider>
        <span>dropRateBump</span>
        <vue-slider v-model="particleSystemOptions.dropRateBump" :min="0.0" :max="0.2" :interval="0.001" ></vue-slider>
        <span>speedFactor</span>
        <vue-slider v-model="particleSystemOptions.speedFactor" :min="0.5" :max="100" :interval="0.1"></vue-slider>
        <span>lineWidth</span>
        <vue-slider v-model="particleSystemOptions.lineWidth" :min="0.01" :max="16" :interval="0.01"></vue-slider>
        <span>switch data</span>
        <md-select v-model="data" placeholder="切换数据" @selected="switchData">
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
    const NetCDFReader = require('netcdfjs')
    export default {
      data () {
        return {
          urlLayer: './statics/SampleData/worldimage.jpg',
          urlNetCDF: './statics/SampleData/windData/demo.nc',
          windData: {},
          options: [{
            label: 'Global Data',
            value: 1
          }, {
            label: 'China Data',
            value: 2
          }],
          data: 0,
          particleSystemOptions: {
            maxParticles: 128 * 128,
            particleHeight: 100.0,
            fadeOpacity: 0.996,
            dropRate: 0.003,
            dropRateBump: 0.01,
            speedFactor: 4.0,
            lineWidth: 4.0
          },
          colorTableParam: {
            'ncolors': 16,
            'colorTable': [
              0.015686,
              0.054902,
              0.847059,
              0.12549,
              0.313725,
              1.0,
              0.254902,
              0.588235,
              1.0,
              0.427451,
              0.756863,
              1.0,
              0.52549,
              0.85098,
              1.0,
              0.611765,
              0.933333,
              1.0,
              0.686275,
              0.960784,
              1.0,
              0.807843,
              1.0,
              1.0,
              1.0,
              0.996078,
              0.278431,
              1.0,
              0.921569,
              0.0,
              1.0,
              0.768627,
              0.0,
              1.0,
              0.564706,
              0.0,
              1.0,
              0.282353,
              0.0,
              1.0,
              0.0,
              0.0,
              0.835294,
              0.0,
              0.0,
              0.619608,
              0.0,
              0.0
            ]
          }
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          this.data = 2
          this.switchData(2)
        },
        switchData (val) {
          const {Cesium, viewer} = this.cesiumInstance
          let _this = this
          if (val === 1){
            this.loadNetCDF(this.urlNetCDF).then((data)=>{
              data.colorTable = this.loadColorTable()
              _this.windData = data
            })
          } else if (val === 2){
            Cesium.Resource.fetchJson({ url: './statics/data/wind.json' }).then((data) => {
              data.colorTable = this.loadColorTable()
              data.lat.array = new Float32Array(data.lon.array)
              data.lat.array = new Float32Array(data.lat.array)
              data.lev.array = new Float32Array(data.lev.array)
              data.U.array = new Float32Array(data.U.array)
              data.V.array = new Float32Array(data.V.array)
              _this.windData = data
            })
          }
        },
        loadColorTable (filePath) {
          var json = this.colorTableParam
          var colorNum = json['ncolors']
          var colorTable = json['colorTable']
          var colorsArray = new Float32Array(3 * colorNum)
          for (var i = 0; i < colorNum; i++) {
            colorsArray[3 * i] = colorTable[3 * i]
            colorsArray[3 * i + 1] = colorTable[3 * i + 1]
            colorsArray[3 * i + 2] = colorTable[3 * i + 2]
          }
          let result = {}
          result.colorNum = colorNum
          result.array = colorsArray
          return result
        },
        async loadNetCDF (filePath) {
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
    <cesium-viewer scene3DOnly animation timeline @ready="ready">
      <imagery-layer>
        <singletile-imagery-provider :url="urlLayer"></singletile-imagery-provider>
      </imagery-layer>
      <cesium-windmap ref="windmap" :data="windData" :particleSystemOptions="particleSystemOptions">
      </cesium-windmap>
    </cesium-viewer>
    <div class="demo-tool">
      <span>maxParticles</span>
      <vue-slider v-model="particleSystemOptions.maxParticles" :min="1" :max="65536" :interval="1"></vue-slider>
      <span>particleHeight</span>
      <vue-slider v-model="particleSystemOptions.particleHeight" :min="1" :max="10000" :interval="1" ></vue-slider>
      <span>fadeOpacity</span>
      <vue-slider v-model="particleSystemOptions.fadeOpacity" :min="0.90" :max="0.999" :interval="0.001"></vue-slider>
      <span>dropRate</span>
      <vue-slider v-model="particleSystemOptions.dropRate" :min="0.0" :max="0.1" :interval="0.001"></vue-slider>
      <span>dropRateBump</span>
      <vue-slider v-model="particleSystemOptions.dropRateBump" :min="0.0" :max="0.2" :interval="0.001" ></vue-slider>
      <span>speedFactor</span>
      <vue-slider v-model="particleSystemOptions.speedFactor" :min="0.5" :max="100" :interval="0.1"></vue-slider>
      <span>lineWidth</span>
      <vue-slider v-model="particleSystemOptions.lineWidth" :min="0.01" :max="16" :interval="0.01"></vue-slider>
      <span>switch data</span>
      <md-select v-model="data" placeholder="切换数据" @selected="switchData">
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
  const NetCDFReader = require('netcdfjs')
  export default {
    data () {
      return {
        urlLayer: './statics/SampleData/worldimage.jpg',
        urlNetCDF: './statics/SampleData/windData/demo.nc',
        windData: {},
        options: [{
          label: 'Global Data',
          value: 1
        }, {
          label: 'China Data',
          value: 2
        }],
        data: 0,
        particleSystemOptions: {
          maxParticles: 128 * 128,
          particleHeight: 100.0,
          fadeOpacity: 0.996,
          dropRate: 0.003,
          dropRateBump: 0.01,
          speedFactor: 4.0,
          lineWidth: 4.0
        },
        colorTableParam: {
          'ncolors': 16,
          'colorTable': [
            0.015686,
            0.054902,
            0.847059,
            0.12549,
            0.313725,
            1.0,
            0.254902,
            0.588235,
            1.0,
            0.427451,
            0.756863,
            1.0,
            0.52549,
            0.85098,
            1.0,
            0.611765,
            0.933333,
            1.0,
            0.686275,
            0.960784,
            1.0,
            0.807843,
            1.0,
            1.0,
            1.0,
            0.996078,
            0.278431,
            1.0,
            0.921569,
            0.0,
            1.0,
            0.768627,
            0.0,
            1.0,
            0.564706,
            0.0,
            1.0,
            0.282353,
            0.0,
            1.0,
            0.0,
            0.0,
            0.835294,
            0.0,
            0.0,
            0.619608,
            0.0,
            0.0
          ]
        }
      }
    },
    methods: {
      ready (cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        this.data = 2
        this.switchData(2)
      },
      switchData (val) {
        const {Cesium, viewer} = this.cesiumInstance
        let _this = this
        if (val === 1){
          this.loadNetCDF(this.urlNetCDF).then((data)=>{
            data.colorTable = this.loadColorTable()
            _this.windData = data
          })
        } else if (val === 2){
          Cesium.Resource.fetchJson({ url: './statics/data/wind.json' }).then((data) => {
            data.colorTable = this.loadColorTable()
            data.lat.array = new Float32Array(data.lon.array)
            data.lat.array = new Float32Array(data.lat.array)
            data.lev.array = new Float32Array(data.lev.array)
            data.U.array = new Float32Array(data.U.array)
            data.V.array = new Float32Array(data.V.array)
            _this.windData = data
          })
        }
      },
      loadColorTable (filePath) {
        var json = this.colorTableParam
        var colorNum = json['ncolors']
        var colorTable = json['colorTable']
        var colorsArray = new Float32Array(3 * colorNum)
        for (var i = 0; i < colorNum; i++) {
          colorsArray[3 * i] = colorTable[3 * i]
          colorsArray[3 * i + 1] = colorTable[3 * i + 1]
          colorsArray[3 * i + 2] = colorTable[3 * i + 2]
        }
        let result = {}
        result.colorNum = colorNum
        result.array = colorsArray
        return result
      },
      async loadNetCDF (filePath) {
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

|name|type|default|description|
|------|-----|-----|----|
|data|Object||`required` set windmap data.|
|particleSystemOptions|Object||`optional` set particleSystemOptions.|
---

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when CesiumWindMap is ready. It returns a core class of Cesium, a viewer instance.|

## Vue Methods

|name|parameter|description|
|------|----|----|
|destroy||destroy windmap.|

## Instructions

- Reference from [3D-Wind-Field](https://github.com/RaymanNg/3D-Wind-Field).
