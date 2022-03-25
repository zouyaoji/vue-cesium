/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 15:12:31
 * @LastEditTime: 2022-03-10 13:34:02
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\typings\global.d.ts
 */
import { VcCompassSmProps } from '@vue-cesium/components/controls/navigation-sm/compass-sm'
import { VcZoomControlSmProps } from '@vue-cesium/components/controls/navigation-sm/zoom-control-sm'
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
  VcAnalysesProps,
  VcAnalysesSlots,
  VcAnalysisFloodProps,
  VcBtnProps,
  VcBtnSlots,
  VcCompassProps,
  VcDistanceLegendProps,
  VcDrawingsProps,
  VcDrawingsSlots,
  VcGraphicsBillboardProps,
  VcMeasurementsProps,
  VcMeasurementsSlots,
  VcMyLocationProps,
  VcNavigationProps,
  VcNavigationSlots,
  VcNavigationSmProps,
  VcNavigationSmSlots,
  VcOverviewMapProps,
  VcOverviewMapSlots,
  VcSelectionIndicatorProps,
  VcViewerProps,
  VcViewerSlots,
  VcZoomControlProps
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

    VcLayerImagery: typeof import('vue-cesium')['VcLayerImagery']
    VcImageryProviderArcgis: typeof import('vue-cesium')['VcImageryProviderArcgis']
    VcImageryProviderBaidu: typeof import('vue-cesium')['VcImageryProviderBaidu']
    VcImageryProviderBing: typeof import('vue-cesium')['VcImageryProviderBing']
    VcImageryProviderGoogle: typeof import('vue-cesium')['VcImageryProviderGoogle']
    VcImageryProviderGrid: typeof import('vue-cesium')['VcImageryProviderGrid']
    VcImageryProviderIon: typeof import('vue-cesium')['VcImageryProviderIon']
    VcImageryProviderMapbox: typeof import('vue-cesium')['VcImageryProviderMapbox']
    VcImageryProviderOsm: typeof import('vue-cesium')['VcImageryProviderOsm']
    VcImageryProviderSingletile: typeof import('vue-cesium')['VcImageryProviderSingletile']
    VcImageryProviderSupermap: typeof import('vue-cesium')['VcImageryProviderSupermap']
    VcImageryProviderTianditu: typeof import('vue-cesium')['VcImageryProviderTianditu']
    VcImageryProviderTileCoordinates: typeof import('vue-cesium')['VcImageryProviderTileCoordinates']
    VcImageryProviderTms: typeof import('vue-cesium')['VcImageryProviderTms']
    VcImageryProviderTiledcache: typeof import('vue-cesium')['VcImageryProviderTiledcache']
    VcImageryProviderUrltemplate: typeof import('vue-cesium')['VcImageryProviderUrltemplate']
    VcImageryProviderWms: typeof import('vue-cesium')['VcImageryProviderWms']
    VcImageryProviderWmts: typeof import('vue-cesium')['VcImageryProviderWmts']

    VcTerrainProviderCesium: typeof import('vue-cesium')['VcTerrainProviderCesium']
    VcTerrainProviderArcgis: typeof import('vue-cesium')['VcTerrainProviderArcgis']
    VcTerrainProviderVrTheworld: typeof import('vue-cesium')['VcTerrainProviderVrTheworld']
    VcTerrainProviderTianditu: typeof import('vue-cesium')['VcTerrainProviderTianditu']

    VcDatasourceCustom: typeof import('vue-cesium')['VcDatasourceCustom']
    VcDatasourceCzml: typeof import('vue-cesium')['VcDatasourceCzml']
    VcDatasourceGeojson: typeof import('vue-cesium')['VcDatasourceGeojson']
    VcDatasourceKml: typeof import('vue-cesium')['VcDatasourceKml']

    VcEntity: typeof import('vue-cesium')['VcEntity']
    VcGraphicsBillboard: GlobalComponentConstructor<VcGraphicsBillboardProps>
    VcGraphicsBox: typeof import('vue-cesium')['VcGraphicsBox']
    VcGraphicsCorridor: typeof import('vue-cesium')['VcGraphicsCorridor']
    VcGraphicsCylinder: typeof import('vue-cesium')['VcGraphicsCylinder']
    VcGraphicsEllipse: typeof import('vue-cesium')['VcGraphicsEllipse']
    VcGraphicsEllipsoid: typeof import('vue-cesium')['VcGraphicsEllipsoid']
    VcGraphicsLabel: typeof import('vue-cesium')['VcGraphicsLabel']
    VcGraphicsModel: typeof import('vue-cesium')['VcGraphicsModel']
    VcGraphicsPath: typeof import('vue-cesium')['VcGraphicsPath']
    VcGraphicsPlane: typeof import('vue-cesium')['VcGraphicsPlane']
    VcGraphicsPoint: typeof import('vue-cesium')['VcGraphicsPoint']
    VcGraphicsPolygon: typeof import('vue-cesium')['VcGraphicsPolygon']
    VcGraphicsPolyline: typeof import('vue-cesium')['VcGraphicsPolyline']
    VcGraphicsPolylineVolume: typeof import('vue-cesium')['VcGraphicsPolylineVolume']
    VcGraphicsRectangle: typeof import('vue-cesium')['VcGraphicsRectangle']
    VcGraphicsTileset: typeof import('vue-cesium')['VcGraphicsTileset']
    VcGraphicsWall: typeof import('vue-cesium')['VcGraphicsWall']

    VcPrimitiveClassification: typeof import('vue-cesium')['VcPrimitiveClassification']
    VcPrimitiveGround: typeof import('vue-cesium')['VcPrimitiveGround']
    VcPrimitiveGroundPolyline: typeof import('vue-cesium')['VcPrimitiveGroundPolyline']
    VcPrimitiveModel: typeof import('vue-cesium')['VcPrimitiveModel']
    VcPrimitive: typeof import('vue-cesium')['VcPrimitive']
    VcPrimitiveTileset: typeof import('vue-cesium')['VcPrimitiveTileset']
    VcPrimitiveParticle: typeof import('vue-cesium')['VcPrimitiveParticle']

    VcCollectionBillboard: typeof import('vue-cesium')['VcCollectionBillboard']
    VcCollectionLabel: typeof import('vue-cesium')['VcCollectionLabel']
    VcCollectionPoint: typeof import('vue-cesium')['VcCollectionPoint']
    VcCollectionPolyline: typeof import('vue-cesium')['VcCollectionPolyline']
    VcCollectionPrimitive: typeof import('vue-cesium')['VcCollectionPrimitive']
    VcBillboard: typeof import('vue-cesium')['VcBillboard']
    VcLabel: typeof import('vue-cesium')['VcLabel']
    VcPoint: typeof import('vue-cesium')['VcPoint']
    VcPolyline: typeof import('vue-cesium')['VcPolyline']
    VcPolygon: typeof import('vue-cesium')['VcPolygon']

    VcGeometryInstance: typeof import('vue-cesium')['VcGeometryInstance']

    VcGeometryBox: typeof import('vue-cesium')['VcGeometryBox']
    VcGeometryBoxOutline: typeof import('vue-cesium')['VcGeometryBoxOutline']
    VcGeometryCircle: typeof import('vue-cesium')['VcGeometryCircle']
    VcGeometryCircleOutline: typeof import('vue-cesium')['VcGeometryCircleOutline']
    VcGeometryPolygonCoplanar: typeof import('vue-cesium')['VcGeometryPolygonCoplanar']
    VcGeometryPolygonCoplanarOutline: typeof import('vue-cesium')['VcGeometryPolygonCoplanarOutline']
    VcGeometryCorridor: typeof import('vue-cesium')['VcGeometryCorridor']
    VcGeometryCorridorOutline: typeof import('vue-cesium')['VcGeometryCorridorOutline']
    VcGeometryCylinder: typeof import('vue-cesium')['VcGeometryCylinder']
    VcGeometryCylinderOutline: typeof import('vue-cesium')['VcGeometryCylinderOutline']
    VcGeometryEllipse: typeof import('vue-cesium')['VcGeometryEllipse']
    VcGeometryEllipseOutline: typeof import('vue-cesium')['VcGeometryEllipseOutline']
    VcGeometryEllipsoid: typeof import('vue-cesium')['VcGeometryEllipsoid']
    VcGeometryEllipsoidOutline: typeof import('vue-cesium')['VcGeometryEllipsoidOutline']
    VcGeometryFrustum: typeof import('vue-cesium')['VcGeometryFrustum']
    VcGeometryFrustumOutline: typeof import('vue-cesium')['VcGeometryFrustumOutline']
    VcGeometryGroundPolyline: typeof import('vue-cesium')['VcGeometryGroundPolyline']
    VcGeometryPlane: typeof import('vue-cesium')['VcGeometryPlane']
    VcGeometryPlaneOutline: typeof import('vue-cesium')['VcGeometryPlaneOutline']
    VcGeometryPolygon: typeof import('vue-cesium')['VcGeometryPolygon']
    VcGeometryPolygonOutline: typeof import('vue-cesium')['VcGeometryPolygonOutline']
    VcGeometryPolyline: typeof import('vue-cesium')['VcGeometryPolyline']
    VcGeometryPolylineVolume: typeof import('vue-cesium')['VcGeometryPolylineVolume']
    VcGeometryPolylineVolumeOutline: typeof import('vue-cesium')['VcGeometryPolylineVolumeOutline']
    VcGeometryRectangle: typeof import('vue-cesium')['VcGeometryRectangle']
    VcGeometryRectangleOutline: typeof import('vue-cesium')['VcGeometryRectangleOutline']
    VcGeometrySimplePolyline: typeof import('vue-cesium')['VcGeometrySimplePolyline']
    VcGeometrySphere: typeof import('vue-cesium')['VcGeometrySphere']
    VcGeometrySphereOutline: typeof import('vue-cesium')['VcGeometrySphereOutline']
    VcGeometryWall: typeof import('vue-cesium')['VcGeometryWall']
    VcGeometryWallOutline: typeof import('vue-cesium')['VcGeometryWallOutline']

    VcOverlayHtml: typeof import('vue-cesium')['VcOverlayHtml']
    VcOverlayHeatmap: typeof import('vue-cesium')['VcOverlayHeatmap']
    VcOverlayWind: typeof import('vue-cesium')['VcOverlayWind']
    VcOverlayDynamic: typeof import('vue-cesium')['VcOverlayDynamic']
    VcOverlayEcharts: typeof import('vue-cesium')['VcOverlayEcharts']

    VcPostProcessStage: typeof import('vue-cesium')['VcPostProcessStage']
    VcPostProcessStageScan: typeof import('vue-cesium')['VcPostProcessStageScan']
    VcPostProcessStageCollection: typeof import('vue-cesium')['VcPostProcessStageCollection']

    VcBtn: GlobalComponentConstructor<VcBtnProps, VcBtnSlots>
    VcIcon: typeof import('vue-cesium')['VcIcon']
    VcTooltip: typeof import('vue-cesium')['VcTooltip']
    VcAjaxBar: typeof import('vue-cesium')['VcAjaxBar']
    VcSkeleton: typeof import('vue-cesium')['VcSkeleton']
    VcSpinnerBall: typeof import('vue-cesium')['VcSpinnerBall']
    VcSpinnerBars: typeof import('vue-cesium')['VcSpinnerBars']
    VcSpinnerDots: typeof import('vue-cesium')['VcSpinnerDots']
    VcSpinnerGears: typeof import('vue-cesium')['VcSpinnerGears']
    VcSpinnerHourglass: typeof import('vue-cesium')['VcSpinnerHourglass']
    VcSpinnerIos: typeof import('vue-cesium')['VcSpinnerIos']
    VcSpinnerOrbit: typeof import('vue-cesium')['VcSpinnerOrbit']
    VcSpinnerOval: typeof import('vue-cesium')['VcSpinnerOval']
    VcSpinnerPuff: typeof import('vue-cesium')['VcSpinnerPuff']
    VcSpinnerRings: typeof import('vue-cesium')['VcSpinnerRings']
    VcSpinnerTail: typeof import('vue-cesium')['VcSpinnerTail']
    VcSpinner: typeof import('vue-cesium')['VcSpinner']
    VcFab: typeof import('vue-cesium')['VcFab']
    VcFabAction: typeof import('vue-cesium')['VcFabAction']

    VcConfigProvider: typeof import('vue-cesium')['VcConfigProvider']
  }
}

export {}
