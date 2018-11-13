<template lang="markdown">

# 单文件影像图层

`singletile-imagery-layer`用该图层组件添加单个图片做为影像底图，仅支持经纬度投影，图片宽高比最好为2：1，否则会有拉伸。

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|url|String||`required`指定服务地址。|
|rectangle|Object||`optional`图层的矩形范围,此矩形限制了影像可见范围。|
|credit|String||`optional`指定服务的描述信息|
|ellipsoid|Object||`optional`参考椭球体。|
|alpha|Number\|function|1.0|`optional`图层透明度值，取值范围为0.0~1.0。|
|brightness|Number\|function|1.0|`optional`图层亮度值。值为1.0表示使用原图；值大于1.0时图像将变亮；值小于1.0时图像将变暗。|
|contrast|Number\|function|1.0|`optional`图层对比度。值为1.0表示使用原图；值大于1.0表示增加对比度；值小于1.0表示降低对比度。|
|hue|Number\|function|0.0|`optional`图层色调。值为0.0表示使用原图。|
|saturation|Number\|function|1.0|`optional`图层饱和度。值为1.0表示使用原图；值大于1.0表示增加饱和度；值小于1.0表示降低饱和度。|
|gamma|Number\|function|1.0|`optional`图层伽马校正。值为1.0表示使用原图。|
|show|Boolean|true|`optional`指定图层是否显示，true表示显示此图层，false表示不显示。|
|splitDirection|Number||`optional`指定影像图层分割方向。0始终显示影像图层，-1在Scene#imagerySplitPosition的左侧显示影像图层，1在Scene#imagerySplitPosition右侧显示影像图层。|
|minimumTerrainLevel|Number||`optional`最小地形细节层次。level 0是最小细节层次。|
|maximumTerrainLevel|Number||`optional`最大地形细节层次。|

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
|errorEvent|TileProviderError|当图层的提供者发生异步错误时触发, 返回一个TileProviderError实例。|

## 示例

### 单文件影像图层

#### 代码

```html
<template>
  <div class="viewer">
    <div style="position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white">
      <span>透明度</span>
      <el-slider v-model="alpha" :min="0" :max="1" :step="0.01" ></el-slider>
      <span>亮度</span>
      <el-slider v-model="brightness" :min="0" :max="3" :step="0.01" ></el-slider>
      <span>对比度</span>
      <el-slider v-model="contrast" :min="0" :max="3" :step="0.01" ></el-slider>
    </div>
    <cesium-viewer @ready="ready">
      <singletile-imagery-layer :url="url" :alpha="alpha" :brightness="brightness"
        :contrast="contrast" />
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'https://zouyaoji.top/vue-cesium/worldimage.jpg',
        alpha: 1,
        brightness: 1,
        contrast: 1
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
```

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <div style="position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white">
        <span>透明度</span>
        <el-slider v-model="alpha" :min="0" :max="1" :step="0.01" ></el-slider>
        <span>亮度</span>
        <el-slider v-model="brightness" :min="0" :max="3" :step="0.01" ></el-slider>
        <span>对比度</span>
        <el-slider v-model="contrast" :min="0" :max="3" :step="0.01" ></el-slider>
      </div>
      <cesium-viewer @ready="ready">
        <singletile-imagery-layer :url="url" :alpha="alpha" :brightness="brightness"
          :contrast="contrast" />
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          url: 'https://zouyaoji.top/vue-cesium/worldimage.jpg',
          alpha: 1,
          brightness: 1,
          contrast: 1
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