# SingleTileImageryProvider

The `vc-provider-imagery-tile-single` component is used to load a single image as the image basemap. It only supports latitude and longitude projection. The aspect ratio of the image is preferably 2:1, otherwise there will be stretching.

## Example

### Load an imagerylayer with SingleTileImageryProvider

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-tile-single :url="url"></vc-provider-imagery-tile-single>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      </div>
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
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-tile-single :url="url"></vc-provider-imagery-tile-single>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/worldimage.jpg',
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
| --------- | ------ | ------- | ------------------------------------------------------------------------- |
| url | String | | `required`The url for the tile. |
| rectangle | Object | | `optional`The rectangle, in radians, covered by the image. **structure: { west: number, south: number, east: number, north: number }** |
| credit | String\|Object | | `optional`A credit for the data source, which is displayed on the canvas. |
| ellipsoid | Object | | `optional`The ellipsoid. If not specified, the WGS84 ellipsoid is used. |

---

- Refer to the official document: [SingleTileImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/SingleTileImageryProvider.html)

## Events

| name         | parameter                      | description                                                                                                       |
| ------------ | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| errorEvent   | TileProviderError              | Triggers when the imagery provider encounters an asynchronous error.                                              |
| readyPromise | ImageryProvider                | Triggers when the provider is ready for use.                                                                      |

---
