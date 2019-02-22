# 模型

`model-graphics` 模型组件，作为`entity`的子组件添加包含模型的实体到场景。基于glTF的3D模型。 模型的位置和方向由包含实体确定。Cesium包括对glTF几何，材质，动画和蒙皮的支持。 目前不支持相机和灯光。如示例所示。

## 示例

### 添加模型到场景

#### 预览

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

#### 代码

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

## 属性

参考官方文档 [ModelGraphics](https://cesiumjs.org/Cesium/Build/Documentation/ModelGraphics.html)
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

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
|definitionChanged||每当更改或修改属性或子属性时触发该事件。|
