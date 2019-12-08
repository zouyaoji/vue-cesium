# EllipseGeometry、 EllipseOutlineGeometry

- `vc-geometry-ellipse` 组件用于加载椭圆。
- `vc-geometry-outline-ellipse` 组件用于加载椭圆轮廓。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive` 或 `vc-primitive-ground`。

## 示例

### 加载椭圆

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK">
        <vc-primitive-ground :appearance="appearance">
          <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
            <vc-geometry-ellipse
              ref="ellipse"
              :center="center"
              :semiMinorAxis="200000.0"
              :semiMajorAxis="300000.0"
              :height="50000"
            ></vc-geometry-ellipse>
          </vc-instance-geometry>
        </vc-primitive-ground>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-ellipse
              ref="ellipseOutline"
              :center="center"
              :semiMinorAxis="200000.0"
              :semiMajorAxis="300000.0"
              :height="100000"
            >
            </vc-geometry-outline-ellipse>
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
          center: { lng: 102, lat: 38 }
        }
      },
      mounted() {
        Promise.all([this.$refs.ellipse.createPromise, this.$refs.ellipseOutline.createPromise]).then((instances) => {
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
      <vc-primitive-ground :appearance="appearance">
        <vc-instance-geometry :geometry.sync="geometry" :attributes="attributes">
          <vc-geometry-ellipse
            ref="ellipse"
            :center="center"
            :semiMinorAxis="200000.0"
            :semiMajorAxis="300000.0"
            :height="50000"
          ></vc-geometry-ellipse>
        </vc-instance-geometry>
      </vc-primitive-ground>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-ellipse
            ref="ellipseOutline"
            :center="center"
            :semiMinorAxis="200000.0"
            :semiMajorAxis="300000.0"
            :height="100000"
          >
          </vc-geometry-outline-ellipse>
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
        center: { lng: 102, lat: 38 }
      }
    },
    mounted() {
      Promise.all([this.$refs.ellipse.createPromise, this.$refs.ellipseOutline.createPromise]).then((instances) => {
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

### `vc-geometry-ellipse`

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---- | ---- | ------- | ----------- |
| center | Object | | `required` 指定椭圆的中心位置。 **结构: { lng: number, lat: number, height: number }** |
| semiMajorAxis | Number | | `required` 指定椭圆的长半轴长度，单位是米。 |
| semiMinorAxis | Number | | `required` 指定椭圆的短半轴长度，单位是米。 |
| ellipsoid | Object | | `optional` 指定椭圆的参考椭球体。|
| height | Number | `0` | `optional` 指定椭圆离地表的高度。|
| extrudedHeight | Number | | `optional` 指定椭圆拉伸高度。 |
| rotation | Number | `0.0` | `optional` 指定椭圆以正北逆时针方向旋转的角度。 |
| stRotation | Number\|Object | `0.0` | `optional` 指定椭圆纹理以正北逆时针方向旋转的角度。|
| granularity | Number | | `optional` 指定椭圆上点之间的角距离（弧度）。 |
| vertexFormat | Object | | `optional` 指定顶点属性渲染方式。|

---

### `vc-geometry-outline-ellipse`

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---- | ---- | ------- | ----------- |
| center | Object | | `required` 指定椭圆的中心位置。 **结构: { lng: number, lat: number, height: number }** |
| semiMajorAxis | Number | | `required` 指定椭圆的长半轴长度，单位是米。 |
| semiMinorAxis | Number | | `required` 指定椭圆的短半轴长度，单位是米。 |
| ellipsoid | Object | | `optional` 指定椭圆的参考椭球体。|
| height | Number | `0` | `optional` 指定椭圆离地表的高度。|
| extrudedHeight | Number | | `optional` 指定椭圆拉伸高度。 |
| rotation | Number | `0.0` | `optional` 指定椭圆以正北逆时针方向旋转的角度。 |
| stRotation | Number\|Object | `0.0` | `optional` 指定椭圆纹理以正北逆时针方向旋转的角度。|
| granularity | Number | | `optional` 指定椭圆上点之间的角距离（弧度）。 |
| numberOfVerticalLines | Number | `16` | `optional` 指定拉伸的椭圆连接顶部与底部的线条数量。|

参考官方文档: **[EllipseGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipseGeometry.html)**、 **[EllipseOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/EllipseOutlineGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
