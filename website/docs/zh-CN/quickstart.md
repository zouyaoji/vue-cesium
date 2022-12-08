# 快速开始

`Vue for Cesium` 完成了 CesiumJS 的 Vue 组件化，你可以在你的 Vue 项目中使用这个库提供的各个组件。本库本身不含 CesiumJS，所以在引入时通常需要配置 CesiumJS 本身，见 [配置 Vue for Cesium（本篇下文）](./#/zh-CN/component/quickstart#pei-zhi-vuecesium)。

接下来将介绍如何在使用 Vue3 项目中引入 `Vue for Cesium`。

## 全量导入

如果你对打包后的文件大小不是很在乎，那么你可以使用 Vue 的 [插件](https://staging-cn.vuejs.org/guide/reusability/plugins.html) 安装方式配置到全局。

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
将默认使用 https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js
:::

## 按需导入

`Vue for Cesium` 提供了基于 ES Module 开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) 功能。

例如，你可以在任意单文件组件中使用 Vue for Cesium，这里以 `VcViewer` 组件为例。

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

按需导入需要使用配置提供器 `VcConfigProvider` 组件，向下传递配置参数。

（完整组件列表以 [reference](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/vue-cesium/component.ts) 为准）

## 配置 Vue for Cesium

你可以对 Vue for Cesium 做一些自定义的配置：

```ts
import enUS from 'vue-cesium/es/locale/lang/en-us'

app.use(VueCesium, {
  cesiumPath: 'path/to/Cesium.js',
  accessToken: '你的 Cesium Ion 访问令牌',
  locale: enUS // 改成英文
})
```

其中：

- `cesiumPath`，`string` 类型，是打包后你的页面访问 `CesiumJS` 库的主文件（也就是 `Cesium.js`）的 URL；
- `accessToken`，`string` 类型，Cesium 的访问令牌，当你需要访问 Cesium 官方地形服务等资源时，你需要传递此令牌，你可以到 [Cesium AccessToken](https://cesium.com/ion/tokens) 页面自行注册账号申请。
- `locale`，`Language` 类型（见 [`packages/locale/index.ts`](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/locale/index.ts)），指定各个组件的语言，当前默认支持简体中文、英文，具体内容见下一节文档。

:::tip
请确保 cesiumPath 必须是 Web 服务地址，且在浏览器地址栏输入后能正常访问。
:::

## 导入样式

我们强烈建议<span style="color: rgb(66 184 131);"><b>直接引入全部的样式文件</b></span>，虽然这看起来会增大整个应用的体积，但这样做可以避免引入额外的打包工具插件（减少负担）。

样式的导入可确保各个有自己 UI 的功能组件显示正常。

你还可以通过 [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)
的方式来加载样式文件，从而使得你的应用加载更快。下面列举两个引入方式。

- 通过 ESModule 的方式引入

```typescript
// main.ts
import 'vue-cesium/dist/index.css'
```

- 通过 CDN 引入

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="//unpkg.com/vue-cesium@next/dist/index.css" />
</head>
```

## TypeScript 及代码智能提示支持

请在 `tsconfig.json` 或者 `jsconfig.json` 文件中 `compilerOptions.types` 和 `includes` 中添加如下配置：

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": [
      // ...
      "vue-cesium/global",
      "vue-cesium/Cesium"
    ]
  },
  "include": ["src/**/*", "node_modules/vue-cesium/Cesium.d.ts", "node_modules/vue-cesium/global.d.ts"]
}
```

以上配置将适配 vscode 的 Volar 插件，并得到 CesiumJS API 提示。

## 如何在 Vue for Cesium 中继续使用原生 CesiumJS API 开发？

Vue for Cesium 可能并不完全能提供你所需的功能，但是保留了访问由 Vue for Cesium 创建的 Cesium 有关实例对象的访问权限。

通常，`VcViewer` 组件是创建 Cesium 观察者窗口的根组件，它的 `ready` 事件回调函数的参数可以解构成 `Cesium` 和 `viewer` 两个变量，用于原生 Cesium API 开发。

你也可以使用 ref 模板引用在组件生命周期内随时获取这两个变量。

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
`Cesium` 变量即命名空间，你可以通过它访问 CesiumJS 原生的 API，例如 `Cesium.Cartesian3`；而 `viewer` 参数则是观察者实例，参考 CesiumJS 官方文档即可。
:::

:::tip
实际上 Vue for Cesium 是通过动态标签引入 Cesium 的，所以 Cesium 变量其实是全局的。只是它最快需要在 vc-viewer 的 `cesiumReady` 事件之后才成为可访问的全局变量。如果您觉得这样不方便，也可以考虑将其直接写到项目模板文件 index.html 的 `head` 标签中，详见[#155](https://github.com/zouyaoji/vue-cesium/issues/155#issuecomment-1042470701)。一旦这样写，在 Vue for Cesium 在初始化时 Cesium 变量就已经存在了，就不会再去通过动态标签再次引入 Cesium 了。

只是在 JS 项目中，如果配置了 ESLint ，我们需要告诉 ESLint Cesium 已经是全局变量了，而 TS 项目中则需要声明 Cesium 为全局变量或者引入 Cesium.d.ts (推荐后者) ，两者的配置请分别参考[ESLint 配置](https://github.com/zouyaoji/vue-cesium-starter/blob/main/.eslintrc.js#L11) 和 [TS 配置](https://github.com/zouyaoji/vue-cesium-demo/blob/main/tsconfig.json)。
:::

## 如何在其他 Vue 组件中获取 viewer 实例？

不推荐粗暴的直接挂在 window 上，当然调试除外。通常我们需要维护一个全局的 viewer 实例，以方便其他组件（页面）获取到并使用。Vue2 中可以直接挂到 Vue 原型链上 或者 Vuex 中。

Vue3 中在组合式 API 的加持下可以通过 `useVueCesium` 很方便的获取到，这也是我们比较推荐的做法。

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
    // 注1：business-component 为 vc-viewer 的子组件
    console.log($vc.viewer) // instanceof Cesium.Viewer
    // 注2： business-component 不是 vc-viewer 的子组件
    $vc.creatingPromise.then((readyObj: VcReadyObject) => {
      console.log(readyObj.viewer) // instanceof Cesium.Viewer
    })
  }
</script>
```

:::tip
注 1：推荐将 business-component 组件作为 vc-viewer 的子组件挂载，正如 [vue-cesium-demo](https://github.com/zouyaoji/vue-cesium-demo) 中的写法。

注 2：如果 business-component 组件不是 vc-viewer 的子组件，vc-viewer 可能就还没初始化完成，需要等 $vc.creatingPromise 状态为 fulfilled 后才能获取到 viewer 。

注 3：如果有多个 vc-viewer 组件，且 business-component 组件不是 vc-viewer 的子组件，请给每个 vc-viewer 组件绑定 `containerId` 为不同的值，然后通过传参调用 useVueCesium(containerId) 以便获取对应的 $vc 。
:::

## 使用模板

### 更喜欢 VueCLI

我们提供了通用的 [VueCLI4 + Vue3Js + Vuex4 + VueRouter4 项目模板](https://github.com/zouyaoji/vue-cesium-starter)，你可以直接下载使用。

### 试试 Vite

另外我们还提供了 [Vite2 + Vue3Ts 模板](https://github.com/zouyaoji/vue-cesium-vite-starter)。

这里还有一个 [Vite2 + Vue3Ts + Vuex4 + VueRouter4 综合案例](https://github.com/zouyaoji/vue-cesium-demo)，同样可下载使用。

### 桌面开发

如果你对桌面应用感兴趣，你可以参考 [Vite2 + Vue3Ts + Electron13 模板](https://github.com/zouyaoji/vue-cesium-electron-vite-starter)。

### 关于 Vue2

由于 Vue2 将逐渐进入维护期，所以劳请自行创建项目使用 `Vue for Cesium`.

## 开始使用

您可以从现在起启动您的项目。

对于每个组件的用法，请参考单个组件对应的文档。
