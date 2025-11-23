/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-17 23:55:24
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-23 18:40:32
 * @FilePath: \vue-cesium\packages\shared\extends\materials\VcLineTrailColorMaterialProperty.ts
 */
import VcBaseMaterialProperty from './VcBaseMaterialProperty'

export interface VcLineTrailMaterialPropertyOptions {
  color?: Cesium.Color
  bgColor?: Cesium.Color
  speed?: number
  globalAlpha?: number
}

export default class VcLineTrailMaterialProperty extends VcBaseMaterialProperty {
  color?: Cesium.Color
  bgColor?: Cesium.Color
  speed?: number
  globalAlpha?: number

  constructor(options: VcLineTrailMaterialPropertyOptions = {}) {
    super(options)

    const { Color } = Cesium

    this.color = options.color ?? new Color(1, 0, 0, 0.7)
    this.bgColor = options.bgColor ?? new Color(0, 0, 0, 0)
    this.speed = options.speed ?? 5
    this.globalAlpha = options.globalAlpha ?? 1
  }

  getType(value) {
    return 'VcLineTrailColor'
  }

  getValue(time: Cesium.JulianDate, result?): VcLineTrailMaterialProperty {
    const { Color, Cartesian2, defined } = Cesium
    !defined(result) && (result = {})

    result.color = this.color
    result.bgColor = this.bgColor
    result.speed = this.speed
    result.globalAlpha = this.globalAlpha
    return result as VcLineTrailMaterialProperty
  }

  equals(other: VcLineTrailMaterialProperty) {
    const reData
      = this === other
        || (other instanceof VcLineTrailMaterialProperty
          && Cesium.Property['equals'](this.color, other.color)
          && Cesium.Property['equals'](this.bgColor, other.bgColor)
          && this.speed === other.speed
          && this.globalAlpha === other.globalAlpha)
    return reData
  }
}
