<script>
import {
  id,
  position
} from '../../mixins/entity/allProps'
import billboardMixin from '../../mixins/entity/billboardMixin'
import collectionItemMixin from '../../mixins/primitive/collectionItemMixin'
import { makeBillboardptions } from '../../util/util'
export default {
  name: 'vc-primitive-billboard',
  mixins: [id, position, billboardMixin, collectionItemMixin],
  methods: {
    createCesiumObject () {
      let options = makeBillboardptions(this)
      this.removeNullItem(options)
      return this.primitiveCollection.add(options)
    }
  }
}
</script>
