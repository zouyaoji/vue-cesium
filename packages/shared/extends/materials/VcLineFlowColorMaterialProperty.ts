/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-17 23:55:24
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-23 18:51:14
 * @FilePath: \vue-cesium\packages\shared\extends\materials\VcLineFlowColorMaterialProperty.ts
 */
import { getCesiumColor, getCesiumValue } from '@vue-cesium/utils/util'
import VcBaseMaterialProperty from './VcBaseMaterialProperty'

export interface VcLineFlowColorMaterialPropertyOptions {
  color?: Cesium.Color
  startTime?: number
  speed?: number
  percent?: number
  alpha?: number
  globalAlpha?: number
}

export default class VcLineFlowColorMaterialProperty extends VcBaseMaterialProperty {
  color: Cesium.Color
  startTime: number
  speed: number
  percent: number
  alpha: number
  globalAlpha: number
  constructor(options: VcLineFlowColorMaterialPropertyOptions = {}) {
    super(options)
    const { Color } = Cesium

    this.color = options.color ?? new Color(1, 0, 0, 0.7)
    this.startTime = options.startTime ?? 0
    this.speed = options.speed ?? 2
    this.percent = options.percent ?? 0.04
    this.alpha = options.alpha ?? 0.1
    this.globalAlpha = options.globalAlpha ?? 1
  }

  getType(value) {
    return 'VcLineFlowColor'
  }

  getValue(time: Cesium.JulianDate, result?): VcLineFlowColorMaterialProperty {
    const { Color, defined } = Cesium
    !defined(result) && (result = {})
    result.color = getCesiumColor(this.color, new Color(1, 0, 0, 1), time)
    // result.speed = this.speed
    result.speed = getCesiumValue(this.speed, Number, time)
    result.percent = this.percent
    result.alpha = this.alpha
    result.startTime = this.startTime
    result.globalAlpha = this.globalAlpha

    return result as VcLineFlowColorMaterialProperty
  }

  equals(other: VcLineFlowColorMaterialProperty) {
    const reData
      = this === other
        || (other instanceof VcLineFlowColorMaterialProperty
          && Cesium.Property['equals'](this.color, other.color)
          && this.speed === other.speed
          && this.percent === other.percent
          && this.alpha === other.alpha
          && this.startTime === other.startTime
          && this.globalAlpha === other.globalAlpha)
    return reData
  }
}
