# WallGraphics

`wall-graphics` Add an entity containing a wall object to the viewer as a subcomponent of `entity`. Describes a two dimensional wall defined as a line strip and optional maximum and minimum heights. The wall conforms to the curvature of the globe and can be placed along the surface or at altitude. As shown in the example below.

## Examples

### add a WallGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :description="description" :wall.sync="wall1">
          <wall-graphics :positions="positions1" :material="material1" :minimumHeights="[100000.0, 100000.0]"></wall-graphics>
        </entity>
        <entity :description="description" :wall.sync="wall2">
          <wall-graphics :positions="positions2" :material="material2" :outline="true"></wall-graphics>
        </entity>
        <entity :description="description" :wall.sync="wall3">
          <wall-graphics :positions="positions3" :material="material3" :outline="true" :outlineColor="outlineColor3" :maximumHeights="[100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000]" :minimumHeights="[0, 100000,  0, 100000, 0, 100000, 0, 100000, 0, 100000, 0]" @ready="subReady"></wall-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          wall1: {},
          positions1: {},
          material1: {},

          wall2: {},
          positions2: {},
          material2: {},

          wall3: {},
          positions3: {},
          material3: {},
          outlineColor3: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.positions1 = Cesium.Cartesian3.fromDegreesArrayHeights(
            [
              -115.0, 44.0, 200000.0,
              -90.0, 44.0, 200000.0
            ])
          this.material1 = Cesium.Color.RED

          this.positions2 =  Cesium.Cartesian3.fromDegreesArrayHeights(
            [
              -107.0, 43.0, 100000.0,
              -97.0, 43.0, 100000.0,
              -97.0, 40.0, 100000.0,
              -107.0, 40.0, 100000.0,
              -107.0, 43.0, 100000.0
            ])
          this.material2 = Cesium.Color.GREEN

          this.positions3 = Cesium.Cartesian3.fromDegreesArray(
            [
              -115.0, 50.0,
              -112.5, 50.0,
              -110.0, 50.0,
              -107.5, 50.0,
              -105.0, 50.0,
              -102.5, 50.0,
              -100.0, 50.0,
              -97.5, 50.0,
              -95.0, 50.0,
              -92.5, 50.0,
              -90.0, 50.0
            ])
          this.material3 = 'https://zouyaoji.top/vue-cesium/favicon.png'
          this.material3 = Cesium.Color.BLUE.withAlpha(0.5)
          this.rotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
          this.outlineColor3 = Cesium.Color.BLACK
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
      <entity :description="description" :wall.sync="wall1">
        <wall-graphics :positions="positions1" :material="material1" :minimumHeights="[100000.0, 100000.0]"></wall-graphics>
      </entity>
      <entity :description="description" :wall.sync="wall2">
        <wall-graphics :positions="positions2" :material="material2" :outline="true"></wall-graphics>
      </entity>
      <entity :description="description" :wall.sync="wall3">
        <wall-graphics :positions="positions3" :material="material3" :outline="true" :outlineColor="outlineColor3" :maximumHeights="[100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000]" :minimumHeights="[0, 100000,  0, 100000, 0, 100000, 0, 100000, 0, 100000, 0]" @ready="subReady"></wall-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        description: 'Hello Vue Cesium',
        wall1: {},
        positions1: {},
        material1: {},

        wall2: {},
        positions2: {},
        material2: {},

        wall3: {},
        positions3: {},
        material3: {},
        outlineColor3: {}
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.positions1 = Cesium.Cartesian3.fromDegreesArrayHeights(
          [
            -115.0, 44.0, 200000.0,
            -90.0, 44.0, 200000.0
          ])
        this.material1 = Cesium.Color.RED

        this.positions2 =  Cesium.Cartesian3.fromDegreesArrayHeights(
          [
            -107.0, 43.0, 100000.0,
            -97.0, 43.0, 100000.0,
            -97.0, 40.0, 100000.0,
            -107.0, 40.0, 100000.0,
            -107.0, 43.0, 100000.0
          ])
        this.material2 = Cesium.Color.GREEN

        this.positions3 = Cesium.Cartesian3.fromDegreesArray(
          [
            -115.0, 50.0,
            -112.5, 50.0,
            -110.0, 50.0,
            -107.5, 50.0,
            -105.0, 50.0,
            -102.5, 50.0,
            -100.0, 50.0,
            -97.5, 50.0,
            -95.0, 50.0,
            -92.5, 50.0,
            -90.0, 50.0
          ])
        this.material3 = 'https://zouyaoji.top/vue-cesium/favicon.png'
        this.material3 = Cesium.Color.BLUE.withAlpha(0.5)
        this.rotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
        this.outlineColor3 = Cesium.Color.BLACK
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

Reference official document [WallGraphics](https://cesiumjs.org/Cesium/Build/Documentation/WallGraphics.html)
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
