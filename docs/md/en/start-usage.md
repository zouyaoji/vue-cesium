# Usage

## Usage

### Global Registration

Regist all components of *vue-cesium* at once.

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'
// Vue-Cesium will load Cesium.js from `https://unpkg.com/cesium/Build/Cesium/Cesium.js`
Vue.use(VueCesium)
```

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'

Vue.use(VueCesium, {
  // cesiumPath is path of Cesium.js', for example:
  // local Cesium Build package:
  // ./static/Cesium/Cesium.js
  // Personal online Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // Personal online SuperMap Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
  // Official Online Cesium Build package：
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
})
```

```html
<template>
<div class="viewer">
  <cesium-viewer>
  </cesium-viewer>
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

All components are stored in the `vue-cesium / components` folder.
As ES module can't be run directly in most browsers, if importing component causes some runtime errors, please check the webpack's loader configuration whethor the `include` and `exclude` options hits this library.

```html
<template>
  <div class="viewer">
    <cesium-viewer></cesium-viewer>
  </div>
</template>

<script>
import CesiumViewer from 'vue-cesium/components/viewer/CesiumViewer.vue'
export default {
  components: {
    CesiumViewer
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

### CDN Registration

- To be added

## Q&A

- `CesiumViewer` component is an empty block level element. If it doesn't declare its height, the `viewer` will be invisible.
- If you need to update your model, just do it in the callback of the global component event `ready`.

### Wrong Way

```html
<template>
  <cesium-viewer :animation="animation" :camera="camera"></cesium-viewer>
</template>
<script>
export default {
  data () {
    return {
      camera: {
        position: {
          longitude: 104.06,
          latitude: 30.67,
          height: 2000
        },
        heading: 360,
        pitch: -90,
        roll: 0
      },
      animation: false
    }
  },
  mounted () {
    this.camera.position.longitude = 116.46
    this.camera.position.latitude = 39.92
    this.camera.position.height = 500
    this.animation = true
  }
}
</script>
```

### Right Way

```html
<template>
  <cesium-viewer :animation="animation" :camera="camera" @ready="ready"></cesium-viewer>
</template>
<script>
export default {
  data () {
    return {
      camera: {
        position: {
          longitude: 104.06,
          latitude: 30.67,
          height: 2000
        },
        heading: 360,
        pitch: -90,
        roll: 0
      },
      animation: false
    }
  },
  methods: {
    ready (cesiumInstance) {
      const { Cesium, viewer } = cesiumInstance
      // Get Cesium and viewer instances here, then execute the relevant logic code
      this.camera.position.longitude = 116.46
      this.camera.position.latitude = 39.92
      this.camera.position.height = 500
      this.animation = true
    }
  }
}
</script>
```

## Hello world

### Preview

<doc-preview>
  <template>
    <cesium-viewer class="viewer" :animation="animation" :timeline="timeline" :camera="camera" @ready="ready">
      <imagery-layer>
        <openstreetmap-imagery-provider></openstreetmap-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
  </template>
  <script>
  export default {
    data () {
      return {
        animation: true,
        timeline: true,
        camera: {
          position: {
            longitude: 104.06,
            latitude: 30.67,
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
            text: 'Hello Word',
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
  <cesium-viewer class="viewer" :animation="animation" :timeline="timeline" :camera="camera" @ready="ready">
    <imagery-layer>
      <openstreetmap-imagery-provider></openstreetmap-imagery-provider>
    </imagery-layer>
  </cesium-viewer>
</template>
<script>
export default {
  data () {
    return {
      animation: true,
      timeline: true,
      camera: {
        position: {
          longitude: 104.06,
          latitude: 30.67,
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
          text: 'Hello Word',
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
