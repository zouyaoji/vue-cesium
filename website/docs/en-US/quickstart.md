## Quick start

This section describes how to use VueCesium in your project.

### Using components

### Full import

> main.ts

```typescript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(VueCesium)
app.mount('#app')
```

### Import on demand

`VueCesium` provides out of box [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
functionalities based on ES Module.

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

### Using Starter Kit

We provide a general [Project Template](https://github.com/zouyaoji/vue-cesium-starter),
also a [Vite Template](https://github.com/zouyaoji/vue-cesium-vite-starter).
For Electron users we have a [Electron Template](https://github.com/zouyaoji/vue-cesium-electron-vite-starter).

### Global configuration

When registering VueCesium, you can pass a global config object with `cesiumPath`, `accessToken` and `locale`. `cesiumPath` is used to specify the `CesiumJS` library loaded by VueCesium, support loading the official version of Cesium or a third-party version developed based on Cesium, **Note:** Please use the files in the Build directory. And `accessToken` is used to set `Cesium.Ion.defaultAccessToken`. `locale` is used for internationalized languages. For details, see the next section of the document.

### Full import

```js
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(VueCesium, {
  // cesiumPath is the web service address that guides the use of Cesium.js, which can be a local or CDN address such as
  // cesiumPath: /static/Cesium/Cesium.js
  // cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
  // cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js'
  cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
  // If you need to use Cesium ion resources, you need to specify it. Go to https://cesium.com/ion/ to apply for an account and get Access Token. If it is not specified, it may cause the loading of CesiumIon's online images and terrain to fail.
  accessToken: 'Your Cesium Ion defaultAccessToken'
})
app.mount('#app')
```

### On demand

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

(The complete component list is subject to [reference](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/vue-cesium/component.ts))

### Start coding

Now you have implemented Vue and VueCesium to your project, and it's time to write your code. Please refer to each component's documentation to learn how to use them.
