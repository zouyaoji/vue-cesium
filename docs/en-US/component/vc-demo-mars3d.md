# Mars3D Demo

When developing with vue-cesium using Mars3D from Mars Technology, you only need to configure the `mars3dConfig` option when importing VueCesium to specify the address of the mars3d main library and plugin libraries. By default, cdn resources from unpkg.com are used. For local or intranet use, you can modify the library resources through mars3dConfig.libs to local or intranet addresses. For non-TS project structures, please [refer](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/viewer/src/loadUtil.ts#L17).

```typescript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './App.vue'
import 'vue-cesium/dist/index.css'

const app = createApp(App)
app.use(VueCesium, {
  // Resources to import, optional. If not specified, only mars3d necessary resources will be loaded
  mars3dConfig: {
    include: 'mars3d'
  }
} as ConfigProviderContext)
app.mount('#app')
```

Or configure `mars3dConfig` on the `vc-viewer` component.

When `vc-viewer` is loaded successfully, it returns { Cesium, viewer, map }. You can use the `map` to reference [mars3d tutorials](http://mars3d.cn/doc.html) and [mars3d API](http://mars3d.cn/api/) for related development, as shown in the example below:

## Basic Usage

Load Mars3D from Mars Technology using VueCesium

:::demo Specify to use Mars3D through the `mars3dConfig` property of `vc-viewer`

platforms/vc-demo-mars3d/usage

:::

## Reference

- Mars3D Official Website： **[http://mars3d.cn](http://mars3d.cn/example.html)**
