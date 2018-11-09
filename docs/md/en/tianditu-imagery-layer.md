<template lang="markdown">

# TiandituImageryLayer

`TiandituImageryLayer`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|mapStyle|String|img_w|`optional`TiandituImageryLayer Type.|
|rectangle|Cesium.Rectangle||`optional`The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider.|
|alpha|Number\|function|1.0|`optional`The alpha blending value of this layer, from 0.0 to 1.0. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the alpha is required, and it is expected to return the alpha value to use for the tile.|
|brightness|Number\|function|1.0|`optional`The brightness of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 makes the imagery darker while greater than 1.0 makes it brighter. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the brightness is required, and it is expected to return the brightness value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|contrast|Number\|function|1.0|`optional`The contrast of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the contrast while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the contrast is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|hue|Number\|function|0.0|`optional`The hue of this layer. 0.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the hue is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|saturation|Number\|function|1.0|`optional`The saturation of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the saturation while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the saturation is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|gamma|Number\|function|1.0|`optional`The gamma correction to apply to this layer. 1.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the gamma is required, and it is expected to return the gamma value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|show|Boolean|true|`optional`True if the layer is shown; otherwise, false.|
|splitDirection|Number||`optional`The ImagerySplitDirection split to apply to this layer.|
|minimumTerrainLevel|Number||`optional`The minimum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.|
|maximumTerrainLevel|Number||`optional`The maximum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.||

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer, originInstance}|Triggers when ArcGISImageryLayer is ready. It returns a core class of Cesium, a viewer instance.|

## Examples

### TiandituImageryLayer

#### Code

```html
<template>
  <div class="viewer">
    <div style="position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white">
      <span>alpha</span>
      <el-slider v-model="alpha" :min="0" :max="1" :step="0.01" ></el-slider>
      <span>brightness</span>
      <el-slider v-model="brightness" :min="0" :max="3" :step="0.01" ></el-slider>
      <span>contrast</span>
      <el-slider v-model="contrast" :min="0" :max="3" :step="0.01" ></el-slider>
      <span>change mapStyle</span>
      <el-select v-model="mapStyle" placeholder="change mapStyle">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <cesium-viewer>
      <tianditu-imagery-layer :mapStyle="mapStyle" :alpha="alpha" :brightness="brightness" 
      :contrast="contrast" @ready="ready" />
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: [{
          value: 'img_c',
          label: '天地图全球影像地图服务（经纬度投影）'
        }, {
          value: 'vec_c',
          label: '天地图全球矢量地图服务（经纬度投影）'
        }],
        mapStyle: 'vec_c',
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
      }
    }
  }
</script>

<style>
.viewer {
  width: 100%;
  height: 400px;
}
</style>
```

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <div style="position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white">
        <span>alpha</span>
        <el-slider v-model="alpha" :min="0" :max="1" :step="0.01" ></el-slider>
        <span>brightness</span>
        <el-slider v-model="brightness" :min="0" :max="3" :step="0.01" ></el-slider>
        <span>contrast</span>
        <el-slider v-model="contrast" :min="0" :max="3" :step="0.01" ></el-slider>
        <span>mapStyle</span>
        <el-select v-model="mapStyle" placeholder="mapStyle">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <cesium-viewer>
        <tianditu-imagery-layer :mapStyle="mapStyle" :alpha="alpha" :brightness="brightness" 
        :contrast="contrast" @ready="ready" />
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          options: [{
            value: 'img_c',
            label: '天地图全球影像地图服务（经纬度投影）'
          }, {
            value: 'vec_c',
            label: '天地图全球矢量地图服务（经纬度投影）'
          }],
          mapStyle: 'vec_c',
          alpha: 1,
          brightness: 1,
          contrast: 1
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
        }
      }
    }
  </script>

  <style scoped>
  .viewer {
    width: 100%;
    height: 400px;
  }
  </style>
</doc-preview>