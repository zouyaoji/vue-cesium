# RectangleGeometry

`vc-geometry-rectangle` 组件用于加载矩形几何体。需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive` 或 `vc-primitive-ground`。

## 示例

### 加载矩形几何体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance" :geometryInstances.sync="geometryInstances">
          <vc-instance-geometry>
            <vc-geometry-rectangle :rectangle="rectangle"></vc-geometry-rectangle>
          </vc-instance-geometry>
          <vc-instance-geometry :geometry.sync="geometry">
            <vc-geometry-polygon :polygonHierarchy="polygonHierarchy" :height="height"></vc-geometry-polygon>
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
          polygonHierarchy: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 108.2, lat: 35.5 },
            { lng: 102.1, lat: 33.5 }
          ],
          height: 200,
          rectangle: { west: 110.5, south: 29.5, east: 115.5, north: 34.5 }
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance
          this.appearance = new Cesium.MaterialAppearance({
            material: Cesium.Material.fromType('Checkerboard', {
              repeat: new Cesium.Cartesian2(20.0, 6.0)
            }),
            materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
          })
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
        <vc-instance-geometry>
          <vc-geometry-rectangle :rectangle="rectangle"></vc-geometry-rectangle>
        </vc-instance-geometry>
        <vc-instance-geometry :geometry.sync="geometry">
          <vc-geometry-polygon :polygonHierarchy="polygonHierarchy" :height="height"></vc-geometry-polygon>
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
        polygonHierarchy: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 108.2, lat: 35.5 },
          { lng: 102.1, lat: 33.5 }
        ],
        height: 200,
        rectangle: { west: 110.5, south: 29.5, east: 115.5, north: 34.5 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        this.appearance = new Cesium.MaterialAppearance({
          material: Cesium.Material.fromType('Checkerboard', {
            repeat: new Cesium.Cartesian2(20.0, 6.0)
          }),
          materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
        })
      }
    }
  }
</script>
```

## 属性

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

参考官方文档：**[RectangleGeometry](https://cesium.com/docs/cesiumjs-ref-doc/RectangleGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
