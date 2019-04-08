# 快速上手

## 使用

### 全局注册

全局注册将一次性引入 Cesium 组件库的所有组件。

- 不指定Cesium库地址：

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'
// Vue-Cesium默认加载`https://unpkg.com/cesium/Build/Cesium/Cesium.js`
Vue.use(VueCesium)
```

- 指定Cesium库地址和Access Token：

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
  // 指定Cesium.Ion.defaultAccessToken，使用Cesium ion的数据源需要到https://cesium.com/ion/申请一个账户，获取Access Token。不指定的话可能导致Cesium在线影像加载不了
  accessToken: ''
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

### 局部注册

如果有按需引入组件的需要，可以选择局部注册 Cesium 组件，这将减少工程打包后的容量尺寸。所有的独立组件均存放在 `vue-cesium/components` 文件夹下，按需引用即可。由于未编译的 ES 模块不能在大多数浏览器中直接运行，如果引入组件时发生运行时错误，请检查 webpack 的 loader 配置，确认 `include` 和 `exclude` 选项命中了组件库。

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

### CDN 全局注册

* 待完善

<!-- ```html

``` -->

## 常见问题

* `CesiumViewer` 组件容器本身是一个空的块级元素，如果容器不定义高度，`viewer`将渲染在一个高度为 0 不可见的容器内。
* 该项目是通过动态添加`script`标签引入`Cesium` 的，因此 `CesiumViewer` 组件及其所有子组件的渲染是异步的。因此，请使用在组件的 `ready` 事件来执行场景 API 加载完毕后才能执行的代码，不要试图在 vue 自身的生命周期中调用 `Cesium` 类，更不要在这些时机修改 model 层。

### 错误用法

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

### 正确用法

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
      // 在这儿获取Cesium和viewer实例，再执行相关逻辑代码
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

### 预览

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
          id: '成都欢迎你',
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

### 代码

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
        id: '成都欢迎你',
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
