## Quick start

This part walks you through the process of using VueCesium in a webpack project.

### Use Starter Kit

We provide a general [project template](https://github.com/zouyaoji/vue-cesium-starter) for you, and also a Vite [template](https://github.com/zouyaoji/vue-cesium-vite-starter).

If you prefer not to use them, please read the following.

### Import VueCesium

You can import VueCesium entirely, or just import what you need. Let's start with fully import.

#### Fully import

In main.js:

```javascript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import 'vue-cesium/lib/theme-default/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(VueCesium)
app.mount('#app')
```

The above imports VueCesium entirely. Note that CSS file needs to be imported separately.

#### On demand

With the help of [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), we can import components we actually need, making the project smaller than otherwise.

Firstly，install babel-plugin-import:

```bash
$ npm install babel-plugin-import -D
```

or if you use Yarn as package manager

```bash
$ yarn add babel-plugin-import -D
```

Then edit babel.config.js:

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

Next, if you need Viewer, edit main.js:

```javascript
import { createApp } from 'vue'
import { VcViewer } from 'vue-cesium'
import App from './App.vue'

const app = createApp(App)
app.component(VcViewer.name, VcViewer)

/* or
 * app.use(VcViewer)
 */

app.mount('#app')
```

Full example (Component list [reference](https://github.com/zouyaoji/vue-cesium/tree/dev/packages))

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

### Global config

When importing VueCesium, you can define a global config object. For now this object has two properties: `cesiumPath` and `accessToken`. `cesiumPath` is used to specify the `CesiumJS` library loaded by VueCesium, support loading the official version of Cesium or a third-party version developed based on Cesium, **Note:** Please use the files in the Build directory. And `accessToken` is used to set `Cesium.Ion.defaultAccessToken`. According to the method of introducing VueCesium, the specific operations are as follows:

Fully import VueCesium:

```js
import { createApp } from 'vue'
import VueCesium from 'vue-cesium';
import App from './App.vue';

const app = createApp(App)
app.use(VueCesium, {
  // cesiumPath is the path of Cesium.js, such as
  // cesiumPath: /static/Cesium/Cesium.js
  // cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
  cesiumPath: 'Your CesiumJS Path',
  // To use the data source of Cesium ion, you need to apply for an account at https://cesium.com/ion/ to obtain Access Token.
  // If not specified, it may cause CesiumIon's online image and terrain loading failure
  accessToken: 'Your Cesium Ion defaultAccessToken'
}

```

Partial import VueCesium

```js
import { createApp } from 'vue'
import { VcViewer } from 'vue-cesium'
import App from './App.vue'

const option = {
  // cesiumPath is the path of Cesium.js, such as
  // cesiumPath: /static/Cesium/Cesium.js
  // cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
  cesiumPath: 'Your CesiumJS Path',
  // To use the data source of Cesium ion, you need to apply for an account at https://cesium.com/ion/ to obtain Access Token.
  // If not specified, it may cause CesiumIon's online image and terrain loading failure
  accessToken: 'Your Cesium Ion defaultAccessToken'
}
const app = createApp(App)
app.config.globalProperties.$VueCesium = option
app.use(VcViewer)
```

### Start coding

Now you have implemented Vue and VueCesium to your project, and it's time to write your code. Please refer to each component's documentation to learn how to use them.
