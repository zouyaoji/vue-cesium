<script>
import primitiveItem from '../../mixins/primitiveItem'
export default {
  name: 'box-geometry',
  mixins: [primitiveItem],
  props: {
    dimensions: Object,
    vertexFormat: Object
  },
  watch: {
    dimensions (val) {
      this.geometryContainer.geometryInstancesContainer.reload()
    },
    vertexFormat (val) {
      this.geometryContainer.geometryInstancesContainer.reload()
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, dimensions, vertexFormat } = this
      let options = {
        dimensions: dimensions instanceof Cesium.Cartesian3 || this.isEmptyObj(dimensions) ? dimensions : new Cesium.Cartesian3(dimensions.x, dimensions.y, dimensions.z),
        vertexFormat
      }
      this.removeNullItem(options)
      return Cesium.BoxGeometry.fromDimensions(options)
    }
  }
}
</script>
