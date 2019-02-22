# ModelGraphics

`model-graphics` Add an entity containing a model object to the viewer as a subcomponent of `entity`. A 3D model based on glTF, the runtime asset format for WebGL, OpenGL ES, and OpenGL. The position and orientation of the model is determined by the containing Entity. Cesium includes support for glTF geometry, materials, animations, and skinning. Cameras and lights are not currently supported. As shown in the example below.

## Examples

### add a ModelGraphics to viewer with entity

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :model.sync="model1" :label.sync="label1">
          <label-graphics text="Hello Vue Cesium" font="20px sans-serif"></label-graphics>
          <model-graphics :uri="uri1" @ready="subReady"></model-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          model1: {},
          label1: {},
          position1: {},
          uri1: 'https://zouyaoji.top/vue-cesium/statics/SampleData/models/GroundVehicle/GroundVehicle.glb'
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.position1 = Cesium.Cartesian3.fromDegrees(114.0, 40.0, 1.0)
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
        <entity :position="position1" :description="description" :model.sync="model1" :label.sync="label1">
          <label-graphics text="Hello Vue Cesium" font="20px sans-serif"></label-graphics>
          <model-graphics :uri="uri1" @ready="subReady"></model-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          model1: {},
          label1: {},
          position1: {},
          uri1: 'https://zouyaoji.top/vue-cesium/statics/SampleData/models/GroundVehicle/GroundVehicle.glb'
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.position1 = Cesium.Cartesian3.fromDegrees(114.0, 40.0, 1.0)
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

Reference official document [ModelGraphics](https://cesiumjs.org/Cesium/Build/Documentation/ModelGraphics.html)
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
