<script>
import { scene, blendOption } from '@/mixins/entity/allProps'
import primitiveMixin from '@/mixins/primitive/primitiveMixin'
export default {
  name: 'label-collection',
  mixins: [scene, blendOption, primitiveMixin],
  methods: {
    createCesiumObject () {
      const { modelMatrix, debugShowBoundingVolume, scene, blendOption } = this
      let options = {
        modelMatrix,
        debugShowBoundingVolume,
        scene,
        blendOption
      }
      this.removeNullItem(options)
      return new Cesium.LabelCollection(options)
    }
  }
}
</script>
