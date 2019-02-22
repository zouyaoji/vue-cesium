# PolygonGraphics

`polygon-graphics` Add an entity containing a polygon object to the viewer as a subcomponent of `entity`. Describes a polygon defined by an hierarchy of linear rings which make up the outer shape and any nested holes. The polygon conforms to the curvature of the globe and can be placed on the surface or at altitude and can optionally be extruded into a volume. As shown in the example below.

## Examples

### add a PolygonGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :description="description" :polygon.sync="polygon1">
          <polygon-graphics :hierarchy="hierarchy1" :material="material1"></polygon-graphics>
        </entity>
        <entity :description="description" :polygon.sync="polygon2">
          <polygon-graphics :hierarchy="hierarchy2" :material="material2" :extrudedHeight="500000.0" :closeTop="false" :closeBottom="false"></polygon-graphics>
        </entity>
        <entity :description="description" :polygon.sync="polygon3">
          <polygon-graphics :hierarchy="hierarchy3" :material="material3" :extrudedHeight="0" :perPositionHeight="true" :outline="true" :outlineColor="outlineColor3"></polygon-graphics>
        </entity>
        <entity :description="description" :polygon.sync="polygon4">
          <polygon-graphics :hierarchy="hierarchy4" :material="material4" :height="0" :outline="true"></polygon-graphics>
        </entity>
        <entity :description="description" :polygon.sync="polygon5">
          <polygon-graphics :hierarchy="hierarchy5" :material="material5" :perPositionHeight="true" :outline="true" :outlineColor="outlineColor5"></polygon-graphics>
        </entity>
        <entity :description="description" :polygon.sync="polygon6">
          <polygon-graphics :hierarchy="hierarchy6" :material="material6" :extrudedHeight="50000" :outline="true" :outlineColor="outlineColor6" @ready="subReady"></polygon-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          polygon1: {},
          hierarchy1: [],
          material1: {},

          polygon2: {},
          hierarchy2: [],
          material2: {},

          polygon3: {},
          hierarchy3: [],
          material3: {},
          outlineColor3: {},

          polygon4: {},
          hierarchy4: [],
          material4: {},

          polygon5: {},
          hierarchy5: [],
          material5: {},
          outlineColor5: {},

          polygon6: {},
          hierarchy6: [],
          material6: {},
          arcType6: {},
          outlineColor6: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.hierarchy1 = Cesium.Cartesian3.fromDegreesArray(
            [
              -115.0, 37.0,
              -115.0, 32.0,
              -107.0, 33.0,
              -102.0, 31.0,
              -102.0, 35.0
            ])
          this.material1 = Cesium.Color.RED

          this.hierarchy2 = Cesium.Cartesian3.fromDegreesArray(
            [
              -108.0, 42.0,
              -100.0, 42.0,
              -104.0, 40.0
            ])
          this.material2 = Cesium.Color.GREEN

          this.hierarchy3 = Cesium.Cartesian3.fromDegreesArrayHeights(
            [
              -108.0, 25.0, 100000,
              -100.0, 25.0, 100000,
              -100.0, 30.0, 100000,
              -108.0, 30.0, 300000
            ])
          this.materia3 = Cesium.Color.ORANGE.withAlpha(0.5)
          this.outlineColor3 = Cesium.Color.BLACK
          this.hierarchy4 =
          {
            positions: Cesium.Cartesian3.fromDegreesArray(
              [-99.0, 30.0,
                -85.0, 30.0,
                -85.0, 40.0,
                -99.0, 40.0
              ]),
            holes: [{
              positions: Cesium.Cartesian3.fromDegreesArray([
                -97.0, 31.0,
                -97.0, 39.0,
                -87.0, 39.0,
                -87.0, 31.0
              ]),
              holes: [{
                positions: Cesium.Cartesian3.fromDegreesArray([
                  -95.0, 33.0,
                  -89.0, 33.0,
                  -89.0, 37.0,
                  -95.0, 37.0
                ]),
                holes: [{
                  positions: Cesium.Cartesian3.fromDegreesArray([
                    -93.0, 34.0,
                    -91.0, 34.0,
                    -91.0, 36.0,
                    -93.0, 36.0
                  ])
                }]
              }]
            }]
          }
          this.material4 = Cesium.Color.BLUE.withAlpha(0.5)

          this.material5 = Cesium.Color.CYAN.withAlpha(0.5)
          this.outlineColor5 = Cesium.Color.BLACK

          this.hierarchy6 = Cesium.Cartesian3.fromDegreesArray(
            [
              -120.0, 45.0,
              -80.0, 45.0,
              -80.0, 55.0,
              -120.0, 55.0
            ])
          this.material6 = Cesium.Color.PURPLE
          this.outlineColor6 = Cesium.Color.MAGENTA
          // this.arcType6 = Cesium.ArcType.RHUMB
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
      <entity :description="description" :polygon.sync="polygon1">
        <polygon-graphics :hierarchy="hierarchy1" :material="material1"></polygon-graphics>
      </entity>
      <entity :description="description" :polygon.sync="polygon2">
        <polygon-graphics :hierarchy="hierarchy2" :material="material2" :extrudedHeight="500000.0" :closeTop="false" :closeBottom="false"></polygon-graphics>
      </entity>
      <entity :description="description" :polygon.sync="polygon3">
        <polygon-graphics :hierarchy="hierarchy3" :material="material3" :extrudedHeight="0" :perPositionHeight="true" :outline="true" :outlineColor="outlineColor3"></polygon-graphics>
      </entity>
      <entity :description="description" :polygon.sync="polygon4">
        <polygon-graphics :hierarchy="hierarchy4" :material="material4" :height="0" :outline="true"></polygon-graphics>
      </entity>
      <entity :description="description" :polygon.sync="polygon5">
        <polygon-graphics :hierarchy="hierarchy5" :material="material5" :perPositionHeight="true" :outline="true" :outlineColor="outlineColor5"></polygon-graphics>
      </entity>
      <entity :description="description" :polygon.sync="polygon6">
        <polygon-graphics :hierarchy="hierarchy6" :material="material6" :extrudedHeight="50000" :outline="true" :outlineColor="outlineColor6" @ready="subReady"></polygon-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        description: 'Hello Vue Cesium',
        polygon1: {},
        hierarchy1: [],
        material1: {},

        polygon2: {},
        hierarchy2: [],
        material2: {},

        polygon3: {},
        hierarchy3: [],
        material3: {},
        outlineColor3: {},

        polygon4: {},
        hierarchy4: [],
        material4: {},

        polygon5: {},
        hierarchy5: [],
        material5: {},
        outlineColor5: {},

        polygon6: {},
        hierarchy6: [],
        material6: {},
        arcType6: {},
        outlineColor6: {}
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.hierarchy1 = Cesium.Cartesian3.fromDegreesArray(
          [
            -115.0, 37.0,
            -115.0, 32.0,
            -107.0, 33.0,
            -102.0, 31.0,
            -102.0, 35.0
          ])
        this.material1 = Cesium.Color.RED

        this.hierarchy2 = Cesium.Cartesian3.fromDegreesArray(
          [
            -108.0, 42.0,
            -100.0, 42.0,
            -104.0, 40.0
          ])
        this.material2 = Cesium.Color.GREEN

        this.hierarchy3 = Cesium.Cartesian3.fromDegreesArrayHeights(
          [
            -108.0, 25.0, 100000,
            -100.0, 25.0, 100000,
            -100.0, 30.0, 100000,
            -108.0, 30.0, 300000
          ])
        this.materia3 = Cesium.Color.ORANGE.withAlpha(0.5)
        this.outlineColor3 = Cesium.Color.BLACK
        this.hierarchy4 =
        {
          positions: Cesium.Cartesian3.fromDegreesArray(
            [-99.0, 30.0,
              -85.0, 30.0,
              -85.0, 40.0,
              -99.0, 40.0
            ]),
          holes: [{
            positions: Cesium.Cartesian3.fromDegreesArray([
              -97.0, 31.0,
              -97.0, 39.0,
              -87.0, 39.0,
              -87.0, 31.0
            ]),
            holes: [{
              positions: Cesium.Cartesian3.fromDegreesArray([
                -95.0, 33.0,
                -89.0, 33.0,
                -89.0, 37.0,
                -95.0, 37.0
              ]),
              holes: [{
                positions: Cesium.Cartesian3.fromDegreesArray([
                  -93.0, 34.0,
                  -91.0, 34.0,
                  -91.0, 36.0,
                  -93.0, 36.0
                ])
              }]
            }]
          }]
        }
        this.material4 = Cesium.Color.BLUE.withAlpha(0.5)

        this.material5 = Cesium.Color.CYAN.withAlpha(0.5)
        this.outlineColor5 = Cesium.Color.BLACK

        this.hierarchy6 = Cesium.Cartesian3.fromDegreesArray(
          [
            -120.0, 45.0,
            -80.0, 45.0,
            -80.0, 55.0,
            -120.0, 55.0
          ])
        this.material6 = Cesium.Color.PURPLE
        this.outlineColor6 = Cesium.Color.MAGENTA
        // this.arcType6 = Cesium.ArcType.RHUMB
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

Reference official document [PolygonGraphics](https://cesiumjs.org/Cesium/Build/Documentation/PolygonGraphics.html)
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
