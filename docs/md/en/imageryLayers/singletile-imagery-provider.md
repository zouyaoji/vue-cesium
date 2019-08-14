# SingleTileImageryProvider

`singletile-imagery-provider`Use this layer component to add a single image as the image basemap. It only supports latitude and longitude projection. The aspect ratio of the image is preferably 2:1, otherwise there will be stretching.

## Examples

### add a SingleTileImageryProvider layer to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
       <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <singletile-imagery-provider :url="url"></singletile-imagery-provider>
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
    <cesium-viewer @ready="ready">
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <singletile-imagery-provider :url="url"></singletile-imagery-provider>
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

- Reference official document [SingleTileImageryProvider](https://cesiumjs.org/Cesium/Build/Documentation/SingleTileImageryProvider.html)

## Events

| name       | parameter         | description                                                                                                                                                                                                                                                |
| ---------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ready      | {Cesium, viewer}  | Triggers when SingleTileImageryProvider is ready. It returns a core class of Cesium, a viewer instance.                                                                                                                                                    |
| errorEvent | TileProviderError | Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError. |
