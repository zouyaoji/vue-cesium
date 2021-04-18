## VcCompassSm

罗盘组件。

**注意：** 该需要引入样式文件: `import 'vue-cesium/lib/theme-default/index.css';`

### 基础用法

罗盘组件的基础用法。

:::demo 将 `vc-compass-sm` 标签作为 `vc-viewer` 的子组件挂载即可。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-compass-sm ref="compass"></vc-compass-sm>
    <vc-compass-sm :autoHidden="false" position="bottom" :offset="[200, 20]"></vc-compass-sm>
    <vc-compass-sm position="bottom" :offset="[-200, 20]"></vc-compass-sm>
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

### VcCompassSm 属性

| 属性名                 | 类型    | 默认值      | 描述                                              |
| ---------------------- | ------- | ----------- | ------------------------------------------------- |
| position               | String  | `top-right` | `optional` 指定罗盘位置                           |
| offset                 | Array   | `[0, 0]`    | `optional` 指定罗盘基于位置的偏移量               |
| enableCompassOuterRing | String  | `true`      | `optional` 指定罗盘外环是否可以操作               |
| duration               | Number  | `1.5`       | `optional` 指定双击罗盘恢复俯仰角飞行时间，单位秒 |
| tooltip                | Object  |             | `optional` 指定罗盘提示信息参数                   |
| autoHidden             | Boolean | `true`      | `optional` 指定是否自动隐藏罗盘部分控件           |

### VcCompassSm 事件

| 事件名     | 参数 | 描述               |
| ---------- | ---- | ------------------ |
| compassEvt |      | 操作罗盘控件时触发 |
