# Singletile影像Provider

`singletile-imagery-provider`用该图层组件添加单个图片做为影像底图，仅支持经纬度投影，图片宽高比最好为2：1，否则会有拉伸。

## 示例

### 添加Singletile图片到场景作底图

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <singletile-imagery-provider :url="url"></singletile-imagery-provider>
        </imagery-layer>
      </cesium-viewer>
      <div class="demo-tool">
        <span>透明度</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
        <span>亮度</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>对比度</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      </div>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/worldimage.jpg',
          alpha: 1,
          brightness: 1,
          contrast: 1
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          // ..
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
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <singletile-imagery-provider :url="url"></singletile-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
    <div class="demo-tool">
      <span>透明度</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
      <span>亮度</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      <span>对比度</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/worldimage.jpg',
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        // ..
      }
    }
  }
</script>
```

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|url|String||`required`指定服务地址。|
|rectangle|Object||`optional`图层的矩形范围,此矩形限制了影像可见范围。|
|credit|String||`optional`指定服务的描述信息|
|ellipsoid|Object||`optional`参考椭球体。|

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
|errorEvent|TileProviderError|当图层的提供者发生异步错误时触发, 返回一个TileProviderError实例。|
