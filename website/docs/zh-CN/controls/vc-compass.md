## VcCompass

罗盘组件。

**注意：** 该需要引入样式文件: `import 'vue-cesium/lib/theme-default/index.css';`

### 基础用法

罗盘组件的基础用法。

:::demo 将 `vc-compass` 标签作为 `vc-viewer` 的子组件挂载即可。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-compass></vc-compass>
    <vc-compass
      ref="compass"
      position="left"
      :outerOptions="{name: 'svguse:#vc-icons-compass-outer', size: '250px'}"
      :innerOptions="{name: 'fa fa-compass', size: '60px', background: 'transparent', color: '#009688'}"
    ></vc-compass>
    <vc-compass position="top" :outerOptions="{name: 'svguse:#vc-icons-qq'}"></vc-compass>
    <vc-compass
      position="bottom"
      :outerOptions="{name: 'fa fa-circle-o-notch'}"
      :innerOptions="{name: 'fa fa-circle', background: 'transparent'}"
    ></vc-compass>
    <vc-compass position="right" :enableCompassOuterRing="false"></vc-compass>
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
        this.$refs.compass.load()
      },
      reload() {
        this.$refs.compass.reload()
      },
      unload() {
        this.$refs.compass.unload()
      }
    }
  }
</script>
```

:::

### VcCompass 属性

| 属性名                 | 类型   | 默认值      | 描述                                              |
| ---------------------- | ------ | ----------- | ------------------------------------------------- |
| position               | String | `top-right` | `optional` 指定罗盘位置                           |
| offset                 | Array  | `[0, 0]`    | `optional` 指定罗盘基于位置的偏移量）             |
| enableCompassOuterRing | String | `true`      | `optional` 指定罗盘外环是否可以操作               |
| duration               | Number | `1.5`       | `optional` 指定双击罗盘恢复俯仰角飞行时间，单位秒 |
| outerOptions           | Object |             | `optional` 指定罗盘外环参数                       |
| innerOptions           | Object |             | `optional` 指定罗盘内环参数                       |
| markerOptions          | Object |             | `optional` 指定罗盘旋转时圆块参数                 |

:::tip
提示 `outerOptions`、`innerOptions`、`markerOptions` 默认参数：
:::
:::tipflex

```js
// outerOptions
{
  name: 'vc-icons-compass-outer', // 图标名称
  size: '96px',                   // 外环尺寸
  color: '#3f4854',               // 外环颜色
  background: 'transparent',      // 外环背景
  tooltip: {                      // false 即为不显示
    delay: 1000,                  // 鼠标悬浮多久显示提示信息
    anchor: 'bottom middle',      // 提示信息锚点
    offset: [0, 20]               // 提示信息位置偏移
  }
}
```

```js
// innerOptions
{
  name: 'vc-icons-compass-outer',
  size: '96px',
  color: '#3f4854',
  background: 'transparent',
  tooltip: {
    delay: 1000,
    anchor: 'bottom middle',
    offset: [0, 20]
  }
}
```

```js
// markerOptions
{
  name: 'vc-icons-compass-rotation-marker',
  size: '96px',
  color: '#1976D2'
}
```

:::

### VcCompass 事件

| 事件名     | 参数                           | 描述               |
| ---------- | ------------------------------ | ------------------ |
| compassEvt | {camera, status, target, type} | 操作罗盘控件时触发 |
