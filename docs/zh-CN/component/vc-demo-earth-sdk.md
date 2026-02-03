# EarthSDK Demo

vue-cesium 使用 CesiumLab 的 EarthSDK 开发时只需要在引入 VueCesium 时通过配置项 `cesiumPath` 指定为 EarthSDK 库地址即可。

```javascript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './App.vue'
import 'vue-cesium/dist/index.css'

const app = createApp(App)
app.use(VueCesium, {
  cesiumPath: 'https://earthsdk.com/v/last/XbsjEarth/XbsjEarth.js'
})
app.mount('#app')
```

或者在 `vc-viewer` 组件上将 `cesiumPath` 地址指定为 EarthSDK 路径。

`vc-viewer` 加载成功会返回 { Cesium, viewer, earth }, 通过该 `earth` 使用 EarthSDK API 进行相关开发即可， 如下面的例子：

## 基础用法

使用 VueCesium 加载 EarthSDK

:::demo 通过 `vc-viewer` 的 cesiumPath 属性指定使用 EarthSDK。

platforms/vc-demo-earth-sdk/usage

:::

## 参考

- EarthSDK 官网： **[EarthSDK](https://www.earthsdk.com/)**
