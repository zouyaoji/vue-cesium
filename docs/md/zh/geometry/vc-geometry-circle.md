# CircleGeometry、CircleOutlineGeometry

- `vc-geometry-circle` 组件用于加载圆形。
- `vc-geometry-outline-circle` 组件用于加载圆形轮廓。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive` 或 `vc-primitive-ground`。

## 示例

### 加载圆形

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive-ground :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
            <vc-geometry-circle ref="circle" :center="center" :radius="250000"></vc-geometry-circle>
          </vc-instance-geometry>
        </vc-primitive-ground>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-circle ref="circleOutline" :center="centerOutline" :radius="250000"></vc-geometry-outline-circle>
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
          center: { lng: 102, lat: 38 },
          centerOutline: { lng: 110, lat: 38 }
        }
      },
      mounted() {
        Promise.all([this.$refs.circle.createPromise, this.$refs.circleOutline.createPromise]).then((instances) => {
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
        ready({ Cesium, viewer, cesiumObject }) {
          this.viewer = viewer
          const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance } = Cesium
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.appearance = new PerInstanceColorAppearance({
            flat : true
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
      <vc-primitive-ground :appearance="appearance">
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
          <vc-geometry-circle ref="circle" :center="center" :radius="250000"></vc-geometry-circle>
        </vc-instance-geometry>
      </vc-primitive-ground>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-circle ref="circleOutline" :center="centerOutline" :radius="250000"></vc-geometry-outline-circle>
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
        center: { lng: 102, lat: 38 },
        centerOutline: { lng: 110, lat: 38 }
      }
    },
    mounted() {
      Promise.all([this.$refs.circle.createPromise, this.$refs.circleOutline.createPromise]).then((instances) => {
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
        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance } = Cesium
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.appearance = new PerInstanceColorAppearance({
          flat: true
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

### `vc-geometry-circle`

| 属性名         | 类型   | 默认值 | 描述                                                                               |
| -------------- | ------ | ------ | ---------------------------------------------------------------------------------- |
| center         | Object |        | `required` 指定圆形中心点。 **结构：{ lng: number, lat: number, height: number }** |
| radius         | Number |        | `required` 指定圆形半径。                                                          |
| ellipsoid      | Object |        | `optional` 指定圆形参考椭球体。                                                    |
| height         | Number | `0.0`  | `optional` 指定圆形离地表的高度（米）。                                            |
| granularity    | Number | `0.02` | `optional` 指定圆形圆弧每个点的角间距（弧度）。                                    |
| vertexFormat   | Object |        | `optional` 指定要计算的顶点属性。                                                  |
| extrudedHeight | Number | `0.0`  | `optional` 指定圆形拉伸的高度（米）。                                              |
| stRotation     | Number | `0.0`  | `optional` 指定圆形纹理的旋转坐标（以弧度为单位）。 正旋转为逆时针方向。           |

---

### `vc-geometry-outline-circle`

| 属性名                | 类型   | 默认值 | 描述                                                                               |
| --------------------- | ------ | ------ | ---------------------------------------------------------------------------------- |
| center                | Object |        | `required` 指定圆形中心点。 **结构：{ lng: number, lat: number, height: number }** |
| radius                | Number |        | `required` 指定圆形半径。                                                          |
| ellipsoid             | Object |        | `optional` 指定圆形参考椭球体。                                                    |
| height                | Number | `0.0`  | `optional` 指定圆形离地表的高度（米）。                                            |
| granularity           | Number | `0.02` | `optional` 指定圆形圆弧每个点的角间距（弧度）。                                    |
| extrudedHeight        | Number | `0.0`  | `optional` 指定圆形拉伸的高度（米）。                                              |
| numberOfVerticalLines | Number | `16`   | `optional` 指定圆形在拉伸时顶部与底部之间绘制的线数。                              |

---

参考官方文档：**[CircleGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CircleGeometry.html)**、**[CircleOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CircleOutlineGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
