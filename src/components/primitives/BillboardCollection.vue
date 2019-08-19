<script>
import { scene, blendOption } from '../../mixins/entity/allProps'
import primitiveMixin from '../../mixins/primitive/primitiveMixin'
import { makeBillboardptions } from '../../util/util'
export default {
  name: 'billboard-collection',
  mixins: [scene, blendOption, primitiveMixin],
  props: {
    billboards: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    billboards () {
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
      let billboardColletion = new Cesium.BillboardCollection(options)
      this.billboards.forEach(billboard => {
        let polylineOptions = makeBillboardptions(billboard)
        this.removeNullItem(polylineOptions)
        billboardColletion.add(polylineOptions)
      })
      return billboardColletion
    }
  }
}
</script>
