# 走廊

`corridor-graphics` 走廊对象组件，作为`entity`的子组件添加包含走廊对象的实体到场景。走廊对象是一个由中心线和宽度定义的形状，符合地球的曲率。 它可以放置在表面或海拔高度，并可任选地挤压成一个体积，如下面的示例所示。

## 示例

### 添加走廊到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :name="name1" :description="description" :corridor.sync="corridor1">
          <corridor-graphics :positions="positions1" :material="material1" :width="200000.0"></corridor-graphics>
        </entity>
        <entity :name="name2" :description="description" :corridor.sync="corridor2">
          <corridor-graphics :positions="positions2" :height="100000.0" :width="200000.0" :cornerType="0"
            material="GREEN" :outline="true"></corridor-graphics>
        </entity>
        <entity :name="name3" :description="description" :corridor.sync="corridor3">
          <corridor-graphics :positions="positions3" :material="material3" outlineColor="WHITE" :outline="true"
            :height="200000.0" :extrudedHeight="100000.0" :width="200000.0" :cornerType="cornerType3"></corridor-graphics>
        </entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          description: 'Hello Vue Cesium',

          corridor1: {},
          name1: 'Red corridor on surface with rounded corners',
          positions1: [{ lng: 100.0, lat: 40.0 }, { lng: 105.0, lat: 40.0 }, { lng: 105.0, lat: 35.0 }],
          material1: {},

          corridor2: {},
          name2: 'Green corridor at height with mitered corners and outline',
          positions2: [{ lng: 90.0, lat: 40.0 }, { lng: 95.0, lat: 40.0 }, { lng: 95.0, lat: 35.0 }],
          cornerType2: 0,

          corridor3: {},
          name3: 'Blue extruded corridor with beveled corners and outline',
          positions3: [{ lng: 80.0, lat: 40.0 }, { lng: 85.0, lat: 40.0 }, { lng: 85.0, lat: 35.0 }],
          cornerType3: 0,
          material3: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.material1 = Cesium.Color.RED.withAlpha(0.5)

          this.cornerType2 = Cesium.CornerType.MITERED

          this.cornerType3 = Cesium.CornerType.BEVELED
          this.material3 =  Cesium.Color.BLUE.withAlpha(0.5)
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
      <entity :name="name1" :description="description" :corridor.sync="corridor1">
        <corridor-graphics :positions="positions1" :material="material1" :width="200000.0"></corridor-graphics>
      </entity>
      <entity :name="name2" :description="description" :corridor.sync="corridor2">
        <corridor-graphics
          :positions="positions2"
          :height="100000.0"
          :width="200000.0"
          :cornerType="0"
          material="GREEN"
          :outline="true"
        ></corridor-graphics>
      </entity>
      <entity :name="name3" :description="description" :corridor.sync="corridor3">
        <corridor-graphics
          :positions="positions3"
          :material="material3"
          outlineColor="WHITE"
          :outline="true"
          :height="200000.0"
          :extrudedHeight="100000.0"
          :width="200000.0"
          :cornerType="cornerType3"
        ></corridor-graphics>
      </entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description: 'Hello Vue Cesium',

        corridor1: {},
        name1: 'Red corridor on surface with rounded corners',
        positions1: [{ lng: 100.0, lat: 40.0 }, { lng: 105.0, lat: 40.0 }, { lng: 105.0, lat: 35.0 }],
        material1: {},

        corridor2: {},
        name2: 'Green corridor at height with mitered corners and outline',
        positions2: [{ lng: 90.0, lat: 40.0 }, { lng: 95.0, lat: 40.0 }, { lng: 95.0, lat: 35.0 }],
        cornerType2: 0,

        corridor3: {},
        name3: 'Blue extruded corridor with beveled corners and outline',
        positions3: [{ lng: 80.0, lat: 40.0 }, { lng: 85.0, lat: 40.0 }, { lng: 85.0, lat: 35.0 }],
        cornerType3: 0,
        material3: {}
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material1 = Cesium.Color.RED.withAlpha(0.5)
        this.cornerType2 = Cesium.CornerType.MITERED
        this.cornerType3 = Cesium.CornerType.BEVELED
        this.material3 = Cesium.Color.BLUE.withAlpha(0.5)
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------------------ | ------- | ------------------ | ------------------------------------------------------------------------------------ |
| show | Boolean | `true` | `optional` 指定 corridor 是否显示。 |
| positions | Array | | `optional` 指定描述 corridor 位置的经纬度(高度)数组。 **结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]** |
| width | Number | | `optional` 指定 corridor 边之间的距离。 |
| height | Number | `0` | `optional` 指定 corridor 高度。 |
| heightReference | Number | | `optional` 指定 corridor 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| extrudedHeight | Number | | `optional` 指定 corridor 拉伸高度。 |
| extrudedHeightReference | Number | | `optional` 指定 corridor 拉伸高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| cornerType | Number | `0` | `optional` 指定 corridor 转角样式。**ROUNDED: 0, MITERED: 1, BEVELED: 2** |
| granularity | Number | | `optional` 指定每个经纬度之间的采样粒度。 |
| fill | Boolean | `true` | `optional` 指定 corridor 是否填充材质。 |
| material | Object\|String\|Array | `'white'` | `optional` 指定 corridor 的材质。 |
| outline | Boolean | `false` | `optional` 指定 corridor 是否绘制轮廓线。 |
| outlineColor | Object\|String\|Array | `'black'` | `optional` 指定 corridor 轮廓线颜色。 |
| outlineWidth | Number | `1.0` | `optional` 指定 corridor 轮廓线宽度。 |
| shadows | Number | `0` | `optional` 指定 corridor 是否接收或者发射每个点光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3** |
| distanceDisplayCondition | Object | | `optional` 指定 corridor 随相机距离改变是否显示参数。**结构：{ near: number, far: number }** |
| classificationType | Number | `2` | `optional` 指定 corridor 的贴对象模式。 **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3** |
| zIndex | Number | | `optional` 指定 corridor 顺序，没有高度和拉伸高度才有效。 |

---

官方文档 [CorridorGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGraphics.html)

## 事件

| 事件名            | 参数             | 描述                                                |
| ----------------- | ---------------- | --------------------------------------------------- |
| ready             | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
| definitionChanged |                  | 每当更改或修改属性或子属性时触发该事件。            |
