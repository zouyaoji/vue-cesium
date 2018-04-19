# Usage

## Usage

### Global Registration

Regist all components of *vue-supermap-cesium* at once.

```javascript
import Vue from 'vue'
import SuperMapCesium from 'vue-supermap-cesium'

Vue.use(SuperMapCesium, {
  // cesiumPath is the path of the Cesium library, such as
  // cesiumPath: './statics/Cesium'
  // use online reference for http
  // cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build'
  // use online reference for https
  cesiumPath: 'https://zouyaoji.top/vue-supermap-cesium'
})
```

```html
<template>
<div class="content">
  <sm-viewer>
  </sm-viewer>
</div>
</template>

<style>
.content {
  background-color: #f9f9f9;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
```

### Local Registration

A locally registered `SmViewer` component **must** declare the `cesiumPath` attribute.
All components are stored in the `vue-supermap-cesium / components` folder.
As ES module can't be run directly in most browsers, if importing component causes some runtime errors, please check the webpack's loader configuration whethor the `include` and `exclude` options hits this library.

```html
<template>
  <div class="content">
    <sm-viewer cesiumPath="YOUR_CESIUM_LIB_PATH"></sm-viewer>
  </div>
</template>

<script>
import SmViewer from 'vue-supermap-cesium/components/cesium/viewer.vue'
export default {
  components: {
    SmViewer
  }
}
</script>

<style>
.content {
  background-color: #f9f9f9;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
```

### CDN Registration

- To be added

## Q&A

- `SmViewer` component is an empty block level element. If it doesn't declare its height, the `viewer` will be invisible.
- If you need to update your model, just do it in the callback of the global component event `ready`.

### Wrong Way

```html
<template>
  <sm-viewer :animation="animation" :camera="camera"></sm-viewer>
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
  <sm-viewer :animation="animation" :camera="camera" @ready="ready"></baidu-map>
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
    ready (param) {
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

```html
<template>
  <sm-viewer class="viewer" :animation="true" :camera="camera">
  </sm-viewer>
</template>
<script>
export default {
  data () {
    return {
      camera: {
        position: {
          longitude: 104.06,
          latitude: 30.67,
          height: 1000
        },
        heading: 360,
        pitch: -90,
        roll: 0
      }
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
<doc-preview>
  <template>
    <sm-viewer class="viewer" :animation="true" :camera="camera" @ready="ready">
    </sm-viewer>
  </template>
  <script>
  export default {
    data () {
      return {
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
      ready (param) {
        let imageryLayers = param.viewer.imageryLayers
            let imagery = new Cesium.TiandituImageryProvider({
            mapStyle : Cesium.TiandituMapsStyle.IMG_C
        })
        imageryLayers.addImageryProvider(imagery)
        let labelImagery = new Cesium.TiandituImageryProvider({
            mapStyle : Cesium.TiandituMapsStyle.CIA_C
        })
        imageryLayers.addImageryProvider(labelImagery)
        param.viewer.entities.add({
          id: 'welcome to ChengDu',
          position: param.Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
          billboard: new param.Cesium.BillboardGraphics({
            image: 'https://zouyaoji.top/vue-supermap-cesium/favicon.png',
            scale: 0.1
          }),
          label: new param.Cesium.LabelGraphics ({
            text: 'Hello Word',
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
