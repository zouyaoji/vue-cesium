# CorridorGeometry、CorridorOutlineGeometry

- `vc-geometry-corridor` 组件用于加载廊体。
- `vc-geometry-outline-corridor` 组件用于加载廊体轮廓。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive` 或 `vc-primitive-ground`。

## 示例

### 加载廊体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive-ground :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
            <vc-geometry-corridor ref="corridor" :positions="positions" :width="width"></vc-geometry-corridor>
          </vc-instance-geometry>
        </vc-primitive-ground>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributesOutline">
            <vc-geometry-outline-corridor ref="corridorOutline" :positions="positionsOutline" :width="width"></vc-geometry-outline-corridor>
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
          width: 250000,
          attributes: null,
          attributesOutline: null,
          positions: [
            { lng: 100.0, lat: 40.0 },
            { lng: 105.0, lat: 40.0 },
            { lng: 105.0, lat: 35.0 }
          ],
          positionsOutline: [
            { lng: 102.0, lat: 40.0 },
            { lng: 107.0, lat: 40.0 },
            { lng: 107.0, lat: 35.0 }
          ]
        }
      },
      mounted() {
        Promise.all([this.$refs.corridor.createPromise, this.$refs.corridorOutline.createPromise]).then((instances) => {
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
            flat : true
          })
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(1.0, 1.0, 0.0, 1.0)
          }
          this.attributesOutline = {
            color: new ColorGeometryInstanceAttribute(1.0, 0.0, 0.0, 1.0)
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
      <vc-primitive-ground :appearance="appearance">
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
          <vc-geometry-corridor ref="corridor" :positions="positions" :width="width"></vc-geometry-corridor>
        </vc-instance-geometry>
      </vc-primitive-ground>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributesOutline">
          <vc-geometry-outline-corridor
            ref="corridorOutline"
            :positions="positionsOutline"
            :width="width"
          ></vc-geometry-outline-corridor>
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
        width: 250000,
        attributes: null,
        attributesOutline: null,
        positions: [
          { lng: 100.0, lat: 40.0 },
          { lng: 105.0, lat: 40.0 },
          { lng: 105.0, lat: 35.0 }
        ],
        positionsOutline: [
          { lng: 102.0, lat: 40.0 },
          { lng: 107.0, lat: 40.0 },
          { lng: 107.0, lat: 35.0 }
        ]
      }
    },
    mounted() {
      Promise.all([this.$refs.corridor.createPromise, this.$refs.corridorOutline.createPromise]).then((instances) => {
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
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(1.0, 1.0, 0.0, 1.0)
        }
        this.attributesOutline = {
          color: new ColorGeometryInstanceAttribute(1.0, 0.0, 0.0, 1.0)
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

### `vc-geometry-corridor`

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ----- | --- | ----- | -----|
| positions | Array | | `required` 指定描述 corridor 位置的经纬度(高度)数组。 **结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| width | Number | | `required` 指定 corridor 边之间的距离。 |
| ellipsoid | Object | | `optional` 指定 corridor 参考椭球体。 |
| granularity | Number | | `optional` 指定每个经纬度之间的采样粒度。 |
| height | Number | `0` | `optional` 指定 corridor 高度。 |
| extrudedHeight | Number | | `optional` 指定 corridor 拉伸高度。 |
| vertexFormat | Object | | `optional` 指定 corridor 要缓存的顶点属性。 |
| cornerType | Number | `0` | `optional` 指定 corridor 转角样式。**ROUNDED: 0, MITERED: 1, BEVELED: 2** |

---

### `vc-geometry-outline-corridor`

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ----- | --- | ----- | -----|
| positions | Array | | `required` 指定描述 corridor 位置的经纬度(高度)数组。 **结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| width | Number | | `required` 指定 corridor 边之间的距离。 |
| ellipsoid | Object | | `optional` 指定 corridor 参考椭球体。 |
| granularity | Number | | `optional` 指定每个经纬度之间的采样粒度。 |
| height | Number | `0` | `optional` 指定 corridor 高度。 |
| extrudedHeight | Number | | `optional` 指定 corridor 拉伸高度。 |
| cornerType | Number | `0` | `optional` 指定 corridor 转角样式。**ROUNDED: 0, MITERED: 1, BEVELED: 2** |

---

参考官方文档：**[CorridorGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGeometry.html)**、**[CorridorOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CorridorOutlineGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
