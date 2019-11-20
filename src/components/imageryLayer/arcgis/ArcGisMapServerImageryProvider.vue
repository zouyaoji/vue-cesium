<script>
import {
  url,
  token,
  tileDiscardPolicy,
  layers,
  enablePickFeatures,
  rectangle,
  tilingScheme,
  ellipsoid,
  credit,
  tileWidth,
  tileHeight,
  maximumLevel
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-arcgis-mapserver',
  mixins: [
    url,
    token,
    tileDiscardPolicy,
    layers,
    enablePickFeatures,
    rectangle,
    tilingScheme,
    ellipsoid,
    credit,
    tileWidth,
    tileHeight,
    maximumLevel,
    mixinImageryProvider
  ],
  props: {
    usePreCachedTilesIfAvailable: {
      type: Boolean,
      default: true
    }
  }
}
</script>
