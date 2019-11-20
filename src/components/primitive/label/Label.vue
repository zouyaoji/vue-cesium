<script>
import { id, position } from '../../../mixins/mixinProps'
import mixinLabel from '../../../mixins/graphics/mixinLabel'
import mixinPrimitiveCollectionItem from '../../../mixins/primitives/mixinPrimitiveCollectionItem'
export default {
  name: 'vc-primitive-label',
  mixins: [id, position, mixinLabel, mixinPrimitiveCollectionItem],
  props: {
    totalScale: Number
  }
}
</script>
