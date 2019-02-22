# BingMaps影像Provider

`bingmaps-imagery-provider`

## 示例

### 添加BingMaps影像服务图层到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <div class="demo-tool">
        <span>透明度</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>亮度</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>对比度</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>切换服务</span>
        <md-select v-model="mapStyle" placeholder="请选择服务">
          <md-option
            v-for="item in options"
            :key="item.value"
            :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
      <cesium-viewer @ready="ready">
        <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <bingmaps-imagery-provider :url="url" :bmKey="bmKey" :mapStyle="mapStyle"></bingmaps-imagery-provider>
        </imagery-layer>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          url: 'https://dev.virtualearth.net',
          bmKey: 'AqgBIfrBG50dl7Ykc9nANoj5UJnIxg5YyEZu-UE7sY_sHoZT1db1jGZAalBsU73w', // 可到(https://www.bingmapsportal.com/)申请Key。
          mapStyle: 'Road',
          options: [{
            value: 'Aerial',
            label: 'Aerial'
          }, {
            value: 'AerialWithLabels',
            label: 'AerialWithLabels'
          },{
            value: 'Road',
            label: 'Road'
          }, {
            value: 'CanvasDark',
            label: 'CanvasDark'
          }],
          alpha: 1,
          brightness: 1,
          contrast: 1
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          // ...
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <div class="demo-tool">
      <span>透明度</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>亮度</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>对比度</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>切换服务</span>
      <md-select v-model="mapStyle" placeholder="请选择服务">
        <md-option
          v-for="item in options"
          :key="item.value"
          :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
    <cesium-viewer @ready="ready">
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <bingmaps-imagery-provider :url="url" :bmKey="bmKey" :mapStyle="mapStyle"></bingmaps-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'https://dev.virtualearth.net',
        bmKey: 'AqgBIfrBG50dl7Ykc9nANoj5UJnIxg5YyEZu-UE7sY_sHoZT1db1jGZAalBsU73w', // 可到(https://www.bingmapsportal.com/)申请Key。
        mapStyle: 'Road',
        options: [{
          value: 'Aerial',
          label: 'Aerial'
        }, {
          value: 'AerialWithLabels',
          label: 'AerialWithLabels'
        },{
          value: 'Road',
          label: 'Road'
        }, {
          value: 'CanvasDark',
          label: 'CanvasDark'
        }],
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        // ...
      }
    }
  }
</script>
```

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|url|String||`required`指定服务地址。|
|bmKey|String||`optional`指定BingMaps地图API秘钥，可到[https://www.bingmapsportal.com/](https://www.bingmapsportal.com/)申请Key。|
|tileProtocol|String||`optional`指定地图是http还是https加载，默认与页面相同。|
|mapStyle|String|'Aerial'|`optional`指定加载的BingMaps类型。|
|culture|String||`optional`指定服务的描述信息。|
|ellipsoid|Number|0|`optional`参考椭球体|
|tileDiscardPolicy|Object||`optional`指定tile无效时是否被舍弃。|

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
|errorEvent|TileProviderError|当图层的提供者发生异步错误时触发, 返回一个TileProviderError实例。|
