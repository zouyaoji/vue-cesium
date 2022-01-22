// Viewer
import { VcViewer } from '@vue-cesium/components/viewer'
// controls
import {
  VcCompass,
  VcZoomControl,
  VcPrint,
  VcMyLocation,
  VcStatusBar,
  VcDistanceLegend,
  VcNavigation,
  VcCompassSm,
  VcZoomControlSm,
  VcNavigationSm,
  VcOverviewMap,
  VcSelectionIndicator
} from '@vue-cesium/components/controls'
// tools
import VcMeasurements from '@vue-cesium/components/measurements'
import VcDrawings from '@vue-cesium/components/drawings'
// ImagerLayer
import VcLayerImagery from '@vue-cesium/components/imagery-layer'
import {
  VcImageryProviderArcgis,
  VcImageryProviderBaidu,
  VcImageryProviderBing,
  VcImageryProviderGoogle,
  VcImageryProviderGrid,
  VcImageryProviderIon,
  VcImageryProviderMapbox,
  VcImageryProviderOsm,
  VcImageryProviderSingletile,
  VcImageryProviderSupermap,
  VcImageryProviderTianditu,
  VcImageryProviderTileCoordinates,
  VcImageryProviderTms,
  VcImageryProviderTiledcache,
  VcImageryProviderUrltemplate,
  VcImageryProviderWms,
  VcImageryProviderWmts,
  VcTerrainProviderCesium,
  VcTerrainProviderArcgis,
  VcTerrainProviderVrTheworld,
  VcTerrainProviderTianditu
} from '@vue-cesium/components/providers'

// Datasource
import { VcDatasourceCustom, VcDatasourceCzml, VcDatasourceGeojson, VcDatasourceKml } from '@vue-cesium/components/datasources'

// Entity
import VcEntity from '@vue-cesium/components/entity'

// Grapics
import {
  VcGraphicsBillboard,
  VcGraphicsBox,
  VcGraphicsCorridor,
  VcGraphicsCylinder,
  VcGraphicsEllipse,
  VcGraphicsEllipsoid,
  VcGraphicsLabel,
  VcGraphicsModel,
  VcGraphicsPath,
  VcGraphicsPlane,
  VcGraphicsPoint,
  VcGraphicsPolygon,
  VcGraphicsPolyline,
  VcGraphicsPolylineVolume,
  VcGraphicsRectangle,
  VcGraphicsTileset,
  VcGraphicsWall
} from '@vue-cesium/components/graphics'

// Primitives
import {
  VcPrimitiveClassification,
  VcPrimitiveGround,
  VcPrimitiveGroundPolyline,
  VcPrimitiveModel,
  VcPrimitive,
  VcPrimitiveTileset,
  VcPrimitiveParticle
} from '@vue-cesium/components/primitives'

// PrimitiveCollections
import {
  VcCollectionBillboard,
  VcCollectionLabel,
  VcCollectionPoint,
  VcCollectionPolyline,
  VcCollectionPrimitive,
  VcBillboard,
  VcLabel,
  VcPoint,
  VcPolyline,
  VcPolygon
} from '@vue-cesium/components/primitive-collections'

// GeometryInstance
import VcGeometryInstance from '@vue-cesium/components/geometry-instance'

// Geometries
import {
  VcGeometryBox,
  VcGeometryBoxOutline,
  VcGeometryCircle,
  VcGeometryCircleOutline,
  VcGeometryPolygonCoplanar,
  VcGeometryPolygonCoplanarOutline,
  VcGeometryCorridor,
  VcGeometryCorridorOutline,
  VcGeometryCylinder,
  VcGeometryCylinderOutline,
  VcGeometryEllipse,
  VcGeometryEllipseOutline,
  VcGeometryEllipsoid,
  VcGeometryEllipsoidOutline,
  VcGeometryFrustum,
  VcGeometryFrustumOutline,
  VcGeometryGroundPolyline,
  VcGeometryPlane,
  VcGeometryPlaneOutline,
  VcGeometryPolygon,
  VcGeometryPolygonOutline,
  VcGeometryPolyline,
  VcGeometryPolylineVolume,
  VcGeometryPolylineVolumeOutline,
  VcGeometryRectangle,
  VcGeometryRectangleOutline,
  VcGeometryPolylineSimple,
  VcGeometrySphere,
  VcGeometrySphereOutline,
  VcGeometryWall,
  VcGeometryWallOutline
} from '@vue-cesium/components/geometries'

// Overlay
import { VcOverlayHtml, VcOverlayHeatmap, VcOverlayWind, VcOverlayDynamic, VcOverlayEcharts } from '@vue-cesium/components/overlays'

import { VcPostProcessStage, VcPostProcessStageScan, VcPostProcessStageCollection } from '@vue-cesium/components/post-processes'

// UI
import {
  VcBtn,
  VcIcon,
  VcTooltip,
  VcAjaxBar,
  VcSkeleton,
  VcSpinnerBall,
  VcSpinnerBars,
  VcSpinnerDots,
  VcSpinnerGears,
  VcSpinnerHourglass,
  VcSpinnerIos,
  VcSpinnerOrbit,
  VcSpinnerOval,
  VcSpinnerPuff,
  VcSpinnerRings,
  VcSpinnerTail,
  VcSpinner,
  VcFab,
  VcFabAction
} from '@vue-cesium/components/ui'

// config
import VcConfigProvider from '@vue-cesium/components/config-provider'

// analyses
import { VcAnalysisFlood, VcAnalyses } from '@vue-cesium/components/analyses'

import type { Plugin } from 'vue'

export default [
  VcViewer,

  VcCompass,
  VcZoomControl,
  VcPrint,
  VcMyLocation,
  VcStatusBar,
  VcDistanceLegend,
  VcNavigation,
  VcCompassSm,
  VcZoomControlSm,
  VcNavigationSm,
  VcOverviewMap,
  VcSelectionIndicator,

  VcMeasurements,
  VcDrawings,

  VcLayerImagery,
  VcImageryProviderArcgis,
  VcImageryProviderBaidu,
  VcImageryProviderBing,
  VcImageryProviderGoogle,
  VcImageryProviderGrid,
  VcImageryProviderIon,
  VcImageryProviderMapbox,
  VcImageryProviderOsm,
  VcImageryProviderSingletile,
  VcImageryProviderSupermap,
  VcImageryProviderTianditu,
  VcImageryProviderTileCoordinates,
  VcImageryProviderTms,
  VcImageryProviderTiledcache,
  VcImageryProviderUrltemplate,
  VcImageryProviderWms,
  VcImageryProviderWmts,

  VcTerrainProviderCesium,
  VcTerrainProviderArcgis,
  VcTerrainProviderVrTheworld,
  VcTerrainProviderTianditu,

  VcDatasourceCustom,
  VcDatasourceCzml,
  VcDatasourceGeojson,
  VcDatasourceKml,

  VcEntity,
  VcGraphicsBillboard,
  VcGraphicsBox,
  VcGraphicsCorridor,
  VcGraphicsCylinder,
  VcGraphicsEllipse,
  VcGraphicsEllipsoid,
  VcGraphicsLabel,
  VcGraphicsModel,
  VcGraphicsPath,
  VcGraphicsPlane,
  VcGraphicsPoint,
  VcGraphicsPolygon,
  VcGraphicsPolyline,
  VcGraphicsPolylineVolume,
  VcGraphicsRectangle,
  VcGraphicsTileset,
  VcGraphicsWall,

  VcPrimitiveClassification,
  VcPrimitiveGround,
  VcPrimitiveGroundPolyline,
  VcPrimitiveModel,
  VcPrimitive,
  VcPrimitiveTileset,
  VcPrimitiveParticle,

  VcCollectionBillboard,
  VcCollectionLabel,
  VcCollectionPoint,
  VcCollectionPolyline,
  VcCollectionPrimitive,

  VcBillboard,
  VcLabel,
  VcPoint,
  VcPolyline,
  VcPolygon,

  VcGeometryInstance,

  VcGeometryBox,
  VcGeometryBoxOutline,
  VcGeometryCircle,
  VcGeometryCircleOutline,
  VcGeometryPolygonCoplanar,
  VcGeometryPolygonCoplanarOutline,
  VcGeometryCorridor,
  VcGeometryCorridorOutline,
  VcGeometryCylinder,
  VcGeometryCylinderOutline,
  VcGeometryEllipse,
  VcGeometryEllipseOutline,
  VcGeometryEllipsoid,
  VcGeometryEllipsoidOutline,
  VcGeometryFrustum,
  VcGeometryFrustumOutline,
  VcGeometryGroundPolyline,
  VcGeometryPlane,
  VcGeometryPlaneOutline,
  VcGeometryPolygon,
  VcGeometryPolygonOutline,
  VcGeometryPolyline,
  VcGeometryPolylineVolume,
  VcGeometryPolylineVolumeOutline,
  VcGeometryRectangle,
  VcGeometryRectangleOutline,
  VcGeometryPolylineSimple,
  VcGeometrySphere,
  VcGeometrySphereOutline,
  VcGeometryWall,
  VcGeometryWallOutline,

  VcOverlayHtml,
  VcOverlayHeatmap,
  VcOverlayWind,
  VcOverlayDynamic,
  VcOverlayEcharts,

  VcPostProcessStage,
  VcPostProcessStageScan,
  VcPostProcessStageCollection,

  VcBtn,
  VcIcon,
  VcTooltip,
  VcAjaxBar,
  VcSkeleton,
  VcSpinnerBall,
  VcSpinnerBars,
  VcSpinnerDots,
  VcSpinnerGears,
  VcSpinnerHourglass,
  VcSpinnerIos,
  VcSpinnerOrbit,
  VcSpinnerOval,
  VcSpinnerPuff,
  VcSpinnerRings,
  VcSpinnerTail,
  VcSpinner,
  VcFab,
  VcFabAction,

  VcConfigProvider,
  VcAnalysisFlood,
  VcAnalyses
] as Plugin[]
