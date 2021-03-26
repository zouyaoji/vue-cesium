## 快速上手

本节将介绍如何在项目中使用 VueCesium。

### 使用 Starter Kit

我们提供了通用的[项目模板](https://github.com/zouyaoji/vue-cesium-starter)，你可以直接使用，另外我们还提供了 Vite [模板](https://github.com/zouyaoji/vue-cesium-vite-starter)。

如果不希望使用我们提供的模板，请继续阅读。

### 引入 VueCesium

你可以引入整个 VueCesium，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 VueCesium

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './App.vue'

const app = createApp(App)
app.use(VueCesium)
app.mount('#app')
```

以上代码便完成了 VueCesium 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

借助 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-import:

```bash
$ npm install babel-plugin-import -D
```

或者

```bash
$ yarn add babel-plugin-import -D
```

然后，将 babel.config.js 修改为：

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'vue-cesium'
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 Viewer，那么需要在 main.js 中写入以下内容：

```javascript
import { createApp } from 'vue'
import { VcViewer } from 'vue-viewer'
import App from './App.vue'

const app = createApp(App)
app.component(VcViewer.name, VcViewer)

/* or
 * app.use(VcViewer)
 */

app.mount('#app')
```

完整组件列表和引入方式（完整组件列表以 [reference](https://github.com/zouyaoji/vue-cesium/tree/dev/packages) 为准）

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { VcViewer } from 'vue-cesium'

const components = [VcViewer]

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})
```

### 全局配置

- 待完善

### 开始使用

至此，一个基于 Vue 和 VueCesium 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
