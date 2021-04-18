## VcZoomControl

缩放组件。

**注意：** 该需要引入样式文件: `import 'vue-cesium/lib/theme-default/index.css';`

### 基础用法

缩放组件的基础用法。

:::demo 将 `vc-zoom-control` 标签作为 `vc-viewer` 的子组件挂载即可。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-zoom-control ref="zoomControl"></vc-zoom-control>
    <vc-zoom-control
      position="bottom"
      direction="horizontal"
      :offset="[0, 30]"
      :zoomResetOptions="{size: '48px', color: '#21BA45'}"
    ></vc-zoom-control>
    <vc-zoom-control position="bottom" :enableResetButton="false" borderRadius="0" :offset="[0, 120]"></vc-zoom-control>
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
        this.$refs.zoomControl.load()
      },
      reload() {
        this.$refs.zoomControl.reload()
      },
      unload() {
        this.$refs.zoomControl.unload()
      },
      onNavigationEvt(e) {
        console.log(e)
      }
    }
  }
</script>
```

:::

### VcZoomControl 属性

| 属性名 | 类型 | 默认值 | 描述 | 可选值|
| -------------------- | ------- | -------------------------------------- | ---------------------------------------------------------- |--|
| position | String | `'top-right'` | `optional` 指定缩放控件位置 ||
| offset | Array | `[0, 0]` | `optional` 指定缩放控件基于位置的偏移量 ||
| enableResetButton | Boolean | `true` | `optional` 指定是否启用重置按钮 ||
| zoomAmount | Number | `2` | `optional` 指定放大缩小的数量级 ||
| duration | String | `0.5` | `optional` 指定放大缩小过程时间，单位秒 ||
| durationReset | Number | `1.5` | `optional` 指定重置到默认相机位置的时间，单位。 ||
| defaultResetView | Object | | `optional` 指定重置相机的位置 ||
| overrideViewerCamera | Boolean | `false` | `optional` 指定初始化时是否覆盖`vc-viewer`上的`camera`属性 ||
| background | String | `'#3f4854'` | `optional` 指定缩放控件背景 ||
| border | String | `'solid 1px rgba(255, 255, 255, 0.2)'` | `optional` 指定缩放控件边框 ||
| borderRadius | String | `'100px'` | `optional` 指定缩放控件边框圆角 ||
| direction | String | `'vertical'` | `optional` 指定缩放控件方向 |vertical /horizontal|
| zoomInOptions | Object | | `optional` 指定放大按钮参数 ||
| zoomOutOptions | Object | | `optional` 指定缩小按钮参数 ||
| zoomResetOptions | Object | | `optional` 指定重置按钮参数 ||

:::tip
提示：`durationReset`, `zoomInOptions`, `zoomOutOptions`, `zoomResetOptions` 默认参数：
:::
:::tipflex

```js
// defaultResetView
{
  position: {
    lng: 105,
    lat: 30,
    height: 19059568.5
  }
}
// 结构
{
  position?: {
    lng: number,
    lat: number,
    height: number
  } | [lng, lat, height]
  rectange?: [west,south,east,north] | {west,south,east,north}
  heading: number
  pitch: number
  roll: number
}
```

```js
// zoomInOptions
{
  name: 'vc-icons-zoom-in',
  size: '24px',
  color: '#fff',
  background: 'transparent',
  round: true,
  flat: true,
  label: undefined,
  stack: false,
  tooltip: {
    delay: 500,
    anchor: 'bottom middle',
    offset: [0, 20]
  }
}
```

```js
// zoomResetOptions
{
  name: 'vc-icons-reset',
  size: '24px',
  color: '#fff',
  background: 'transparent',
  round: true,
  flat: true,
  label: undefined,
  stack: false,
  tooltip: {
    delay: 500,
    anchor: 'bottom middle',
    offset: [0, 20]
  }
}
```

```js
// zoomOutOptions
{
  name: 'vc-icons-zoom-out',
  size: '24px',
  color: '#fff',
  background: 'transparent',
  round: true,
  flat: true,
  label: undefined,
  stack: false,
  tooltip: {
    delay: 500,
    anchor: 'bottom middle',
    offset: [0, 20]
  }
}
```

:::

### VcZoomControl 事件

| 事件名  | 参数                           | 描述               |
| ------- | ------------------------------ | ------------------ |
| zoomEvt | {camera, status, target, type} | 操作缩放控件时触发 |
