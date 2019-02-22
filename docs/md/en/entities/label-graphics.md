# LabelGraphics

`label-graphics` Add an entity containing a cylinder object to the viewer as a subcomponent of `entity`. Describes a two dimensional label located at the position of the containing Entity. As shown in the example below.

## Examples

### add a LabelGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :label.sync="label1">
          <label-graphics text="Hello Vue Cesium" font="20px sans-serif" :pixelOffset="pixelOffset1"></label-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          label1: {},
          pixelOffset1: {},
          position1: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.position1 = Cesium.Cartesian3.fromDegrees(114.0, 40.0, 300000.0)
          this.pixelOffset1 = new Cesium.Cartesian2(0.0, 20)
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
      <entity :position="position1" :description="description" :label.sync="label1">
        <label-graphics text="Hello Vue Cesium" font="20px sans-serif" :pixelOffset="pixelOffset1"></label-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        description: 'Hello Vue Cesium',
        label1: {},
        pixelOffset1: {},
        position1: {}
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.position1 = Cesium.Cartesian3.fromDegrees(114.0, 40.0, 300000.0)
        this.pixelOffset1 = new Cesium.Cartesian2(0.0, 20)
      }
    }
  }
</script>
```

## Instance Properties

Reference official document [LabelGraphics](https://cesiumjs.org/Cesium/Build/Documentation/LabelGraphics.html)
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
|definitionChanged||Gets the event that is raised whenever a property or sub-property is changed or modified.|
