# CorridorGraphics

`corridor-graphics` Add an entity containing a corridor object to the viewer as a subcomponent of `entity`. Describes a corridor, which is a shape defined by a centerline and width that conforms to the curvature of the globe. It can be placed on the surface or at altitude and can optionally be extruded into a volume. As shown in the example below.

## Examples

### add a CorridorGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :name="name1" :description="description" :corridor.sync="corridor1">
          <corridor-graphics :positions="positions1" :material="material1" :width="200000.0"></corridor-graphics>
        </entity>
        <entity :name="name2" :description="description" :corridor.sync="corridor2">
          <corridor-graphics :positions="positions2" :height="100000.0" :width="200000.0" :cornerType="0"
            :material="material2" :outline="true"></corridor-graphics>
        </entity>
        <entity :name="name3" :description="description" :corridor.sync="corridor3">
          <corridor-graphics :positions="positions3" :material="material3" :outlineColor="outlineColor3" :outline="true"
            :height="200000.0" :extrudedHeight="100000.0" :width="200000.0" :cornerType="cornerType3" :outlineColor="outlineColor3"></corridor-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',

          corridor1: {},
          name1: 'Red corridor on surface with rounded corners',
          positions1: [],
          material1: {},

          corridor2: {},
          name2: 'Green corridor at height with mitered corners and outline',
          positions2: [],
          cornerType2: 0,
          material2: {},

          corridor3: {},
          name3: 'Blue extruded corridor with beveled corners and outline',
          positions3: [],
          cornerType3: 0,
          material3: {},
          outlineColor3: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          console.log('CesiumReady')
          const {Cesium, viewer} = cesiumInstance
          this.positions1 = Cesium.Cartesian3.fromDegreesArray([
            100.0, 40.0,
            105.0, 40.0,
            105.0, 35.0
          ])
          this.material1 = Cesium.Color.RED.withAlpha(0.5)

          this.positions2 = Cesium.Cartesian3.fromDegreesArray([
            90.0, 40.0,
            95.0, 40.0,
            95.0, 35.0
          ])
          this.cornerType2 = Cesium.CornerType.MITERED
          this.material2 = Cesium.Color.GREEN

          this.positions3 =  Cesium.Cartesian3.fromDegreesArray([
            80.0, 40.0,
            85.0, 40.0,
            85.0, 35.0
          ])
          this.cornerType3 = Cesium.CornerType.BEVELED,
          this.material3 =  Cesium.Color.BLUE.withAlpha(0.5)
          this.outlineColor3 = Cesium.Color.WHITE
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
      <entity :name="name1" :description="description" :corridor.sync="corridor1">
        <corridor-graphics :positions="positions1" :material="material1" :width="200000.0"></corridor-graphics>
      </entity>
      <entity :name="name2" :description="description" :corridor.sync="corridor2">
        <corridor-graphics :positions="positions2" :height="100000.0" :width="200000.0" :cornerType="0"
          :material="material2" :outline="true"></corridor-graphics>
      </entity>
      <entity :name="name3" :description="description" :corridor.sync="corridor3">
        <corridor-graphics :positions="positions3" :material="material3" :outlineColor="outlineColor3" :outline="true"
          :height="200000.0" :extrudedHeight="100000.0" :width="200000.0" :cornerType="cornerType3" :outlineColor="outlineColor3"></corridor-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        description: 'Hello Vue Cesium',

        corridor1: {},
        name1: 'Red corridor on surface with rounded corners',
        positions1: [],
        material1: {},

        corridor2: {},
        name2: 'Green corridor at height with mitered corners and outline',
        positions2: [],
        cornerType2: 0,
        material2: {},

        corridor3: {},
        name3: 'Blue extruded corridor with beveled corners and outline',
        positions3: [],
        cornerType3: 0,
        material3: {},
        outlineColor3: {}
      }
    },
    methods: {
      ready (cesiumInstance) {
        console.log('CesiumReady')
        const {Cesium, viewer} = cesiumInstance
        this.positions1 = Cesium.Cartesian3.fromDegreesArray([
          100.0, 40.0,
          105.0, 40.0,
          105.0, 35.0
        ])
        this.material1 = Cesium.Color.RED.withAlpha(0.5)

        this.positions2 = Cesium.Cartesian3.fromDegreesArray([
          90.0, 40.0,
          95.0, 40.0,
          95.0, 35.0
        ])
        this.cornerType2 = Cesium.CornerType.MITERED
        this.material2 = Cesium.Color.GREEN

        this.positions3 =  Cesium.Cartesian3.fromDegreesArray([
          80.0, 40.0,
          85.0, 40.0,
          85.0, 35.0
        ])
        this.cornerType3 = Cesium.CornerType.BEVELED,
        this.material3 =  Cesium.Color.BLUE.withAlpha(0.5)
        this.outlineColor3 = Cesium.Color.WHITE
      }
    }
  }
</script>
```

## Instance Properties

Reference official document [CorridorGraphics](https://cesiumjs.org/Cesium/Build/Documentation/CorridorGraphics.html)
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
