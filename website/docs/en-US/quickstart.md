# Quick start

`VueCesium` completes the Vue componentization of CesiumJS, you can use each component provided by this library in your Vue project. This library itself does not contain CesiumJS, so it is usually necessary to configure CesiumJS itself when importing, see [Configuring VueCesium (below this article)](./#/en-US/component/quickstart#configure-vuecesium).

## Full import

If you don’t care about the bundle size so much, it’s more convenient to use full import. And you can use Vue's [plugin](https://vuejs.org/guide/reusability/plugins.html) installation method to configure it globally.

```ts
// main.ts
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './App.vue'

import 'vue-cesium/dist/index.css'

const app = createApp(App)
app.use(VueCesium)

app.mount('#app')
```

:::tip
The Cesium version at https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js is used by default
:::

## On-demand Import

`VueCesium` provides out of box [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
functionalities based on ES Module.

For example, you can use VueCesium in any single-file component, such as the `VcViewer` component.

```html
<template>
  <vc-config-provider :cesium-path="vcConfig.cesiumPath">
    <vc-viewer></vc-viewer>
  </vc-config-provider>
</template>
<script setup>
  import { reactive } from 'vue'
  import { VcConfigProvider, VcViewer } from 'vue-cesium'

  const vcConfig = reactive({
    cesiumPath: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js'
  })
</script>
```

(The complete component list is subject to [reference](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/vue-cesium/component.ts))

## Configure VueCesium

You can do some custom configuration to VueCesium:

```ts
import enUS from 'vue-cesium/es/locale/lang/en-us'

app.use(VueCesium, {
  cesiumPath: 'path/to/Cesium.js',
  accessToken: 'your Cesium Ion access token',
  locale: enUS // change to English
})
```

- `cesiumPath`, `string` type, is the URL where your app accesses the main file of the `CesiumJS` library (that is, `Cesium.js`);
- `accessToken`, `string` type, Cesium Ion's access token, when you need to access Cesium official terrain services and other resources, you need to pass this token, you can go to [Cesium AccessToken](https://cesium.com /ion/tokens) page to register an account to apply.
- `locale`, `Language` type (see [`packages/locale/index.ts`](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/locale/index.ts)), specify the language of each component, currently supports Simplified Chinese and English by default, see the next section of the document for details.

:::tip
Please make sure that cesiumPath must be the web service address, and it can be accessed normally after entering it in the browser address bar.
:::

## Import stylesheets

It is <span style="color: rgb(66 184 131);"><b>strongly recommended</b></span> that you import the <span style="color: rgb(66 184 131);"><b>bundled stylesheet file</b></span>, even
though this could increase the final output bundle size, but it requires no
packaging plugins for bundling. you can use
[CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) to load your stylesheet
which would be much more faster than hosting the file on your own server.

Import via JavaScript

```ts
import 'vue-cesium/dist/index.css'
```

Import via HTML `head` tag.

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/vue-cesium@next/dist/index.css" />
</head>
```

## TypeScript and code intellisense support

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

The above configuration will be adapted to the volar plugin of vscode and will be prompted by the Cesium API.

## How to continue developing with native CesiumJS API in VueCesium?

VueCesium may not provide exactly what you need, but retains access to Cesium-related instance objects created by VueCesium.

Usually, the `VcViewer` component is the root component for creating a Cesium observer window, and the parameters of its `ready` event callback function can be decomposed into two variables, `Cesium` and `viewer`, for native Cesium API development.

You can also use ref template references to access these two variables at any time during the component's lifecycle.

```ts
<template>
  <vc-viewer ref="viewerRef" @ready="onViewerReady"> </vc-viewer>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { VcViewer } from 'vue-cesium'
  import type { VcReadyObject } from 'vue-cesium/es/utils/types'

  const viewerRef = ref<HTMLElement>(null)

  onMounted(() => {
    viewerRef.value.creatingPromise.then((readyObj: VcReadyObject) => {
      console.log(readyObj.Cesium) // Cesium namespace object
      console.log(readyObj.viewer) // instanceof Cesium.Viewer
    })
  })

  const onViewerReady = (readyObj: VcReadyObject) => {
    console.log(readyObj.Cesium) // Cesium namespace object
    console.log(readyObj.viewer) // instanceof Cesium.Viewer
  }
</script>
```

:::tip
The `Cesium` variable is the namespace, through which you can access CesiumJS native API, such as `Cesium.Cartesian3`; and the `viewer` parameter is the observer instance, please refer to the official CesiumJS documentation.
:::

:::tip
In fact, VueCesium is introduced into Cesium through dynamic tags, so Cesium variables are actually global. It's just that it needs to become an accessible global variable after the `cesiumReady` event of vc-viewer at the earliest. If you find this inconvenient, you can also consider writing it directly into the `head` tag of the project template file index.html, see [#155](https://github.com/zouyaoji/vue-cesium/issues/155#issuecomment-1042470701). Once written like this, the Cesium variable already exists when VueCesium is initialized, and Cesium will not be introduced again through dynamic tags.

Just in the JS project, if ESLint is configured, we need to tell ESLint that Cesium is a global variable, and in the TS project, we need to declare Cesium as a global variable or introduce Cesium.d.ts (the latter is recommended), the configuration of the two Please refer to [ESLint configuration](https://github.com/zouyaoji/vue-cesium-starter/blob/main/.eslintrc.js#L11) and [TS configuration](https://github.com/zouyaoji/vue-cesium-demo/blob/main/tsconfig.json).
:::

## How to get viewer instance in other Vue components?

It is not recommended to hang directly on the window rudely, except for debugging, of course. Usually we need to maintain a global viewer instance so that other components (pages) can get and use it. Vue2 can be directly linked to the Vue prototype chain or Vuex.

In Vue3, with the blessing of Composition API, it can be easily obtained through `useVueCesium`, which is also our recommended practice.

```ts
// business-component.vue
<template>
  <div class="business-component">
    Hellow VueCesium
    <button @click="onButtonClick"></button>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useVueCesium } from 'vue-cesium'
  import type { VcViewerProvider, VcReadyObject } from 'vue-cesium/es/utils/types'

  const $vc: VcViewerProvider = useVueCesium()

  const onButtonClick = () => {
    // Note 1: business-component is a sub-component of vc-viewer
    console.log($vc.viewer) // instanceof Cesium.Viewer
    // Note 2: business-component is not a subcomponent of vc-viewer
    $vc.creatingPromise.then((readyObj: VcReadyObject) => {
      console.log(readyObj.viewer) // instanceof Cesium.Viewer
    })
  }
</script>
```

:::tip
Note 1: It is recommended to mount the business-component component as a subcomponent of vc-viewer, as written in [vue-cesium-demo](https://github.com/zouyaoji/vue-cesium-demo).

Note 2: If the business-component component is not a sub-component of vc-viewer, vc-viewer may not be initialized yet, and you need to wait for the $vc.creatingPromise state to be fulfilled before you can get the viewer.
:::

## use template

### Prefer VueCLI

We provide a general [VueCLI4 + Vue3Js + Vuex4 + VueRouter4 project template](https://github.com/zouyaoji/vue-cesium-starter), you can download and use it directly.

### Try Vite

In addition, we also provide [Vite2 + Vue3Ts template](https://github.com/zouyaoji/vue-cesium-vite-starter).

There is also a [Vite2 + Vue3Ts + Vuex4 + VueRouter4 comprehensive case](https://github.com/zouyaoji/vue-cesium-demo), which can also be downloaded and used.

### Desktop Development

If you are interested in desktop applications, you can refer to [Vite2 + Vue3Ts + Electron13 template](https://github.com/zouyaoji/vue-cesium-electron-vite-starter).

### About Vue2

Since Vue2 will gradually enter the maintenance period, please create your own project to use `VueCesium`.

## Let's Get Started

You can bootstrap your project from now on, for each components usage, please
refer to individual component documentation.
