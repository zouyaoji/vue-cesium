(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[185],{

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(531);
/* harmony import */ var _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcConfigProvider", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcCompass", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcZoomControl", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Dc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPrint", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Qb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcMyLocation", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["vb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcStatusBar", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Ac"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcDistanceLegend", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcNavigation", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["wb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcCompassSm", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcZoomControlSm", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcNavigationSm", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["xb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcOverviewMap", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSelectionIndicator", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["mc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcDatasourceCustom", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcDatasourceCzml", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcDatasourceGeojson", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcDatasourceKml", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcDrawings", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcEntity", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryBox", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryBoxOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryCircle", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryCircleOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryPolygonCoplanar", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryPolygonCoplanarOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryCorridor", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryCorridorOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryCylinder", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryCylinderOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["B"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryEllipse", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryEllipseOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryEllipsoid", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["E"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryEllipsoidOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["F"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryFrustum", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["G"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryFrustumOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryPolylineGround", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["P"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryPlane", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["I"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryPlaneOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["J"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryPolygon", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["K"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryPolygonOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryPolyline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryPolylineVolume", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["R"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryPolylineVolumeOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["S"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryRectangle", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryRectangleOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["U"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryPolylineSimple", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometrySphere", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["V"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometrySphereOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["W"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryWall", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGeometryWallOutline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcInstanceGeometry", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["rb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsBillboard", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsBox", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["ab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsCorridor", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["bb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsCylinder", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsEllipse", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["db"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsEllipsoid", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["eb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsLabel", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["fb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsModel", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["gb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsPath", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["hb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsPlane", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["ib"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsPoint", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["jb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsPolygon", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["kb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsPolyline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["lb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsPolylineVolume", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["mb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsRectangle", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["nb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsTileset", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["ob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcGraphicsWall", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["pb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcLayerImagery", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["tb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcMeasurements", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["ub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcOverlayHtml", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Ab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcOverlayHeatmap", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["zb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcOverlayEchart", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["yb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcOverlayWind", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Bb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPostProcessStage", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Gb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPostProcessStageScan", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Ib"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPostProcessStageCollection", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Hb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcCollectionBillboard", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcCollectionLabel", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcCollectionPoint", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcCollectionPolyline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcCollectionPrimitive", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcBillboard", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcLabel", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["sb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPoint", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Db"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPolyline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Fb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPolygon", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Eb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPrimitiveClassification", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Kb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPrimitiveGround", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Lb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPrimitiveGroundPolyline", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Mb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPrimitiveModel", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Nb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPrimitive", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Jb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPrimitiveTileset", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Pb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcPrimitiveParticle", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Ob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryArcgis", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Rb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryBaidumap", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Sb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryBingmaps", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Tb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryGoogle", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Ub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryGrid", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Vb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryIon", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Wb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryMapbox", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Xb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryOsm", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Yb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImagerySingletile", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Zb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImagerySupermap", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["ac"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryTianditu", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["bc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryTileCoordinates", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["cc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryTms", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryTiledcache", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["dc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryUrltemplate", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["fc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryWms", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["gc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderImageryWmts", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["hc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderTerrainCesium", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["jc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderTerrainArcgis", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["ic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderTerrainVrTheworld", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["lc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcProviderTerrainTianditu", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["kc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcBtn", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcIcon", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["qb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSpinnerBall", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["pc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSpinnerBars", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["qc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSpinnerDots", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["rc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSpinnerGears", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["sc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSpinnerHourglass", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["tc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSpinnerIos", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["uc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSpinnerOrbit", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["vc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSpinnerOval", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["wc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSpinnerPuff", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["xc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSpinnerRings", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["yc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSpinnerTail", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["zc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSpinner", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["oc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcTooltip", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Bc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcAjaxBar", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcSkeleton", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["nc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcFab", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcFabAction", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VcViewer", function() { return _vue_cesium_components__WEBPACK_IMPORTED_MODULE_1__["Cc"]; });

/* harmony import */ var _vue_cesium_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return _vue_cesium_directives__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCommon", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDatasources", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEvents", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGeometries", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGraphics", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHandler", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrimitiveCollectionItems", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrimitiveCollections", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePrimitives", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useProviders", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useVueCesium", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocaleProps", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocaleInjectionKey", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocale", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localeProviderMaker", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocaleInject", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _vue_cesium_composables__WEBPACK_IMPORTED_MODULE_3__["c"]; });

/* harmony import */ var _vue_cesium_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisibilityState", function() { return _vue_cesium_shared__WEBPACK_IMPORTED_MODULE_4__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawStatus", function() { return _vue_cesium_shared__WEBPACK_IMPORTED_MODULE_4__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeasureUnits", function() { return _vue_cesium_shared__WEBPACK_IMPORTED_MODULE_4__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DistanceUnits", function() { return _vue_cesium_shared__WEBPACK_IMPORTED_MODULE_4__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaUnits", function() { return _vue_cesium_shared__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VolumeUnits", function() { return _vue_cesium_shared__WEBPACK_IMPORTED_MODULE_4__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngleUnits", function() { return _vue_cesium_shared__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonPrimitive", function() { return _vue_cesium_shared__WEBPACK_IMPORTED_MODULE_4__["f"]; });

/* harmony import */ var _make_installer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(110);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeInstaller", function() { return _make_installer__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defaults__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-09-17 14:23:37
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\vue-cesium\index.ts
 */







const install = _defaults__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].install;
const version = _defaults__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].version;

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tools/vc-measurements.md?vue&type=template&id=0513d7b6

const vc_measurementsvue_type_template_id_0513d7b6_hoisted_1 = {
  class: "content element-doc"
};

const vc_measurementsvue_type_template_id_0513d7b6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcmeasurements\"><a class=\"header-anchor\" href=\"#vcmeasurements\">¶</a> VcMeasurements</h2><p>加载量算工具组件，包含距离量算、三角量算、折线距离量算、水平距离量算、垂直距离量算、高度量算、面积量算、坐标量算。</p><p><strong>注意：</strong> 需要引入样式文件: <code>import &#39;vue-cesium/default/index.css&#39;;</code></p><div class=\"tip\"><p>提示：3.0 版本已将量算组件重构成一个组件，简约的同时支持自定义风格，并优化了交互。</p><p>通常是左键绘制，右键取消最后绘制的点，双击结束当前绘制。 其中，水平测量还可以按住 shift 在固定方向绘制。</p><p>ctrl + 右键取消绘制。</p></div><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>量算组件的基础用法。</p>", 6);

const vc_measurementsvue_type_template_id_0513d7b6_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measurements"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加量算工具。")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- 修改定位 和 位置偏移 -->\n    <vc-measurements\n      @drawEvt=\"drawEvt\"\n      @activeEvt=\"activeEvt\"\n      @editorEvt=\"editorEvt\"\n      @mouseEvt=\"mouseEvt\"\n      ref=\"measurementsRef\"\n      position=\"bottom-left\"\n      :clampToGround=\"clampToGround\"\n      :mainFabOpts=\"measurementFabOptions1\"\n      :offset=\"[20, 80]\"\n      :editable=\"editable\"\n      @ready=\"drawingsReadyDefault\"\n      :pointMeasurementOpts=\"pointMeasurementOpts\"\n      :areaMeasurementOpts=\"areaMeasurementOpts\"\n    >\n    </vc-measurements>\n    <!-- 修改加载的量算实例 -->\n    <vc-measurements\n      ref=\"measurementsRef2\"\n      position=\"top-right\"\n      :mainFabOpts=\"measurementFabOptions2\"\n      :editable=\"editable\"\n      :measurements=\"measurements\"\n      activeColor=\"yellow\"\n    >\n    </vc-measurements>\n    <!-- 修改量算风格和精度 -->\n    <vc-measurements\n      ref=\"measurementsRef3\"\n      position=\"top-left\"\n      :mainFabOpts=\"measurementFabOptions3\"\n      :distanceMeasurementOpts=\"distanceMeasurementOpts3\"\n      :componentDistanceMeasurementOpts=\"componentDistanceMeasurementOpts3\"\n      :pointMeasurementOpts=\"pointMeasurementOpts3\"\n      :editable=\"editable\"\n      :offset=\"[20, 80]\"\n    >\n    </vc-measurements>\n    <!-- 结合 slot 改变默认 UI -->\n    <vc-measurements\n      ref=\"measurementsRef4\"\n      position=\"bottom-left\"\n      :mainFabOpts=\"measurementFabOptions4\"\n      :offset=\"[0, 20]\"\n      :editable=\"editable\"\n      @ready=\"measurementsReady\"\n    >\n      <template #body>\n        <div class=\"custom-measurements\">\n          <el-row>\n            <el-button\n              v-for=\"(drawingActionInstance, index) in drawingActionInstances\"\n              :key=\"index\"\n              :type=\"drawingActionInstance.isActive ? 'success' : 'primary'\"\n              round\n              @click=\"toggle(drawingActionInstance)\"\n              >{{drawingActionInstance.tip.replace('量算', '')}}</el-button\n            >\n            <el-button type=\"danger\" round @click=\"clear\">清除</el-button>\n          </el-row>\n        </div>\n      </template>\n    </vc-measurements>\n    <vc-primitive-tileset\n      url=\"https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json\"\n      @readyPromise=\"onTilesetReady\"\n    ></vc-primitive-tileset>\n    <vc-layer-imagery>\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" :maximumLevel=\"17\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-provider-terrain-cesium v-if=\"addTerrain\"></vc-provider-terrain-cesium>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-checkbox v-model=\"editable\">可编辑</el-checkbox>\n    <el-checkbox v-model=\"addTerrain\">地形</el-checkbox>\n    <el-checkbox v-model=\"clampToGround\">贴地</el-checkbox>\n  </el-row>\n</el-row>\n\n<script>\n  import { DistanceUnits, AngleUnits } from 'vue-cesium'\n  export default {\n    data() {\n      return {\n        addTerrain: false,\n        editable: false,\n        clampToGround: false,\n        measurementFabOptions1: {\n          direction: 'right'\n        },\n        measurementFabOptions2: {\n          direction: 'left',\n          color: 'accent'\n        },\n        measurementFabOptions3: {\n          direction: 'right',\n          autoExpand: false,\n          color: 'primary'\n        },\n        distanceMeasurementOpts3: {\n          measureUnits: {\n            distanceUnits: DistanceUnits.KILOMETERS,\n            angleUnits: AngleUnits.RADIANS\n          },\n          decimals: {\n            distance: 4,\n            angle: 3\n          }\n        },\n        componentDistanceMeasurementOpts3: {\n          measureUnits: {\n            distanceUnits: DistanceUnits.KILOMETERS,\n            angleUnits: AngleUnits.RADIANS\n          },\n          decimals: {\n            distance: 4,\n            angle: 3\n          }\n        },\n        pointMeasurementOpts: {\n          preRenderDatas: [[108.9602, 34.21895, 500]]\n        },\n        areaMeasurementOpts: {\n          preRenderDatas: [\n            [\n              [108.95808, 34.21955, 30],\n              [108.95948, 34.22039, 20],\n              [108.9595, 34.21914, 25]\n            ],\n            [\n              [108.955, 34.21857],\n              [108.95573, 34.21856],\n              [108.95573, 34.21761],\n              [108.95499, 34.21761]\n            ]\n          ]\n        },\n        pointMeasurementOpts3: {\n          measureUnits: {\n            distanceUnits: DistanceUnits.METERS,\n            angleUnits: AngleUnits.DEGREES_MINUTES_SECONDS,\n            slopeUnits: AngleUnits.DEGREES\n          },\n          decimals: {\n            lng: 3,\n            lat: 3,\n            height: 2,\n            slope: 3\n          }\n        },\n        measurements: ['component-distance', 'polyline', 'vertical', 'area', 'point'],\n        measurementFabOptions4: {\n          direction: 'right'\n        },\n        drawingActionInstances: []\n      }\n    },\n    methods: {\n      drawingsReadyDefault({ Cesium, viewer, cesiumObject }) {\n        console.log('绘制选项参数：', cesiumObject)\n      },\n      clear() {\n        this.$refs.measurementsRef4.clearAll()\n      },\n      measurementsReady({ Cesium, viewer, cesiumObject }) {\n        this.drawingActionInstances = cesiumObject\n      },\n      toggle(drawingActionInstance) {\n        this.$refs.measurementsRef4.toggleAction(drawingActionInstance.name)\n      },\n      onTilesetReady(tileset, viewer) {\n        // const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)\n        // const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)\n        // const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)\n        // const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())\n        // tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)\n        viewer.zoomTo(tileset)\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        this.restoreCursorMove = 'auto'\n        this.drawing = false\n      },\n      drawEvt(e, viewer) {\n        console.log(e)\n        const restoreCursor = getComputedStyle(viewer.canvas).cursor\n        if (e.finished) {\n          this.drawing = false\n          if (e.type === 'move') {\n            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove}`)\n          }\n        } else {\n          this.drawing = true\n          if (e.type === 'move') {\n            viewer.canvas.setAttribute('style', 'cursor: move')\n          }\n          if (e.type === 'new') {\n            viewer.canvas.setAttribute('style', 'cursor: crosshair')\n          }\n        }\n      },\n      activeEvt(e, viewer) {\n        console.log(e)\n        viewer.canvas.setAttribute('style', `cursor: ${e.isActive ? 'crosshair' : 'auto'}`)\n        if (!e.isActive) {\n          this.drawing = false\n          this.restoreCursorMove = 'auto'\n        }\n      },\n      editorEvt(e, viewer) {\n        console.log(e)\n        if (e.type === 'move') {\n          const restoreCursor = getComputedStyle(viewer.canvas).cursor\n          viewer.canvas.setAttribute('style', 'cursor: move')\n          this.drawing = true\n        }\n      },\n      mouseEvt(e, viewer) {\n        console.log(e)\n        const restoreCursor = getComputedStyle(viewer.canvas).cursor\n        if (!this.drawing) {\n          if (e.type === 'onmouseover') {\n            this.restoreCursorMove = restoreCursor\n            viewer.canvas.setAttribute('style', 'cursor: pointer')\n          } else {\n            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove || 'auto'}`)\n          }\n        }\n      },\n      unload() {\n        this.$refs.measurementsRef.unload()\n      },\n      load() {\n        this.$refs.measurementsRef.load()\n      },\n      reload() {\n        this.$refs.measurementsRef.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定量算组件的位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定量算组件基于位置的偏移量。</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定绘制的量算结果是否可见。</td><td></td></tr><tr><td>mode</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定绘制交互模式，0 代表连续绘制，1 代表绘制一次就结束。</td><td></td></tr><tr><td>measurements</td><td>Array</td><td><code>[&#39;distance&#39;, &#39;component-distance&#39;, &#39;polyline&#39;, &#39;horizontal&#39;, &#39;vertical&#39;, &#39;height&#39;, &#39;area&#39;, &#39;point&#39;, &#39;rectangle&#39;, &#39;circle&#39;, &#39;regular&#39;]</code></td><td><code>optional</code> 指定要加载的量算实例。</td><td></td></tr><tr><td>activeColor</td><td>String</td><td><code>&#39;positive&#39;</code></td><td><code>optional</code> 指定量算实例激活时的颜色。</td><td></td></tr><tr><td>editable</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定量算结果对象是否可编辑。</td><td></td></tr><tr><td>mainFabOpts</td><td>Object</td><td></td><td><code>optional</code> 指定量算组件浮动按钮的样式风格选项。</td><td></td></tr><tr><td>distanceActionOpts</td><td>Object</td><td>``</td><td><code>optional</code> 指定距离量算按钮的样式风格选项。</td><td></td></tr><tr><td>distanceMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定距离量算参数。</td><td></td></tr><tr><td>componentDistanceActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定三角量算按钮的样式风格选项。</td><td></td></tr><tr><td>componentDistanceMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定三角量算参数。</td><td></td></tr><tr><td>polylineActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定折线距离量算按钮的样式风格选项。</td><td></td></tr><tr><td>polylineMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定折线距离量算参数。</td><td></td></tr><tr><td>horizontalActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定水平距离量算按钮的样式风格选项。</td><td></td></tr><tr><td>horizontalMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定水平距离量算参数。</td><td></td></tr><tr><td>verticalActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定垂直距离量算按钮的样式风格选项。</td><td></td></tr><tr><td>verticalMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定垂直距离量算参数。</td><td></td></tr><tr><td>heightActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定高度量算按钮的样式风格选项。</td><td></td></tr><tr><td>heightMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定高度量算参数。</td><td></td></tr><tr><td>areaActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定面积量算按钮的样式风格选项。</td><td></td></tr><tr><td>areaMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定面积量算参数。</td><td></td></tr><tr><td>pointActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定坐标量算按钮的样式风格选项。</td><td></td></tr><tr><td>pointMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定坐标量算参数。</td><td></td></tr><tr><td>rectangleActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定矩形量算按钮的样式风格选项。</td><td></td></tr><tr><td>rectangleMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定矩形量算参数。</td><td></td></tr><tr><td>circleActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定圆形量算按钮的样式风格选项。</td><td></td></tr><tr><td>circleMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定圆形量算参数。</td><td></td></tr><tr><td>regularActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定正多边形量算按钮的样式风格选项。</td><td></td></tr><tr><td>regularMeasurementOpts</td><td>Object</td><td></td><td><code>optional</code> 指定正多边形量算参数。</td><td></td></tr><tr><td>clearActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定清除按钮的样式风格选项。</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示：量算组件主要由两部分构成：（1）支持展开和收缩的浮动按钮（Fab）；（2）具体量算按钮（FabAction）。</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// ActionOpts 通用属性</span>\n{\n  <span class=\"hljs-attr\">externalLabel</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&#39;&#39;</span>,\n  <span class=\"hljs-attr\">labelPosition</span>: <span class=\"hljs-string\">&#39;right&#39;</span>,\n  <span class=\"hljs-attr\">hideLabel</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">disable</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">outline</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">push</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">unelevated</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;primary&#39;</span>,\n  <span class=\"hljs-attr\">glossy</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">square</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [\n      <span class=\"hljs-number\">0</span>,\n      <span class=\"hljs-number\">20</span>\n    ]\n  },\n  <span class=\"hljs-comment\">// 默认图标分别是</span>\n  <span class=\"hljs-comment\">// vc-icons-measure-distance, vc-icons-measure-component-distance,</span>\n  <span class=\"hljs-comment\">// vc-icons-measure-polyline-distance, vc-icons-measure-horizontal-distance,</span>\n  <span class=\"hljs-comment\">// vc-icons-measure-vertical-distance, vc-icons-measure-height-from-terrain,</span>\n  <span class=\"hljs-comment\">// vc-icons-measure-area, vc-icons-measure-point-coordinates,</span>\n  <span class=\"hljs-comment\">// vc-icons-clear</span>\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-measure-distance&#39;</span>\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// mainFabOpts 在 ActionOpts 通用属性基础上多了下列属性：</span>\n{\n  <span class=\"hljs-attr\">direction</span>: <span class=\"hljs-string\">&#39;left&#39;</span>,\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-measure-button&#39;</span>,\n  <span class=\"hljs-attr\">activeIcon</span>: <span class=\"hljs-string\">&#39;vc-icons-measure-button&#39;</span>,\n  <span class=\"hljs-attr\">verticalActionsAlign</span>: <span class=\"hljs-string\">&#39;center&#39;</span>,\n  <span class=\"hljs-attr\">hideIcon</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">persistent</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">autoExpand</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">hideActionOnClick</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;info&#39;</span>\n}\n</code></pre></div><div class=\"tip\"><p>提示：每个量算按钮（FabAction）对应有量算属性 xxxMeasurementOpts，用于自定义绘制对象风格。</p><p>详见：<a href=\"https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/measurements/src/defaultProps.ts\">defaultProps</a></p><p>各绘制结果的参数配置由于篇幅太长这儿就不一一列举了，如有自定义需要，请在当前文档页面打开控制台输出可以查看 <code>绘制按钮的默认参数</code> 和 <code>绘制结果的默认参数</code>。分别是 <code>actionOpts</code> 和 <code>cmpOpts</code> 属性。例如 <code>pointMeasurementOpts</code> 参数对象结构与控制台输出 <code>绘制选项参数：</code> 中 <code>name</code> 为 <code>point</code> 项的 <code>cmpOpts</code> 结构相同。<code>pointActionOpts</code> 参数对象与控制台输出 <code>绘制选项参数：</code> 中 <code>name</code> 为 <code>point</code> 项的 <code>actionOpts</code> 结构相同。当然也可以在自己代码中参考这样输出来查看。</p></div><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>drawEvt</td><td>(measureParam, viewer)</td><td>量算绘制时触发。</td></tr><tr><td>activeEvt</td><td>(activeParam, viewer)</td><td>切换量算 Action 时触发。</td></tr><tr><td>editorEvt</td><td>(editParam, viewer)</td><td>点击编辑按钮时触发。</td></tr><tr><td>mouseEvt</td><td>(mouseParam, viewer)</td><td>鼠标移进、移除绘制点时触发。</td></tr></tbody></table><h3 id=\"cha-cao\"><a class=\"header-anchor\" href=\"#cha-cao\">¶</a> 插槽</h3><table><thead><tr><th>插槽名</th><th>描述</th></tr></thead><tbody><tr><td>body</td><td>用于自定义测量组件 UI。</td></tr></tbody></table>", 9);

function vc_measurementsvue_type_template_id_0513d7b6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_measurementsvue_type_template_id_0513d7b6_hoisted_1, [vc_measurementsvue_type_template_id_0513d7b6_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_measurementsvue_type_template_id_0513d7b6_hoisted_8]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/tools/vc-measurements.md?vue&type=template&id=0513d7b6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tools/vc-measurements.md?vue&type=script&lang=ts

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
      } = __webpack_require__(174);

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
          drawingsReadyDefault({
            Cesium,
            viewer,
            cesiumObject
          }) {
            console.log('绘制选项参数：', cesiumObject);
          },

          clear() {
            this.$refs.measurementsRef4.clearAll();
          },

          measurementsReady({
            Cesium,
            viewer,
            cesiumObject
          }) {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/tools/vc-measurements.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/tools/vc-measurements.md



vc_measurementsvue_type_script_lang_ts.render = vc_measurementsvue_type_template_id_0513d7b6_render

/* harmony default export */ var vc_measurements = __webpack_exports__["default"] = (vc_measurementsvue_type_script_lang_ts);

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _config_provider__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _controls__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _controls__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _controls__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vb", function() { return _controls__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wb", function() { return _controls__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xb", function() { return _controls__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cb", function() { return _controls__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Qb", function() { return _controls__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mc", function() { return _controls__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ac", function() { return _controls__WEBPACK_IMPORTED_MODULE_1__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dc", function() { return _controls__WEBPACK_IMPORTED_MODULE_1__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ec", function() { return _controls__WEBPACK_IMPORTED_MODULE_1__["l"]; });

/* harmony import */ var _datasources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _datasources__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _datasources__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _datasources__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _datasources__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony import */ var _drawings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(112);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _drawings__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _entity__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _geometries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "u", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "w", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "x", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "y", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "z", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "B", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "C", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "D", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "E", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "F", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "G", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "J", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "K", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "L", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "M", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "N", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "O", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "R", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "S", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "T", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "U", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "V", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["B"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "W", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "X", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return _geometries__WEBPACK_IMPORTED_MODULE_5__["E"]; });

/* harmony import */ var _geometry_instance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rb", function() { return _geometry_instance__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "db", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lb", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mb", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nb", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ob", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pb", function() { return _graphics__WEBPACK_IMPORTED_MODULE_7__["q"]; });

/* harmony import */ var _imagery_layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tb", function() { return _imagery_layer__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _measurements__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(111);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ub", function() { return _measurements__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony import */ var _overlays__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yb", function() { return _overlays__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zb", function() { return _overlays__WEBPACK_IMPORTED_MODULE_10__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ab", function() { return _overlays__WEBPACK_IMPORTED_MODULE_10__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bb", function() { return _overlays__WEBPACK_IMPORTED_MODULE_10__["d"]; });

/* harmony import */ var _post_processes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gb", function() { return _post_processes__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hb", function() { return _post_processes__WEBPACK_IMPORTED_MODULE_11__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ib", function() { return _post_processes__WEBPACK_IMPORTED_MODULE_11__["c"]; });

/* harmony import */ var _primitive_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _primitive_collections__WEBPACK_IMPORTED_MODULE_12__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _primitive_collections__WEBPACK_IMPORTED_MODULE_12__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _primitive_collections__WEBPACK_IMPORTED_MODULE_12__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _primitive_collections__WEBPACK_IMPORTED_MODULE_12__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _primitive_collections__WEBPACK_IMPORTED_MODULE_12__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _primitive_collections__WEBPACK_IMPORTED_MODULE_12__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sb", function() { return _primitive_collections__WEBPACK_IMPORTED_MODULE_12__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Db", function() { return _primitive_collections__WEBPACK_IMPORTED_MODULE_12__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Eb", function() { return _primitive_collections__WEBPACK_IMPORTED_MODULE_12__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fb", function() { return _primitive_collections__WEBPACK_IMPORTED_MODULE_12__["j"]; });

/* harmony import */ var _primitives__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Jb", function() { return _primitives__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Kb", function() { return _primitives__WEBPACK_IMPORTED_MODULE_13__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lb", function() { return _primitives__WEBPACK_IMPORTED_MODULE_13__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mb", function() { return _primitives__WEBPACK_IMPORTED_MODULE_13__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nb", function() { return _primitives__WEBPACK_IMPORTED_MODULE_13__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ob", function() { return _primitives__WEBPACK_IMPORTED_MODULE_13__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pb", function() { return _primitives__WEBPACK_IMPORTED_MODULE_13__["g"]; });

/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rb", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sb", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tb", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ub", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vb", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wb", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Xb", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Yb", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Zb", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ac", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bc", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cc", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dc", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ec", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fc", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gc", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hc", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ic", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jc", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kc", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lc", function() { return _providers__WEBPACK_IMPORTED_MODULE_14__["u"]; });

/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "qb", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "oc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "qc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bc", function() { return _ui__WEBPACK_IMPORTED_MODULE_15__["s"]; });

/* harmony import */ var _viewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cc", function() { return _viewer__WEBPACK_IMPORTED_MODULE_16__["a"]; });

/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2021-11-06 15:43:34
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\index.ts
 */


















/***/ })

}]);