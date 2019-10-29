<script>
import {
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight
} from '../../mixins/entity/allProps'
import imageryProviderMixin from '../../mixins/imageryProvider/imageryProviderMixin'
import { makeColor } from '../../util/util'
export default {
  name: 'vc-imagery-provider-tilecoordinates',
  mixins: [
    tilingScheme,
    ellipsoid,
    tileWidth,
    tileHeight,
    imageryProviderMixin
  ],
  props: {
    color: {
      type: Object | String | Array,
      default: 'YELLOW'
    }
  },
  methods: {
    createCesiumObject () {
      return new Cesium.TileCoordinatesImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { tilingScheme, ellipsoid, color, tileWidth, tileHeight } = this
      let options = {
        tilingScheme,
        ellipsoid,
        color: makeColor(color),
        tileWidth,
        tileHeight
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
