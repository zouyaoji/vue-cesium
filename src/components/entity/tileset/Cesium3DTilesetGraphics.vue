<script>
import {
  show,
  uri
} from '../../../mixins/mixinProps'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-tileset',
  mixins: [
    show,
    uri,
    mixinGraphic
  ],
  props: {
    maximumScreenSpaceError: Number
  }
}
</script>
