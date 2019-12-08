# Usage

## Usage

### Global Registration

Regist all components of **vue-cesium** at once.

- Use the default Cesium library url

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'
// VueCesium will load Cesium.js from `https://unpkg.com/cesium/Build/Cesium/Cesium.js` by default.
Vue.use(VueCesium)
```

- Specify the Cesium library url and the CesiumIon online resource accessToken:

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'

Vue.use(VueCesium, {
  // cesiumPath is path of Cesium.js', for example:
  // local Cesium Build package:
  // cesiumPath: /static/Cesium/Cesium.js
  // Personal online Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // Personal online SuperMap Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
  // Official Online Cesium Build package：
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
  // Cesium.Ion.defaultAccessToken
  accessToken: ''
})
```

```html
<template>
  <div class="viewer">
    <vc-viewer>
      <vc-layer-imagery></vc-layer-imagery>
    </vc-viewer>
  </div>
</template>

<style>
  .viewer {
    width: 100%;
    height: 400px;
  }
</style>
```

### Local Registration

If you need to introduce components on demand, you can choose to locally register Cesium components, which will reduce the size of the package after the project is packaged.

- Use the default Cesium library url

```javascript
import Vue from 'vue'
import { Viewer, ImageryLayer } from 'vue-cesium'
// VueCesium 默认使用 `https://unpkg.com/cesium/Build/Cesium/Cesium.js`
Vue.use(Viewer)
Vue.use(ImageryLayer)
```

- Specify the Cesium library url and the CesiumIon online resource accessToken:

```javascript
import Vue from 'vue'
import { Viewer, ImageryLayer } from 'vue-cesium'

Vue.use(Viewer, {
  // cesiumPath is path of Cesium.js', for example:
  // local Cesium Build package:
  // cesiumPath: /static/Cesium/Cesium.js
  // Personal online Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // Personal online SuperMap Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
  // Official Online Cesium Build package：
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
  // Cesium.Ion.defaultAccessToken
  accessToken: ''
})
Vue.use(ImageryLayer)
```

```html
<template>
  <div class="viewer">
    <vc-viewer>
      <vc-layer-imagery></vc-layer-imagery>
    </vc-viewer>
  </div>
</template>

<style>
  .viewer {
    width: 100%;
    height: 400px;
  }
</style>
```

### CDN Registration

- To be added

## Hello Cesium

### Preview

<doc-preview>
  <template>
    <vc-viewer class="viewer" :animation="animation" :timeline="timeline" :camera.sync="camera" @ready="ready">
      <vc-layer-imagery>
        <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
      </vc-layer-imagery>
    </vc-viewer>
  </template>
  <script>
  export default {
    data () {
      return {
        animation: true,
        timeline: true,
        camera: {
          position: {
            lng: 104.06,
            lat: 30.67,
            height: 100000
          },
          heading: 360,
          pitch: -90,
          roll: 0
        }
      }
    },
    methods: {
      ready (cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.entities.add({
          id: 'Welcome to Chengdu',
          position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
          billboard: new Cesium.BillboardGraphics({
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.1
          }),
          label: new Cesium.LabelGraphics ({
            text: 'Hello Cesium',
            fillColor: Cesium.Color.GOLD,
            font: '24px sans-serif',
            horizontalOrigin: 1,
            outlineColor: new Cesium.Color(0, 0, 0, 1),
            outlineWidth: 2,
            pixelOffset: new Cesium.Cartesian2(17, -5),
            style: Cesium.LabelStyle.FILL
          })
        })
      }
    }
  }
  </script>
  <style>
  .viewer {
    width: 100%;
    height: 400px;
  }
  </style>
</doc-preview>

### Code

```html
<template>
  <vc-viewer class="viewer" :animation="animation" :timeline="timeline" :camera.sync="camera" @ready="ready">
    <vc-layer-imagery>
      <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
    </vc-layer-imagery>
  </vc-viewer>
</template>
<script>
  export default {
    data() {
      return {
        animation: true,
        timeline: true,
        camera: {
          position: {
            lng: 104.06,
            lat: 30.67,
            height: 100000
          },
          heading: 360,
          pitch: -90,
          roll: 0
        }
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.entities.add({
          id: 'Welcome to Chengdu',
          position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
          billboard: new Cesium.BillboardGraphics({
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.1
          }),
          label: new Cesium.LabelGraphics({
            text: 'Hello Cesium',
            fillColor: Cesium.Color.GOLD,
            font: '24px sans-serif',
            horizontalOrigin: 1,
            outlineColor: new Cesium.Color(0, 0, 0, 1),
            outlineWidth: 2,
            pixelOffset: new Cesium.Cartesian2(17, -5),
            style: Cesium.LabelStyle.FILL
          })
        })
      }
    }
  }
</script>
<style>
  .viewer {
    width: 100%;
    height: 400px;
  }
</style>
```

## Q&A

- `VcViewer` component is an empty block level element. If it doesn't declare its height, the `viewer` will be invisible.
- If you need to update your model, just do it in the callback of the global component event `ready`.
- In `2.0.1 +` version, you can use `ref` to get the`createPromise` object of the component to perform related operations.

### Wrong Way

```html
<template>
  <vc-viewer :animation="animation" :camera="camera"></vc-viewer>
</template>
<script>
  export default {
    data() {
      return {
        camera: {
          position: {
            lng: 104.06,
            lat: 30.67,
            height: 2000
          },
          heading: 360,
          pitch: -90,
          roll: 0
        },
        animation: false
      }
    },
    mounted() {
      this.camera.position.lng = 116.46
      this.camera.position.lat = 39.92
      this.camera.position.height = 500
      this.animation = true
    }
  }
</script>
```

### Right Way

```html
<template>
  <vc-viewer :animation="animation" :camera="camera" @ready="ready"></vc-viewer>
</template>
<script>
  export default {
    data() {
      return {
        camera: {
          position: {
            lng: 104.06,
            lat: 30.67,
            height: 2000
          },
          heading: 360,
          pitch: -90,
          roll: 0
        },
        animation: false
      }
    },
    mounted() {
      this.$refs.viewer.createPromise.then(({Cesium, viewer} => {
        console.log('viewer is loaded.')
      }))
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        // Get Cesium and viewer instances here, then execute the relevant logic code
        this.camera.position.lng = 116.46
        this.camera.position.lat = 39.92
        this.camera.position.height = 500
        this.animation = true
      }
    }
  }
</script>
```
