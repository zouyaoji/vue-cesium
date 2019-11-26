# ArcGisMapServerImageryProvider

The `vc-provider-imagery-arcgis-mapserver` component is used to load tiled imagery of the ArcGIS MapServer.

## Examples

### Load an imagerylayer with ArcGisMapServerImageryProvider

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
       <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-arcgis-mapserver :url="url" :maximumLevel="maximumLevel"></vc-provider-imagery-arcgis-mapserver>
       </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" ></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" ></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" ></vue-slider>
        <span>switch url</span>
        <md-select v-model="url" placeholder="switch url" >
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
          options: [{
            value: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
            label: 'World_Imagery'
          }, {
            value: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
            label: 'World_Street_Map'
          }],
          url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
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
    <vc-viewer @ready="ready">
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-arcgis-mapserver :url="url" :maximumLevel="maximumLevel"></vc-provider-imagery-arcgis-mapserver>
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
        options: [
          {
            value: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
            label: 'World_Imagery'
          },
          {
            value: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
            label: 'World_Street_Map'
          }
        ],
        url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
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
|name|type|default|description|
|------|-----|-----|----|
|url|String||`required`The URL of the ArcGIS MapServer service.|
|token|String||`optional`The ArcGIS token used to authenticate with the ArcGIS MapServer service.|
|tileDiscardPolicy|Object||`optional`The policy that determines if a tile is invalid and should be discarded.|
|usePreCachedTilesIfAvailable|Boolean|`true`|`optional`If true, the server's pre-cached tiles are used if they are available. If false, any pre-cached tiles are ignored and the 'export' service is used.|
|layers|String||`optional`A comma-separated list of the layers to show, or undefined if all layers should be shown.|
|enablePickFeatures|Boolean|`true`|`optional`If true, ArcGisMapServerImageryProvider#pickFeatures will invoke the Identify service on the MapServer and return the features included in the response. If false, ArcGisMapServerImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you don't want this provider's features to be pickable. Can be overridden by setting the ArcGisMapServerImageryProvider#enablePickFeatures property on the object.|
|rectangle|Object||`optional`The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider. **structure: { west: number, south: number, east: number, north: number }**|
|tilingScheme|Object||`optional`The tiling scheme to use to divide the world into tiles. This parameter is ignored when accessing a tiled server.|
|ellipsoid|Object||`optional`The ellipsoid. If the tilingScheme is specified and used, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.|
|tileWidth|Number|`256`|`optional`The width of each tile in pixels. This parameter is ignored when accessing a tiled server.|
|tileHeight|Number|`256`|`optional`The height of each tile in pixels. This parameter is ignored when accessing a tiled server.|
|maximumLevel|Number||`optional`The maximum tile level to request, or undefined if there is no maximum. This parameter is ignored when accessing a tiled server.|

---

- Refer to the official document: **[ArcGisMapServerImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/ArcGisMapServerImageryProvider.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| errorEvent | TileProviderError | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider | Triggers when the provider is ready for use. |

---
