# ClassificationPrimitive

`vc-primitive-classification` 组件用于加载分类图元，通过它加载高亮的图形闭合体。支持加载 `BoxGeometry`、 `CylinderGeometry`、 `EllipsoidGeometry`、`PolylineVolumeGeometry`和 `SphereGeometry`；而 `CircleGeometry`、 `CorridorGeometry`、 `EllipseGeometry`、 `PolygonGeometry`和`RectangleGeometry` 需要拉伸才能正常渲染。

## 示例

### 加载分类图元

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
        <vc-primitive-classification :asynchronous="false">
          <vc-instance-geometry  :geometry.sync="geometry" :attributes="attributes">
            <vc-geometry-polygon :polygonHierarchy="polygonHierarchy" :extrudedHeight="extrudedHeight"></vc-geometry-polygon>
          </geometry-instance>
        </vc-primitive-classification>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          appearance: null,
          geometry: {},
          image: 'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
          rectangle: {west: 102.4, south: 29.5, east: 106.5,  north: 33.5},
          vertexFormat: null,
          attributes: null,
          extrudedHeight: 3000,
          polygonHierarchy: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 102.1, lat: 33.5 }
          ]
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          viewer.camera.setView({
            destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
            orientation: {
              heading: 6.20312220367255,
              pitch: -0.9937536846355606,
              roll: 0.002443376981836387
            }
          })
          this.attributes = {
            color : Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))
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
      <cesium-terrain-provider></cesium-terrain-provider>
      <classification-primitive :asynchronous="false">
        <geometry-instance :geometry.sync="geometry" :attributes="attributes">
          <polygon-geometry :polygonHierarchy="polygonHierarchy" :extrudedHeight="extrudedHeight"></polygon-geometry>
        </geometry-instance>
      </classification-primitive>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: null,
        geometry: null,
        image: 'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
        rectangle: { west: 102.4, south: 29.5, east: 106.5, north: 33.5 },
        vertexFormat: null,
        attributes: null,
        extrudedHeight: 3000,
        polygonHierarchy: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 102.1, lat: 33.5 }
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
          orientation: {
            heading: 6.20312220367255,
            pitch: -0.9937536846355606,
            roll: 0.002443376981836387
          }
        })
        this.attributes = {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))
        }
      }
    }
  }
</script>
```

## 属性

| 属性名                   | 类型          | 默认值  | 描述                                                                                             |
| ------------------------ | ------------- | ------- | ------------------------------------------------------------------------------------------------ |
| geometryInstances        | Object\|Array |         | `optional` 指定图元用于渲染的几何图形实例或图形实例集合。                                        |
| appearance               | Object        |         | `optional` 指定图元的外观参数，如果具有 color 属性，默认为 PerInstanceColorAppearance 。         |
| show                     | Boolean       | `true`  | `optional` 指定图元是否显示。                                                                    |
| vertexCacheOptimize      | Boolean       | `false` | `optional` 指定是否优化几何体顶点着色器之前和之后的缓存。                                        |
| interleave               | Boolean       | `false` | `optional` 指定是否交错几何体顶点属性，true 时可以稍微改善渲染性能，但会增加加载时间。           |
| compressVertices         | Boolean       | `true`  | `optional` 指定是否压缩几何体顶点，压缩可以以节省内存。                                          |
| releaseGeometryInstances | Boolean       | `true`  | `optional` 指定是否保留图元对几何体实例的输入，不保留可以节省内存。                              |
| allowPicking             | Boolean       | `true`  | `optional` 指定图元是否可以被 Scene.pick 拾取，关闭拾取可以节省内存。                            |
| asynchronous             | Boolean       | `true`  | `optional` 指定图元时异步加载还是同步加载。                                                      |
| classificationType       | Number        | `2`     | `optional` 指定是贴地形还是贴 3DTiles，还是两者都贴。 **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |
| debugShowBoundingVolume  | Boolean       | `false` | `optional` 指定是否显示图元的边界球，用于调试使用。                                              |
| debugShowShadowVolume    | Boolean       | `false` | `optional` 指定是否绘制图元中每个几何图形的阴影体积，用于调试使用。                              |

---

参考官方文档： [ClassificationPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html)

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
