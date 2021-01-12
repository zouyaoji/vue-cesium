<script>
import {
  show,
  uri,
  maximumScreenSpaceError
} from '../../../mixins/mixinProps'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-tileset',
  mixins: [
    show,
    uri,
    maximumScreenSpaceError,
    mixinGraphic
  ]
}
</script>
