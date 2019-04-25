# ImageryLayer

`imagery-layer`can be loaded into the viewer and needs to be used in conjunction with the imagery provider.

## Examples

### add a ImageryLayer with mapbox-imagery-provider to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
       <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <mapbox-imagery-provider :mapId="mapId"></mapbox-imagery-provider>
       </imagery-layer>
      </cesium-viewer>
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>switch url</span>
        <md-select v-model="mapId" placeholder="switch url">
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
          mapId: 'mapbox.streets',
          options: [{
            value: 'mapbox.satellite',
            label: 'satellite'
          }, {
            value: 'mapbox.streets',
            label: 'streets'
          }],
          alpha: 1,
          brightness: 1,
          contrast: 1
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          // ...
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
      <mapbox-imagery-provider :mapId="mapId"></mapbox-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
    <div class="demo-tool">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      <span>switch url</span>
      <md-select v-model="mapId" placeholder="switch url">
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
        mapId: 'mapbox.streets',
        options: [{
          value: 'mapbox.satellite',
          label: 'satellite'
        }, {
          value: 'mapbox.streets',
          label: 'streets'
        }],
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        // ...
      }
    }
  }
</script>
```

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|alpha|Number\|function|1.0|`optional`The alpha blending value of this layer, from 0.0 to 1.0. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the alpha is required, and it is expected to return the alpha value to use for the tile.|
|brightness|Number\|function|1.0|`optional`The brightness of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 makes the imagery darker while greater than 1.0 makes it brighter. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the brightness is required, and it is expected to return the brightness value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|contrast|Number\|function|1.0|`optional`The contrast of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the contrast while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the contrast is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|hue|Number\|function|0.0|`optional`The hue of this layer. 0.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the hue is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|saturation|Number\|function|1.0|`optional`The saturation of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the saturation while greater than 1.0 increases it. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the saturation is required, and it is expected to return the contrast value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|gamma|Number\|function|1.0|`optional`The gamma correction to apply to this layer. 1.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the gamma is required, and it is expected to return the gamma value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.|
|show|Boolean|true|`optional`True if the layer is shown; otherwise, false.|
|splitDirection|Number||`optional`The ImagerySplitDirection split to apply to this layer.|
|minificationFilter|TextureMinificationFilter|TextureMinificationFilter.LINEAR|`optional` The texture minification filter to apply to this layer. Possible values are TextureMinificationFilter.LINEAR and TextureMinificationFilter.NEAREST.|
|magnificationFilter|TextureMagnificationFilter|TextureMagnificationFilter.LINEAR|`optional` The texture minification filter to apply to this layer. Possible values are TextureMagnificationFilter.LINEAR and TextureMagnificationFilter.NEAREST.|
|show|Boolean|true|`optional` True if the layer is shown; otherwise, false.|
|maximumAnisotropy|Number|maximum supported|`optional` The maximum anisotropy level to use for texture filtering. If this parameter is not specified, the maximum anisotropy supported by the WebGL stack will be used. Larger values make the imagery look better in horizon views.|
|minimumTerrainLevel|Number||`optional`The minimum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.|
|maximumTerrainLevel|Number||`optional`The maximum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.|
cutoutRectangle|Rectangle||`optional` Cartographic rectangle for cutting out a portion of this ImageryLayer.|

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when ImageryLayer is ready. It returns a core class of Cesium, a viewer instance.|
