<script>
import {
  accessToken,
  ellipsoid,
  minimumLevel,
  maximumLevel,
  rectangle,
  credit
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-style-mapbox',
  mixins: [
    accessToken,
    ellipsoid,
    minimumLevel,
    maximumLevel,
    rectangle,
    credit,
    mixinImageryProvider
  ],
  props: {
    url: {
      type: String,
      default: 'https://api.mapbox.com/styles/v1/'
    },
    username: {
      type: String,
      default: 'mapbox'
    },
    styleId: String,
    tilesize: {
      type: Number,
      default: 512
    },
    scaleFactor: Boolean
  }
}
</script>
