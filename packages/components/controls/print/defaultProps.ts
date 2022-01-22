/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:13
 * @LastEditTime: 2022-01-22 09:31:31
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\controls\print\defaultProps.ts
 */
import { positionProps } from '@vue-cesium/composables/private/use-position'
import type { PropType } from 'vue'
import { VcTooltipProps } from '../../ui'

export default {
  showCredit: {
    type: Boolean,
    default: true
  },
  printAutomatically: {
    type: Boolean,
    default: false
  },
  showPrintView: {
    type: Boolean,
    default: true
  },
  downloadAutomatically: {
    type: Boolean,
    default: false
  },
  ...positionProps,
  icon: {
    type: String,
    default: 'vc-icons-capture'
  },
  size: {
    type: String,
    default: '24px'
  },
  color: {
    type: String,
    default: '#3f4854'
  },
  background: {
    type: String,
    default: '#fff'
  },
  round: {
    type: Boolean,
    default: true
  },
  flat: {
    type: Boolean,
    default: false
  },
  label: String,
  stack: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: [Boolean, Object] as PropType<false | VcTooltipProps>,
    default: () =>
      ({
        delay: 500,
        anchor: 'bottom middle',
        offset: [0, 20],
        tip: void 0
      } as VcTooltipProps | false)
  }
}
