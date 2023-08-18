/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-17 23:55:24
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2023-08-18 20:42:09
 * @FilePath: \vue-cesium\packages\shared\extends\materials\VcLineFlowMaterialProperty.ts
 */
import { getCesiumColor, getCesiumValue } from '@vue-cesium/utils/util'
import VcBaseMaterialProperty from './VcBaseMaterialProperty'

export default class VcLineFlowMaterialProperty extends VcBaseMaterialProperty {
  image: string
  color: Cesium.Color
  axisY: boolean
  mixt: boolean
  speed: number
  duration: number
  repeat: Cesium.Cartesian2
  image2: string
  color2: Cesium.Color
  hasImage2: boolean
  globalAlpha: boolean
  _time: number
  constructor(options: any = {}) {
    super(options)
    const { Color, Cartesian2, defined } = Cesium
    this.image = options.image ?? options.url
    this.color = options.color ?? new Color(1, 1, 1, 0)
    this.axisY = options.axisY ?? false
    this.mixt = options.mixt ?? false
    this.speed = options.speed ?? 10
    this.duration = options.duration
    this.repeat = options.repeat ?? new Cartesian2(1, 1)
    this.image2 = options.image2 ?? options.bgUrl
    this.color2 = options.color2 ?? options.bgColor ?? new Color(1, 1, 1, 0)
    this.hasImage2 = defined(this.image2)
    this.globalAlpha = options.globalAlpha ?? true
  }

  getType(value) {
    return 'VcLineFlow'
  }

  getValue(time: Cesium.JulianDate, result?): VcLineFlowMaterialProperty {
    const { Color, Cartesian2, defined } = Cesium
    !defined(result) && (result = {})
    result.image = this.image
    result.color = getCesiumColor(this.color, new Color(1, 1, 1, 0), time)
    result.repeat = getCesiumValue(this.repeat, Cartesian2, time)
    result.axisY = this.axisY
    result.mixt = this.mixt
    result.speed = getCesiumValue(this.speed, Number, time)
    if (this.duration) {
      if (this._time === undefined) {
        this._time = new Date().getTime()
        result.time = (new Date().getTime() - this._time) / (this.duration * 1000)
      }
    } else {
      result.time = -1
    }

    result.hasImage2 = this.hasImage2
    result.image2 = this.image2
    result.color2 = getCesiumColor(this.color2, new Color(1, 1, 1, 0), time)
    result.globalAlpha = this.globalAlpha

    return result as VcLineFlowMaterialProperty
  }

  equals(other: VcLineFlowMaterialProperty) {
    const reData =
      this === other ||
      (other instanceof VcLineFlowMaterialProperty &&
        Cesium.Property['equals'](this.color, other.color) &&
        Cesium.Property['equals'](this.repeat, other.repeat) &&
        this.image === other.image &&
        this.axisY === other.axisY &&
        this.speed === other.speed &&
        this.hasImage2 === other.hasImage2 &&
        this.image2 === other.image2 &&
        this.image2 === other.image2 &&
        Cesium.Property['equals'](this.color2, other.color2))
    return reData
  }
}
