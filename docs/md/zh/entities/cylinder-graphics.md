# 圆柱（锥）体

`cylinder-graphics` 圆柱（锥）体组件，作为`entity`的子组件添加包含圆柱（锥）体对象的实体到场景。描述由长度，顶部半径和底部半径定义的圆柱体，截锥体或圆锥体。 中心位置和方向由包含实体确定，如示例所示。

## 示例

### 添加圆柱（锥）体到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position1" :description="description" :cylinder.sync="cylinder1">
          <cylinder-graphics :length="400000.0" :topRadius="200000.0" :bottomRadius="200000.0" :material="material1"
            :outline="true" :outlineColor="outlineColor1"></cylinder-graphics>
        </entity>
        <entity :position="position2" :description="description" :cylinder.sync="cylinder2">
          <cylinder-graphics :length="400000.0" :topRadius="0.0" :bottomRadius="200000.0" :material="material2" @ready="subReady"></cylinder-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',
          cylinder1: {},
          position1: {},
          outlineColor1: {},
          material1: {},

          cylinder2: {},
          position2: {},
          material2: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.position1 = Cesium.Cartesian3.fromDegrees(105.0, 40.0, 200000.0)
          this.material1 = Cesium.Color.GREEN.withAlpha(0.5)
          this.outlineColor1 = Cesium.Color.DARK_GREEN

          this.position2 = Cesium.Cartesian3.fromDegrees(110.0, 40.0, 200000.0)
          this.material2 = Cesium.Color.RED
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
      <entity :position="position1" :description="description" :cylinder.sync="cylinder1">
        <cylinder-graphics :length="400000.0" :topRadius="200000.0" :bottomRadius="200000.0" :material="material1"
          :outline="true" :outlineColor="outlineColor1"></cylinder-graphics>
      </entity>
      <entity :position="position2" :description="description" :cylinder.sync="cylinder2">
        <cylinder-graphics :length="400000.0" :topRadius="0.0" :bottomRadius="200000.0" :material="material2"></cylinder-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        description: 'Hello Vue Cesium',
        cylinder1: {},
        position1: {},
        outlineColor1: {},
        material1: {},

        cylinder2: {},
        position2: {},
        material2: {}
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.position1 = Cesium.Cartesian3.fromDegrees(105.0, 40.0, 200000.0)
        this.material1 = Cesium.Color.GREEN.withAlpha(0.5)
        this.outlineColor1 = Cesium.Color.DARK_GREEN

        this.position2 = Cesium.Cartesian3.fromDegrees(110.0, 40.0, 200000.0)
        this.material2 = Cesium.Color.RED
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

参考官方文档 [CylinderGraphics](https://cesiumjs.org/Cesium/Build/Documentation/CylinderGraphics.html)
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
