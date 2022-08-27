## VcGraphicsLabel

加载文本实体，相当于初始化一个 `Cesium.LabelGraphics` 实例。

**注意：** 需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

文本实体组件的基础用法。

:::demo 使用 `vc-graphics-label` 标签在三维球上添加文本实体对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity :position="[114, 40, 300000]" description="Hello Vue Cesium" @click="onEntityEvt" @mouseover="onEntityEvt" @mouseout="onEntityEvt">
      <vc-graphics-label text="Hello Vue Cesium" font="20px sans-serif" :pixelOffset="[0, 20]" fillColor="red"></vc-graphics-label>
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

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ------ | --------- | ----------- | ------------ | --- |
| show | boolean | `true` | `optional` 指定 label 是否显示。 |
| text | string | | `optional` 指定 label 文字，支持'\n'换行符。 |
| font | string | `'30px sans-serif'` | `optional` 指定 label CSS 字体。 |
| labelStyle | number | `0` | `optional` 指定 label 绘制风格。 **FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2** |0/1/2|
| scale | number | `1.0` | `optional` 指定 label 缩放比例。 |
| showBackground | boolean | `false` | `optional` 指定 label 是否显示背景。 |
| backgroundColor | Object\|string\|Array | `{ x: 0.165, y: 0.165, z: 0.165, w: 0.8 }` | `optional` 指定 label 背景颜色。 |
| backgroundPadding | Object\|Array | `{x: 7, y: 5}` | `optional` 指定 label 背景偏移量。 |
| pixelOffset | Object\|Array | `{x: 0, y: 0}` | `optional` 指定 label 像素偏移量。 |
| eyeOffset | Object\|Array | `{x: 0, y: 0, z: 0}` | `optional` 指定 label 视角偏移量。 |
| horizontalOrigin | number | `0` | `optional` 指定 label 水平对齐方式。 **CENTER: 0, LEFT: 1, RIGHT: -1** |0/1/-1|
| verticalOrigin | number | `0` | `optional` 指定 label 垂直对齐方式。 **CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1**|0/1/2/-1|
| heightReference | number | `0` | `optional` 指定 label 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |0/1/2|
| fillColor | Object\|string\|Array | `white` | `optional` 指定 label 填充颜色。 |
| outlineColor | Object\|string\|Array | `black` | `optional` 指定 label 轮廓线颜色。 |
| outlineWidth | number | `1.0` | `optional` 指定 label 轮廓线宽度。 |
| translucencyByDistance | Object\|Array | | `optional` 指定 label 透明度随相机距离改变的参数。 |
| pixelOffsetScaleByDistance | Object\|Array | | `optional` 指定 label 偏移量随相机距离改变的参数。 |
| scaleByDistance | Object\|Array | | `optional` 指定 label 缩放随相机距离改变的参数。 |
| distanceDisplayCondition | Object\|Array | | `optional` 指定 label 相机距离的显示条件。 |
| disableDepthTestDistance | number | | `optional` 指定 label 的深度测试距离。 |

### 事件

| 事件名            | 参数                                    | 描述                                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | 对象加载前触发。                         |
| ready             | (readyObj: VcReadyObject)               | 对象加载成功时触发。                     |
| destroyed         | (instance: VcComponentInternalInstance) | 对象销毁时触发。                         |
| definitionChanged |                                         | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[LabelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/LabelGraphics.html)**
