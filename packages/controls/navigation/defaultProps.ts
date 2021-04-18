import { positionProps } from '@vue-cesium/composables/private/use-position'
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import {  PropType } from 'vue'
import { defaultProps as compassDefaultProps }  from '../compass/defaultProps'
import { defaultProps as zoomDefaultProps } from '../zoom-control/defaultProps'
import printDefaultProps from '../print/defaultProps'
import locationDefaultProps from '../my-location/defaultProps'
import statusBarDefaultProps from '../status-bar/defaultProps'
import distancelegendDefaultProps from '../distance-legend/defaultProps'

const defaultProps = {
  ...positionProps,
  compassOpts: { // compassOptions
    type: [Object, Boolean] as PropType<boolean>,
    default: () => getDefaultOptionByProps(compassDefaultProps, ['position', 'offset'])
  },
  zoomOpts: {
    type: [Object, Boolean] as PropType<boolean>,
    default: () => getDefaultOptionByProps(zoomDefaultProps, ['position', 'offset'])
  },
  printOpts: {
    type: [Object, Boolean] as PropType<boolean>,
    default: () => getDefaultOptionByProps(printDefaultProps, ['position', 'offset'])
  },
  locationOpts: {
    type: [Object, Boolean] as PropType<boolean>,
    default: () => getDefaultOptionByProps(locationDefaultProps, ['position', 'offset'])
  },
  otherOpts: { // otherControlOptions
    type: [Object, Boolean] as PropType<boolean>,
    default: () => ({
      position: 'bottom-right',
      offset: [2, 3],
      statusBarOpts: getDefaultOptionByProps(statusBarDefaultProps, ['position', 'offset']),
      distancelegendOpts: getDefaultOptionByProps(distancelegendDefaultProps, ['position', 'offset'])
    })
  }
}
const defaultOptions = getDefaultOptionByProps(defaultProps)
export { defaultProps, defaultOptions }
