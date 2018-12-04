# OpenStreetMapImageryProvider

`openstreetmap-imagery-provider`Creates a UrlTemplateImageryProvider instance that provides tiled imagery hosted by OpenStreetMap or another provider of Slippy tiles. The default url connects to OpenStreetMap's volunteer-run servers, so you must conform to their Tile Usage Policy.

## Examples

### add a OpenStreetMapImageryProvider layer to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <openstreetmap-imagery-provider :url="url"></openstreetmap-imagery-provider>
        </imagery-layer>
      </cesium-viewer>
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>switch url</span>
        <md-select v-model="url" placeholder="switch url">
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

#### Code

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready">
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <openstreetmap-imagery-provider :url="url"></openstreetmap-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
    <div class="demo-tool">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>switch url</span>
      <md-select v-model="url" placeholder="switch url">
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

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when OpenStreetMapImageryProvider is ready. It returns a core class of Cesium, a viewer instance.|
|errorEvent|TileProviderError|Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.|
