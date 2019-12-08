# PlaneGeometry、 PlaneOutlineGeometry

- `vc-geometry-plane` 组件用于加载平面几何体。
- `vc-geometry-outline-plane` 组件用于加载平面几何体轮廓。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive`。

## 示例

### 加载平面几何体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <vc-geometry-plane ref="plane" :vertexFormat="vertexFormat"></vc-geometry-plane>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearanceOutline">
          <vc-instance-geometry :attributes="attributesOutline" :modelMatrix="modelMatrix">
            <vc-geometry-outline-plane ref="planeOutline"></vc-geometry-outline-plane>
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
          appearanceOutline: null,
          geometry: null,
          attributes: null,
          vertexFormat: null,
          modelMatrix: null,
          attributesOutline: null
        }
      },
      mounted() {
        Promise.all([this.$refs.plane.createPromise, this.$refs.planeOutline.createPromise]).then((instances) => {
          console.log('All geometries are loaded.')
          const boundingSphereUnion = instances.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
            const boundingSphere = cur.vm.$parent.modelMatrix
              ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
              : geometry.boundingSphere
            return prev === null ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)
          }, null)
          instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
        })
      },
      methods: {
        ready({ Cesium, viewer }) {
          this.viewer = viewer
          const { PerInstanceColorAppearance, Cartesian3, ColorGeometryInstanceAttribute, Matrix4, Transforms } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            closed: true
          })
          this.appearanceOutline = new PerInstanceColorAppearance({
            flat: true,
            renderState: {
              lineWidth: Math.min(2.0, viewer.scene.maximumAliasedLineWidth)
            }
          })
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.attributesOutline = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
          }
          this.vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT
          const dimensions = new Cartesian3(400000.0, 300000.0, 1.0)
          const translateMatrix = Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(108, 38))
          const scaleMatrix = Matrix4.fromScale(dimensions)
          const planeModelMatrix = new Matrix4()
          this.modelMatrix = Matrix4.multiply(translateMatrix, scaleMatrix, planeModelMatrix)
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
          <vc-geometry-plane ref="plane" :vertexFormat="vertexFormat"></vc-geometry-plane>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearanceOutline">
        <vc-instance-geometry :attributes="attributesOutline" :modelMatrix="modelMatrix">
          <vc-geometry-outline-plane ref="planeOutline"></vc-geometry-outline-plane>
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
        appearanceOutline: null,
        geometry: null,
        attributes: null,
        vertexFormat: null,
        modelMatrix: null,
        attributesOutline: null
      }
    },
    mounted() {
      Promise.all([this.$refs.plane.createPromise, this.$refs.planeOutline.createPromise]).then((instances) => {
        console.log('All geometries are loaded.')
        const boundingSphereUnion = instances.reduce((prev, cur) => {
          const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
          const boundingSphere = cur.vm.$parent.modelMatrix
            ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
            : geometry.boundingSphere
          return prev === null ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)
        }, null)
        instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
      })
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.viewer = viewer
        const { PerInstanceColorAppearance, Cartesian3, ColorGeometryInstanceAttribute, Matrix4, Transforms } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          closed: true
        })
        this.appearanceOutline = new PerInstanceColorAppearance({
          flat: true,
          renderState: {
            lineWidth: Math.min(2.0, viewer.scene.maximumAliasedLineWidth)
          }
        })
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.attributesOutline = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
        this.vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT
        const dimensions = new Cartesian3(400000.0, 300000.0, 1.0)
        const translateMatrix = Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(108, 38))
        const scaleMatrix = Matrix4.fromScale(dimensions)
        const planeModelMatrix = new Matrix4()
        this.modelMatrix = Matrix4.multiply(translateMatrix, scaleMatrix, planeModelMatrix)
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

### `vc-geometry-plane`

| 属性名       | 类型   | 默认值 | 描述                              |
| ------------ | ------ | ------ | --------------------------------- |
| vertexFormat | Object |        | `optional` 指定顶点坐标渲染类型。 |

---

### `vc-geometry-outline-plane`

| 属性名 | 类型 | 默认值 | 描述 |
| ------ | ---- | ------ | ---- |


---

参考官方文档：**[PlaneGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PlaneGeometry.html)**、 **[PlaneOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PlaneOutlineGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
