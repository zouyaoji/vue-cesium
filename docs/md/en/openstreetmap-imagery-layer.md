<template lang="markdown">

# OpenStreetMapImageryLayer

`openstreetmap-imagery-layer`Provides tiled imagery hosted by Mapbox.

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|url|String|`https://a.tile.openstreetmap.org`|`optional`The OpenStreetMap server url.|
|fileExtension|String|'png'|`required`The file extension for images on the server.|
|rectangle|Object||`optional`The rectangle of the layer.|
|minimumLevel|Number|0|`optional`The minimum level-of-detail supported by the imagery provider.|
|maximumLevel|Number||`optional`The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.|
|ellipsoid|String||`optional`The ellipsoid. If not specified, the WGS84 ellipsoid is used.|
|credit|String|'MapQuest, Open Street Map and contributors, CC-BY-SA'|`optional`A credit for the data source, which is displayed on the canvas.|
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

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when OpenStreetMapImageryLayer is ready. It returns a core class of Cesium, a viewer instance.|
|errorEvent|TileProviderError|Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.|

## Examples

### MapboxImageryLayer

#### Code

```html
<template>
  <div class="viewer">
    <div class="demo-tool">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>switch url</span>
      <md-select v-model="url" placeholder="切换影像">
        <md-option
          v-for="item in options"
          :key="item.value"
          :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
    <cesium-viewer @ready="ready">
      <openstreetmap-imagery-layer :url="url" :alpha="alpha" :brightness="brightness"
        :contrast="contrast" />
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'https://a.tile.openstreetmap.org',
        options: [{
          value: 'https://a.tile.openstreetmap.org',
          label: 'openstreetmap1'
        }, {
          value: 'https://stamen-tiles.a.ssl.fastly.net/toner/',
          label: 'openstreetmap2'
        }],
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
```

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>switch url</span>
        <md-select v-model="url" placeholder="切换影像">
          <md-option
            v-for="item in options"
            :key="item.value"
            :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
      <cesium-viewer @ready="ready">
        <openstreetmap-imagery-layer :url="url" :alpha="alpha" :brightness="brightness"
          :contrast="contrast" />
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          url: 'https://a.tile.openstreetmap.org',
          options: [{
            value: 'https://a.tile.openstreetmap.org',
            label: 'openstreetmap1'
          }, {
            value: 'https://stamen-tiles.a.ssl.fastly.net/toner/',
            label: 'openstreetmap2'
          }],
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
</doc-preview>