/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:13
 * @LastEditTime: 2022-03-05 11:15:34
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\controls\distance-legend\defaultProps.ts
 */
import type { PropType } from 'vue'

export default {
  position: {
    type: String as PropType<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'>,
    default: 'bottom-right',
    validator: (v: string) => ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top', 'right', 'bottom', 'left'].includes(v)
  },
  offset: {
    type: Array as PropType<unknown> as PropType<[number, number]>,
    validator: v => v.length === 2
  },
  color: {
    type: String,
    default: '#fff'
  },
  background: {
    type: String,
    default: '#3f4854'
  },
  width: {
    type: Number,
    default: 100
  },
  barBackground: {
    type: String,
    default: '#fff'
  }
}
