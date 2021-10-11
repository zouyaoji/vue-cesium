## VcNavigationSm

导航组件 —— 高仿超图样式。由 `vc-compass-sm`、`vc-zoom-control-sm` 组合而成。

**注意：** 需要引入样式文件: `import 'vue-cesium/default/index.css';`

### 基础用法

导航组件的基础用法。

:::demo 将 `vc-navigation-sm` 标签作为 `vc-viewer` 的子组件挂载即可。

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
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
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

### VcNavigationSm 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ----- | ---- | ----- | ---- | ---- |
| position | String | `top-right` | `optional` 指定导航组件位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left|
| offset | Array | `[0, 0]` | `optional` 指定导航组件基于位置的偏移量。 ||
| compassOpts | Object\|false | 与 `VcCompassSm` 保持一致 | `optional` 指定罗盘控件参数，false 即不显示。 ||
| zoomOpts | Object\|false | 与 `VcZoomControlSm` 保持一致 | `optional` 指定缩放控件参数，false 即不显示。 ||

:::tip
提示 `compassOpts`、`zoomOpts` 默认参数：
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
    tip: void 0 // 未指定则用对应语言的默认值
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

### VcNavigationSm 事件

| 事件名     | 参数 | 描述                 |
| ---------- | ---- | -------------------- |
| zoomEvt    |      | 操作缩放控件时触发。 |
| compassEvt |      | 操作罗盘控件时触发。 |

### VcCompass

罗盘组件。

### VcCompassSm 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ----- | ---- | ----- | ---- | ---- |
| position | String | `top-right` | `optional` 指定罗盘位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left|
| offset | Array | `[0, 0]` | `optional` 指定罗盘基于位置的偏移量。 ||
| enableCompassOuterRing | String | `true` | `optional` 指定罗盘外环是否可以操作。 ||
| duration | Number | `1.5` | `optional` 指定双击罗盘恢复俯仰角飞行时间，单位秒。 ||
| tooltip | Object | | `optional` 指定罗盘提示信息参数。 |
| autoHidden | Boolean | `true` | `optional` 指定是否自动隐藏罗盘部分控件。 ||

### VcCompassSm 事件

| 事件名     | 参数 | 描述                 |
| ---------- | ---- | -------------------- |
| compassEvt |      | 操作罗盘控件时触发。 |

### VcZoomControlSm

缩放组件。

### VcZoomControlSm 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ----- | ---- | ----- | ---- | ---- |
| position | String | `top-right` | `optional` 指定缩放控件位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left|
| offset | Array | `[0, 0]` | `optional` 指定缩放控件基于位置的偏移量。 ||
| tooltip | Object | | `optional` 指定罗盘提示信息参数。 ||
| autoHidden | Boolean | `true` | `optional` 指定是否自动隐藏放大控件。 ||

### VcZoomControlSm 事件

| 事件名  | 参数 | 描述                 |
| ------- | ---- | -------------------- |
| zoomEvt |      | 操作缩放控件时触发。 |
