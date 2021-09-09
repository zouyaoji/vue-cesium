import type { App } from 'vue'
import VcViewer from '@vue-cesium/viewer'
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
} from '@vue-cesium/controls'
// tools
import VcMeasurements from '@vue-cesium/measurements'
import VcDrawings from '@vue-cesium/drawings'
// imagery-layer
import VcLayerImagery from '@vue-cesium/imagery-layer'
import {
  VcProviderImageryArcgis,
  VcProviderImageryBaidumap,
  VcProviderImageryBingmaps,
  VcProviderImageryGoogle,
  VcProviderImageryGrid,
  VcProviderImageryIon,
  VcProviderImageryMapbox,
  VcProviderImageryOsm,
  VcProviderImagerySingletile,
  VcProviderImagerySupermap,
  VcProviderImageryTianditu,
  VcProviderImageryTileCoordinates,
  VcProviderImageryTms,
  VcProviderImageryTiledcache,
  VcProviderImageryUrltemplate,
  VcProviderImageryWms,
  VcProviderImageryWmts,

  VcProviderTerrainCesium,
  VcProviderTerrainArcgis,
  VcProviderTerrainVrTheworld,
  VcProviderTerrainTianditu
} from '@vue-cesium/providers'

// datasources
import {
  VcDatasourceCustom,
  VcDatasourceCzml,
  VcDatasourceGeojson,
  VcDatasourceKml
} from '@vue-cesium/datasources'

import VcEntity from '@vue-cesium/entity'
// grapics
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
} from '@vue-cesium/graphics'

// primitives
import {
  VcPrimitiveClassification,
  VcPrimitiveGround,
  VcPrimitiveGroundPolyline,
  VcPrimitiveModel,
  VcPrimitive,
  VcPrimitiveTileset,
  VcPrimitiveParticle
} from '@vue-cesium/primitives'

// primitive-collections
import {
  VcCollectionBillboard,
  VcCollectionLabel,
  VcCollectionPoint,
  VcCollectionPolyline,
  VcCollectionPrimitive,

  VcBillboard,
  VcLabel,
  VcPoint,
  VcPolyline
} from '@vue-cesium/primitive-collections'

// geometries
import VcInstanceGeometry from '@vue-cesium/geometry-instance'

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
  VcGeometryPolylineGround,
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
} from '@vue-cesium/geometries'

import {
  VcOverlayHtml,
  VcOverlayHeatmap
} from '@vue-cesium/overlays'

import {
  VcPostProcessStage,
  VcPostProcessStageScan,
  VcPostProcessStageCollection
} from '@vue-cesium/post-processes'

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
} from '@vue-cesium/ui'

import { use, i18n } from '@vue-cesium/locale'
// if you encountered problems alike "Can't resolve './version'"
// please run `yarn bootstrap` first
import { version as version_ } from './version'
import type { InstallOptions } from '@vue-cesium/utils/config'
import { setConfig } from '@vue-cesium/utils/config'

const version = version_
const locale = use

const defaultInstallOpt: InstallOptions = {
  cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo',
}

const components = [
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
  VcProviderImageryArcgis,
  VcProviderImageryBaidumap,
  VcProviderImageryBingmaps,
  VcProviderImageryGoogle,
  VcProviderImageryGrid,
  VcProviderImageryIon,
  VcProviderImageryMapbox,
  VcProviderImageryOsm,
  VcProviderImagerySingletile,
  VcProviderImagerySupermap,
  VcProviderImageryTianditu,
  VcProviderImageryTileCoordinates,
  VcProviderImageryTms,
  VcProviderImageryTiledcache,
  VcProviderImageryUrltemplate,
  VcProviderImageryWms,
  VcProviderImageryWmts,

  VcProviderTerrainCesium,
  VcProviderTerrainArcgis,
  VcProviderTerrainVrTheworld,
  VcProviderTerrainTianditu,

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

  VcInstanceGeometry,

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
  VcGeometryPolylineGround,
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
  VcFabAction
]

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt)
  locale(option.lang)
  if (option.i18n) {
    i18n(option.i18n)
  }
  app.config.globalProperties.$VueCesium = option
  setConfig(option)
  app.config.globalProperties.$VueCesium.version = version

  components.forEach(component => {
    app.component(component.name, component)
  })

  // plugins.forEach(plugin => {
  //   app.use(plugin as any)
  // })
}

export {
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
  VcProviderImageryArcgis,
  VcProviderImageryBaidumap,
  VcProviderImageryBingmaps,
  VcProviderImageryGoogle,
  VcProviderImageryGrid,
  VcProviderImageryIon,
  VcProviderImageryMapbox,
  VcProviderImageryOsm,
  VcProviderImagerySingletile,
  VcProviderImagerySupermap,
  VcProviderImageryTianditu,
  VcProviderImageryTileCoordinates,
  VcProviderImageryTms,
  VcProviderImageryTiledcache,
  VcProviderImageryUrltemplate,
  VcProviderImageryWms,
  VcProviderImageryWmts,

  VcProviderTerrainCesium,
  VcProviderTerrainArcgis,
  VcProviderTerrainVrTheworld,
  VcProviderTerrainTianditu,

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

  VcInstanceGeometry,

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
  VcGeometryPolylineGround,
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

  version,
  install,
  locale
}
export * from '@vue-cesium/composables'
export * from '@vue-cesium/shared'
export default {
  version,
  install,
}
