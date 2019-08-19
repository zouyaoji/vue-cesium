# Primitive 图元

`primitive` 使用`Primitive API`加载几何对象。可以直接使用

## 示例

### 添加 RectangleGeometry 到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <primitive :appearance="appearance" :geometryInstances="geometryInstances">
        </primitive>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
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
          rectangle: {west: 100.5, south: 29.5, east: 115.5,  north: 35.5}
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance

          this.geometryInstances = new Cesium.GeometryInstance({
            geometry: new Cesium.RectangleGeometry({
              rectangle: Cesium.Rectangle.fromDegrees(this.rectangle.west, this.rectangle.south, this.rectangle.east, this.rectangle.north)
            })
          })
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
      <cesium-terrain-provider></cesium-terrain-provider>
      <primitive :appearance="appearance">
        <geometry-instance :geometry="geometry">
          <rectangle-geometry :rectangle="rectangle"></rectangle-geometry>
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
        image: 'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png',
        rectangle: { west: 102.5, south: 29.5, east: 106.5, north: 33.5 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        this.appearance = new Cesium.MaterialAppearance({
          material: new Cesium.Material({
            fabric: {
              type: 'Image',
              uniforms: {
                image: this.image
              }
            }
          })
        })
      }
    }
  }
</script>
```

## 属性

参考官方文档 [Primitive](https://cesiumjs.org/Cesium/Build/Documentation/Primitive.html)

<!-- |属性名|类型|默认值|描述|
|------|-----|-----|----|

--- -->

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
