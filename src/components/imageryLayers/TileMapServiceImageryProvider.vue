<script>
import {
  url,
  fileExtension,
  credit,
  minimumLevel,
  maximumLevel,
  rectangle,
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight
} from '@/mixins/imageryProvider/allProps'
import imageryProviderMixin from '@/mixins/imageryProvider/imageryProviderMixin'
import { makeRectangle } from '@/util/util'
export default {
  name: 'tilemapservice-imagery-provider',
  mixins: [
    url,
    fileExtension,
    credit,
    minimumLevel,
    maximumLevel,
    rectangle,
    tilingScheme,
    ellipsoid,
    tileWidth,
    tileHeight,
    imageryProviderMixin
  ],
  props: {
    flipXY: Boolean
  },
  methods: {
    createCesiumObject () {
      /* eslint-disable new-cap */
      return new Cesium.createTileMapServiceImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { url, fileExtension, credit, minimumLevel, maximumLevel, rectangle, tilingScheme, ellipsoid, tileWidth, tileHeight, flipXY } = this
      let options = {
        url,
        fileExtension,
        credit,
        minimumLevel,
        maximumLevel,
        rectangle: makeRectangle(rectangle),
        tilingScheme,
        ellipsoid,
        tileWidth,
        tileHeight,
        flipXY
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
