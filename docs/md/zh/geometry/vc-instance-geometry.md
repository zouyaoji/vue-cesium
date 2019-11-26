# GeometryInstance

`vc-instance-geometry` 组件用于加载几何体实例，通过几何体实例可以加载几何体。几何体实例可以将一个几何体对象放置在几个不同的位置并进行唯一着色。 例如，可以对一个 BoxGeometry 进行多次实例化，每次使用不同的 modelMatrix 来更改其位置，旋转和缩放比例。

## 示例

### 加载几何体实例

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry
            id="top"
            :geometry="geometry"
            :color="color"
            :attributes="attributes"
            :modelMatrix="modelMatrix1"
          ></vc-instance-geometry>
          <vc-instance-geometry
            id="bottom"
            :geometry="geometry"
            :color="color"
            :attributes="attributes"
            :modelMatrix="modelMatrix2"
          ></vc-instance-geometry>
        </vc-primitive>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          appearance: {},
          geometry: {},
          color: {},
          attributes: {},
          modelMatrix1: {},
          modelMatrix2: {}
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance
          this.appearance = new Cesium.PerInstanceColorAppearance()
          this.attributes = {
            color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
          }
          this.geometry = Cesium.BoxGeometry.fromDimensions({
            vertexFormat: Cesium.VertexFormat.POSITION_AND_NORMAL,
            dimensions: new Cesium.Cartesian3(1000000.0, 1000000.0, 500000.0)
          })

          this.modelMatrix1 = Cesium.Matrix4.multiplyByTranslation(
            Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),
            new Cesium.Cartesian3(0.0, 0.0, 100000.0),
            new Cesium.Matrix4()
          )
          this.modelMatrix2 = Cesium.Matrix4.multiplyByTranslation(
            Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),
            new Cesium.Cartesian3(0.0, 0.0, 1500000.0),
            new Cesium.Matrix4()
          )
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry
          id="top"
          :geometry="geometry"
          :color="color"
          :attributes="attributes"
          :modelMatrix="modelMatrix1"
        ></vc-instance-geometry>
        <vc-instance-geometry
          id="bottom"
          :geometry="geometry"
          :color="color"
          :attributes="attributes"
          :modelMatrix="modelMatrix2"
        ></vc-instance-geometry>
      </vc-primitive>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: {},
        geometry: {},
        color: {},
        attributes: {},
        modelMatrix1: {},
        modelMatrix2: {}
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        this.appearance = new Cesium.PerInstanceColorAppearance()
        this.attributes = {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
        }
        this.geometry = Cesium.BoxGeometry.fromDimensions({
          vertexFormat: Cesium.VertexFormat.POSITION_AND_NORMAL,
          dimensions: new Cesium.Cartesian3(1000000.0, 1000000.0, 500000.0)
        })

        this.modelMatrix1 = Cesium.Matrix4.multiplyByTranslation(
          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),
          new Cesium.Cartesian3(0.0, 0.0, 100000.0),
          new Cesium.Matrix4()
        )
        this.modelMatrix2 = Cesium.Matrix4.multiplyByTranslation(
          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),
          new Cesium.Cartesian3(0.0, 0.0, 1500000.0),
          new Cesium.Matrix4()
        )
      }
    }
  }
</script>
```

## 属性

| 属性名      | 类型   | 默认值 | 描述                                                            |
| ----------- | ------ | ------ | --------------------------------------------------------------- |
| geometry    | Object |        | `optional` 指定几何体实例加载的几何体对象。                     |
| modelMatrix | Object |        | `optional` 指定将几何体对象从模型坐标转换为世界坐标的模型矩阵。 |
| id          | Object |        | `optional` 指定 `Scene#pick` 方法返回的用户自定义信息.          |
| attributes  | Object |        | `optional` 指定几何体实例的属性信息。                           |

---

参考官方文档： **[GeometryInstance](https://cesium.com/docs/cesiumjs-ref-doc/GeometryInstance.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
