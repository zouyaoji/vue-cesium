import { Emitter } from 'mitt'
import type { App, Ref } from 'vue'
import { ComponentInternalInstance, ComponentPublicInstance } from 'vue'

export type SFCWithInstall<T> = T & { install (app: App): void; }

export type CommonEmitType = 'beforeLoad' | 'ready' | 'destroyed'

export type EntityEmitType = CommonEmitType | 'update:billboard' | 'update:box' | 'update:corridor' | 'update:cylinder' | 'update:ellipse'
  | 'update:ellipsoid' | 'update:ellipse' | 'update:label' | 'update:model' | 'update:path' | 'update:plane' | 'update:point' | 'update:polygon'
  | 'update:polyline' | 'update:polylineVolume' | 'update:rectangle' | 'update:tileset' | 'update:wall'


export type VcBtnOptions = {
  name?: string
  size?: string
  color?: string
  background?: string
  round?: boolean
  flat?: boolean
  label?: string
  stack?: false
  tooltip?: {
    delay: number
    anchor: string
    offset: Array<number>
    tip: string
  }
}

interface AnyFunction {
  (...args: any[]): any
}

interface AnyObject {
  [propName: string]: any
}

interface ReadyObj {
  Cesium: AnyObject
  viewer: Cesium.Viewer
  cesiumObject?: AnyObject
  vm?: VcComponentPublicInstance
  earth?: AnyObject
}

interface CameraOption {
  position?: Cartesian3Option | CartographicInDegreeOption | Array<number>
  retangle?: RectangleInDegreeOption | Array<number>
  heading?: number
  pitch?: number
  roll?: number
}

interface CesiumMembersEvent {
  name: string | Array<string>
  events: Array<string>
}

interface VcComponentInternalInstance extends ComponentInternalInstance {
  mounted?: boolean
  loading?: boolean
  unloadingPromise?: Promise<boolean>
  Cesium?: AnyObject
  viewer?: Cesium.Viewer
  viewerElement?: HTMLElement
  earth?: AnyObject
  cesiumEvents?: Array<string>
  cesiumMembersEvents?: Array<CesiumMembersEvent>
  cesiumClass?: string
  nowaiting?: boolean
  renderByParent?: boolean
  vcMitt?: Emitter
  cesiumObject?: AnyObject | HTMLElement
  createCesiumObject?(): Promise<unknown>
  mount?(): Promise<boolean>
  unmount?(): Promise<boolean>
  children?: Array<VcComponentInternalInstance>
  alreadyListening: string []
}

type VcComponentPublicInstance = ComponentPublicInstance<{
  load?(): Promise<ReadyObj | boolean>
  unload?(): Promise<boolean>
  reload?(): Promise<boolean>
  createPromise?: Promise<ReadyObj>
  cesiumObject: unknown
  getCesiumObject?(): unknown
  __updateGraphics?(cesiumObject: AnyObject, type: EntityEmitType): boolean
  __updateProvider?(cesiumObject: Cesium.ImageryProvider) : boolean
  __updateGeometryInstances?(cesiumObject: Cesium.GeometryInstance, index: number) : boolean
  __updateGeometry?(cesiumObject: Cesium.Geometry) : boolean
  __childCount?: Ref<number>
}>

interface VcViewerProvider {
  Cesium: AnyObject
  viewer: Cesium.Viewer
  vm: VcComponentInternalInstance
  dataSources: Cesium.DataSourceCollection
  entities: Cesium.EntityCollection
  imageryLayers: Cesium.ImageryLayerCollection
  primitives: Cesium.PrimitiveCollection
  groundPrimitives: Cesium.PrimitiveCollection
  postProcessStages: Cesium.PostProcessStageCollection
  viewerMitt: Emitter
  entityViewModel?: VcComponentPublicInstance
  imageryLayerViewModel?: VcComponentPublicInstance
  layout: {
    toolbarContainerRC: Partial<DOMRect>
    timelineContainerRC: Partial<DOMRect>
    animationContainerRC: Partial<DOMRect>
    bottomContainerRC: Partial<DOMRect>
  }
}

interface Cartesian2Option {
  x?: number
  y?: number
}
interface Cartesian3Option {
  x?: number
  y?: number
  z?: number
}
interface Cartesian4Option {
  x?: number
  y?: number
  z?: number
  w?: number
}

interface CartographicInDegreeOption {
  lng?: number
  lat?: number
  height?: number
}

interface PolygonHierarchyOption {
  positions: Array<Cesium.Cartesian3> | Array<Cartesian3Option> | Array<Array<number>>
  holes?: Array<PolygonHierarchyOption>
}

interface NearFarScalarOption {
  near: number
  nearValue: number
  far: number
  farValue: number
}

interface DistanceDisplayConditionOption {
  near: number
  far: number
}

interface ColorInByteOption {
  red: number
  green: number
  blue: number
  alpha?: number
}

interface MaterialOption {
  fabric: {
    type: string
    uniforms: {
      color?: Cesium.Color | string | Array<number> | ColorInByteOption | Cartesian4Option
      image?: string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement
      repeat?: Cesium.Cartesian2 | Cartesian2Option | Array<number> | number
      transparent?: boolean
      evenColor?: Cesium.Color | string | Array<number> | ColorInByteOption | Cartesian4Option
      oddColor?: Cesium.Color | string | Array<number> | ColorInByteOption | Cartesian4Option
      gapColor?: Cesium.Color | string | Array<number> | ColorInByteOption | Cartesian4Option
      dashLength?: number
      dashPattern?: number
      glowPower?: number
      taperPower?: number
      outlineColor?: Cesium.Color | string | Array<number> | ColorInByteOption | Cartesian4Option
      outlineWidth?: number
      cellAlpha?: number
      lineCount?: Cesium.Cartesian2 | Cartesian2Option | Array<number> | number
      lineThickness?: Cesium.Cartesian2 | Cartesian2Option | Array<number> | number
      lineOffset?: Cesium.Cartesian2 | Cartesian2Option | Array<number> | number
      orientation?: number | Cesium.StripeOrientation
      offset?: number
    }
  }
  strict?: boolean
  translucent?: boolean | AnyFunction
  minificationFilter?: Cesium.TextureMinificationFilter
  magnificationFilter?: Cesium.TextureMagnificationFilter
}

interface RectangleInDegreeOption {
  west: number
  south: number
  east: number
  north: number
}

interface BoundingRectangleOption {
  x: number
  y: number
  width: number
  height: number
}

interface PlaneOption {
  normal: Cesium.Cartesian3 | Cartesian3Option | CartographicInDegreeOption | Array<number>
  distance: number
}

interface TranslationRotationScaleOption {
  translation: Cesium.Cartesian3 | Cartesian3Option | CartographicInDegreeOption | Array<number>
  rotation: Cesium.Quaternion | Cartesian4Option | Array<number>
  scale: Cesium.Cartesian3 | Cartesian3Option | CartographicInDegreeOption | Array<number>
}

interface HeadingPitchRollOption {
  heading?: number
  pitch?: number
  roll?: number
}

interface NavigationOption {
  compassOptions?: AnyObject | boolean
  zoomControlOptions?: AnyObject | boolean
  printViewOptions?: AnyObject | boolean
  myLocationOptions?: AnyObject | boolean
  statusBarOptions?: AnyObject | boolean
  distanceLegendOptions?: AnyObject | boolean
}

export {
  AnyFunction, AnyObject, CameraOption, ReadyObj, VcComponentInternalInstance, VcComponentPublicInstance, VcViewerProvider, CesiumMembersEvent,
  Cartesian2Option, Cartesian3Option, Cartesian4Option, CartographicInDegreeOption, PolygonHierarchyOption, NearFarScalarOption,
  DistanceDisplayConditionOption, ColorInByteOption, MaterialOption, RectangleInDegreeOption, BoundingRectangleOption, PlaneOption,
  TranslationRotationScaleOption, NavigationOption, HeadingPitchRollOption
}
