<script>
import {
  dimensions,
  vertexFormat
} from '../../mixins/entity/allProps'
import geometryMixin from '../../mixins/geometry/geometryMixin'
import { makeCartesian3 } from '../../util/util'
export default {
  name: 'vc-geometry-box',
  mixins: [dimensions, vertexFormat, geometryMixin],
  methods: {
    createCesiumObject () {
      return Cesium.BoxGeometry.fromDimensions(this.makeOptions())
    },
    makeOptions () {
      const { dimensions, vertexFormat } = this
      let options = {
        dimensions: makeCartesian3(dimensions),
        vertexFormat
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
