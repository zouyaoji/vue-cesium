# 六面体盒子

`box-graphics` 六面体盒子组件，作为`entity`的子组件添加包含六面体盒子对象的实体到场景。六面体盒子对象描述的是一个框，中心位置和方向由包含实体确定，如示例所示。

## 示例

### 添加六面体盒子到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :box.sync="box1">
          <box-graphics :dimensions="dimensions1" :material="material1"></box-graphics>
        </entity>
        <entity :position="position2" :description="description" :box.sync="box2">
          <box-graphics :dimensions="dimensions2" :material="material2" :outlineColor="outlineColor2" :outline="true"></box-graphics>
        </entity>
        <entity :position="position3" :description="description" :box.sync="box3">
          <box-graphics :dimensions="dimensions3" :material="material3" :outlineColor="outlineColor3" :fill="false" :outline="true"></box-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          box1: {},
          position1: {},
          dimensions1: {},
          material1: {},
          box2: {},
          position2: {},
          dimensions2: {},
          material2: {},
          outlineColor2: {},
          box3: {},
          position3: {},
          dimensions3: {},
          material3: {},
          outlineColor3: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.position1 = Cesium.Cartesian3.fromDegrees(105.0, 40.0, 300000.0)
          this.dimensions1 = new Cesium.Cartesian3(400000.0, 300000.0, 500000.0)
          this.material1 = Cesium.Color.BLUE
          this.position2 = Cesium.Cartesian3.fromDegrees(110.0, 40.0, 300000.0)
          this.dimensions2 = new Cesium.Cartesian3(400000.0, 300000.0, 500000.0)
          this.material2 = Cesium.Color.RED.withAlpha(0.5)
          this.outlineColor2 = Cesium.Color.BLACK
          this.position3 = Cesium.Cartesian3.fromDegrees(100.0, 40.0, 300000.0)
          this.dimensions3 = new Cesium.Cartesian3(400000.0, 300000.0, 500000.0)
          this.outlineColor3 = Cesium.Color.YELLOW
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
      <entity :position="position1" :description="description">
        <box-graphics :dimensions="dimensions1" :material="material1"></box-graphics>
      </entity>
      <entity :position="position2" :description="description">
        <box-graphics :dimensions="dimensions2" :material="material2" :outlineColor="outlineColor2" :outline="true"></box-graphics>
      </entity>
      <entity :position="position3" :description="description">
        <box-graphics :dimensions="dimensions3" :material="material3" :outlineColor="outlineColor3" :fill="false" :outline="true"></box-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        description: 'Hello Vue Cesium',
        box1: {},
        position1: {},
        dimensions1: {},
        material1: {},
        
        box2: {},
        position2: {},
        dimensions2: {},
        material2: {},
        outlineColor2: {},

        box3: {},
        position3: {},
        dimensions3: {},
        material3: {},
        outlineColor3: {}
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.position1 = Cesium.Cartesian3.fromDegrees(105.0, 40.0, 300000.0)
        this.dimensions1 = new Cesium.Cartesian3(400000.0, 300000.0, 500000.0)
        this.material1 = Cesium.Color.BLUE
        this.position2 = Cesium.Cartesian3.fromDegrees(110.0, 40.0, 300000.0)
        this.dimensions2 = new Cesium.Cartesian3(400000.0, 300000.0, 500000.0)
        this.material2 = Cesium.Color.RED.withAlpha(0.5)
        this.outlineColor2 = Cesium.Color.BLACK
        this.position3 = Cesium.Cartesian3.fromDegrees(100.0, 40.0, 300000.0)
        this.dimensions3 = new Cesium.Cartesian3(400000.0, 300000.0, 500000.0)
        this.outlineColor3 = Cesium.Color.YELLOW
      }
    }
  }
</script>
```

## 属性

参考官方文档 [BoxGraphics](https://cesiumjs.org/Cesium/Build/Documentation/BoxGraphics.html)
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
