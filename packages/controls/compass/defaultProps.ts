import { positionProps } from '@vue-cesium/composables/private/use-position'
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'

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
    type: Object,
    default: () => ({
      name: 'vc-icons-compass-outer',
      size: '96px',
      color: '#3f4854',
      background: 'transparent',
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [0, 20]
      }
    })
  },
  innerOptions: {
    type: Object,
    default: () => ({
      name: 'vc-icons-compass-inner',
      size: '24px',
      color: '#3f4854',
      background: '#fff',
      tooltip: {
        delay: 1000,
        anchor: 'bottom middle',
        offset: [0, 20]
      }
    })
  },
  markerOptions: {
    type: Object,
    default: () => ({
      name: 'vc-icons-compass-rotation-marker',
      size: '96px',
      color: '#1976D2'
    })
  }
}
const defaultOptions = getDefaultOptionByProps(defaultProps)
export { defaultProps, defaultOptions }
