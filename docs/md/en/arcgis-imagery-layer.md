<template lang="markdown">

# ArcGISImageryLayer

`arcgis-imagery-layer`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|url|String||`required`The URL of the ArcGIS MapServer service.|
|token|String||`optional`The ArcGIS token used to authenticate with the ArcGIS MapServer service.|
|tileDiscardPolicy|Object||`optional`The policy that determines if a tile is invalid and should be discarded.|
|proxy|Cesium.Proxy|20|`optional`A proxy to use for requests. This object is expected to have a getURL function which returns the proxied URL, if needed.|
|usePreCachedTilesIfAvailable|Boolean|true|`optional`If true, the server's pre-cached tiles are used if they are available. If false, any pre-cached tiles are ignored and the 'export' service is used.|
|layers|String||`optional`A comma-separated list of the layers to show, or undefined if all layers should be shown.|
|enablePickFeatures|Cesium.Proxy|20|`optional`If true, ArcGisMapServerImageryProvider#pickFeatures will invoke the Identify service on the MapServer and return the features included in the response. If false, ArcGisMapServerImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you don't want this provider's features to be pickable. Can be overridden by setting the ArcGisMapServerImageryProvider#enablePickFeatures property on the object.|
|tilingScheme|Cesium.Proxy|20|`optional`The tiling scheme to use to divide the world into tiles. This parameter is ignored when accessing a tiled server.|
|ellipsoid|Cesium.TilingScheme|20|`optional`The ellipsoid. If the tilingScheme is specified and used, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.|
|tileWidth|Number|256|`optional`The width of each tile in pixels. This parameter is ignored when accessing a tiled server.|
|tileHeight|Number|256|`optional`The height of each tile in pixels. This parameter is ignored when accessing a tiled server.|
|minimumLevel|Number|0|`optional`The minimum tile level to request, or undefined if there is no minimum. This parameter is ignored when accessing a tiled server.|
|maximumLevel|Number|20|`optional`The maximum tile level to request, or undefined if there is no maximum. This parameter is ignored when accessing a tiled server.|
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
|maximumTerrainLevel|Number||`optional`The maximum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.|
---

## Examples

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when ArcGISImageryLayer is ready. It returns a core class of Cesium, a viewer instance.|
|errorEvent|TileProviderError|Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.|

## 示例

### ArcGIS MapServer service

#### Code

```html
<template>
  <div class="viewer">
    <div style="position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white">
      <span>alpha</span>
      <md-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover" ></md-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>change url</span>
      <md-select v-model="url" placeholder="请选择服务">
        <md-option
          v-for="item in options"
          :key="item.value"
          :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
    <cesium-viewer>
      <arcgis-imagery-layer :url="url" :alpha="alpha" :brightness="brightness"
      :contrast="contrast" @ready="ready" />
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: [{
          value: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
          label: 'World_Imagery'
        }, {
          value: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
          label: 'World_Street_Map'
        }],
        url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
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

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <div style="position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white">
        <span>alpha</span>
        <md-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover"  :speed="0.1"></md-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>change url</span>
        <md-select v-model="url" placeholder="请选择服务">
          <md-option
            v-for="item in options"
            :key="item.value"
            :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
      <cesium-viewer>
       <arcgis-imagery-layer :url="url" :alpha="alpha" :brightness="brightness" 
        :contrast="contrast" @ready="ready" />
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          options: [{
            value: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
            label: 'World_Imagery'
          }, {
            value: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
            label: 'World_Street_Map'
          }],
          url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
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