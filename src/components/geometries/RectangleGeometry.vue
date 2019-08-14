<script>
import rectangleMixin from '@/mixins/entity/rectangleMixin'
import geometryMixin from '@/mixins/geometry/geometryMixin'
import { makeRectangle } from '@/util/util'
export default {
  name: 'rectangle-geometry',
  mixins: [rectangleMixin, geometryMixin],
  props: {
    rectangle: Object | Array,
    vertexFormat: Object,
    ellipsoid: Object
  },
  methods: {
    createCesiumObject () {
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
