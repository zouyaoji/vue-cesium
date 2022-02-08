import type { Emitter } from 'mitt'
import type { Ref, Plugin, CSSProperties, ComponentInternalInstance, ComponentPublicInstance } from 'vue'
import type { VcDrawingActionInstance } from './drawing-types'
import type h337 from '@zouyaoji/heatmap.js'
import type BaiduMapImageryProvider from '@vue-cesium/components/providers/baidu/BaiduMapImageryProvider'
import type SuperMapImageryProvider from '@vue-cesium/components/providers/supermap/SuperMapImageryProvider'
import type { VcBtnProps, VcFabActionProps, VcTooltipProps } from '@vue-cesium/components/ui'
import type MouseCoords from '@vue-cesium/components/controls/status-bar/MouseCoords'

interface AnyObject {
  [propName: string]: any
}

interface VcReadyObject {
  Cesium: typeof Cesium
  viewer: Cesium.Viewer
  cesiumObject?: VcCesiumObject | Array<VcCesiumObject>
  vm?: VcComponentPublicInstance
  earth?: any
  map?: any
}

interface CartographicInDegreeOption {
  lng: number
  lat: number
  height: number
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
  translucent?: boolean | AnyFunction<void>
  minificationFilter?: Cesium.TextureMinificationFilter
  magnificationFilter?: Cesium.TextureMagnificationFilter
}

interface AppearanceOption {
  type: string
  options?: CesiumAppearance | { material: MaterialOption }
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

interface HeatmapConfiguration extends h337.HeatmapConfiguration {
  useEntitiesIfAvailable?: boolean
  minCanvasSize: number
  maxCanvasSize: number
  radiusFactor: number
  spacingFactor: number
  maxOpacity: number
  minOpacity: number
  container: HTMLElement
}

interface DynamicOverlayOpts extends Cesium.Entity {
  /**
   * Gets or sets the type of extrapolation to perform when a value is requested at a time after any available samples.
   */
  forwardExtrapolationType?: number
  /**
   * Gets or sets the type of extrapolation to perform when a value is requested at a time before any available samples.
   */
  backwardExtrapolationType?: number
  /**
   * Maximum number of buffers.
   */
  maxCacheSize?: number
  /**
   * A SampledProperty and a PositionProperty Array.
   */
  sampledPositions: Array<SampledPosition>
}

interface SampledPosition {
  position: VcPosition
  time?: Cesium.JulianDate | string
  interval?: number
}

interface Cartesian2Option {
  x: number
  y: number
}
interface Cartesian3Option {
  x: number
  y: number
  z: number
}
interface Cartesian4Option {
  x: number
  y: number
  z: number
  w: number
}

interface VcCamera {
  position?: VcPosition
  retangle?: RectangleInDegreeOption | Array<number>
  heading?: number
  pitch?: number
  roll?: number
}

interface CesiumMembersEvent {
  name: string | Array<string>
  events: Array<string>
}

export interface VcBtnTooltipProps extends VcBtnProps {
  tooltip?: VcTooltipProps
}

export interface VcActionTooltipProps extends VcFabActionProps {
  tooltip?: VcTooltipProps
}

export type PickEventType = 'onmousedown' | 'onmouseup' | 'onclick' | 'onclickout' | 'ondblclick' | 'onmousemove' | 'mouseover' | 'mouseout'

interface VcPickEvent {
  /**
   * 0 is the left mouse button, 1 is the middle mouse button, 2 is the right mouse button.
   */
  button: 0 | 1 | 2
  /**
   * Intersection with globe surface.
   */
  surfacePosition: Cesium.Cartesian3
  /**
   * Returns an object with a `primitive` property that contains the first (top) primitive in the scene
   * at a particular window coordinate or undefined if nothing is at the location.
   */
  pickedFeature: any
  type?: PickEventType
  /**
   * Screen coordinates.
   */
  windowPosition: Cesium.Cartesian2
  /**
   * Inferred cesium object.
   */
  cesiumObject: VcCesiumObject
}

interface VcComponentInternalInstance extends ComponentInternalInstance {
  mounted: boolean
  loading: boolean
  unloadingPromise?: Promise<boolean>
  Cesium: typeof Cesium
  viewer: Cesium.Viewer
  viewerElement?: HTMLElement
  cesiumEvents?: Array<string>
  cesiumMembersEvents?: Array<CesiumMembersEvent>
  cesiumClass: string
  nowaiting?: boolean
  renderByParent?: boolean
  vcMitt: Emitter<VcMittEvents>
  cesiumObject?: VcCesiumObject
  createCesiumObject?(): Promise<unknown>
  mount?(): Promise<boolean | undefined>
  unmount?(): Promise<boolean | undefined>
  children: Array<VcComponentInternalInstance>
  alreadyListening: string[]
  removeCallbacks: Array<AnyFunction<any>>
  // third
  earth?: AnyObject
  map?: AnyObject
  dcViewer?: AnyObject
}

interface VcViewerProvider {
  Cesium: typeof Cesium
  viewer: Cesium.Viewer
  vm: VcComponentInternalInstance
  dataSources: Cesium.DataSourceCollection
  entities: Cesium.EntityCollection
  imageryLayers: Cesium.ImageryLayerCollection
  primitives: Cesium.PrimitiveCollection
  groundPrimitives: Cesium.PrimitiveCollection
  postProcessStages: Cesium.PostProcessStageCollection
  viewerMitt: Emitter<VcMittEvents>
  layout?: {
    toolbarContainerRC: Partial<DOMRect>
    timelineContainerRC: Partial<DOMRect>
    animationContainerRC: Partial<DOMRect>
    bottomContainerRC: Partial<DOMRect>
  }
  selectedDrawingActionInstance?: VcDrawingActionInstance
  drawingFabInstance?: VcComponentInternalInstance
  drawingHandlerActive: boolean
  getWorldPosition(scene: Cesium.Scene, windowPosition: Cesium.Cartesian2, result: Cesium.Cartesian3): Cesium.Cartesian3
}

interface ViewerWidgetResizedEvent {
  type: string
  status: 'mounted' | 'unmounted' | 'added' | 'removed'
  target: HTMLElement
}

export type ProjectionTransforms = false | { from: 'WGS84' | 'BD09' | 'GCJ02'; to: 'WGS84' | 'BD09' | 'GCJ02' }

export type CommonEmitType = 'beforeLoad' | 'ready' | 'destroyed'

export type EntityEmitType =
  | CommonEmitType
  | 'update:billboard'
  | 'update:box'
  | 'update:corridor'
  | 'update:cylinder'
  | 'update:ellipse'
  | 'update:ellipsoid'
  | 'update:ellipse'
  | 'update:label'
  | 'update:model'
  | 'update:path'
  | 'update:plane'
  | 'update:point'
  | 'update:polygon'
  | 'update:polyline'
  | 'update:polylineVolume'
  | 'update:rectangle'
  | 'update:tileset'
  | 'update:wall'

export type VcColorSegments = [number, VcColor]

export type VcMittEvents = {
  ready: VcReadyObject
}

export type AnyFunction<T> = (...args: any[]) => T

export type SFCWithInstall<T> = T & Plugin

export type RefElement = HTMLElement | null

export type Nullable<T> = T | null

export type StyleValue = string | CSSProperties | Array<StyleValue>

export type Mutable<T> = { -readonly [P in keyof T]: T[P] }

export type VcComponentPublicInstance = ComponentPublicInstance<{
  load(): Promise<VcReadyObject | boolean>
  unload(): Promise<boolean>
  reload(): Promise<boolean>
  createPromise: Promise<VcReadyObject>
  cesiumObject: VcCesiumObject
  getCesiumObject(): any
  __updateGraphics?(graphics: VcGraphics | undefined, type: EntityEmitType): boolean
  __updateProvider?(provider: VcImageryProvider | undefined): boolean
  __updateGeometryInstances?(geometryInstance: Cesium.GeometryInstance, index: number): boolean
  __removeGeometryInstances?(geometryInstance: Cesium.GeometryInstance): boolean
  __updateGeometry?(geometry: Cesium.Geometry): boolean
  __childCount?: Ref<number>
}>
// 属性类型
export type VcCallbackPropertyFunction<T> = (time?: Cesium.JulianDate, result?: T) => T

export type CesiumCartesian2 = Cesium.Cartesian2 | Cesium.CallbackProperty
export type VcCartesian2 = Cartesian2Option | Array<number> | VcCallbackPropertyFunction<Cesium.Cartesian2> | CesiumCartesian2

export type CesiumCartesian2Array = Array<Cesium.Cartesian2> | Cesium.CallbackProperty
export type VcCartesian2Array =
  | Array<Cartesian2Option>
  | Array<Array<number>>
  | Array<number>
  | VcCallbackPropertyFunction<Array<Cesium.Cartesian2>>
  | CesiumCartesian2Array

export type CesiumPosition =
  | Cesium.Cartesian3
  | Cesium.CompositePositionProperty
  | Cesium.ConstantPositionProperty
  | Cesium.SampledPositionProperty
  | Cesium.TimeIntervalCollectionPositionProperty
  | Cesium.CallbackProperty
export type VcPosition =
  | Cartesian3Option
  | CartographicInDegreeOption
  | Array<number>
  | VcCallbackPropertyFunction<Cesium.Cartesian3>
  | CesiumPosition

export type CesiumPolygonHierarchy = Cesium.PolygonHierarchy | Cesium.CallbackProperty | PolygonHierarchyOption
export type VcPolygonHierarchy =
  | Array<Cesium.Cartesian3>
  | Array<Cartesian3Option>
  | Array<CartographicInDegreeOption>
  | Array<Array<number>>
  | Array<Array<number>>
  | VcCallbackPropertyFunction<Cesium.PolygonHierarchy>
  | CesiumPolygonHierarchy

export type CesiumCartesian3Array = Array<Cesium.Cartesian3> | Cesium.CallbackProperty
export type VcCartesian3Array =
  | Array<Cesium.Cartesian3>
  | Array<Cartesian3Option>
  | Array<CartographicInDegreeOption>
  | Array<number>
  | Array<Array<number>>
  | VcCallbackPropertyFunction<Array<Cesium.Cartesian3>>
  | CesiumCartesian3Array

export type CesiumRectangle = Cesium.Rectangle | Cesium.CallbackProperty
export type VcRectangle = RectangleInDegreeOption | Cartesian4Option | Array<number> | VcCallbackPropertyFunction<Cesium.Rectangle> | CesiumRectangle

export type CesiumBoundingRectangle = Cesium.BoundingRectangle | Cesium.CallbackProperty
export type VcBoundingRectangle =
  | BoundingRectangleOption
  | Array<number>
  | VcCallbackPropertyFunction<Cesium.BoundingRectangle>
  | CesiumBoundingRectangle

export type CesiumColor = Cesium.Color | Cesium.CallbackProperty
export type VcColor = string | Array<number> | ColorInByteOption | Cartesian4Option | VcCallbackPropertyFunction<Cesium.Color> | CesiumColor

export type CesiumMaterialProperty =
  | Cesium.CheckerboardMaterialProperty
  | Cesium.ColorMaterialProperty
  | Cesium.CompositeMaterialProperty
  | Cesium.GridMaterialProperty
  | Cesium.ImageMaterialProperty
  | Cesium.MaterialProperty
  | Cesium.PolylineArrowMaterialProperty
  | Cesium.PolylineDashMaterialProperty
  | Cesium.PolylineGlowMaterialProperty
  | Cesium.PolylineOutlineMaterialProperty
  | Cesium.StripeMaterialProperty
  | Cesium.CallbackProperty
export type VcMaterialProperty =
  | VcColor
  | MaterialOption
  | HTMLImageElement
  | HTMLCanvasElement
  | HTMLVideoElement
  | VcCallbackPropertyFunction<CesiumMaterialProperty>
  | CesiumMaterialProperty

export type CesiumMaterial = Cesium.Material | CesiumMaterialProperty
export type VcMaterial = string | Array<number> | MaterialOption | CesiumMaterial

export type CesiumAppearance =
  | Cesium.Appearance
  | Cesium.MaterialAppearance
  | Cesium.PolylineColorAppearance
  | Cesium.PerInstanceColorAppearance
  | Cesium.PolylineMaterialAppearance
  | Cesium.EllipsoidSurfaceAppearance
  | Cesium.DebugAppearance

export type VcAppearance = AppearanceOption | CesiumAppearance

export type CesiumDistanceDisplayCondition = Cesium.DistanceDisplayCondition | Cesium.CallbackProperty
export type VcDistanceDisplayCondition =
  | DistanceDisplayConditionOption
  | Array<number>
  | VcCallbackPropertyFunction<Cesium.DistanceDisplayCondition>
  | CesiumDistanceDisplayCondition

export type CesiumNearFarScalar = Cesium.NearFarScalar | Cesium.CallbackProperty
export type VcNearFarScalar = NearFarScalarOption | Array<number> | VcCallbackPropertyFunction<Cesium.NearFarScalar> | CesiumNearFarScalar

// 对象类型
export type VcGraphics =
  | Cesium.BillboardGraphics
  | Cesium.BoxGraphics
  | Cesium.Cesium3DTilesetGraphics
  | Cesium.CorridorGraphics
  | Cesium.CylinderGraphics
  | Cesium.EllipseGraphics
  | Cesium.EllipsoidGraphics
  | Cesium.LabelGraphics
  | Cesium.ModelGraphics
  | Cesium.PathGraphics
  | Cesium.PlaneGraphics
  | Cesium.PointGraphics
  | Cesium.PolygonGraphics
  | Cesium.PolylineGraphics
  | Cesium.PolylineVolumeGraphics
  | Cesium.RectangleGraphics
  | Cesium.WallGraphics

export type VcDatasource = Cesium.CustomDataSource | Cesium.CzmlDataSource | Cesium.GeoJsonDataSource | Cesium.KmlDataSource

export type VcGeometry =
  | Cesium.GeometryInstance
  | Cesium.BoxGeometry
  | Cesium.BoxOutlineGeometry
  | Cesium.CircleGeometry
  | Cesium.CircleOutlineGeometry
  | Cesium.CoplanarPolygonGeometry
  | Cesium.CoplanarPolygonOutlineGeometry
  | Cesium.CorridorGeometry
  | Cesium.CorridorOutlineGeometry
  | Cesium.CylinderGeometry
  | Cesium.CylinderOutlineGeometry
  | Cesium.EllipseGeometry
  | Cesium.EllipseOutlineGeometry
  | Cesium.EllipsoidGeometry
  | Cesium.EllipsoidOutlineGeometry
  | Cesium.FrustumGeometry
  | Cesium.FrustumOutlineGeometry
  | Cesium.GroundPolylineGeometry
  | Cesium.PlaneGeometry
  | Cesium.PlaneOutlineGeometry
  | Cesium.PolygonGeometry
  | Cesium.PolygonOutlineGeometry
  | Cesium.PolylineGeometry
  | Cesium.PolylineVolumeGeometry
  | Cesium.PolylineVolumeOutlineGeometry
  | Cesium.RectangleGeometry
  | Cesium.RectangleOutlineGeometry
  | Cesium.SimplePolylineGeometry
  | Cesium.SphereGeometry
  | Cesium.SphereOutlineGeometry
  | Cesium.WallGeometry
  | Cesium.WallOutlineGeometry

export type VcImageryProvider =
  | Cesium.ArcGisMapServerImageryProvider
  | Cesium.BingMapsImageryProvider
  | Cesium.OpenStreetMapImageryProvider
  | Cesium.TileMapServiceImageryProvider
  | Cesium.GoogleEarthEnterpriseImageryProvider
  | Cesium.GoogleEarthEnterpriseMapsProvider
  | Cesium.GridImageryProvider
  | Cesium.IonImageryProvider
  | Cesium.MapboxImageryProvider
  | Cesium.MapboxStyleImageryProvider
  | Cesium.SingleTileImageryProvider
  | Cesium.TileCoordinatesImageryProvider
  | Cesium.UrlTemplateImageryProvider
  | Cesium.WebMapServiceImageryProvider
  | Cesium.WebMapTileServiceImageryProvider
  | BaiduMapImageryProvider
  | SuperMapImageryProvider

export type VcTerrainProvider =
  | Cesium.EllipsoidTerrainProvider
  | Cesium.CesiumTerrainProvider
  | Cesium.VRTheWorldTerrainProvider
  | Cesium.GoogleEarthEnterpriseTerrainProvider

export type VcPrimitive =
  | Cesium.ClassificationPrimitive
  | Cesium.DebugCameraPrimitive
  | Cesium.DebugModelMatrixPrimitive
  | Cesium.GroundPolylinePrimitive
  | Cesium.GroundPrimitive
  | Cesium.PointPrimitive
  | Cesium.Primitive
  | Cesium.Model
  | Cesium.Cesium3DTileset

export type VcPrimitiveCollection =
  | Cesium.BillboardCollection
  | Cesium.CloudCollection
  | Cesium.LabelCollection
  | Cesium.PointPrimitiveCollection
  | Cesium.PolylineCollection
  | Cesium.PrimitiveCollection

export type VcCesiumObject =
  | Cesium.Viewer
  | Cesium.ImageryLayer
  | VcImageryProvider
  | VcTerrainProvider
  | Cesium.Entity
  | VcGraphics
  | VcDatasource
  | VcPrimitive
  | VcPrimitiveCollection
  | VcGeometry
  | VcDrawingActionInstance[]
  | Ref<VcComponentPublicInstance>
  | Promise<HTMLElement> // controls
  | Promise<Array<HTMLElement>> // vc-navigation

export type VcCompassEvt = {
  type: 'reset' | 'orbit' | 'rotate' | 'rotateEast' | 'rotateWest' | 'rotateNorth' | 'rotateSouth' | 'tilt'
  camera: Cesium.Camera
  status: 'start' | 'cancel' | 'end' | 'changing'
  target?: HTMLElement
}

export type VcDistanceLegendEvt = {
  type: 'distanceLegend'
  distance: number
  status: 'changed'
}

export type VcLocationEvt = {
  type: 'location' | 'zoomIn'
  position?: {
    lng: number
    lat: number
    address: string
  }
  detail?: any
  entity?: Cesium.Entity
  camera?: Cesium.Camera
  status?: 'end' | 'start' | 'cancel'
}

export type VcPrintEvt = {
  type: 'capture'
  image: string
  status: 'end'
}

export type VcStatusBarEvt = {
  type: 'statusBar'
  mouseCoordsInfo: MouseCoords
  cameraInfo: {
    heading: string
    pitch: string
    roll: string
    height: string
    level: string
  }
  performanceInfo: {
    fps: string
    ms: string
  }
}

export type VcZoomEvt = {
  type: 'zoomReset' | 'zoomIn' | 'zoomOut'
  camera: Cesium.Camera
  status: 'start' | 'end' | 'cancel'
  target: HTMLElement
  level: number
}

export {
  AnyObject,
  VcCamera,
  VcReadyObject,
  VcComponentInternalInstance,
  VcViewerProvider,
  CesiumMembersEvent,
  Cartesian2Option,
  Cartesian3Option,
  Cartesian4Option,
  CartographicInDegreeOption,
  AppearanceOption,
  PolygonHierarchyOption,
  NearFarScalarOption,
  DistanceDisplayConditionOption,
  ColorInByteOption,
  MaterialOption,
  RectangleInDegreeOption,
  BoundingRectangleOption,
  PlaneOption,
  TranslationRotationScaleOption,
  NavigationOption,
  HeadingPitchRollOption,
  HeatmapConfiguration,
  DynamicOverlayOpts,
  SampledPosition,
  VcPickEvent,
  ViewerWidgetResizedEvent
}
