<script>
import { show } from '../../mixins/mixinProps'
import mixinPrimitiveCollection from '../../mixins/primitives/mixinPrimitiveCollection'
export default {
  name: 'vc-collection-primitive',
  mixins: [show, mixinPrimitiveCollection],
  props: {
    destroyPrimitives: {
      type: Boolean,
      default: true
    }
  }
}
</script>
