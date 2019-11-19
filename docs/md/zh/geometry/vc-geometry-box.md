# BoxGeometry

`vc-geometry-box` 组件用于加载立方体。需要作为 `vc-instance-geometry` 的子组件使用。

## 示例

### 加载立方体几何体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <vc-geometry-box :dimensions="dimensions"></vc-geometry-box>
          </vc-instance-geometry>
        </vc-primitive>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          appearance: null,
          attributes: null,
          geometry: null,
          modelMatrix: null,
          dimensions: { x: 400000.0, y: 300000.0, z: 500000.0 }
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance
          this.attributes = {
            color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.5))
          }
          this.appearance = new Cesium.PerInstanceColorAppearance({
            closed: true,
            translucent: true
          })
          this.modelMatrix = Cesium.Matrix4.multiplyByTranslation(
            Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105.0, 40.0)),
            new Cesium.Cartesian3(0.0, 0.0, 250000),
            new Cesium.Matrix4()
          )
        },
        LEFT_CLICK(movement) {
          const feature = this.cesiumInstance.viewer.scene.pick(movement.position)
          console.log(feature)
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
          <vc-geometry-box :dimensions="dimensions"></vc-geometry-box>
        </vc-instance-geometry>
      </vc-primitive>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: null,
        attributes: null,
        geometry: null,
        modelMatrix: null,
        dimensions: { x: 400000.0, y: 300000.0, z: 500000.0 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        this.attributes = {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.5))
        }
        this.appearance = new Cesium.PerInstanceColorAppearance({
          closed: true,
          translucent: true
        })
        this.modelMatrix = Cesium.Matrix4.multiplyByTranslation(
          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105.0, 40.0)),
          new Cesium.Cartesian3(0.0, 0.0, 250000),
          new Cesium.Matrix4()
        )
      },
      LEFT_CLICK(movement) {
        const feature = this.cesiumInstance.viewer.scene.pick(movement.position)
        console.log(feature)
      }
    }
  }
</script>
```

## 属性

| 属性名       | 类型   | 默认值 | 描述                                                                         |
| ------------ | ------ | ------ | ---------------------------------------------------------------------------- |
| dimensions   | Object |        | `required` 指定 box 的长宽高。 **结构：{ x: number, y: number, z: number }** |
| vertexFormat | Object |        | `optional` 指定要计算的顶点属性。                                            |

---

参考官方文档：**[BoxGeometry](https://cesium.com/docs/cesiumjs-ref-doc/BoxGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
