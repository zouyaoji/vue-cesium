---
title: 快速开始
lang: zh-CN
---

# 快速开始

本节将介绍如何在项目中使用 Vue for Cesium。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './App.vue'
import 'vue-cesium/dist/index.css'

const app = createApp(App)

app.use(VueCesium)
app.mount('#app')
```

#### Volar 支持

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.types` 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vue-cesium/global"]
  }
}
```

### 按需导入

Vue for Cesium 提供了基于 ES Module 的开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)功能。

> App.vue

```vue
<script setup>
import { reactive } from 'vue'
import { VcConfigProvider, VcViewer } from 'vue-cesium'

const vcConfig = reactive({
  cesiumPath: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js'
})
</script>

<template>
  <VcConfigProvider :cesium-path="vcConfig.cesiumPath">
    <VcViewer />
  </VcConfigProvider>
</template>
```

## 快捷搭建项目模板

我们提供了 [Vite 模板](https://github.com/zouyaoji/vue-cesium-vite-starter).

## 全局配置

## 开始使用

现在你可以启动项目了。 对于每个组件的用法，请查阅 [对应的独立文档](/zh-CN/component/config-provider.html).
