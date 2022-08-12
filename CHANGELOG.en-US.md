## Changelog

### 3.0.17

_2022-08-12_

#### Bug 修复

- Fix some incorrect types definitions.
- Fix the problem of failing to get viewer through useVueCesium.

### 3.0.16

_2022-08-03_

#### Bug fixes

- Fixed a bug that the tip of the drawing measurement component cannot be dynamically modified.
- Fixed a bug that Cesium 1.96 version could not be loaded properly.
- Fixed a bug that some css was wrong.
- Fixed a bug that drawing circles and regular polygons is incorrect in 2D mode.

#### Breaking changes:

- Changed the access method of mars3d, configured via `mars3dConfig`. For details, see [vc-demo-mars3d](https://zouyaoji.top/vue-cesium/#/en-US/component/platforms/vc-demo-mars3d)

### 3.0.15

_2022-07-23_

#### Optimization

- `vc-overlay-dynamic` component model object keeps the last azimuth when stopped.
- Individual component types are defined incorrectly.

### 3.0.14

_2022-06-08_

#### New feature

- The `vc-viewer` component adds the `viewerCreator` property, and passes in a method for the initialization method of the viewer when loading a non-standard third-party Cesium library.

#### Bug fixes

- `vd-drawings` cannot obtain latitude and longitude when drawing points on the mobile terminal.
- The `vc-overlay-html` component's show attribute does not respond in time.

### 3.0.13

_2022-05-19_

#### New feature

- `vc-overview-map`: Add a rectangle indicating the view extent; Add the v-model property to control whether the control is expanded or collapsed.
- Support for multiple viewshed analysis.
- Drawing components support adding text labels.

#### Bug fixes

- Some component ts declaration errors.
- VcOverlayDynamic component entity object cannot convert Function to CallbackProperty property.
- The tooltip cannot be hidden when drawing icons and points.
- The default loaded cdn resources are changed to unpkg domain names.

### 3.0.12

_2022-04-12_

#### New feature

- Add the component `vc-imagery-provider-amap` to load amap, and the component `vc-imagery-provider-tencent` to Tencent map.
- Complete the types definitions for all components.

#### Bug fixes

- Compatible with the latest version of Cesium, replace logic using Cesium.when with native Promise.
- Fixed the problem that the mobile terminal cannot be terminated when drawing polygon and polyline, [#169](https://github.com/zouyaoji/vue-cesium/issues/169).

### 3.0.11

_2022-03-15_

#### Breaking changes:

- `createPromise` for each component has been renamed to `creatingPromise`.

#### New feature

- The `vc-overlay-dynamic` component adds a site arrival `stopArrived` event, a zoom method `zoomToOverlay` and a tracking method `trackOverlay`.
- The `vc-overlay-windmap` component is added to obtain UV values by latitude and longitude.
- Measure and draw components add support for responsive editing of individual object properties.[#167](https://github.com/zouyaoji/vue-cesium/issues/167)

#### Bug fixes

- The `vc-selection-indicator` component picks up the inaccurate position of the indicator on the aggregation icon.
- `vc-overlay-windmap` component initialization abnormal problem.
- The measurement drawing components `measurements` and `drawings` cannot be updated responsively.

### 3.0.10

_2022-02-26_

#### Bug fixes

- `useVueCesium` method is not available outside `vc-viewer`.
- When the `vc-selection-indicator` indicator is displayed, calling the `viewer.flyto` method causes the indicator position to be wrong.
- `vc-measurements` height measurement error.
- `vc-measurements`, `vc-drawings`, `vc-analyses` floating buttons cannot be displayed or hidden when they are initialized to be hidden.
- The clampToGround property of `vc-measurements` and `vc-drawings` is invalid.
- Failed to load latest dc-sdk.
- When the object property in the `entities` array of the data source component is Function, it cannot be converted to the Cesium.CallbackProperty property.

### 3.0.9

_2022-02-14_

#### Bug fixes

- The `projectionTransforms` property of the `vc-imagery-provider-baidu` component is invalid.
- `vc-selection-indicator` component crashes when picking up ParticleSystem; Picking up objects failed when looking up.
- The `baseLayerPicker` property of the `vc-viewer` component is invalid.
- Some component types are incorrectly defined.

### 3.0.8

_2022-02-08_

#### Bug fixes

- umd package demo is broken. [#149](https://github.com/zouyaoji/vue-cesium/issues/149)

### 3.0.7

_2022-01-30_

#### Bug fixes

- simplify build & compatible to build on windows.
- horizontal measurement editing error.

#### New feature

- Added [vc-analyses](https://zouyaoji.top/vue-cesium/#/en-US/component/controls/vc-analyses), includes line of sight analysis and field of view analysis.
- Added [`vc-collection-cloud`](https://zouyaoji.top/vue-cesium/#/zh-CN/component/primitives/vc-collection-cloud).
- `vc-imagery-provider-baidu` supports https protocol, Added customid attribute.
- `vc-primitive-tileset` added customShader props.

#### Breaking changes:

- The following components have been renamed, sorry for the inconvenience.

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

- The `material`, `depthFailMaterial` parameters in the `vc-mearements`, `vc-drawings` component related properties are changed to `appearance` and `depthFailAppearance`.

### 3.0.6

_2021-12-31_

#### Bug fixes

- webpack 5 project loadsh imports bugs on demand, [#144](https://github.com/zouyaoji/vue-cesium/issues/144).

#### New feature

- Added [`vc-analysis-flood`](https://zouyaoji.top/vue-cesium/#/en-US/component/analyses/vc-analysis-flood).

### 3.0.5

_2021-12-29_

#### Bug fixes

- Events cannot be triggered after adding modifiers[#140](https://github.com/zouyaoji/vue-cesium/issues/140).
- Building error of heatmapjs in the TS project.

### 3.0.4

_2021-12-23_

#### Bug fixes

- Change the heatmapjs source.
- The `vc-overlay-dynamic` component ignores the `nodeTransformations` property when listening to `dynamicOverlays` to avoid the circular reference problem reported by `JSON.stringify`.

### 3.0.3

_2021-12-18_

#### Bug fixes

- `vc-overlay-heatmap` throws `Cannot assign to read only property'data' of object'#<ImageData>'` error.
- The measurement & drawing component does not work properly on the SuperMap platform.

### 3.0.2-beta.13

_2021-12-08_

#### Bug fixes

- suppress Circular dependency errors.

#### New feature

- Support latest [volar](https://github.com/johnsoncodehk/volar)

#### Refactors

- Replace yarn with pnpm
- Renamed to `vc-overlay-echart` to `vc-overlay-echarts`, it requires additional installation of echart

### 3.0.2-beta.12

_2021-11-30_

#### Bug fixes

- The `vc-viewer` component Timeline Date Format Error.
- The `vc-drawings` and `vc-measurements` throws an an exception when clamptoGround is true and PrerenderDatas are assigned.

#### New feature

- The `vc-overlay-dynamic` component Add Speed Storage Variables and increases historical trajectory examples.

#### Breaking changes:

- The `vc-polygon` component removes the color attribute and supports the appearance parameter instead.

### 3.0.2-beta.11

_2021-11-25_

#### Bug fixes

- The `vc-selection-indicator` component picks up some primitive objects without indicators.
- Suppress synchronous GroundPrimitives DeveloperError of `PolygonPrimitive`.

#### New feature

- Add dynamic object component `vc-overlay-dynamic`, which is used to load and manage a group of dynamic entity objects.

### 3.0.2-beta.10

_2021-11-22_

#### New feature

- Added the `polygonHierarchy` attribute to the `vc-polygon` component to support island hole polygons.

#### Bug fixes

- `vc-collection-xxx` primitive collection component listening logic error.
- `vc-polygon` component object pick up bug & `depthFailColor` property change bug.

### 3.0.2-beta.9

_2021-11-20_

#### New feature

- DataSource component `vc-datasource-xxx` can use `entities` to pass in custom attributes.
- Added `vc-polygon` component, and supports batch management of a group of polygon primitives with `vc-collection-primitive`.

### 3.0.2-beta.8

_2021-11-18_

#### Bug fixes

- Lower the z-index of each control component to prevent them from exceeding some modal dialog because the z-index is too high.
- Fix the problem that the makeMaterial method judges the logic error.

### 3.0.2-beta.7

_2021-11-11_

#### Bug fixes

- The active state of `vc-drawngs` and `vc-measurement` does not work.

### 3.0.2-beta.6

_2021-11-10_

#### Bug fixes

- `vc-measurements` and `vc-drawings` modify the assignment methods of default options.

### 3.0.2-beta.5

_2021-11-07_

#### Bug fixes

- Fix [#126](https://github.com/zouyaoji/vue-cesium/issues/126), i18n configuration does not work.

### 3.0.2-beta.4

_2021-11-04_

#### New feature

- `vc-measurements` and `vc-drawings` add a `preRenderDatas` prop to preload cesiumObject. See the [document](https://zouyaoji.top/vue-cesium/#/en-US/component/tools/vc-drawings) for details.

#### Bug fixes

- `vc-selection-indicator` expose animateAppear & animateDepart as public methods, otherwise, it cannot be called externally.

### 3.0.2-beta.3

_2021-10-29_

#### New feature

- The `vc-measurements` component adds regular polygon and circle measurement.
- The `vc-drawings` component adds `pin` and `regular` drawing.
- Added `vc-overlay-windmap` component.

#### Optimization

- Refactor `vc-measurements` and `vc-drawings`, streamline the code. -`vc-selection-indicator` supports primitive picking.

#### Bug fixes

- fix: compile to esm package errors.

### 3.0.2-beta.2

_2021-10-12_

#### New feature

- The `vc-measurements` component added rectangle measurement.
- Added `vc-overlay-echarts` component.

#### Bug fixes

- Change global to globalThis to avoid the error that global is undefined.
- Fixed the problem that the pictures of style files are lost after packaging.

### 3.0.2-beta.1

_2021-10-10_

#### Breaking changes:

- Making the project more clear via reorganizing the code. Better organizable code. Make the publish bundle more legit and clear. Because that this breaking change mainly impact publish bundle, if you were using the full bundled style file, you will going to change the resource path in your project:

```js
  --- import 'vue-cesium/lib/theme-default/index.css'
  +++ import 'vue-cesium/dist/index.css'
```

#### Bug fixes

- Fix the problem of registering errors for each component on demand.
- Fix the problem of picking up errors in the `vc-selection-indicator` component.

### 3.0.1-beta.15

_2021-09-09_

#### Bug fixes

- The `vc-provider-imagery-tianditu` component reporting problem in Cesium@1.85 version.
- The removeEmpty method loses the attributes on the prototype chain and causes the material to report an error.

#### Optimization

- The CDN address of the Cesium library is changed to `https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js`.

### 3.0.1-beta.14

_2021-09-03_

#### Bug fixes

- The problem of using EarthSDK to report an error, #121.

#### Optimization

- The point of `VcDrawings` and `VcMeasurements` component is rendered to the top to avoid the point being covered by the polygon and cannot be picked up and make it can not be edited.

### 3.0.1-beta.13

_2021-08-31_

#### New feature

- Adding the properties of delayed appearance and delayed disappearance for the edit buttons of `VcDrawings` and `VcMeasurements` components.

#### Bug fixes

- The abnormal problems after removing nodes of `VcDrawings` and `VcMeasurements`.

### 3.0.1-beta.12

_2021-08-23_

#### Bug fixes

- `vc-drawings` Fix the crash when drawing circles and rectangles.

### 3.0.1-beta.11

_2021-08-20_

#### New feature

- Do some compatibility processing for the 1.83+ version of `terrainExaggeration`.
- The datasource component adds a `destroy` attribute to indicate whether the datasource is destroyed when it is removed.

#### Bug fixes

- The unified calculation involving the use of `Ellipsoid.WGS84` is changed to the calculation using `scene.globe.ellipsoid` to avoid problems caused by Ellipsoid not WGS84 in some cases, such as the development of a lunar platform.
- The `vc-viewer` component supports `skyBox` and `skyAtmosphere` types, adding Boolean.

#### Optimization

- Adding `editorEvt` and `mouseEvt` events to measuring and drawing components, remove the default and modify the mouse cursor style during drawing.

### 3.0.1-beta.10

_2021-07-13_

#### New feature

- Draw a rectangle to add a rectangle that is true south and true north.

### 3.0.1-beta.9

_2021-07-07_

#### Bug fixes

- Fixed the issue that the `VcProviderImagerySupermap` component on the Supermap platform crashed when the layer was removed.
- Fixed the issue that the `VcNavigation` component positioning error in 2D and Columbus views, #118.
- Fixed the issue that the `VcViewer` component pass non-Prop Attributes and throws warnings.
- Fixed the issue when picking up outside earth viewer the `VcSelectionIndicator` throws an error.

### 3.0.1-beta.8

_2021-06-28_

#### New feature

- The polyline and polygon of vc-drawings, vc-measurements support the setting of display and hidden.
- The height of the coordinate measuring component supports absolute height and relative height.

#### Bug fixes

- The mouseover and mouseout events of the GeoJSON data source component trigger errors.
- The distance measurement and area measurement cancel the drawing of the previous point occasionally crash.

### 3.0.1-beta.7

_2021-06-13_

#### New feature

- `vc-selection-indicator` a custom selector component to replace the selectionIndicator that comes with Cesium.
- `vc-ajax-bar` http request progress bar control.
- `vc-drawings` supports grounding, and add the function of drawing rectangles and circles.

#### Bug fixes

- When the `infoBox` property of `vc-viewer` is set to `false`, the component is loaded abnormally.
- Fix the problem that the first point of the area object editing in the measuring component and drawing component is abnormal.

### 3.0.1-beta.6

_2021-06-03_

#### New feature

- `vc-overlay-heatmap`, The heat map component is added, which can be used to visualize factors such as temperature and precipitation.
- `vc-measurements`, Add friendly measuring tools.
- `vc-drawings`, Add friendly drawing tools.
- `vc-post-process-stage` Add post-processing component.
- `vc-post-process-stage-scan` Add post-processing scanning component.
- `vc-post-process-stage-collection` Add post-processing assembly component.
- `vc-overview-map` Add overview map control component.
- Added compatible third-party [mars3d](https://zouyaoji.top/vue-cesium/#/en-US/component/platforms/vc-demo-mars3d) library.
- Added compatible third-party [dc-sdk](https://zouyaoji.top/vue-cesium/#/en-US/component/platforms/vc-demo-dc-sdk) library.

### 3.0.1-beta.5.2

_2021-04-29_

#### New feature

- `vc-overlay-html`, Load HTML element overlays by geographic location.

#### Optimization

- Improve some English documents.
- The language of Vetur's smart prompt is changed to English by default.

### 3.0.1-beta.4

_2021-04-26_

#### Bug fixes

- Document search function.
- The intellisense of Vetur is invalid.

### 3.0.1-beta.3

_2021-04-23_

#### New feature

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

#### New feature

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

#### New feature

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

#### New feature

- Added `vc-viewer` component.
- Refactor and upgrade the `vc-navigation` component, separate `vc-compass`, `vc-zoom-control`, `vc-print`, `vc-my-location`, `vc-status-bar`, `vc -distance-legend` is an independent component.
- Added `vc-entity` component.

#### Chore updates

- Adapt to vue 3.0, refer to the Element Plus project, written in TypeScript, and manage the project in lerna.
