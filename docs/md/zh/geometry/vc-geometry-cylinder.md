# CylinderGeometry、 CylinderOutlineGeometry

- `vc-geometry-cylinder` 组件用于加载圆柱体。
- `vc-geometry-outline-cylinder` 组件用于加载圆柱体轮廓。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive`。

## 示例

### 加载圆柱体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <vc-geometry-cylinder
              ref="cylinder"
              :length="400000.0"
              :topRadius="200000.0"
              :bottomRadius="200000.0"
              :slices="1024"
              :vertexFormat="vertexFormat"
            ></vc-geometry-cylinder>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrixOutline">
            <vc-geometry-outline-cylinder
              ref="cylinderOutline"
              :length="400000.0"
              :topRadius="200000.0"
              :bottomRadius="200000.0"
              :slices="1024"
              :numberOfVerticalLines="128"
            ></vc-geometry-outline-cylinder>
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
          geometry: null,
          attributes: null,
          modelMatrix: null,
          vertexFormat: null,
          modelMatrixOutline: null
        }
      },
      mounted() {
        Promise.all([this.$refs.cylinder.createPromise, this.$refs.cylinderOutline.createPromise]).then((instances) => {
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
          const { Matrix4, PerInstanceColorAppearance, Transforms, Cartesian3, ColorGeometryInstanceAttribute } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            flat : true
          })
          this.vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.modelMatrix = Matrix4.multiplyByTranslation(
            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 35.0)),
            new Cartesian3(0, 0, 0),
            new Matrix4()
          )
          this.modelMatrixOutline = Matrix4.multiplyByTranslation(
            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(110.0, 35.0)),
            new Cartesian3(0, 0, 0),
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
          <vc-geometry-cylinder
            ref="cylinder"
            :length="400000.0"
            :topRadius="200000.0"
            :bottomRadius="200000.0"
            :slices="1024"
            :vertexFormat="vertexFormat"
          ></vc-geometry-cylinder>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrixOutline">
          <vc-geometry-outline-cylinder
            ref="cylinderOutline"
            :length="400000.0"
            :topRadius="200000.0"
            :bottomRadius="200000.0"
            :slices="1024"
            :numberOfVerticalLines="128"
          ></vc-geometry-outline-cylinder>
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
        geometry: null,
        attributes: null,
        modelMatrix: null,
        vertexFormat: null,
        modelMatrixOutline: null
      }
    },
    mounted() {
      Promise.all([this.$refs.cylinder.createPromise, this.$refs.cylinderOutline.createPromise]).then((instances) => {
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
        const { Matrix4, PerInstanceColorAppearance, Transforms, Cartesian3, ColorGeometryInstanceAttribute } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.modelMatrix = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 35.0)),
          new Cartesian3(0, 0, 0),
          new Matrix4()
        )
        this.modelMatrixOutline = Matrix4.multiplyByTranslation(
          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(110.0, 35.0)),
          new Cartesian3(0, 0, 0),
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

### `vc-geometry-cylinder`

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---- | ---- | ------- | ----------- |
| length | Array | | `required` 指定圆柱体长度。 |
| topRadius | Number | | `required` 指定圆柱体顶部半径。|
| bottomRadius | Number | | `required` 指定圆柱体底部半径。 |
| slices | Number | `128` | `optional` 指定圆柱圆周边数。 |
| vertexFormat | Object | | `optional` 指定顶点属性渲染方式。|

---

### `vc-geometry-outline-cylinder`

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---- | ---- | ------- | ----------- |
| length | Array | | `required` 指定圆柱体长度。 |
| topRadius | Number | | `required` 指定圆柱体顶部半径。|
| bottomRadius | Number | | `required` 指定圆柱体底部半径。 |
| slices | Number | `128` | `optional` 指定圆柱圆周边数。 |
| numberOfVerticalLines | Number |`16`| `optional` 指定圆柱体顶部到底部的线条数。|

参考官方文档：**[CylinderGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGeometry.html)**、**[CylinderOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CylinderOutlineGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
