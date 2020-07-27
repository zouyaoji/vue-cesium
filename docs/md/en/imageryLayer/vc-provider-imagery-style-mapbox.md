# MapboxStyleImageryProvider

The `vc-provider-imagery-style-mapbox` component is used to load the tiled imagery hosted by Mapbox.

## Example

### Load an imagerylayer with MapboxStyleImageryProvider

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery ref="layer" :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-style-mapbox
            ：url="url"
            :username="username"
            :styleId="styleId"
            :accessToken="accessToken"
          ></vc-provider-imagery-style-mapbox>
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
          url: 'https://api.mapbox.com/styles/v1',
          username: 'zouyaoji',
          styleId: 'ckd49hwdn0u641irz36komsmt',
          accessToken: 'pk.eyJ1Ijoiem91eWFvamkiLCJhIjoiY2tjdjlha3pzMDIxeDJ1bWxhaWNnaGNkdSJ9.WaGuuQT8YcWTPx3KNQfF7A',
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
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-layer-imagery ref="layer" :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-style-mapbox
          ：url="url"
          :username="username"
          :styleId="styleId"
          :accessToken="accessToken"
        ></vc-provider-imagery-style-mapbox>
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
        url: 'https://api.mapbox.com/styles/v1',
        username: 'zouyaoji',
        styleId: 'ckd49hwdn0u641irz36komsmt',
        accessToken: 'pk.eyJ1Ijoiem91eWFvamkiLCJhIjoiY2tjdjlha3pzMDIxeDJ1bWxhaWNnaGNkdSJ9.WaGuuQT8YcWTPx3KNQfF7A',
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

<!-- prettier-ignore -->
|name|type|default|description|
| ------------ | ------ | ------------------------------ | --------------------------------------------------- |
| url | String | `'https://api.mapbox.com/style/v1/'` | `optional` The Mapbox server url. |
| username | String | `'mapbox'` | `optional` The username of the map account. |
| styleId | String | | `optional` The Mapbox Style ID. |
| accessToken | String | | `optional` 	The public access token for the imagery. |
| tilesize | Number | `512` | `optional` The size of the image tiles. |
| scaleFactor | Boolean |  | `optional` Determines if tiles are rendered at a @2x scale factor. |
| ellipsoid | Object | | `optional` The ellipsoid. If not specified, the WGS84 ellipsoid is used. |
| minimumLevel | Number | `0` | `optional` The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems. |
| maximumLevel | Number | | `optional` 	The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. |
| rectangle | Object | | `optional` The rectangle, in radians, covered by the image. **结构：{ west: number, south: number, east: number, north: number }** |
| credit | String | | `optional` A credit for the data source, which is displayed on the canvas. |

---

- Refer to the official document: **[MapboxStyleImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/MapboxStyleImageryProvider.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| errorEvent | TileProviderError | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider | Triggers when the provider is ready for use. |

---
