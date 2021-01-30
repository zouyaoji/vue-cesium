import { isFunction, isArray, isString, isObject, isEmptyObj } from './util'
/**
 * 将对象或数组转换为 Cesium.Cartesian2
 * @param {Object} val
 * @returns {Cartesian2 | CallbackProperty} 返回 Cartesian2 或者 CallbackProperty
 * @example
 * const options = [100, 100]
 * // const options = [x: 100, y: 100]
 * const position = makeCartesian2(options)
 */
export function makeCartesian2 (val, isConstant = false) {
  const { Cartesian2, CallbackProperty } = Cesium

  if (val instanceof Cartesian2) {
    return val
  }

  if (isObject(val) && Object.prototype.hasOwnProperty.call(val, 'x')) {
    return new Cartesian2(val.x, val.y)
  }

  if (isArray(val)) {
    return new Cartesian2(val[0], val[1])
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }
  return val
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
export function makeCartesian3 (val, isConstant = false) {
  const { CallbackProperty, Cartesian3 } = Cesium

  if (val instanceof Cartesian3) {
    return val
  }

  if (isObject(val)) {
    if (Object.prototype.hasOwnProperty.call(val, 'x')) {
      return new Cartesian3(val.x, val.y, val.z || 0)
    } else if (Object.prototype.hasOwnProperty.call(val, 'lng')) {
      return Cartesian3.fromDegrees(val.lng, val.lat, val.height || 0)
    }
  }

  if (isArray(val)) {
    return new Cartesian3(val[0], val[1], val[2] || 0)
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return val
}

/**
 * 将数组 [lng, lat, height, ……，lng, lat, height] 转换为 Cesium.Cartesian3 数组
 * @param {Array} val
 * @returns {Array<Cartesian3>}
 */
export function makeCartesian3Array (vals, isConstant = false) {
  const { CallbackProperty, Cartesian3 } = Cesium
  if (isArray(vals)) {
    if (vals[0] instanceof Cartesian3 || vals._callback) {
      return vals
    }
    if (isArray(vals[0])) {
      const coordinates = []
      for (let i = 0; i < vals.length; i++) {
        coordinates.push(vals[i][0])
        coordinates.push(vals[i][1])
        coordinates.push(vals[i][2] || 0)
      }
      return Cartesian3.fromRadiansArrayHeights(coordinates)
    } else if (isObject(vals[0])) {
      const coordinates = []
      if (vals[0].lng) {
        vals.forEach((item) => {
          coordinates.push(item.lng)
          coordinates.push(item.lat)
          coordinates.push(item.height || 0)
        })
        return Cartesian3.fromDegreesArrayHeights(coordinates)
      } else {
        if (vals[0].x) {
          vals.forEach((item) => {
            coordinates.push(item.x)
            coordinates.push(item.y)
            coordinates.push(item.z || 0)
          })
          return Cartesian3.fromRadiansArrayHeights(coordinates)
        }
      }
    }

    return Cartesian3.fromDegreesArrayHeights(vals)
  }

  if (isFunction(vals)) {
    return new CallbackProperty(vals, isConstant)
  }

  return vals
}

/**
 * 将形如 [lng, lat, ……，lng, lat] 数组转换为 Cesium.Cartesian2 数组
 * @param {Array} vals
 * @returns {Array<Cartesian2>}
 */
export function makeCartesian2Array (vals, isConstant) {
  const { CallbackProperty, Cartesian2 } = Cesium

  if (isArray(vals)) {
    if (vals[0] instanceof Cartesian2 || vals._callback) {
      return vals
    }

    if (isObject(vals[0])) {
      const cartesian2Array = []
      vals.forEach((item) => {
        cartesian2Array.push(new Cartesian2(item.x, item.y))
      })
      return cartesian2Array
    }
  }

  if (isFunction(vals)) {
    return new CallbackProperty(vals, isConstant)
  }

  return vals
}

/**
 * 将对象或数组 转换为 Cesium.Quaternion
 * @param {Object} val
 * @example
 * const options = {x: 0, y: 0, z: 0, w: 0}
 * // const options = [0, 0, 0, 0]
 * const orientation = makeQuaternion(options) // returns Cesium.Quaternion
 */
export function makeQuaternion (val, isConstant = false) {
  const { CallbackProperty, Quaternion } = Cesium

  if (val instanceof Quaternion) {
    return val
  }

  if (isObject(val) && Object.prototype.hasOwnProperty.call(val, 'x')) {
    return new Quaternion(val.x, val.y, val.z, val.w)
  }

  if (isArray(val)) {
    return new Quaternion(val[0], val[1], val[2], val[3])
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return val
}

/**
 * 解析 HierarchyJson
 * @param {Object} val
 */
function parsePolygonHierarchyJson (val) {
  val.forEach((element) => {
    element.positions = makeCartesian3Array(element.positions)
    if (element.holes) {
      parsePolygonHierarchyJson(element.holes)
    }
  })
}

/**
 * 普通数组或对象转 Cesium.PolygonHierarchy 对象。
 * @param {Object|Array} val
 */
export function makePolygonHierarchy (val, isConstant = false) {
  const { PolygonHierarchy, CallbackProperty } = Cesium

  if (val instanceof PolygonHierarchy) {
    return val
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  if (isArray(val) && val.length >= 3) {
    return new PolygonHierarchy(makeCartesian3Array(val))
  }
  if (Cesium.defined(val.positions)) {
    val.positions = makeCartesian3Array(val.positions)
    parsePolygonHierarchyJson(val.holes)
  }

  return val
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
export function makeNearFarScalar (val, isConstant = false) {
  const { NearFarScalar, CallbackProperty } = Cesium

  if (val instanceof NearFarScalar) {
    return val
  }

  if (isObject(val) && Object.prototype.hasOwnProperty.call(val, 'near')) {
    return new NearFarScalar(val.near, val.nearValue, val.far, val.farValue)
  }

  if (isArray(val)) {
    return new NearFarScalar(val[0], val[1], val[2], val[3])
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return val
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
export function makeDistanceDisplayCondition (val, isConstant = false) {
  const { DistanceDisplayCondition, CallbackProperty } = Cesium

  if (val instanceof DistanceDisplayCondition) {
    return val
  }

  if (isObject(val) && Object.prototype.hasOwnProperty.call(val, 'near')) {
    return new DistanceDisplayCondition(val.near, val.far)
  }

  if (isArray(val)) {
    return new DistanceDisplayCondition(val[0], val[1])
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return val
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
export function makeColor (val, isConstant = false) {
  const { Color, CallbackProperty } = Cesium

  if (val instanceof Color) {
    return val
  }

  if (isString(val)) {
    return Color.fromCssColorString(val)
  }

  if (isObject(val) && Object.prototype.hasOwnProperty.call(val, 'red')) {
    return Color.fromBytes(val.red, val.green, val.blue, val.alpha || 255)
  }

  if (isArray(val)) {
    return new Cesium.Color(val[0], val[1], val[2], val[3] || 1.0)
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }
}

/**
 * 普通对象或数组 [r, g, b, a] 或字符串转 MaterialProperty
 * @param {String|Array|Object} val
 */
export function makeMaterialProperty (val, isConstant = false) {
  const {
    CallbackProperty,
    Color,
    Resource,
    ColorMaterialProperty,
    ImageMaterialProperty,
    PolylineArrowMaterialProperty,
    PolylineDashMaterialProperty,
    PolylineGlowMaterialProperty,
    PolylineOutlineMaterialProperty,
    CheckerboardMaterialProperty,
    GridMaterialProperty,
    StripeMaterialProperty
  } = Cesium

  if (/(.*)\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/.test(val) ||
    val instanceof Resource ||
    val instanceof HTMLCanvasElement ||
    val instanceof HTMLVideoElement) {
    const result = new ImageMaterialProperty({
      image: val,
      repeat: makeCartesian2({ x: 1.0, y: 1.0 }),
      color: Color.WHITE,
      transparent: true
    })
    result.image = val
    return result
  }

  if (isArray(val) || isString(val)) {
    return new ColorMaterialProperty(makeColor(val))
  }

  if (isObject(val) && Object.prototype.hasOwnProperty.call(val, 'fabric')) {
    switch (val.fabric.type) {
      case 'Image':
        return new ImageMaterialProperty({
          image: val.fabric.uniforms.image,
          repeat: val.fabric.uniforms.repeat || makeCartesian2({ x: 1.0, y: 1.0 }),
          color: makeColor(val.fabric.uniforms.color) || Color.WHITE,
          transparent: val.fabric.uniforms.transparent || false
        })
      case 'Color':
        return new ColorMaterialProperty(makeColor(val.fabric.uniforms.color || Color.WHITE))
      case 'PolylineArrow':
        return new PolylineArrowMaterialProperty(makeColor(val.fabric.uniforms.color || Color.WHITE))
      case 'PolylineDash':
        return new PolylineDashMaterialProperty({
          color: makeColor(val.fabric.uniforms.color) || Color.WHITE,
          gapColor: val.fabric.uniforms.gapColor || Color.TRANSPARENT,
          dashLength: val.fabric.uniforms.taperPower || 16.0,
          dashPattern: val.fabric.uniforms.taperPower || 255.0
        })
      case 'PolylineGlow':
        return new PolylineGlowMaterialProperty({
          color: makeColor(val.fabric.uniforms.color) || Color.WHITE,
          glowPower: val.fabric.uniforms.glowPower || 0.25,
          taperPower: val.fabric.uniforms.taperPower || 1.0
        })
      case 'PolylineOutline':
        return new PolylineOutlineMaterialProperty({
          color: makeColor(val.fabric.uniforms.color) || Color.WHITE,
          outlineColor: val.fabric.uniforms.outlineColor || Color.BLACK,
          outlineWidth: val.fabric.uniforms.outlineWidth || 1.0
        })
      case 'Checkerboard':
        return new CheckerboardMaterialProperty({
          evenColor: makeColor(val.fabric.uniforms.evenColor) || Color.WHITE,
          oddColor: val.fabric.uniforms.oddColor || Color.BLACK,
          repeat: val.fabric.uniforms.repeat || makeCartesian2({ x: 2, y: 2 })
        })
      case 'Grid':
        return new GridMaterialProperty({
          color: makeColor(val.fabric.uniforms.color) || Color.WHITE,
          cellAlpha: val.fabric.uniforms.cellAlpha || 0.1,
          lineCount: val.fabric.uniforms.lineCount || makeCartesian2({ x: 8, y: 8 }),
          lineThickness: val.fabric.uniforms.lineThickness || makeCartesian2({ x: 1, y: 1 }),
          lineOffset: val.fabric.uniforms.lineOffset || makeCartesian2({ x: 0, y: 0 })
        })
      case 'Stripe':
        return new StripeMaterialProperty({
          orientation: makeColor(val.fabric.uniforms.orientation) || 0,
          evenColor: val.fabric.uniforms.evenColor || Color.WHITE,
          oddColor: val.fabric.uniforms.oddColor || Color.BLACK,
          offset: val.fabric.uniforms.offset || 0,
          repeat: val.fabric.uniforms.repeat || 1
        })
    }
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return val
}

/**
 * 转 Material
 * @param {String|Array|Object} val
 */
export function makeMaterial (val) {
  const cmpName = this.$options.name
  if (cmpName && cmpName.indexOf('graphics') !== -1) {
    return makeMaterialProperty(val)
  }

  if (isObject(val) && Object.prototype.hasOwnProperty.call(val, 'fabric')) {
    const f = (obj) => {
      for (const i in obj) {
        if (!isArray(obj[i]) && isObject(obj[i])) {
          f(obj[i])
        } else {
          if (i.toLocaleLowerCase().indexOf('color') !== -1 && !isEmptyObj(obj[i])) {
            const result = makeColor(obj[i])
            // Cesium 通过对象属性个数判断具体材质类型的，通过 Cesium.combine 移除 vue 传的一些属性
            obj[i] = Cesium.combine(result, result, true)
          }
        }
      }
    }
    f(val)
    return new Cesium.Material(val)
  }
  return val
}

/**
 * 将对象 {west: number, south: number, east: number, north: number} 或者[west, south, east, north]数组 转 Cesium.Rectangle 对象。
 * @param {Object} val
 * @returns {Rectangle}
 */
export function makeRectangle (val, isConstant = false) {
  const { Rectangle, RectangleGraphics, CallbackProperty } = Cesium

  // Entiy 的 rectangle 属性不能调用这个方法
  if (val instanceof RectangleGraphics) {
    return val
  }

  if (val instanceof Rectangle) {
    return val
  }

  if (isArray(val)) {
    return Rectangle.fromDegrees(val[0], val[1], val[2], val[3])
  }

  if (isObject(val) && Object.prototype.hasOwnProperty.call(val, 'west')) {
    return Rectangle.fromDegrees(val.west, val.south, val.east, val.north)
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return val
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
export function makeBoundingRectangle (val, isConstant = false) {
  const { BoundingRectangle, CallbackProperty } = Cesium

  if (val instanceof BoundingRectangle) {
    return val
  }

  if (isObject(val) && Object.prototype.hasOwnProperty.call(val, 'x')) {
    return new BoundingRectangle(val.x, val.y, val.width, val.height)
  }

  if (isArray) {
    return new BoundingRectangle(val[0], val[1], val[2], val[3])
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return val
}

/**
 * 普通对象 {normal: number, distance: number} 转 Cesium.Plane 对象。
 * @param {Object} val
 * @returns {Plane}
 */
export function makePlane (val, isConstant = false) {
  const { Cartesian3, Plane, PlaneGraphics, CallbackProperty } = Cesium

  // Entiy 和 PlaneGraphics 都有个 plane 属性 要区别一下
  if (val instanceof PlaneGraphics) {
    return val
  }

  if (val instanceof Plane) {
    return val
  }

  if (isObject(val) && Object.prototype.hasOwnProperty.call(val, 'normal')) {
    Cartesian3.normalize(makeCartesian3(val.normal), val.normal)
    return new Plane(val.normal, val.distance)
  }

  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  return val
}

/**
 * 普通对象转平移、旋转、缩放变换对象。
 * @param {*} val
 */
export function makeTranslationRotationScale (val) {
  if (isObject(val) && Object.prototype.hasOwnProperty.call(val, 'translation')) {
    return new Cesium.TranslationRotationScale(
      makeCartesian3(val.translation),
      makeQuaternion(val.rotation),
      makeCartesian3(val.scale)
    )
  }
  return val
}

export function makeOptions (val) {
  const cmpName = this.$options.name
  const result = {}
  switch (cmpName) {
    case 'vc-datasource-geojson':
      Object.assign(result, val)
      result && result.markerColor && (result.markerColor = makeColor(result.markerColor))
      result && result.stroke && (result.stroke = makeColor(result.stroke))
      result && result.fill && (result.fill = makeColor(result.fill))
      return result
  }
  return val
}
