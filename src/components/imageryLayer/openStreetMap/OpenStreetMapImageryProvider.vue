<script>
import {
  fileExtension,
  rectangle,
  minimumLevel,
  maximumLevel,
  ellipsoid
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-openstreetmap',
  mixins: [
    mixinImageryProvider,
    fileExtension,
    rectangle,
    minimumLevel,
    maximumLevel,
    ellipsoid
  ],
  props: {
    url: {
      type: String,
      default: 'https://a.tile.openstreetmap.org'
    },
    credit: {
      type: String | Object,
      default: 'MapQuest, Open Street Map and contributors, CC-BY-SA'
    }
  }
}
</script>
