<script>
import { scene, blendOption } from '../../mixins/entity/allProps'
import primitiveMixin from '../../mixins/primitive/primitiveMixin'
import { makeLabelOptions } from '../../util/util'
export default {
  name: 'vc-primitive-lable-collection',
  mixins: [scene, blendOption, primitiveMixin],
  props: {
    labels: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    labels () {
      this.reload()
    }
  },
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
      let labelCollection = new Cesium.LabelCollection(options)
      this.labels.forEach(label => {
        let labelOptions = makeLabelOptions(label)
        this.removeNullItem(labelOptions)
        labelCollection.add(labelOptions)
      })
      return labelCollection
      // return new Cesium.LabelCollection(options)
    }
  }
}
</script>
