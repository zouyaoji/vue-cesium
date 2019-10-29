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
  name: 'vc-imagery-provider-grid',
  mixins: [
    tilingScheme,
    ellipsoid,
    tileWidth,
    tileHeight,
    imageryProviderMixin
  ],
  props: {
    cells: {
      type: Number,
      default: 8
    },
    color: {
      type: String | Object | Array,
      default: () => [1.0, 1.0, 1.0, 0.4]
    },
    glowColor: {
      type: String | Array | Object,
      default: () => [0.0, 1.0, 0.0, 0.05]
    },
    glowWidth: {
      type: Number,
      default: 6
    },
    backgroundColor: {
      type: String | Array | Object,
      default: () => [0.0, 0.5, 0.0, 0.2]
    },
    canvasSize: {
      type: Number,
      default: 256
    }
  },
  methods: {
    createCesiumObject () {
      return new Cesium.GridImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { tilingScheme, ellipsoid, cells, color, glowColor, glowWidth, backgroundColor, tileWidth, tileHeight, canvasSize } = this
      let options = {
        tilingScheme,
        ellipsoid,
        cells,
        color: makeColor(color),
        glowColor: makeColor(glowColor),
        glowWidth: makeColor(glowWidth),
        backgroundColor: makeColor(backgroundColor),
        tileWidth,
        tileHeight,
        canvasSize
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
