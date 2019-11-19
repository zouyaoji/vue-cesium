<script>
import {
  accessToken,
  format,
  ellipsoid,
  minimumLevel,
  maximumLevel,
  rectangle,
  credit
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-mapbox',
  mixins: [
    accessToken,
    format,
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
      default: 'https://api.mapbox.com/v4/'
    },
    mapId: String
  }
}
</script>
