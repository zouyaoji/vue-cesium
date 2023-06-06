/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 15:12:31
 * @LastEditTime: 2023-06-05 11:08:29
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\typings\global.d.ts
 */

import {
  ComponentOptions,
  ComponentPublicInstance,
  ComputedOptions,
  MethodOptions,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps
} from 'vue'
import {
  QSliderSlots,
  VcAjaxBarProps,
  VcAnalysesProps,
  VcAnalysesSlots,
  VcAnalysisFloodProps,
  VcBillboardProps,
  VcBtnProps,
  VcBtnSlots,
  VcCollectionBillboardProps,
  VcCollectionBillboardSlots,
  VcCollectionLabelProps,
  VcCollectionLabelSlots,
  VcCollectionPointProps,
  VcCollectionPointSlots,
  VcCollectionPolylineProps,
  VcCollectionPolylineSlots,
  VcCollectionPrimitiveProps,
  VcCollectionPrimitiveSlots,
  VcCompassProps,
  VcCompassSmProps,
  VcConfigProviderProps,
  VcConfigProviderSlots,
  VcDatasourceCustomProps,
  VcDatasourceCustomSlots,
  VcDatasourceCzmlProps,
  VcDatasourceCzmlSlots,
  VcDatasourceGeojsonProps,
  VcDatasourceGeojsonSlots,
  VcDatasourceKmlProps,
  VcDatasourceKmlSlots,
  VcDistanceLegendProps,
  VcDrawingsProps,
  VcDrawingsSlots,
  VcEntityProps,
  VcEntitySlots,
  VcFabActionProps,
  VcFabActionSlots,
  VcFabProps,
  VcFabSlots,
  VcGeometryBoxOutlineProps,
  VcGeometryBoxProps,
  VcGeometryCircleOutlineProps,
  VcGeometryCircleProps,
  VcGeometryCorridorOutlineProps,
  VcGeometryCorridorProps,
  VcGeometryCylinderOutlineProps,
  VcGeometryCylinderProps,
  VcGeometryEllipseOutlineProps,
  VcGeometryEllipseOutlineRef,
  VcGeometryEllipseProps,
  VcGeometryEllipsoidProps,
  VcGeometryFrustumOutlineProps,
  VcGeometryFrustumProps,
  VcGeometryGroundPolylineProps,
  VcGeometryInstanceProps,
  VcGeometryInstanceSlots,
  VcGeometryPlaneOutlineProps,
  VcGeometryPlaneProps,
  VcGeometryPolygonCoplanarOutlineProps,
  VcGeometryPolygonCoplanarProps,
  VcGeometryPolygonOutlineProps,
  VcGeometryPolygonProps,
  VcGeometryPolylineProps,
  VcGeometryPolylineVolumeOutlineProps,
  VcGeometryPolylineVolumeProps,
  VcGeometryRectangleOutlineProps,
  VcGeometryRectangleProps,
  VcGeometrySimplePolylineProps,
  VcGeometrySphereOutlineProps,
  VcGeometrySphereProps,
  VcGeometryWallOutlineProps,
  VcGeometryWallProps,
  VcGraphicsBillboardProps,
  VcGraphicsBoxProps,
  VcGraphicsCorridorProps,
  VcGraphicsCylinderProps,
  VcGraphicsEllipseProps,
  VcGraphicsEllipsoidProps,
  VcGraphicsLabelProps,
  VcGraphicsModelProps,
  VcGraphicsPathProps,
  VcGraphicsPlaneProps,
  VcGraphicsPointProps,
  VcGraphicsPolygonProps,
  VcGraphicsPolylineProps,
  VcGraphicsPolylineVolumeProps,
  VcGraphicsRectangleProps,
  VcGraphicsTilesetProps,
  VcGraphicsWallProps,
  VcIconProps,
  VcIconRef,
  VcImageryProviderAmapProps,
  VcImageryProviderArcgisProps,
  VcImageryProviderBaiduProps,
  VcImageryProviderBingProps,
  VcImageryProviderGoogleProps,
  VcImageryProviderGridProps,
  VcImageryProviderIonProps,
  VcImageryProviderMapboxProps,
  VcImageryProviderOsmProps,
  VcImageryProviderSingletileProps,
  VcImageryProviderSupermapProps,
  VcImageryProviderTencentProps,
  VcImageryProviderTiandituProps,
  VcImageryProviderTileCoordinatesProps,
  VcImageryProviderTiledcacheProps,
  VcImageryProviderTmsProps,
  VcImageryProviderUrltemplateProps,
  VcImageryProviderWmsProps,
  VcImageryProviderWmtsProps,
  VcLabelProps,
  VcLayerImageryProps,
  VcLayerImagerySlots,
  VcMeasurementsProps,
  VcMeasurementsSlots,
  VcMyLocationProps,
  VcNavigationProps,
  VcNavigationSlots,
  VcNavigationSmProps,
  VcNavigationSmSlots,
  VcOverlayDynamicProps,
  VcOverlayEchartsProps,
  VcOverlayHeatmapProps,
  VcOverlayHtmlProps,
  VcOverlayHtmlSlots,
  VcOverlayTyphoonProps,
  VcOverlayWindmapProps,
  VcOverviewMapProps,
  VcOverviewMapSlots,
  VcPointProps,
  VcPolygonProps,
  VcPolylineProps,
  VcPostProcessStageCollectionProps,
  VcPostProcessStageCollectionSlots,
  VcPostProcessStageProps,
  VcPostProcessStageScanProps,
  VcPrimitiveClassificationProps,
  VcPrimitiveClassificationSlots,
  VcPrimitiveClusterProps,
  VcPrimitiveGroundProps,
  VcPrimitiveGroundSlots,
  VcPrimitiveI3sDataProviderProps,
  VcPrimitiveModelProps,
  VcPrimitiveModelSlots,
  VcPrimitiveOsmBuildingsProps,
  VcPrimitiveParticleProps,
  VcPrimitiveProps,
  VcPrimitiveSlots,
  VcPrimitiveTilesetProps,
  VcPrimitiveTimeDynamicPointCloudProps,
  VcPrimitiveVoxelProps,
  VcSelectionIndicatorProps,
  VcSliderProps,
  VcSpinnerBallProps,
  VcSpinnerBarsProps,
  VcSpinnerDotsProps,
  VcSpinnerGearsProps,
  VcSpinnerHourglassProps,
  VcSpinnerIosProps,
  VcSpinnerOrbitProps,
  VcSpinnerOvalProps,
  VcSpinnerProps,
  VcSpinnerPuffProps,
  VcSpinnerRingsProps,
  VcSpinnerTailProps,
  VcTerrainProviderArcgisProps,
  VcTerrainProviderCesiumProps,
  VcTerrainProviderTiandituProps,
  VcTerrainProviderVrTheworldProps,
  VcTooltipProps,
  VcTooltipSlots,
  VcViewerProps,
  VcViewerSlots,
  VcZoomControlProps,
  VcZoomControlSmProps
} from 'vue-cesium'

export type StringDictionary<T extends string> = Required<{ [index in T]: string }>

// Needed to prevent TS to collapse `'value1' | 'value2' | string` to `string`, which breaks first parameter autocomplete
// See: https://github.com/microsoft/TypeScript/issues/29729#issuecomment-832522611
export type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>)

// See: https://stackoverflow.com/a/49936686/7931540
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}

// Create a fake constructor signature for a Vue component, needed to correctly extract/infer Component type in many situation,
// especially into VTU to automatically infer Quasar components type when using `findComponent`
// This type is compatible with the Vue private `ComponentPublicInstanceConstructor` type
// https://github.com/vuejs/vue-next/blob/011dee8644bb52f5bdc6365c6e8404936d57e2cd/packages/runtime-core/src/componentPublicInstance.ts#L111
export type ComponentConstructor<
  Component extends ComponentPublicInstance<Props, RawBindings, D, C, M> = ComponentPublicInstance<any>,
  Props = any,
  RawBindings = any,
  D = any,
  C extends ComputedOptions = ComputedOptions,
  M extends MethodOptions = MethodOptions
> = { new (): Component } & ComponentOptions<Props, RawBindings, D, C, M>

// https://github.com/vuejs/vue-next/blob/d84d5ecdbdf709570122175d6565bb61fae877f2/packages/runtime-core/src/apiDefineComponent.ts#L29-L31
// TODO: This can be imported from vue directly once this PR gets merged: https://github.com/vuejs/vue-next/pull/2403
export type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps

type EmptyObject = {
  [K in never]: never
}

// Can't use `DefineComponent` because of the false prop inferring behavior, it doesn't pick up the required types when an interface is passed
// This PR will probably solve the problem as it moves the prop inferring behavior to `defineComponent` function: https://github.com/vuejs/vue-next/pull/4465
// GlobalComponentConstructor helper is kind of like the ComponentConstructor type helper, but simpler and keeps the Volar errors simpler,
// and also similar to the usage in official Vue packages: https://github.com/vuejs/vue-next/blob/d84d5ecdbdf709570122175d6565bb61fae877f2/packages/runtime-core/src/components/BaseTransition.ts#L258-L264 or https://github.com/vuejs/vue-router-next/blob/5dd5f47515186ce34efb9118dda5aad0bb773439/src/RouterView.ts#L160-L172 etc.
// TODO: This can be replaced with `DefineComponent` once this PR gets merged: https://github.com/vuejs/vue-next/pull/4465
export type GlobalComponentConstructor<Props = EmptyObject, Slots = EmptyObject> = {
  new (): {
    $props: PublicProps & Props
    $slots: Slots
  }
}

// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    VcViewer: GlobalComponentConstructor<VcViewerProps, VcViewerSlots>

    VcNavigation: GlobalComponentConstructor<VcNavigationProps, VcNavigationSlots>
    VcCompass: GlobalComponentConstructor<VcCompassProps>
    VcZoomControl: GlobalComponentConstructor<VcZoomControlProps>
    VcMyLocation: GlobalComponentConstructor<VcMyLocationProps>
    VcDistanceLegend: GlobalComponentConstructor<VcDistanceLegendProps>
    VcNavigationSm: GlobalComponentConstructor<VcNavigationSmProps, VcNavigationSmSlots>
    VcCompassSm: GlobalComponentConstructor<VcCompassSmProps>
    VcZoomControlSm: GlobalComponentConstructor<VcZoomControlSmProps>
    VcOverviewMap: GlobalComponentConstructor<VcOverviewMapProps, VcOverviewMapSlots>
    VcSelectionIndicator: GlobalComponentConstructor<VcSelectionIndicatorProps>

    VcMeasurements: GlobalComponentConstructor<VcMeasurementsProps, VcMeasurementsSlots>
    VcDrawings: GlobalComponentConstructor<VcDrawingsProps, VcDrawingsSlots>
    VcAnalyses: GlobalComponentConstructor<VcAnalysesProps, VcAnalysesSlots>
    VcAnalysisFlood: GlobalComponentConstructor<VcAnalysisFloodProps>

    VcLayerImagery: GlobalComponentConstructor<VcLayerImageryProps, VcLayerImagerySlots>
    VcImageryProviderAmap: GlobalComponentConstructor<VcImageryProviderAmapProps>
    VcImageryProviderArcgis: GlobalComponentConstructor<VcImageryProviderArcgisProps>
    VcImageryProviderBaidu: GlobalComponentConstructor<VcImageryProviderBaiduProps>
    VcImageryProviderBing: GlobalComponentConstructor<VcImageryProviderBingProps>
    VcImageryProviderGoogle: GlobalComponentConstructor<VcImageryProviderGoogleProps>
    VcImageryProviderGrid: GlobalComponentConstructor<VcImageryProviderGridProps>
    VcImageryProviderIon: GlobalComponentConstructor<VcImageryProviderIonProps>
    VcImageryProviderMapbox: GlobalComponentConstructor<VcImageryProviderMapboxProps>
    VcImageryProviderOsm: GlobalComponentConstructor<VcImageryProviderOsmProps>
    VcImageryProviderSingletile: GlobalComponentConstructor<VcImageryProviderSingletileProps>
    VcImageryProviderSupermap: GlobalComponentConstructor<VcImageryProviderSupermapProps>
    VcImageryProviderTencent: GlobalComponentConstructor<VcImageryProviderTencentProps>
    VcImageryProviderTianditu: GlobalComponentConstructor<VcImageryProviderTiandituProps>
    VcImageryProviderTileCoordinates: GlobalComponentConstructor<VcImageryProviderTileCoordinatesProps>
    VcImageryProviderTms: GlobalComponentConstructor<VcImageryProviderTmsProps>
    VcImageryProviderTiledcache: GlobalComponentConstructor<VcImageryProviderTiledcacheProps>
    VcImageryProviderUrltemplate: GlobalComponentConstructor<VcImageryProviderUrltemplateProps>
    VcImageryProviderWms: GlobalComponentConstructor<VcImageryProviderWmsProps>
    VcImageryProviderWmts: GlobalComponentConstructor<VcImageryProviderWmtsProps>

    VcTerrainProviderCesium: GlobalComponentConstructor<VcTerrainProviderCesiumProps>
    VcTerrainProviderArcgis: GlobalComponentConstructor<VcTerrainProviderArcgisProps>
    VcTerrainProviderVrTheworld: GlobalComponentConstructor<VcTerrainProviderVrTheworldProps>
    VcTerrainProviderTianditu: GlobalComponentConstructor<VcTerrainProviderTiandituProps>

    VcDatasourceCustom: GlobalComponentConstructor<VcDatasourceCustomProps, VcDatasourceCustomSlots>
    VcDatasourceCzml: GlobalComponentConstructor<VcDatasourceCzmlProps, VcDatasourceCzmlSlots>
    VcDatasourceGeojson: GlobalComponentConstructor<VcDatasourceGeojsonProps, VcDatasourceGeojsonSlots>
    VcDatasourceKml: GlobalComponentConstructor<VcDatasourceKmlProps, VcDatasourceKmlSlots>

    VcEntity: GlobalComponentConstructor<VcEntityProps, VcEntitySlots>
    VcGraphicsBillboard: GlobalComponentConstructor<VcGraphicsBillboardProps>
    VcGraphicsBox: GlobalComponentConstructor<VcGraphicsBoxProps>
    VcGraphicsCorridor: GlobalComponentConstructor<VcGraphicsCorridorProps>
    VcGraphicsCylinder: GlobalComponentConstructor<VcGraphicsCylinderProps>
    VcGraphicsEllipse: GlobalComponentConstructor<VcGraphicsEllipseProps>
    VcGraphicsEllipsoid: GlobalComponentConstructor<VcGraphicsEllipsoidProps>
    VcGraphicsLabel: GlobalComponentConstructor<VcGraphicsLabelProps>
    VcGraphicsModel: GlobalComponentConstructor<VcGraphicsModelProps>
    VcGraphicsPath: GlobalComponentConstructor<VcGraphicsPathProps>
    VcGraphicsPlane: GlobalComponentConstructor<VcGraphicsPlaneProps>
    VcGraphicsPoint: GlobalComponentConstructor<VcGraphicsPointProps>
    VcGraphicsPolygon: GlobalComponentConstructor<VcGraphicsPolygonProps>
    VcGraphicsPolyline: GlobalComponentConstructor<VcGraphicsPolylineProps>
    VcGraphicsPolylineVolume: GlobalComponentConstructor<VcGraphicsPolylineVolumeProps>
    VcGraphicsRectangle: GlobalComponentConstructor<VcGraphicsRectangleProps>
    VcGraphicsTileset: GlobalComponentConstructor<VcGraphicsTilesetProps>
    VcGraphicsWall: GlobalComponentConstructor<VcGraphicsWallProps>

    VcPrimitiveClassification: GlobalComponentConstructor<VcPrimitiveClassificationProps, VcPrimitiveClassificationSlots>
    VcPrimitiveGround: GlobalComponentConstructor<VcPrimitiveGroundProps, VcPrimitiveGroundSlots>
    VcPrimitiveGroundPolyline: GlobalComponentConstructor<VcPrimitiveGroundProps, VcPrimitiveGroundSlots>
    VcPrimitiveModel: GlobalComponentConstructor<VcPrimitiveModelProps, VcPrimitiveModelSlots>
    VcPrimitive: GlobalComponentConstructor<VcPrimitiveProps, VcPrimitiveSlots>
    VcPrimitiveTileset: GlobalComponentConstructor<VcPrimitiveTilesetProps>
    VcPrimitiveParticle: GlobalComponentConstructor<VcPrimitiveParticleProps>
    VcPrimitiveTimeDynamicPointCloud: GlobalComponentConstructor<VcPrimitiveTimeDynamicPointCloudProps>
    VcPrimitiveI3sDataProvider: GlobalComponentConstructor<VcPrimitiveI3sDataProviderProps>
    VcPrimitiveOsmBuildings: GlobalComponentConstructor<VcPrimitiveOsmBuildingsProps>
    VcPrimitiveVoxel: GlobalComponentConstructor<VcPrimitiveVoxelProps>
    VcPrimitiveCluster: GlobalComponentConstructor<VcPrimitiveClusterProps>

    VcCollectionBillboard: GlobalComponentConstructor<VcCollectionBillboardProps, VcCollectionBillboardSlots>
    VcCollectionLabel: GlobalComponentConstructor<VcCollectionLabelProps, VcCollectionLabelSlots>
    VcCollectionPoint: GlobalComponentConstructor<VcCollectionPointProps, VcCollectionPointSlots>
    VcCollectionPolyline: GlobalComponentConstructor<VcCollectionPolylineProps, VcCollectionPolylineSlots>
    VcCollectionPrimitive: GlobalComponentConstructor<VcCollectionPrimitiveProps, VcCollectionPrimitiveSlots>
    VcBillboard: GlobalComponentConstructor<VcBillboardProps>
    VcLabel: GlobalComponentConstructor<VcLabelProps>
    VcPoint: GlobalComponentConstructor<VcPointProps>
    VcPolyline: GlobalComponentConstructor<VcPolylineProps>
    VcPolygon: GlobalComponentConstructor<VcPolygonProps>

    VcGeometryInstance: GlobalComponentConstructor<VcGeometryInstanceProps, VcGeometryInstanceSlots>

    VcGeometryBox: GlobalComponentConstructor<VcGeometryBoxProps>
    VcGeometryBoxOutline: GlobalComponentConstructor<VcGeometryBoxOutlineProps>
    VcGeometryCircle: GlobalComponentConstructor<VcGeometryCircleProps>
    VcGeometryCircleOutline: GlobalComponentConstructor<VcGeometryCircleOutlineProps>
    VcGeometryPolygonCoplanar: GlobalComponentConstructor<VcGeometryPolygonCoplanarProps>
    VcGeometryPolygonCoplanarOutline: GlobalComponentConstructor<VcGeometryPolygonCoplanarOutlineProps>
    VcGeometryCorridor: GlobalComponentConstructor<VcGeometryCorridorProps>
    VcGeometryCorridorOutline: GlobalComponentConstructor<VcGeometryCorridorOutlineProps>
    VcGeometryCylinder: GlobalComponentConstructor<VcGeometryCylinderProps>
    VcGeometryCylinderOutline: GlobalComponentConstructor<VcGeometryCylinderOutlineProps>
    VcGeometryEllipse: GlobalComponentConstructor<VcGeometryEllipseProps>
    VcGeometryEllipseOutline: GlobalComponentConstructor<VcGeometryEllipseOutlineProps>
    VcGeometryEllipsoid: GlobalComponentConstructor<VcGeometryEllipsoidProps>
    VcGeometryEllipsoidOutline: GlobalComponentConstructor<VcGeometryEllipseOutlineRef>
    VcGeometryFrustum: GlobalComponentConstructor<VcGeometryFrustumProps>
    VcGeometryFrustumOutline: GlobalComponentConstructor<VcGeometryFrustumOutlineProps>
    VcGeometryGroundPolyline: GlobalComponentConstructor<VcGeometryGroundPolylineProps>
    VcGeometryPlane: GlobalComponentConstructor<VcGeometryPlaneProps>
    VcGeometryPlaneOutline: GlobalComponentConstructor<VcGeometryPlaneOutlineProps>
    VcGeometryPolygon: GlobalComponentConstructor<VcGeometryPolygonProps>
    VcGeometryPolygonOutline: GlobalComponentConstructor<VcGeometryPolygonOutlineProps>
    VcGeometryPolyline: GlobalComponentConstructor<VcGeometryPolylineProps>
    VcGeometryPolylineVolume: GlobalComponentConstructor<VcGeometryPolylineVolumeProps>
    VcGeometryPolylineVolumeOutline: GlobalComponentConstructor<VcGeometryPolylineVolumeOutlineProps>
    VcGeometryRectangle: GlobalComponentConstructor<VcGeometryRectangleProps>
    VcGeometryRectangleOutline: GlobalComponentConstructor<VcGeometryRectangleOutlineProps>
    VcGeometrySimplePolyline: GlobalComponentConstructor<VcGeometrySimplePolylineProps>
    VcGeometrySphere: GlobalComponentConstructor<VcGeometrySphereProps>
    VcGeometrySphereOutline: GlobalComponentConstructor<VcGeometrySphereOutlineProps>
    VcGeometryWall: GlobalComponentConstructor<VcGeometryWallProps>
    VcGeometryWallOutline: GlobalComponentConstructor<VcGeometryWallOutlineProps>

    VcOverlayHtml: GlobalComponentConstructor<VcOverlayHtmlProps, VcOverlayHtmlSlots>
    VcOverlayHeatmap: GlobalComponentConstructor<VcOverlayHeatmapProps>
    VcOverlayWind: GlobalComponentConstructor<VcOverlayWindmapProps>
    VcOverlayDynamic: GlobalComponentConstructor<VcOverlayDynamicProps>
    VcOverlayEcharts: GlobalComponentConstructor<VcOverlayEchartsProps>
    VcOverlayTyphoon: GlobalComponentConstructor<VcOverlayTyphoonProps>

    VcPostProcessStage: GlobalComponentConstructor<VcPostProcessStageProps>
    VcPostProcessStageScan: GlobalComponentConstructor<VcPostProcessStageScanProps>
    VcPostProcessStageCollection: GlobalComponentConstructor<VcPostProcessStageCollectionProps, VcPostProcessStageCollectionSlots>

    VcBtn: GlobalComponentConstructor<VcBtnProps, VcBtnSlots>
    VcIcon: GlobalComponentConstructor<VcIconProps, VcIconRef>
    VcTooltip: GlobalComponentConstructor<VcTooltipProps, VcTooltipSlots>
    VcAjaxBar: GlobalComponentConstructor<VcIconProps, VcIconRef>
    VcSkeleton: GlobalComponentConstructor<VcAjaxBarProps>
    VcSpinnerBall: GlobalComponentConstructor<VcSpinnerBallProps>
    VcSpinnerBars: GlobalComponentConstructor<VcSpinnerBarsProps>
    VcSpinnerDots: GlobalComponentConstructor<VcSpinnerDotsProps>
    VcSpinnerGears: GlobalComponentConstructor<VcSpinnerGearsProps>
    VcSpinnerHourglass: GlobalComponentConstructor<VcSpinnerHourglassProps>
    VcSpinnerIos: GlobalComponentConstructor<VcSpinnerIosProps>
    VcSpinnerOrbit: GlobalComponentConstructor<VcSpinnerOrbitProps>
    VcSpinnerOval: GlobalComponentConstructor<VcSpinnerOvalProps>
    VcSpinnerPuff: GlobalComponentConstructor<VcSpinnerPuffProps>
    VcSpinnerRings: GlobalComponentConstructor<VcSpinnerRingsProps>
    VcSpinnerTail: GlobalComponentConstructor<VcSpinnerTailProps>
    VcSpinner: GlobalComponentConstructor<VcSpinnerProps>
    VcFab: GlobalComponentConstructor<VcFabProps, VcFabSlots>
    VcFabAction: GlobalComponentConstructor<VcFabActionProps, VcFabActionSlots>
    VcSlider: GlobalComponentConstructor<VcSliderProps, QSliderSlots>

    VcConfigProvider: GlobalComponentConstructor<VcConfigProviderProps, VcConfigProviderSlots>
  }
}

export {}
