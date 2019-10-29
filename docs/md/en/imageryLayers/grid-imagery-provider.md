# GridImageryProvider

`grid-imagery-provider`

## Demo

### add a GridImageryProvider to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <grid-imagery-provider></grid-imagery-provider>
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
        <grid-imagery-provider></grid-imagery-provider>
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
| tilingScheme | Object | | `required` The tiling scheme for which to draw tiles. |
| ellipsoid | Object | | `optional` The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used. |
| cells | Number | `8` | `optional` The number of grids cells. |
| color | Object\|String\|Array | `[1.0, 1.0, 1.0, 0.4]` | `optional` The color to draw grid lines. |
| glowColor | Object\|String\|Array | `[0.0, 1.0, 0.0, 0.05]` | `optional` The color to draw glow for grid lines. |
| glowWidth | Number | `6` | `optional` The width of lines used for rendering the line glow effect. |
| backgroundColor | Object\|String\|Array | `[0.0, 0.5, 0.0, 0.2]` | `optional` Background fill color. |
| tileWidth | Number | `256` | `optional` The width of the tile for level-of-detail selection purposes. |
| tileHeight | Number | `256` | `optional` The height of the tile for level-of-detail selection purposes. |
| canvasSize | Number | `256` | `optional` The size of the canvas used for rendering. |

- Reference official document [GridImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/GridImageryProvider.html)

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | ---- | -------------------------- |
| ready | {Cesium, viewer} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance. |
| errorEvent | TileProviderError | Gets an event that is raised when the imagery provider encounters an asynchronous error.|
| readyPromise | ImageryProvider | Gets a promise that resolves to true when the provider is ready for use. |
