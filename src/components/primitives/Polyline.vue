<script>
import {
  loop,
  id
} from '../../mixins/entity/allProps'
import polylineMixin from '../../mixins/entity/polylineMixin'
import collectionItemMixin from '../../mixins/primitive/collectionItemMixin'
import { makePolylineOptions } from '../../util/util'
export default {
  name: 'vc-primitive-polyline',
  mixins: [loop, id, polylineMixin, collectionItemMixin],
  methods: {
    createCesiumObject () {
      let options = makePolylineOptions(this)
      this.removeNullItem(options)
      return this.primitiveCollection.add(options)
    }
  }
}
</script>
