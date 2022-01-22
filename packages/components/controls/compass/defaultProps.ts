/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:13
 * @LastEditTime: 2022-01-21 22:52:44
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\controls\compass\defaultProps.ts
 */
import { positionProps } from '@vue-cesium/composables/private/use-position'
import type { VcBtnTooltipProps } from '@vue-cesium/utils/types'
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import type { PropType } from 'vue'

const defaultProps = {
  enableCompassOuterRing: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 1.5
  },
  ...positionProps,
  outerOptions: {
    type: Object as PropType<VcBtnTooltipProps>,
    default: () =>
      ({
        icon: 'vc-icons-compass-outer',
        size: '96px',
        color: '#3f4854',
        background: 'transparent',
        tooltip: {
          delay: 1000,
          anchor: 'bottom middle',
          offset: [0, 20],
          tip: void 0
        }
      } as VcBtnTooltipProps)
  },
  innerOptions: {
    type: Object as PropType<VcBtnTooltipProps>,
    default: () =>
      ({
        icon: 'vc-icons-compass-inner',
        size: '24px',
        color: '#3f4854',
        background: '#fff',
        tooltip: {
          delay: 1000,
          anchor: 'bottom middle',
          offset: [0, 20],
          tip: void 0
        }
      } as VcBtnTooltipProps)
  },
  markerOptions: {
    type: Object as PropType<VcBtnTooltipProps>,
    default: () =>
      ({
        icon: 'vc-icons-compass-rotation-marker',
        size: '96px',
        color: '#1976D2'
      } as VcBtnTooltipProps)
  }
}
const defaultOptions = getDefaultOptionByProps<typeof defaultProps>(defaultProps)
export { defaultProps, defaultOptions }
