# Primitive

`vc-primitive` 用于加载普通图元，再通过它加载几何图形。

## 示例

### 加载普通图元

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance" :geometryInstances="geometryInstances"></vc-primitive>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          appearance: null,
          geometryInstances: null,
          geometry: null,
          polygonHierarchy: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 108.2, lat: 35.5 },
            { lng: 102.1, lat: 33.5 }
          ],
          height: 200,
          rectangle: { west: 100.5, south: 29.5, east: 115.5, north: 35.5 }
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance

          this.geometryInstances = new Cesium.GeometryInstance({
            geometry: new Cesium.RectangleGeometry({
              rectangle: Cesium.Rectangle.fromDegrees(
                this.rectangle.west,
                this.rectangle.south,
                this.rectangle.east,
                this.rectangle.north
              )
            })
          })
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
      <vc-primitive :appearance="appearance" :geometryInstances="geometryInstances"></vc-primitive>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: null,
        geometryInstances: null,
        geometry: null,
        polygonHierarchy: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 108.2, lat: 35.5 },
          { lng: 102.1, lat: 33.5 }
        ],
        height: 200,
        rectangle: { west: 100.5, south: 29.5, east: 115.5, north: 35.5 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance

        this.geometryInstances = new Cesium.GeometryInstance({
          geometry: new Cesium.RectangleGeometry({
            rectangle: Cesium.Rectangle.fromDegrees(
              this.rectangle.west,
              this.rectangle.south,
              this.rectangle.east,
              this.rectangle.north
            )
          })
        })
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

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------ | ---- | ------ | ---- |
| geometryInstances | Object\|Array | | `optional` 指定用于渲染的几何体实例或者几何体实例集合。 |
| appearance | Object | | `optional` 指定图元的外观参数。 |
| depthFailAppearance | Object | | `optional` 指定图元在深度测试失败后的外观。 |
| show | Boolean | `true` | `optional` 指定图元是否显示。 |
| modelMatrix | Object | | `optional` 指定图元从模型坐标转换为世界坐标的 4 x 4 矩阵。 |
| vertexCacheOptimize | Boolean | `false` | `optional` 指定是否优化几何体顶点着色器之前和之后的缓存。 |
| interleave | Boolean | `false` | `optional` 指定是否交错几何体顶点属性，true 时可以稍微改善渲染性能，但会增加加载时间。 |
| compressVertices | Boolean | `true` | `optional` 指定是否压缩几何体顶点，压缩可以以节省内存。 |
| releaseGeometryInstances | Boolean | `true` | `optional` 指定是否保留图元对几何体实例的输入，不保留可以节省内存。 |
| allowPicking | Boolean | `true` | `optional` 指定图元是否可以被 Scene.pick 拾取，关闭拾取可以节省内存。 |
| cull | Boolean | `true` | `optional` 指定是否能被渲染器视锥体剔除。  |
| asynchronous | Boolean | `true` | `optional` 指定图元时异步加载还是同步加载。 |
| debugShowBoundingVolume | Boolean | `false` | `optional` 指定是否显示图元的边界球，用于调试使用。 |
| shadows | Number | `0` | `optional` 指定图元是否投射或接收来自每个光源的阴影。  **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |

---

参考官方文档： **[Primitive](https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
