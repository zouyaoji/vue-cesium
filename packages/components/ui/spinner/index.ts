/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-03-05 11:07:06
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\ui\spinner\index.ts
 */
import SpinnerBall from './spinner-ball'
import SpinnerBars from './spinner-bars'
import SpinnerDots from './spinner-dots'
import SpinnerGears from './spinner-gears'
import SpinnerHourglass from './spinner-hourglass'
import SpinnerIos from './spinner-ios'
import SpinnerOrbit from './spinner-orbit'
import SpinnerOval from './spinner-oval'
import SpinnerPuff from './spinner-puff'
import SpinnerRings from './spinner-rings'
import SpinnerTail from './spinner-tail'
import Spinner from './spinner'
import { ComponentPublicInstance } from 'vue'

export {
  SpinnerBall,
  SpinnerBars,
  SpinnerDots,
  SpinnerGears,
  SpinnerHourglass,
  SpinnerIos,
  SpinnerOrbit,
  SpinnerOval,
  SpinnerPuff,
  SpinnerRings,
  SpinnerTail,
  Spinner
}

export interface VcSpinnerProps {
  /**
   * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
   */
  size?: string | undefined
  /**
   * Color name for component from the Color Palette
   */
  color?: string | undefined
  /**
   * Override value to use for stroke-width
   * Default value: 5
   */
  thickness?: number | undefined
}

export type VcSpinnerRef = ComponentPublicInstance<VcSpinnerProps>
