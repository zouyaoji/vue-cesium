# EllipsoidGraphics

`ellipsoid-graphics` Add an entity containing a ellipsoid object to the viewer as a subcomponent of `entity`. Describe an ellipsoid or sphere. The center position and orientation are determined by the containing Entity. As shown in the example below.

## Examples

### add an EllipsoidGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :ellipsoid.sync="ellipsoid1">
          <ellipsoid-graphics :radii="radii1":material="material1"
            :outline="true"></ellipsoid-graphics>
        </entity>
        <entity :position="position2" :description="description" :ellipsoid.sync="ellipsoid2">
          <ellipsoid-graphics :radii="radii2" :outline="true" :material="material2" :outlineColor="outlineColor2"></ellipsoid-graphics>
        </entity>
        <entity :position="position3" :description="description" :ellipsoid.sync="ellipsoid3">
          <ellipsoid-graphics :radii="radii3" :fill="false" :outline="true" :outlineColor="outlineColor3" :slicePartitions="24"
            :stackPartitions="36" @ready="subReady"></ellipsoid-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          ellipsoid1: {},
          position1: {},
          radii1: {},
          material1: {},

          ellipsoid2: {},
          position2: {},
          radii2: {},
          outlineColor2: {},
          material2: {},

          ellipsoid3: {},
          position3: {},
          radii3: {},
          material3: {},
          outlineColor3: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.position1 = Cesium.Cartesian3.fromDegrees(114.0, 40.0, 300000.0)
          this.radii1 = new Cesium.Cartesian3(200000.0, 200000.0, 300000.0)
          this.material1 = Cesium.Color.BLUE

          this.position2 = Cesium.Cartesian3.fromDegrees(107.0, 40.0, 300000.0)
          this.radii2 = new Cesium.Cartesian3(300000.0, 300000.0, 300000.0)
          this.material2 = Cesium.Color.RED.withAlpha(0.5)
          this.outlineColor2 = Cesium.Color.BLACK

          this.position3 = Cesium.Cartesian3.fromDegrees(100.0, 40.0, 300000.0)
          this.radii3 = new Cesium.Cartesian3(200000.0, 200000.0, 300000.0)
          this.outlineColor3 = Cesium.Color.YELLOW
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
      <entity :position="position1" :description="description" :ellipsoid.sync="ellipsoid1">
        <ellipsoid-graphics :radii="radii1" :material="material1" :outline="true"></ellipsoid-graphics>
      </entity>
      <entity :position="position2" :description="description" :ellipsoid.sync="ellipsoid2">
        <ellipsoid-graphics :radii="radii2" :outline="true" :material="material2" :outlineColor="outlineColor2"></ellipsoid-graphics>
      </entity>
      <entity :position="position3" :description="description" :ellipsoid.sync="ellipsoid3">
        <ellipsoid-graphics :radii="radii3" :fill="false" :outline="true" :outlineColor="outlineColor3" :slicePartitions="24"
          :stackPartitions="36" @ready="subReady"></ellipsoid-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        description: 'Hello Vue Cesium',
        ellipsoid1: {},
        position1: {},
        radii1: {},
        material1: {},

        ellipsoid2: {},
        position2: {},
        radii2: {},
        outlineColor2: {},
        material2: {},

        radii3: {},
        ellipsoid3: {},
        position3: {},
        material3: {}
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.position1 = Cesium.Cartesian3.fromDegrees(114.0, 40.0, 300000.0)
        this.radii1 = new Cesium.Cartesian3(200000.0, 200000.0, 300000.0)
        this.material1 = Cesium.Color.BLUE

        this.position2 = Cesium.Cartesian3.fromDegrees(107.0, 40.0, 300000.0)
        this.radii2 = new Cesium.Cartesian3(300000.0, 300000.0, 300000.0)
        this.material2 = Cesium.Color.RED.withAlpha(0.5)
        this.outlineColor2 = Cesium.Color.BLACK

        this.position3 = Cesium.Cartesian3.fromDegrees(100.0, 40.0, 300000.0)
        this.radii3 = new Cesium.Cartesian3(200000.0, 200000.0, 300000.0)
        this.outlineColor3 = Cesium.Color.YELLOW
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

Reference official document [EllipsoidGraphics](https://cesiumjs.org/Cesium/Build/Documentation/EllipsoidGraphics.html)
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