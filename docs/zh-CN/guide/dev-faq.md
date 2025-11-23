---
title: 开发常见问题
lang: zh-CN
---

# 开发常见问题

这里是开发方面容易遇到的问题

## 如何在 Vue for Cesium 中继续使用原生 CesiumJS API 开发？

Vue for Cesium 可能并不完全能提供你所需的功能，但是保留了访问由 Vue for Cesium 创建的 Cesium 有关实例对象的访问权限。

通常，`VcViewer` 组件是创建 Cesium 观察者窗口的根组件，它的 `ready` 事件回调函数的参数可以解构成 `Cesium` 和 `viewer` 两个变量，用于原生 Cesium API 开发。

你也可以使用 ref 模板引用在组件生命周期内随时获取这两个变量。

```vue
<script setup>
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, ref } from 'vue'
import { VcViewer } from 'vue-cesium'

const viewerRef = ref<HTMLElement>(null)

onMounted(() => {
  viewerRef.value.creatingPromise.then((readyObj: VcReadyObject) => {
    console.log(readyObj.Cesium) // Cesium namespace object
    console.log(readyObj.viewer) // instanceof Cesium.Viewer
  })
})

function onViewerReady(readyObj: VcReadyObject) {
  console.log(readyObj.Cesium) // Cesium namespace object
  console.log(readyObj.viewer) // instanceof Cesium.Viewer
}
</script>

<template>
  <VcViewer ref="viewerRef" @ready="onViewerReady" />
</template>
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

```vue
<!-- business-component.vue -->
<script setup>
import type { VcReadyObject, VcViewerProvider } from 'vue-cesium/es/utils/types'
import { onMounted, ref } from 'vue'
import { useVueCesium } from 'vue-cesium'

const $vc: VcViewerProvider = useVueCesium()

function onButtonClick() {
  // 注1：business-component 为 vc-viewer 的子组件
  console.log($vc.viewer) // instanceof Cesium.Viewer
  // 注2： business-component 不是 vc-viewer 的子组件
  $vc.creatingPromise.then((readyObj: VcReadyObject) => {
    console.log(readyObj.viewer) // instanceof Cesium.Viewer
  })
}
</script>

<template>
  <div class="business-component">
    Hellow VueCesium
    <button @click="onButtonClick" />
  </div>
</template>
```

:::tip
注 1：推荐将 business-component 组件作为 vc-viewer 的子组件挂载，正如 [vue-cesium-demo](https://github.com/zouyaoji/vue-cesium-demo) 中的写法。

注 2：如果 business-component 组件不是 vc-viewer 的子组件，vc-viewer 可能就还没初始化完成，需要等 $vc.creatingPromise 状态为 fulfilled 后才能获取到 viewer 。

注 3：如果有多个 vc-viewer 组件，且 business-component 组件不是 vc-viewer 的子组件，请给每个 vc-viewer 组件绑定 `containerId` 为不同的值，然后通过传参调用 useVueCesium(containerId) 以便获取对应的 $vc 。
:::
