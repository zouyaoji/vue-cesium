# PolylineGraphics

`polyline-graphics` Add an entity containing a polyline object to the viewer as a subcomponent of `entity`. Describes a polyline. The first two positions define a line segment, and each additional position defines a line segment from the previous position. The segments can be linear connected points, great arcs, or clamped to terrain. As shown in the example below.

## Examples

### add a PolylineGraphics to viewer with entity

#### Preview

<doc-preview>
<template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :polyline.sync="polyline1">
          <polyline-graphics :positions="positions1" :material="material1" :width="5" :clampToGround="true"></polyline-graphics>
        </entity>
        <entity :polyline.sync="polyline2">
          <polyline-graphics :positions="positions2" :material="material2" :width="10"></polyline-graphics>
        </entity>
        <entity :polyline.sync="polyline3">
          <polyline-graphics :positions="positions3" :material="material3" :width="10"></polyline-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          polyline1: {},
          positions1: [],
          material1: undefined,
          polyline2: {},
          positions2: [],
          material2: undefined,
          polyline3: {},
          positions3: [],
          material3: undefined
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.positions1.push(Cesium.Cartesian3.fromDegrees(90, 20, 10000))
          this.positions1.push(Cesium.Cartesian3.fromDegrees(120, 20, 10000))
          this.material1 = Cesium.Color.RED
          this.positions2.push(Cesium.Cartesian3.fromDegrees(90, 30, 10000))
          this.positions2.push(Cesium.Cartesian3.fromDegrees(120, 30, 10000))
          this.material2 = new Cesium.PolylineGlowMaterialProperty({
            glowPower : 0.2,
            color : Cesium.Color.BLUE
          })
          this.positions3.push(Cesium.Cartesian3.fromDegrees(90, 40, 10000))
          this.positions3.push(Cesium.Cartesian3.fromDegrees(120, 40, 10000))
          this.material3 = new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
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
      <entity :polyline.sync="polyline1">
        <polyline-graphics :positions="positions1" :material="material1" :width="5" :clampToGround="true"></polyline-graphics>
      </entity>
      <entity :polyline.sync="polyline2">
        <polyline-graphics :positions="positions2" :material="material2" :width="10"></polyline-graphics>
      </entity>
      <entity :polyline.sync="polyline3">
        <polyline-graphics :positions="positions3" :material="material3" :width="10"></polyline-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        polyline1: {},
        positions1: [],
        material1: undefined,
        polyline2: {},
        positions2: [],
        material2: undefined,
        polyline3: {},
        positions3: [],
        material3: undefined
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.positions1.push(Cesium.Cartesian3.fromDegrees(90, 20, 10000))
        this.positions1.push(Cesium.Cartesian3.fromDegrees(120, 20, 10000))
        this.material1 = Cesium.Color.RED
        this.positions2.push(Cesium.Cartesian3.fromDegrees(90, 30, 10000))
        this.positions2.push(Cesium.Cartesian3.fromDegrees(120, 30, 10000))
        this.material2 = new Cesium.PolylineGlowMaterialProperty({
          glowPower : 0.2,
          color : Cesium.Color.BLUE
        })
        this.positions3.push(Cesium.Cartesian3.fromDegrees(90, 40, 10000))
        this.positions3.push(Cesium.Cartesian3.fromDegrees(120, 40, 10000))
        this.material3 = new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
      }
    }
  }
</script>
```

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|positions|Property||`optional` A Property specifying the array of Cartesian3 positions that define the line strip.|
|followSurface|Property|true|`optional` A boolean Property specifying whether the line segments should be great arcs or linearly connected.|
|clampToGround|Property|false|`optional` A boolean Property specifying whether the Polyline should be clamped to the ground.|
|width|Property|1.0|`optional` A numeric Property specifying the width in pixels.|
|show|Property|true|`optional` A boolean Property specifying the visibility of the polyline.|
|material|MaterialProperty|Color.WHITE|`optional` A Property specifying the material used to draw the polyline.|
|depthFailMaterial|MaterialProperty||`optional` A property specifiying the material used to draw the polyline when it is below the terrain.|
|granularity|Property|Cesium.Math.RADIANS_PER_DEGREE|`optional` A numeric Property specifying the angular distance between each latitude and longitude if followSurface is true.|
|shadows|Property|ShadowMode.DISABLED|`optional` An enum Property specifying whether the polyline casts or receives shadows from each light source.|
|distanceDisplayCondition|Property||`optional` A Property specifying at what distance from the camera that this polyline will be displayed.|
|zIndex|Property|0|`optional` A Property specifying the zIndex used for ordering ground geometry. Only has an effect if `clampToGround` is true and polylines on terrain is supported.|
---

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.|
|definitionChanged||Gets the event that is raised whenever a property or sub-property is changed or modified.|
