<script>
import {
  id,
  position
} from '../../mixins/entity/allProps'
import labelMixin from '../../mixins/entity/labelMixin'
import collectionItemMixin from '../../mixins/primitive/collectionItemMixin'
import { makeLabelOptions } from '../../util/util'
// import { makeNearFarScalar, makeColor, makeDistanceDisplayCondition, makeCartesian2, makeCartesian3 } from '../../util/util'
export default {
  name: 'label-primitive',
  mixins: [id, position, labelMixin, collectionItemMixin],
  props: {
    totalScale: Number
  },
  watch: {
    totalScale (val) {
      this.primitive.totalScale = val
    }
  },
  methods: {
    createCesiumObject () {
      let options = makeLabelOptions(this)
      this.removeNullItem(options)
      return this.primitiveCollection.add(options)
    }
  }
}
</script>
