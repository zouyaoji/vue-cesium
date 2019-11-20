<script>
import { loop, id } from '../../../mixins/mixinProps'
import mixinPolyline from '../../../mixins/graphics/mixinPolyline'
import mixinPrimitiveCollectionItem from '../../../mixins/primitives/mixinPrimitiveCollectionItem'
export default {
  name: 'vc-primitive-polyline',
  mixins: [loop, id, mixinPolyline, mixinPrimitiveCollectionItem]
}
</script>
