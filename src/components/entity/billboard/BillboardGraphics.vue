<script>
import mixinBillboard from '../../../mixins/graphics/mixinBillboard'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'

export default {
  name: 'vc-graphics-billboard',
  mixins: [mixinBillboard, mixinGraphic],
  props: {
    imageSubRegion: Object
  }
}
</script>
