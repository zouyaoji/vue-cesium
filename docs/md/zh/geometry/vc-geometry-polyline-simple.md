# SimplePolylineGeometry

- `vc-geometry-polyline-simple` 组件用于加载线段。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive`。

## Example

### 加载线段

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance" :geometryInstances.sync="geometryInstances">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-polyline-simple ref="polyline" :positions="positions"></vc-geometry-polyline-simple>
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
          geometryInstances: null,
          positions: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 108.2, lat: 35.5 },
            { lng: 102.1, lat: 33.5 }
          ],
          attributes: null
        }
      },
      mounted() {
        this.$refs.polyline.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
          const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)
          viewer.scene.camera.flyToBoundingSphere(boundingSphere)
        })
      },
      methods: {
        ready({ Cesium, viewer }) {
          const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            flat: true
          })
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
          }
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
      <vc-primitive :appearance="appearance" :geometryInstances.sync="geometryInstances">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-polyline-simple ref="polyline" :positions="positions"></vc-geometry-polyline-simple>
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
        geometryInstances: null,
        positions: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 108.2, lat: 35.5 },
          { lng: 102.1, lat: 33.5 }
        ],
        attributes: null
      }
    },
    mounted() {
      this.$refs.polyline.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
        const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)
        viewer.scene.camera.flyToBoundingSphere(boundingSphere)
      })
    },
    methods: {
      ready({ Cesium, viewer }) {
        const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------ | ------ | ------ | ----------------------------------- |
| positions | Array | | `required` 指定线段位置信息。 **结构: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| colors | Array | | `optional` 指定每个顶点或每个线段的颜色数组。 |
| colorsPerVertex | Boolean | `false` | `optional` 指定颜色数组是根据线段数取均值还是通过线段顶点插值。 |
| arcType | Number | `1` | `optional` 指定线条类型。 **NONE: 0, GEODESIC: 1, RHUMB: 2** |
| granularity | Number | | `optional` 指定每个经纬度之间的采样粒度。 arcType 不是 ArcType.NONE 时有效。 |
| ellipsoid | Object | | `optional` 指定参考椭球体。 |

---

参考官方文档： **[SimplePolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/SimplePolylineGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
