# ClassificationPrimitive 图元

`classification-primitive` 使用`Primitive API`加载几何对象。按照 Cesium 组织方式，需要包裹`geometry-instance`作为中间组件添加集合对象`Geometry`。相比`primitive`和`ground-primitive`组件`classification-primitive`主要用于加载体对象，如 `BoxGeometry`、 `CylinderGeometry`、 `EllipsoidGeometry`、`PolylineVolumeGeometry`和 `SphereGeometry`。而 `CircleGeometry`、 `CorridorGeometry`、 `EllipseGeometry`、 `PolygonGeometry`和`RectangleGeometry` 需要拉伸才能正常渲染。

## 示例

### 添加 RectangleGeometry 到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <cesium-terrain-provider></cesium-terrain-provider>
        <classification-primitive :asynchronous="false">
          <geometry-instance  :geometry.sync="geometry" :attributes="attributes">
            <polygon-geometry :polygonHierarchy="polygonHierarchy" :extrudedHeight="extrudedHeight"></polygon-geometry>
          </geometry-instance>
        </classification-primitive>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          appearance: null,
          geometry: null,
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
    <cesium-viewer @ready="ready">
      <cesium-terrain-provider></cesium-terrain-provider>
      <classification-primitive :asynchronous="false">
        <geometry-instance :geometry.sync="geometry" :attributes="attributes">
          <polygon-geometry :polygonHierarchy="polygonHierarchy" :extrudedHeight="extrudedHeight"></polygon-geometry>
        </geometry-instance>
      </classification-primitive>
    </cesium-viewer>
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

参考官方文档 [ClassificationPrimitive](https://cesiumjs.org/Cesium/Build/Documentation/ClassificationPrimitive.html)

<!-- |属性名|类型|默认值|描述|
|------|-----|-----|----|

--- -->

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
