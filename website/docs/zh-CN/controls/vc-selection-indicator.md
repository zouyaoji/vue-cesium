<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-04 10:37:42
 * @LastEditTime: 2022-02-17 16:15:54
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\zh-CN\controls\vc-selection-indicator.md
-->

## VcSelectionIndicator

加载自定义选择器组件，替换 Cesium 自带的 selectionIndicator。

### 基础用法

选择器组件的基础用法。

:::demo 使用 `vc-selection-indicator` 标签在三维球上添加选择器组件。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer :selection-indicator="false" :info-box="false">
    <vc-selection-indicator ref="selectionIndicator" @pick-evt="pickEvt"></vc-selection-indicator>
    <vc-entity ref="entity" :billboard="billboard" :position="{lng: 108, lat: 32}" :point="point" :label="label">
      <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
    </vc-entity>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
    <el-button type="danger" round @click="clear">清除</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        point: {
          pixelSize: 28,
          color: 'red'
        },
        label: {
          text: 'Hello World',
          pixelOffset: [0, 80]
        },
        billboard: {
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.5
        }
      }
    },
    methods: {
      clear() {
        this.$refs.selectionIndicator.selectedFeature.value = undefined
      },
      pickEvt(e) {
        console.log(e)
      },
      unload() {
        this.$refs.selectionIndicator.unload()
      },
      load() {
        this.$refs.selectionIndicator.load()
      },
      reload() {
        this.$refs.selectionIndicator.reload()
      }
    }
  }
</script>
```

:::

### 属性

| 属性名                   | 类型    | 默认值 | 描述                                                  |
| ------------------------ | ------- | ------ | ----------------------------------------------------- |
| show                     | boolean | `true` | `optional` 指定选择指示器是否可见。                   |
| width                    | number  | `50`   | `optional` 指定选择指示器宽度。                       |
| height                   | number  | `50`   | `optional` 指定选择指示器高度。                       |
| allowFeatureInfoRequests | boolean | `true` | `optional` 指定是否异步请求该点射线相交影像图层属性。 |
| limit                    | number  | `50`   | `optional` 指定最大拾取对象数量。                     |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 组件加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 组件加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 组件销毁时触发。     |
| pickEvt    | selectedFeature                         | 拾取时触发。         |
