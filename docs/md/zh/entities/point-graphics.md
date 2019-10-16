# 点

`point-graphics` 点组件，作为`entity`的子组件添加包含点的实体到场景。描述位于包含实体位置的图形点，如示例所示。

## 示例

### 添加模型到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :point.sync="point1">
          <point-graphics :color="color1" :pixelSize="8"></point-graphics>
        </entity>
        <entity :position="position2" :description="description">
          <point-graphics :color="color2" :pixelSize="16"></point-graphics>
        </entity>
        <entity :position="position3" :description="description">
          <point-graphics :color="color3" :pixelSize="32" @ready="subReady"></point-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          point1: null,
          color1: {},
          position1: {lng: -75.59777, lat: 40.03883 },

          color2: {},
          position2: {lng: -80.50, lat: 35.14 },

          color3: {},
          position3: undefined
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.color1 = Cesium.Color.RED

          this.color2 = Cesium.Color.BLUE

          this.position3 = Cesium.Cartesian3.fromDegrees(-80.12, 25.46)
          this.color3 = Cesium.Color.LIME
        },
        subReady (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          viewer.zoomTo(viewer.entities)
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
      <entity :position="position1" :description="description" :point.sync="point1">
        <point-graphics :color="color1" :pixelSize="8"></point-graphics>
      </entity>
      <entity :position="position2" :description="description">
        <point-graphics :color="color2" :pixelSize="16"></point-graphics>
      </entity>
      <entity :position="position3" :description="description">
        <point-graphics :color="color3" :pixelSize="32" @ready="subReady"></point-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',
        point1: null,
        color1: {},
        position1: { lng: -75.59777, lat: 40.03883 },

        color2: {},
        position2: { lng: -80.5, lat: 35.14 },

        color3: {},
        position3: undefined
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.color1 = Cesium.Color.RED

        this.color2 = Cesium.Color.BLUE

        this.position3 = Cesium.Cartesian3.fromDegrees(-80.12, 25.46)
        this.color3 = Cesium.Color.LIME
      },
      subReady(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.zoomTo(viewer.entities)
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------------------ | ------- | ----------- | -------------------------------------------------- |
| show | Boolean | `true` | `optional` 指定 point 是否显示。 |
| pixelSize | Number | `1` | `optional` 指定 point 像素大小。 |
| heightReference | Number | `0` | `optional` 指定 point 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| color | Object\|String\|Array | `'WHITE'` | `optional` 指定 point 颜色。 |
| outlineColor | Object\|String\|Array | `'BLACK'` | `optional` 指定 point 轮廓颜色。 |
| outlineWidth | Number | `0` | `optional` 指定 point 轮廓像素宽度。 |
| scaleByDistance | Object | | `optional` 指定 point 随相机距离改变的缩放参数。 **结构：{ near: number, nearValue: number, far: number, farValue: number }** |
| translucencyByDistance | Object | | `optional` 指定 point 随相机距离改变的透明度参数。**结构：{ near: number, nearValue: number, far: number, farValue: number }** |
| distanceDisplayCondition | Object | | `optional` 指定 point 随相机距离显隐参数。**结构：{ near: number, far: number }** |
| disableDepthTestDistance | Number | | `optional` 指定 point 深度测试参数。 |

---

- 官方文档 [PointGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PointGraphics.html)

## 事件

| 事件名            | 参数             | 描述                                                |
| ----------------- | ---------------- | --------------------------------------------------- |
| ready             | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
| definitionChanged |                  | 每当更改或修改属性或子属性时触发该事件。            |
