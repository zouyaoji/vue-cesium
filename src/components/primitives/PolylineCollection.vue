<script>
import primitiveMixin from '@/mixins/primitive/primitiveMixin'
export default {
  name: 'polyline-collection',
  mixins: [primitiveMixin],
  methods: {
    createCesiumObject () {
      const { modelMatrix, debugShowBoundingVolume } = this
      let options = {
        modelMatrix,
        debugShowBoundingVolume
      }
      this.removeNullItem(options)
      return new Cesium.PolylineCollection(options)
    }
  }
}
</script>
