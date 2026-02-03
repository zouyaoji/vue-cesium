# DC-SDK Demo

When developing with vue-cesium using dc-sdk from Digital Vision, you only need to configure the `cesiumPath` option when importing VueCesium to specify the address of the dc-sdk library.

**Note**: This example uses dc-sdk@3.x version.

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

Or configure the `cesiumPath` address to the dc-sdk path on the `vc-viewer` component, as shown in the example below:

When `vc-viewer` is loaded successfully, it returns { Cesium, viewer, dcViewer }. You can use the `dcViewer` to use dc-sdk API for related development, as shown in the example below:

## Basic Usage

Load dc-sdk using VueCesium

:::demo Specify to use dc-sdk through the cesiumPath property of `vc-viewer`.

platforms/vc-demo-dc-sdk/usage

:::

## Reference

- Official Website：**[dc-sdk](http://dc.dvgis.cn/#/index)**
