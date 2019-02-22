# 矩形

`rectangle-graphics` 矩形组件，作为`entity`的子组件添加包含矩形的实体到场景。描述矩形。 矩形符合地球的曲率，可以放置在地面上或海拔高度，并可以选择性地挤压成一个体积。如示例所示。

## 示例

### 添加矩形到场景

#### 预览

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
          coordinates1: {},
          material1: {},

          rectangle2: {},
          coordinates2: {},
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
          this.coordinates1 =  Cesium.Rectangle.fromDegrees(-110.0, 20.0, -80.0, 25.0)
          this.material1 = Cesium.Color.RED.withAlpha(0.5)

          this.coordinates2 = Cesium.Rectangle.fromDegrees(-110.0, 30.0, -100.0, 40.0)
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

#### 代码

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
        coordinates1: {},
        material1: {},

        rectangle2: {},
        coordinates2: {},
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
        this.coordinates1 =  Cesium.Rectangle.fromDegrees(-110.0, 20.0, -80.0, 25.0)
        this.material1 = Cesium.Color.RED.withAlpha(0.5)

        this.coordinates2 = Cesium.Rectangle.fromDegrees(-110.0, 30.0, -100.0, 40.0)
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

## 属性

参考官方文档 [RectangleGraphics](https://cesiumjs.org/Cesium/Build/Documentation/RectangleGraphics.html)
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
