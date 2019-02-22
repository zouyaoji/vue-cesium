# BillboardGraphics

`billboard-graphics` Add an entity containing a billboard object to the viewer as a subcomponent of `entity`. Describes a two dimensional icon located at the position of the containing Entity. As shown in the example below.

## Examples

### add a BillboardGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position" :description="description" :id="id" :billboard.sync="billboard">
          <billboard-graphics :image="image" :scale="0.1"></billboard-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          id: 'This is a billboard',
          description: 'Hello Vue Cesium',
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          position: {},
          billboard: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.position = Cesium.Cartesian3.fromDegrees(90, 40, 10000)
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position" :description="description" :id="id" :billboard.sync="billboard">
          <billboard-graphics :image="image" :scale="0.1"></billboard-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          id: 'This is a billboard',
          description: 'Hello Vue Cesium',
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          position: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.position = Cesium.Cartesian3.fromDegrees(90, 40, 10000)
        }
      }
    }
  </script>
```

## Instance Properties

Reference official document [BillboardGraphics](https://cesiumjs.org/Cesium/Build/Documentation/BillboardGraphics.html)
<!-- |属性名|类型|默认值|描述|
|------|-----|-----|----|
|positions|Property||`optional` 指定表示线条的Cartesian3位置数组。|
|followSurface|Property|true|`optional` 指定线段是弧线还是直线连接。|
|clampToGround|Property|false|`optional` 指定线是否贴地。|
|width|Property|1.0|`optional` 指定线的宽度（像素）。|
|show|Property|true|`optional` 指定线是否可显示。|
|material|MaterialProperty|Color.WHITE|`optional` 指定用于绘制线的材质。|
|depthFailMaterial|MaterialProperty||`optional` 指定用于绘制低于地形的线的材质。|
|granularity|Property|Cesium.Math.RADIANS_PER_DEGREE|`optional`指定每个纬度和经度之间的角距离，当followSurface为true时有效。|
|shadows|Property|ShadowMode.DISABLED|`optional` 指定这些是否投射或接收来自每个光源的阴影。|
|distanceDisplayCondition|Property||`optional` 指定相机到线的距离。|
|zIndex|Property|0|`optional` 指定用于排序地面几何的zIndex。 仅当`clampToGround`为真且支持地形上的折线时才有效。|
--- -->

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.|
