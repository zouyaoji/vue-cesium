# PointGraphics

`point-graphics` Add an entity containing a point object to the viewer as a subcomponent of `entity`. Describes a graphical point located at the position of the containing Entity. As shown in the example below.

## Examples

### add a PointGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :point.sync="point1">
          <point-graphics :color="color1" :pixelSize="8"></point-graphics>
        </entity>
        <entity :position="position2" :description="description" :point.sync="point2">
          <point-graphics :color="color2" :pixelSize="16"></point-graphics>
        </entity>
        <entity :position="position3" :description="description" :point.sync="point3">
          <point-graphics :color="color3" :pixelSize="32" @ready="subReady"></point-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          point1: {},
          color1: {},
          position1: {},

          point2: {},
          color2: {},
          position2: {},

          point3: {},
          color3: {},
          position3: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.position1 = Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883)
          this.color1 = Cesium.Color.RED

          this.position2 = Cesium.Cartesian3.fromDegrees(-80.50, 35.14)
          this.color2 = Cesium.Color.BLUE

          this.position3 = Cesium.Cartesian3.fromDegrees(-80.12, 25.46)
          this.color3 = Cesium.Color.LIME
        },
        subReady (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          viewer.zoomTo(viewer.entities)
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
      <entity :position="position1" :description="description" :point.sync="point1">
        <point-graphics :color="color1" :pixelSize="8"></point-graphics>
      </entity>
      <entity :position="position2" :description="description" :point.sync="point2">
        <point-graphics :color="color2" :pixelSize="16"></point-graphics>
      </entity>
      <entity :position="position3" :description="description" :point.sync="point3">
        <point-graphics :color="color3" :pixelSize="32" @ready="subReady"></point-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        description: 'Hello Vue Cesium',
        point1: {},
        color1: {},
        position1: {},

        point2: {},
        color2: {},
        position2: {},

        point3: {},
        color3: {},
        position3: {}
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.position1 = Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883)
        this.color1 = Cesium.Color.RED

        this.position2 = Cesium.Cartesian3.fromDegrees(-80.50, 35.14)
        this.color2 = Cesium.Color.BLUE

        this.position3 = Cesium.Cartesian3.fromDegrees(-80.12, 25.46)
        this.color3 = Cesium.Color.LIME
      },
      subReady (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        viewer.zoomTo(viewer.entities)
      }
    }
  }
</script>
```

## Instance Properties

Reference official document [PointGraphics](https://cesiumjs.org/Cesium/Build/Documentation/PointGraphics.html)
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
