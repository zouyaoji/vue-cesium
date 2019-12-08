# GroundPolylineGeometry

`vc-geometry-polyline-ground` 组件用于加载贴地或 3DTiles 多段线。需要作为 `vc-instance-geometry` 的子组件使用，只能挂载到 `vc-primitive-polyline-ground`。

## 示例

### 加载贴地多段线几何体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive-polyline-ground :appearance="appearance">
          <vc-instance-geometry>
            <vc-geometry-polyline-ground ref="polylineGround" :positions="positions" :width="2"></vc-geometry-polyline-ground>
          </vc-instance-geometry>
        </vc-primitive-polyline-ground>
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
        <vc-layer-imagery>
          <vc-provider-imagery-mapbox mapId="mapbox.streets"></vc-provider-imagery-mapbox>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          appearance: {},
          geometryInstances: {},
          positions: [
            { lng: 100.1340164450331, lat: 31.05494287836128 },
            { lng: 108.08821010582645, lat: 31.05494287836128 }
          ]
        }
      },
      mounted () {
        this.$refs.polylineGround.createPromise.then(({ Cesium, viewer, cesiumObject })=> {
          const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)
          viewer.scene.camera.flyToBoundingSphere(boundingSphere)
        })
      },
      methods: {
        ready( {Cesium, viewer }) {
          this.appearance = new Cesium.PolylineMaterialAppearance()
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
      <vc-primitive-polyline-ground :appearance="appearance">
        <vc-instance-geometry>
          <vc-geometry-polyline-ground ref="polylineGround" :positions="positions" :width="2"></vc-geometry-polyline-ground>
        </vc-instance-geometry>
      </vc-primitive-polyline-ground>
      <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
      <vc-layer-imagery>
        <vc-provider-imagery-mapbox mapId="mapbox.streets"></vc-provider-imagery-mapbox>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        appearance: {},
        geometryInstances: {},
        positions: [
          { lng: 100.1340164450331, lat: 31.05494287836128 },
          { lng: 108.08821010582645, lat: 31.05494287836128 }
        ]
      }
    },
    mounted() {
      this.$refs.polylineGround.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
        const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)
        viewer.scene.camera.flyToBoundingSphere(boundingSphere)
      })
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.appearance = new Cesium.PolylineMaterialAppearance()
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------------------ | ------------- | ------- | ------------------------------------------------------------------------------------------------ |
| positions | Array | | `required` 指定表示线条的位置数组。 **结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| width | Number | `1.0` | `optional` 指定线的宽度（像素）。 |
| granularity | Number | | `optional` 指定每个经纬度之间的采样粒度。 arcType 不是 ArcType.NONE 时有效。 |
| loop | Boolean | false | `optional` 指定折线是否首尾相连。 |
| arcType | Number | `1` | `optional` 指定线条类型。 **NONE: 0, GEODESIC: 1, RHUMB: 2** |

---

参考官方文档： **[GroundPolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylineGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
