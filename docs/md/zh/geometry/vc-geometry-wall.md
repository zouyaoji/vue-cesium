# WallGeometry、 WallOutlineGeometry

- `vc-geometry-wall` 组件用于加载围墙几何体。
- `vc-geometry-outline-wall` 组件用于加载围墙轮廓几何体。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive`。

## 示例

### 加载围墙几何体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
            <vc-geometry-wall ref="wall" :positions="positions" :vertexFormat="vertexFormat"></vc-geometry-wall>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-wall ref="wallOutline" :positions="positionsOutline"></vc-geometry-outline-wall>
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
          positions: [
            { lng: 107.0, lat: 40.0, height: 100000.0 },
            { lng: 97.0, lat: 40.0, height: 100000.0 },
            { lng: 97.0, lat: 37.0, height: 100000.0 },
            { lng: 107.0, lat: 37.0, height: 100000.0 },
            { lng: 107.0, lat: 40.0, height: 100000.0 }
          ],
          positionsOutline: [
            { lng: 115.0, lat: 30.0, height: 200000.0 },
            { lng: 90.0, lat: 30.0, height: 200000.0 }
          ]
        }
      },
      mounted() {
        Promise.all([this.$refs.wall.createPromise, this.$refs.wallOutline.createPromise]).then((instances) => {
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
          const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            flat: true
          })
          this.vertexFormat = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
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
          <vc-geometry-wall ref="wall" :positions="positions" :vertexFormat="vertexFormat"></vc-geometry-wall>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-wall ref="wallOutline" :positions="positionsOutline"></vc-geometry-outline-wall>
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
        positions: [
          { lng: 107.0, lat: 40.0, height: 100000.0 },
          { lng: 97.0, lat: 40.0, height: 100000.0 },
          { lng: 97.0, lat: 37.0, height: 100000.0 },
          { lng: 107.0, lat: 37.0, height: 100000.0 },
          { lng: 107.0, lat: 40.0, height: 100000.0 }
        ],
        positionsOutline: [
          { lng: 115.0, lat: 30.0, height: 200000.0 },
          { lng: 90.0, lat: 30.0, height: 200000.0 }
        ]
      }
    },
    mounted() {
      Promise.all([this.$refs.wall.createPromise, this.$refs.wallOutline.createPromise]).then((instances) => {
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
        const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.vertexFormat = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
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

### `vc-geometry-wall`

<!-- prettier-ignore -->
| name | type | default | description |
| --------------- | ------ | ------- | ----------------------------------------------------------------------------- |
| positions | Array | | `required` 指定 wall 位置数组。 **structure: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| granularity | Number | | `optional` 指定每个纬度和经度之间的距离（弧度）。 |
| maximumHeights | Array | | `optional` 指定 wall 顶部的高度数组。|
| minimumHeights | Array | | `optional` 指定 wall 底部的高度数组。|
| ellipsoid | Object | | `optional` 指定参考椭球体。 |
| vertexFormat | Object | | `optional` 指定顶点属性渲染方式。|

---

### `vc-geometry-outline-wall`

<!-- prettier-ignore -->
| name | type | default | description |
| --------------- | ------ | ------- | ----------------------------------------------------------------------------- |
| positions | Array | | `required` 指定 wall 位置数组。 **structure: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| granularity | Number | | `optional` 指定每个纬度和经度之间的距离（弧度）。 |
| maximumHeights | Array | | `optional` 指定 wall 顶部的高度数组。|
| minimumHeights | Array | | `optional` 指定 wall 底部的高度数组。|
| ellipsoid | Object | | `optional` 指定参考椭球体。 |

---

参考官方文档： **[WallGeometry](https://cesium.com/docs/cesiumjs-ref-doc/WallGeometry.html)**、 **[WallOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/WallOutlineGeometry.html)**

## 事件

<!-- prettier-ignore -->
| 事件名            | 参数                           | 描述                                                                             |
| ----------------- | ------------------------------ | -------------------------------------------------------------------------------- |
| ready             | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| definitionChanged |                                | 每当更改或修改属性或子属性时触发该事件。                                         |

---
