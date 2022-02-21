# Quick start

This section describes how to use VueCesium in your project.

## Usage

### Full import

If you don’t care about the bundle size so much, it’s more convenient to use full import.

When registering VueCesium, you can pass a global config object with `cesiumPath`, `accessToken` and `locale`. `cesiumPath` is used to specify the `CesiumJS` library loaded by VueCesium. And `accessToken` is used to set value of `Cesium.Ion.defaultAccessToken`. `locale` is used for internationalized languages, For details, see the next section of the document.

```typescript
// main.ts
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(VueCesium)
// // or
// app.use(VueCesium, {
//   // cesiumPath is the web service address that guides the use of Cesium.js, which can be a local or CDN address such as
//   // cesiumPath: /static/Cesium/Cesium.js
//   // cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
//   // cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js'
//   cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
//   // If you need to use Cesium ion resources, you need to specify it. Go to https://cesium.com/ion/ to apply for an account and get Access Token. If it is not specified, it may cause the loading of CesiumIon's online images and terrain to fail.
//   accessToken: 'Your Cesium Ion defaultAccessToken'
// })
app.mount('#app')
```

### On-demand Import

`VueCesium` provides out of box [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
functionalities based on ES Module.

> xxx.vue

```html
<template>
  <vc-config-provider :cesium-path="cesiumPath">
    <vc-viewer></vc-viewer>
  </vc-config-provider>
</template>
<script setup>
  import { defineComponent } from 'vue'
  import { VcConfigProvider, VcViewer } from 'vue-cesium'
  export default defineComponent({
    components: {
      VcConfigProvider,
      VcViewer
    },
    setup() {
      return {
        cesiumPath: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js'
      }
    }
  })
</script>
```

(The complete component list is subject to [reference](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/vue-cesium/component.ts))

### Import stylesheets

It is **strongly recommended** that you import the **bundled stylesheet file**, even
though this could increase the final output bundle size, but it requires no
packaging plugins for bundling, you can use
[CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) to load your stylesheet
which would be much more faster than hosting the file on your own server.

Import via JavaScript

```typescript
import 'vue-cesium/dist/index.css'
```

Import via HTML `head` tag.

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/vue-cesium@next/dist/index.css" />
</head>
```

### TypeScript support

Please add the following configuration to the `tsconfig.json` or `jsconfig.json` file:

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vue-cesium/global", "vue-cesium/Cesium"]
  },
  "include": ["src/**/*", "node_modules/vue-cesium/Cesium.d.ts"]
}
```

The above configuration will be adapted to the volar plugin and will be prompted by the Cesium API.

### Starter Template

We provide a general [Project Template](https://github.com/zouyaoji/vue-cesium-starter),
also a [Vite Template](https://github.com/zouyaoji/vue-cesium-vite-starter).
For Electron users we have a [Electron Template](https://github.com/zouyaoji/vue-cesium-electron-vite-starter).
And a comprehensive case of Vue 3 + Typescript + Vite [vue-cesium-demo](https://github.com/zouyaoji/vue-cesium-demo), which can also be downloaded and used.

### Let's Get Started

You can bootstrap your project from now on, for each components usage, please
refer to individual component documentation.
