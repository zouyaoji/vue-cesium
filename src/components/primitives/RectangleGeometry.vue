<script>
import primitiveItem from '../../mixins/primitiveItem'
export default {
  name: 'rectangle-geometry',
  mixins: [primitiveItem],
  props: {
    rectangle: Object,
    vertexFormat: Object,
    ellipsoid: Object,
    granularity: {
      type: Number,
      default: Math.PI / 180.0
    },
    height: Number,
    rotation: Number,
    stRotation: Number,
    extrudedHeight: Number
  },
  watch: {
    rectangle: {
      handler (val) {
        this.geometryContainer.geometryInstancesContainer.reload()
      },
      deep: true
    },
    vertexFormat (val) {
      this.geometry.vertexFormat = val
    },
    ellipsoid (val) {},
    granularity (val) {},
    height (val) {},
    rotation (val) {},
    stRotation (val) {},
    extrudedHeight (val) {}
  },
  methods: {
    createCesiumObject () {
      const { Cesium, rectangle, vertexFormat, ellipsoid, granularity, height, rotation, stRotation, extrudedHeight } = this
      let options = {
        rectangle: rectangle instanceof Cesium.Rectangle || this.isEmptyObj(rectangle) ? rectangle : Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north),
        vertexFormat,
        ellipsoid,
        granularity,
        height,
        rotation,
        stRotation,
        extrudedHeight
      }
      this.removeNullItem(options)
      return new Cesium.RectangleGeometry(options)
    }
  }
}
</script>
