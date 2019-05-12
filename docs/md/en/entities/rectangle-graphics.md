# RectangleGraphics

`rectangle-graphics` Add an entity containing a rectangle object to the viewer as a subcomponent of `entity`. Describes graphics for a Rectangle. The rectangle conforms to the curvature of the globe and can be placed on the surface or at altitude and can optionally be extruded into a volume. As shown in the example below.

## Examples

### add a RectangleGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :description="description" :rectangle.sync="rectangle1">
          <rectangle-graphics :coordinates="coordinates1" :material="material1"></rectangle-graphics>
        </entity>
        <entity :description="description" :rectangle.sync="rectangle2">
          <rectangle-graphics :coordinates="coordinates2" :material="material2" :rotation="rotation2" :extrudedHeight="300000.0" :height="100000.0" :outline="true" :outlineColor="outlineColor2"></rectangle-graphics>
        </entity>
        <entity :description="description" :rectangle.sync="rectangle3">
          <rectangle-graphics :coordinates="coordinates3" :material="material3" :rotation="rotation3" :stRotation="stRotation3" :classificationType="classificationType3" @ready="subReady"></rectangle-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          rotation: 0,
          rectangle1: {},
          coordinates1: {
            west: -110,
            south: 20,
            east: -80,
            north: 25
          },
          material1: {},

          rectangle2: {},
          coordinates2: {
            west: -110.0,
            south: 30,
            east: -100,
            north: 40.0
          },
          material2: {},
          rotation2: {},
          outlineColor2: {},

          rectangle3: {},
          coordinates3: {},
          material3: {},
          rotation3: {},
          stRotation3: {},
          classificationType3: 0
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.rotation = Cesium.Math.toRadians(30)
          this.material1 = Cesium.Color.RED.withAlpha(0.5)

          this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
          this.rotation2 = Cesium.Math.toRadians(45)
          this.outlineColor2 = Cesium.Color.BLACK

          this.coordinates3 = Cesium.Rectangle.fromDegrees(-92.0, 30.0, -82.0, 40.0)
          this.material3 = 'https://zouyaoji.top/vue-cesium/favicon.png'
          this.outlineColor3 = Cesium.Color.BLACK
          this.rotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
          this.stRotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
          this.classificationType3 = Cesium.ClassificationType.TERRAIN
        },
        getRotationValue () {
          this.rotation += 0.005
          return this.rotation
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
        <entity :description="description" :rectangle.sync="rectangle1">
          <rectangle-graphics :coordinates="coordinates1" :material="material1"></rectangle-graphics>
        </entity>
        <entity :description="description" :rectangle.sync="rectangle2">
          <rectangle-graphics :coordinates="coordinates2" :material="material2" :rotation="rotation2" :extrudedHeight="300000.0" :height="100000.0" :outline="true" :outlineColor="outlineColor2"></rectangle-graphics>
        </entity>
        <entity :description="description" :rectangle.sync="rectangle3">
          <rectangle-graphics :coordinates="coordinates3" :material="material3" :rotation="rotation3" :stRotation="stRotation3" :classificationType="classificationType3" @ready="subReady"></rectangle-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
  export default {
    data () {
      return {
        description: 'Hello Vue Cesium',
        rotation: 0,
        rectangle1: {},
        coordinates1: {
          west: -110,
          south: 20,
          east: -80,
          north: 25
        },
        material1: {},

        rectangle2: {},
        coordinates2: {
          west: -110.0,
          south: 30,
          east: -100,
          north: 40.0
        },
        material2: {},
        rotation2: {},
        outlineColor2: {},

        rectangle3: {},
        coordinates3: {},
        material3: {},
        rotation3: {},
        stRotation3: {},
        classificationType3: 0
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.rotation = Cesium.Math.toRadians(30)
        this.material1 = Cesium.Color.RED.withAlpha(0.5)

        this.material2 = Cesium.Color.GREEN.withAlpha(0.5)
        this.rotation2 = Cesium.Math.toRadians(45)
        this.outlineColor2 = Cesium.Color.BLACK

        this.coordinates3 = Cesium.Rectangle.fromDegrees(-92.0, 30.0, -82.0, 40.0)
        this.material3 = 'https://zouyaoji.top/vue-cesium/favicon.png'
        this.outlineColor3 = Cesium.Color.BLACK
        this.rotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
        this.stRotation3 = new Cesium.CallbackProperty(this.getRotationValue, false)
        this.classificationType3 = Cesium.ClassificationType.TERRAIN
      },
      getRotationValue () {
        this.rotation += 0.005
        return this.rotation
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

Reference official document [RectangleGraphics](https://cesiumjs.org/Cesium/Build/Documentation/RectangleGraphics.html)
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
