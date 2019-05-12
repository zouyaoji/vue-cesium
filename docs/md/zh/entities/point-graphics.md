# 点

`point-graphics` 点组件，作为`entity`的子组件添加包含点的实体到场景。描述位于包含实体位置的图形点，如示例所示。

## 示例

### 添加模型到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :point.sync="point1">
          <point-graphics :color="color1" :pixelSize="8"></point-graphics>
        </entity>
        <entity :position="position2" :description="description">
          <point-graphics :color="color2" :pixelSize="16"></point-graphics>
        </entity>
        <entity :position="position3" :description="description">
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
          point1: null,
          color1: {},
          position1: {x: -75.59777, y: 40.03883},

          color2: {},
          position2: {x: -80.50, y: 35.14},

          color3: {},
          position3: undefined
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.color1 = Cesium.Color.RED

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

#### 代码

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

## 属性

参考官方文档 [PointGraphics](https://cesiumjs.org/Cesium/Build/Documentation/PointGraphics.html)
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
