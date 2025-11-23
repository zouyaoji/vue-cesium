/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-17 23:55:24
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-23 18:51:14
 * @FilePath: \vue-cesium\packages\shared\extends\materials\VcODLineMaterialProperty.ts
 */
import { getCesiumColor, getCesiumValue } from '@vue-cesium/utils/util'
import VcBaseMaterialProperty from './VcBaseMaterialProperty'

export interface VcODLineMaterialPropertyOptions {
  color?: Cesium.Color
  bgColor?: Cesium.Color
  startTime?: number
  speed?: number
  bidirectional?: number
  globalAlpha?: number
}

export default class VcODLineMaterialProperty extends VcBaseMaterialProperty {
  color: Cesium.Color
  startTime: number
  speed: number
  percent: number
  alpha: number
  globalAlpha: number
  constructor(options: VcODLineMaterialPropertyOptions = {}) {
    super(options)
    const { Color } = Cesium

    this.color = options.color ?? new Color(1, 0, 0, 0.7)
    this.color = options.bgColor ?? new Color(1, 0, 0, 0.7)
    this.startTime = options.startTime ?? 0
    this.speed = options.speed ?? 2
    this.globalAlpha = options.globalAlpha ?? 1
  }

  getType(value) {
    return 'VcODLine'
  }

  getValue(time: Cesium.JulianDate, result?): VcODLineMaterialProperty {
    const { Color, defined } = Cesium
    !defined(result) && (result = {})
    result.color = getCesiumColor(this.color, new Color(1, 0, 0, 1), time)
    result.speed = getCesiumValue(this.speed, Number, time)
    result.globalAlpha = this.globalAlpha

    return result as VcODLineMaterialProperty
  }

  equals(other: VcODLineMaterialProperty) {
    const reData
      = this === other
        || (other instanceof VcODLineMaterialProperty
          && Cesium.Property['equals'](this.color, other.color)
          && this.speed === other.speed
          && this.globalAlpha === other.globalAlpha)
    return reData
  }
}
