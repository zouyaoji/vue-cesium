# RectangleGeometry、RectangleOutlineGeometry

- `vc-geometry-rectangle` 组件用于加载矩形几何体。
- `vc-geometry-outline-rectangle` 组件用于加载矩形几何体轮廓。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive` 或 `vc-primitive-ground`。

## 示例

### 加载矩形几何体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry>
            <vc-geometry-rectangle ref="rectangle" :rectangle="rectangle" :vertexFormat="vertexFormat"></vc-geometry-rectangle>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearanceOutline">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-rectangle ref="rectangleOutline" :rectangle="rectangleOutline"></vc-geometry-outline-rectangle>
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
          appearanceOutline: null,
          vertexFormat: null,
          rectangle: { west: 110.5, south: 29.5, east: 115.5, north: 34.5 },
          rectangleOutline: { west: 100.5, south: 29.5, east: 105.5, north: 34.5 },
          attributes: null
        }
      },
      mounted() {
        Promise.all([this.$refs.rectangle.createPromise, this.$refs.rectangleOutline.createPromise]).then((instances) => {
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
          const { MaterialAppearance, Material, Cartesian2, PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
          this.vertexFormat = MaterialAppearance.vertexFormat
          this.appearance = new MaterialAppearance({
            material: Material.fromType('Checkerboard', {
              repeat: new Cartesian2(20.0, 6.0)
            }),
            materialSupport: MaterialAppearance.MaterialSupport.TEXTURED
          })
          this.appearanceOutline = new PerInstanceColorAppearance({
            flat: true
          })
          this.attributes = {
            color: ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.5))
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
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry>
          <vc-geometry-rectangle ref="rectangle" :rectangle="rectangle" :vertexFormat="vertexFormat"></vc-geometry-rectangle>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearanceOutline">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-rectangle ref="rectangleOutline" :rectangle="rectangleOutline"></vc-geometry-outline-rectangle>
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
        appearanceOutline: null,
        vertexFormat: null,
        rectangle: { west: 110.5, south: 29.5, east: 115.5, north: 34.5 },
        rectangleOutline: { west: 100.5, south: 29.5, east: 105.5, north: 34.5 },
        attributes: null
      }
    },
    mounted() {
      Promise.all([this.$refs.rectangle.createPromise, this.$refs.rectangleOutline.createPromise]).then((instances) => {
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
        const { MaterialAppearance, Material, Cartesian2, PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
        this.vertexFormat = MaterialAppearance.vertexFormat
        this.appearance = new MaterialAppearance({
          material: Material.fromType('Checkerboard', {
            repeat: new Cartesian2(20.0, 6.0)
          }),
          materialSupport: MaterialAppearance.MaterialSupport.TEXTURED
        })
        this.appearanceOutline = new PerInstanceColorAppearance({
          flat: true
        })
        this.attributes = {
          color: ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.5))
        }
      }
    }
  }
</script>
```

## 属性

### `vc-geometry-rectangle`

| 属性名         | 类型   | 默认值 | 描述                                                                                                |
| -------------- | ------ | ------ | --------------------------------------------------------------------------------------------------- |
| rectangle      | Object |        | `required` 指定矩形四至参数。**结构：{ west: number, south: number, east: number, north: number }** |
| vertexFormat   | Number |        | `optional` 指定矩形要缓存的顶点属性。                                                               |
| ellipsoid      | Object |        | `optional` 指定矩形所在的椭球体。                                                                   |
| granularity    | Number |        | `optional` 指定每个经纬度之间的采样粒度。                                                           |
| height         | Number | `0`    | `optional` 指定矩形高度。                                                                           |
| rotation       | Number | `0.0`  | `optional` 指定矩形的旋转角（弧度），逆时针方向为正旋转。                                           |
| stRotation     | Number | `0.0`  | `optional` 指定矩形的纹理旋转坐标（弧度）， 逆时针方向为正旋转。                                    |
| extrudedHeight | Number |        | `optional` 指定矩形拉伸高度。                                                                       |

---

### `vc-geometry-outline-rectangle`

| 属性名         | 类型   | 默认值 | 描述                                                                                                |
| -------------- | ------ | ------ | --------------------------------------------------------------------------------------------------- |
| rectangle      | Object |        | `required` 指定矩形四至参数。**结构：{ west: number, south: number, east: number, north: number }** |
| ellipsoid      | Object |        | `optional` 指定矩形所在的椭球体。                                                                   |
| granularity    | Number |        | `optional` 指定每个经纬度之间的采样粒度。                                                           |
| height         | Number | `0`    | `optional` 指定矩形高度。                                                                           |
| rotation       | Number | `0.0`  | `optional` 指定矩形的旋转角（弧度），逆时针方向为正旋转。                                           |
| extrudedHeight | Number |        | `optional` 指定矩形拉伸高度。                                                                       |

---

参考官方文档：**[RectangleGeometry](https://cesium.com/docs/cesiumjs-ref-doc/RectangleGeometry.html)**、**[RectangleOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/RectangleOutlineGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
