# UrlTemplateImageryProvider

The `vc-provider-imagery-urltemplate` component is used to load a single imagery by requesting tiles using a specified URL template.

## Example

### Load an imagerylayer with UrlTemplateImageryProvider

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @layerAdded="layerAdded">
        <vc-layer-imagery :alpha="alpha" ref="layerText" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-urltemplate :url="urlText"></vc-provider-imagery-urltemplate>
        </vc-layer-imagery>
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-urltemplate :url="url"></vc-provider-imagery-urltemplate>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>changeUrl</span>
        <md-select v-model="url" placeholder="changeUrl">
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
          url: 'http://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
          urlText: 'http://wprd04.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=8&ltype=12',
          options: [{
            value: 'http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            label: 'AMap Imagery'
          }, {
            value: 'http://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
            label: 'AMap Vector'
          }],
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
    <vc-viewer @ready="ready" @layerAdded="layerAdded">
      <vc-layer-imagery :alpha="alpha" ref="layerText" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-urltemplate :url="urlText"></vc-provider-imagery-urltemplate>
      </vc-layer-imagery>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-urltemplate :url="url"></vc-provider-imagery-urltemplate>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>changeUrl</span>
      <md-select v-model="url" placeholder="请选择服务">
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
        url: 'http://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
        urlText: 'http://wprd04.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=8&ltype=12',
        options: [
          {
            value: 'http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            label: 'AMap Imagery'
          },
          {
            value: 'http://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
            label: 'AMap Vector'
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
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
|name|type|default|description|
|------|-----|-----|----|
|url|String\|Object||`required`The URL template to use to request tiles.|
|pickFeaturesUrl|String\|Object||`optional`The URL template to use to pick features. |
|urlSchemeZeroPadding|Object||`optional`Gets the URL scheme zero padding for each tile coordinate.|
|subdomains|String\|Array|`'abc'`|`optional`he subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.|
|credit|String\|Object|`''`|`optional`A credit for the data source, which is displayed on the canvas.|
|minimumLevel|Number|`0`|`optional`The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems.|
|maximumLevel|Number||`optional`The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.|
|rectangle|Object||`optional`The rectangle, in radians, covered by the image. **structure: { west: number, south: number, east: number, north: number }** |
|tilingScheme|Object||`optional`The tiling scheme specifying how the ellipsoidal surface is broken into tiles. If this parameter is not provided, a WebMercatorTilingScheme is used.|
|ellipsoid|Object||`optional`The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.|
|tileWidth|Number|`256`|`optional`Pixel width of image tiles.|
|tileHeight|Number|`256`|`optional`Pixel height of image tiles.|
|hasAlphaChannel|Boolean|`true`|`optional`true if the images provided by this imagery provider include an alpha channel; otherwise, false. If this property is false, an alpha channel, if present, will be ignored. If this property is true, any images without an alpha channel will be treated as if their alpha is 1.0 everywhere. When this property is false, memory usage and texture upload time are potentially reduced.|
|getFeatureInfoFormats|Array||`optional`The formats in which to get feature information at a specific location when UrlTemplateImageryProvider#pickFeatures is invoked. If this parameter is not specified, feature picking is disabled.|
|enablePickFeatures|Boolean|`true`|`optional`If true, UrlTemplateImageryProvider#pickFeatures will request the options.pickFeaturesUrl and attempt to interpret the features included in the response. If false, UrlTemplateImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you know your data source does not support picking features or if you don't want this provider's features to be pickable. Note that this can be dynamically overridden by modifying the UriTemplateImageryProvider#enablePickFeatures property.|
|customTags|Object||`optional`Allow to replace custom keywords in the URL template. The object must have strings as keys and functions as values.|

---

- Refer to the official document: **[UrlTemplateImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/UrlTemplateImageryProvider.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| errorEvent | TileProviderError | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider | Triggers when the provider is ready for use. |

---
