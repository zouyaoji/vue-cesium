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
```

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
---

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when TiandituImageryLayer is ready. It returns a core class of Cesium, a viewer instance.|
|errorEvent|TileProviderError|Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.|
