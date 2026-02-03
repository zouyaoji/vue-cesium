# VcPrimitiveTileset

加载 3DTiles 图元，相当于初始化一个 `Cesium.Cesium3DTileset` 实例。

## 基础用法

3DTiles 模型图元组件的基础用法。

:::demo

primitives/vc-primitive-tileset/usage

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| --- | --- | --- | --- | --- |
| url | string | | `optional` 指定 tileset JSON 文件地址 |
| assetId | number | | `optional` 指定 Cesium ion 上模型的 assetId |
| show | boolean | `true` | `optional` 是否显示 tileset 模型 |
| modelMatrix | Cesium.Matrix4 | `Matrix4.IDENTITY` | `optional` 一个 4x4 变换矩阵，用于转换 tileset 的根块 |
| modelUpAxis | Cesium.Axis\| number | | `optional` 加载图块内容的模型时会考虑哪个轴 |
| modelForwardAxis | Cesium.Axis\| number | | `optional` 加载图块内容的模型时，哪个轴被视为向前 |
| shadows | number | `1` | `optional` 确定 tileset 是否投射或接收来自每个光源的阴影 **DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3** | 0/1/2/3 |
| maximumScreenSpaceError | number | `16` | `optional` 用于驱动细节细化级别的最大屏幕空间错误 |
| maximumMemoryUsage | number | `512` | `optional` tileset 可以使用的最大内存量（MB） |
| cullWithChildrenBounds | boolean | `true` | `optional` 优化选项。是否使用子绑定卷的并集来剔除切片 |
| cullRequestsWhileMoving | boolean | `true` | `optional` 优化选项。请勿请求由于相机的移动而可能回来的未使用的图块 |
| cullRequestsWhileMovingMultiplier | number | `60.0` | `optional` 优化选项。移动时用于剔除请求的乘数 |
| preloadWhenHidden | boolean | `false` | `optional` tileet.show 为 false 时预加载图块 |
| preloadFlightDestinations | boolean | `true` | `optional` 优化选项。在相机飞行过程中是否预加载瓦片 |
| preferLeaves | boolean | `false` | `optional` 优化选项。是否优先加载第一层级 |
| dynamicScreenSpaceError | boolean | `false` | `optional` 优化选项。减少远离相机的瓷砖的屏幕空间错误 |
| dynamicScreenSpaceErrorDensity | number | `0.00278` | `optional` 用于调整动态屏幕空间误差密度 |
| dynamicScreenSpaceErrorFactor | number | `4.0` | `optional` 用于增加计算的动态屏幕空间错误的因子 |
| dynamicScreenSpaceErrorHeightFalloff | number | `0.25` | `optional` tileset 高度开始下降的比率 |
| progressiveResolutionHeightFraction | number | `0.3` | `optional` 优化选项 |
| foveatedScreenSpaceError | boolean | `true` | `optional` 优化选项 |
| foveatedConeSize | number | `0.1` | `optional` 优化选项 |
| foveatedMinimumScreenSpaceErrorRelaxation | number | `0.0` | `optional` 优化选项 |
| foveatedInterpolationCallback | Function | | `optional` 优化选项 |
| foveatedTimeDelay | number | `0.2` | `optional` 优化选项 |
| skipLevelOfDetail | boolean | true | `optional` 优化选项。确定在遍历期间是否应该应用详细信息跳过级别 |
| baseScreenSpaceError | number | `1024` | `optional` 当 skipLevelOfDetail 为 true 时 |
| skipScreenSpaceErrorFactor | number | `16` | `optional` 当 skipLevelOfDetail 为 true 时 |
| skipLevels | number | 1 | `optional` 当 skipLevelOfDetail 为 true 时 |
| immediatelyLoadDesiredLevelOfDetail | boolean | false | `optional` 当 skipLevelOfDetail 为 true 时 |
| loadSiblings | boolean | false | `optional` 当 skipLevelOfDetail 为 true 时 |
| clippingPlanes | Cesium.ClippingPlaneCollection \| VcCallbackPropertyFunction\<Cesium.ClippingPlaneCollection\> | | `optional` ClippingPlaneCollection 用于有选择地禁用渲染 tileset |
| classificationType | number | | `optional` 确定此 tileset 是否会对 terrain，3D Tiles 或两者进行分类 **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** | 0/1/2 |
| ellipsoid | Cesium.Ellipsoid | | `optional` 决定地球的大小和形状参考椭球体 |
| pointCloudShading | Cesium.PointCloudShading | | `optional` 用于构造 PointCloudShading 对象 |
| imageBasedLightingFactor | VcCartesian2\|Array | `[1.0, 1.0]` | `optional` 地球、天空、大气层的光照缩放因子 |
| lightColor | VcColor\|Array | | `optional` 模型阴影的颜色和强度 |
| luminanceAtZenith | number | `0.2` | `optional` 太阳在天顶的亮度 |
| sphericalHarmonicCoefficients | Array | | `optional` 用于基于图像的照明的漫反射颜色的三阶球面谐波系数 |
| specularEnvironmentMaps | VcImageBasedLighting | | `optional` KTX 文件的 URL |
| imageBasedLighting | string | | `optional` 用于管理此图块集基于图像的照明的属性 |
| backFaceCulling | boolean | `false` | `optional` 是否剔除背面几何 |
| enableShowOutline | boolean | `true` | `optional` 是否使用CESIUM_primitive_outline扩展启用模型的轮廓 |
| showOutline | boolean | `true` | `optional` 是否显示模型的轮廓 |
| vectorKeepDecodedPositions | boolean | `false` | `optional` 是否应在内存中保持解码位置 |
| vectorClassificationOnly | boolean | `false` | `optional` 是否仅应使用图块集的矢量图块进行分类 |
| featureIdLabel | string \| number | | `optional` 用于拾取和设计样式的要素 ID 集的标签 |
| instanceFeatureIdLabel | string \| number | | `optional` 用于拾取和样式化的实例功能 ID 集的标签 |
| splitDirection | number\| Cesium.SplitDirection | | `optional` 要应用于此图块集的 SplitDirection 分割 |
| projectTo2D | boolean | false | `optional` 是否将图块集精确投影为 2D |
| debugHeatmapTilePropertyName | string | | `optional` tile 变量以着色为热图 |
| debugFreezeFrame | boolean | false | `optional` 仅调试可用 |
| debugColorizeTiles | boolean | false | `optional` 仅调试可用 |
| debugWireframe | boolean | false | `optional` 仅调试可用 |
| debugShowBoundingVolume | boolean | false | `optional` 仅调试可用 |
| debugShowContentBoundingVolume | boolean | false | `optional` 仅调试可用 |
| debugShowViewerRequestVolume | boolean | false | `optional` 仅调试可用 |
| debugShowGeometricError | boolean | false | `optional` 仅调试可用 |
| debugShowRenderingStatistics | boolean | false | `optional` 仅调试可用 |
| debugShowMemoryUsage | boolean | false | `optional` 仅调试可用 |
| debugShowUrl | boolean | false | `optional` 仅调试可用 |
| enableMouseEvent | boolean | `true` | `optional` 指定鼠标事件是否生效 |

### Events

| 事件名       | 参数                                    | 描述                                                          |
| ------------ | --------------------------------------- | ------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | 对象加载前触发                                                |
| ready        | (readyObj: VcReadyObject)               | 对象加载成功时触发                                            |
| destroyed    | (instance: VcComponentInternalInstance) | 对象销毁时触发                                                |
| readyPromise |                                         | 模型对象可用时触发。cesium 1.107+ 版本废弃。用 ready 事件代替 |
| mousedown    | (evt: VcPickEvent)                      | 鼠标在该图元上按下时触发                                      |
| mouseup      | (evt: VcPickEvent)                      | 鼠标在该图元上弹起时触发                                      |
| click        | (evt: VcPickEvent)                      | 鼠标单击该图元时触发                                          |
| clickout     | (evt: VcPickEvent)                      | 鼠标单击该图元外部时触发                                      |
| dblclick     | (evt: VcPickEvent)                      | 鼠标左键双击该图元时触发                                      |
| mousemove    | (evt: VcPickEvent)                      | 鼠标在该图元上移动时触发                                      |
| mouseover    | (evt: VcPickEvent)                      | 鼠标移动到该图元时触发                                        |
| mouseout     | (evt: VcPickEvent)                      | 鼠标移出该图元时触发                                          |

## 参考

- **[Cesium3DTileset](https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html)**
