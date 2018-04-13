# 快速上手

## 使用

### 全局注册

全局注册将一次性引入超图 Cesium 组件库的所有组件。

```javascript
import Vue from 'vue'
import SuperMapCesium from 'vue-supermap-cesium'

Vue.use(SuperMapCesium, {
  // cesiumPath 是指引用的Cesium的文件夹路径， 如
  // cesiumPath: './statics/Cesium' ， 或者在线引用
  // cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build'
  cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build'
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

### 局部注册

如果有按需引入组件的需要，可以选择局部注册超图 Cesium 组件，这将减少工程打包后的容量尺寸。局部注册的 `SmViewer` 组件**必须**声明 `cesiumPath` 属性。所有的独立组件均存放在 `vue-supermap-cesium/components` 文件夹下，按需引用即可。由于未编译的 ES 模块不能在大多数浏览器中直接运行，如果引入组件时发生运行时错误，请检查 webpack 的 loader 配置，确认 `include` 和 `exclude` 选项命中了组件库。

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

### CDN 全局注册

* 待完善

<!-- ```html

``` -->

## 常见问题

* `SmViewer` 组件容器本身是一个空的块级元素，如果容器不定义高度，`viewer`将渲染在一个高度为 0 不可见的容器内。
* 该项目是通过动态添加`script`标签引入`Cesium` 的，因此 `SmViewer` 组件及其所有子组件的渲染是异步的。因此，请使用在组件的 `ready` 事件来执行场景 API 加载完毕后才能执行的代码，不要试图在 vue 自身的生命周期中调用 `Cesium` 类，更不要在这些时机修改 model 层。

### 错误用法

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
        heading: 6.283185307179586,
        pitch: -1.5707963267948966,
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
        heading: 6.283185307179586,
        pitch: -1.5707963267948966,
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
  <sm-viewer class="viewer" :animation="true" :camera="camera" >
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
    <sm-viewer class="viewer" :animation="true" :camera="camera" >
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
</doc-preview>
