# 快速开始

本节将介绍如何在项目中使用 VueCesium。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(VueCesium)
app.mount('#app')
```

### 按需导入

`VueCesium`的 JS 代码默认支持基于 ES modules 的 [摇树 tree shaking](https://webpack.js.org/guides/tree-shaking/)。

> App.vue

```html
<template>
  <vc-viewer></vc-viewer>
</template>
<script>
  import { defineComponent } from 'vue'
  import { VcViewer } from 'vue-cesium'

  export default defineComponent({
    name: 'app'
    components: {
      VcViewer
    }
  })
</script>
```

### 导入样式

我们**强烈建议直接引入全部的样式文件**，虽然这看起来会增大整个应用的体积，但这样做可以避免引入额外的打包工具插件（减少负担），你还可以通过 [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)
的方式来加载样式文件，从而使得你的应用加载更快。

通过 JS 的方式引入

```typescript
import 'vue-cesium/dist/index.css'
```

通过 HTML 的头文件引入

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/vue-cesium@next/dist/index.css" />
</head>
```

## 使用模板

我们提供了通用的[项目模板](https://github.com/zouyaoji/vue-cesium-starter)，你可以直接使用，另外我们还提供了 [Vite 模板](https://github.com/zouyaoji/vue-cesium-vite-starter) 以及 [Vite + Electron 模板](https://github.com/zouyaoji/vue-cesium-electron-vite-starter)。

如果不希望使用我们提供的模板，请继续阅读。

## 全局配置

在引入 `VueCesium` 时，可以传入一个全局的配置对象。该对象目前支持 `cesiumPath` 、 `accessToken` 以及 `locale` 字段。`cesiumPath` 用于改变组件默认加载的 `Cesium` 库，`accessToken` 设置 `Cesium.Ion.defaultAccessToken` 的值。而 `locale` 用于国际化语言，具体使用方式见下一节文档。

完整引入：

在 main.js 中写入以下内容：

```js
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(VueCesium, {
  // cesiumPath 是指引用 Cesium.js 的Web服务地址，可以是本地或者 CDN 地址如
  // cesiumPath: /static/Cesium/Cesium.js
  // cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
  // cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js'
  cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
  // 如果需要使用 Cesium ion 的资源时需要指定。到 https://cesium.com/ion/ 申请一个账户，获取Access Token。不指定的话可能导致 CesiumIon 的在线影像、地形加载失败。
  accessToken: 'Your Cesium Ion defaultAccessToken'
})
app.mount('#app')
```

按需导入：

如果你只希望引入部分组件，比如 VcViewer，那么需要在 main.js 中写入以下内容：

```js
import { createApp } from 'vue'
import { VcViewer } from 'vue-viewer'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$VueCesium = {
  cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js'
}
app.use(VcViewer)
app.mount('#app')
```

（完整组件列表以 [reference](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/vue-cesium/component.ts) 为准）

## Volar 支持

如果你使用 volar 插件，请在  `tsconfig.json` 或者 `jsconfig.json` 文件中 `compilerOptions.types` 添加如下配置：

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vue-cesium/global"]
  }
}
```

## Cesium.d.ts 支持

如果你想用得到 Cesium API 语法提示，请在  `tsconfig.json` 或者 `jsconfig.json` 文件中 `compilerOptions.types` 添加如下配置：

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vue-cesium/Cesium"]
  }
}
```

### 开始使用

至此，一个基于 Vue 和 VueCesium 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
