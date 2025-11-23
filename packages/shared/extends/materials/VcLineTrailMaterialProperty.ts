/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-17 23:55:24
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-02-29 00:43:57
 * @FilePath: \vue-cesium\packages\shared\extends\materials\VcLineTrailMaterialProperty.ts
 */
import { getCesiumColor, getCesiumValue } from '@vue-cesium/utils/util'
import VcBaseMaterialProperty from './VcBaseMaterialProperty'

export default class VcLineTrailMaterialProperty extends VcBaseMaterialProperty {
  image: string
  color: Cesium.Color
  axisY: boolean
  time: number
  duration: number
  repeat: Cesium.Cartesian2
  loop: boolean
  lastTime: number
  _time: number

  constructor(options: any = {}) {
    super(options)
    const { Color, Cartesian2, defined } = Cesium
    this.image = options.image ?? options.url
    this.color = options.color ?? new Color(1, 0, 0, 1)
    this.axisY = options.axisY ?? false
    this.time = options.time ?? 0
    this.repeat = options.repeat ?? new Cartesian2(1, 1)
    this.loop = options.loop ?? true
    this.duration = options.duration ?? 3
    this._time = (new Date()).getTime()
  }

  getType(value) {
    return 'VcLineTrail'
  }

  getValue(time: Cesium.JulianDate, result?): VcLineTrailMaterialProperty {
    const { Color, Cartesian2, defined } = Cesium
    !defined(result) && (result = {})

    if (this.lastTime >= 0.99 && !this.loop) {
      return result
    }

    result.image = this.image
    result.color = getCesiumColor(this.color, new Color(1, 1, 1, 0), time)
    result.repeat = getCesiumValue(this.repeat, Cartesian2, time)
    result.axisY = this.axisY
    result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration
    this.lastTime = result.time
    return result as VcLineTrailMaterialProperty
  }

  equals(other: VcLineTrailMaterialProperty) {
    const reData
      = this === other
        || (other instanceof VcLineTrailMaterialProperty
          && Cesium.Property['equals'](this.color, other.color)
          && Cesium.Property['equals'](this.repeat, other.repeat)
          && this.image === other.image
          && this.axisY === other.axisY
          && this.duration === other.duration)
    return reData
  }
}
