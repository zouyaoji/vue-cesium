<script>
import polygonMixin from '@/mixins/entity/polygonMixin'
import geometryMixin from '@/mixins/geometry/geometryMixin'
import { makePolygonHierarchy } from '@/util/util'
export default {
  name: 'polygon-geometry',
  mixins: [polygonMixin, geometryMixin],
  props: {
    polygonHierarchy: Object | Array,
    vertexFormat: Object,
    ellipsoid: Object
  },
  methods: {
    createCesiumObject () {
      return new Cesium.PolygonGeometry(this.makeOptions())
    },
    makeOptions () {
      const { polygonHierarchy, height, extrudedHeight, vertexFormat, stRotation, ellipsoid,
        granularity, perPositionHeight, closeTop, closeBottom, arcType } = this
      let options = {
        polygonHierarchy: makePolygonHierarchy(polygonHierarchy),
        height,
        extrudedHeight,
        vertexFormat,
        stRotation,
        ellipsoid,
        granularity,
        perPositionHeight,
        closeTop,
        closeBottom,
        arcType
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
