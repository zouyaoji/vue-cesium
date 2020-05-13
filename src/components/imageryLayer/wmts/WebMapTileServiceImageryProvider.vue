<script>
import {
  url,
  clock,
  times,
  tileWidth,
  tileHeight,
  tilingScheme,
  rectangle,
  minimumLevel,
  maximumLevel,
  ellipsoid,
  credit,
  subdomains,
  token,
  dimensions
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-wmts',
  mixins: [
    url,
    clock,
    times,
    tileWidth,
    tileHeight,
    tilingScheme,
    rectangle,
    minimumLevel,
    maximumLevel,
    ellipsoid,
    credit,
    subdomains,
    dimensions,
    token,
    mixinImageryProvider
  ],
  props: {
    format: {
      type: String,
      default: 'image/jpeg'
    },
    layer: String,
    wmtsStyle: String,
    tileMatrixSetID: String,
    tileMatrixLabels: Array
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      options.url = typeof options.token !== 'undefined' ? options.url + '&tk=' + options.token : options.url
      return new Cesium.WebMapTileServiceImageryProvider(options)
    }
  }
}
</script>
