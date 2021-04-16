import { PropType } from 'vue'

export default {
  gridFileUrl: {
    type: String,
    default: 'https://zouyaoji.top/vue-cesium/SampleData/WW15MGH.DAC'
  },
  position: {
    type: String,
    default: 'bottom-right',
    validator: (v: string) => ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top', 'right', 'bottom', 'left'].includes(v)
  },
  offset: {
    type: Array,
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
  tooltip: {
    type: [Boolean, Object],
    default: () => ({
      delay: 1000,
      anchor: 'bottom middle',
      offset: [0, 20],
      tip: void 0
    })
  }
}
