# 快速上手

## 使用

### 全局注册

全局注册将一次性引入 Cesium 组件库的所有组件。

- 使用默认 Cesium 库地址：

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'
// VueCesium 默认使用 `https://unpkg.com/cesium/Build/Cesium/Cesium.js`
Vue.use(VueCesium)
```

- 指定 Cesium 库地址和 CesiumIon 在线资源 accessToken：

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'

Vue.use(VueCesium, {
  // cesiumPath 是指引用的Cesium.js路径，如
  // 项目本地的Cesium Build包，vue项目需要将Cesium Build包放static目录：
  // cesiumPath: /static/Cesium/Cesium.js
  // 个人在线Cesium Build包：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // 个人在线SuperMap Cesium Build包（在官方基础上二次开发出来的）：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
  // 官方在线Cesium Build包，有CDN加速，推荐用这个：
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
  // 指定Cesium.Ion.defaultAccessToken，使用Cesium ion的数据源需要到https://cesium.com/ion/申请一个账户，获取Access Token。不指定的话可能导致 Cesium 在线影像加载不了
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

### 局部注册

如果有按需引入组件的需要，可以选择局部注册 Cesium 组件，这将减少工程打包后的容量尺寸。

- 不指定 Cesium 库地址：

```javascript
import Vue from 'vue'
import { Viewer, ImageryLayer } from 'vue-cesium'
// VueCesium 默认使用 `https://unpkg.com/cesium/Build/Cesium/Cesium.js`
Vue.use(Viewer)
Vue.use(ImageryLayer)
```

- 指定 Cesium 库地址和 CesiumIon 在线资源 accessToken：

```javascript
import Vue from 'vue'
import { Viewer, ImageryLayer } from 'vue-cesium'
Vue.use(Viewer, {
  // cesiumPath 是指引用的Cesium.js路径，如
  // 项目本地的Cesium Build包，vue项目需要将Cesium Build包放static目录：
  // cesiumPath: /static/Cesium/Cesium.js
  // 个人在线Cesium Build包：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // 个人在线SuperMap Cesium Build包（在官方基础上二次开发出来的）：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
  // 官方在线Cesium Build包，有CDN加速，推荐用这个：
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
  // 指定Cesium.Ion.defaultAccessToken，使用Cesium ion的数据源需要到https://cesium.com/ion/申请一个账户，获取Access Token。不指定的话可能导致 Cesium 在线影像加载不了
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

### CDN 全局注册

```js
<!-- include Vue -->
<script src="https://unpkg.com/vue@latest/dist/vue.min.js"></script>
<!-- include VueCesium -->
<script src="https://unpkg.com/vue-cesium@latest/lib/index.umd.js"></script>
<script>
  Vue.use(VueCesium) // All VueCesium components now globally installed
</script>
```

[UMD 例子参考](https://zouyaoji.top/vue-cesium/statics/umd.html)

## Hello Cesium

### 预览

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
          id: '成都欢迎你',
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

### 代码

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
          id: '成都欢迎你',
          position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
          billboard: new Cesium.BillboardGraphics({
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.1
          }),
          label: new Cesium.LabelGraphics({
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

## 常见问题

- `VcViewer` 组件容器本身是一个空的块级元素，如果容器不定义高度，`viewer`将渲染在一个高度为 0 不可见的容器内。
- 该项目是通过动态添加`script`标签引入`Cesium` 的，因此 `VcViewer` 组件及其所有子组件的渲染是异步的。因此，请使用在组件的 `ready` 事件来执行场景 API 加载完毕后才能执行的代码，不要试图在 Vue 自身的生命周期中调用 `Cesium` 类，更不要在这些时机修改 model 层。但在`2.0.1+`版本中可以通过`ref`来获取组件的`createPromise`对象来执行相关操作。

### 错误用法

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

### 正确用法

```html
<template>
  <vc-viewer ref="viewer" :animation="animation" :camera="camera" @ready="ready"></vc-viewer>
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
        // 在这儿获取Cesium和viewer实例，再执行相关逻辑代码
        this.camera.position.lng = 116.46
        this.camera.position.lat = 39.92
        this.camera.position.height = 500
        this.animation = true
      }
    }
  }
</script>
```
