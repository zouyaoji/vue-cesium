import type {
  AnyFunction,
  Cartesian2Option,
  Cartesian3Option,
  Cartesian4Option,
  PolygonHierarchyOption,
  CartographicInDegreeOption,
  NearFarScalarOption,
  DistanceDisplayConditionOption,
  ColorInByteOption,
  MaterialOption,
  VcComponentInternalInstance,
  RectangleInDegreeOption,
  BoundingRectangleOption,
  PlaneOption,
  TranslationRotationScaleOption,
  VcCamera,
  HeadingPitchRollOption,
  CesiumAppearance,
  VcPosition,
  CesiumPosition,
  VcRectangle,
  CesiumRectangle,
  VcColor,
  CesiumColor,
  VcAppearance,
  CesiumDistanceDisplayCondition,
  VcDistanceDisplayCondition,
  VcCartesian2,
  CesiumCartesian2,
  CesiumCartesian3Array,
  VcCartesian3Array,
  VcCartesian2Array,
  CesiumCartesian2Array,
  CesiumNearFarScalar,
  VcNearFarScalar,
  VcPolygonHierarchy,
  CesiumPolygonHierarchy,
  VcMaterial,
  VcMaterialProperty,
  CesiumMaterialProperty,
  CesiumMaterial,
  VcBoundingRectangle,
  CesiumBoundingRectangle
} from './types'
import { hasOwn, isFunction, isArray, isString, isPlainObject, isEmptyObj, getObjClassName, isUndefined } from './util'

/**
 * 将对象或数组转换为 Cesium.Cartesian2
 * @param {Object} val
 * @returns {Cartesian2 | CallbackProperty} 返回 Cartesian2 或者 CallbackProperty
 * @example
 * const options = [100, 100]
 * // const options = [x: 100, y: 100]
 * const position = makeCartesian2(options)
 */
export function makeCartesian2(val: VcCartesian2, isConstant = false): CesiumCartesian2 | undefined {
  const { Cartesian2, CallbackProperty } = Cesium

  if (val instanceof Cesium.Cartesian2 || val instanceof CallbackProperty) {
    return val
  }

  if (isPlainObject(val)) {
    if (hasOwn(val, 'x') && hasOwn(val, 'y')) {
      const value = val as Cartesian2Option
      return new Cartesian2(value.x, value.y)
    }
  }

  if (isArray(val)) {
    return new Cartesian2(val[0], val[1])
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return undefined
}

/**
 * 将对象或者数组转换为 Cesium.Cartesian3
 * @param {Object} val 传入的对象或数组
 * @param {Boolean} isConstant 传入function时生效，true 代表回调 function 每时每刻都返回值， false 代表改变才会返回值。默认false。
 * @returns 返回 Cartesian3 或者 CallbackProperty
 * @example
 * const options = {
 *  lng: 108,
 *  lat: 35,
 *  height: 1000
 * }
 * // const options = [108, 35, 1000]
 * const position = makeCartesian3 (options) // return Cesium.Cartesian3
 */
export function makeCartesian3(val: VcPosition, ellipsoid?: Cesium.Ellipsoid, isConstant = false): CesiumPosition | undefined {
  const {
    CallbackProperty,
    Cartesian3,
    Ellipsoid,
    SampledPositionProperty,
    CompositePositionProperty,
    ConstantPositionProperty,
    TimeIntervalCollectionPositionProperty
  } = Cesium

  if (
    val instanceof Cartesian3 ||
    val instanceof CallbackProperty ||
    val instanceof SampledPositionProperty ||
    val instanceof CompositePositionProperty ||
    val instanceof ConstantPositionProperty ||
    val instanceof TimeIntervalCollectionPositionProperty
  ) {
    return val
  }

  ellipsoid = ellipsoid || Ellipsoid.WGS84

  if (isPlainObject(val)) {
    if (hasOwn(val, 'x') && hasOwn(val, 'y') && hasOwn(val, 'z')) {
      const value = val as Cartesian3Option
      return new Cartesian3(value.x, value.y, value.z)
    } else if (hasOwn(val, 'lng') && hasOwn(val, 'lat')) {
      const value = val as CartographicInDegreeOption
      return Cartesian3.fromDegrees(value.lng!, value.lat!, value.height || 0, ellipsoid)
    }
  }
  // 经纬度数组
  if (isArray(val)) {
    return Cartesian3.fromDegrees(val[0], val[1], val[2] || 0, ellipsoid)
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return undefined
}

/**
 * 将数组 [lng, lat, height, ……，lng, lat, height] 转换为 Cesium.Cartesian3 数组
 * @param {Array} val
 * @returns {Array<Cartesian3>}
 */
export function makeCartesian3Array(vals: VcCartesian3Array, ellipsoid?: Cesium.Ellipsoid, isConstant = false): CesiumCartesian3Array | undefined {
  const { CallbackProperty, Cartesian3, Ellipsoid } = Cesium

  if (vals instanceof CallbackProperty) {
    return vals
  }

  if (isFunction(vals)) {
    return new CallbackProperty(vals, isConstant)
  }

  ellipsoid = ellipsoid || Ellipsoid.WGS84

  if (isArray(vals)) {
    if (isArray(vals[0]) || isPlainObject(vals[0])) {
      const results: Array<any> = []
      vals.forEach(val => {
        results.push(makeCartesian3(val, ellipsoid))
      })
      return results
    }

    return Cartesian3.fromDegreesArrayHeights(vals as Array<number>, ellipsoid)
  }

  return undefined
}

/**
 * 将形如 [lng, lat, ……，lng, lat] 数组转换为 Cesium.Cartesian2 数组
 * @param {Array} vals
 * @returns {Array<Cartesian2>}
 */
export function makeCartesian2Array(vals: VcCartesian2Array, isConstant): CesiumCartesian2Array | undefined {
  const { CallbackProperty } = Cesium

  if (vals instanceof CallbackProperty) {
    return vals
  }

  if (isFunction(vals)) {
    return new CallbackProperty(vals, isConstant)
  }

  if (isArray(vals)) {
    const points: Array<Cesium.Cartesian2> = []
    vals.forEach(val => {
      points.push(makeCartesian2(val) as Cesium.Cartesian2)
    })
    return points
  }

  return undefined
}

/**
 * 将对象或数组 转换为 Cesium.Quaternion
 * @param {Object} val
 * @example
 * const options = {x: 0, y: 0, z: 0, w: 0}
 * // const options = [0, 0, 0, 0]
 * const orientation = makeQuaternion(options) // returns Cesium.Quaternion
 */
export function makeQuaternion(
  val: Cesium.CallbackProperty | Cesium.Quaternion | Cartesian4Option | Array<number> | AnyFunction<any>,
  isConstant = false
): Cesium.CallbackProperty | Cesium.Quaternion | Cesium.VelocityOrientationProperty | undefined {
  const { CallbackProperty, Quaternion, VelocityOrientationProperty } = Cesium

  if (val instanceof Quaternion || val instanceof CallbackProperty || val instanceof VelocityOrientationProperty) {
    return val
  }

  if (isPlainObject(val) && hasOwn(val, 'x') && hasOwn(val, 'y')) {
    const value = val as Cartesian4Option
    return new Quaternion(value.x, value.y, value.z, value.w)
  }

  if (isArray(val)) {
    return new Quaternion(val[0], val[1], val[2], val[3])
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return undefined
}

/**
 * 解析 HierarchyJson
 * @param {Object} val
 */
function parsePolygonHierarchyJson(val: Array<PolygonHierarchyOption>, ellipsoid?: Cesium.Ellipsoid) {
  val.forEach(item => {
    item.positions = makeCartesian3Array(item.positions, ellipsoid) as Array<Cesium.Cartesian3>
    if (item.holes) {
      parsePolygonHierarchyJson(item.holes, ellipsoid)
    }
  })
}

/**
 * 普通数组或对象转 Cesium.PolygonHierarchy 对象。
 * @param {Object|Array} val
 */
export function makePolygonHierarchy(val: VcPolygonHierarchy, ellipsoid?: Cesium.Ellipsoid, isConstant = false): CesiumPolygonHierarchy | undefined {
  const { PolygonHierarchy, CallbackProperty } = Cesium

  if (val instanceof PolygonHierarchy || val instanceof CallbackProperty) {
    return val
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  if (isArray(val) && val.length >= 3) {
    const points = makeCartesian3Array(val, ellipsoid) as Array<Cesium.Cartesian3>
    return new PolygonHierarchy(points)
  }

  if (isPlainObject(val) && hasOwn(val, 'positions')) {
    const value = val as PolygonHierarchyOption
    value.positions = makeCartesian3Array(value.positions, ellipsoid) as Array<Cesium.Cartesian3>
    value.holes?.length && parsePolygonHierarchyJson(value.holes, ellipsoid)
    return value
  }

  return undefined
}

/**
 * 对象或数组转 Cesium.NearFarScalar。
 * @param {Object} val
 * @returns {NearFarScalar}
 * @example
 * const options = {near: 1000, nearValue: 1.0, far: 10000, farValue: 0.5}
 * // const options = [1000, 1.0, 10000, 1.5]
 * const nearFarScalar = makeNearFarScalar(options)
 */
export function makeNearFarScalar(val: VcNearFarScalar, isConstant = false): CesiumNearFarScalar | undefined {
  const { NearFarScalar, CallbackProperty } = Cesium

  if (val instanceof NearFarScalar || val instanceof CallbackProperty) {
    return val
  }

  if (isPlainObject(val) && hasOwn(val, 'near') && hasOwn(val, 'far')) {
    const value = val as NearFarScalarOption
    return new NearFarScalar(value.near, value.nearValue || 0.0, value.far, value.farValue || 1.0)
  }

  if (isArray(val)) {
    return new NearFarScalar(val[0], val[1], val[2], val[3])
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return undefined
}
/**
 * 对象或数组转 Cesium.DistanceDisplayCondition。
 * @param {Object} val
 * @returns {DistanceDisplayCondition}
 * @example
 * const options = [0, 1000]
 * // const options = {near: 0, far: 1000}
 * const distanceDisplayCondition = makeDistanceDisplayCondition(options) // return Cesium.DistanceDisplayCondition
 */
export function makeDistanceDisplayCondition(val: VcDistanceDisplayCondition, isConstant = false): CesiumDistanceDisplayCondition | undefined {
  const { DistanceDisplayCondition, CallbackProperty } = Cesium

  if (val instanceof DistanceDisplayCondition || val instanceof CallbackProperty) {
    return val
  }

  if (isPlainObject(val) && hasOwn(val, 'near') && hasOwn(val, 'far')) {
    const value = val as DistanceDisplayConditionOption
    return new DistanceDisplayCondition(value.near, value.far)
  }

  if (isArray(val)) {
    return new DistanceDisplayCondition(val[0], val[1])
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return undefined
}

/**
 * 普通对象、数组或字符串转 Cesium.Color。
 * @param {String|Array|Object|Function} val
 * @returns {Color}
 * @example
 * const options = 'red'
 * // const options = [1, 0, 0, 1.0] // r g b a
 * // const options = {red: 255, green: 0, bule: 0, alpha: 255}
 * const color = makeColor(options) // return Cesium.Color
 */
export function makeColor(val: VcColor, isConstant = false): CesiumColor | undefined {
  const { Color, CallbackProperty } = Cesium

  if (val instanceof Color || val instanceof CallbackProperty) {
    return val
  }

  if (isString(val)) {
    return Color.fromCssColorString(val)
  }

  if (isPlainObject(val)) {
    if (hasOwn(val, 'red')) {
      const value = val as ColorInByteOption
      return Color.fromBytes(value.red, value.green || 255, value.blue || 255, value.alpha || 255)
    } else if (hasOwn(val, 'x')) {
      const value = val as Cartesian4Option
      return new Color(value.x, value.y || 1, value.z || 1, value.w || 1)
    }
  }

  if (isArray(val)) {
    return Color.fromBytes(val[0], val[1], val[2], val[3] || 255)
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return undefined
}

export function makeColors(vals: VcColor[]): Cesium.Color[] {
  if (isArray(vals)) {
    const results: Cesium.Color[] = []
    vals.forEach(val => {
      results.push(makeColor(val) as Cesium.Color)
    })

    return results
  } else {
    return vals
  }
}

/**
 * 普通对象或数组 [r, g, b, a] 或字符串转 MaterialProperty
 * @param {String|Array|Object} val
 */
export function makeMaterialProperty(val: VcMaterialProperty, isConstant = false): CesiumMaterialProperty {
  const {
    CallbackProperty,
    Color,
    CheckerboardMaterialProperty,
    ColorMaterialProperty,
    GridMaterialProperty,
    ImageMaterialProperty,
    PolylineArrowMaterialProperty,
    PolylineDashMaterialProperty,
    PolylineGlowMaterialProperty,
    PolylineOutlineMaterialProperty,
    StripeMaterialProperty,
    StripeOrientation
  } = Cesium

  if (
    val instanceof CallbackProperty ||
    val instanceof Color ||
    val instanceof CheckerboardMaterialProperty ||
    val instanceof ColorMaterialProperty ||
    val instanceof ImageMaterialProperty ||
    val instanceof PolylineArrowMaterialProperty ||
    val instanceof PolylineDashMaterialProperty ||
    val instanceof PolylineGlowMaterialProperty ||
    val instanceof PolylineOutlineMaterialProperty ||
    val instanceof StripeMaterialProperty ||
    getObjClassName(val as any).indexOf('MaterialProperty') !== -1
  ) {
    return val as CesiumMaterialProperty
  }
  if (
    (isString(val) && /(.*)\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/.test(val)) ||
    val instanceof HTMLImageElement ||
    val instanceof HTMLCanvasElement ||
    val instanceof HTMLVideoElement
  ) {
    return new ImageMaterialProperty({
      image: val,
      repeat: makeCartesian2({ x: 1.0, y: 1.0 }),
      color: Color.WHITE,
      transparent: true
    })
  }

  if (isArray(val) || isString(val)) {
    return new ColorMaterialProperty(makeColor(val))
  }

  if (isPlainObject(val) && hasOwn(val, 'fabric')) {
    const value = val as MaterialOption
    switch (value.fabric.type) {
      case 'Image':
        return new ImageMaterialProperty({
          image: value.fabric.uniforms.image,
          repeat: makeCartesian2((value.fabric.uniforms.repeat as Cartesian2Option) || { x: 1.0, y: 1.0 }),
          color: makeColor(value.fabric.uniforms.color!) || Color.WHITE,
          transparent: value.fabric.uniforms.transparent || false
        })
      case 'Color':
        return new ColorMaterialProperty(makeColor(value.fabric.uniforms.color || Color.WHITE))
      case 'PolylineArrow':
        return new PolylineArrowMaterialProperty(makeColor(value.fabric.uniforms.color || Color.WHITE))
      case 'PolylineDash':
        return new PolylineDashMaterialProperty({
          color: makeColor(value.fabric.uniforms.color || 'white') || Color.WHITE,
          gapColor: makeColor(value.fabric.uniforms.gapColor!) || Color.TRANSPARENT,
          dashLength: value.fabric.uniforms.taperPower || 16.0,
          dashPattern: value.fabric.uniforms.taperPower || 255.0
        })
      case 'PolylineGlow':
        return new PolylineGlowMaterialProperty({
          color: makeColor(value.fabric.uniforms.color!) || Color.WHITE,
          glowPower: value.fabric.uniforms.glowPower || 0.25,
          taperPower: value.fabric.uniforms.taperPower || 1.0
        })
      case 'PolylineOutline':
        return new PolylineOutlineMaterialProperty({
          color: makeColor(value.fabric.uniforms.color!) || Color.WHITE,
          outlineColor: makeColor(value.fabric.uniforms.outlineColor!) || Color.BLACK,
          outlineWidth: value.fabric.uniforms.outlineWidth || 1.0
        })
      case 'Checkerboard':
        return new CheckerboardMaterialProperty({
          evenColor: makeColor(value.fabric.uniforms.evenColor!) || Color.WHITE,
          oddColor: makeColor(value.fabric.uniforms.oddColor!) || Color.BLACK,
          repeat: makeCartesian2((value.fabric.uniforms.repeat as Cartesian2Option) || { x: 2, y: 2 })
        })
      case 'Grid':
        return new GridMaterialProperty({
          color: makeColor(value.fabric.uniforms.color!) || Color.WHITE,
          cellAlpha: value.fabric.uniforms.cellAlpha || 0.1,
          lineCount: makeCartesian2((value.fabric.uniforms.lineCount as Cartesian2Option) || { x: 8, y: 8 }),
          lineThickness: makeCartesian2((value.fabric.uniforms.lineThickness as Cartesian2Option) || { x: 1, y: 1 }),
          lineOffset: makeCartesian2((value.fabric.uniforms.lineOffset as Cartesian2Option) || { x: 0, y: 0 })
        })
      case 'Stripe':
        return new StripeMaterialProperty({
          orientation: value.fabric.uniforms.orientation || StripeOrientation.HORIZONTAL,
          evenColor: makeColor(value.fabric.uniforms.evenColor || 'white'),
          oddColor: makeColor(value.fabric.uniforms.oddColor || 'black'),
          offset: value.fabric.uniforms.offset || 0,
          repeat: (value.fabric.uniforms.repeat as number) || 1
        })
    }
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return val as CesiumMaterialProperty
}

/**
 * 转 Material
 * @param {String|Array|Object} val
 */
export function makeMaterial(this, val: VcMaterial): CesiumMaterial {
  const vcInstance = this as VcComponentInternalInstance
  const cmpName = vcInstance?.proxy?.$options.name
  if (
    cmpName &&
    (cmpName.indexOf('Graphics') !== -1 || cmpName.indexOf('Datasource') !== -1 || cmpName === 'VcOverlayDynamic' || cmpName === 'VcEntity')
  ) {
    return makeMaterialProperty(val as VcMaterialProperty)
  }
  const { Material, combine } = Cesium
  if (val instanceof Material) {
    return val
  }
  if (isPlainObject(val) && hasOwn(val, 'fabric')) {
    const f = obj => {
      for (const i in obj) {
        if (!isArray(obj[i]) && isPlainObject(obj[i])) {
          f(obj[i])
        } else {
          if (i.toLocaleLowerCase().indexOf('color') !== -1 && !isEmptyObj(obj[i])) {
            const result = makeColor(obj[i])
            // Cesium 通过对象属性个数判断具体材质类型的，通过 Cesium.combine 移除 vue 传的一些属性
            obj[i] = combine(result, result, true)
          }
        }
      }
    }
    f(val)
    return new Material(val as MaterialOption)
  }

  if (isArray(val) || isString(val)) {
    const material = Material.fromType('Color')
    material.uniforms.color = makeColor(val)
    return material
  }

  return undefined
}

export function makeAppearance(this: VcComponentInternalInstance, val: VcAppearance): CesiumAppearance | undefined {
  const {
    Appearance,
    DebugAppearance,
    MaterialAppearance,
    PolylineColorAppearance,
    EllipsoidSurfaceAppearance,
    PerInstanceColorAppearance,
    PolylineMaterialAppearance
  } = Cesium

  if (
    val instanceof Appearance ||
    val instanceof DebugAppearance ||
    val instanceof MaterialAppearance ||
    val instanceof PolylineColorAppearance ||
    val instanceof EllipsoidSurfaceAppearance ||
    val instanceof PerInstanceColorAppearance ||
    val instanceof PolylineMaterialAppearance ||
    getObjClassName(val as any).indexOf('Appearance') !== -1
  ) {
    return val as CesiumAppearance
  }

  if (isPlainObject(val) && hasOwn(val, 'type')) {
    const options: any = {
      ...val.options
    }
    if (val.options?.material) {
      options.material = makeMaterial.call(this, val.options.material as any)
    }

    return new Cesium[val.type!]({
      ...options
    })
  }

  return undefined
}

/**
 * 将对象 {west: number, south: number, east: number, north: number} 或者[west, south, east, north]数组 转 Cesium.Rectangle 对象。
 * @param {Object} val
 * @returns {Rectangle}
 */
export function makeRectangle(val: VcRectangle, isConstant = false): CesiumRectangle | Cesium.RectangleGraphics | undefined {
  const { Rectangle, RectangleGraphics, CallbackProperty } = Cesium

  // Entiy 的 rectangle 属性不能调用这个方法
  if (val instanceof RectangleGraphics || val instanceof Rectangle) {
    return val
  }

  if (isArray(val)) {
    return Rectangle.fromDegrees(val[0], val[1], val[2], val[3])
  }

  if (isPlainObject(val)) {
    if (hasOwn(val, 'west')) {
      const value = val as RectangleInDegreeOption
      return Rectangle.fromDegrees(value.west, value.south, value.east, value.north)
    } else if (hasOwn(val, 'x')) {
      const value = val as Cartesian4Option
      return new Rectangle(value.x, value.y, value.z, value.w)
    }
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return undefined
}

/**
 * 对象或数组转 Cesium.BoundingRectangle。
 * @param {Object} val
 * @returns {Cesium.BoundingRectangle}
 * @example
 * const options = [0, 0, 100, 100]
 * // const options = {x: 0, y: 0, width: 100, height: 100}
 * const boundingRectangle = makeBoundingRectangle(options)
 */
export function makeBoundingRectangle(val: VcBoundingRectangle, isConstant = false): CesiumBoundingRectangle | undefined {
  const { BoundingRectangle, CallbackProperty } = Cesium

  if (val instanceof BoundingRectangle || val instanceof CallbackProperty) {
    return val
  }

  if (isPlainObject(val) && hasOwn(val, 'x')) {
    const value = val as BoundingRectangleOption
    return new BoundingRectangle(value.x, value.y, value.width, value.height)
  }

  if (isArray(val)) {
    return new BoundingRectangle(val[0], val[1], val[2], val[3])
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return undefined
}

/**
 * 普通对象 {normal: number, distance: number} 转 Cesium.Plane 对象。
 * @param {Object} val
 * @returns {Plane}
 */
export function makePlane(
  val: Cesium.CallbackProperty | Cesium.Plane | PlaneOption | Array<any> | AnyFunction<any>,
  isConstant = false
): Cesium.CallbackProperty | Cesium.Plane | Cesium.PlaneGraphics | undefined {
  const { Cartesian3, Plane, PlaneGraphics, CallbackProperty } = Cesium

  // Entiy 和 PlaneGraphics 都有个 plane 属性 要区别一下
  if (val instanceof PlaneGraphics || val instanceof Plane || val instanceof CallbackProperty) {
    return val
  }

  if (isPlainObject(val) && hasOwn(val, 'normal')) {
    const value = val as PlaneOption
    // normal 法向量 需要写成 {x: number, y: number, z: number} 形式
    Cartesian3.normalize(makeCartesian3(value.normal) as Cesium.Cartesian3, value.normal as Cesium.Cartesian3)
    return new Plane(value.normal as Cesium.Cartesian3, value.distance)
  }

  if (isArray(val)) {
    const point3D = makeCartesian3(val[0]) as Cesium.Cartesian3
    const normalizePoint3D = Cartesian3.normalize(point3D, new Cartesian3())
    return new Plane(normalizePoint3D, val[1])
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return undefined
}

/**
 * 普通对象转平移、旋转、缩放变换对象。
 * @param {*} val
 */
export function makeTranslationRotationScale(
  val: Cesium.TranslationRotationScale | Cesium.CallbackProperty | TranslationRotationScaleOption | AnyFunction<any> | Array<any>,
  isConstant = false
) {
  const { TranslationRotationScale, CallbackProperty } = Cesium
  if (val instanceof CallbackProperty || val instanceof TranslationRotationScale) {
    return val
  }

  if (isPlainObject(val) && hasOwn(val, 'translation')) {
    const value = val as TranslationRotationScaleOption
    // note
    // translation scale需要写成 { x: number, y: number, z: number } 的形式
    return new TranslationRotationScale(
      makeCartesian3(value.translation) as Cesium.Cartesian3,
      makeQuaternion(value.rotation) as Cesium.Quaternion,
      makeCartesian3(value.scale) as Cesium.Cartesian3
    )
  }

  if (isArray(val)) {
    return new TranslationRotationScale(
      makeCartesian3(val[0]) as Cesium.Cartesian3,
      makeQuaternion(val[1]) as Cesium.Quaternion,
      makeCartesian3(val[2]) as Cesium.Cartesian3
    )
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }
  return val
}

export function makeOptions(this, val) {
  const vcInstance = this as VcComponentInternalInstance
  const cmpName = vcInstance.proxy?.$options.name
  const result: any = {}
  switch (cmpName) {
    case 'VcDatasourceGeojson':
      Object.assign(result, val)
      result && result.markerColor && (result.markerColor = makeColor(result.markerColor))
      result && result.stroke && (result.stroke = makeColor(result.stroke))
      result && result.fill && (result.fill = makeColor(result.fill))
      return result
  }
  return val
}

export function captureScreenshot(viewer: Cesium.Viewer) {
  const scene = viewer.scene
  const promise: Promise<string> = new Promise((resolve, reject) => {
    const removeCallback = viewer.scene.postRender.addEventListener(() => {
      removeCallback()
      try {
        const cesiumCanvas = viewer.scene.canvas
        const canvas = cesiumCanvas
        resolve(canvas.toDataURL('image/png'))
      } catch (e) {
        reject(e)
      }
    })
  })

  scene.render(viewer.clock.currentTime)
  return promise
}

export function makeCameraOptions(camera: VcCamera, ellipsoid?: Cesium.Ellipsoid) {
  const { Math: CesiumMath, Rectangle } = Cesium

  let destination: Cesium.Cartesian3 | Cesium.Rectangle | undefined = undefined
  let orientation: HeadingPitchRollOption = {}

  if (hasOwn(camera, 'position')) {
    const position = camera.position
    destination = makeCartesian3(position!, ellipsoid) as Cesium.Cartesian3
    if ((hasOwn(position!, 'lng') && hasOwn(position!, 'lat')) || isArray(position)) {
      orientation = {
        heading: CesiumMath.toRadians(camera.heading || 360),
        pitch: CesiumMath.toRadians(camera.pitch || -90),
        roll: CesiumMath.toRadians(camera.roll || 0)
      }
    } else {
      orientation = {
        heading: camera.heading || 2 * Math.PI,
        pitch: camera.pitch || -Math.PI / 2,
        roll: camera.roll || 0
      }
    }
  } else if (hasOwn(camera, 'rectangle')) {
    const rectangle = camera.retangle
    destination = makeRectangle(rectangle!) as Cesium.Rectangle
    Rectangle.validate(destination)
    if (
      (hasOwn(rectangle!, 'west') && hasOwn(rectangle!, 'south') && hasOwn(rectangle!, 'east') && hasOwn(rectangle!, 'north')) ||
      isArray(rectangle)
    ) {
      orientation = {
        heading: CesiumMath.toRadians(camera.heading || 360),
        pitch: CesiumMath.toRadians(camera.pitch || -90),
        roll: CesiumMath.toRadians(camera.roll || 0)
      }
    } else {
      orientation = {
        heading: camera.heading || 2 * Math.PI,
        pitch: camera.pitch || -Math.PI / 2,
        roll: camera.roll || 0
      }
    }
  }

  return {
    destination,
    orientation
  }
}

export function setViewerCamera(viewer: Cesium.Viewer, camera: VcCamera) {
  const { destination, orientation } = makeCameraOptions(camera, viewer.scene.globe.ellipsoid)
  viewer.camera.setView({
    destination: destination,
    orientation: orientation
  })
}

export function flyToCamera(viewer: Cesium.Viewer, camera: VcCamera, options?) {
  const { destination, orientation } = makeCameraOptions(camera, viewer.scene.globe.ellipsoid)
  viewer.camera.flyTo({
    destination: options.destination || destination,
    orientation: options.orientation || orientation,
    duration: options.duration,
    complete: options.complete,
    cancel: options.cancel
  })
}

export function getGeodesicDistance(start: Cesium.Cartesian3, end: Cesium.Cartesian3, ellipsoid: Cesium.Ellipsoid) {
  const { EllipsoidGeodesic, Ellipsoid } = Cesium
  ellipsoid = ellipsoid || Ellipsoid.WGS84
  const pickedPointCartographic = ellipsoid.cartesianToCartographic(start)
  const lastPointCartographic = ellipsoid.cartesianToCartographic(end)
  const geodesic = new EllipsoidGeodesic(pickedPointCartographic, lastPointCartographic)
  return geodesic.surfaceDistance
}

export function getHeadingPitchRoll(start: Cesium.Cartesian3, end: Cesium.Cartesian3, scene: Cesium.Scene, result?: Array<number>) {
  const { Camera, Cartesian3, Math: CesiumMath } = Cesium
  const camera = new Camera(scene)
  if (Cartesian3.equals(start, end)) {
    return undefined
  }

  let direction = Cartesian3.subtract(end, start, {} as any)
  direction = Cartesian3.normalize(direction, direction)
  let up = Cartesian3.subtract(start, new Cartesian3(), {} as any)
  up = Cartesian3.normalize(up, up)
  camera.setView({
    destination: start,
    orientation: {
      direction,
      up
    }
  })

  result = result || [0, 0, 0]
  let heading = camera.heading
  heading -= CesiumMath.PI_OVER_TWO
  if (heading < 0) {
    heading += CesiumMath.TWO_PI
  }
  result.splice(0, result.length, heading, camera.pitch, camera.roll)
  return result
}

export function getPolylineSegmentEndpoint(start: Cesium.Cartesian3, heading: number, distance: number, ellipsoid: Cesium.Ellipsoid) {
  const { HeadingPitchRoll, Transforms, Matrix4, Cartesian3, Cartesian4, Quaternion, Cartographic, Ellipsoid } = Cesium
  ellipsoid = ellipsoid || Ellipsoid.WGS84
  const hpr = new HeadingPitchRoll(heading, 0, 0)
  const scale = new Cartesian3(1, 1, 1)
  const matrix = Transforms.headingPitchRollToFixedFrame(start, hpr)
  const translation = Matrix4.getColumn(matrix, 1, new Cartesian4())
  const axis = new Cartesian3(translation.x, translation.y, translation.z)
  const quaternion = Quaternion.fromAxisAngle(axis, distance * ellipsoid.oneOverRadii.x)
  const hprMatrix = Matrix4.fromTranslationQuaternionRotationScale(Cartesian3.ZERO, quaternion, scale)
  const position = Matrix4.multiplyByPoint(hprMatrix, start, new Cartesian3())
  const startCartographic = Cartographic.fromCartesian(start, ellipsoid)
  const positionCartographic = Cartographic.fromCartesian(position, ellipsoid)
  positionCartographic.height = startCartographic.height
  return Cartographic.toCartesian(positionCartographic, ellipsoid)
}

export function calculateAreaByPostions(positions: Array<Cesium.Cartesian3>) {
  let area = 0
  const { CoplanarPolygonGeometry, VertexFormat, defined, Cartesian3 } = Cesium
  const geometry = CoplanarPolygonGeometry.createGeometry(
    CoplanarPolygonGeometry.fromPositions({
      positions: positions,
      vertexFormat: VertexFormat.POSITION_ONLY
    })
  )

  if (!isUndefined(geometry) && defined(geometry)) {
    const indices = geometry.indices
    const positionValues = geometry.attributes.position.values as number[]
    for (let i = 0; i < indices.length; i += 3) {
      const indice0 = indices[i]
      const indice1 = indices[i + 1]
      const indice2 = indices[i + 2]

      area += triangleArea(
        Cartesian3.unpack(positionValues, 3 * indice0, {} as any),
        Cartesian3.unpack(positionValues, 3 * indice1, {} as any),
        Cartesian3.unpack(positionValues, 3 * indice2, {} as any)
      )
    }
  }

  return area
}

const triangleArea = (vertexA, vertexB, vertexC) => {
  const { Cartesian3 } = Cesium
  const vectorBA = Cartesian3.subtract(vertexA, vertexB, {} as any)
  const vectorBC = Cartesian3.subtract(vertexC, vertexB, {} as any)
  const crossProduct = Cartesian3.cross(vectorBA, vectorBC, vectorBA)
  return 0.5 * Cartesian3.magnitude(crossProduct)
}

const restoreCursors: Array<string> = []
export function setViewerCursor(viewer: Cesium.Viewer, cursor: string) {
  const restoreCursor = getComputedStyle(viewer.canvas).cursor
  restoreCursors[restoreCursors.length - 1] !== restoreCursor && restoreCursors.push(restoreCursor)
  viewer.canvas.setAttribute('style', `cursor: ${cursor}`)
}

export function restoreViewerCursor(viewer: Cesium.Viewer, count = 1) {
  for (let i = 0; i < count; i++) {
    const cursor = restoreCursors.pop()
    viewer.canvas.setAttribute('style', `cursor: ${cursor}`)
  }
}

export function makeJulianDate(val: string | Date | Cesium.JulianDate): Cesium.JulianDate {
  const { JulianDate } = Cesium
  if (val instanceof JulianDate) {
    return val
  } else if (isString(val)) {
    return Cesium.JulianDate.fromIso8601(val)
  } else if (val instanceof Date) {
    return Cesium.JulianDate.fromDate(val)
  }

  return Cesium.JulianDate.now()
}

export function getPolylineSegmentHeading(start: Cesium.Cartesian3, end: Cesium.Cartesian3) {
  const { Cartesian3, Matrix4, Transforms, Math: CesiumMath } = Cesium
  const cartesian3Scratch = new Cartesian3()
  const matrix4Scratch = Transforms.eastNorthUpToFixedFrame(start)
  Matrix4.inverse(matrix4Scratch, matrix4Scratch)
  Matrix4.multiplyByPoint(matrix4Scratch, end, cartesian3Scratch)
  Cartesian3.normalize(cartesian3Scratch, cartesian3Scratch)
  return CesiumMath.toDegrees(Math.atan2(cartesian3Scratch.x, cartesian3Scratch.y))
}

export function getPolylineSegmentPitch(start: Cesium.Cartesian3, end: Cesium.Cartesian3) {
  const { Cartesian3, Matrix4, Transforms, Math: CesiumMath } = Cesium
  const cartesian3Scratch = new Cartesian3()
  const matrix4Scratch = Transforms.eastNorthUpToFixedFrame(start)
  Matrix4.inverse(matrix4Scratch, matrix4Scratch)
  Matrix4.multiplyByPoint(matrix4Scratch, end, cartesian3Scratch)
  Cartesian3.normalize(cartesian3Scratch, cartesian3Scratch)
  return CesiumMath.toDegrees(Math.asin(cartesian3Scratch.z))
}

export function getFirstIntersection(
  start: Cesium.Cartesian3,
  end: Cesium.Cartesian3,
  viewer: Cesium.Viewer,
  objectsToExclude = []
): Cesium.Cartesian3 {
  const { Cartesian3, Ray, defined } = Cesium
  const direction = Cartesian3.normalize(Cartesian3.subtract(end, start, new Cartesian3()), new Cartesian3())
  const ray = new Ray(start, direction)
  console.log(objectsToExclude)
  const result = viewer.scene.pickFromRay(ray, objectsToExclude)
  if (defined(result)) {
    if (defined(result.position)) {
      const intersection = result.position
      return intersection
    }
  }

  return undefined
}
