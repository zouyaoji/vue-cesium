## 文本

`vc-graphics-label` 组件用于加载文本实体，相当于初始化一个 `Cesium.LabelGraphics` 实例。需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

文本实体组件的基础用法。

:::demo 使用 `vc-graphics-label` 标签在三维球上添加文本实体对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity :position="[114, 40, 300000]" description="Hello Vue Cesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
      <vc-graphics-label text="Hello Vue Cesium" font="20px sans-serif" :pixelOffset="[0, 20]"></vc-graphics-label>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }

      return {
        onEntityEvt,
        onViewerReady
      }
    }
  }
</script>
```

:::

### 属性

| 属性名                     | 类型                  | 默认值                       | 描述                                               |
| -------------------------- | --------------------- | ---------------------------- | -------------------------------------------------- |
| show                       | Boolean               | `true`                       | `optional` 指定 label 是否显示。                   |
| text                       | String                |                              | `optional` 指定 label 文字，支持'\n'换行符。       |
| font                       | String                | `'30px sans-serif'`          | `optional` 指定 label CSS 字体。                   |
| labelStyle                 | Number                | `0`                          | `optional` 指定 label 绘制风格。                   |
| scale                      | Number                | `1.0`                        | `optional` 指定 label 缩放比例。                   |
| showBackground             | Boolean               | `false`                      | `optional` 指定 label 是否显示背景。               |
| backgroundColor            | Object\|String\|Array | `[0.165, 0.165, 0.165, 0.8]` | `optional` 指定 label 背景颜色。                   |
| backgroundPadding          | Object                | `{x: 7, y: 5}`               | `optional` 指定 label 背景偏移量。                 |
| pixelOffset                | Object                | `{x: 0, y: 0}`               | `optional` 指定 label 像素偏移量。                 |
| eyeOffset                  | Object                | `{x: 0, y: 0, z: 0}`         | `optional` 指定 label 视角偏移量。                 |
| horizontalOrigin           | Number                | `0`                          | `optional` 指定 label 水平对齐方式。               |
| verticalOrigin             | Number                | `0`                          | `optional` 指定 label 垂直对齐方式。               |
| heightReference            | Number                | `0`                          | `optional` 指定 label 高度模式。                   |
| fillColor                  | Object\|String\|Array | `white`                      | `optional` 指定 label 填充颜色。                   |
| outlineColor               | Object\|String\|Array | `black`                      | `optional` 指定 label 轮廓线颜色。                 |
| outlineWidth               | Number                | `1.0`                        | `optional` 指定 label 轮廓线宽度。                 |
| translucencyByDistance     | Object                |                              | `optional` 指定 label 透明度随相机距离改变的参数。 |
| pixelOffsetScaleByDistance | Object                |                              | `optional` 指定 label 偏移量随相机距离改变的参数。 |
| scaleByDistance            | Object                |                              | `optional` 指定 label 缩放随相机距离改变的参数。   |
| distanceDisplayCondition   | Object                |                              | `optional` 指定 label 相机距离的显示条件。         |
| disableDepthTestDistance   | Number                |                              | `optional` 指定 label 的深度测试距离。             |

### 事件

| 事件名            | 参数 | 描述                                     |
| ----------------- | ---- | ---------------------------------------- |
| definitionChanged |      | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[LabelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/LabelGraphics.html)**
