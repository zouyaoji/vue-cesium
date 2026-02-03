# SuperMap Demo

When developing with vue-cesium using SuperMap iClient3D for WebGL, you only need to configure the `cesiumPath` option when importing VueCesium to specify the address of the iClient3D library.

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

Or configure the `cesiumPath` address to the iClient3D path on the `vc-viewer` component, as shown in the example below:

## Basic Usage

Load SuperMap iClient3D for WebGL using VueCesium

:::demo Specify to use SuperMap iClient3D for WebGL through the cesiumPath property of `vc-viewer`.

platforms/vc-demo-supermap/usage

:::

## Reference

- Official Website：**[SuperMap iClient3D for WebGL](http://support.supermap.com.cn:8090/webgl/web/index.html)**
