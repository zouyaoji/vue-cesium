export const checkType = (val) => Object.prototype.toString.call(val).slice(8, -1)

export const toKebabCase = (str) => str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`).replace(/^-/, '')
/**
 * 通过 class 名获取 Dom 元素。
 * @param {Array<Element>} htmlCollection Dom元素集合。
 * @param {String} className class 名称。
 */
export const getDocumentByClassName = (htmlCollection, className) => {
  let temp
  const BreakException = {}
  try {
    Array.prototype.slice.call(htmlCollection).forEach((element) => {
      if (element.className === className) {
        temp = element
        throw BreakException
      }
    })
  } catch (e) {
    if (e !== BreakException) throw e
  }
  return temp
}
/**
 * 判断传入的对象是否是方法。
 * @param {*} value
 * @returns {Boolean}
 */
export function isFunction (value) {
  return typeof value === 'function'
}
/**
 * 验证是否是经纬度。
 * @param {Number} longitude
 * @param {Number} latitude
 * @returns {Boolean}
 */
export function lnglatValidator (longitude, latitude) {
  // 经度，整数部分为0-180小数部分为0到6位
  const longreg = /^(-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,15})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,15}|180)$/
  if (!longreg.test(longitude)) {
    return false
  } // 纬度,整数部分为0-90小数部分为0到6位
  const latreg = /^(-|\+)?([0-8]?\d{1}\.\d{0,15}|90\.0{0,15}|[0-8]?\d{1}|90)$/
  if (!latreg.test(latitude)) {
    return false
  }
  return true
}
/**
 * 普通对象 {x: number, y: number } 转换为 Cesium.Cartesian2 对象
 * @param {Object} val
 * @returns {Object}
 */
export function makeCartesian2 (val) {
  return val && new Cesium.Cartesian2(val.x, val.y)
}

/**
 * 普通对象 {x: number, y: number, z: number } 转换为 Cesium.Cartesian3 对象
 * @param {Object} val
 * @returns {Object}
 */
export function makeCartesian3 (val) {
  if (val && Object.prototype.hasOwnProperty.call(val, 'x')) {
    return new Cesium.Cartesian3(val.x, val.y, val.z)
  } else if (val && Object.prototype.hasOwnProperty.call(val, 'lng')) {
    return Cesium.Cartesian3.fromDegrees(val.lng, val.lat, val.height)
  }
  return val
}

/**
 * 普通数组 [lng, lat, height, ……，lng, lat, height] 转换为 Cesium.Cartesian3 数组
 * @param {Array} val
 * @returns {Array<Cartesian3>}
 */
export function makeCartesian3Array (vals) {
  if (vals && vals instanceof Array && vals[0] instanceof Cesium.Cartesian3) {
    return vals
  }

  const coordinates = []
  vals.forEach((item) => {
    coordinates.push(item.lng)
    coordinates.push(item.lat)
    coordinates.push(item.height)
  })

  return coordinates.length >= 3 ? Cesium.Cartesian3.fromDegreesArrayHeights(coordinates) : vals
}
/**
 * 普通数组 [lng, lat, ……，lng, lat] 转换为 Cesium.Cartesian2 数组
 * @param {Array} vals
 * @returns {Array<Cartesian2>}
 */
export function makeCartesian2Array (vals) {
  const cartesian2Array = []
  vals.forEach((item) => {
    cartesian2Array.push(new Cesium.Cartesian2(item.x, item.y))
  })
  return cartesian2Array
}

/**
 *
 * @param {Object} val
 */
export function makeQuaternion (val) {
  return val && new Cesium.Quaternion(val.x, val.y, val.z, val.w)
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
export function makePolygonHierarchy (val) {
  if (val instanceof Array && val.length >= 3) {
    return new Cesium.PolygonHierarchy(makeCartesian3Array(val))
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
export function makeNearFarScalar (val) {
  return val && new Cesium.NearFarScalar(val.near, val.nearValue, val.far, val.farValue)
}
/**
 * 普通对象 {near: number, far: number} 转 Cesium.DistanceDisplayCondition 对象。
 * @param {Object} val
 * @returns {DistanceDisplayCondition}
 */
export function makeDistanceDisplayCondition (val) {
  return val && new Cesium.DistanceDisplayCondition(val.near, val.far)
}
/**
 * 普通对象或数组 [r, g, b, a] 或字符串转 Cesium.Color 对象。
 * @param {String|Array|Object} val
 * @returns {Color}
 */
export function makeColor (val) {
  if (val instanceof Cesium.Color) {
    return val
  } else if (val instanceof Array) {
    return new Cesium.Color(val[0], val[1], val[2], val[3])
  } else if (typeof val === 'string') {
    return Cesium.Color.fromCssColorString(val)
  }
  return val
}
/**
 * 普通对象或数组 [r, g, b, a] 或字符串转 Material
 * @param {String|Array|Object} val
 */
export function makeMaterial (val) {
  if (
    val instanceof Array ||
    (typeof val === 'string' && !/(.*)\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/.test(val))
  ) {
    return makeColor(val)
  }
  // else if (val && val.hasOwnProperty('fabric')) {
  //   return new Cesium.Material({
  //     fabric: {
  //       type: 'Color',
  //       uniforms: {
  //         color: new Cesium.Color(1.0, 1.0, 0.0, 1.0)
  //       }
  //     }
  //   })
  // }
  return val
}
/**
 * 普通对象 {west: number, south: number, east: number, north: number} 转 Cesium.Rectangle 对象。
 * @param {Object} val
 * @returns {Rectangle}
 */
export function makeRectangle (val) {
  // Entiy 的 rectangle 属性不能调用这个方法
  if (val instanceof Cesium.RectangleGraphics) {
    return val
  }
  return val && Cesium.Rectangle.fromDegrees(val.west, val.south, val.east, val.north)
}
/**
 * 普通对象 {x: number, y: number, width: number, height: number} 转 Cesium.BoundingRectangle 对象。
 * @param {Object} val
 * @returns {BoundingRectangle}
 */
export function makeBoundingRectangle (val) {
  return val && new Cesium.BoundingRectangle(val.x, val.y, val.width, val.height)
}
/**
 * 普通对象 {normal: number, distance: number} 转 Cesium.Plane 对象。
 * @param {Object} val
 * @returns {Plane}
 */
export function makePlane (val) {
  // Entiy 和 PlaneGraphics 都有个 plane 属性 要区别一下
  if (val instanceof Cesium.PlaneGraphics) {
    return val
  }
  if (val) {
    Cesium.Cartesian3.normalize(makeCartesian3(val.normal), val.normal)
    return new Cesium.Plane(val.normal, val.distance)
  }
  return val
}

/**
 * 普通对象转平移、旋转、缩放变换对象。
 * @param {*} val
 */
export function makeTranslationRotationScale (val) {
  return (
    val &&
    new Cesium.TranslationRotationScale(
      makeCartesian3(val.translation),
      makeQuaternion(val.rotation),
      makeCartesian3(val.scale)
    )
  )
}

export function dirname (path) {
  if (typeof path !== 'string') path = path + ''
  if (path.length === 0) return '.'
  var code = path.charCodeAt(0)
  var hasRoot = code === 47 /* / */
  var end = -1
  var matchedSlash = true
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i)
    if (code === 47 /* / */) {
      if (!matchedSlash) {
        end = i
        break
      }
    } else {
      // We saw the first non-path separator
      matchedSlash = false
    }
  }

  if (end === -1) return hasRoot ? '/' : '.'
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/'
  }
  return path.slice(0, end)
}
