<template lang="markdown">

# polyline实体

`polyline-entity`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
||id|String|`optional` A unique identifier for this object. If none is provided, a GUID is generated.|
|name|String|`optional` A human readable name to display to users. It does not have to be unique.|
|availability|TimeIntervalCollection|`optional` The availability, if any, associated with this object.|
|show|Boolean|`optional` A boolean value indicating if the entity and its children are displayed.|
|description|Property|`optional` A string Property specifying an HTML description for this entity.|
|position|PositionProperty|`optional` A Property specifying the entity position.|
|orientation|Property|`optional` A Property specifying the entity orientation.|
|viewFrom|Property|`optional` A suggested initial offset for viewing this object.|
|parent|Entity|`optional` A parent entity to associate with this entity.|
|positions|Property||`optional` A Property specifying the array of Cartesian3 positions that define the line strip.|
|followSurface|Property|true|`optional` A boolean Property specifying whether the line segments should be great arcs or linearly connected.|
|clampToGround|Property|false|`optional` A boolean Property specifying whether the Polyline should be clamped to the ground.|
|width|Property|1.0|`optional` A numeric Property specifying the width in pixels.|
|show|Property|true|`optional` A boolean Property specifying the visibility of the polyline.|
|material|MaterialProperty|Color.WHITE|`optional` A Property specifying the material used to draw the polyline.|
|depthFailMaterial|MaterialProperty||`optional` A property specifiying the material used to draw the polyline when it is below the terrain.|
|granularity|Property|Cesium.Math.RADIANS_PER_DEGREE|`optional` A numeric Property specifying the angular distance between each latitude and longitude if followSurface is true.|
|shadows|Property|ShadowMode.DISABLED|`optional` An enum Property specifying whether the polyline casts or receives shadows from each light source.|
|distanceDisplayCondition|Property||`optional` A Property specifying at what distance from the camera that this polyline will be displayed.|
|zIndex|Property|0|`optional` A Property specifying the zIndex used for ordering ground geometry. Only has an effect if `clampToGround` is true and polylines on terrain is supported.|
---

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
|allTilesLoaded||所有tiles加载完毕后触发该事件。|
|initialTilesLoaded||触发该事件以指示已加载满足此帧的屏幕空间错误的所有切片。|
|loadProgress||该事件指示tile加载进度。|
|tileFailed||tile加载失败时触发该事件。|
|tileLoad||tile加载完成后触发该事件。|
|tileUnload||tile加载未成功加载时触发该事件。|
|tileVisible||tile可见性发生改变时触发该事件。|

## 示例

### 3DTiles模型

#### 代码

```html
<template>
  <div class="viewer">
    <div class="demo-tool">
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
```

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <div class="demo-tool">
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
</doc-preview>