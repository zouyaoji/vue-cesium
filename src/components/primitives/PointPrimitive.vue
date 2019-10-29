<script>
import { id, position } from '../../mixins/entity/allProps'
import pointMixin from '../../mixins/entity/pointMixin'
import collectionItemMixin from '../../mixins/primitive/collectionItemMixin'
import { makePointOptions } from '../../util/util'
export default {
  name: 'vc-primitive-point',
  mixins: [id, position, pointMixin, collectionItemMixin],
  methods: {
    createCesiumObject () {
      let options = makePointOptions(this)
      this.removeNullItem(options)
      return this.primitiveCollection.add(options)
    }
  }
}
</script>
