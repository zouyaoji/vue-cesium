# TiandituImageryProvider

The `vc-provider-imagery-tianditu` component is used to load WMTS image service of [Tianditu](http://lbs.tianditu.gov.cn/home.html).

## Example

### Load an imagerylayer with TiandituImageryProvider

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery ref="layerText" :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="20">
          <vc-provider-imagery-tianditu
            mapStyle="eva_c"
            token="436ce7e50d27eede2f2929307e6b33c0">
          </vc-provider-imagery-tianditu>
        </vc-layer-imagery>
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="10">
          <vc-provider-imagery-tianditu
            :mapStyle="mapStyle"
            token="436ce7e50d27eede2f2929307e6b33c0"
          ></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
        <span>switch</span>
        <md-select v-model="mapStyle" placeholder="switch mapStyle">
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
          protocol: 'http',
          options: [
            {
              value: 'img_c',
              label: 'Global Image Map Service(GeographicTilingScheme)'
            },
            {
              value: 'img_w',
              label: 'Global Image Map Service(WebMercatorTilingScheme)'
            },
            {
              value: 'vec_c',
              label: 'Global vector map service(GeographicTilingScheme)'
            },
            {
              value: 'vec_w',
              label: 'Global vector map service(WebMercatorTilingScheme)'
            },
            {
              value: 'ter_c',
              label: 'Global Terrain Shading Service(GeographicTilingScheme)'
            },
            {
              value: 'ter_w',
              label: 'Global Terrain Shading Service(WebMercatorTilingScheme)'
            }
          ],
          mapStyle: 'img_c',
          alpha: 1,
          brightness: 1,
          contrast: 1
        }
      },
      methods: {
        ready({ Cesium, viewer }) {
          this.Cesium = Cesium
          this.viewer = viewer
        },
        layerAdded() {
          if (this.$refs.layerText.imageryLayer) {
            const { viewer } = this
            viewer.imageryLayers.raiseToTop(this.$refs.layerText.imageryLayer)
          }
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
      <vc-layer-imagery ref="layerText" :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="20">
        <vc-provider-imagery-tianditu mapStyle="eva_c" token="436ce7e50d27eede2f2929307e6b33c0"> </vc-provider-imagery-tianditu>
      </vc-layer-imagery>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="10">
        <vc-provider-imagery-tianditu
          :mapStyle="mapStyle"
          token="436ce7e50d27eede2f2929307e6b33c0"
        ></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>switch</span>
      <md-select v-model="mapStyle" placeholder="switch mapStyle">
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
        protocol: 'http',
        options: [
          {
            value: 'img_c',
            label: 'Global Image Map Service(GeographicTilingScheme)'
          },
          {
            value: 'img_w',
            label: 'Global Image Map Service(WebMercatorTilingScheme)'
          },
          {
            value: 'vec_c',
            label: 'Global vector map service(GeographicTilingScheme)'
          },
          {
            value: 'vec_w',
            label: 'Global vector map service(WebMercatorTilingScheme)'
          },
          {
            value: 'ter_c',
            label: 'Global Terrain Shading Service(GeographicTilingScheme)'
          },
          {
            value: 'ter_w',
            label: 'Global Terrain Shading Service(WebMercatorTilingScheme)'
          }
        ],
        mapStyle: 'img_c',
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.Cesium = Cesium
        this.viewer = viewer
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| -------- | -------------- | ---------------------- | ------------------------------------------------------------------------------------------ |
| mapStyle | String | `'img_w'` | `optional` The type of service. |
| credit | String\|Object | `'天地图全球影像服务'` | `optional` The credit of service |
| token | String | | `optional` The key of service. [Application address](http://lbs.tianditu.gov.cn/home.html) |
| protocol | String | `https` | `optional` The network protocol of service, can be `https` or `http` |
|minimumLevel|Number|`0`|`optional`The minimum tile level to request, or undefined if there is no minimum. This parameter is ignored when accessing a tiled server.|
|maximumLevel|Number|`20`|`optional`The maximum tile level to request, or undefined if there is no maximum. This parameter is ignored when accessing a tiled server.|
| projectionTransforms |  Boolean\|Object | `false` | `optional` Specify the projection transformation parameters. **structure: { from: 'GCJ02', to: 'WGS84' }** |

---

- mapStyle can take values:

  - 'cia_c': Global Chinese Annotation Service(GeographicTilingScheme).
  - 'cia_w': Global Chinese Annotation Service(WebMercatorTilingScheme).
  - 'cta_c': Global Terrain Chinese Annotation Service(GeographicTilingScheme).
  - 'cta_w': Global Terrain Chinese Annotation Service(WebMercatorTilingScheme).
  - 'cva_c': Global Vector Chinese Annotation Service(GeographicTilingScheme).
  - 'cva_w': Global Vector Chinese Annotation Service(WebMercatorTilingScheme).
  - 'ela_c': Global Image English Annotation Service(GeographicTilingScheme).
  - 'ela_w': Global Image English Annotation Service(WebMercatorTilingScheme).
  - 'eva_c': Global Vector English Annotation Service(GeographicTilingScheme).
  - 'eva_w': Global Vector English Annotation Service(WebMercatorTilingScheme).
  - 'img_c': Global Image Map Service(GeographicTilingScheme).
  - 'img_w': Global Image Map Service(WebMercatorTilingScheme).
  - 'ter_c': Global Terrain Shading Service(GeographicTilingScheme).
  - 'ter_w': Global Terrain Shading Service(WebMercatorTilingScheme).
  - 'vec_c': Global vector map service(GeographicTilingScheme).
  - 'vec_w': Global vector map service(WebMercatorTilingScheme).

- Refer to the official document of SuperMap: **[SuperMapImageryProvider](http://support.supermap.com.cn:8090/webgl/Build/Documentation/SuperMapImageryProvider.html)**

## Events

<!-- prettier-ignore -->
|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when SuperMapImageryProvider is ready. It returns a core class of Cesium, a viewer instance.|
|errorEvent|TileProviderError|Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.|
| readyPromise | ImageryProvider | Gets a promise that resolves to true when the provider is ready for use. |
