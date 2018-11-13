<template lang="markdown">

# 通用模板影像图层

`urltemplate-imagery-layer`方便用户通过一个约定的URL模板来请求影像图层。比如加载国内的高德，腾讯等影像服务，URL都是一个固定的规范，都可以通过该组件轻松实现。

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|url|String||`required`指定服务地址。|
|pickFeaturesUrl|String||`optional`指定拾取对象属性的url，如果无效，会返回undefined。|
|urlSchemeZeroPadding|Object||`optional`Gets the URL scheme zero padding for each tile coordinate.|
|subdomains|String||`optional`he subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.|
|credit|String||`optional`指定服务的描述信息|
|minimumLevel|Number|0|`optional`最小层级。|
|maximumLevel|Number||`optional`最大层级。|
|rectangle|Object||`optional`图层的矩形范围,此矩形限制了影像可见范围。|
|tilingScheme|Object||`optional`The tiling scheme specifying how the ellipsoidal surface is broken into tiles. If this parameter is not provided, a WebMercatorTilingScheme is used.|
|ellipsoid|Object||`optional`参考椭球体。|
|tileWidth|Number|256|`optional`像元宽度。|
|tileHeight|Number|256|`optional`像元高度。|
|hasAlphaChannel|Boolean|true|`optional`设置为true表示图层包含alpha透明通道，反之没有。|
|getFeatureInfoFormats|Array||`optional`格式化拾取对象属性时提示信息位置，该项要设置pickFeaturesUrl且起作用时才起作用。|
|enablePickFeatures|Boolean|true|`optional`是否开启图层拾取。|
|customTags|Object||`optional`替换url模板中的自定义关键字。|
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

### 通用模板影像图层

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
      <span>切换服务</span>
      <el-select v-model="urlAMapImage" placeholder="请选择服务">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <cesium-viewer @ready="ready">
      <urltemplate-imagery-layer :url="urlAMapImage" credit="高德地图服务" :alpha="alpha" :brightness="brightness"
        :contrast="contrast" :maximumLevel="18" />
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        urlAMapImage: 'http://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
        options: [{
          value: 'http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
          label: '高德影像地图服务'
        }, {
          value: 'http://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
          label: '高德矢量地图服务'
        }],
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
        <span>切换服务</span>
        <el-select v-model="urlAMapImage" placeholder="请选择服务">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <cesium-viewer @ready="ready">
        <urltemplate-imagery-layer :url="urlAMapImage" credit="高德地图服务" :alpha="alpha" :brightness="brightness"
         :contrast="contrast" :maximumLevel="18" />
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          urlAMapImage: 'http://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
          options: [{
            value: 'http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            label: '高德影像地图服务'
          }, {
            value: 'http://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
            label: '高德矢量地图服务'
          }],
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