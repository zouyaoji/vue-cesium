<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-02-03 15:17:19
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 17:08:01
 * @FilePath: \vue-cesium\docs\zh-CN\component\vc-demo-dc-sdk.md
-->

# DC-SDK Demo

vue-cesium 使用数字视觉的 dc-sdk 开发时只需要在引入 VueCesium 时通过配置项 `cesiumPath` 指定为 dc-sdk 库地址即可。

**注意**：本例采用为dc-sdk@3.x版本。

```javascript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './App.vue'
import 'vue-cesium/dist/index.css'

const app = createApp(App)
app.use(VueCesium, {
  cesiumPath: 'https://cdn.jsdelivr.net/npm/@dvgis/dc-sdk/dist/dc.min.js',
  dcConfig: {
    baseUrl: 'https://cdn.jsdelivr.net/npm/@dvgis/dc-sdk/dist/resources/',
    Cesium: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js'
  }
})
app.mount('#app')
```

或者在 `vc-viewer` 组件上将 `cesiumPath` 地址指定为 dc-sdk 路径。 如下面的例子：

`vc-viewer` 加载成功会返回 { Cesium, viewer, dcViewer }, 通过该 `dcViewer` 使用 dc-sdk API 进行相关开发即可， 如下面的例子：

## 基础用法

使用 VueCesium 加载 dc-sdk

:::demo 通过 `vc-viewer` 的 cesiumPath 属性指定使用 dc-sdk。

platforms/vc-demo-dc-sdk/usage

:::

## 参考

- 官网：**[dc-sdk](http://dc.dvgis.cn/#/index)**
