export const checkType = val => Object.prototype.toString.call(val).slice(8, -1)

export const toKebabCase = str => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).replace(/^-/, '')

export const getDocumentByClassName = (htmlCollection, className) => {
  let temp
  let BreakException = {}
  try {
    Array.prototype.slice.call(htmlCollection).forEach(element => {
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

export function isFunction (value) {
  return typeof value === 'function'
}

export function lnglatValidator (longitude, latitude) {
  // 经度，整数部分为0-180小数部分为0到6位
  let longreg = /^(-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,15})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,15}|180)$/
  if (!longreg.test(longitude)) {
    return false
  } // 纬度,整数部分为0-90小数部分为0到6位
  let latreg = /^(-|\+)?([0-8]?\d{1}\.\d{0,15}|90\.0{0,15}|[0-8]?\d{1}|90)$/
  if (!latreg.test(latitude)) {
    return false
  }
  return true
}
export function makeCartesian2 (val) {
  return val && new Cesium.Cartesian2(val.x, val.y)
}

export function makeCartesian3 (val) {
  if (typeof Cesium === 'undefined') {
    return val
  } else if (val && val.hasOwnProperty('x')) {
    return new Cesium.Cartesian3(val.x, val.y, val.z)
  } else if (val && val.hasOwnProperty('lng')) {
    return Cesium.Cartesian3.fromDegrees(val.lng, val.lat, val.height)
  }
  return val
}

export function makeCartesian3Array (vals) {
  if (vals && vals instanceof Array && vals[0] instanceof Cesium.Cartesian3) {
    return vals
  }
  let coordinates = []
  vals.forEach(item => {
    coordinates.push(item.lng)
    coordinates.push(item.lat)
    coordinates.push(item.height)
  })
  return Cesium.Cartesian3.fromDegreesArrayHeights(coordinates)
}

export function makeCartesian2Array (vals) {
  let cartesian2Array = []
  vals.forEach(item => {
    cartesian2Array.push(new Cesium.Cartesian2(item.x, item.y))
  })
  return cartesian2Array
}

export function makeQuaternion (val) {
  return val && new Cesium.Quaternion(val.x, val.y, val.z, val.w)
}

function parsePolygonHierarchyJson (val) {
  val.forEach(element => {
    element.positions = makeCartesian3Array(element.positions)
    if (element.holes) {
      parsePolygonHierarchyJson(element.holes)
    }
  })
}

export function makePolygonHierarchy (val) {
  if (typeof Cesium === 'undefined') {
    return val
  } else if (val instanceof Array) {
    return new Cesium.PolygonHierarchy(makeCartesian3Array(val))
  }
  val.positions = makeCartesian3Array(val.positions)
  parsePolygonHierarchyJson(val.holes)
  return val
}

export function makeNearFarScalar (val) {
  return val && new Cesium.NearFarScalar(val.near, val.nearValue, val.far, val.farValue)
}

export function makeDistanceDisplayCondition (val) {
  return val && new Cesium.DistanceDisplayCondition(val.near, val.far)
}

export function makeColor (val) {
  if (typeof Cesium === 'undefined') {
    return val
  } else if (val instanceof Cesium.Color) {
    return val
  } else if (val instanceof Array) {
    return new Cesium.Color(val[0], val[1], val[2], val[3])
  } else if (typeof val === 'string') {
    return Cesium.Color.fromCssColorString(val)
  }
  return val
}

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

export function makeRectangle (val) {
  return typeof Cesium === 'undefined'
    ? val
    : val && Cesium.Rectangle.fromDegrees(val.west, val.south, val.east, val.north)
}

export function makeBoundingRectangle (val) {
  return val && new Cesium.BoundingRectangle(val.x, val.y, val.width, val.height)
}

export function makePlane (val) {
  Cesium.Cartesian3.normalize(makeCartesian3(val.normal), val.normal)
  return new Cesium.Plane(val.normal, val.distance)
}

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

export function makePointOptions (val) {
  const {
    color,
    disableDepthTestDistance,
    distanceDisplayCondition,
    id,
    outlineColor,
    outlineWidth,
    pixelSize,
    position,
    scaleByDistance,
    show,
    translucencyByDistance
  } = val

  let point = {
    color: makeColor(color),
    disableDepthTestDistance,
    distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
    id,
    outlineColor: makeColor(outlineColor),
    outlineWidth,
    pixelSize,
    position: makeCartesian3(position),
    scaleByDistance: makeNearFarScalar(scaleByDistance),
    show,
    translucencyByDistance: makeNearFarScalar(translucencyByDistance)
  }

  return point
}

export function makePolylineOptions (val) {
  const { show, width, loop, material, positions, id, distanceDisplayCondition } = val
  let polyline = {
    show,
    width,
    loop,
    material,
    positions: makeCartesian3Array(positions),
    id,
    distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition)
  }
  return polyline
}

export function makeLabelOptions (val) {
  const {
    backgroundColor,
    backgroundPadding,
    disableDepthTestDistance,
    distanceDisplayCondition,
    eyeOffset,
    fillColor,
    font,
    heightReference,
    horizontalOrigin,
    id,
    outlineColor,
    outlineWidth,
    pixelOffset,
    pixelOffsetScaleByDistance,
    position,
    scale,
    scaleByDistance,
    show,
    showBackground,
    labelStyle,
    text,
    totalScale,
    translucencyByDistance,
    verticalOrigin
  } = val
  let label = {
    backgroundColor: makeColor(backgroundColor),
    backgroundPadding: makeCartesian2(backgroundPadding),
    disableDepthTestDistance,
    distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
    eyeOffset: makeCartesian3(eyeOffset),
    fillColor: makeColor(fillColor),
    font,
    heightReference,
    horizontalOrigin,
    id,
    outlineColor: makeColor(outlineColor),
    outlineWidth,
    pixelOffset: makeCartesian2(pixelOffset),
    pixelOffsetScaleByDistance: makeNearFarScalar(pixelOffsetScaleByDistance),
    position: makeCartesian3(position),
    scale,
    scaleByDistance: makeNearFarScalar(scaleByDistance),
    show,
    showBackground,
    style: labelStyle,
    text,
    totalScale,
    translucencyByDistance: makeNearFarScalar(translucencyByDistance),
    verticalOrigin
  }
  return label
}

export function makeBillboardptions (val) {
  const {
    alignedAxis,
    color,
    disableDepthTestDistance,
    distanceDisplayCondition,
    eyeOffset,
    height,
    heightReference,
    horizontalOrigin,
    id,
    image,
    pixelOffset,
    pixelOffsetScaleByDistance,
    position,
    rotation,
    scale,
    scaleByDistance,
    show,
    sizeInMeters,
    translucencyByDistance,
    verticalOrigin,
    width
  } = val
  let billboard = {
    alignedAxis: makeCartesian3(alignedAxis),
    color: makeColor(color),
    disableDepthTestDistance,
    distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
    eyeOffset: makeCartesian3(eyeOffset),
    height,
    heightReference,
    horizontalOrigin,
    id,
    image,
    pixelOffset: makeCartesian2(pixelOffset),
    pixelOffsetScaleByDistance: makeNearFarScalar(pixelOffsetScaleByDistance),
    position: makeCartesian3(position),
    rotation,
    scale,
    scaleByDistance: makeNearFarScalar(scaleByDistance),
    show,
    sizeInMeters,
    translucencyByDistance: makeNearFarScalar(translucencyByDistance),
    verticalOrigin,
    width
  }
  return billboard
}
