# 快速上手

## 使用

### 全局注册

全局注册将一次性引入 Cesium 组件库的所有组件。

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'

Vue.use(VueCesium, {
  // cesiumPath 是指引用的Cesium的文件夹路径， 如
  // cesiumPath: '/statics/Cesium'
  // 或者在线引用(http)
  // cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build/Cesium'
  // 在线引用(https)
  cesiumPath: 'https://zouyaoji.top/vue-cesium'
})
```

```html
<template>
<div class="viewer">
  <cesium-viewer>
  </cesium-viewer>
</div>
</template>

<style scoped>
.viewer {
  width: 100%;
  height: 400px;
}
</style>
```

### 局部注册

如果有按需引入组件的需要，可以选择局部注册 Cesium 组件，这将减少工程打包后的容量尺寸。局部注册的 `CesiumViewer` 组件**必须**声明 `cesiumPath` 属性。所有的独立组件均存放在 `vue-cesium/components` 文件夹下，按需引用即可。由于未编译的 ES 模块不能在大多数浏览器中直接运行，如果引入组件时发生运行时错误，请检查 webpack 的 loader 配置，确认 `include` 和 `exclude` 选项命中了组件库。

```html
<template>
  <div class="viewer">
    <cesium-viewer cesiumPath="YOUR_CESIUM_LIB_PATH"></cesium-viewer>
  </div>
</template>

<script>
import CesiumViewer from 'vue-cesium/components/cesium/viewer.vue'
export default {
  components: {
    CesiumViewer
  }
}
</script>

<style scoped>
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

```html
<template>
  <cesium-viewer class="viewer" :animation="animation" :timeline="timeline" :camera="camera" @ready="ready" >
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
      let imageryLayers = viewer.imageryLayers
      let imagery = new Cesium.TiandituImageryProvider({
        mapStyle : Cesium.TiandituMapsStyle.IMG_C
      })
      imageryLayers.addImageryProvider(imagery)
      let labelImagery = new Cesium.TiandituImageryProvider({
          mapStyle : Cesium.TiandituMapsStyle.CIA_C
      })
      imageryLayers.addImageryProvider(labelImagery)
      viewer.entities.add({
        id: '成都欢迎你',
        position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
        billboard: new Cesium.BillboardGraphics({
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.1
        }),
        label: new Cesium.LabelGraphics ({
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

<style scoped>
.viewer {
  width: 100%;
  height: 400px;
}
</style>
```

<doc-preview>
  <template>
    <cesium-viewer class="viewer" :animation="animation" :timeline="timeline" :camera="camera" @ready="ready">
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
        let imageryLayers = viewer.imageryLayers
           let imagery = new Cesium.TiandituImageryProvider({
            mapStyle : Cesium.TiandituMapsStyle.IMG_C
        })
        imageryLayers.addImageryProvider(imagery)
        let labelImagery = new Cesium.TiandituImageryProvider({
            mapStyle : Cesium.TiandituMapsStyle.CIA_C
        })
        imageryLayers.addImageryProvider(labelImagery)
        viewer.entities.add({
          id: '成都欢迎你',
          position: Cesium.Cartesian3.fromDegrees(104.06, 30.67, 100),
          billboard: new Cesium.BillboardGraphics({
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.1
          }),
          label: new Cesium.LabelGraphics ({
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
  <style scoped>
  .viewer {
    width: 100%;
    height: 400px;
  }
  </style>
</doc-preview>
