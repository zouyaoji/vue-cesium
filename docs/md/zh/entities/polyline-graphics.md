# 折线

`polyline-graphics` 折线组件，作为`entity`的子组件添加包折线对象的实体到场景。折线对象描述的是折线，前两个位置定义线段，每个附加位置定义前一个位置的线段。 这些段可以是线性连接点，大弧度或夹紧到地形。如示例所示。

## 示例

### 添加线实体到场景

#### 预览

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

#### 代码

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

## 属性

|属性名|类型|默认值|描述|
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
---

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
|definitionChanged||每当更改或修改属性或子属性时触发该事件。|
