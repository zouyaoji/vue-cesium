import { positionProps } from '@vue-cesium/composables/private/use-position'

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
  name: {
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
    type: [Boolean, Object],
    default: () => ({
      delay: 500,
      anchor: 'bottom middle',
      offset: [0, 20]
    })
  }
}
