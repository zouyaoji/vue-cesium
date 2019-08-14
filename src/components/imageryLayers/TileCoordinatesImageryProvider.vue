<script>
import {
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight
} from '@/mixins/imageryProvider/allProps'
import imageryProviderMixin from '@/mixins/imageryProvider/imageryProviderMixin'
export default {
  name: 'tilecoordinates-imagery-provider',
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
        color,
        tileWidth,
        tileHeight
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
