# 影像图层

`imagery-layer`可以加载影像图层到场景，需要结合imagery provider使用。

## 示例

### 添加影像图层到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
       <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <mapbox-imagery-provider :mapId="mapId"></mapbox-imagery-provider>
       </imagery-layer>
      </cesium-viewer>
      <div class="demo-tool">
        <span>透明度</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
        <span>亮度</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>对比度</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>切换服务</span>
        <md-select v-model="mapId" placeholder="切换影像">
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
          mapId: 'mapbox.streets',
          options: [{
            value: 'mapbox.satellite',
            label: '卫星'
          }, {
            value: 'mapbox.streets',
            label: '地图'
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
    <cesium-viewer @ready="ready">
      <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
      <mapbox-imagery-provider :mapId="mapId"></mapbox-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
    <div class="demo-tool">
      <span>透明度</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
      <span>亮度</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      <span>对比度</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      <span>切换服务</span>
      <md-select v-model="mapId" placeholder="切换影像">
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
        mapId: 'mapbox.streets',
        options: [{
          value: 'mapbox.satellite',
          label: '卫星'
        }, {
          value: 'mapbox.streets',
          label: '地图'
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
|rectangle|Cesium.Rectangle|imageryProvider.rectangle|`optional`图层的矩形范围,此矩形限制了影像可见范围。|
|alpha|Number\|function|1.0|`optional`图层透明度值，取值范围为0.0~1.0。|
|brightness|Number\|function|1.0|`optional`图层亮度值。值为1.0表示使用原图；值大于1.0时图像将变亮；值小于1.0时图像将变暗。|
|contrast|Number\|function|1.0|`optional`图层对比度。值为1.0表示使用原图；值大于1.0表示增加对比度；值小于1.0表示降低对比度。|
|hue|Number\|function|0.0|`optional`图层色调。值为0.0表示使用原图。|
|saturation|Number\|function|1.0|`optional`图层饱和度。值为1.0表示使用原图；值大于1.0表示增加饱和度；值小于1.0表示降低饱和度。|
|gamma|Number\|function|1.0|`optional`图层伽马校正。值为1.0表示使用原图。|
|show|Boolean|true|`optional`指定图层是否显示，true表示显示此图层，false表示不显示。|
|splitDirection|Number||`optional`指定影像图层分割方向。0始终显示影像图层，-1在Scene#imagerySplitPosition的左侧显示影像图层，1在Scene#imagerySplitPosition右侧显示影像图层。|
|minificationFilter|TextureMinificationFilter|TextureMinificationFilter.LINEAR|`optional` 指定图层纹理缩小过滤器。 可能的值是TextureMinificationFilter.LINEAR和TextureMinificationFilter.NEAREST。|
|magnificationFilter|TextureMagnificationFilter|TextureMagnificationFilter.LINEAR|`optional` 指定图层纹理缩小过滤器。 可能的值是TextureMagnificationFilter.LINEAR和TextureMagnificationFilter.NEAREST。|
|show|Boolean|true|`optional` 指定图层是否显示，如果显示图层，则为true; 否则，false。|
|maximumAnisotropy|Number|maximum supported|`optional` 指定纹理过滤的最大各向异性级别。 如果未指定此参数，则将使用WebGL堆栈支持的最大各向异性。 较大的值使图像在水平视图中看起来更好。|
|minimumTerrainLevel|Number||`optional`最小地形细节层次。level 0是最小细节层次。|
|maximumTerrainLevel|Number||`optional`最大地形细节层次。|
|cutoutRectangle|Rectangle||`optional` 指定裁剪此影像图层的矩形范围。|

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
