/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:13
 * @LastEditTime: 2022-02-15 17:45:45
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\imagery-layer\src\defaultProps.ts
 */
import { rectangle, colorToAlpha, cutoutRectangle, show } from '@vue-cesium/utils/cesium-props'
import type { AnyFunction, VcImageryProvider } from '@vue-cesium/utils/types'
import type { PropType } from 'vue'
export default {
  imageryProvider: Object as PropType<VcImageryProvider>,
  ...rectangle,
  alpha: {
    type: [Number, Function] as PropType<number | AnyFunction<any>>,
    default: 1.0
  },
  nightAlpha: {
    type: [Number, Function] as PropType<number | AnyFunction<any>>,
    default: 1.0
  },
  dayAlpha: {
    type: [Number, Function] as PropType<number | AnyFunction<any>>,
    default: 1.0
  },
  brightness: {
    type: [Number, Function] as PropType<number | AnyFunction<any>>,
    default: 1.0
  },
  contrast: {
    type: [Number, Function] as PropType<number | AnyFunction<any>>,
    default: 1.0
  },
  hue: {
    type: [Number, Function] as PropType<number | AnyFunction<any>>,
    default: 0.0
  },
  saturation: {
    type: [Number, Function] as PropType<number | AnyFunction<any>>,
    default: 1.0
  },
  gamma: {
    type: [Number, Function] as PropType<number | AnyFunction<any>>,
    default: 1.0
  },
  splitDirection: {
    type: [Number, Function] as PropType<number | AnyFunction<any>>,
    default: 0
  },
  minificationFilter: Number,
  magnificationFilter: Number,
  ...show,
  maximumAnisotropy: Number,
  minimumTerrainLevel: Number,
  maximumTerrainLevel: Number,
  ...cutoutRectangle,
  ...colorToAlpha,
  colorToAlphaThreshold: {
    type: Number,
    default: 0.004
  },
  sortOrder: Number
}
