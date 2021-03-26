import { positionProps } from '@vue-cesium/composables/private/use-position'
import { t } from '@vue-cesium/locale'

export default {
  geolocation: {
    type: Object,
    default: () => ({
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  },
  /**
   *  refer https://developer.amap.com/api/jsapi-v2/documentation#geolocation
   *  {
   *    key: '',
   *    version: '2.0',
   *    options: {
   *      timeout: 5000,
   *      convert: false,
   *      noGeoLocation: 3,
   *      needAddress: true
   *      extensions: 'all'
   *    },
   *    transformToWGS84: true
   *  }
   */
  amap: Object,
  id: {
    type: String,
    default: t('vc.navigation.myLocation.centreMap')
  },
  pointColor: {
    type: [Array, Object, String],
    default: '#08ABD5'
  },
  pixelSize: {
    type: Number,
    default: 25 / 2
  },
  outlineWidth: {
    type: Number,
    default: 3
  },
  outlineColor: {
    type: [Array, Object, String],
    default: '#ffffff'
  },
  level: {
    type: Number,
    default: 6
  },
  duration: {
    type: Number,
    default: 3
  },
  factor: {
    type: Number,
    default: 0.01
  },
  customAPI: Function,
  description: Function,
  ...positionProps,
  name: {
    type: String,
    default: 'vc-icons-geolocation'
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
  },
  loadingType: {
    type: String,
    default: 'puff'
  }
}
