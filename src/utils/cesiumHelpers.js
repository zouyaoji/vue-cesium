import { isFunction, isArray, isString, isObject, isEmptyObj } from './util'
import specialProps from './specialProps'
/**
 * 将对象 {x: number, y: number } 转换为 Cesium.Cartesian2
 * @param {Object} val
 * @returns {Cartesian2 | CallbackProperty} 返回 Cartesian2 或者 CallbackProperty
 */
export function makeCartesian2 (val, isConstant = false) {
  const { Cartesian2, CallbackProperty } = Cesium
  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  } else if (val && val.hasOwnProperty('x')) {
    return new Cartesian2(val.x, val.y)
  }
  return val
}

/**
 * 将对象 { x: number, y: number, z: number } 或者 { lng: number, lat: number, height: number }转换为 Cesium.Cartesian3
 * @param {Object} val
 * @param {Boolean} isConstant 传入function时生效，true 代表回调 function 每时每刻都返回值， false 代表改变才会返回值。默认false。
 * @returns 返回 Cartesian3 或者 CallbackProperty
 */
export function makeCartesian3 (val, isConstant = false) {
  const { CallbackProperty, Cartesian3 } = Cesium
  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  } else if (val && val.hasOwnProperty('x')) {
    return new Cartesian3(val.x, val.y, val.z)
  } else if (val && val.hasOwnProperty('lng')) {
    return Cartesian3.fromDegrees(val.lng, val.lat, val.height)
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
  if (isFunction(vals)) {
    return new CallbackProperty(vals, isConstant)
  } else if ((vals && isArray(vals) && vals[0] instanceof Cartesian3) || vals._callback) {
    return vals
  }

  const coordinates = []
  vals.forEach((item) => {
    coordinates.push(item.lng)
    coordinates.push(item.lat)
    coordinates.push(item.height)
  })

  return coordinates.length >= 3 ? Cartesian3.fromDegreesArrayHeights(coordinates) : vals
}

/**
 * 将形如 [lng, lat, ……，lng, lat] 数组转换为 Cesium.Cartesian2 数组
 * @param {Array} vals
 * @returns {Array<Cartesian2>}
 */
export function makeCartesian2Array (vals, isConstant) {
  const { CallbackProperty, Cartesian2 } = Cesium
  if (isFunction(vals)) {
    return new CallbackProperty(vals, isConstant)
  }
  const cartesian2Array = []
  vals.forEach((item) => {
    cartesian2Array.push(new Cartesian2(item.x, item.y))
  })
  return cartesian2Array
}

/**
 * 将对象 {x: number, y: number, z: number ,w: number} 转换为 Cesium.Quaternion
 * @param {Object} val
 */
export function makeQuaternion (val, isConstant = false) {
  const { CallbackProperty, Quaternion } = Cesium
  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }
  return val && val.hasOwnProperty('x') ? new Quaternion(val.x, val.y, val.z, val.w) : val
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
 * 普通对象 {near: number, nearValue: number, far: number, farValue: number} 转 Cesium.NearFarScalar 对象。
 * @param {Object} val
 * @returns {NearFarScalar}
 */
export function makeNearFarScalar (val, isConstant = false) {
  const { NearFarScalar, CallbackProperty } = Cesium
  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }
  if (val && val.hasOwnProperty('near')) {
    return new NearFarScalar(val.near, val.nearValue, val.far, val.farValue)
  }
  return val
}
/**
 * 普通对象 {near: number, far: number} 转 Cesium.DistanceDisplayCondition 对象。
 * @param {Object} val
 * @returns {DistanceDisplayCondition}
 */
export function makeDistanceDisplayCondition (val, isConstant = false) {
  const { DistanceDisplayCondition, CallbackProperty } = Cesium
  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }
  if (val && val.hasOwnProperty('near')) {
    return new DistanceDisplayCondition(val.near, val.nearValue, val.far, val.farValue)
  }
  return val
}

/**
 * 普通对象或数组 [r, g, b, a] 或字符串转 Cesium.Color 对象。
 * @param {String|Array|Object} val
 * @returns {Color}
 */
export function makeColor (val, isConstant = false) {
  const { Color, CallbackProperty } = Cesium
  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  } else if (val instanceof Color) {
    return val
  } else if (isArray(val)) {
    return new Cesium.Color(val[0], val[1], val[2], val[3])
  } else if (isString(val)) {
    return Color.fromCssColorString(val)
  }
  return val
}

/**
 * 普通对象或数组 [r, g, b, a] 或字符串转 MaterialProperty
 * @param {String|Array|Object} val
 */
export function makeMaterialProperty (val, isConstant = false) {
  const { CallbackProperty, Color, Resource, ColorMaterialProperty, ImageMaterialProperty, PolylineArrowMaterialProperty,
    PolylineDashMaterialProperty, PolylineGlowMaterialProperty, PolylineOutlineMaterialProperty, CheckerboardMaterialProperty,
    GridMaterialProperty, StripeMaterialProperty } = Cesium
  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }

  if (/(.*)\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/.test(val) || val instanceof Resource ||
    val instanceof HTMLCanvasElement || val instanceof HTMLVideoElement) {
    const result = new ImageMaterialProperty()
    result.image = val
    return result
  }

  if (isArray(val) || isString(val)) {
    return new ColorMaterialProperty(makeColor(val))
  }

  if (val && val.hasOwnProperty('fabric')) {
    switch (val.fabric.type) {
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
  if (val && val.hasOwnProperty('fabric')) {
    const f = (obj) => {
      for (var i in obj) {
        if (!isArray(obj[i]) && isObject(obj[i])) {
          f(obj[i])
        } else {
          const specialPropsKeys = Object.keys(specialProps)
          if (specialPropsKeys.indexOf(i) !== -1 && specialProps[i].handler && !isEmptyObj(obj[i])) {
            const result = specialProps[i].handler.call(this, obj[i])
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
  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }
  // Entiy 的 rectangle 属性不能调用这个方法
  if (val instanceof RectangleGraphics) {
    return val
  }
  if (isArray(val) && val.length === 4) {
    return Rectangle.fromDegrees(val[0], val[1], val[2], val[3])
  }
  if (val && val.hasOwnProperty('west')) {
    return Rectangle.fromDegrees(val.west, val.south, val.east, val.north)
  }
  return val
}

/**
 * 将对象 {x: number, y: number, width: number, height: number} 转 Cesium.BoundingRectangle 对象。
 * @param {Object} val
 * @returns {BoundingRectangle}
 */
export function makeBoundingRectangle (val, isConstant = false) {
  const { BoundingRectangle, CallbackProperty } = Cesium
  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }
  if (val && val.hasOwnProperty('x')) {
    return new BoundingRectangle(val.x, val.y, val.width, val.height)
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
  if (isFunction(val)) {
    return new CallbackProperty(val, isConstant)
  }
  // Entiy 和 PlaneGraphics 都有个 plane 属性 要区别一下
  if (val instanceof PlaneGraphics) {
    return val
  }
  if (val && val.hasOwnProperty('normal')) {
    Cartesian3.normalize(makeCartesian3(val.normal), val.normal)
    return new Plane(val.normal, val.distance)
  }
  return val
}

/**
 * 普通对象转平移、旋转、缩放变换对象。
 * @param {*} val
 */
export function makeTranslationRotationScale (val) {
  if (val && val.hasOwnProperty('translation')) {
    return new Cesium.TranslationRotationScale(makeCartesian3(val.translation), makeQuaternion(val.rotation), makeCartesian3(val.scale))
  }
  return val
}

export function makeOptions (val) {
  const cmpName = this.$options.name
  switch (cmpName) {
    case 'vc-datasource-geojson':
      const result = {}
      Object.assign(result, val)
      result && result.markerColor && (result.markerColor = makeColor(result.markerColor))
      result && result.stroke && (result.stroke = makeColor(result.stroke))
      result && result.fill && (result.fill = makeColor(result.fill))
      return result
  }
  return val
}
