# WMS服务Provider

`wms-imagery-provider`作为`imagery-layer`子组件加载WMS服务的影像图层。

## 示例

### 添加WMS服务到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
       <imagery-layer :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <wms-imagery-provider :url="url" :layers="layers" :parameters="parameters"></wms-imagery-provider>
       </imagery-layer>
      </cesium-viewer>
      <div class="demo-tool">
        <span>透明度</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
        <span>亮度</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>对比度</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
        <span>切换图层</span>
        <md-select v-model="layers" placeholder="请选择服务" @selected="mdSelected">
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
          url: 'https://www.ncei.noaa.gov/thredds/wms/gfs-004-files/201809/20180916/gfs_4_20180916_0000_000.grb2',
          layers: 'Precipitable_water_entire_atmosphere_single_layer',
          parameters: {
            ColorScaleRange: '0.1,66.8'
          },
          alpha: 1,
          brightness: 1,
          contrast: 1,
          options: [{
            label: 'WMS:Rainfall',
            value: 'Precipitable_water_entire_atmosphere_single_layer'
          }, {
            label: 'WMS:Air Pressure',
            value: 'Pressure_surface'
          }]
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.cesiumInstance = cesiumInstance
        },
        mdSelected (value) {
          if (value === 'Precipitable_water_entire_atmosphere_single_layer') {
            this.parameters = {
              ColorScaleRange: '0.1,66.8'
            }
          } else if (value === 'Pressure_surface') {
            this.parameters = {
              ColorScaleRange: '51640,103500'
            }
          }
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
      <wms-imagery-provider :url="url" :layers="layers" :parameters="parameters"></wms-imagery-provider>
      </imagery-layer>
    </cesium-viewer>
    <div class="demo-tool">
      <span>透明度</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"  ></vue-slider>
      <span>亮度</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      <span>对比度</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"  ></vue-slider>
      <span>切换图层</span>
      <md-select v-model="layers" placeholder="请选择服务" @selected="mdSelected">
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
        url: 'https://www.ncei.noaa.gov/thredds/wms/gfs-004-files/201809/20180916/gfs_4_20180916_0000_000.grb2',
        layers: 'Precipitable_water_entire_atmosphere_single_layer',
        parameters: {
          ColorScaleRange: '0.1,66.8'
        },
        alpha: 1,
        brightness: 1,
        contrast: 1,
        options: [{
          label: 'WMS:Rainfall',
          value: 'Precipitable_water_entire_atmosphere_single_layer'
        }, {
          label: 'WMS:Air Pressure',
          value: 'Pressure_surface'
        }]
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        this.cesiumInstance = cesiumInstance
      },
      mdSelected (value) {
        if (value === 'Precipitable_water_entire_atmosphere_single_layer') {
          this.parameters = {
            ColorScaleRange: '0.1,66.8'
          }
        } else if (value === 'Pressure_surface') {
          this.parameters = {
            ColorScaleRange: '51640,103500'
          }
        }
      }
    }
  }
</script>
```

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|url|String||`required`指定wmts服务地址。|
|format|String|'image/jpeg'|`optional` 指定服务的MIME类型。|
|layer|String||指定WMTS请求图层名称。|
|style|String||指定WMTS请求样式名称。|
|tileMatrixSetID|String||指定WMTS请求的TileMatrixSet的标识符。|
|tileMatrixLabels|Array||`optional` 指定TileMatrix中用于WMTS请求的标识符列表，每个TileMatrix级别一个。|
|clock|Clock||`optional` 确定时间维度值时使用的Clock实例。 指定options.times时必需。|
|times|TimeIntervalCollection||`optional` TimeIntervalCollection，其data属性是一个包含时间动态维度及其值的对象。|
|dimensions|Object||`optional` 指定包含静态尺寸及其值的对象。|
|tileWidth|Number|256|`optional` 像元宽度。|
|tileHeight|Number|256|`optional` 像元高度。|
|tilingScheme|TilingScheme||`optional` 指定切片方案。|
|rectangle|Rectangle|Rectangle.MAX_VALUE|`optional` 图层的矩形范围,此矩形限制了影像可见范围。|
|minimumLevel|Number|0|`optional` 图层可以显示的最小层级。|
|maximumLevel|Number||`optional` 图层可以显示的最大层级，undefined表示没有限制。|
|ellipsoid|Ellipsoid||`optional` 参考椭球体，没指定默认WGS84椭球。|
|credit|Credit | String||`optional` 数据源描述信息。|
|subdomains|String| Array |'abc'|`optional` 指定URL模板中{s}占位符的子域。 如果此参数是单个字符串，则字符串中的每个字符都是子域。 如果是数组，则数组中的每个元素都是子域。|
|token|String|||`optional` 指定服务token|
---

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
|errorEvent|TileProviderError|当图层的提供者发生异步错误时触发, 返回一个TileProviderError实例。|
