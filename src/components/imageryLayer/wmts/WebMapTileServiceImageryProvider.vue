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
  token
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
    tileMatrixLabels: Array,
    dimensions: Object
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
