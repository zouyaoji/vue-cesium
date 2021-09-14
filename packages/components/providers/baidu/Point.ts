import { isString } from '@vue-cesium/utils/util'

class Point {
  lat: number
  lng: number
  constructor(lng, lat) {
    // 新增base64支持 - by jz
    if (isNaN(lng)) {
      // lng = decode64(lng)
      lng = isNaN(lng) ? 0 : lng
    }
    if (isString(lng)) {
      lng = parseFloat(lng)
    }
    if (isNaN(lat)) {
      // lat = decode64(lat)
      lat = isNaN(lat) ? 0 : lat
    }
    if (isString(lat)) {
      lat = parseFloat(lat)
    }
    this.lng = lng
    this.lat = lat
  }

  equals(other) {
    return other && this.lat === other.lat && this.lng === other.lng
  }

  static isInRange = function (pt) {
    return pt && pt.lng <= 180 && pt.lng >= -180 && pt.lat <= 74 && pt.lat >= -74
  }
}

export default Point
