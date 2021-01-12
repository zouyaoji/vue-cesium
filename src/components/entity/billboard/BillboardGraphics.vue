<script>
import {
  imageSubRegion
} from '../../../mixins/mixinProps'
import mixinBillboard from '../../../mixins/graphics/mixinBillboard'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'

export default {
  name: 'vc-graphics-billboard',
  mixins: [imageSubRegion, mixinBillboard, mixinGraphic]
}
</script>
