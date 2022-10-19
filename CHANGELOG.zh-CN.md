## 更新日志

### 3.1.1

#### Bug 修复

- 单词拼写错误: retangle 应为 rectangle。[#291](https://github.com/zouyaoji/vue-cesium/issues/291)
- 修改样式以解决与部分 UI 组件的冲突。[#292](https://github.com/zouyaoji/vue-cesium/pull/292)

### 3.1.0

_2022-09-25_

#### Bug 修复

- 修复热力图组件自定义数据字段不起作用的问题。
- 修复数据源组件加载海量数据速度慢的问题。
- 修复加载 dc-sdk 时引用 cdn 地址不能正常加载的问题。

#### 新特性

- `vc-layer-imagery` 组件增加 `vcId` 属性。
- `vc-selection-indicator` 增加 `includeImageryIds` 和 `excludeImageryIds` 属性，用于拾取影像要素时排除图层使用。

### 3.0.19

_2022-09-07_

#### 优化

- 增加全局配置 `reloadMode`，一瞬间修改很多非响应属性改变需要调用组件的 reload 方法时，指示是`每次都执行` reload 方法，还是全部改变完之后`只执行一次` reload 方法。
- `vc-selection-indicator` 组件拾取 `Cesium3DTileFeature` 时，指示器位置优先取属性字段 `position` 的位置，如果为空则取为包围盒的中心点。

#### Bug 修复

- 修复 Cesium 1.97 版本去掉 Cesium.Uri 导致天地图组件不正常的问题。
- 修复按需引入组件失败的问题。

### 3.0.18

_2022-08-23_

#### 新特性

- 导航控件增加支持相对定位。
- 所有组件增加一个 `unready` 事件，为组件加载失败的处理逻辑提供支撑。[详见](https://github.com/zouyaoji/vue-cesium/discussions/260)

### 3.0.17

_2022-08-12_

#### Bug 修复

- 修复部分 types 定义不正确的问题。
- 修复非子组件情况下通过 useVueCesium 获取 viewer 失败的问题。
- 修复在 mars3d 平台鹰眼组件不正常问题。
- 鼠标扩展事件方法名增加 `vc` 修饰符，避免与其他平台同名，引起触发多次的问题。

### 3.0.16

_2022-08-03_

#### Bug 修复

- 修复绘制量算组件 tip 不能动态修改的问题。
- 修复 Cesium 1.96 版本不能正常加载的问题。
- 修复部分 css 不正确的问题。
- 修复二维模式下绘制圆、正多边形结果不正确的问题。

#### 破坏性更新

- 引入 mars3d 的方式改变，通过 `mars3dConfig` 来配置。 详见 [vc-demo-mars3d](https://zouyaoji.top/vue-cesium/#/zh-CN/component/platforms/vc-demo-mars3d)

### 3.0.15

_2022-07-23_

#### 优化

- `vc-overlay-dynamic` 组件模型对象停止时保持上一次的方位角。
- 修复个别组件 types 定义错误问题。

### 3.0.14

_2022-06-08_

#### 新特性

- `vc-viewer` 组件增加 `viewerCreator` 属性，传入一个方法，用于加载非标准的第三方 Cesium 库时 viewer 的初始化方法。

#### Bug 修复

- `vd-drawings` 在移动端进行点标绘时，无法获取经纬度。#211。
- `vc-overlay-html` 组件 show 属性响应不及时问题。

### 3.0.13

_2022-05-19_

#### 新特性

- 鹰眼组件 `vc-overview-map` 增加指示视图范围的矩形；增加 v-model 属性控制鹰眼控件是展开还是收拢。
- 可视域分析支持多个。
- 绘制组件支持添加文字 label。

#### Bug 修复

- 修复部分组件 ts 声明错误的问题。
- VcOverlayDynamic 组件实体对象无法将 Function 转为 CallbackProperty 属性问题。
- 修复高德、百度、腾讯地图组件最大层级参数错误问题。
- 绘制图标、点时 tooltip 无法隐藏的问题。
- 默认加载的 cdn 资源改为 unpkg 域名的（jsdelivr 被墙）。

### 3.0.12

_2022-04-12_

#### 新特性

- 增加高德地图的组件 `vc-imagery-provider-amap`、加载腾讯地图组件`vc-imagery-provider-tencent`。
- 完善所有组件的 types 定义。

#### Bug 修复

- 兼容 Cesium 最新版本，将使用 Cesium.when 的逻辑替换为原生 Promise。
- 修复移动端标绘线面时无法终止的问题，[#169](https://github.com/zouyaoji/vue-cesium/issues/169)。

### 3.0.11

_2022-03-15_

#### 破坏性更新

- 各组件的 `createPromise` 重命名为 `creatingPromise`。

#### 新特性

- `vc-overlay-dynamic` 组件增加站点到达 `stopArrived` 事件，缩放方法 `zoomToOverlay` 和 跟踪方法 `trackOverlay`。
- `vc-overlay-windmap` 组件增加通过经纬度获取 U V 值。
- 测量、绘制组件增加对单个对象属性响应式编辑支持。 [#167](https://github.com/zouyaoji/vue-cesium/issues/167)

#### Bug 修复

- `vc-selection-indicator` 组件拾取到聚合图标上指示器位置不准的问题。
- `vc-overlay-windmap` 组件初始化异常问题。
- 量算、绘制组件 `measurements` 和 `drawings` 参数不能响应式更新的问题。

### 3.0.10

_2022-02-26_

#### Bug 修复

- `useVueCesium` 方法在 `vc-viewer` 外获取不了的问题。
- `vc-selection-indicator` 指示器显示的情况下，调用 `viewer.flyto` 方法导致指示器位置错误的问题。
- `vc-measurements` 高度量算报错问题。
- `vc-measurements`、`vc-drawings`、`vc-analyses` 浮动按钮初始化为不显示时，无法显隐的问题。
- `vc-measurements`、`vc-drawings` 贴地模式下面对象未贴地问题。
- 加载 dc-sdk(2.10.0 版本) 报错问题。
- 数据源组件 `entities` 数组中有对象属性为 Function 类型时无法转换为 Cesium.CallbackProperty 属性问题。

### 3.0.9

_2022-02-14_

#### Bug 修复

- `vc-imagery-provider-baidu` 组件 `projectionTransforms` 属性失效问题。
- `vc-selection-indicator` 组件拾取到粒子对象上卡死的问题；仰视拾取不了对象的问题。
- `vc-viewer` 组件 `baseLayerPicker` 属性失效问题。
- 部分组件 types 定义不正确的问题。

### 3.0.8

_2022-02-08_

#### Bug 修复

- 修复 umd 包崩溃问题。[#149](https://github.com/zouyaoji/vue-cesium/issues/149)

### 3.0.7

_2022-01-30_

#### Bug 修复

- 修复 windows 平台打包不正常的问题。
- 修复水平测量编辑错误问题。

#### 新特性

- 增加分析工具组件（[vc-analyses](https://zouyaoji.top/vue-cesium/#/zh-CN/component/controls/vc-analyses)），目前包含通视分析、可视域分析。
- 增加积云图元组件 [`vc-collection-cloud`](https://zouyaoji.top/vue-cesium/#/zh-CN/component/primitives/vc-collection-cloud)。
- `vc-imagery-provider-baidu` 百度地图部分风格地图支持 https 协议，增加 `customid` 属性，方便切换地图服务。
- `vc-primitive-tileset` 增加自定义 shader 属性。

#### 破坏性更新

- 下列组件已经重命名，由此带来的不便敬请谅解。

  - `VcProviderImageryArcgis` -> `VcImageryProviderArcgis`
  - `VcProviderImageryBaidumap` -> `VcImageryProviderBaidu`
  - `VcProviderImageryBingmaps` -> `VcImageryProviderBing`
  - `VcProviderImageryGoogle` -> `VcImageryProviderGoogle`
  - `VcProviderImageryGrid` -> `VcImageryProviderGrid`
  - `VcProviderImageryIon` -> `VcImageryProviderIon`
  - `VcProviderImageryMapbox` -> `VcImageryProviderMapbox`
  - `VcProviderImageryOsm` -> `VcImageryProviderOsm`
  - `VcProviderImagerySingletile` -> `VcImageryProviderSingletile`
  - `VcProviderImagerySupermap` -> `VcImageryProviderSupermap`
  - `VcProviderImageryTianditu` -> `VcImageryProviderTianditu`
  - `VcProviderImageryTileCoordinates` -> `VcImageryProviderTileCoordinates`
  - `VcProviderImageryTms` -> `VcImageryProviderTms`
  - `VcProviderImageryTiledcache` -> `VcImageryProviderTiledcache`
  - `VcProviderImageryUrltemplate` -> `VcImageryProviderUrltemplate`
  - `VcProviderImageryWms` -> `VcImageryProviderWms`
  - `VcProviderImageryWmts` -> `VcImageryProviderWmts`
  - `VcProviderTerrainCesium` -> `VcTerrainProviderCesium`
  - `VcProviderTerrainArcgis` -> `VcTerrainProviderArcgis`
  - `VcProviderTerrainVrTheworld` -> `VcTerrainProviderVrTheworld`
  - `VcProviderTerrainTianditu` -> `VcTerrainProviderTianditu`
  - `VcInstanceGeometry` -> `VcGeometryInstance`
  - `VcGeometryPolylineGround` -> `VcGeometryGroundPolyline`
  - `VcGeometryPolylineSimple` -> `VcGeometrySimplePolyline`
  - `VcPrimitivePolylineGround` -> `VcPrimitiveGroundPolyline`

- 量算、绘制组件去掉 `material`、`depthFailMaterial` 参数，改为 `appearance` 和 `depthFailAppearance`。

### 3.0.6

_2021-12-31_

#### Bug 修复

- webpack 5 的项目 loadsh 按需导入问题修复，[#144](https://github.com/zouyaoji/vue-cesium/issues/144)。

#### 新特性

- 添加 [`vc-analysis-flood`](https://zouyaoji.top/vue-cesium/#/zh-CN/component/analyses/vc-analysis-flood) 组件。

### 3.0.5

_2021-12-29_

#### Bug 修复

- 事件添加修饰符后无法触发问题[#140](https://github.com/zouyaoji/vue-cesium/issues/140)。
- TS 项目打包时热力图组件报错问题。

### 3.0.4

_2021-12-23_

#### Bug 修复

- 更改 heatmap.js 源，避免国内部分用户安装不上。
- `vc-overlay-dynamic` 组件侦听 `dynamicOverlays` 时忽略 `nodeTransformations`，避免 `JSON.stringify` 报循环引用问题。

#### 新特性

- 支持最新的 [volar](https://github.com/johnsoncodehk/volar)

### 3.0.3

_2021-12-18_

#### Bug 修复

- `vc-overlay-heatmap` 组件报 `Cannot assign to read only property 'data' of object '#<ImageData>'` 错误的问题。
- 量算绘制组件在超图平台下拾取不正常的问题。

### 3.0.2-beta.13

_2021-12-08_

#### Bug 修复

- 打包构建过程中提示循环引入的问题。

#### 新特性

- 支持最新的 [volar](https://github.com/johnsoncodehk/volar)

#### 重构

- 开发工具由 yarn 改为 pnpm。
- `vc-overlay-echart` 组件重命名为 `vc-overlay-echarts`。打包将 echarts，视为外部引入（external），所以使用 `vc-overlay-echart` 要额外安装 echarts。

### 3.0.2-beta.12

_2021-11-30_

#### Bug 修复

- `vc-viewer` 组件时间轴日期格式化错误问题。
- `vc-drawings` 和 `vc-measurements` 组件添加 PrerenderDatas，开启贴地模式抛出异常问题。

#### 新特性

- `vc-overlay-dynamic` 组件增加速度存储变量，并增加历史轨迹例子。

#### 破坏性更新

- `vc-polygon` 组件去掉 color 属性，改为支持 appearance 参数。

### 3.0.2-beta.11

_2021-11-25_

#### Bug 修复

- `vc-selection-indicator` 组件拾取部分图元对象不出指示器的问题。
- 修复 `PolygonPrimitive` 贴地报错问题。

#### 新特性

- 增加动态对象组件 `vc-overlay-dynamic`，用于加载和管理一组动态实体对象。

### 3.0.2-beta.10

_2021-11-22_

#### 新特性

- `vc-polygon` 面图元组件增加 `polygonHierarchy` 属性，以支持岛洞多边形。

#### Bug 修复

- `vc-collection-xxx` 图元集合组件侦听逻辑错误。
- `vc-polygon` 组件对象拾取 bug & `depthFailColor` 属性变更 bug。

### 3.0.2-beta.9

_2021-11-20_

#### 新特性

- 数据源组件 `vc-datasource-xxx` 可用 `entities` 传入自定义属性。
- 增加 `vc-polygon` 面图元组件，并支持用 `vc-collection-primitive` 批量管理一组面图元。

### 3.0.2-beta.8

_2021-11-18_

#### Bug 修复

- 调低各控件组件的 z-index，避免因为 z-index 太高导致他们超出一些模态对话框。
- 修复 makeMaterial 判断逻辑错误问题。

### 3.0.2-beta.7

_2021-11-11_

#### Bug 修复

- 量算、绘制组件 Action 激活状态失效的问题。

### 3.0.2-beta.6

_2021-11-10_

#### Bug 修复

- 修复量算、绘制组件改变 props 不能动态响应的问题。

### 3.0.2-beta.5

_2021-11-07_

#### Bug 修复

- 修复 i18n 配置不起作用的问题。[#126](https://github.com/zouyaoji/vue-cesium/issues/126)

### 3.0.2-beta.4

_2021-11-04_

#### 新特性

- 量算绘制组件增加预加载对象参数 `preRenderDatas`，满足类似编辑服务的需求，详见[vc-drawings 文档](https://zouyaoji.top/vue-cesium/#/zh-CN/component/tools/vc-drawings)。

#### Bug 修复

- 修复 `vc-selection-indicator` 组件无法主动显隐的问题。

### 3.0.2-beta.3

_2021-10-29_

#### 新特性

- 量算组件增加正多边形、圆形量算。
- 绘制组件增加 `图标点`、`正多边形绘制`。
- 增加风场 `vc-overlay-windmap` 组件。

#### 优化

- 重构量算、绘制组件逻辑结构，精简代码。
- `vc-selection-indicator` 支持 primitive 拾取。

#### Bug 修复

- 修复打包生成的 es 包不正确的问题。

### 3.0.2-beta.2

_2021-10-12_

#### 新特性

- 量算组件增加矩形量算。
- 增加 `vc-overlay-echarts` 组件。

#### Bug 修复

- global 改为 globalThis，避免出现 global 为 undefined 的错误。
- 打包后样式文件图片丢失问题修复。

### 3.0.2-beta.1

_2021-10-10_

#### 破坏性更新

- 通过重新组织代码使项目更加清晰，更好地组织代码，让打包产物更加清晰，由于本次改动最大的影响是对打包产物的重新组织，所以如果你以前是全量引入样式文件的话，你需要更改样式文件所在的地址:

```js
  --- import 'vue-cesium/lib/theme-default/index.css'
  +++ import 'vue-cesium/dist/index.css'
```

#### Bug 修复

- 修复按需引入各组件报错的问题。
- 修复 `vc-selection-indicator` 组件拾取报错问题。

### 3.0.1-beta.15

_2021-09-09_

#### Bug 修复

- Cesium@1.85版本天地图影像组件 `vc-provider-imagery-tianditu` 报错问题修复。
- removeEmpty 方法丢掉原型链上的属性导致材质报错问题修复。

#### 优化

- 默认 Cesium 库的 CDN 地址改为 `https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js`。

### 3.0.1-beta.14

_2021-09-03_

#### Bug 修复

- 使用 EarthSDK 报错的问题， #121。

#### 优化

- 绘制量算组件的节点渲染到最上层，避免节点被面压盖而导致没办法拾取到，没法编辑。

### 3.0.1-beta.13

_2021-08-31_

#### 新特性

- 量算、绘制组件编辑按钮增加延时出现和延时消失属性。

#### Bug 修复

- 量算、绘制组件线、面图形移除节点后异常问题。

### 3.0.1-beta.12

_2021-08-23_

#### Bug 修复

- `vc-drawings` 绘制圆、矩形时崩溃的问题。

### 3.0.1-beta.11

_2021-08-20_

#### 新特性

- 针对 1.83+ 版本的 `terrainExaggeration` 做一些兼容处理。
- 数据源组件增加 `destroy` 属性，指明数据源在移除时是否被销毁。
- 量算、绘制组件增加 `mode` 属性，指明量算、绘制操作是连续还是进行一次就结束。

#### Bug 修复

- 涉及用 `Ellipsoid.WGS84` 计算的统一改成用 `viewer.scene.globe.ellipsoid` 计算，避免某些情况下 Ellipsoid 不是 WGS84 而导致问题，如开发月球平台。
- `vc-viewer` 组件支持 `skyBox`、 `skyAtmosphere` 类型增加 Boolean。

#### 修改

- 量算、绘制组件增加 `editorEvt`、`mouseEvt` 事件，去掉默认修改绘制过程中鼠标光标的样式。

### 3.0.1-beta.10

_2021-07-13_

#### 新特性

- 绘制矩形增加正南正北的矩形。

### 3.0.1-beta.9

_2021-07-08_

#### Bug 修复

- 修复在超图平台上 `VcProviderImagerySupermap` 组件移除图层崩溃的问题。
- 修复二维和哥伦布视图下 `VcNavigation` 组件定位不准的问题，#118。
- 修复 `VcViewer` 组件上传非 Prop 的 Attribute 抛出警告问题。
- 修复 `VcSelectionIndicator` 在地球之外拾取抛出错误的问题。

### 3.0.1-beta.8

_2021-06-13_

#### 新特性

- 绘制量算组件的面、线对象支持设置显隐。
- 坐标量算组件的高度支持绝对高度和相对高度。

#### Bug 修复

- GeoJSON 数据源组件 mouseover 和 mouseout 事件触发错误。
- 折线距离量算、面积量算取消绘制上一个点偶尔崩溃。

### 3.0.1-beta.7

_2021-06-13_

#### 新特性

- `vc-selection-indicator` 自定义选择器组件，替换 Cesium 自带的 selectionIndicator。
- `vc-ajax-bar` http 请求进度条控件。
- `vc-drawings` 组件绘制的线面对象支持贴地，增加绘制矩形和圆形。

#### Bug 修复

- `vc-viewer` 的 `infoBox` 属性为 `false` 时组件加载异常问题。
- 修复量算组件和绘制组件中面对象编辑第一点异常的问题。

### 3.0.1-beta.6

_2021-06-03_

#### 新特性

- `vc-overlay-heatmap`, 增加热力图组件，可用于可视化温度、降水等要素。
- `vc-measurements`, 增加友好的量算工具。
- `vc-drawings`, 增加友好的绘制工具。
- `vc-post-process-stage` 增加后期处理组件。
- `vc-post-process-stage-scan` 增加后期处理扫描组件。
- `vc-post-process-stage-collection` 增加后期处理集合组件。
- `vc-overview-map` 增加鹰眼组件。
- 新增兼容第三方[mars3d](https://zouyaoji.top/vue-cesium/#/zh-CN/component/platforms/vc-demo-mars3d) 库。
- 新增兼容第三方 [dc-sdk](https://zouyaoji.top/vue-cesium/#/zh-CN/component/platforms/vc-demo-dc-sdk) 库。

### 3.0.1-beta.5.2

_2021-04-29_

#### 新特性

- `vc-overlay-html`, 增加 HTML 元素覆盖物组件。

#### 优化

- 完善英文部分文档。
- Vetur 智能提示语言默认改为英文。

### 3.0.1-beta.4

_2021-04-26_

#### Bug 修复

- 文档搜索功能。
- Vetur 智能提示失效。

### 3.0.1-beta.3

_2021-04-23_

#### 增加

- `vc-primitive`
- `vc-primitive-classfication`
- `vc-primitive-ground`
- `vc-primitive-polyline-ground`
- `vc-primitive-model`
- `vc-primitive-tileset`
- `vc-primitive-particle`
- `vc-collection-billboard`
- `vc-collection-label`
- `vc-collection-point`
- `vc-collection-polyline`
- `vc-collection-primitive`
- `vc-instance-geometry`
- `vc-geometry-box`
- `vc-geometry-box-outline`
- `vc-geometry-circle`
- `vc-geometry-circle-outline`
- `vc-geometry-corridor`
- `vc-geometry-corridor-outline`
- `vc-geometry-cylinder`
- `vc-geometry-cylinder-outline`
- `vc-geometry-ellipse`
- `vc-geometry-ellipse-outline`
- `vc-geometry-ellipsoid`
- `vc-geometry-ellipsoid-outline`
- `vc-geometry-frustum`
- `vc-geometry-frustum-outline`
- `vc-geometry-plane`
- `vc-geometry-plane-outline`
- `vc-geometry-polygon`
- `vc-geometry-polygon-outline`
- `vc-geometry-polygon-coplanar`
- `vc-geometry-polygon-coplanar-outline`
- `vc-geometry-polyline`
- `vc-geometry-polyline-ground`
- `vc-geometry-polyline-simple`
- `vc-geometry-polyline-volume`
- `vc-geometry-rectangle`
- `vc-geometry-rectangle-outline`
- `vc-geometry-sphere`
- `vc-geometry-sphere-outline`
- `vc-geometry-wall`
- `vc-geometry-wall-outline`

### 3.0.1-beta.2

_2021-04-18_

#### 增加

- `vc-provider-terrain-cesium`
- `vc-provider-terrain-arcgis`
- `vc-provider-terrain-tianditu`
- `vc-datasource-custom`
- `vc-datasource-czml`
- `vc-datasource-geojson`
- `vc-datasource-kml`
- `vc-navigation-sm`
- `vc-compass-sm`
- `vc-zoom-control-sm`

### 3.0.1-beta.1

_2021-04-07_

#### 增加

- `vc-layer-imagery`
- `vc-provider-imagery-arcgis-mapserver`
- `vc-provider-imagery-baidumap`
- `vc-provider-imagery-bingmaps`
- `vc-provider-imagery-googleearth-enterprise`
- `vc-provider-imagery-grid`
- `vc-provider-imagery-ion`
- `vc-provider-imagery-mapbox-style`
- `vc-provider-imagery-osm`
- `vc-provider-imagery-tile-single`
- `vc-provider-imagery-tile-coordinates`
- `vc-provider-imagery-tile-mapservice`
- `vc-provider-imagery-urltemplate`
- `vc-provider-imagery-wms`
- `vc-provider-imagery-wmts`
- `vc-provider-imagery-tianditu`
- `vc-provider-imagery-supermap`
- `vc-provider-imagery-tiledcache`
- `vc-graphics-billboard`
- `vc-graphics-box`
- `vc-graphics-corridor`
- `vc-graphics-cylinder`
- `vc-graphics-ellipse`
- `vc-graphics-ellipsoid`
- `vc-graphics-label`
- `vc-graphics-model`
- `vc-graphics-tileset`
- `vc-graphics-path`
- `vc-graphics-plane`
- `vc-graphics-point`
- `vc-graphics-polygon`
- `vc-graphics-polyline`
- `vc-graphics-polyline-volume`
- `vc-graphics-rectangle`
- `vc-graphics-wall`

### 3.0.1-beta.0

_2021-03-30_

#### 增加

- 增加 `vc-viewer` 组件。
- 重构并升级 `vc-navigation` 组件，分离 `vc-compass`, `vc-zoom-control`, `vc-print`, `vc-my-location`, `vc-status-bar`, `vc-distance-legend` 为独立组件。
- 增加 `vc-entity` 组件。

#### 修改

- 适配 vue 3.0，参考 Element Plus 项目，采用 TypeScript 编写，lerna 管理项目。

### 2.2.1 - 2021-03-27

- 解决 umd 打包 coordtransform 引用问题。
- `vc-heatmap` 组件支持用 `breaks` 和 `colors` 属性确定颜色方案。

### 2.2.0 - 2021-01-30

#### 修改

- 绘制组件增加编辑功能。
- [`vc-primitive-model`](https://zouyaoji.top/vue-cesium/#/zh/primitive/vc-primitive-model)和[`vc-primitive-tileset`](https://zouyaoji.top/vue-cesium/#/zh/primitive/vc-primitive-tileset) 组件同步官方属性。

### 2.1.9 - 2021-01-XX

#### 修改

- 常用属性支持传 `Array`。
- 实体属性支持传 `Function`。
- 修复生产环境组件移除异常问题。 [#92](https://github.com/zouyaoji/vue-cesium/issues/92)
- [`vc-ripple-circle-double`](https://zouyaoji.top/vue-cesium/#/zh/extend/vc-ripple-circle-double), [`vc-circle-roatating-double`](https://zouyaoji.top/vue-cesium/#/zh/extend/vc-circle-roatating-double) 解决设置高度异常问题。
- `vc-viewer` camera 属性更新与绑定不一致的问题。

### 2.1.8 - 2021-01-04

#### 增加

- [`vc-provider-imagery-baidumap`](https://zouyaoji.top/vue-cesium/#/zh/imageryLayer/vc-provider-imagery-baidumap) 加载百度瓦片地图服务。

#### 修改

- 影像 provider 增加属性 `projectionTransforms`，用于瓦片的投影变换。
- `vc-collection-primitive-xxx`, `vc-datasource-xxx` 的集合属性增加动态修改支持。 如[`vc-collection-primitive-billboard`](https://zouyaoji.top/vue-cesium/#/zh/primitives/vc-collection-primitive-billboard)。
- `vc-navigation` 解决二维模式下位置坐标异常问题。
- 实体、图元、几何体等可拾取的对象组件事件优化，并增加 `moveout`、`moveover`、`clickout` 事件响应。
- `vc-viewer` 增加 `cesiumReady` 事件，当 CesiumJS 加载成功时触发。

### 2.1.7 - 2020-12-01

#### 修改

- 解决 `umd` 模式下鹰眼组件不正常的问题。
- 解决 [#87](https://github.com/zouyaoji/vue-cesium/issues/87) 提到的按需引入的问题。
- [`vc-datasource-geojson`](https://zouyaoji.top/vue-cesium/#/zh/datasource/vc-datasource-geojson) 等数据源组件都支持通过 `entities` 属性添加实体集合。
- 实体组件 [`vc-entity`](https://zouyaoji.top/vue-cesium/#/zh/entity/vc-entity), 图元组件 [`vc-primitive`](https://zouyaoji.top/vue-cesium/#/zh/primitive/vc-primitive), 图元集合组件 ['vc-collection-primitive'](https://zouyaoji.top/vue-cesium/#/zh/primitives/vc-collection-primitive) 增加响应鼠标点击事件。
- [`vc-layer-imagery`](https://zouyaoji.top/vue-cesium/#/zh/imageryLayer/vc-layer-imagery]) 影像图层组件新增一个属性 `sortOrder` 维护图层相对顺序。
- [`vc-measure-distance`, `vc-measure-area`, `vc-measure-height`](https://zouyaoji.top/vue-cesium/#/zh/tool/vc-measuring) 量算工具支持触摸屏操作。

### 2.1.6 - 2020-08-15

#### 增加

- [`vc-overlay-html`](https://zouyaoji.top/vue-cesium/#/zh/extend/vc-overlay-html) HTML 元素组件。
- [`vc-overlay-html`](https://zouyaoji.top/vue-cesium/#/zh/control/vc-map-overview) 鹰眼地图组件。

### 2.1.5 - 2020-08-01

#### 增加

- [`vc-scan-circle`](https://zouyaoji.top/vue-cesium/#/zh/extend/vc-scan-circle) 圆形扫描效果组件。
- [`vc-scan-radar`](https://zouyaoji.top/vue-cesium/#/zh/extend/vc-scan-radar) 雷达扫描效果组件。
- [`vc-ripple-circle-double`](https://zouyaoji.top/vue-cesium/#/zh/extend/vc-ripple-circle-double) 双圆涟漪效果组件。
- [`vc-shine-ellipse`](https://zouyaoji.top/vue-cesium/#/zh/extend/vc-shine-ellipse) 闪圆效果组件。
- [`vc-shine-point`](https://zouyaoji.top/vue-cesium/#/zh/extend/vc-shine-point) 闪点效果组件。
- [`vc-trail-polyline`](https://zouyaoji.top/vue-cesium/#/zh/extend/vc-trail-polyline) 流动线效果组件。
- [`vc-trail-wall`](https://zouyaoji.top/vue-cesium/#/zh/extend/vc-trail-polyline) 流动墙效果组件。
- [`vc-provider-imagery-style-mapbox`](https://zouyaoji.top/vue-cesium/#/zh/imageryLayer/vc-provider-imagery-style-mapbox) 加载 mapbox 自定义地图服务。
- 支持引入 cesiumlab 的 earthsdk (1.4.17+).

### 2.1.4 - 2020-05-26

#### 修改

- 量算和绘制组件 activeEvt 事件的触发顺序调整。
- 量算和绘制组件中绘制的面改为双面。
- 量算距离和量算面积组件解决距离单位 km 时数值不正确问题。
- `vc-navigation` 全屏模式下位置不正确的问题。

### 2.1.3 - 2020-05-14

#### 修改

- `vc-viewer` 增加 removeCesiumScript 属性，确定`vc-viewer`在销毁时是否移除 CesiumJS 标签。fixed: #58
- `vc-navigation` 解决单页面添加多个`vc-viewer` 初始化不正常的问题。增加相机高度。增加 heading, pitch, roll 属性。

### 2.1.2 - 2020-05-13

#### 增加

- `vc-navigation` 增加 legendChanged 事件，方便获取导航罗盘当前计算的比例尺。
- `vc-navigation` 增加 geolocation 事件，定位成功时返回定位结果。
- `vc-navigation` 鉴于国内谷歌浏览器定位被墙，增加高德定位 API 选项。
- `vc-viewer` 增加转发 viewr.infoBox.viewModel 的 `cameraClicked` 和 `closeClicked` 事件。

#### 修改

- 量算工具和绘制工具支持贴地选项。
- `vc-datasource-custom` 解决名称获取异常问题。
- `vc-handler-draw-polygon` 和 `vc-handler-draw-polyline` 增加贴地选项 `clampToGround`。
- `vc-handler-draw-polygon` 的 `polygonColor` 改为 `polygonMaterial`，方便自定义绘制材质。

### 2.1.1 - 2020-05-05

#### 修改

- `vc-viewer` 增加 timeline 时间本地化选项。
- `vc-datasource-custom` 可添加批量实体。
- `vc-entity` position 属性可以传 Function，相当于是 callback。

### 2.1.0 - 2020-04-22

#### 增加

- `vc-graphics-tileset` 组件，对应 `Cesium3DTilesetGraphics`

#### 修改

- 绘制组件 `drawEvt` 事件增加鼠标左键点击反馈。
- 量算组件 `measureEvt` 事件增加鼠标左键点击反馈。
- 量算组件增加 `movingEvt` 事件反馈鼠标所在屏幕坐标。
- `vc-primitive-3dtileset` 组件名称改为 `vc-primitive-tileset`（参考官方的实体命名，两者保持一致）。
- 优化导航控件。

### 2.0.9 - 2020-04-20

#### 修改

- 量算组件和绘制组件互斥。
- `vc-handler-draw-polyline`组件可以定义绘制的线型。
- 绘制和量算的点可通过 `depthTest` 属性觉得是否参与深度检测。（默认不参与，即点、线不被地形和模型裁切，会一直显示）
- 加载超图平台客户端绘制的线被遮挡问题修复。

### 2.0.6 - 2020-03-17

#### 增加

- 增加粒子系统组件 `vc-primitive-particle` 。
- 增加克里金色斑图组件 `vc-kriging-map`

#### 修改

- `vc-navigation` 缩放控件的 `defaultResetView` 属性初始化时会覆盖 `vc-viewer` 的 `camera` 属性，增加一个属性 `overrideViewerCamera` 来控制是否覆盖，默认是否。

### 2.0.5 - 2020-01-07

#### 修改

- `vc-measure-distance` 组件增加一个属性 `arcType`, `0` 代表量算时绘制的空间直线, `1` 代表绘制的是测地线。
- 修复 [#48](https://github.com/zouyaoji/vue-cesium/issues/48).

### 2.0.4 - 2019-12-28

#### 增加

- `vc-navigation` 组件增加一个定位按钮. 用的是浏览器定位 API `navigator.geolocation`, 谷歌浏览器被墙了，可能没效果， Firefox 和 Edge 测试工作正常。

#### 修改

- 数据源聚合事件。
- 数据源属性合并成一个对象。
- `vc-provider-imagery-tianditu`组件域名换了.

### 2.0.3 - 2019-12-23

#### 增加

- 国际化语言。 `Vue.use(VueCesium, {cesiumPath: cesiumPath, accessToken: accessToken, lang: lang})` 默认加载中文。
- `vc-navigation` 增加一个打印控件。

#### 修改

- css 名称统一。
- 面积量算结果修正，用海伦公式计算表面积。
- 距离量算结果修正，之前简单的用了 `Cartesian3.distance` 计算的是两点之间的直线距离，忽略了地球曲率，并不合理，改为计算`测地距离(GeodesicDistance)`。

### 2.0.2 - 2019-12-19

#### 增加

- `vc-navigation-sm` 超图罗盘样式组件。
- `vc-stage-process-post` 后期处理组件。
- `vc-collection-stage-process-post` 后期处理集合组件。
- `vc-provider-imagery-tiledcache` 组件，加载 TiledCache 瓦片。

#### 修改

- `vc-navigation` 样式修改了，增加了位置信息。
- `vc-analysis-flood` -> `vc-analytics-flood`

### 2.0.1 - 2019-12-09

#### 修改

- 各组件加载放在 Created 生命周期，方便通过获取`createdPromise`对象进行相关逻辑操作。
- 量算组件增加选项，指定测量线和文字标签是否始终显示。

#### 增加

- `vc-provider-imagery-supermap` 加载超图 iServer 影像服务。
- `vc-provider-imagery-tianditu` 加载天地图 WMTS 影像服务。
- `vc-handler-draw-point` 绘制点组件。
- `vc-handler-draw-polyline` 绘制线组件。
- `vc-handler-draw-polygon` 绘制面组件。
- `vc-geometry-xxx` 补充几何体对象组件。
  - `vc-geometry-outline-box`: `BoxOutlineGeometry`,
  - `vc-geometry-circle`: `CircleGeometry`,
  - `vc-geometry-outline-circle`: `CircleOutlineGeometry`,
  - `vc-geometry-polygon-coplanar`: `CoplanarPolygonGeometry`,
  - `vc-geometry-outline-polygon-coplanar`: `CoplanarPolygonOutlineGeometry`,
  - `vc-geometry-corridor`: `CorridorGeometry`,
  - `vc-geometry-outline-corridor`: `CorridorOutlineGeometry`,
  - `vc-geometry-cylinder`: `CylinderGeometry`,
  - `vc-geometry-outline-cylinder`: `CylinderOutlineGeometry`,
  - `vc-geometry-ellipse`: `EllipseGeometry`,
  - `vc-geometry-outline-ellipse`: `EllipseOutlineGeometry`,
  - `vc-geometry-ellipsoid`: `EllipsoidGeometry`,
  - `vc-geometry-outline-ellipsoid`: `EllipsoidOutlineGeometry`,
  - `vc-geometry-frustum`: `FrustumGeometry`,
  - `vc-geometry-outline-frustum`: `FrustumOutlineGeometry`,
  - `vc-geometry-polyline-ground`: `GroundPolylineGeometry`,
  - `vc-geometry-plane`: `PlaneGeometry`,
  - `vc-geometry-outline-plane`: `PlaneOutlineGeometry`,
  - `vc-geometry-polygon`: `PolygonGeometry`,
  - `vc-geometry-outline-polygon`: `PolygonOutlineGeometry`,
  - `vc-geometry-polyline`: `PolylineGeometry`,
  - `vc-geometry-polyline-volume`: `PolylineVolumeGeometry`,
  - `vc-geometry-outline-polyline-volume`: `PolylineVolumeOutlineGeometry`,
  - `vc-geometry-rectangle`: `RectangleGeometry`,
  - `vc-geometry-outline-rectangle`: `RectangleOutlineGeometry`,
  - `vc-geometry-polyline-simple`: `SimplePolylineGeometry`,
  - `vc-geometry-sphere`: `SphereGeometry`,
  - `vc-geometry-outline-sphere`: `SphereOutlineGeometry`,
  - `vc-geometry-wall`: `WallGeometry`,
  - `vc-geometry-outline-wall`: `WallOutlineGeometry`

### 2.0.0 - 2019-12-02

#### 增加

- `vc-provider-imagery-supermap` 加载超图 iServer 影像服务。
- `vc-provider-imagery-tianditu` 加载天地图 WMTS 影像服务。
- 支持 CDN 引用注册。

### 2.0.0-beta.3 - 2019-11-26

#### 修改

- `@babel/runtime-corejs2` 依赖不正确。
- `vc-viewer` 组件有些部件位置异常。
- `vc-provider-imagery-wmts` 组件支持设置天地图服务 token。
- `vc-navigation` 组件样式文件打包。

### 2.0.0-beta.0 - 2019-11-20

这个版本将做了较大的更新，精简了代码，优化了组件加载速度，更优雅的支持局部引入，重新规范了组件命名，请谨慎升级，最新组件名称参考[在线文档](https://zouyaoji.top/vue-cesium/#/)。

#### 修改

- 组件打包的 babel 环境升级到 7+ 版本。参考[Babel 中文网](https://www.babeljs.cn/docs/)、[Babel7 学习笔记](https://segmentfault.com/a/1190000017162255)。
- 组件打包方式改为用 rollup 打包。
- 组件加载、卸载方式改为异步，Vue 侦听器改为代码动态创建。
- 组件命名重新规范，根据 Vue 推荐的[风格指南](https://cn.vuejs.org/v2/style-guide/)。
- 组件在线文档规范。

### 1.0.6 - 2019-11-19

#### 修改

- fixed [#27](https://github.com/zouyaoji/vue-cesium/issues/27)。

### 1.0.5 - 2019-11-01

V2 版本会做较大更新，我会尽量将此版本现有功能维护到稳定再更新下一个版本。

#### 修改

- 解决 1.60+ 版本面绘制问题。
