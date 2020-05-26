# 更新日志

## 2.1.4 - 2020-05-26

### 修改

- 量算和绘制组件 activeEvt 事件的触发顺序调整。
- 量算和绘制组件中绘制的面改为双面。
- 量算距离和量算面积组件解决距离单位km时数值不正确问题。
- `vc-navigation` 全屏模式下位置不正确的问题。

## 2.1.3 - 2020-05-14

### 修改

- `vc-viewer` 增加 removeCesiumScript 属性，确定`vc-viewer`在销毁时是否移除 CesiumJS 标签。fixed: #58
- `vc-navigation` 解决单页面添加多个`vc-viewer` 初始化不正常的问题。增加相机高度。增加heading, pitch, roll属性。

## 2.1.2 - 2020-05-13

### 增加

- `vc-navigation` 增加 legendChanged 事件，方便获取导航罗盘当前计算的比例尺。
- `vc-navigation` 增加 geolocation 事件，定位成功时返回定位结果。
- `vc-navigation` 鉴于国内谷歌浏览器定位被墙，增加高德定位 API 选项。
- `vc-viewer` 增加转发 viewr.infoBox.viewModel 的 `cameraClicked` 和 `closeClicked` 事件。

### 修改

- 量算工具和绘制工具支持贴地选项。
- `vc-datasource-custom` 解决名称获取异常问题。
- `vc-handler-draw-polygon` 和 `vc-handler-draw-polyline` 增加贴地选项 `clampToGround`。
- `vc-handler-draw-polygon` 的 `polygonColor` 改为 `polygonMaterial`，方便自定义绘制材质。

## 2.1.1 - 2020-05-05

### 修改

- `vc-viewer` 增加 timeline 时间本地化选项。
- `vc-datasource-custom` 可添加批量实体。
- `vc-entity` position 属性可以传 Function，相当于是 callback。

## 2.1.0 - 2020-04-22

### 增加

- `vc-graphics-tileset` 组件，对应 `Cesium3DTilesetGraphics`

### 修改

- 绘制组件 `drawEvt` 事件增加鼠标左键点击反馈。
- 量算组件 `measureEvt` 事件增加鼠标左键点击反馈。
- 量算组件增加 `movingEvt` 事件反馈鼠标所在屏幕坐标。
- `vc-primitive-3dtileset` 组件名称改为 `vc-primitive-tileset`（参考官方的实体命名，两者保持一致）。
- 优化导航控件。

## 2.0.9 - 2020-04-20

### 修改

- 量算组件和绘制组件互斥。
- `vc-handler-draw-polyline`组件可以定义绘制的线型。
- 绘制和量算的点可通过 `depthTest` 属性觉得是否参与深度检测。（默认不参与，即点、线不被地形和模型裁切，会一直显示）
- 加载超图平台客户端绘制的线被遮挡问题修复。

## 2.0.6 - 2020-03-17

### 增加

- 增加粒子系统组件 `vc-primitive-particle` 。
- 增加克里金色斑图组件 `vc-kriging-map`

### 修改

- `vc-navigation` 缩放控件的 `defaultResetView` 属性初始化时会覆盖 `vc-viewer` 的 `camera` 属性，增加一个属性 `overrideCamera` 来控制是否覆盖，默认是否。

## 2.0.5 - 2020-01-07

### 修改

- `vc-measure-distance` 组件增加一个属性 `arcType`, `0` 代表量算时绘制的空间直线, `1` 代表绘制的是测地线。
- 修复 [#48](https://github.com/zouyaoji/vue-cesium/issues/48).

### 2.0.4 - 2019-12-28

### 增加

- `vc-navigation` 组件增加一个定位按钮. 用的是浏览器定位 API `navigator.geolocation`, 谷歌浏览器被墙了，可能没效果， Firefox 和 Edge 测试工作正常。

### 修改

- 数据源聚合事件。
- 数据源属性合并成一个对象。
- `vc-provider-imagery-tianditu`组件域名换了.

## 2.0.3 - 2019-12-23

### 增加

- 国际化语言。 `Vue.use(VueCesium, {cesiumPath: cesiumPath, accessToken: accessToken, lang: lang})` 默认加载中文。
- `vc-navigation` 增加一个打印控件。

### 修改

- css 名称统一。
- 面积量算结果修正，用海伦公式计算表面积。
- 距离量算结果修正，之前简单的用了 `Cartesian3.distance` 计算的是两点之间的直线距离，忽略了地球曲率，并不合理，改为计算`测地距离(GeodesicDistance)`。

## 2.0.2 - 2019-12-19

### 增加

- `vc-navigation-sm` 超图罗盘样式组件。
- `vc-stage-process-post` 后期处理组件。
- `vc-collection-stage-process-post` 后期处理集合组件。
- `vc-provider-imagery-tiledcache` 组件，加载 TiledCache 瓦片。

### 修改

- `vc-navigation` 样式修改了，增加了位置信息。
- `vc-analysis-flood` -> `vc-analytics-flood`

## 2.0.1 - 2019-12-09

### 修改

- 各组件加载放在 Created 生命周期，方便通过获取`createdPromise`对象进行相关逻辑操作。
- 量算组件增加选项，指定测量线和文字标签是否始终显示。

### 增加

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

## 2.0.0 - 2019-12-02

### 增加

- `vc-provider-imagery-supermap` 加载超图 iServer 影像服务。
- `vc-provider-imagery-tianditu` 加载天地图 WMTS 影像服务。
- 支持 CDN 引用注册。

## 2.0.0-beta.3 - 2019-11-26

### 修改

- `@babel/runtime-corejs2` 依赖不正确。
- `vc-viewer` 组件有些部件位置异常。
- `vc-provider-imagery-wmts` 组件支持设置天地图服务 token。
- `vc-navigation` 组件样式文件打包。

## 2.0.0-beta.0 - 2019-11-20

这个版本将做了较大的更新，精简了代码，优化了组件加载速度，更优雅的支持局部引入，重新规范了组件命名，请谨慎升级，最新组件名称参考[在线文档](https://zouyaoji.top/vue-cesium/#/)。

### 修改

- 组件打包的 babel 环境升级到 7+ 版本。参考[Babel 中文网](https://www.babeljs.cn/docs/)、[Babel7 学习笔记](https://segmentfault.com/a/1190000017162255)。
- 组件打包方式改为用 rollup 打包。
- 组件加载、卸载方式改为异步，Vue 侦听器改为代码动态创建。
- 组件命名重新规范，根据 Vue 推荐的[风格指南](https://cn.vuejs.org/v2/style-guide/)。
- 组件在线文档规范。

## 1.0.6 - 2019-11-19

### 修改

- fixed [#27](https://github.com/zouyaoji/vue-cesium/issues/27)。

## 1.0.5 - 2019-11-01

V2 版本会做较大更新，我会尽量将此版本现有功能维护到稳定再更新下一个版本。

### 修改

- 解决 1.60+ 版本面绘制问题。
