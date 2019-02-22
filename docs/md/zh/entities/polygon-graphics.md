# 多边形

`polygon-graphics` 多边形组件，作为`entity`的子组件添加包含面的实体到场景。描述由构成外部形状和任何嵌套孔的线性环的层次结构定义的多边形。 多边形符合地球的曲率，可以放置在地面上或海拔高度，并且可以选择性地挤压成一个体积，如示例所示。

## 示例

### 添加多边形到场景

#### 预览

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

#### 代码

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

## 属性

参考官方文档 [PolygonGraphics](https://cesiumjs.org/Cesium/Build/Documentation/PolygonGraphics.html)
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
