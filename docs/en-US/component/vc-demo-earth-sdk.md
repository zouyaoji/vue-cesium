# EarthSDK Demo

When developing with vue-cesium using CesiumLab's EarthSDK, you only need to configure the `cesiumPath` option when importing VueCesium to specify the address of the EarthSDK library.

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

Or configure the `cesiumPath` address to the EarthSDK path on the `vc-viewer` component.

When `vc-viewer` is loaded successfully, it returns { Cesium, viewer, earth }. You can use the `earth` to use EarthSDK API for related development, as shown in the example below:

## Basic Usage

Load EarthSDK using VueCesium

:::demo Specify to use EarthSDK through the cesiumPath property of `vc-viewer`.

platforms/vc-demo-earth-sdk/usage

:::

## Reference

- EarthSDK Official Website： **[EarthSDK](https://www.earthsdk.com/)**
