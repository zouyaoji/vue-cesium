---
title: Quick Start
lang: en-US
---

# Quick Start

This section describes how to use Vue for Ceisum in your project.

## Usage

### Full Import

If you don’t care about the bundle size so much, it’s more convenient to use full import.

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

#### Volar support

If you use volar, please add the global component type definition to `compilerOptions.types` in `tsconfig.json`.

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vue-cesium/global"]
  }
}
```

### On-demand Import

Vue for Cesium provides out of box [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
functionalities based on ES Module.

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

## Starter Template

We provide a [Vite Template](https://github.com/zouyaoji/vue-cesium-vite-starter).

## Global Configuration

## Let's Get Started

You can bootstrap your project from now on. For each components usage, please
refer to [the individual component documentation](/en-US/component/config-provider.html).
