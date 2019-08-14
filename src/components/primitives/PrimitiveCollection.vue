<script>
import { show } from '@/mixins/entity/allProps'
import primitiveMixin from '@/mixins/primitive/primitiveMixin'
export default {
  name: 'primitive-collection',
  mixins: [show, primitiveMixin],
  props: {
    destroyPrimitives: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    destroyPrimitives (val) {
      this.PrimitiveCollection.destroyPrimitives = val
    }
  },
  methods: {
    createCesiumObject () {
      const { show, destroyPrimitives } = this
      let options = {
        show,
        destroyPrimitives
      }
      this.removeNullItem(options)
      return new Cesium.PrimitiveCollection(options)
    }
  }
}
</script>
