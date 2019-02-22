# EllipseGraphics

`ellipse-graphics` Add an entity containing a ellipse object to the viewer as a subcomponent of `entity`. Describes an ellipse defined by a center point and semi-major and semi-minor axes. The ellipse conforms to the curvature of the globe and can be placed on the surface or at altitude and can optionally be extruded into a volume. The center point is determined by the containing Entity. As shown in the example below.

## Examples

### add an EllipseGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :ellipse.sync="ellipse1">
          <ellipse-graphics :semiMinorAxis="300000.0" :semiMajorAxis="300000.0" :height="200000.0" :material="material1"
            :outline="true"></ellipse-graphics>
        </entity>
        <entity :position="position2" :description="description" :ellipse.sync="ellipse2">
          <ellipse-graphics :semiMinorAxis="250000.0" :semiMajorAxis="400000.0" :material="material2"></ellipse-graphics>
        </entity>
        <entity :position="position3" :description="description" :ellipse.sync="ellipse3">
          <ellipse-graphics :semiMinorAxis="150000.0" :semiMajorAxis="300000.0" :extrudedHeight="200000.0" :rotation="rotation3" :material="material3"
            :outline="true"></ellipse-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          ellipse1: {},
          position1: {},
          material1: {},

          ellipse2: {},
          position2: {},
          material2: {},

          ellipse3: {},
          position3: {},
          rotation3: 0,
          material3: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.position1 = Cesium.Cartesian3.fromDegrees(111.0, 40.0, 150000.0)
          this.material1 = Cesium.Color.GREEN

          this.position2 = Cesium.Cartesian3.fromDegrees(103.0, 40.0)
          this.material2 = Cesium.Color.RED.withAlpha(0.5)

          this.position3 = Cesium.Cartesian3.fromDegrees(95.0, 40.0, 100000.0)
          this.material3 = Cesium.Color.BLUE.withAlpha(0.5)
          this.rotation3 = Cesium.Math.toRadians(45)
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
      <entity :position="position1" :description="description" :ellipse.sync="ellipse1">
        <ellipse-graphics :semiMinorAxis="300000.0" :semiMajorAxis="300000.0" :height="200000.0" :material="material1"
          :outline="true"></ellipse-graphics>
      </entity>
      <entity :position="position2" :description="description" :ellipse.sync="ellipse2">
        <ellipse-graphics :semiMinorAxis="250000.0" :semiMajorAxis="400000.0" :material="material2"></ellipse-graphics>
      </entity>
      <entity :position="position3" :description="description" :ellipse.sync="ellipse3">
        <ellipse-graphics :semiMinorAxis="150000.0" :semiMajorAxis="300000.0" :extrudedHeight="200000.0" :rotation="rotation3" :material="material3"
          :outline="true"></ellipse-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        description: 'Hello Vue Cesium',
        ellipse1: {},
        position1: {},
        material1: {},

        ellipse2: {},
        position2: {},
        material2: {},

        ellipse3: {},
        position3: {},
        rotation3: 0,
        material3: {}
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.position1 = Cesium.Cartesian3.fromDegrees(111.0, 40.0, 150000.0)
        this.material1 = Cesium.Color.GREEN

        this.position2 = Cesium.Cartesian3.fromDegrees(103.0, 40.0)
        this.material2 = Cesium.Color.RED.withAlpha(0.5)

        this.position3 = Cesium.Cartesian3.fromDegrees(95.0, 40.0, 100000.0)
        this.material3 = Cesium.Color.BLUE.withAlpha(0.5)
        this.rotation3 = Cesium.Math.toRadians(45)
      }
    }
  }
</script>
```

## Instance Properties

Reference official document [EllipseGraphics](https://cesiumjs.org/Cesium/Build/Documentation/EllipseGraphics.html)
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
