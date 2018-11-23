<template lang="markdown">

# 线实体polyline

`polyline-graphics`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|id|String|`optional` 对象的唯一标识符。如果没有提供，则生成GUID。|
|name|String|`optional` 向用户显示的可读名称，名称可不必唯一。|
|availability|TimeIntervalCollection|`optional` The availability, if any, associated with this object.|
|description|Property|`optional` 实体的HTML描述。|
|position|PositionProperty|`optional`实体的位置。|
|orientation|Property|`optional` 实体的方向。|
|viewFrom|Property|`optional` 查看此实体对象的建议初始偏移量。|
|parent|Entity|`optional` 与此实体关联的父实体。|
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

## 示例

### 3DTiles模型

#### 代码

```html
<template>
  <div class="viewer">
      <div style="position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white">
        <md-button>开始绘制</md-button>
        <span>线类型</span>
        <md-select v-model="url" placeholder="切换地址">
          <md-option
            v-for="item in options"
            :key="item.value"
            :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
    <cesium-viewer>
      <cesium-3dtileset ref="tileset" :url="url" @ready="ready" @LEFT_CLICK="LEFT_CLICK" @MOUSE_MOVE="MOUSE_MOVE"/>
      <polyline-graphics :positions="positions" :width="2.0"/>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
        
        positions: []，
        options: [{
          value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          label: '数据1'
        }, {
          value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json',
          label: '数据2'
        }],
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.cesiumInstance = cesiumInstance
      },
      LEFT_CLICK (movement) {
        const {Cesium, viewer} = this.cesiumInstance
        let cartesian = viewer.scene.pickPosition(movement.position)
        if (Cesium.defined(cartesian)) {
          this.positions.push(cartesian)
        }
      },
      MOUSE_MOVE (movement) {
        let cartesian = viewer.scene.pickPosition(movement.endPosition)
        if (Cesium.defined(cartesian)) {
          this.positions.pop()
          this.positions.push(cartesian)
        }
      }
    }
  }
</script>

<style scoped>
  .viewer {
    width: 100%;
    height: 400px;
  }
</style>
```

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <div style="position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white">
        <span>切换地址</span>
        <md-select v-model="url" placeholder="切换地址">
          <md-option
            v-for="item in options"
            :key="item.value"
            :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
      <cesium-viewer>
        <cesium-3dtileset ref="tileset" :url="url" @ready="ready"/>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          options: [{
            value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
            label: '数据1'
          }, {
            value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json',
            label: '数据2'
          }],
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
        }
      }
    }
  </script>

  <style scoped>
    .viewer {
      width: 100%;
      height: 400px;
    }
  </style>
</doc-preview>