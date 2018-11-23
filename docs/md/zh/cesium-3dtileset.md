<template lang="markdown">

# 3DTiles模型

`cesium-3dtileset`用于加载3DTiles模型。

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|url|String||`required`tileset json文件地址。|
|show|Boolean|true|`optional`是否显示tileset模型。|
|modelMatrix|Matrix4|Matrix4.IDENTITY|`optional` 一个4x4变换矩阵，用于转换tileset的根块。|
|shadows|ShadowMode|ShadowMode.ENABLED|`optional` 确定tileset是否投射或接收来自每个光源的阴影。|
|maximumScreenSpaceError|Number|16|`optional` 用于驱动细节细化级别的最大屏幕空间错误。|
|maximumMemoryUsage|Number|512|`optional` tileset可以使用的最大内存量（MB）。|
|cullWithChildrenBounds|Boolean|true|`optional` 优化选项。 是否使用子绑定卷的并集来剔除切片。|
|dynamicScreenSpaceError|Boolean|false|`optional` 优化选项。 减少远离相机的瓷砖的屏幕空间错误。|
|dynamicScreenSpaceErrorDensity|Number|0.00278|`optional` 用于调整动态屏幕空间误差密度，类似于雾密度。|
|dynamicScreenSpaceErrorFactor|Number|4.0|`optional` 用于增加计算的动态屏幕空间错误的因子。|
|dynamicScreenSpaceErrorHeightFalloff|Number|0.25|`optional` tileset高度开始下降的比率。|
|skipLevelOfDetail|Boolean|true|`optional` 优化选项。 确定在遍历期间是否应该应用详细信息跳过级别。|
|baseScreenSpaceError|Number|1024|`optional` 当skipLevelOfDetail为true时，在跳过详细级别之前必须达到的屏幕空间错误。|
|skipScreenSpaceErrorFactor|Number|16|`optional` 当skipLevelOfDetail为true时，定义要跳过的最小屏幕空间错误的乘数。 与skipLevels结合使用以确定要加载的切片。|
|skipLevels|Number|1|`optional`当skipLevelOfDetail为true时，一个常量定义加载切片时要跳过的最小级别数。 当它为0时，不会跳过任何级别。与skipScreenSpaceErrorFactor结合使用以确定要加载的切片。|
|immediatelyLoadDesiredLevelOfDetail|Boolean|false|`optional` 当skipLevelOfDetail为true时，将只下载满足最大屏幕空间错误的切片。跳过因子将被忽略，并且只加载所需的切片。|
|loadSiblings|Boolean|false|`optional` 当skipLevelOfDetail为true时，确定在遍历期间是否始终下载可见切片的兄弟节点。|
|clippingPlanes|ClippingPlaneCollection||`optional` ClippingPlaneCollection用于有选择地禁用渲染tileset。|
|classificationType|ClassificationType||`optional` 确定此tileset是否会对terrain，3D Tiles或两者进行分类。 有关限制和限制的详细信息，请参阅Cesium3DTileset＃classificationType。|
|ellipsoid|Ellipsoid|Ellipsoid.WGS84|`optional` 决定地球的大小和形状参考椭球体。|
|pointCloudShading|Object||`optional` 用于构造PointCloudShading对象以基于几何误差和光照控制点衰减的选项。|
|imageBasedLightingFactor|Cartesian2|new Cartesian2(1.0, 1.0)|`optional` 地球、天空、大气层的光照缩放因子。|
|lightColor|Cartesian3||`optional` 模型阴影的颜色和强度。|
|debugFreezeFrame|Boolean|false|`optional` 仅调试可用，确定是否只使用最后一帧的切片进行渲染。|
|debugColorizeTiles|Boolean|false|`optional` 仅调试可用，如果为true，则给每个tile一个随机颜色。 |
|debugWireframe|Boolean|false|`optional` 仅调试可用， 如果为ture，则渲染每个tile content为线框。|
|debugShowBoundingVolume|Boolean|false|`optional` 仅调试可用，如果为true，则渲染每个tile的边界体积。|
|debugShowContentBoundingVolume|Boolean|false|`optional` 仅调试可用，如果为true，则渲染每个tile content的边界体积。|
|debugShowViewerRequestVolume|Boolean|false|`optional` 仅调试可用，如果为true，则渲染每个tile的请求量。|
|debugShowGeometricError|Boolean|false|`optional` 仅调试可用，如果为true，则绘制标签表示每个tile的几何误差。|
|debugShowRenderingStatistics|Boolean|false|`optional` 仅调试可用，如果为true，则绘制标签以表示每个tile的commonds、points、triangles、features的数量。|
|debugShowMemoryUsage|Boolean|false|`optional` 仅调试可用，如果为true，则绘制标签表示每个tile的纹理和几何内存，以mb为单位。|
|debugShowUrl|Boolean|false|`optional` 仅调试可用，如果为true，则绘制标签表示每个tile的网址。|
|isZoomTo|Boolean|true|`optional` 加载到scene之后是否定位到该模型。|
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