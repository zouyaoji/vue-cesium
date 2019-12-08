# FrustumGeometry、 FrustumOutlineGeometry

- `vc-geometry-frustum` 组件用于加载视锥体。
- `vc-geometry-outline-frustum` 组件用于加载视锥体轮廓。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive`。

## 示例

### 加载视锥体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
            <vc-geometry-frustum
              ref="frustum"
              :frustum="frustum"
              :origin="origin"
              :orientation="orientation"
              :vertexFormat="vertexFormat"
            ></vc-geometry-frustum>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-frustum
              ref="frustumOutline"
              :frustum="frustum"
              :origin="originOutline"
              :orientation="orientation"
            ></vc-geometry-outline-frustum>
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
          vertexFormat: null,
          orientation: { x: 0, y: 0, z: 0, w: 1},
          frustum: null,
          origin: { lng: 105, lat: 35 },
          originOutline: { lng: 110, lat: 35 }
        }
      },
      mounted () {
        Promise.all([
          this.$refs.frustum.createPromise,
          this.$refs.frustumOutline.createPromise,
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
          const { PerInstanceColorAppearance, Cartesian3, ColorGeometryInstanceAttribute, PerspectiveFrustum, Quaternion } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            flat : true
          })
          this.vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.frustum = new PerspectiveFrustum({
            fov: Cesium.Math.toRadians(30.0),
            aspectRatio: 1920.0 / 1080.0,
            near: 1.0,
            far: 500000
          })
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
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
          <vc-geometry-frustum
            ref="frustum"
            :frustum="frustum"
            :origin="origin"
            :orientation="orientation"
            :vertexFormat="vertexFormat"
          ></vc-geometry-frustum>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-frustum
            ref="frustumOutline"
            :frustum="frustum"
            :origin="originOutline"
            :orientation="orientation"
          ></vc-geometry-outline-frustum>
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
        vertexFormat: null,
        orientation: { x: 0, y: 0, z: 0, w: 1 },
        frustum: null,
        origin: { lng: 105, lat: 35 },
        originOutline: { lng: 110, lat: 35 }
      }
    },
    mounted() {
      Promise.all([this.$refs.frustum.createPromise, this.$refs.frustumOutline.createPromise]).then((instances) => {
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
        const { PerInstanceColorAppearance, Cartesian3, ColorGeometryInstanceAttribute, PerspectiveFrustum, Quaternion } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.frustum = new PerspectiveFrustum({
          fov: Cesium.Math.toRadians(30.0),
          aspectRatio: 1920.0 / 1080.0,
          near: 1.0,
          far: 500000
        })
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

### `vc-geometry-frustum`

| 属性名       | 类型   | 默认值 | 描述                                |
| ------------ | ------ | ------ | ----------------------------------- |
| frustum      | Object |        | `optional` 指定视锥体参数。         |
| origin       | Object |        | `optional` 指定视锥体原点。         |
| orientation  | Object |        | `optional` 指定视锥体旋转参数。     |
| vertexFormat | Object |        | `optional` 指定视锥体顶点渲染方式。 |

---

### `vc-geometry-outline-frustum`

| 属性名      | 类型   | 默认值 | 描述                            |
| ----------- | ------ | ------ | ------------------------------- |
| frustum     | Object |        | `optional` 指定视锥体参数。     |
| origin      | Object |        | `optional` 指定视锥体原点。     |
| orientation | Object |        | `optional` 指定视锥体旋转参数。 |

参考官方文档：**[FrustumGeometry](https://cesium.com/docs/cesiumjs-ref-doc/FrustumGeometry.html)**、 **[FrustumOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/FrustumOutlineGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
