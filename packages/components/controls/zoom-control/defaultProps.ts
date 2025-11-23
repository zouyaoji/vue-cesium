import type { VcBtnTooltipProps, VcCamera } from '@vue-cesium/utils/types'
import type { PropType } from 'vue'
import { positionProps } from '@vue-cesium/composables/private/use-position'
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'

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
    type: Object as PropType<VcCamera>,
    default: () => {
      return {
        position: {
          lng: 105,
          lat: 30,
          height: 19059568.5
        }
      } as VcCamera
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
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'vertical',
    validator: (v: string) => ['vertical', 'horizontal'].includes(v)
  },
  zoomInOptions: {
    type: Object as PropType<VcBtnTooltipProps>,
    default: () =>
      ({
        icon: 'vc-icons-zoom-in',
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
          offset: [0, 20],
          tip: void 0
        }
      } as VcBtnTooltipProps)
  },
  zoomOutOptions: {
    type: Object as PropType<VcBtnTooltipProps>,
    default: () =>
      ({
        icon: 'vc-icons-zoom-out',
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
          offset: [0, 20],
          tip: void 0
        }
      } as VcBtnTooltipProps)
  },
  zoomResetOptions: {
    type: Object as PropType<VcBtnTooltipProps>,
    default: () =>
      ({
        icon: 'vc-icons-reset',
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
          offset: [0, 20],
          tip: void 0
        }
      } as VcBtnTooltipProps)
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

const defaultOptions = getDefaultOptionByProps<typeof defaultProps>(defaultProps)

export { defaultOptions, defaultProps }
