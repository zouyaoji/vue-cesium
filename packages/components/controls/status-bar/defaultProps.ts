/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:13
 * @LastEditTime: 2022-03-05 10:33:23
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\controls\status-bar\defaultProps.ts
 */
import { PropType } from 'vue'
import { VcTooltipProps } from '../../ui'

export default {
  gridFileUrl: {
    type: String,
    default: 'https://zouyaoji.top/vue-cesium/SampleData/WW15MGH.DAC'
  },
  proj4Projection: {
    type: String,
    default: '+proj=utm +ellps=GRS80 +units=m +no_defs'
  },
  projectionUnits: {
    type: String,
    default: 'm'
  },
  proj4longlat: {
    type: String,
    default: '+proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees +no_defs'
  },
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
  showCameraInfo: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  showMouseInfo: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  showPerformanceInfo: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  useProjection: {
    type: Boolean as PropType<boolean>,
    default: true
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
