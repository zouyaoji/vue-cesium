import { positionProps } from '@vue-cesium/composables/private/use-position'
import { VcBtnOptions } from '@vue-cesium/utils/types'
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import { PropType } from 'vue'

const defaultProps = {
  enableResetButton: {
    type: Boolean,
    default: true
  },
  zoomAmount: {
    type: Number,
    default: 2
  },
  duration: {
    type: Number,
    default: 0.5
  },
  durationReset: {
    type: Number
  },
  defaultResetView: {
    type: Object,
    default: () => {
      return {
        position: {
          lng: 105,
          lat: 30,
          height: 19059568.5
        }
      }
    }
  },
  overrideViewerCamera: {
    type: Boolean,
    default: false
  },
  ...positionProps,
  background: {
    type: String,
    default: '#3f4854'
  },
  border: {
    type: String,
    default: 'solid 1px rgba(255, 255, 255, 0.2)'
  },
  borderRadius: {
    type: String,
    default: '100px'
  },
  direction: {
    type: String,
    default: 'vertical',
    validator: (v: string) => ['vertical', 'horizontal'].includes(v)
  },
  zoomInOptions: {
    type: Object as PropType<VcBtnOptions>,
    default: () => ({
      name: 'vc-icons-zoom-in',
      size: '24px',
      color: '#fff',
      background: 'transparent',
      round: true,
      flat: true,
      label: undefined,
      stack: false,
      tooltip: {
        delay: 500,
        anchor: 'bottom middle',
        offset: [0, 20]
      }
    })
  },
  zoomOutOptions: {
    type: Object as PropType<VcBtnOptions>,
    default: () => ({
      name: 'vc-icons-zoom-out',
      size: '24px',
      color: '#fff',
      background: 'transparent',
      round: true,
      flat: true,
      label: undefined,
      stack: false,
      tooltip: {
        delay: 500,
        anchor: 'bottom middle',
        offset: [0, 20]
      }
    })
  },
  zoomResetOptions: {
    type: Object as PropType<VcBtnOptions>,
    default: () => ({
      name: 'vc-icons-reset',
      size: '24px',
      color: '#fff',
      background: 'transparent',
      round: true,
      flat: true,
      label: undefined,
      stack: false,
      tooltip: {
        delay: 500,
        anchor: 'bottom middle',
        offset: [0, 20]
      }
    })
  }
}

const defaultOptions = getDefaultOptionByProps(defaultProps)

export {
  defaultProps, defaultOptions
}
