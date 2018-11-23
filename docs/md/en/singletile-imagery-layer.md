<template lang="markdown">

# SingleTileImageryLayer

`singletile-imagery-layer`Use this layer component to add a single image as the image basemap. It only supports latitude and longitude projection. The aspect ratio of the image is preferably 2:1, otherwise there will be stretching.

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|url|String||`required`The url for the tile.|
|rectangle|Object||`optional`The rectangle, in radians, covered by the image.|
|credit|String||`optional`A credit for the data source, which is displayed on the canvas.|
|ellipsoid|Object||`optional`The ellipsoid. If not specified, the WGS84 ellipsoid is used.|
|alpha|Number\|function|1.0|`optional`The alpha blending value of this layer, from 0.0 to 1.0. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the alpha is required, and it is expected to return the alpha value to use for the tile.|
|brightness|Number\|function|1.0|`optional`The brightness of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 makes the imagery darker while greater than 1.0 makes it brighter. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the brightness is required, and it is expected to return the brightness value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|contrast|Number\|function|1.0|`optional`The contrast of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the contrast while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the contrast is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|hue|Number\|function|0.0|`optional`The hue of this layer. 0.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the hue is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|saturation|Number\|function|1.0|`optional`The saturation of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the saturation while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the saturation is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|gamma|Number\|function|1.0|`optional`The gamma correction to apply to this layer. 1.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the gamma is required, and it is expected to return the gamma value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|show|Boolean|true|`optional`True if the layer is shown; otherwise, false.|
|splitDirection|Number||`optional`The ImagerySplitDirection split to apply to this layer.|
|minimumTerrainLevel|Number||`optional`The minimum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.|
|maximumTerrainLevel|Number||`optional`The maximum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.|
---

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when SingleTileImageryLayer is ready. It returns a core class of Cesium, a viewer instance.|
|errorEvent|TileProviderError|Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.|

## 示例

### 单文件影像图层

#### 代码

```html
<template>
  <div class="viewer">
    <div style="position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
    </div>
    <cesium-viewer @ready="ready">
      <singletile-imagery-layer :url="url" :alpha="alpha" :brightness="brightness"
        :contrast="contrast" />
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/worldimage.jpg',
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
```

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <div style="position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      </div>
      <cesium-viewer @ready="ready">
        <singletile-imagery-layer :url="url" :alpha="alpha" :brightness="brightness"
          :contrast="contrast" />
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/worldimage.jpg',
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