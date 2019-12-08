# BoxGeometry、BoxOutlineGeometry

- `vc-geometry-box` 组件用于加载立方体。需要作为 `vc-instance-geometry` 的子组件使用。
- `vc-geometry-outline-box` 组件用于加载立方体轮廓。需要作为 `vc-instance-geometry` 的子组件使用。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive`。

## 示例

### 加载立方体几何体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <vc-geometry-box ref="box" :dimensions="dimensions"></vc-geometry-box>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrix2">
            <vc-geometry-outline-box ref="boxOutline" :dimensions="dimensions"></vc-geometry-outline-box>
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
          modelMatrix2: null,
          dimensions: { x: 400000.0, y: 300000.0, z: 500000.0 }
        }
      },
      mounted() {
        Promise.all([this.$refs.box.createPromise, this.$refs.boxOutline.createPromise]).then((instances) => {
          console.log('All geometries are loaded.')
          const { BoundingSphere } = Cesium
          const boundingSphereUnion = instances.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
            const boundingSphere = BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)
          }, null)
          instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
        })
      },
      methods: {
        ready({ Cesium, viewer, cesiumObject }) {
          this.viewer = viewer
          const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, Transforms } = Cesium
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.appearance = new PerInstanceColorAppearance({
            flat: true
          })
          this.modelMatrix = Matrix4.multiplyByTranslation(
            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 40.0)),
            new Cartesian3(0.0, 0.0, 250000),
            new Matrix4()
          )
          this.modelMatrix2 = Matrix4.multiplyByTranslation(
            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(110.0, 40.0)),
            new Cartesian3(0.0, 0.0, 250000),
            new Matrix4()
          )
        },
        LEFT_CLICK(movement) {
          const feature = this.viewer.scene.pick(movement.position)
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
          <vc-geometry-box ref="box" :dimensions="dimensions"></vc-geometry-box>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrix2">
          <vc-geometry-outline-box ref="boxOutline" :dimensions="dimensions"></vc-geometry-outline-box>
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
        modelMatrix2: null,
        dimensions: { x: 400000.0, y: 300000.0, z: 500000.0 }
      }
    },
    mounted() {
      Promise.all([this.$refs.box.createPromise, this.$refs.boxOutline.createPromise]).then((instances) => {
        console.log('All geometries are loaded.')
        const { BoundingSphere } = Cesium
        const boundingSphereUnion = instances.reduce((prev, cur) => {
          const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
          const boundingSphere = BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
          return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)
        }, null)
        instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
      })
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.viewer = viewer
        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, Transforms } = Cesium
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.modelMatrix = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 40.0)),
          new Cartesian3(0.0, 0.0, 250000),
          new Matrix4()
        )
        this.modelMatrix2 = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(110.0, 40.0)),
          new Cartesian3(0.0, 0.0, 250000),
          new Matrix4()
        )
      },
      LEFT_CLICK(movement) {
        const feature = this.viewer.scene.pick(movement.position)
        console.log(feature)
      }
    }
  }
</script>
```

## 属性

### `vc-geometry-box`

| 属性名       | 类型   | 默认值 | 描述                                                                         |
| ------------ | ------ | ------ | ---------------------------------------------------------------------------- |
| dimensions   | Object |        | `required` 指定 box 的长宽高。 **结构：{ x: number, y: number, z: number }** |
| vertexFormat | Object |        | `optional` 指定要计算的顶点属性。                                            |

---

### `vc-geometry-outline-box`

| 属性名     | 类型   | 默认值 | 描述                                                                         |
| ---------- | ------ | ------ | ---------------------------------------------------------------------------- |
| dimensions | Object |        | `required` 指定 box 的长宽高。 **结构：{ x: number, y: number, z: number }** |

---

参考官方文档：**[BoxOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/BoxOutlineGeometry.html)**、**[BoxGeometry](https://cesium.com/docs/cesiumjs-ref-doc/BoxGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
