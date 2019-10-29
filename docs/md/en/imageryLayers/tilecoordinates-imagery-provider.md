# TileCoordinatesImageryProvider

`tilecoordinates-imagery-provider`

## Demo

### add a TileCoordinatesImagery to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <tilecoordinates-imagery-provider></tilecoordinates-imagery-provider>
        </imagery-layer>
      </cesium-viewer>
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
        <tilecoordinates-imagery-provider></tilecoordinates-imagery-provider>
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
        contrast: 1
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        // ...
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ----------------- | ---------------- | -------- | ----------------------------------------------------------------- |
| tilingScheme | Number | | `optional` The tiling scheme for which to draw tiles. |
| ellipsoid | Object | | `optional` The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used. |
| color | String\|Object\|Array | `'YELLOW'` | `optional` The color to draw the tile box and label. |
| tileWidth | Number | `256` | `optional` The width of the tile for level-of-detail selection purposes. |
| tileHeight | Number | `256` | `optional` The height of the tile for level-of-detail selection purposes. |

- Reference official document [TileCoordinatesImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/TileCoordinatesImageryProvider.html)

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | ---- | -------------------------- |
| ready | {Cesium, viewer} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance. |
| errorEvent | TileProviderError | Gets an event that is raised when the imagery provider encounters an asynchronous error.|
| readyPromise | ImageryProvider | Gets a promise that resolves to true when the provider is ready for use. |
