# SuperMap Demo

vue-cesium 使用 SuperMap iClient3D for WebGL 开发时只需要在引入 VueCesium 时通过配置项 `cesiumPath` 指定为 iClient3D 库地址即可。

```javascript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './App.vue'
import 'vue-cesium/dist/index.css'

const app = createApp(App)
app.use(VueCesium, {
  cesiumPath: 'https://www.supermapol.com/earth/Build/Cesium/Cesium.js'
})
app.mount('#app')
```

或者在 `vc-viewer` 组件上将 `cesiumPath` 地址指定为 iClient3D 路径。 如下面的例子：

## 基础用法

使用 VueCesium 加载 SuperMap iClient3D for WebGL

:::demo 通过 `vc-viewer` 的 cesiumPath 属性指定使用 SuperMap iClient3D for WebGL。

platforms/vc-demo-supermap/usage

:::

## 参考

- 官网：**[SuperMap iClient3D for WebGL](http://support.supermap.com.cn:8090/webgl/web/index.html)**
