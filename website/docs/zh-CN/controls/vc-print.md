## VcPrint

截图打印组件。

**注意：** 该需要引入样式文件: `import 'vue-cesium/lib/theme-default/index.css';`

### 基础用法

截图打印组件的基础用法。

:::demo 将 `vc-print` 标签作为 `vc-viewer` 的子组件挂载即可。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-print ref="print"></vc-print>
    <vc-print position="bottom-right" downloadAutomatically></vc-print>
    <vc-print
      position="bottom-right"
      :offset="[40, 20]"
      :showPrintView="false"
      printAutomatically
      size="28px"
      :round="false"
      label="打印分享"
      background="#31CCEC"
      name="fa fa-print"
    ></vc-print>
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
        this.$refs.print.load()
      },
      reload() {
        this.$refs.print.reload()
      },
      unload() {
        this.$refs.print.unload()
      }
    }
  }
</script>
```

:::

### VcPrint 属性

| 属性名                | 类型    | 默认值               | 描述                                                         |
| --------------------- | ------- | -------------------- | ------------------------------------------------------------ |
| position              | String  | `'top-right'`        | `optional` 指定打印控件位置                                  |
| offset                | Array   | `[0, 0]`             | `optional` 指定打印控件基于位置的偏移量                      |
| showCredit            | Boolean | `true`               | `optional` 指定打印图片时是否显示加载数据版权信息。          |
| showPrintView         | Boolean | `true`               | `optional` 指定是否显示打印预览。                            |
| printAutomatically    | Boolean | `false`              | `optional` 指定是否自动打印。需要 showPrintView 设置为 false |
| downloadAutomatically | Boolean | `false`              | `optional` 指定是否下载打印的图片                            |
| name                  | String  | `'vc-icons-capture'` | `optional` 指定打印按钮图标                                  |
| size                  | String  | `'24px'`             | `optional` 指定打印按钮尺寸                                  |
| color                 | String  | `'#3f4854'`          | `optional` 指定打印按钮颜色                                  |
| background            | String  | `'#fff'`             | `optional` 指定打印按钮背景                                  |
| round                 | Boolean | `true`               | `optional` 指定打印按钮是否圆形展示                          |
| flat                  | Boolean | `false`              | `optional` 指定打印按钮是否是普通风格，不带背景、点击效果    |
| label                 | String  |                      | `optional` 指定打印按钮文字                                  |
| stack                 | Boolean | `false`              | `optional` 指定打印按钮是否堆叠显示                          |
| tooltip               | Object  |                      | `optional` 指定打印按钮提示信息参数                          |

### VcPrint 事件

| 事件名   | 参数                 | 描述               |
| -------- | -------------------- | ------------------ |
| printEvt | {image, status,type} | 操作打印控件时触发 |
