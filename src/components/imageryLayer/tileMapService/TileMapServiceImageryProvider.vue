<script>
import {
  url,
  fileExtension,
  credit,
  minimumLevel,
  maximumLevel,
  rectangle,
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-tile-mapservice',
  mixins: [
    url,
    fileExtension,
    credit,
    minimumLevel,
    maximumLevel,
    rectangle,
    tilingScheme,
    ellipsoid,
    tileWidth,
    tileHeight,
    mixinImageryProvider
  ],
  props: {
    flipXY: Boolean
  }
}
</script>
