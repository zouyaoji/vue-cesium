import { positionProps } from '@vue-cesium/composables/private/use-position'
import type { VcColor } from '@vue-cesium/utils/types'
import type { PropType } from 'vue'
import { VcTooltipProps } from '../../ui/tooltip'

export default {
  geolocation: {
    type: Object as PropType<PositionOptions>,
    default: () =>
      ({
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      } as PositionOptions)
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
  amap: Object as PropType<{
    key: string
    version: string
    options: {
      timeout?: number
      convert?: false
      noGeoLocation?: 0 | 1 | 2 | 3
      needAddress?: boolean
      extensions?: 'all' | 'base'
    }
    transformToWGS84?: boolean
  }>,
  id: {
    type: String,
    default: 'My Location'
  },
  pointColor: {
    type: [Array, Object, String] as PropType<VcColor>,
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
    type: [Array, Object, String] as PropType<VcColor>,
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
  maximumHeight: Number,
  hpr: {
    type: Array as PropType<unknown> as PropType<[number, number, number]>,
    default: () => [0, 0, 3000]
  },
  customAPI: Function as PropType<(errorCallback) => { lng: number; lat: number }>,
  customApi: Function as PropType<(errorCallback) => { lng: number; lat: number }>,
  description: Function as PropType<(position, detail) => string>,
  ...positionProps,
  icon: {
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
    type: [Boolean, Object] as PropType<false | VcTooltipProps>,
    default: () =>
      ({
        delay: 500,
        anchor: 'bottom middle',
        offset: [0, 20],
        tip: void 0
      } as VcTooltipProps | false)
  },
  loadingType: {
    type: String as PropType<'bars' | 'ios' | 'orbit' | 'oval' | 'puff' | 'tail'>,
    default: 'puff'
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
