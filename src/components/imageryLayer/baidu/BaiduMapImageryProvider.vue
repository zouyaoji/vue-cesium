<script>
import {
  url,
  ellipsoid,
  tileDiscardPolicy,
  credit,
  minimumLevel,
  maximumLevel
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
import BaiduMapImageryProvider from '../../../exts/imageryProvider/BaiduMapImageryProvider'
export default {
  name: 'vc-provider-imagery-baidumap',
  mixins: [url, ellipsoid, tileDiscardPolicy, credit, minimumLevel, maximumLevel, mixinImageryProvider],
  props: {
    protocol: {
      type: String,
      default: 'http'
    },
    props: {
      projectionTransforms: {
        type: Boolean | Object,
        default: () => {
          return {
            form: 'BD09',
            to: 'WGS84'
          }
        }
      }
    }
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps, setPropWatchers, unwatchFns, projectionTransforms } = this
      const options = transformProps($props)
      Cesium.BaiduMapImageryProvider = BaiduMapImageryProvider
      if (unwatchFns.length === 0) { setPropWatchers(true) }
      options.toWGS84 = projectionTransforms && projectionTransforms.from !== projectionTransforms.to && projectionTransforms.to.toUpperCase() === 'WGS84'
      return new Cesium.BaiduMapImageryProvider(options)
    }
  }
}
</script>
