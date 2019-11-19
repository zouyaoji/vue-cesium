<script>
import { id, position } from '../../../mixins/mixinProps'
import mixinPoint from '../../../mixins/graphics/mixinPoint'
import mixinPrimitiveCollectionItem from '../../../mixins/primitives/mixinPrimitiveCollectionItem'
export default {
  name: 'vc-primitive-point',
  mixins: [id, position, mixinPoint, mixinPrimitiveCollectionItem]
}
</script>
