# Cesium3DTileset

`vc-primitive-3dtileset` 组件用于加载 3DTiles 模型。

## 示例

### 加载 3DTileset 图元

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive-3dtileset
          :url="url"
          @readyPromise="readyPromise"
          @initialTilesLoaded="initialTilesLoaded"
          @allTilesLoaded="allTilesLoaded"
          @loadProgress="loadProgress"
          @tileFailed="tileFailed"
          @tileLoad="tileLoad"
          @tileUnload="tileUnload"
          @tileVisible="tileVisible"
        >
        </vc-primitive-3dtileset>
      </vc-viewer>
      <div class="demo-tool">
        <span>切换地址</span>
        <md-select v-model="url" placeholder="切换地址">
          <md-option v-for="item in options" :key="item.value" :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          options: [
            {
              value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
              label: 'tileset one'
            },
            {
              value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json',
              label: 'tileset two'
            }
          ]
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = cesiumInstance
        },
        readyPromise(tileset) {
          const { Cesium, viewer } = this.cesiumInstance
          viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
        },
        allTilesLoaded() {
          console.log('All tiles are loaded')
        },
        initialTilesLoaded() {
          console.log('Initial tiles are loaded')
        },
        loadProgress(numberOfPendingRequests, numberOfTilesProcessing) {
          if (numberOfPendingRequests === 0 && numberOfTilesProcessing === 0) {
            console.log('Stopped loading')
            return
          }

          console.log('Loading: requests: ' + numberOfPendingRequests + ', processing: ' + numberOfTilesProcessing)
        },
        tileFailed(error) {
          console.log('An error occurred loading tile: ' + error.url)
          console.log('Error: ' + error.message)
        },
        tileLoad(tile) {
          console.log('A tile was loaded.')
        },
        tileUnload(tile) {
          console.log('A tile was unloaded from the cache.')
        },
        tileVisible(tile) {}
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-primitive-3dtileset
        :url="url"
        @readyPromise="readyPromise"
        @initialTilesLoaded="initialTilesLoaded"
        @allTilesLoaded="allTilesLoaded"
        @loadProgress="loadProgress"
        @tileFailed="tileFailed"
        @tileLoad="tileLoad"
        @tileUnload="tileUnload"
        @tileVisible="tileVisible"
      >
      </vc-primitive-3dtileset>
    </vc-viewer>
    <div class="demo-tool">
      <span>切换地址</span>
      <md-select v-model="url" placeholder="切换地址">
        <md-option v-for="item in options" :key="item.value" :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
        options: [
          {
            value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
            label: 'tileset one'
          },
          {
            value: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json',
            label: 'tileset two'
          }
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = cesiumInstance
      },
      readyPromise(tileset) {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
      },
      allTilesLoaded() {
        console.log('All tiles are loaded')
      },
      initialTilesLoaded() {
        console.log('Initial tiles are loaded')
      },
      loadProgress(numberOfPendingRequests, numberOfTilesProcessing) {
        if (numberOfPendingRequests === 0 && numberOfTilesProcessing === 0) {
          console.log('Stopped loading')
          return
        }

        console.log('Loading: requests: ' + numberOfPendingRequests + ', processing: ' + numberOfTilesProcessing)
      },
      tileFailed(error) {
        console.log('An error occurred loading tile: ' + error.url)
        console.log('Error: ' + error.message)
      },
      tileLoad(tile) {
        console.log('A tile was loaded.')
      },
      tileUnload(tile) {
        console.log('A tile was unloaded from the cache.')
      },
      tileVisible(tile) {}
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ----- | ---- | ---- | --- |
| url | String | | `required`tileset json 文件地址。 |
| show | Boolean | true | `optional`是否显示 tileset 模型。 |
| modelMatrix | Matrix4 | Matrix4.IDENTITY | `optional` 一个 4x4 变换矩阵，用于转换 tileset 的根块。 |
| shadows | ShadowMode | ShadowMode.ENABLED | `optional` 确定 tileset 是否投射或接收来自每个光源的阴影。 |
| maximumScreenSpaceError | Number | 16 | `optional` 用于驱动细节细化级别的最大屏幕空间错误。 |
| maximumMemoryUsage | Number | 512 | `optional` tileset 可以使用的最大内存量（MB）。 |
| cullWithChildrenBounds | Boolean | true | `optional` 优化选项。 是否使用子绑定卷的并集来剔除切片。 |
| dynamicScreenSpaceError | Boolean | false | `optional` 优化选项。 减少远离相机的瓷砖的屏幕空间错误。 |
| dynamicScreenSpaceErrorDensity | Number | 0.00278 | `optional` 用于调整动态屏幕空间误差密度，类似于雾密度。 |
| dynamicScreenSpaceErrorFactor | Number | 4.0 | `optional` 用于增加计算的动态屏幕空间错误的因子。 |
| dynamicScreenSpaceErrorHeightFalloff | Number | 0.25 | `optional` tileset 高度开始下降的比率。 |
| skipLevelOfDetail | Boolean | true | `optional` 优化选项。 确定在遍历期间是否应该应用详细信息跳过级别。 |
| baseScreenSpaceError | Number | 1024 | `optional` 当 skipLevelOfDetail 为 true 时，在跳过详细级别之前必须达到的屏幕空间错误。 |
| skipScreenSpaceErrorFactor | Number | 16 | `optional` 当 skipLevelOfDetail 为 true 时，定义要跳过的最小屏幕空间错误的乘数。 与 skipLevels 结合使用以确定要加载的切片。 |
| skipLevels | Number | 1 | `optional`当 skipLevelOfDetail 为 true 时，一个常量定义加载切片时要跳过的最小级别数。 当它为 0 时，不会跳过任何级别。与 skipScreenSpaceErrorFactor 结合使用以确定要加载的切片。 |
| immediatelyLoadDesiredLevelOfDetail | Boolean | false | `optional` 当 skipLevelOfDetail 为 true 时，将只下载满足最大屏幕空间错误的切片。跳过因子将被忽略，并且只加载所需的切片。 |
| loadSiblings | Boolean | false | `optional` 当 skipLevelOfDetail 为 true 时，确定在遍历期间是否始终下载可见切片的兄弟节点。 |
| clippingPlanes | ClippingPlaneCollection | | `optional` ClippingPlaneCollection 用于有选择地禁用渲染 tileset。 |
| classificationType | ClassificationType | | `optional` 确定此 tileset 是否会对 terrain，3D Tiles 或两者进行分类。 有关限制和限制的详细信息，请参阅 Cesium3DTileset＃classificationType。 |
| ellipsoid | Ellipsoid | Ellipsoid.WGS84 | `optional` 决定地球的大小和形状参考椭球体。 |
| pointCloudShading | Object | | `optional` 用于构造 PointCloudShading 对象以基于几何误差和光照控制点衰减的选项。 |
| imageBasedLightingFactor | Cartesian2 | new Cartesian2(1.0, 1.0) | `optional` 地球、天空、大气层的光照缩放因子。 |
| lightColor | Cartesian3 | | `optional` 模型阴影的颜色和强度。 |
| debugFreezeFrame | Boolean | false | `optional` 仅调试可用，确定是否只使用最后一帧的切片进行渲染。 |
| debugColorizeTiles | Boolean | false | `optional` 仅调试可用，如果为 true，则给每个 tile 一个随机颜色。 |
| debugWireframe | Boolean | false | `optional` 仅调试可用， 如果为 ture，则渲染每个 tile content 为线框。 |
| debugShowBoundingVolume | Boolean | false | `optional` 仅调试可用，如果为 true，则渲染每个 tile 的边界体积。 |
| debugShowContentBoundingVolume | Boolean | false | `optional` 仅调试可用，如果为 true，则渲染每个 tile content 的边界体积。 |
| debugShowViewerRequestVolume | Boolean | false | `optional` 仅调试可用，如果为 true，则渲染每个 tile 的请求量。 |
| debugShowGeometricError | Boolean | false | `optional` 仅调试可用，如果为 true，则绘制标签表示每个 tile 的几何误差。 |
| debugShowRenderingStatistics | Boolean | false | `optional` 仅调试可用，如果为 true，则绘制标签以表示每个 tile 的 commonds、points、triangles、features 的数量。 |
| debugShowMemoryUsage | Boolean | false | `optional` 仅调试可用，如果为 true，则绘制标签表示每个 tile 的纹理和几何内存，以 mb 为单位。 |
| debugShowUrl | Boolean | false | `optional` 仅调试可用，如果为 true，则绘制标签表示每个 tile 的网址。 |
| isZoomTo | Boolean | true | `optional` 加载到 scene 之后是否定位到该模型。 |

---

- 参考官方文档：**[Cesium3DTileset](https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html)**

## 事件

<!-- prettier-ignore -->
| 事件名 | 参数 | 描述 |
| ----- | ---- | --- |
| ready | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| allTilesLoaded | | 该组件所有层级的 tiles 加载完毕后触发该事件。 |
| initialTilesLoaded | | 该组件所有初始层级的 tiles 加载完毕触发该事件。 |
| loadProgress | (numberOfPendingRequests, numberOfTilesProcessing) | 加载 tiles 触发，指示 tile 加载进度。 |
| tileFailed | {url, message} | tile 加载失败时触发该事件。 |
| tileLoad | | tile 加载完成后触发该事件。 |
| tileUnload | | tile 加载未成功加载时触发该事件。 |
| tileVisible | | tile 可见性发生改变时触发该事件。 |

---
