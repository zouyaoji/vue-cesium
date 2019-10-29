# IonImageryProvider

`ion-imagery-provider`

## Demo

### add a IonImageryProvider to viewer

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <ion-imagery-provider :assetId="3812"></ion-imagery-provider>
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
        <ion-imagery-provider :assetId="3812"></ion-imagery-provider>
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
| assetId | Number | | `required` An ion imagery asset ID; |
| accessToken | String | | `optional` The access token to use. |
| server | String\|Object | | `optional` The resource to the Cesium ion API server. |

- Reference official document [IonImageryProvider](https://cesium.com/docs/cesiumjs-ref-doc/IonImageryProvider.html)

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | ---- | -------------------------- |
| ready | {Cesium, viewer} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance. |
| errorEvent | TileProviderError | Gets an event that is raised when the imagery provider encounters an asynchronous error.|
| readyPromise | ImageryProvider | Gets a promise that resolves to true when the provider is ready for use. |
