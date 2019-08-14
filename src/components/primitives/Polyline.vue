<script>
import {
  loop,
  id
} from '@/mixins/entity/allProps'
import polylineMixin from '@/mixins/entity/polylineMixin'
import collectionItemMixin from '@/mixins/primitive/collectionItemMixin'
import { makeCartesian3Array, makeDistanceDisplayCondition } from '@/util/util'
export default {
  name: 'polyline-primitive',
  mixins: [loop, id, polylineMixin, collectionItemMixin],
  methods: {
    createCesiumObject () {
      const { primitiveCollection, show, width, loop, material, positions, id, distanceDisplayCondition } = this
      let polyline = {
        show,
        width,
        loop,
        material,
        positions: makeCartesian3Array(positions),
        id,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition)
      }
      this.removeNullItem(polyline)
      return primitiveCollection.add(polyline)
    }
  }
}
</script>
