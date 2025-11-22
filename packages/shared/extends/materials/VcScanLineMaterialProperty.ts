/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-17 23:55:24
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-23 18:51:14
 * @FilePath: \vue-cesium\packages\shared\extends\materials\VcScanLineMaterialProperty.ts
 */
import { getCesiumColor, getCesiumValue } from '@vue-cesium/utils/util'
import VcBaseMaterialProperty from './VcBaseMaterialProperty'

export type VcScanLineMaterialPropertyOptions = {
  color?: Cesium.Color
  speed?: number
  globalAlpha?: number
}

export default class VcScanLineMaterialProperty extends VcBaseMaterialProperty {
  color: Cesium.Color
  speed: number
  globalAlpha: number
  constructor(options: VcScanLineMaterialPropertyOptions = {}) {
    super(options)
    const { Color, defaultValue } = Cesium

    this.color = defaultValue(options.color, new Color(1, 0, 0, 0.7))
    this.speed = defaultValue(options.speed, 2)
    this.globalAlpha = defaultValue(options.globalAlpha, 1)
  }

  getType(value) {
    return 'VcScanLine'
  }

  getValue(time: Cesium.JulianDate, result?): VcScanLineMaterialProperty {
    const { Color, defined } = Cesium
    !defined(result) && (result = {})
    result.color = getCesiumColor(this.color, new Color(1, 0, 0, 1), time)
    result.speed = getCesiumValue(this.speed, Number, time)
    result.globalAlpha = this.globalAlpha

    return result as VcScanLineMaterialProperty
  }

  equals(other: VcScanLineMaterialProperty) {
    const reData =
      this === other ||
      (other instanceof VcScanLineMaterialProperty &&
        Cesium.Property['equals'](this.color, other.color) &&
        this.speed === other.speed &&
        this.globalAlpha === other.globalAlpha)
    return reData
  }
}
