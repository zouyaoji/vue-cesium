# SphereGeometry, SphereOutlineGeometry

- `vc-geometry-sphere` 组件用于加载球体。
- `vc-geometry-outline-sphere` 组件用于加载球体轮廓。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive`。

## 示例

### 加载球体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer ref="viewer" @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive ref="primitive" :appearance="appearance">
          <vc-instance-geometry ref="geometry" :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <vc-geometry-sphere
              ref="sphere"
              :radius="radius"
              :vertexFormat="vertexFormat"
            ></vc-geometry-ellipsoid>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrixOutline">
            <vc-geometry-outline-sphere
              ref="sphereOutline"
              :radius="radius"
            ></vc-geometry-outline-sphere>
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
          radius: 200000,
          modelMatrixOutline: null
        }
      },
      mounted () {
        Promise.all([
          this.$refs.sphere.createPromise,
          this.$refs.sphereOutline.createPromise,
        ]).then(instances => {
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
            new Cartesian3(0, 0, 100000),
            new Matrix4()
          )
          this.modelMatrixOutline = Matrix4.multiplyByTranslation(
            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(110.0, 35.0)),
            new Cartesian3(0, 0, 200000),
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
      <vc-viewer ref="viewer" @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive ref="primitive" :appearance="appearance">
          <vc-instance-geometry ref="geometry" :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <vc-geometry-sphere
              ref="sphere"
              :radius="radius"
              :vertexFormat="vertexFormat"
            ></vc-geometry-ellipsoid>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes" :modelMatrix="modelMatrixOutline">
            <vc-geometry-outline-sphere
              ref="sphereOutline"
              :radius="radius"
            ></vc-geometry-outline-sphere>
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
          radius: 200000,
          modelMatrixOutline: null
        }
      },
      mounted () {
        Promise.all([
          this.$refs.sphere.createPromise,
          this.$refs.sphereOutline.createPromise,
        ]).then(instances => {
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
            new Cartesian3(0, 0, 100000),
            new Matrix4()
          )
          this.modelMatrixOutline = Matrix4.multiplyByTranslation(
            Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(110.0, 35.0)),
            new Cartesian3(0, 0, 200000),
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

### `vc-geometry-sphere`

| 属性名          | 类型   | 默认值 | 描述                                      |
| --------------- | ------ | ------ | ----------------------------------------- |
| radius          | Number | `1.0`  | `optional` 指定球体半径。                 |
| stackPartitions | Number | `0.0`  | `optional` 指定将球体横向划分为层的次数。 |
| slicePartitions | Number | `10`   | `optional` 指定将球体纵向划分为片的次数。 |
| vertexFormat    | Object |        | `optional` 指定椭球体顶点属性渲染方式。   |

---

### `vc-geometry-outline-sphere`

| 属性名          | 类型   | 默认值 | 描述                                                    |
| --------------- | ------ | ------ | ------------------------------------------------------- |
| radius          | Number | `1.0`  | `optional` 指定球体半径。                               |
| stackPartitions | Number | `0.0`  | `optional` 指定将球体横向划分为层的次数。               |
| slicePartitions | Number | `10`   | `optional` 指定将球体纵向划分为片的次数。               |
| subdivisions    | Number | `200`  | `optional` 指定球体轮廓线上的点数，确定弧线的光滑粒度。 |

参考官方文档：**[SphereGeometry](https://cesium.com/docs/cesiumjs-ref-doc/SphereGeometry.html)**, **[SphereOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/SphereOutlineGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
