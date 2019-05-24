<script>
import primitiveItem from '../../mixins/primitiveItem'
export default {
  name: 'polygon-geometry',
  mixins: [primitiveItem],
  props: {
    polygonHierarchy: Object | Array,
    height: Number,
    extrudedHeight: Number,
    vertexFormat: Object,
    stRotation: Number,
    ellipsoid: Object,
    granularity: Number,
    perPositionHeight: {
      type: Boolean,
      default: false
    },
    closeTop: {
      type: Boolean,
      default: true
    },
    closeBottom: {
      type: Boolean,
      default: true
    },
    arcType: Number
  },
  watch: {
    polygonHierarchy (val) {
      this.geometry.polygonHierarchy = val
    },
    height (val) {
      this.geometryContainer.geometryInstancesContainer.reload()
    },
    extrudedHeight (val) {
      this.geometryContainer.geometryInstancesContainer.reload()
    },
    vertexFormat (val) {},
    stRotation (val) {},
    ellipsoid (val) {},
    granularity (val) {},
    perPositionHeight (val) {},
    closeTop (val) {},
    closeBottom (val) {},
    arcType (val) {}
  },
  methods: {
    createCesiumObject () {
      const { Cesium, polygonHierarchy, height, extrudedHeight, vertexFormat, stRotation, ellipsoid,
        granularity, perPositionHeight, closeTop, closeBottom, arcType } = this
      let options = {
        polygonHierarchy: polygonHierarchy instanceof Cesium.PolygonHierarchy || this.isEmptyObj(polygonHierarchy) ? polygonHierarchy : new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArray(polygonHierarchy)),
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
      return new Cesium.PolygonGeometry(options)
    }
  }
}
</script>
