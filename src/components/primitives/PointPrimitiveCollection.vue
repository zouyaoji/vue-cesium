<script>
import { blendOption, modelMatrix, debugShowBoundingVolume } from '@/mixins/entity/allProps'
import primitiveMixin from '@/mixins/primitive/primitiveMixin'
export default {
  name: 'point-collection',
  mixins: [blendOption, modelMatrix, debugShowBoundingVolume, primitiveMixin],
  methods: {
    createCesiumObject () {
      const { modelMatrix, debugShowBoundingVolume, blendOption } = this
      let options = {
        modelMatrix,
        debugShowBoundingVolume,
        blendOption
      }
      this.removeNullItem(options)
      return new Cesium.PointPrimitiveCollection(options)
    }
  }
}
</script>
