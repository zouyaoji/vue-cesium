# Mars3D Demo

vue-cesium 使用火星科技的 [Mars3D](http://mars3d.cn/) 开发时只需要在引入 VueCesium 时通过配置项 `mars3dConfig` 配置 mars3d 主库和其插件库地址，默认使用 unpkg.com 的 cdn 资源，如需本地或局域网使用，请通过 mars3dConfig.libs 将相关库的资源改为本地或局域网地址即可。非 TS 项目结构请 [参考](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/viewer/src/loadUtil.ts#L17)。

```typescript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './App.vue'
import 'vue-cesium/dist/index.css'

const app = createApp(App)
app.use(VueCesium, {
  // 要引入的资源库,可选。不指定的话只加载 mars3d 必要资源
  mars3dConfig: {
    include: 'mars3d'
  }
} as ConfigProviderContext)
app.mount('#app')
```

或者在 `vc-viewer` 组件上配置 `mars3dConfig` 。

`vc-viewer` 加载成功会返回 { Cesium, viewer, map }, 通过该 `map` 使用 [mars3d 教程](http://mars3d.cn/doc.html) 和 [mars3d API](http://mars3d.cn/api/) 进行相关开发即可， 如下面的例子：

## 基础用法

使用 VueCesium 加载火星科技 Mars3D

:::demo 通过 `vc-viewer` 的 `mars3dConfig` 属性指定使用 Mars3D

platforms/vc-demo-mars3d/usage

:::

## 参考

- Mars3D 平台官网： **[http://mars3d.cn](http://mars3d.cn/example.html)**
