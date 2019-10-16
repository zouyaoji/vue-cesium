# TileMapServiceImageryProvider

`tilemapservice-imagery-provider`

## Demo

### add a TileMapServiceImagery to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <tilemapservice-imagery-provider
            :url="url"
            :rectangle="rectangle"
            :maximumLevel="4"
            @readyPromise="imageryReady"
          ></tilemapservice-imagery-provider>
        </imagery-layer>
      </cesium-viewer>
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
          alpha: 1,
          brightness: 1,
          contrast: 1,
          url: './statics/SampleData/images/cesium_maptiler/Cesium_Logo_Color',
          rectangle: { west: -120, south: 20, east: -60, north: 40 }
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.viewer = viewer
          // ...
        },
        imageryReady(imageryProvider) {
          this.viewer.camera.flyTo({ destination: imageryProvider.rectangle })
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
        <tilemapservice-imagery-provider
          :url="url"
          :rectangle="rectangle"
          :maximumLevel="4"
          @readyPromise="imageryReady"
        ></tilemapservice-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
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
        alpha: 1,
        brightness: 1,
        contrast: 1,
        url: './statics/SampleData/images/cesium_maptiler/Cesium_Logo_Color',
        rectangle: { west: -120, south: 20, east: -60, north: 40 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.viewer = viewer
        // ...
      },
      imageryReady(imageryProvider) {
        this.viewer.camera.flyTo({ destination: imageryProvider.rectangle })
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ----------------- | ---------------- | -------- | ----------------------------------------------------------------- |
| url | String\|Object | `'.'` | `optional` Path to image tiles on server. |
| fileExtension | String | `'png'` | `optional` The file extension for images on the server. |
| credit | String\|Object | `''` | `optional` A credit for the data source, which is displayed on the canvas. |
| minimumLevel | Number | `0` | `optional` The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems. |
| rectangle | Object | | `optional` The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. |
| maximumLevel | Number | | `optional` The rectangle, in radians, covered by the image. |
| tilingScheme | Object | | `optional` The tiling scheme specifying how the ellipsoidal surface is broken into tiles. If this parameter is not provided, a WebMercatorTilingScheme is used. |
| ellipsoid | Object | | `optional` The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used. |
| tileWidth | Number | `256` | `optional` Pixel width of image tiles. |
| tileHeight | Number | `256` | `optional` Pixel height of image tiles.|
| flipXY | Boolean | | `optional` Older versions of gdal2tiles.py flipped X and Y values in tilemapresource.xml. Specifying this option will do the same, allowing for loading of these incorrect tilesets. |

- Reference official document [createTileMapServiceImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/createTileMapServiceImageryProvider.html)

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | ---- | -------------------------- |
| ready | {Cesium, viewer} | Triggers when BingMapsImageryProvider is ready. It returns a core class of Cesium, a viewer instance. |
| errorEvent | TileProviderError | Gets an event that is raised when the imagery provider encounters an asynchronous error.|
| readyPromise | ImageryProvider | Gets a promise that resolves to true when the provider is ready for use. |
