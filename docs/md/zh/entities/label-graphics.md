# 标签

`label-graphics` 标签组件，作为`entity`的子组件添加包含标签对象的实体到场景。描述位于包含实体位置的二维标签。如示例所示。

## 示例

### 添加标签到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :label.sync="label1">
          <label-graphics :text="description" font="20px sans-serif" :pixelOffset="pixelOffset1"></label-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          label1: {},
          pixelOffset1: { x: 0.0, y: 20},
          position1: { lng: 114.0, lat: 40.0, height: 300000.0 }
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready">
      <entity :position="position1" :description="description" :label.sync="label1">
        <label-graphics text="Hello Vue Cesium" font="20px sans-serif" :pixelOffset="pixelOffset1"></label-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        label1: {},
        pixelOffset1: { x: 0.0, y: 20 },
        position1: { lng: 114.0, lat: 40.0, height: 300000.0 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| -------------------------- | --------------------- | ---------------------------- | ---------------------------------------------------------------------------- |
| show | Boolean | `true` | `optional` 指定 label 是否显示。 |
| text | String | | `optional` 指定 label 文字，支持'\n'换行符。 |
| font | String | `'30px sans-serif'` | `optional` 指定 label CSS 字体。 |
| labelStyle | Number | `0` | `optional` 指定 label 绘制风格。**FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2** |
| scale | Number | `1.0` | `optional` 指定 label 缩放比例。 |
| showBackground | Boolean | `false` | `optional` 指定 label 是否显示背景。 |
| backgroundColor | Object\|String\|Array | `[0.165, 0.165, 0.165, 0.8]` | `optional` 指定 label 背景颜色。 |
| backgroundPadding | Object | `{x: 7, y: 5}` | `optional` 指定 label 背景偏移量。 |
| pixelOffset | Object | `{x: 0, y: 0}` | `optional` 指定 label 像素偏移量。 **结构：{ x: number, y: number }** |
| eyeOffset | Object | `{x: 0, y: 0, z: 0}` | `optional` 指定 label 视角偏移量。 **结构：{ x: number, y: number, z: number }** |
| horizontalOrigin | Number | `0` | `optional` 指定 label 水平对齐方式。**CENTER: 0, LEFT: 1, RIGHT: -1** |
| verticalOrigin | Number | `0` | `optional` 指定 label 垂直对齐方式。**CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1** |
| heightReference | Number | `0` | `optional` 指定 label 高度模式。**NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| fillColor | Object\|String\|Array | `white` | `optional` 指定 label 填充颜色。 |
| outlineColor | Object\|String\|Array | `black` | `optional` 指定 label 轮廓线颜色。 |
| outlineWidth | Number | `1.0` | `optional` 指定 label 轮廓线宽度。 |
| translucencyByDistance | Object | | `optional` 指定 label 透明度随相机距离改变的参数。**结构：{ near: number, nearValue: number, far: number, farValue: number }** |
| pixelOffsetScaleByDistance | Object | | `optional` 指定 label 偏移量随相机距离改变的参数。**结构：{ near: number, nearValue: number, far: number, farValue: number }** |
| scaleByDistance | Object | | `optional` 指定 label 缩放随相机距离改变的参数。**结构：{ near: number, nearValue: number, far: number, farValue: number }** |
| distanceDisplayCondition | Object | | `optional` 指定 label 相机距离的显示条件。**结构：{ near: number, far: number }** |
| disableDepthTestDistance | Number | | `optional` 指定 label 的深度测试距离。 |

---

- 官方文档 [LabelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/LabelGraphics.html)

## 事件

| 事件名            | 参数             | 描述                                                |
| ----------------- | ---------------- | --------------------------------------------------- |
| ready             | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
| definitionChanged |                  | 每当更改或修改属性或子属性时触发该事件。            |
