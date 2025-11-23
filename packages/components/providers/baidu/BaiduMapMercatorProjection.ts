import Pixel from './Pixel'
import Point from './Point'

// static EARTHRADIUS = 6370996.81
const EARTHRADIUS = 6378137
const MCBAND = [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0]
const LLBAND = [75, 60, 45, 30, 15, 0]
const MC2LL = [
  [
    1.410526172116255e-8,
    0.00000898305509648872,
    -1.9939833816331,
    200.9824383106796,
    -187.2403703815547,
    91.6087516669843,
    -23.38765649603339,
    2.57121317296198,
    -0.03801003308653,
    17337981.2
  ],
  [
    -7.435856389565537e-9,
    0.000008983055097726239,
    -0.78625201886289,
    96.32687599759846,
    -1.85204757529826,
    -59.36935905485877,
    47.40033549296737,
    -16.50741931063887,
    2.28786674699375,
    10260144.86
  ],
  [
    -3.030883460898826e-8,
    0.00000898305509983578,
    0.30071316287616,
    59.74293618442277,
    7.357984074871,
    -25.38371002664745,
    13.45380521110908,
    -3.29883767235584,
    0.32710905363475,
    6856817.37
  ],
  [
    -1.981981304930552e-8,
    0.000008983055099779535,
    0.03278182852591,
    40.31678527705744,
    0.65659298677277,
    -4.44255534477492,
    0.85341911805263,
    0.12923347998204,
    -0.04625736007561,
    4482777.06
  ],
  [
    3.09191371068437e-9,
    0.000008983055096812155,
    0.00006995724062,
    23.10934304144901,
    -0.00023663490511,
    -0.6321817810242,
    -0.00663494467273,
    0.03430082397953,
    -0.00466043876332,
    2555164.4
  ],
  [
    2.890871144776878e-9,
    0.000008983055095805407,
    -3.068298e-8,
    7.47137025468032,
    -0.00000353937994,
    -0.02145144861037,
    -0.00001234426596,
    0.00010322952773,
    -0.00000323890364,
    826088.5
  ]
]

const LL2MC = [
  [
    -0.0015702102444,
    111320.7020616939,
    1704480524535203,
    -10338987376042340,
    26112667856603880,
    -35149669176653700,
    26595700718403920,
    -10725012454188240,
    1800819912950474,
    82.5
  ],
  [
    0.0008277824516172526,
    111320.7020463578,
    647795574.6671607,
    -4082003173.641316,
    10774905663.51142,
    -15171875531.51559,
    12053065338.62167,
    -5124939663.577472,
    913311935.9512032,
    67.5
  ],
  [
    0.00337398766765,
    111320.7020202162,
    4481351.045890365,
    -23393751.19931662,
    79682215.47186455,
    -115964993.2797253,
    97236711.15602145,
    -43661946.33752821,
    8477230.501135234,
    52.5
  ],
  [
    0.00220636496208,
    111320.7020209128,
    51751.86112841131,
    3796837.749470245,
    992013.7397791013,
    -1221952.21711287,
    1340652.697009075,
    -620943.6990984312,
    144416.9293806241,
    37.5
  ],
  [
    -0.0003441963504368392,
    111320.7020576856,
    278.2353980772752,
    2485758.690035394,
    6070.750963243378,
    54821.18345352118,
    9540.606633304236,
    -2710.55326746645,
    1405.483844121726,
    22.5
  ],
  [
    -0.0003218135878613132,
    111320.7020701615,
    0.00369383431289,
    823725.6402795718,
    0.46104986909093,
    2351.343141331292,
    1.58060784298199,
    8.77738589078284,
    0.37238884252424,
    7.45
  ]
]

/**
 * Projection used by [Baidu Map]{@link https://github.com/openlayers/openlayers/issues/3522}
 */
class BaiduMapMercatorProjection {
  // constructor () {
  //   super()
  // }

  /**
   * 根据平面直角坐标计算两点间距离;
   * @param {Point} point1 平面直角点坐标1
   * @param {Point} point2 平面直角点坐标2;
   * @return {number} 返回两点间的距离
   */
  getDistanceByMC(point1, point2) {
    if (!point1 || !point2)
      return 0
    point1 = this.inverse(point1)
    if (!point1)
      return 0
    const x1 = toRadians(point1.lng)
    const y1 = toRadians(point1.lat)
    point2 = this.inverse(point2)
    if (!point2)
      return 0
    const x2 = toRadians(point2.lng)
    const y2 = toRadians(point2.lat)
    return getDistance(x1, x2, y1, y2)
  }

  /**
   * 根据经纬度坐标计算两点间距离;
   * @param {Point} point1 经纬度点坐标1
   * @param {Point} point2 经纬度点坐标2;
   * @return {number} 返回两点间的距离
   */
  getDistanceByLL(point1, point2) {
    if (!point1 || !point2)
      return 0
    point1.lng = getLoop(point1.lng, -180, 180)
    point1.lat = getRange(point1.lat, -74, 74)
    point2.lng = getLoop(point2.lng, -180, 180)
    point2.lat = getRange(point2.lat, -74, 74)
    const x1 = toRadians(point1.lng)
    const y1 = toRadians(point1.lat)
    const x2 = toRadians(point2.lng)
    const y2 = toRadians(point2.lat)
    return getDistance(x1, x2, y1, y2)
  }

  /**
   * 平面直角坐标转换成经纬度坐标;
   * @param {Point} point 平面直角坐标
   * @return {Point} 返回经纬度坐标
   */
  inverse(point) {
    let factor
    const temp = new Point(Math.abs(point.lng), Math.abs(point.lat))
    for (let i = 0; i < MCBAND.length; i++) {
      if (temp.lat >= MCBAND[i]) {
        factor = MC2LL[i]
        break
      }
    }
    const lnglat = convertor(point, factor)
    return new Point(lnglat?.lng, lnglat?.lat)
  }

  /**
   * 经纬度坐标转换成平面直角坐标;
   * @param {Point} point 经纬度坐标
   * @return {Point} 返回平面直角坐标
   */
  forward(point) {
    let factor
    point.lng = getLoop(point.lng, -180, 180)
    point.lat = getRange(point.lat, -74, 74)
    const temp = new Point(point.lng, point.lat)
    for (let i = 0; i < LLBAND.length; i++) {
      if (temp.lat >= LLBAND[i]) {
        factor = LL2MC[i]
        break
      }
    }
    if (!factor) {
      for (let i = LLBAND.length - 1; i >= 0; i--) {
        if (temp.lat <= -LLBAND[i]) {
          factor = LL2MC[i]
          break
        }
      }
    }
    const mc = convertor(point, factor)
    return new Point(mc?.lng, mc?.lat)
  }

  /**
   * 经纬度变换至墨卡托坐标
   * @param Point 经纬度
   * @return Point 墨卡托
   */
  lngLatToMercator(point, curCity?) {
    return this.forward(point)
  }

  /**
   * 球面到平面坐标
   * @param Point 球面坐标
   * @return Pixel 平面坐标
   */
  lngLatToPoint(point: Point): Pixel {
    const mercator = this.forward(point)
    return new Pixel(mercator.lng, mercator.lat)
  }

  /**
   * 墨卡托变换至经纬度
   * @param Point 墨卡托
   * @returns Point 经纬度
   */
  mercatorToLngLat(point, curCity?) {
    return this.inverse(point)
  }

  /**
   * 平面到球面坐标
   * @param Pixel 平面坐标
   * @returns Point 球面坐标
   */
  pointToLngLat(point) {
    const mercator = new Point(point.x, point.y)
    return this.inverse(mercator)
  }

  /**
   * 地理坐标转换至像素坐标
   * @param Point 地理坐标
   * @param Number 级别
   * @param Point 地图中心点，注意为了保证没有误差，这里需要传递墨卡托坐标
   * @param Size 地图容器大小
   * @return Pixel 像素坐标
   */
  pointToPixel(point, zoom, mapCenter, mapSize, curCity) {
    if (!point) {
      return
    }
    point = this.lngLatToMercator(point, curCity)
    mapCenter = this.lngLatToMercator(mapCenter)
    const zoomUnits = this.getZoomUnits(zoom)
    const x = Math.round((point.lng - mapCenter.lng) / zoomUnits + mapSize.width / 2)
    const y = Math.round((mapCenter.lat - point.lat) / zoomUnits + mapSize.height / 2)
    return new Pixel(x, y)
  }

  /**
   * 像素坐标转换至地理坐标
   * @param Pixel 像素坐标
   * @param Number 级别
   * @param Point 地图中心点，注意为了保证没有误差，这里需要传递墨卡托坐标
   * @param Size 地图容器大小
   * @return Point 地理坐标
   */
  pixelToPoint(pixel, zoom, mapCenter, mapSize, curCity) {
    if (!pixel) {
      return
    }
    const zoomUnits = this.getZoomUnits(zoom)
    const lng = mapCenter.lng + zoomUnits * (pixel.x - mapSize.width / 2)
    const lat = mapCenter.lat - zoomUnits * (pixel.y - mapSize.height / 2)
    const point = new Point(lng, lat)
    return this.mercatorToLngLat(point, curCity)
  }

  getZoomUnits(zoom) {
    return 2 ** (18 - zoom)
  }
}

function convertor(fromPoint, factor) {
  if (!fromPoint || !factor) {
    return
  }
  let x = factor[0] + factor[1] * Math.abs(fromPoint.lng)
  const temp = Math.abs(fromPoint.lat) / factor[9]
  let y
    = factor[2]
      + factor[3] * temp
      + factor[4] * temp * temp
      + factor[5] * temp * temp * temp
      + factor[6] * temp * temp * temp * temp
      + factor[7] * temp * temp * temp * temp * temp
      + factor[8] * temp * temp * temp * temp * temp * temp
  x *= fromPoint.lng < 0 ? -1 : 1
  y *= fromPoint.lat < 0 ? -1 : 1
  return new Point(x, y)
}

function getLoop(v, a, b) {
  while (v > b) {
    v -= b - a
  }
  while (v < a) {
    v += b - a
  }
  return v
}

function getRange(v, a, b) {
  if (a != null) {
    v = Math.max(v, a)
  }
  if (b != null) {
    v = Math.min(v, b)
  }
  return v
}

function getDistance(x1, x2, y1, y2) {
  return EARTHRADIUS * Math.acos(Math.sin(y1) * Math.sin(y2) + Math.cos(y1) * Math.cos(y2) * Math.cos(x2 - x1))
}

function toRadians(angdeg) {
  return (Math.PI * angdeg) / 180
}

function toDegrees(angrad) {
  return (180 * angrad) / Math.PI
}

export default BaiduMapMercatorProjection
