# SuperMapImageryProvider

`supermap-imagery-provider` Load the SuperMap iServer service. Only the SuperMap Cesium package has this component.

## Examples

### add a SuperMapImageryProvider layer to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <sm-cesium-viewer :cesiumPath="cesiumPath">
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <supermap-imagery-provider ref="supermapLayer":url="url" @ready="ready"></supermap-imagery-provider>
        </imagery-layer>
      </sm-cesium-viewer>
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>switch url</span>
        <md-select v-model="url" placeholder="switch url">
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
    import CesiumViewer from '../../../../src/components/viewer/CesiumViewer.vue'
    export default {
      data () {
        return {
          cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js',
          options: [{
            value: 'https://www.songluck.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
            label: 'sichuan'
          }, {
            value: 'http://www.supermapol.com/realspace/services/map-World/rest/maps/World_Google',
            label: 'google'
          }],
          url: 'https://www.songluck.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
          alpha: 1,
          brightness: 1,
          contrast: 1
        }
      },
      components: {
        SmCesiumViewer: CesiumViewer
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          viewer.zoomTo(this.$refs.supermapLayer.providerContainer.imageryLayer)
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <sm-cesium-viewer :cesiumPath="cesiumPath">
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <supermap-imagery-provider ref="supermapLayer" :url="url" @ready="ready"></supermap-imagery-provider>
      </imagery-layer>
    </sm-cesium-viewer>
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
  import CesiumViewer from '../../../src/components/viewer/CesiumViewer.vue'
  export default {
    data() {
      return {
        cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js',
        options: [
          {
            value: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
            label: 'sichuan'
          },
          {
            value: 'http://www.supermapol.com/realspace/services/map-World/rest/maps/World_Google',
            label: 'google'
          }
        ],
        url: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    components: {
      SmCesiumViewer: CesiumViewer
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.zoomTo(this.$refs.supermapLayer.providerContainer.imageryLayer)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
|name|type|default|description|
|------|-----|-----|----|
|url|String||`required`The URL of the SuperMap iServer service.|
|name|String|SuperMap iServer name|`optional`The name of the layer.|
|minimumLevel|Number|`0`|`optional`The minimum tile level to request, or undefined if there is no minimum. This parameter is ignored when accessing a tiled server.|
|maximumLevel|Number|`20`|`optional`The maximum tile level to request, or undefined if there is no maximum. This parameter is ignored when accessing a tiled server.|
|rectangle|Cesium.Rectangle||`optional`The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider.|

---

## Events

<!-- prettier-ignore -->
|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when SuperMapImageryProvider is ready. It returns a core class of Cesium, a viewer instance.|
|errorEvent|TileProviderError|Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.|
| readyPromise | ImageryProvider | Gets a promise that resolves to true when the provider is ready for use. |
