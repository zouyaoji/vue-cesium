import type { ExtractPropTypes, PropType } from 'vue'
import type { VcCompassProps } from '../compass'
import type { VcDistanceLegendProps } from '../distance-legend'
import type { VcMyLocationProps } from '../my-location'
import type { VcPrintProps } from '../print'
import type { VcStatusBarProps } from '../status-bar'
import type { VcZoomControlProps } from '../zoom-control'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:13
 * @LastEditTime: 2022-08-19 22:40:04
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\controls\navigation\defaultProps.ts
 */
import { positionProps } from '@vue-cesium/composables/private/use-position'
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import { defaultProps as compassDefaultProps } from '../compass/defaultProps'
import distancelegendDefaultProps from '../distance-legend/defaultProps'
import locationDefaultProps from '../my-location/defaultProps'
import printDefaultProps from '../print/defaultProps'
import statusBarDefaultProps from '../status-bar/defaultProps'
import { defaultProps as zoomDefaultProps } from '../zoom-control/defaultProps'

export interface VcNavigationOtherOpts {
  position?: string
  offset?: Array<number>
  statusBarOpts?: VcStatusBarProps
  distancelegendOpts?: VcDistanceLegendProps
}

const defaultProps = {
  ...positionProps,
  compassOpts: {
    // compassOptions
    type: [Object, Boolean] as PropType<false | VcCompassProps>,
    default: () => getDefaultOptionByProps<VcCompassProps>(compassDefaultProps, ['position', 'offset'])
  },
  zoomOpts: {
    type: [Object, Boolean] as PropType<false | VcZoomControlProps>,
    default: () => getDefaultOptionByProps<VcZoomControlProps>(zoomDefaultProps, ['position', 'offset'])
  },
  printOpts: {
    type: [Object, Boolean] as PropType<false | VcPrintProps>,
    default: () => getDefaultOptionByProps<VcPrintProps>(printDefaultProps, ['position', 'offset'])
  },
  locationOpts: {
    type: [Object, Boolean] as PropType<false | VcMyLocationProps>,
    default: () => getDefaultOptionByProps<VcMyLocationProps>(locationDefaultProps, ['position', 'offset'])
  },
  otherOpts: {
    // otherControlOptions
    type: [Object, Boolean] as PropType<false | VcNavigationOtherOpts>,
    default: () =>
      ({
        position: 'bottom-right',
        offset: [2, 3],
        statusBarOpts: getDefaultOptionByProps(statusBarDefaultProps, ['position', 'offset']) as VcStatusBarProps,
        distancelegendOpts: getDefaultOptionByProps(distancelegendDefaultProps, ['position', 'offset']) as VcDistanceLegendProps
      } as VcNavigationOtherOpts)
  },
  customClass: {
    type: String,
    default: ''
  },
  teleportToViewer: {
    type: Boolean,
    default: true
  }
}
export type VcNavigationProps = ExtractPropTypes<typeof defaultProps>
const defaultOptions = getDefaultOptionByProps<VcNavigationProps>(defaultProps)
export { defaultOptions, defaultProps }
