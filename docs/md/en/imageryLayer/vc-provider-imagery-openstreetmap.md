# OpenStreetMapImageryProvider

the `vc-provider-imagery-openstreetmap`component is used to load tiled imagery hosted by OpenStreetMap.

## Example

### Load an imagerylayer with OpenStreetMapImageryProvider

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-openstreetmap :url="url"></vc-provider-imagery-openstreetmap>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
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
    <vc-viewer @ready="ready">
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-openstreetmap :url="url"></vc-provider-imagery-openstreetmap>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>switch url</span>
      <md-select v-model="url" placeholder="switch url">
        <md-option v-for="item in options" :key="item.value" :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: 'https://a.tile.openstreetmap.org',
        options: [
          {
            value: 'https://a.tile.openstreetmap.org',
            label: 'openstreetmap1'
          },
          {
            value: 'https://stamen-tiles.a.ssl.fastly.net/toner/',
            label: 'openstreetmap2'
          }
        ],
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ------------- | ------ | ------- | -------------- |
| url | String | `'https://a.tile.openstreetmap.org'` | `optional`The OpenStreetMap server url. |
| fileExtension | String | `'png'` | `required`The file extension for images on the server. |
| rectangle | Object | | `optional` The rectangle of the layer. **structure: { west: number, south: number, east: number, north: number }** |
| minimumLevel | Number | `0` | `optional`The minimum level-of-detail supported by the imagery provider. |
| maximumLevel | Number | | `optional`The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. |
| ellipsoid | Object | | `optional`The ellipsoid. If not specified, the WGS84 ellipsoid is used. |
| credit | String\| Object | `'MapQuest, Open Street Map and contributors, CC-BY-SA'` | `optional`A credit for the data source, which is displayed on the canvas. |

---

- Refer to the official document: [OpenStreetMapImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/OpenStreetMapImageryProvider.html)

## Events

| name         | parameter                      | description                                                                                                       |
| ------------ | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| errorEvent   | TileProviderError              | Triggers when the imagery provider encounters an asynchronous error.                                              |
| readyPromise | ImageryProvider                | Triggers when the provider is ready for use.                                                                      |

---
