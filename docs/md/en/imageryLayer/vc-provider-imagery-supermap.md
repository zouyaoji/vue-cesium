# SuperMapImageryProvider

The `vc-provider-imagery-supermap` component is used to load the SuperMap iServer service.

## Example

### Load an imagerylayer with SuperMapImageryProvider

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-supermap
            ref="imageryProvider"
            :url="url"
            @readyPromise="readyPromise"
          ></vc-provider-imagery-supermap>
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
          options: [
            {
              value: 'https://www.songluck.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
              label: 'sichuan'
            },
            {
              value: 'http://www.supermapol.com/realspace/services/map-World/rest/maps/World_Google',
              label: 'google'
            }
          ],
          url: 'https://www.songluck.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
          alpha: 1,
          brightness: 1,
          contrast: 1
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.cesiumInstance = cesiumInstance
        },
        readyPromise() {
          const { Cesium, viewer } = this.cesiumInstance
          viewer.zoomTo(this.$refs.imageryProvider.providerContainer.imageryLayer)
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
        <vc-provider-imagery-supermap
          ref="imageryProvider"
          :url="url"
          @readyPromise="readyPromise"
        ></vc-provider-imagery-supermap>
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
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.cesiumInstance = cesiumInstance
      },
      readyPromise() {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.zoomTo(this.$refs.imageryProvider.providerContainer.imageryLayer)
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

- Refer to the official document of SuperMap: **[SuperMapImageryProvider](http://support.supermap.com.cn:8090/webgl/Build/Documentation/SuperMapImageryProvider.html)**

## Events

<!-- prettier-ignore -->
|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when SuperMapImageryProvider is ready. It returns a core class of Cesium, a viewer instance.|
|errorEvent|TileProviderError|Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.|
| readyPromise | ImageryProvider | Gets a promise that resolves to true when the provider is ready for use. |
