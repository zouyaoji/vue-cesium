## VcPrimitiveTileset

加载 3DTiles 图元，相当于初始化一个 `Cesium.Cesium3DTileset` 实例。

### 基础用法

3DTiles 模型图元组件的基础用法。

:::demo 使用 `vc-primitive-tileset` 标签在三维球上添加 3DTiles 模型。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-primitive-tileset
      ref="primitive"
      url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
      @readyPromise="onReadyPromise"
      @click="onClicked"
    >
    </vc-primitive-tileset>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
  </el-row>
</el-row>

<script>
  export default {
    methods: {
      onReadyPromise(tileset, viewer) {
        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0)
        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
        viewer.zoomTo(tileset)
      },
      onClicked(e) {
        console.log(e)
      },
      unload() {
        this.$refs.primitive.unload()
      },
      load() {
        this.$refs.primitive.load()
      },
      reload() {
        this.$refs.primitive.reload()
      }
    }
  }
</script>
```

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ------ | ---- | ------ | ---- |---|
| url | String | | `required` 指定 tileset JSON 文件地址。 |
| show | Boolean | `true` | `optional` 是否显示 tileset 模型。 |
| modelMatrix | Object | `Matrix4.IDENTITY` | `optional` 一个 4x4 变换矩阵，用于转换 tileset 的根块。 |
| shadows | Number | `1` | `optional` 确定 tileset 是否投射或接收来自每个光源的阴影。 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3**|0/1/2/3|
| maximumScreenSpaceError | Number | `16` | `optional` 用于驱动细节细化级别的最大屏幕空间错误。 |
| maximumMemoryUsage | Number | `512` | `optional` tileset 可以使用的最大内存量（MB）。 |
| cullWithChildrenBounds | Boolean | `true` | `optional` 优化选项。 是否使用子绑定卷的并集来剔除切片。 |
| cullRequestsWhileMoving | Boolean | `true` | `optional` 优化选项。 请勿请求由于相机的移动而可能回来的未使用的图块。 此优化仅适用于固定图块集。 |
| cullRequestsWhileMovingMultiplier | Number | `60.0` | `optional` 优化选项。 移动时用于剔除请求的乘数。 较大的代表更积极的剔除，较小的代表较不积极的剔除。 |
| preloadWhenHidden | Boolean| `false` | `optional` tileet.show 为 false 时预加载图块。 加载图块时，好像图块集可见但不渲染它们。 |
| preloadFlightDestinations | Boolean | `true` | `optional` 优化选项。 在相机飞行过程中是否预加载瓦片。 |
| preferLeaves | Boolean | `false` | `optional` 优化选项。 是否优先加载第一层级。|
| dynamicScreenSpaceError | Boolean | `false` | `optional` 优化选项。 减少远离相机的瓷砖的屏幕空间错误。 |
| dynamicScreenSpaceErrorDensity | Number | `0.00278`| `optional` 用于调整动态屏幕空间误差密度，类似于雾密度。 |
| dynamicScreenSpaceErrorFactor | Number | `4.0` | `optional` 用于增加计算的动态屏幕空间错误的因子。 |
| dynamicScreenSpaceErrorHeightFalloff | Number | `0.25` | `optional` tileset 高度开始下降的比率。 |
| progressiveResolutionHeightFraction | Number | `0.3` | `optional` 优化选项。 如果介于（0.0，0.5]之间，则将优先考虑屏幕空间错误或高于屏幕空间错误的图块，以降低 ProgressiveResolutionHeightFraction \* screenHeight 的屏幕分辨率，这有助于在继续加载全分辨率图块的同时快速缩小图块层。|
| foveatedScreenSpaceError | Boolean | `true` | `optional` 优化选项。 通过暂时提高屏幕边缘周围的图块的屏幕空间错误，可以优先在屏幕中央加载图块。 加载由 Cesium3DTileset#foveatedConeSize 确定的屏幕中心的所有图块后，屏幕空间错误将恢复正常。|
| foveatedConeSize | Number | `0.1` | `optional` 优化选项。 当 Cesium3DTileset#foveatedScreenSpaceError 为 true 时使用，以控制确定延迟哪些图块的圆锥体大小。 此圆锥体内部的瓷砖会立即加载。 圆锥体外部的图块可能会根据其在圆锥体外部的距离和其屏幕空间误差而推迟。 这由 Cesium3DTileset#foveatedInterpolationCallback 和 Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation 控制。 将该值设置为 0.0 表示圆锥将是由相机位置及其视图方向形成的线。 将此值设置为 1.0 意味着圆锥体将覆盖相机的整个视场，从而禁用效果。 |
| foveatedMinimumScreenSpaceErrorRelaxation | Number | `0.0` | `optional` 优化选项。 当 Cesium3DTileset#foveatedScreenSpaceError 为 true 时使用，以控制凹入圆锥体外部的图块的起始屏幕空间误差松弛。 屏幕空间错误将根据提供的 Cesium3DTileset#foveatedInterpolationCallback，从图块值开始直至 Cesium3DTileset＃maximumScreenSpaceError 引发。|
| foveatedInterpolationCallback | Function| | `optional` 优化选项。 当 Cesium3DTileset#foveatedScreenSpaceError 为 true 时使用，以控制在凹入圆锥体外部的图块引发屏幕空间误差的程度，并在 Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation 和 Cesium3DTileset#maximumScreenSpaceError 之间进行插值 |
| foveatedTimeDelay | Number | `0.2` | `optional` 优化选项。 当 Cesium3DTileset#foveatedScreenSpaceError 为 true 时使用，用于控制相机停止移动之后要等待多长时间（秒）才开始加载延迟的图块。此时间延迟可防止在相机移动时在屏幕边缘周围请求图块。 将此设置为 0.0 将立即请求任何给定视图中的所有图块。|
| skipLevelOfDetail | Boolean | true | `optional` 优化选项。 确定在遍历期间是否应该应用详细信息跳过级别。 |
| baseScreenSpaceError | Number | `1024` | `optional` 当 skipLevelOfDetail 为 true 时，在跳过详细级别之前必须达到的屏幕空间错误。 |
| skipScreenSpaceErrorFactor | Number | `16` | `optional` 当 skipLevelOfDetail 为 true 时，定义要跳过的最小屏幕空间错误的乘数。 与 skipLevels 结合使用以确定要加载的切片。 |
| skipLevels | Number | 1 | `optional`当 skipLevelOfDetail 为 true 时，一个常量定义加载切片时要跳过的最小级别数。 当它为 0 时，不会跳过任何级别。与 skipScreenSpaceErrorFactor 结合使用以确定要加载的切片。 |
| immediatelyLoadDesiredLevelOfDetail | Boolean | false | `optional` 当 skipLevelOfDetail 为 true 时，将只下载满足最大屏幕空间错误的切片。跳过因子将被忽略，并且只加载所需的切片。 |
| loadSiblings | Boolean | false | `optional` 当 skipLevelOfDetail 为 true 时，确定在遍历期间是否始终下载可见切片的兄弟节点。 |
| clippingPlanes | Object | | `optional` ClippingPlaneCollection 用于有选择地禁用渲染 tileset。 |
| classificationType | Number | | `optional` 确定此 tileset 是否会对 terrain，3D Tiles 或两者进行分类。 有关限制和限制的详细信息，请参阅 Cesium3DTileset＃classificationType。**TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |0/1/2|
| ellipsoid | Object | Object | `optional` 决定地球的大小和形状参考椭球体。 |
| pointCloudShading | Object | | `optional` 用于构造 PointCloudShading 对象以基于几何误差和光照控制点衰减的选项。 |
| imageBasedLightingFactor | Object\|Array | `[1.0, 1.0]` | `optional` 地球、天空、大气层的光照缩放因子。 |
| lightColor | Object\|Array | | `optional` 模型阴影的颜色和强度。 |
| luminanceAtZenith | Number | `0.2` | `optional` 太阳在天顶的亮度，以每平方米千坎德拉为单位，用于该模型的过程环境图。 |
| sphericalHarmonicCoefficients | Array || `optional` 用于基于图像的照明的漫反射颜色的三阶球面谐波系数。 |
| specularEnvironmentMaps | String | | `optional` KTX 文件的 URL，其中包含镜面照明的立方体贴图和卷积的镜面 mipmap。 |
| backFaceCulling | Boolean |`false`| `optional` 是否剔除背面几何。 如果为 true，则背面剔除取决于 glTF 材料的 doubleSided 属性； 如果为假，则禁用背面剔除。|
| vectorClassificationOnly | Boolean |`false`| `optional` 是否仅应使用图块集的矢量图块进行分类。|
| debugHeatmapTilePropertyName | String || `optional` tile 变量以着色为热图。 所有渲染的图块将相对于彼此的指定变量值进行着色。|
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
| enableMouseEvent | Boolean | `true` | `optional` 指定鼠标事件是否生效。 |

### 事件

| 事件名       | 参数                                                       | 描述                       |
| ------------ | ---------------------------------------------------------- | -------------------------- |
| beforeLoad   | Vue Instance                                               | 对象加载前触发。           |
| ready        | {Cesium, viewer, cesiumObject, vm}                         | 对象加载成功时触发。       |
| destroyed    | Vue Instance                                               | 对象销毁时触发。           |
| readyPromise |                                                            | 模型对象可用时触发。       |
| mousedown    | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上按下时触发。 |
| mouseup      | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上弹起时触发。 |
| click        | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元时触发。     |
| clickout     | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元外部时触发。 |
| dblclick     | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标左键双击该图元时触发。 |
| mousemove    | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上移动时触发。 |
| mouseover    | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移动到该图元时触发。   |
| mouseout     | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移出该图元时触发。     |

### 参考

- 官方文档： **[Cesium3DTileset](https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html)**
