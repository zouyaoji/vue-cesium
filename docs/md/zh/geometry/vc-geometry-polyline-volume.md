# PolylineVolumeGeometry、 PolylineVolumeOutlineGeometry

- `vc-geometry-polyline-volume` 组件用于加载多段线柱几何体。
- `vc-geometry-outline-polyline-volume` 组件用于加载多段线柱几何体轮廓。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive`。

## 示例

### 加载多段线柱几何体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer ref="viewer" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive :appearance="appearance" :geometryInstances.sync="geometryInstances">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-polyline-volume
              ref="polylineVolume"
              :polylinePositions="positions"
              :shapePositions="shape"
              :vertexFormat="vertexFormat"
            ></vc-geometry-polyline-volume>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-polyline-volume
              ref="polylineVolumeOutline"
              :polylinePositions="positionsOutline"
              :shapePositions="shape"
            >
            </vc-geometry-outline-polyline-volume>
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
            { lng: 105.0, lat: 32.0 },
            { lng: 105.0, lat: 36.0 },
            { lng: 108.0, lat: 36.0 }
          ],
          positionsOutline: [
            { lng: 110.0, lat: 32.0 },
            { lng: 110.0, lat: 36.0 },
            { lng: 113.0, lat: 36.0 }
          ],
          shape: [],
          vertexFormat: null,
          attributes: null
        }
      },
      mounted() {
        this.$refs.viewer.createPromise.then(({ Cesium, viewer }) => {
          this.viewer = viewer
          const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            flat: true
          })
          this.vertexFormat = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.shape = this.computeCircle(60000.0)
        })
        Promise.all([this.$refs.polylineVolume.createPromise, this.$refs.polylineVolumeOutline.createPromise]).then((instances) => {
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
        computeCircle(radius) {
          let positions = []
          for (let i = 0; i < 360; i++) {
            let radians = Cesium.Math.toRadians(i)
            positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })
          }
          return positions
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
    <vc-viewer ref="viewer" @LEFT_CLICK="LEFT_CLICK">
      <vc-primitive :appearance="appearance" :geometryInstances.sync="geometryInstances">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-polyline-volume
            ref="polylineVolume"
            :polylinePositions="positions"
            :shapePositions="shape"
            :vertexFormat="vertexFormat"
          ></vc-geometry-polyline-volume>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-polyline-volume
            ref="polylineVolumeOutline"
            :polylinePositions="positionsOutline"
            :shapePositions="shape"
          >
          </vc-geometry-outline-polyline-volume>
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
          { lng: 105.0, lat: 32.0 },
          { lng: 105.0, lat: 36.0 },
          { lng: 108.0, lat: 36.0 }
        ],
        positionsOutline: [
          { lng: 110.0, lat: 32.0 },
          { lng: 110.0, lat: 36.0 },
          { lng: 113.0, lat: 36.0 }
        ],
        shape: [],
        vertexFormat: null,
        attributes: null
      }
    },
    mounted() {
      this.$refs.viewer.createPromise.then(({ Cesium, viewer }) => {
        this.viewer = viewer
        const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.vertexFormat = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.shape = this.computeCircle(60000.0)
      })
      Promise.all([this.$refs.polylineVolume.createPromise, this.$refs.polylineVolumeOutline.createPromise]).then((instances) => {
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
      computeCircle(radius) {
        let positions = []
        for (let i = 0; i < 360; i++) {
          let radians = Cesium.Math.toRadians(i)
          positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })
        }
        return positions
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

### `vc-geometry-polyline-volume`

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------ | ------ | ------ | ----------------------------------- |
| polylinePositions | Array | | `required` 指定 polyline volume 位置信息。 **struct: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| shapePositions | Array | | `required` 指定 polyline volume 拉伸的形状数组。 **struct: [{ x: number, y: number },...,{ x: number, y: number }]** |
| ellipsoid | Object | | `optional` 指定 polyline volume 参考椭球体。 |
| granularity | Number | | `optional` 指定 polyline volume 每个经纬度之间的距离（弧度）。 |
| vertexFormat | Object | | `optional` 指定 polyline volume 顶点属性渲染方式。 |
| cornerType | Number | | `optional` 指定 polyline volume 转角类型。 **ROUNDED: 0, MITERED: 1, BEVELED: 2** |

---

### `vc-geometry-outline-polyline-volume`

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------ | ------ | ------ | ----------------------------------- |
| polylinePositions | Array | | `required` 指定 polyline volume 位置信息。 **struct: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| shapePositions | Array | | `required` 指定 polyline volume 拉伸的形状数组。 **struct: [{ x: number, y: number },...,{ x: number, y: number }]** |
| ellipsoid | Object | | `optional` 指定 polyline volume 参考椭球体。 |
| granularity | Number | | `optional` 指定 polyline volume 每个经纬度之间的距离（弧度）。 |
| cornerType | Number | | `optional` 指定 polyline volume 转角类型。 **ROUNDED: 0, MITERED: 1, BEVELED: 2** |

---

参考官方文档： **[PolylineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolylineGeometry.html)**、 **[PolylineVolumeOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeOutlineGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
