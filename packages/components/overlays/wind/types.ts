/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-03-09 13:28:14
 * @LastEditTime: 2022-03-09 16:09:08
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\overlays\wind\types.ts
 */

import type { VcCartesian2 } from '@vue-cesium/utils/types'

export interface ParticleSystemOptions {
  maxParticles?: number
  particleHeight?: number
  fadeOpacity?: number
  dropRate?: number
  dropRateBump?: number
  speedFactor?: number
  lineWidth?: number
}

export interface ViewerParameters {
  latRange: VcCartesian2
  lonRange: VcCartesian2
  pixelSize?: number
}

export interface VcWindData {
  U: {
    array: Array<Float32Array>
    min: number
    max: number
  }
  V: {
    array: Array<Float32Array>
    min: number
    max: number
  }
  dimensions: {
    lon: number
    lat: number
    lev: number
  }
  lat: {
    array: Array<Float32Array>
    min: number
    max: number
    delta?: number
  }
  lev: {
    array: Array<Float32Array>
    min: number
    max: number
  }
  lon: {
    array: Array<Float32Array>
    min: number
    max: number
    delta?: number
  }
}
