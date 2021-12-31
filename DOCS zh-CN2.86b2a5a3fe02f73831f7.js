(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VcAnalysisFlood", function() { return /* reexport */ analyses["a" /* VcAnalysisFlood */]; });
__webpack_require__.d(__webpack_exports__, "VcConfigProvider", function() { return /* reexport */ config_provider["a" /* VcConfigProvider */]; });
__webpack_require__.d(__webpack_exports__, "VcCompass", function() { return /* reexport */ controls["a" /* VcCompass */]; });
__webpack_require__.d(__webpack_exports__, "VcZoomControl", function() { return /* reexport */ controls["k" /* VcZoomControl */]; });
__webpack_require__.d(__webpack_exports__, "VcPrint", function() { return /* reexport */ controls["h" /* VcPrint */]; });
__webpack_require__.d(__webpack_exports__, "VcMyLocation", function() { return /* reexport */ controls["d" /* VcMyLocation */]; });
__webpack_require__.d(__webpack_exports__, "VcStatusBar", function() { return /* reexport */ controls["j" /* VcStatusBar */]; });
__webpack_require__.d(__webpack_exports__, "VcDistanceLegend", function() { return /* reexport */ controls["c" /* VcDistanceLegend */]; });
__webpack_require__.d(__webpack_exports__, "VcNavigation", function() { return /* reexport */ controls["e" /* VcNavigation */]; });
__webpack_require__.d(__webpack_exports__, "VcCompassSm", function() { return /* reexport */ controls["b" /* VcCompassSm */]; });
__webpack_require__.d(__webpack_exports__, "VcZoomControlSm", function() { return /* reexport */ controls["l" /* VcZoomControlSm */]; });
__webpack_require__.d(__webpack_exports__, "VcNavigationSm", function() { return /* reexport */ controls["f" /* VcNavigationSm */]; });
__webpack_require__.d(__webpack_exports__, "VcOverviewMap", function() { return /* reexport */ controls["g" /* VcOverviewMap */]; });
__webpack_require__.d(__webpack_exports__, "VcSelectionIndicator", function() { return /* reexport */ controls["i" /* VcSelectionIndicator */]; });
__webpack_require__.d(__webpack_exports__, "VcDatasourceCustom", function() { return /* reexport */ datasources["a" /* VcDatasourceCustom */]; });
__webpack_require__.d(__webpack_exports__, "VcDatasourceCzml", function() { return /* reexport */ datasources["b" /* VcDatasourceCzml */]; });
__webpack_require__.d(__webpack_exports__, "VcDatasourceGeojson", function() { return /* reexport */ datasources["c" /* VcDatasourceGeojson */]; });
__webpack_require__.d(__webpack_exports__, "VcDatasourceKml", function() { return /* reexport */ datasources["d" /* VcDatasourceKml */]; });
__webpack_require__.d(__webpack_exports__, "VcDrawings", function() { return /* reexport */ drawings["a" /* VcDrawings */]; });
__webpack_require__.d(__webpack_exports__, "VcEntity", function() { return /* reexport */ entity["a" /* VcEntity */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryBox", function() { return /* reexport */ geometries["a" /* VcGeometryBox */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryBoxOutline", function() { return /* reexport */ geometries["b" /* VcGeometryBoxOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryCircle", function() { return /* reexport */ geometries["c" /* VcGeometryCircle */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryCircleOutline", function() { return /* reexport */ geometries["d" /* VcGeometryCircleOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryPolygonCoplanar", function() { return /* reexport */ geometries["r" /* VcGeometryPolygonCoplanar */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryPolygonCoplanarOutline", function() { return /* reexport */ geometries["s" /* VcGeometryPolygonCoplanarOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryCorridor", function() { return /* reexport */ geometries["e" /* VcGeometryCorridor */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryCorridorOutline", function() { return /* reexport */ geometries["f" /* VcGeometryCorridorOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryCylinder", function() { return /* reexport */ geometries["g" /* VcGeometryCylinder */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryCylinderOutline", function() { return /* reexport */ geometries["h" /* VcGeometryCylinderOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryEllipse", function() { return /* reexport */ geometries["i" /* VcGeometryEllipse */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryEllipseOutline", function() { return /* reexport */ geometries["j" /* VcGeometryEllipseOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryEllipsoid", function() { return /* reexport */ geometries["k" /* VcGeometryEllipsoid */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryEllipsoidOutline", function() { return /* reexport */ geometries["l" /* VcGeometryEllipsoidOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryFrustum", function() { return /* reexport */ geometries["m" /* VcGeometryFrustum */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryFrustumOutline", function() { return /* reexport */ geometries["n" /* VcGeometryFrustumOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryPolylineGround", function() { return /* reexport */ geometries["v" /* VcGeometryPolylineGround */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryPlane", function() { return /* reexport */ geometries["o" /* VcGeometryPlane */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryPlaneOutline", function() { return /* reexport */ geometries["p" /* VcGeometryPlaneOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryPolygon", function() { return /* reexport */ geometries["q" /* VcGeometryPolygon */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryPolygonOutline", function() { return /* reexport */ geometries["t" /* VcGeometryPolygonOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryPolyline", function() { return /* reexport */ geometries["u" /* VcGeometryPolyline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryPolylineVolume", function() { return /* reexport */ geometries["x" /* VcGeometryPolylineVolume */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryPolylineVolumeOutline", function() { return /* reexport */ geometries["y" /* VcGeometryPolylineVolumeOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryRectangle", function() { return /* reexport */ geometries["z" /* VcGeometryRectangle */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryRectangleOutline", function() { return /* reexport */ geometries["A" /* VcGeometryRectangleOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryPolylineSimple", function() { return /* reexport */ geometries["w" /* VcGeometryPolylineSimple */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometrySphere", function() { return /* reexport */ geometries["B" /* VcGeometrySphere */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometrySphereOutline", function() { return /* reexport */ geometries["C" /* VcGeometrySphereOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryWall", function() { return /* reexport */ geometries["D" /* VcGeometryWall */]; });
__webpack_require__.d(__webpack_exports__, "VcGeometryWallOutline", function() { return /* reexport */ geometries["E" /* VcGeometryWallOutline */]; });
__webpack_require__.d(__webpack_exports__, "VcInstanceGeometry", function() { return /* reexport */ geometry_instance["a" /* VcInstanceGeometry */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsBillboard", function() { return /* reexport */ graphics["a" /* VcGraphicsBillboard */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsBox", function() { return /* reexport */ graphics["b" /* VcGraphicsBox */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsCorridor", function() { return /* reexport */ graphics["c" /* VcGraphicsCorridor */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsCylinder", function() { return /* reexport */ graphics["d" /* VcGraphicsCylinder */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsEllipse", function() { return /* reexport */ graphics["e" /* VcGraphicsEllipse */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsEllipsoid", function() { return /* reexport */ graphics["f" /* VcGraphicsEllipsoid */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsLabel", function() { return /* reexport */ graphics["g" /* VcGraphicsLabel */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsModel", function() { return /* reexport */ graphics["h" /* VcGraphicsModel */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsPath", function() { return /* reexport */ graphics["i" /* VcGraphicsPath */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsPlane", function() { return /* reexport */ graphics["j" /* VcGraphicsPlane */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsPoint", function() { return /* reexport */ graphics["k" /* VcGraphicsPoint */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsPolygon", function() { return /* reexport */ graphics["l" /* VcGraphicsPolygon */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsPolyline", function() { return /* reexport */ graphics["m" /* VcGraphicsPolyline */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsPolylineVolume", function() { return /* reexport */ graphics["n" /* VcGraphicsPolylineVolume */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsRectangle", function() { return /* reexport */ graphics["o" /* VcGraphicsRectangle */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsTileset", function() { return /* reexport */ graphics["p" /* VcGraphicsTileset */]; });
__webpack_require__.d(__webpack_exports__, "VcGraphicsWall", function() { return /* reexport */ graphics["q" /* VcGraphicsWall */]; });
__webpack_require__.d(__webpack_exports__, "VcLayerImagery", function() { return /* reexport */ imagery_layer["a" /* VcLayerImagery */]; });
__webpack_require__.d(__webpack_exports__, "VcMeasurements", function() { return /* reexport */ measurements["a" /* VcMeasurements */]; });
__webpack_require__.d(__webpack_exports__, "VcOverlayHtml", function() { return /* reexport */ overlays["d" /* VcOverlayHtml */]; });
__webpack_require__.d(__webpack_exports__, "VcOverlayHeatmap", function() { return /* reexport */ overlays["c" /* VcOverlayHeatmap */]; });
__webpack_require__.d(__webpack_exports__, "VcOverlayEcharts", function() { return /* reexport */ overlays["b" /* VcOverlayEcharts */]; });
__webpack_require__.d(__webpack_exports__, "VcOverlayWind", function() { return /* reexport */ overlays["e" /* VcOverlayWind */]; });
__webpack_require__.d(__webpack_exports__, "VcOverlayDynamic", function() { return /* reexport */ overlays["a" /* VcOverlayDynamic */]; });
__webpack_require__.d(__webpack_exports__, "VcPostProcessStage", function() { return /* reexport */ post_processes["a" /* VcPostProcessStage */]; });
__webpack_require__.d(__webpack_exports__, "VcPostProcessStageScan", function() { return /* reexport */ post_processes["c" /* VcPostProcessStageScan */]; });
__webpack_require__.d(__webpack_exports__, "VcPostProcessStageCollection", function() { return /* reexport */ post_processes["b" /* VcPostProcessStageCollection */]; });
__webpack_require__.d(__webpack_exports__, "VcCollectionBillboard", function() { return /* reexport */ primitive_collections["b" /* VcCollectionBillboard */]; });
__webpack_require__.d(__webpack_exports__, "VcCollectionLabel", function() { return /* reexport */ primitive_collections["c" /* VcCollectionLabel */]; });
__webpack_require__.d(__webpack_exports__, "VcCollectionPoint", function() { return /* reexport */ primitive_collections["d" /* VcCollectionPoint */]; });
__webpack_require__.d(__webpack_exports__, "VcCollectionPolyline", function() { return /* reexport */ primitive_collections["e" /* VcCollectionPolyline */]; });
__webpack_require__.d(__webpack_exports__, "VcCollectionPrimitive", function() { return /* reexport */ primitive_collections["f" /* VcCollectionPrimitive */]; });
__webpack_require__.d(__webpack_exports__, "VcBillboard", function() { return /* reexport */ primitive_collections["a" /* VcBillboard */]; });
__webpack_require__.d(__webpack_exports__, "VcLabel", function() { return /* reexport */ primitive_collections["g" /* VcLabel */]; });
__webpack_require__.d(__webpack_exports__, "VcPoint", function() { return /* reexport */ primitive_collections["h" /* VcPoint */]; });
__webpack_require__.d(__webpack_exports__, "VcPolyline", function() { return /* reexport */ primitive_collections["j" /* VcPolyline */]; });
__webpack_require__.d(__webpack_exports__, "VcPolygon", function() { return /* reexport */ primitive_collections["i" /* VcPolygon */]; });
__webpack_require__.d(__webpack_exports__, "VcPrimitiveClassification", function() { return /* reexport */ primitives["b" /* VcPrimitiveClassification */]; });
__webpack_require__.d(__webpack_exports__, "VcPrimitiveGround", function() { return /* reexport */ primitives["c" /* VcPrimitiveGround */]; });
__webpack_require__.d(__webpack_exports__, "VcPrimitiveGroundPolyline", function() { return /* reexport */ primitives["d" /* VcPrimitiveGroundPolyline */]; });
__webpack_require__.d(__webpack_exports__, "VcPrimitiveModel", function() { return /* reexport */ primitives["e" /* VcPrimitiveModel */]; });
__webpack_require__.d(__webpack_exports__, "VcPrimitive", function() { return /* reexport */ primitives["a" /* VcPrimitive */]; });
__webpack_require__.d(__webpack_exports__, "VcPrimitiveTileset", function() { return /* reexport */ primitives["g" /* VcPrimitiveTileset */]; });
__webpack_require__.d(__webpack_exports__, "VcPrimitiveParticle", function() { return /* reexport */ primitives["f" /* VcPrimitiveParticle */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryArcgis", function() { return /* reexport */ providers["a" /* VcProviderImageryArcgis */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryBaidumap", function() { return /* reexport */ providers["b" /* VcProviderImageryBaidumap */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryBingmaps", function() { return /* reexport */ providers["c" /* VcProviderImageryBingmaps */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryGoogle", function() { return /* reexport */ providers["d" /* VcProviderImageryGoogle */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryGrid", function() { return /* reexport */ providers["e" /* VcProviderImageryGrid */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryIon", function() { return /* reexport */ providers["f" /* VcProviderImageryIon */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryMapbox", function() { return /* reexport */ providers["g" /* VcProviderImageryMapbox */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryOsm", function() { return /* reexport */ providers["h" /* VcProviderImageryOsm */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImagerySingletile", function() { return /* reexport */ providers["i" /* VcProviderImagerySingletile */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImagerySupermap", function() { return /* reexport */ providers["j" /* VcProviderImagerySupermap */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryTianditu", function() { return /* reexport */ providers["k" /* VcProviderImageryTianditu */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryTileCoordinates", function() { return /* reexport */ providers["l" /* VcProviderImageryTileCoordinates */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryTms", function() { return /* reexport */ providers["n" /* VcProviderImageryTms */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryTiledcache", function() { return /* reexport */ providers["m" /* VcProviderImageryTiledcache */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryUrltemplate", function() { return /* reexport */ providers["o" /* VcProviderImageryUrltemplate */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryWms", function() { return /* reexport */ providers["p" /* VcProviderImageryWms */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderImageryWmts", function() { return /* reexport */ providers["q" /* VcProviderImageryWmts */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderTerrainCesium", function() { return /* reexport */ providers["s" /* VcProviderTerrainCesium */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderTerrainArcgis", function() { return /* reexport */ providers["r" /* VcProviderTerrainArcgis */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderTerrainVrTheworld", function() { return /* reexport */ providers["u" /* VcProviderTerrainVrTheworld */]; });
__webpack_require__.d(__webpack_exports__, "VcProviderTerrainTianditu", function() { return /* reexport */ providers["t" /* VcProviderTerrainTianditu */]; });
__webpack_require__.d(__webpack_exports__, "VcBtn", function() { return /* reexport */ ui["b" /* VcBtn */]; });
__webpack_require__.d(__webpack_exports__, "VcIcon", function() { return /* reexport */ ui["e" /* VcIcon */]; });
__webpack_require__.d(__webpack_exports__, "VcSpinnerBall", function() { return /* reexport */ ui["h" /* VcSpinnerBall */]; });
__webpack_require__.d(__webpack_exports__, "VcSpinnerBars", function() { return /* reexport */ ui["i" /* VcSpinnerBars */]; });
__webpack_require__.d(__webpack_exports__, "VcSpinnerDots", function() { return /* reexport */ ui["j" /* VcSpinnerDots */]; });
__webpack_require__.d(__webpack_exports__, "VcSpinnerGears", function() { return /* reexport */ ui["k" /* VcSpinnerGears */]; });
__webpack_require__.d(__webpack_exports__, "VcSpinnerHourglass", function() { return /* reexport */ ui["l" /* VcSpinnerHourglass */]; });
__webpack_require__.d(__webpack_exports__, "VcSpinnerIos", function() { return /* reexport */ ui["m" /* VcSpinnerIos */]; });
__webpack_require__.d(__webpack_exports__, "VcSpinnerOrbit", function() { return /* reexport */ ui["n" /* VcSpinnerOrbit */]; });
__webpack_require__.d(__webpack_exports__, "VcSpinnerOval", function() { return /* reexport */ ui["o" /* VcSpinnerOval */]; });
__webpack_require__.d(__webpack_exports__, "VcSpinnerPuff", function() { return /* reexport */ ui["p" /* VcSpinnerPuff */]; });
__webpack_require__.d(__webpack_exports__, "VcSpinnerRings", function() { return /* reexport */ ui["q" /* VcSpinnerRings */]; });
__webpack_require__.d(__webpack_exports__, "VcSpinnerTail", function() { return /* reexport */ ui["r" /* VcSpinnerTail */]; });
__webpack_require__.d(__webpack_exports__, "VcSpinner", function() { return /* reexport */ ui["g" /* VcSpinner */]; });
__webpack_require__.d(__webpack_exports__, "VcTooltip", function() { return /* reexport */ ui["s" /* VcTooltip */]; });
__webpack_require__.d(__webpack_exports__, "VcAjaxBar", function() { return /* reexport */ ui["a" /* VcAjaxBar */]; });
__webpack_require__.d(__webpack_exports__, "VcSkeleton", function() { return /* reexport */ ui["f" /* VcSkeleton */]; });
__webpack_require__.d(__webpack_exports__, "VcFab", function() { return /* reexport */ ui["c" /* VcFab */]; });
__webpack_require__.d(__webpack_exports__, "VcFabAction", function() { return /* reexport */ ui["d" /* VcFabAction */]; });
__webpack_require__.d(__webpack_exports__, "VcViewer", function() { return /* reexport */ viewer["a" /* VcViewer */]; });
__webpack_require__.d(__webpack_exports__, "Ripple", function() { return /* reexport */ directives["a" /* Ripple */]; });
__webpack_require__.d(__webpack_exports__, "useCommon", function() { return /* reexport */ composables["d" /* useCommon */]; });
__webpack_require__.d(__webpack_exports__, "useDatasources", function() { return /* reexport */ composables["e" /* useDatasources */]; });
__webpack_require__.d(__webpack_exports__, "useEvents", function() { return /* reexport */ composables["f" /* useEvents */]; });
__webpack_require__.d(__webpack_exports__, "useGeometries", function() { return /* reexport */ composables["g" /* useGeometries */]; });
__webpack_require__.d(__webpack_exports__, "useGraphics", function() { return /* reexport */ composables["h" /* useGraphics */]; });
__webpack_require__.d(__webpack_exports__, "useHandler", function() { return /* reexport */ composables["i" /* useHandler */]; });
__webpack_require__.d(__webpack_exports__, "usePrimitiveCollectionItems", function() { return /* reexport */ composables["m" /* usePrimitiveCollectionItems */]; });
__webpack_require__.d(__webpack_exports__, "usePrimitiveCollections", function() { return /* reexport */ composables["n" /* usePrimitiveCollections */]; });
__webpack_require__.d(__webpack_exports__, "usePrimitives", function() { return /* reexport */ composables["o" /* usePrimitives */]; });
__webpack_require__.d(__webpack_exports__, "useProviders", function() { return /* reexport */ composables["p" /* useProviders */]; });
__webpack_require__.d(__webpack_exports__, "useVueCesium", function() { return /* reexport */ composables["q" /* useVueCesium */]; });
__webpack_require__.d(__webpack_exports__, "useLocaleProps", function() { return /* reexport */ composables["l" /* useLocaleProps */]; });
__webpack_require__.d(__webpack_exports__, "LocaleInjectionKey", function() { return /* reexport */ composables["a" /* LocaleInjectionKey */]; });
__webpack_require__.d(__webpack_exports__, "useLocale", function() { return /* reexport */ composables["j" /* useLocale */]; });
__webpack_require__.d(__webpack_exports__, "localeProviderMaker", function() { return /* reexport */ composables["b" /* localeProviderMaker */]; });
__webpack_require__.d(__webpack_exports__, "useLocaleInject", function() { return /* reexport */ composables["k" /* useLocaleInject */]; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ composables["c" /* t */]; });
__webpack_require__.d(__webpack_exports__, "VisibilityState", function() { return /* reexport */ shared["h" /* VisibilityState */]; });
__webpack_require__.d(__webpack_exports__, "DrawStatus", function() { return /* reexport */ shared["d" /* DrawStatus */]; });
__webpack_require__.d(__webpack_exports__, "MeasureUnits", function() { return /* reexport */ shared["f" /* MeasureUnits */]; });
__webpack_require__.d(__webpack_exports__, "DistanceUnits", function() { return /* reexport */ shared["c" /* DistanceUnits */]; });
__webpack_require__.d(__webpack_exports__, "AreaUnits", function() { return /* reexport */ shared["b" /* AreaUnits */]; });
__webpack_require__.d(__webpack_exports__, "VolumeUnits", function() { return /* reexport */ shared["i" /* VolumeUnits */]; });
__webpack_require__.d(__webpack_exports__, "AngleUnits", function() { return /* reexport */ shared["a" /* AngleUnits */]; });
__webpack_require__.d(__webpack_exports__, "PolygonPrimitive", function() { return /* reexport */ shared["g" /* PolygonPrimitive */]; });
__webpack_require__.d(__webpack_exports__, "DynamicOverlay", function() { return /* reexport */ shared["e" /* DynamicOverlay */]; });
__webpack_require__.d(__webpack_exports__, "makeInstaller", function() { return /* reexport */ make_installer["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ defaults["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "install", function() { return /* binding */ install; });
__webpack_require__.d(__webpack_exports__, "version", function() { return /* binding */ version; });

// EXTERNAL MODULE: ./packages/vue-cesium/defaults.ts + 1 modules
var defaults = __webpack_require__(537);

// EXTERNAL MODULE: ./packages/components/analyses/index.ts + 1 modules
var analyses = __webpack_require__(155);

// EXTERNAL MODULE: ./packages/components/config-provider/index.ts + 1 modules
var config_provider = __webpack_require__(154);

// EXTERNAL MODULE: ./packages/components/controls/index.ts + 126 modules
var controls = __webpack_require__(41);

// EXTERNAL MODULE: ./packages/components/datasources/index.ts + 4 modules
var datasources = __webpack_require__(94);

// EXTERNAL MODULE: ./packages/components/drawings/index.ts + 8 modules
var drawings = __webpack_require__(152);

// EXTERNAL MODULE: ./packages/components/entity/index.ts + 1 modules
var entity = __webpack_require__(99);

// EXTERNAL MODULE: ./packages/components/geometries/index.ts + 31 modules
var geometries = __webpack_require__(14);

// EXTERNAL MODULE: ./packages/components/geometry-instance/index.ts + 1 modules
var geometry_instance = __webpack_require__(44);

// EXTERNAL MODULE: ./packages/components/graphics/index.ts + 17 modules
var graphics = __webpack_require__(31);

// EXTERNAL MODULE: ./packages/components/imagery-layer/index.ts + 2 modules
var imagery_layer = __webpack_require__(98);

// EXTERNAL MODULE: ./packages/components/measurements/index.ts + 11 modules
var measurements = __webpack_require__(151);

// EXTERNAL MODULE: ./packages/components/overlays/index.ts + 561 modules
var overlays = __webpack_require__(35);

// EXTERNAL MODULE: ./packages/components/post-processes/index.ts + 8 modules
var post_processes = __webpack_require__(100);

// EXTERNAL MODULE: ./packages/components/primitive-collections/index.ts + 10 modules
var primitive_collections = __webpack_require__(18);

// EXTERNAL MODULE: ./packages/components/primitives/index.ts + 7 modules
var primitives = __webpack_require__(28);

// EXTERNAL MODULE: ./packages/components/providers/index.ts + 30 modules
var providers = __webpack_require__(25);

// EXTERNAL MODULE: ./packages/components/ui/index.ts + 38 modules
var ui = __webpack_require__(9);

// EXTERNAL MODULE: ./packages/components/viewer/index.ts + 5 modules
var viewer = __webpack_require__(97);

// CONCATENATED MODULE: ./packages/components/index.ts
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2021-12-31 11:48:08
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\index.ts
 */


















// EXTERNAL MODULE: ./packages/directives/index.ts + 1 modules
var directives = __webpack_require__(153);

// EXTERNAL MODULE: ./packages/composables/index.ts + 9 modules
var composables = __webpack_require__(4);

// EXTERNAL MODULE: ./packages/shared/index.ts + 5 modules
var shared = __webpack_require__(16);

// EXTERNAL MODULE: ./packages/vue-cesium/make-installer.ts
var make_installer = __webpack_require__(150);

// CONCATENATED MODULE: ./packages/vue-cesium/index.ts
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-09-17 14:23:37
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\vue-cesium\index.ts
 */







const install = defaults["a" /* default */].install;
const version = defaults["a" /* default */].version;

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/analyses/vc-measurements.md?vue&type=template&id=2db735df

const vc_measurementsvue_type_template_id_2db735df_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_measurementsvue_type_template_id_2db735df_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcMeasurements ");

const vc_measurementsvue_type_template_id_2db735df_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "加载量算工具组件，包含距离量算、三角量算、折线距离量算、水平距离量算、垂直距离量算、高度量算、面积量算、坐标量算。", -1);

const vc_measurementsvue_type_template_id_2db735df_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要引入样式文件: "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "import 'vue-cesium/default/index.css';")], -1);

const vc_measurementsvue_type_template_id_2db735df_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "提示：3.0 版本已将量算组件重构成一个组件，简约的同时支持自定义风格，并优化了交互。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "通常是左键绘制，右键取消最后绘制的点，双击结束当前绘制。 其中，水平测量还可以按住 shift 在固定方向绘制。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "ctrl + 右键取消绘制。")], -1);

const vc_measurementsvue_type_template_id_2db735df_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const vc_measurementsvue_type_template_id_2db735df_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "量算组件的基础用法。", -1);

const vc_measurementsvue_type_template_id_2db735df_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measurements"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加量算工具。")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- 修改定位 和 位置偏移 -->\n    <vc-measurements\n      @drawEvt=\"drawEvt\"\n      @activeEvt=\"activeEvt\"\n      @editorEvt=\"editorEvt\"\n      @mouseEvt=\"mouseEvt\"\n      ref=\"measurementsRef\"\n      position=\"bottom-left\"\n      :clampToGround=\"clampToGround\"\n      :mainFabOpts=\"measurementFabOptions1\"\n      :offset=\"[20, 80]\"\n      :editable=\"editable\"\n      @ready=\"drawingsReadyDefault\"\n      :pointMeasurementOpts=\"pointMeasurementOpts\"\n      :areaMeasurementOpts=\"areaMeasurementOpts\"\n    >\n    </vc-measurements>\n    <!-- 修改加载的量算实例 -->\n    <vc-measurements\n      ref=\"measurementsRef2\"\n      position=\"top-right\"\n      :mainFabOpts=\"measurementFabOptions2\"\n      :editable=\"editable\"\n      :measurements=\"measurements\"\n      activeColor=\"yellow\"\n    >\n    </vc-measurements>\n    <!-- 修改量算风格和精度 -->\n    <vc-measurements\n      ref=\"measurementsRef3\"\n      position=\"top-left\"\n      :mainFabOpts=\"measurementFabOptions3\"\n      :distanceMeasurementOpts=\"distanceMeasurementOpts3\"\n      :componentDistanceMeasurementOpts=\"componentDistanceMeasurementOpts3\"\n      :pointMeasurementOpts=\"pointMeasurementOpts3\"\n      :editable=\"editable\"\n      :offset=\"[20, 80]\"\n    >\n    </vc-measurements>\n    <!-- 结合 slot 改变默认 UI -->\n    <vc-measurements\n      ref=\"measurementsRef4\"\n      position=\"bottom-left\"\n      :mainFabOpts=\"measurementFabOptions4\"\n      :offset=\"[0, 20]\"\n      :editable=\"editable\"\n      @ready=\"measurementsReady\"\n    >\n      <template #body>\n        <div class=\"custom-measurements\">\n          <el-row>\n            <el-button\n              v-for=\"(drawingActionInstance, index) in drawingActionInstances\"\n              :key=\"index\"\n              :type=\"drawingActionInstance.isActive ? 'success' : 'primary'\"\n              round\n              @click=\"toggle(drawingActionInstance)\"\n              >{{drawingActionInstance.tip.replace('量算', '')}}</el-button\n            >\n            <el-button type=\"danger\" round @click=\"clear\">清除</el-button>\n          </el-row>\n        </div>\n      </template>\n    </vc-measurements>\n    <vc-primitive-tileset\n      url=\"https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json\"\n      @readyPromise=\"onTilesetReady\"\n    ></vc-primitive-tileset>\n    <vc-layer-imagery>\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" :maximumLevel=\"17\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-provider-terrain-cesium v-if=\"addTerrain\"></vc-provider-terrain-cesium>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-checkbox v-model=\"editable\">可编辑</el-checkbox>\n    <el-checkbox v-model=\"addTerrain\">地形</el-checkbox>\n    <el-checkbox v-model=\"clampToGround\">贴地</el-checkbox>\n  </el-row>\n</el-row>\n\n<script>\n  import { DistanceUnits, AngleUnits } from 'vue-cesium'\n  export default {\n    data() {\n      return {\n        addTerrain: false,\n        editable: false,\n        clampToGround: false,\n        measurementFabOptions1: {\n          direction: 'right'\n        },\n        measurementFabOptions2: {\n          direction: 'left',\n          color: 'accent'\n        },\n        measurementFabOptions3: {\n          direction: 'right',\n          autoExpand: false,\n          color: 'primary'\n        },\n        distanceMeasurementOpts3: {\n          measureUnits: {\n            distanceUnits: DistanceUnits.KILOMETERS,\n            angleUnits: AngleUnits.RADIANS\n          },\n          decimals: {\n            distance: 4,\n            angle: 3\n          }\n        },\n        componentDistanceMeasurementOpts3: {\n          measureUnits: {\n            distanceUnits: DistanceUnits.KILOMETERS,\n            angleUnits: AngleUnits.RADIANS\n          },\n          decimals: {\n            distance: 4,\n            angle: 3\n          }\n        },\n        pointMeasurementOpts: {\n          preRenderDatas: [[108.9602, 34.21895, 500]]\n        },\n        areaMeasurementOpts: {\n          preRenderDatas: [\n            [\n              [108.95808, 34.21955, 30],\n              [108.95948, 34.22039, 20],\n              [108.9595, 34.21914, 25]\n            ],\n            [\n              [108.955, 34.21857],\n              [108.95573, 34.21856],\n              [108.95573, 34.21761],\n              [108.95499, 34.21761]\n            ]\n          ]\n        },\n        pointMeasurementOpts3: {\n          measureUnits: {\n            distanceUnits: DistanceUnits.METERS,\n            angleUnits: AngleUnits.DEGREES_MINUTES_SECONDS,\n            slopeUnits: AngleUnits.DEGREES\n          },\n          decimals: {\n            lng: 3,\n            lat: 3,\n            height: 2,\n            slope: 3\n          }\n        },\n        measurements: ['component-distance', 'polyline', 'vertical', 'area', 'point'],\n        measurementFabOptions4: {\n          direction: 'right'\n        },\n        drawingActionInstances: []\n      }\n    },\n    methods: {\n      drawingsReadyDefault({ Cesium, viewer, cesiumObject }) {\n        console.log('绘制选项参数：', cesiumObject)\n      },\n      clear() {\n        this.$refs.measurementsRef4.clearAll()\n      },\n      measurementsReady({ Cesium, viewer, cesiumObject }) {\n        this.drawingActionInstances = cesiumObject\n      },\n      toggle(drawingActionInstance) {\n        this.$refs.measurementsRef4.toggleAction(drawingActionInstance.name)\n      },\n      onTilesetReady(tileset, viewer) {\n        // const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)\n        // const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)\n        // const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)\n        // const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())\n        // tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)\n        viewer.zoomTo(tileset)\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        this.restoreCursorMove = 'auto'\n        this.drawing = false\n      },\n      drawEvt(e, viewer) {\n        console.log(e)\n        const restoreCursor = getComputedStyle(viewer.canvas).cursor\n        if (e.finished) {\n          this.drawing = false\n          if (e.type === 'move') {\n            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove}`)\n          }\n        } else {\n          this.drawing = true\n          if (e.type === 'move') {\n            viewer.canvas.setAttribute('style', 'cursor: move')\n          }\n          if (e.type === 'new') {\n            viewer.canvas.setAttribute('style', 'cursor: crosshair')\n          }\n        }\n      },\n      activeEvt(e, viewer) {\n        console.log(e)\n        viewer.canvas.setAttribute('style', `cursor: ${e.isActive ? 'crosshair' : 'auto'}`)\n        if (!e.isActive) {\n          this.drawing = false\n          this.restoreCursorMove = 'auto'\n        }\n      },\n      editorEvt(e, viewer) {\n        console.log(e)\n        if (e.type === 'move') {\n          const restoreCursor = getComputedStyle(viewer.canvas).cursor\n          viewer.canvas.setAttribute('style', 'cursor: move')\n          this.drawing = true\n        }\n      },\n      mouseEvt(e, viewer) {\n        console.log(e)\n        const restoreCursor = getComputedStyle(viewer.canvas).cursor\n        if (!this.drawing) {\n          if (e.type === 'onmouseover') {\n            this.restoreCursorMove = restoreCursor\n            viewer.canvas.setAttribute('style', 'cursor: pointer')\n          } else {\n            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove || 'auto'}`)\n          }\n        }\n      },\n      unload() {\n        this.$refs.measurementsRef.unload()\n      },\n      load() {\n        this.$refs.measurementsRef.load()\n      },\n      reload() {\n        this.$refs.measurementsRef.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定量算组件的位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定量算组件基于位置的偏移量。</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定绘制的量算结果是否可见。</td><td></td></tr><tr><td>mode</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定绘制交互模式，0 代表连续绘制，1 代表绘制一次就结束。</td><td></td></tr><tr><td>measurements</td><td>Array</td><td><code>[&#39;distance&#39;, &#39;component-distance&#39;, &#39;polyline&#39;, &#39;horizontal&#39;, &#39;vertical&#39;, &#39;height&#39;, &#39;area&#39;, &#39;point&#39;, &#39;rectangle&#39;, &#39;circle&#39;, &#39;regular&#39;]</code></td><td><code>optional</code> 指定要加载的量算实例。</td><td></td></tr><tr><td>activeColor</td><td>String</td><td><code>&#39;positive&#39;</code></td><td><code>optional</code> 指定量算实例激活时的颜色。</td><td></td></tr><tr><td>editable</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定量算结果对象是否可编辑。</td><td></td></tr><tr><td>mainFabOpts</td><td>Object</td><td></td><td><code>optional</code> 指定量算组件浮动按钮的样式风格选项。</td><td></td></tr><tr><td>distanceActionOpts</td><td>Object</td><td>``</td><td><code>optional</code> 指定距离量算按钮的样式风格选项。</td><td></td></tr><tr><td>distanceMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定距离量算参数。</td><td></td></tr><tr><td>componentDistanceActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定三角量算按钮的样式风格选项。</td><td></td></tr><tr><td>componentDistanceMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定三角量算参数。</td><td></td></tr><tr><td>polylineActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定折线距离量算按钮的样式风格选项。</td><td></td></tr><tr><td>polylineMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定折线距离量算参数。</td><td></td></tr><tr><td>horizontalActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定水平距离量算按钮的样式风格选项。</td><td></td></tr><tr><td>horizontalMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定水平距离量算参数。</td><td></td></tr><tr><td>verticalActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定垂直距离量算按钮的样式风格选项。</td><td></td></tr><tr><td>verticalMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定垂直距离量算参数。</td><td></td></tr><tr><td>heightActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定高度量算按钮的样式风格选项。</td><td></td></tr><tr><td>heightMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定高度量算参数。</td><td></td></tr><tr><td>areaActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定面积量算按钮的样式风格选项。</td><td></td></tr><tr><td>areaMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定面积量算参数。</td><td></td></tr><tr><td>pointActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定坐标量算按钮的样式风格选项。</td><td></td></tr><tr><td>pointMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定坐标量算参数。</td><td></td></tr><tr><td>rectangleActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定矩形量算按钮的样式风格选项。</td><td></td></tr><tr><td>rectangleMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定矩形量算参数。</td><td></td></tr><tr><td>circleActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定圆形量算按钮的样式风格选项。</td><td></td></tr><tr><td>circleMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定圆形量算参数。</td><td></td></tr><tr><td>regularActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定正多边形量算按钮的样式风格选项。</td><td></td></tr><tr><td>regularMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定正多边形量算参数。</td><td></td></tr><tr><td>clearActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定清除按钮的样式风格选项。</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示：量算组件主要由两部分构成：（1）支持展开和收缩的浮动按钮（Fab）；（2）具体量算按钮（FabAction）。</p></div><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// ActionOpts 通用属性</span>\n{\n  <span class=\"hljs-attr\">externalLabel</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&#39;&#39;</span>,\n  <span class=\"hljs-attr\">labelPosition</span>: <span class=\"hljs-string\">&#39;right&#39;</span>,\n  <span class=\"hljs-attr\">hideLabel</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">disable</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">outline</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">push</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">unelevated</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;primary&#39;</span>,\n  <span class=\"hljs-attr\">glossy</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">square</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [\n      <span class=\"hljs-number\">0</span>,\n      <span class=\"hljs-number\">20</span>\n    ]\n  },\n  <span class=\"hljs-comment\">// 默认图标分别是</span>\n  <span class=\"hljs-comment\">// vc-icons-measure-distance, vc-icons-measure-component-distance,</span>\n  <span class=\"hljs-comment\">// vc-icons-measure-polyline-distance, vc-icons-measure-horizontal-distance,</span>\n  <span class=\"hljs-comment\">// vc-icons-measure-vertical-distance, vc-icons-measure-height-from-terrain,</span>\n  <span class=\"hljs-comment\">// vc-icons-measure-area, vc-icons-measure-point-coordinates,</span>\n  <span class=\"hljs-comment\">// vc-icons-clear</span>\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-measure-distance&#39;</span>\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// mainFabOpts 在 ActionOpts 通用属性基础上多了下列属性：</span>\n{\n  <span class=\"hljs-attr\">direction</span>: <span class=\"hljs-string\">&#39;left&#39;</span>,\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-measure-button&#39;</span>,\n  <span class=\"hljs-attr\">activeIcon</span>: <span class=\"hljs-string\">&#39;vc-icons-measure-button&#39;</span>,\n  <span class=\"hljs-attr\">verticalActionsAlign</span>: <span class=\"hljs-string\">&#39;center&#39;</span>,\n  <span class=\"hljs-attr\">hideIcon</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">persistent</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">autoExpand</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">hideActionOnClick</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;info&#39;</span>\n}\n</code><span class=\"lang-mark\">js</span></pre></div>", 3);

const _hoisted_14 = {
  class: "tip"
};

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "提示：每个量算按钮（FabAction）对应有量算属性 xxxMeasurementOpts，用于自定义绘制对象风格。", -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("详见：");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("defaultProps");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>各绘制结果的参数配置由于篇幅太长这儿就不一一列举了，如有自定义需要，请在当前文档页面打开控制台输出可以查看 <code>绘制按钮的默认参数</code> 和 <code>绘制结果的默认参数</code>。分别是 <code>actionOpts</code> 和 <code>cmpOpts</code> 属性。例如 <code>pointMeasurementOpts</code> 参数对象结构与控制台输出 <code>绘制选项参数：</code> 中 <code>name</code> 为 <code>point</code> 项的 <code>cmpOpts</code> 结构相同。<code>pointActionOpts</code> 参数对象与控制台输出 <code>绘制选项参数：</code> 中 <code>name</code> 为 <code>point</code> 项的 <code>actionOpts</code> 结构相同。当然也可以在自己代码中参考这样输出来查看。</p>", 1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>drawEvt</td><td>(measureParam, viewer)</td><td>量算绘制时触发。</td></tr><tr><td>activeEvt</td><td>(activeParam, viewer)</td><td>切换量算 Action 时触发。</td></tr><tr><td>editorEvt</td><td>(editParam, viewer)</td><td>点击编辑按钮时触发。</td></tr><tr><td>mouseEvt</td><td>(mouseParam, viewer)</td><td>鼠标移进、移除绘制点时触发。</td></tr></tbody></table>", 1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("插槽 ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "插槽名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "body"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "用于自定义测量组件 UI。")])])], -1);

function vc_measurementsvue_type_template_id_2db735df_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_measurementsvue_type_template_id_2db735df_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcmeasurements",
    tabindex: "-1",
    content: "VcMeasurements",
    href: "#vcmeasurements",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_measurementsvue_type_template_id_2db735df_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcmeasurements"
    })]),
    _: 1
  }), vc_measurementsvue_type_template_id_2db735df_hoisted_3, vc_measurementsvue_type_template_id_2db735df_hoisted_4, vc_measurementsvue_type_template_id_2db735df_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_measurementsvue_type_template_id_2db735df_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), vc_measurementsvue_type_template_id_2db735df_hoisted_7, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_measurementsvue_type_template_id_2db735df_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createElementVNode"])("div", _hoisted_14, [_hoisted_15, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/measurements/src/defaultProps.ts"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17]),
    _: 1
  })]), _hoisted_18]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cha-cao",
    tabindex: "-1",
    content: "插槽",
    href: "#cha-cao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cha-cao"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/analyses/vc-measurements.md?vue&type=template&id=2db735df

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/analyses/vc-measurements.md?vue&type=script&lang=ts

/* harmony default export */ var vc_measurementsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        withCtx: _withCtx,
        createBlock: _createBlock,
        createElementVNode: _createElementVNode,
        createCommentVNode: _createCommentVNode
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "custom-measurements"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("清除");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("重载");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("可编辑");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("地形");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("贴地");

      function render(_ctx, _cache) {
        const _component_vc_measurements = _resolveComponent("vc-measurements");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        const _component_vc_primitive_tileset = _resolveComponent("vc-primitive-tileset");

        const _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_provider_terrain_cesium = _resolveComponent("vc-provider-terrain-cesium");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_checkbox = _resolveComponent("el-checkbox");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_measurements, {
              onDrawEvt: _ctx.drawEvt,
              onActiveEvt: _ctx.activeEvt,
              onEditorEvt: _ctx.editorEvt,
              onMouseEvt: _ctx.mouseEvt,
              ref: "measurementsRef",
              position: "bottom-left",
              clampToGround: _ctx.clampToGround,
              mainFabOpts: _ctx.measurementFabOptions1,
              offset: [20, 80],
              editable: _ctx.editable,
              onReady: _ctx.drawingsReadyDefault,
              pointMeasurementOpts: _ctx.pointMeasurementOpts,
              areaMeasurementOpts: _ctx.areaMeasurementOpts
            }, null, 8, ["onDrawEvt", "onActiveEvt", "onEditorEvt", "onMouseEvt", "clampToGround", "mainFabOpts", "editable", "onReady", "pointMeasurementOpts", "areaMeasurementOpts"]), _createVNode(_component_vc_measurements, {
              ref: "measurementsRef2",
              position: "top-right",
              mainFabOpts: _ctx.measurementFabOptions2,
              editable: _ctx.editable,
              measurements: _ctx.measurements,
              activeColor: "yellow"
            }, null, 8, ["mainFabOpts", "editable", "measurements"]), _createVNode(_component_vc_measurements, {
              ref: "measurementsRef3",
              position: "top-left",
              mainFabOpts: _ctx.measurementFabOptions3,
              distanceMeasurementOpts: _ctx.distanceMeasurementOpts3,
              componentDistanceMeasurementOpts: _ctx.componentDistanceMeasurementOpts3,
              pointMeasurementOpts: _ctx.pointMeasurementOpts3,
              editable: _ctx.editable,
              offset: [20, 80]
            }, null, 8, ["mainFabOpts", "distanceMeasurementOpts", "componentDistanceMeasurementOpts", "pointMeasurementOpts", "editable"]), _createVNode(_component_vc_measurements, {
              ref: "measurementsRef4",
              position: "bottom-left",
              mainFabOpts: _ctx.measurementFabOptions4,
              offset: [0, 20],
              editable: _ctx.editable,
              onReady: _ctx.measurementsReady
            }, {
              body: _withCtx(() => [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
                default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.drawingActionInstances, (drawingActionInstance, index) => {
                  return _openBlock(), _createBlock(_component_el_button, {
                    key: index,
                    type: drawingActionInstance.isActive ? 'success' : 'primary',
                    round: "",
                    onClick: $event => _ctx.toggle(drawingActionInstance)
                  }, {
                    default: _withCtx(() => [_createTextVNode(_toDisplayString(drawingActionInstance.tip.replace('量算', '')), 1)]),
                    _: 2
                  }, 1032, ["type", "onClick"]);
                }), 128)), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.clear
                }, {
                  default: _withCtx(() => [_hoisted_2]),
                  _: 1
                }, 8, ["onClick"])]),
                _: 1
              })])]),
              _: 1
            }, 8, ["mainFabOpts", "editable", "onReady"]), _createVNode(_component_vc_primitive_tileset, {
              url: "https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json",
              onReadyPromise: _ctx.onTilesetReady
            }, null, 8, ["onReadyPromise"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: "img_c",
                maximumLevel: 17,
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _ctx.addTerrain ? (_openBlock(), _createBlock(_component_vc_provider_terrain_cesium, {
              key: 0
            })) : _createCommentVNode("", true)]),
            _: 1
          }), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_checkbox, {
              modelValue: _ctx.editable,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.editable = $event)
            }, {
              default: _withCtx(() => [_hoisted_6]),
              _: 1
            }, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
              modelValue: _ctx.addTerrain,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.addTerrain = $event)
            }, {
              default: _withCtx(() => [_hoisted_7]),
              _: 1
            }, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
              modelValue: _ctx.clampToGround,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.clampToGround = $event)
            }, {
              default: _withCtx(() => [_hoisted_8]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const {
        DistanceUnits,
        AngleUnits
      } = __webpack_require__(210);

      const democomponentExport = {
        data() {
          return {
            addTerrain: false,
            editable: false,
            clampToGround: false,
            measurementFabOptions1: {
              direction: 'right'
            },
            measurementFabOptions2: {
              direction: 'left',
              color: 'accent'
            },
            measurementFabOptions3: {
              direction: 'right',
              autoExpand: false,
              color: 'primary'
            },
            distanceMeasurementOpts3: {
              measureUnits: {
                distanceUnits: DistanceUnits.KILOMETERS,
                angleUnits: AngleUnits.RADIANS
              },
              decimals: {
                distance: 4,
                angle: 3
              }
            },
            componentDistanceMeasurementOpts3: {
              measureUnits: {
                distanceUnits: DistanceUnits.KILOMETERS,
                angleUnits: AngleUnits.RADIANS
              },
              decimals: {
                distance: 4,
                angle: 3
              }
            },
            pointMeasurementOpts: {
              preRenderDatas: [[108.9602, 34.21895, 500]]
            },
            areaMeasurementOpts: {
              preRenderDatas: [[[108.95808, 34.21955, 30], [108.95948, 34.22039, 20], [108.9595, 34.21914, 25]], [[108.955, 34.21857], [108.95573, 34.21856], [108.95573, 34.21761], [108.95499, 34.21761]]]
            },
            pointMeasurementOpts3: {
              measureUnits: {
                distanceUnits: DistanceUnits.METERS,
                angleUnits: AngleUnits.DEGREES_MINUTES_SECONDS,
                slopeUnits: AngleUnits.DEGREES
              },
              decimals: {
                lng: 3,
                lat: 3,
                height: 2,
                slope: 3
              }
            },
            measurements: ['component-distance', 'polyline', 'vertical', 'area', 'point'],
            measurementFabOptions4: {
              direction: 'right'
            },
            drawingActionInstances: []
          };
        },

        methods: {
          drawingsReadyDefault(_ref) {
            let {
              Cesium,
              viewer,
              cesiumObject
            } = _ref;
            console.log('绘制选项参数：', cesiumObject);
          },

          clear() {
            this.$refs.measurementsRef4.clearAll();
          },

          measurementsReady(_ref2) {
            let {
              Cesium,
              viewer,
              cesiumObject
            } = _ref2;
            this.drawingActionInstances = cesiumObject;
          },

          toggle(drawingActionInstance) {
            this.$refs.measurementsRef4.toggleAction(drawingActionInstance.name);
          },

          onTilesetReady(tileset, viewer) {
            // const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
            // const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
            // const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)
            // const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
            // tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
            viewer.zoomTo(tileset);
            viewer.scene.globe.depthTestAgainstTerrain = true;
            this.restoreCursorMove = 'auto';
            this.drawing = false;
          },

          drawEvt(e, viewer) {
            console.log(e);
            const restoreCursor = getComputedStyle(viewer.canvas).cursor;

            if (e.finished) {
              this.drawing = false;

              if (e.type === 'move') {
                viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove}`);
              }
            } else {
              this.drawing = true;

              if (e.type === 'move') {
                viewer.canvas.setAttribute('style', 'cursor: move');
              }

              if (e.type === 'new') {
                viewer.canvas.setAttribute('style', 'cursor: crosshair');
              }
            }
          },

          activeEvt(e, viewer) {
            console.log(e);
            viewer.canvas.setAttribute('style', `cursor: ${e.isActive ? 'crosshair' : 'auto'}`);

            if (!e.isActive) {
              this.drawing = false;
              this.restoreCursorMove = 'auto';
            }
          },

          editorEvt(e, viewer) {
            console.log(e);

            if (e.type === 'move') {
              const restoreCursor = getComputedStyle(viewer.canvas).cursor;
              viewer.canvas.setAttribute('style', 'cursor: move');
              this.drawing = true;
            }
          },

          mouseEvt(e, viewer) {
            console.log(e);
            const restoreCursor = getComputedStyle(viewer.canvas).cursor;

            if (!this.drawing) {
              if (e.type === 'onmouseover') {
                this.restoreCursorMove = restoreCursor;
                viewer.canvas.setAttribute('style', 'cursor: pointer');
              } else {
                viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove || 'auto'}`);
              }
            }
          },

          unload() {
            this.$refs.measurementsRef.unload();
          },

          load() {
            this.$refs.measurementsRef.load();
          },

          reload() {
            this.$refs.measurementsRef.reload();
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/analyses/vc-measurements.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/analyses/vc-measurements.md



vc_measurementsvue_type_script_lang_ts.render = vc_measurementsvue_type_template_id_2db735df_render

/* harmony default export */ var vc_measurements = __webpack_exports__["default"] = (vc_measurementsvue_type_script_lang_ts);

/***/ })

}]);