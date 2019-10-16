# BingMapsImageryProvider

`bingmaps-imagery-provider`

## Examples

### add a BingMapsImageryProvider layer to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <bingmaps-imagery-provider :url="url" :bmKey="bmKey" :mapStyle="mapStyle"></bingmaps-imagery-provider>
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
        <md-select v-model="mapStyle" placeholder="switch url">
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
          url: 'https://dev.virtualearth.net',
          bmKey: 'AqgBIfrBG50dl7Ykc9nANoj5UJnIxg5YyEZu-UE7sY_sHoZT1db1jGZAalBsU73w', // 可到(https://www.bingmapsportal.com/)申请Key。
          mapStyle: 'Road',
          options: [{
            value: 'Aerial',
            label: 'Aerial'
          }, {
            value: 'AerialWithLabels',
            label: 'AerialWithLabels'
          },{
            value: 'Road',
            label: 'Road'
          }, {
            value: 'CanvasDark',
            label: 'CanvasDark'
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
        <bingmaps-imagery-provider :url="url" :bmKey="bmKey" :mapStyle="mapStyle"></bingmaps-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
    <div class="demo-tool">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>switch url</span>
      <md-select v-model="mapStyle" placeholder="switch url">
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
        url: 'https://dev.virtualearth.net',
        bmKey: 'AqgBIfrBG50dl7Ykc9nANoj5UJnIxg5YyEZu-UE7sY_sHoZT1db1jGZAalBsU73w', // 可到(https://www.bingmapsportal.com/)申请Key。
        mapStyle: 'Road',
        options: [
          {
            value: 'Aerial',
            label: 'Aerial'
          },
          {
            value: 'AerialWithLabels',
            label: 'AerialWithLabels'
          },
          {
            value: 'Road',
            label: 'Road'
          },
          {
            value: 'CanvasDark',
            label: 'CanvasDark'
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
| ----------------- | ------ | -------- | ------------------------------------------- | --- |
| url | String | | `required`The url of the Bing Maps server hosting the imagery. |
| bmKey | String | | `optional`The Bing Maps key for your application, which can be created at [https://www.bingmapsportal.com/](https://www.bingmapsportal.com/). If this parameter is not provided, BingMapsApi.defaultKey is used, which is undefined by default. |
| tileProtocol | String | | `optional`The protocol to use when loading tiles, e.g. 'http:' or 'https:'. By default, tiles are loaded using the same protocol as the page. |
| mapStyle | String | `'Aerial'` | `optional`The type of Bing Maps imagery to load. |
| culture | String | `''` | `optional`The culture to use when requesting Bing Maps imagery. Not all cultures are supported. See [http://msdn.microsoft.com/en-us/library/hh441729.aspx](http://msdn.microsoft.com/en-us/library/hh441729.aspx) for information on the supported cultures. |
| ellipsoid | Object |  | `optional`The ellipsoid. If not specified, the WGS84 ellipsoid is used. |
| tileDiscardPolicy | Object | | `optional`The policy that determines if a tile is invalid and should be discarded. If this value is not specified, a default DiscardMissingTileImagePolicy is used which requests tile 0,0 at the maximum tile level and checks pixels (0,0), (120,140), (130,160), (200,50), and (200,200). If all of these pixels are transparent, the discard check is disabled and no tiles are discarded. If any of them have a non-transparent color, any tile that has the same values in these pixel locations is discarded. The end result of these defaults should be correct tile discarding for a standard Bing Maps server. To ensure that no tiles are discarded, construct and pass a NeverTileDiscardPolicy for this parameter. |

- Reference official document [BingMapsImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/BingMapsImageryProvider.html)

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | ---- | -------------------------- |
| ready | {Cesium, viewer} | Triggers when BingMapsImageryProvider is ready. It returns a core class of Cesium, a viewer instance. |
| errorEvent | TileProviderError | Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError. |
| readyPromise | ImageryProvider | Gets a promise that resolves to true when the provider is ready for use. |
