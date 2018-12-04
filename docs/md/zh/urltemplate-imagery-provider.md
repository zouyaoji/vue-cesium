# UrlTemplate影像图层Provider

`urltemplate-imagery-provider`方便用户通过一个约定的URL模板来请求影像图层。比如加载国内的高德，腾讯等影像服务，URL都是一个固定的规范，都可以通过该组件轻松实现。

## 示例

### 通用模板影像图层

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <urltemplate-imagery-provider :url="urlText"></urltemplate-imagery-provider>
        </imagery-layer>
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <urltemplate-imagery-provider :url="url"></urltemplate-imagery-provider>
        </imagery-layer>
      </cesium-viewer>
      <div class="demo-tool">
        <span>透明度</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>亮度</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>对比度</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>切换服务</span>
        <md-select v-model="url" placeholder="请选择服务">
          <md-option
            v-for="item in options"
            :key="item.value"
            :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          url: 'http://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
          urlText: 'http://wprd04.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=8&ltype=12',
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
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready">
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <urltemplate-imagery-provider :url="urlText"></urltemplate-imagery-provider>
      </imagery-layer>
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <urltemplate-imagery-provider :url="url"></urltemplate-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
    <div class="demo-tool">
      <span>透明度</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>亮度</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>对比度</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>切换服务</span>
      <md-select v-model="url" placeholder="请选择服务">
        <md-option
          v-for="item in options"
          :key="item.value"
          :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'http://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
        urlText: 'http://wprd04.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=8&ltype=12',
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
```

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

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
|errorEvent|TileProviderError|当图层的提供者发生异步错误时触发, 返回一个TileProviderError实例。|
