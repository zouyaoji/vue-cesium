## VcNavigationSm

The navigation component that mimics the supermap. It is composed of `vc-compass-sm` and `vc-zoom-control-sm`.

**Note:** Style files need to be imported: `import 'vue-cesium/dist/index.css';`

### Basic usage

Basic usage of VcNavigationSm component.

:::demo Just mount the `vc-navigation-sm` tag as a subcomponent of `vc-viewer`.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-navigation-sm @zoomEvt="onNavigationEvt" @compassEvt="onNavigationEvt" ref="navigation"></vc-navigation-sm>
    <vc-navigation-sm position="left" :compassOpts="{ autoHidden: false }" :zoomOpts="{ autoHidden: false }"></vc-navigation-sm>
    <vc-compass-sm :autoHidden="false" position="bottom" :offset="[200, 20]"></vc-compass-sm>
    <vc-compass-sm position="bottom" :offset="[-200, 20]"></vc-compass-sm>
    <vc-zoom-control-sm position="bottom" :offset="[0, 50]"></vc-zoom-control-sm>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>
<script>
  export default {
    methods: {
      load() {
        this.$refs.navigation.load()
      },
      reload() {
        this.$refs.navigation.reload()
      },
      unload() {
        this.$refs.navigation.unload()
      },
      onNavigationEvt(e) {
        console.log(e)
      }
    }
  }
</script>
```

:::

### VcNavigationSm Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ---- | ---- | ------- | ----------- | --------------- |
| position | String | `top-right` | `optional` Specify the location of the navigation component. |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` Specifies the position-based offset of the navigation component. ||
| compassOpts | Object\|false | Same as `VcCompassSm` | `optional` Specify the compass control parameters, false means not to display. ||
| zoomOpts | Object\|false | Same as `VcZoomControlSm` | `optional` Specify the zoom control parameters, false means not display. ||

:::tip
Default parameters of `compassOpts`, `zoomOpts`:
:::
:::tipflex

```js
// compassOpts
{
  enableCompassOuterRing: true,
  duration: 1.5,
  autoHidden: true,
  tooltip: {
    delay: 1000,
    anchor: 'bottom middle',
    offset: [0, 20],
    tip: void 0 // If not specified, the default value of the corresponding language is used
  }
}
```

```js
// zoomOpts
{
  autoHidden: true,
  tooltip: {
    delay: 1000,
    anchor: 'bottom middle',
    offset: [0, 20],
    zoomInTip: void 0,
    zoomOutTip: void 0,
    zoomBarTip: void 0
  }
}
```

:::

### VcNavigationSm Events

| Name       | Parameters | Description                                    |
| ---------- | ---------- | ---------------------------------------------- |
| zoomEvt    |            | Triggers when the zoom control is operated.    |
| compassEvt |            | Triggers when the compass control is operated. |

### VcCompass

Compass components.

### VcCompassSm Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ----- | ---- | ----- | ---- | ---- |
| position | String | `top-right` | `optional` Specify the compass position. |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left|
| offset | Array | `[0, 0]` | `optional` Specifies the position-based offset of the compass. ||
| enableCompassOuterRing | String | `true` | `optional` Specify whether the outer ring of the compass can be operated. ||
| duration | Number | `1.5` | `optional` Specify the flight time of double-clicking the compass to restore the pitch angle, in seconds. ||
| tooltip | Object | | `optional` Specify the compass prompt information. |
| autoHidden | Boolean | `true` | `optional` Specify whether to automatically hide parts of the compass controls. ||

### VcCompassSm Events

| Name       | Parameters | Description                                    |
| ---------- | ---------- | ---------------------------------------------- |
| compassEvt |            | Triggers when the compass control is operated. |

### VcZoomControlSm

Zoom component.

### VcZoomControlSm Props

<!-- prettier-ignore -->
| Name | Type | Default | Description | Accepted Values |
| ----- | ---- | ----- | ---- | ---- |
| position | String | `top-right` | `optional` Specify the position of the zoom component. |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left|
| offset | Array | `[0, 0]` | `optional` Specifies the position-based offset of the zoom control. ||
| tooltip | Object | | `optional` Specify the compass prompt information. ||
| autoHidden | Boolean | `true` | `optional` Specify whether to automatically hide the zoom control. ||

### VcZoomControlSm Events

| Name    | Parameters | Description                                 |
| ------- | ---------- | ------------------------------------------- |
| zoomEvt |            | Triggers when the zoom control is operated. |
