import type { Plugin } from 'vue'
// analyses
import { VcAnalyses, VcAnalysisFlood } from '@vue-cesium/components/analyses'
// config
import VcConfigProvider from '@vue-cesium/components/config-provider'
// controls
import {
  VcCompass,
  VcCompassSm,
  VcDistanceLegend,
  VcMyLocation,
  VcNavigation,
  VcNavigationSm,
  VcOverviewMap,
  VcPrint,
  VcSelectionIndicator,
  VcStatusBar,
  VcZoomControl,
  VcZoomControlSm
} from '@vue-cesium/components/controls'
// Datasource
import { VcDatasourceCustom, VcDatasourceCzml, VcDatasourceGeojson, VcDatasourceKml } from '@vue-cesium/components/datasources'
import VcDrawings from '@vue-cesium/components/drawings'

// Entity
import VcEntity from '@vue-cesium/components/entity'

// Geometries
import {
  VcGeometryBox,
  VcGeometryBoxOutline,
  VcGeometryCircle,
  VcGeometryCircleOutline,
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
  VcGeometryPolygonCoplanar,
  VcGeometryPolygonCoplanarOutline,
  VcGeometryPolygonOutline,
  VcGeometryPolyline,
  VcGeometryPolylineVolume,
  VcGeometryPolylineVolumeOutline,
  VcGeometryRectangle,
  VcGeometryRectangleOutline,
  VcGeometrySimplePolyline,
  VcGeometrySphere,
  VcGeometrySphereOutline,
  VcGeometryWall,
  VcGeometryWallOutline
} from '@vue-cesium/components/geometries'

// GeometryInstance
import VcGeometryInstance from '@vue-cesium/components/geometry-instance'

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

// ImagerLayer
import VcLayerImagery from '@vue-cesium/components/imagery-layer'

// tools
import VcMeasurements from '@vue-cesium/components/measurements'

// Overlay
import { VcOverlayDynamic, VcOverlayEcharts, VcOverlayHeatmap, VcOverlayHtml, VcOverlayTyphoon, VcOverlayWind } from '@vue-cesium/components/overlays'

import { VcPostProcessStage, VcPostProcessStageCollection, VcPostProcessStageScan } from '@vue-cesium/components/post-processes'

// PrimitiveCollections
import {
  VcBillboard,
  VcCollectionBillboard,
  VcCollectionCloud,
  VcCollectionLabel,
  VcCollectionPoint,
  VcCollectionPolyline,
  VcCollectionPrimitive,
  VcCumulusCloud,
  VcLabel,
  VcPoint,
  VcPolygon,
  VcPolyline
} from '@vue-cesium/components/primitive-collections'

// Primitives
import {
  VcPrimitive,
  VcPrimitiveClassification,
  VcPrimitiveCluster,
  VcPrimitiveGround,
  VcPrimitiveGroundPolyline,
  VcPrimitiveI3sDataProvider,
  VcPrimitiveModel,
  VcPrimitiveOsmBuildings,
  VcPrimitiveParticle,
  VcPrimitiveTileset,
  VcPrimitiveTimeDynamicPointCloud,
  VcPrimitiveVoxel
} from '@vue-cesium/components/primitives'

import {
  VcImageryProviderAmap,
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
  VcImageryProviderTencent,
  VcImageryProviderTianditu,
  VcImageryProviderTileCoordinates,
  VcImageryProviderTiledcache,
  VcImageryProviderTms,
  VcImageryProviderUrltemplate,
  VcImageryProviderWms,
  VcImageryProviderWmts,
  VcTerrainProviderArcgis,
  VcTerrainProviderCesium,
  VcTerrainProviderTianditu,
  VcTerrainProviderVrTheworld
} from '@vue-cesium/components/providers'

// UI
import {
  VcAjaxBar,
  VcBtn,
  VcFab,
  VcFabAction,
  VcIcon,
  VcSkeleton,
  VcSlider,
  VcSpinner,
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
  VcTooltip
} from '@vue-cesium/components/ui'

// Viewer
import { VcViewer } from '@vue-cesium/components/viewer'

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
  VcImageryProviderAmap,
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
  VcImageryProviderTencent,
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
  VcPrimitiveOsmBuildings,
  VcPrimitiveTimeDynamicPointCloud,
  VcPrimitiveI3sDataProvider,
  VcPrimitiveVoxel,
  VcPrimitiveParticle,
  VcPrimitiveCluster,

  VcCollectionBillboard,
  VcCollectionCloud,
  VcCollectionLabel,
  VcCollectionPoint,
  VcCollectionPolyline,
  VcCollectionPrimitive,

  VcBillboard,
  VcCumulusCloud,
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
  VcGeometrySimplePolyline,
  VcGeometrySphere,
  VcGeometrySphereOutline,
  VcGeometryWall,
  VcGeometryWallOutline,

  VcOverlayHtml,
  VcOverlayHeatmap,
  VcOverlayWind,
  VcOverlayDynamic,
  VcOverlayEcharts,
  VcOverlayTyphoon,

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
  VcSlider,

  VcConfigProvider,
  VcAnalysisFlood,
  VcAnalyses
] as Plugin[]
