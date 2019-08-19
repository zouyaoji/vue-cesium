# Polygon 几何对象

`polygon-geometry`可以加载矩形，属于 Primitive API，作为`primitive`或`ground-primitive`的子组件将矩形添加到场景，用`ground-primitive`的添加出来是贴地形的。

## 示例

### 添加 PolygonGeometry 到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <primitive :appearance="appearance">
          <geometry-instance>
            <rectangle-geometry :rectangle="rectangle"></rectangle-geometry>
          </geometry-instance>
          <geometry-instance :geometry.sync="geometry">
            <polygon-geometry :polygonHierarchy="polygonHierarchy" :height="height"></polygon-geometry>
          </geometry-instance>
        </primitive>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          appearance: null,
          geometry: null,
          polygonHierarchy: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 108.2, lat: 35.5 },
            { lng: 102.1, lat: 33.5 }
          ],
          height: 200,
          rectangle: {west: 110.5, south: 29.5, east: 115.5,  north: 34.5}
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          this.appearance = new Cesium.MaterialAppearance({
            material: Cesium.Material.fromType('Checkerboard', {
              repeat : new Cesium.Cartesian2(20.0, 6.0)
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
    <cesium-viewer @ready="ready">
      <primitive :appearance="appearance">
        <geometry-instance>
          <rectangle-geometry :rectangle="rectangle"></rectangle-geometry>
        </geometry-instance>
        <geometry-instance :geometry.sync="geometry">
          <polygon-geometry :polygonHierarchy="polygonHierarchy" :height="height"></polygon-geometry>
        </geometry-instance>
      </primitive>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: null,
        geometry: null,
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

参考官方文档 [PolygonGeometry](https://cesiumjs.org/Cesium/Build/Documentation/PolygonGeometry.html)

<!-- |属性名|类型|默认值|描述|
|------|-----|-----|----|

--- -->

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
