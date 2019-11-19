<script>
import { id, position } from '../../../mixins/mixinProps'
import mixinBillboard from '../../../mixins/graphics/mixinBillboard'
import mixinPrimitiveCollectionItem from '../../../mixins/primitives/mixinPrimitiveCollectionItem'
export default {
  name: 'vc-primitive-billboard',
  mixins: [id, position, mixinBillboard, mixinPrimitiveCollectionItem]
}
</script>
