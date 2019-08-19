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
} from '../../mixins/entity/allProps'
import imageryProviderMixin from '../../mixins/imageryProvider/imageryProviderMixin'
import { makeRectangle } from '../../util/util'
export default {
  name: 'wmts-imagery-provider',
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
    imageryProviderMixin
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
    createCesiumObject () {
      return new Cesium.WebMapTileServiceImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { url, format, layer, wmtsStyle, tileMatrixSetID, tileMatrixLabels, clock, times, dimensions, tileWidth, tileHeight,
        tilingScheme, rectangle, minimumLevel, maximumLevel, ellipsoid, credit, subdomains, token } = this
      let options = {
        url: typeof token !== 'undefined' ? url + '&tk=' + token : url,
        format,
        layer,
        style: wmtsStyle,
        tileMatrixSetID,
        tileMatrixLabels,
        clock,
        times,
        dimensions,
        tileWidth,
        tileHeight,
        tilingScheme,
        rectangle: makeRectangle(rectangle),
        minimumLevel,
        maximumLevel,
        ellipsoid,
        credit,
        subdomains
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
