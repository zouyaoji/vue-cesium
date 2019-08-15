# MapboxImageryProvider

`mapbox-imagery-provider`Provides tiled imagery hosted by Mapbox.

## Examples

### add a MapboxImageryProvider layer to viewer

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
        <span>switch mapId</span>
        <md-select v-model="mapId" placeholder="switch mapId">
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
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>switch mapId</span>
      <md-select v-model="mapId" placeholder="switch mapId">
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
        mapId: 'mapbox.streets',
        options: [
          {
            value: 'mapbox.satellite',
            label: 'satellite'
          },
          {
            value: 'mapbox.streets',
            label: 'streets'
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
        // ...
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ------------ | ------ |   --------- |
| url | String | `'https://api.mapbox.com/v4/'` | `optional`The Mapbox server url. |
| mapId | String | | `required`The Mapbox Map ID. |
| accessToken | Object | | `optional`The public access token for the imagery. |
| format | String | `'png'` | `optional`The format of the image request. |
| ellipsoid | Object | | `optional`The ellipsoid. If not specified, the WGS84 ellipsoid is used. |
| minimumLevel | Number | 0 | `optional`The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems. |
| maximumLevel | Number | | `optional`The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. |
| rectangle | Object | | `optional`The rectangle, in radians, covered by the image. **structure: { west: number, south: number, east: number, north: number }** |
| credit | String | | `optional`A credit for the data source, which is displayed on the canvas. |

- Reference official document [MapboxImageryProvider](https://cesiumjs.org/Cesium/Build/Documentation/MapboxImageryProvider.html)

## Events

| name         | parameter         | description                                                                                                                                                                                                                                                |
| ------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer}  | Triggers when MapboxImageryProvider is ready. It returns a core class of Cesium, a viewer instance.                                                                                                                                                        |
| errorEvent   | TileProviderError | Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError. |
| readyPromise | ImageryProvider   | Gets a promise that resolves to true when the provider is ready for use.                                                                                                                                                                                   |
