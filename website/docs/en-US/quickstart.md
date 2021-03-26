## Quick start

This part walks you through the process of using VueCesium in a webpack project.

### Use Starter Kit

We provide a general [project template](https://github.com/zouyaoji/vue-cesium-starter) for you, and also a Vite [template(https://github.com/zouyaoji/vue-cesium-vite-starter)].

If you prefer not to use them, please read the following.

### Import VueCesium

You can import VueCesium entirely, or just import what you need. Let's start with fully import.

#### Fully import

In main.js:

```javascript
import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
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
import { VcViewer } from 'vue-viewer'
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

- To be added

### Start coding

Now you have implemented Vue and VueCesium to your project, and it's time to write your code. Please refer to each component's documentation to learn how to use them.
