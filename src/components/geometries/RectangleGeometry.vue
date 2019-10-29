<script>
import {
  ellipsoid,
  vertexFormat,
  rectangle
} from '../../mixins/entity/allProps'
import rectangleMixin from '../../mixins/entity/rectangleMixin'
import geometryMixin from '../../mixins/geometry/geometryMixin'
import { makeRectangle } from '../../util/util'
export default {
  name: 'vc-geometry-rectangle',
  mixins: [rectangleMixin, ellipsoid, vertexFormat, rectangle, geometryMixin],
  methods: {
    async createCesiumObject () {
      return new Cesium.RectangleGeometry(this.makeOptions())
    },
    makeOptions () {
      const { rectangle, vertexFormat, ellipsoid, granularity, height, rotation, stRotation, extrudedHeight } = this
      let options = {
        rectangle: makeRectangle(rectangle),
        vertexFormat,
        ellipsoid,
        granularity,
        height,
        rotation,
        stRotation,
        extrudedHeight
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
