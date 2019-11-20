<script>
import {
  url,
  subdomains,
  credit,
  minimumLevel,
  maximumLevel,
  rectangle,
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight,
  getFeatureInfoFormats,
  enablePickFeatures
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-urltemplate',
  mixins: [
    url,
    subdomains,
    credit,
    minimumLevel,
    maximumLevel,
    rectangle,
    tilingScheme,
    ellipsoid,
    tileWidth,
    tileHeight,
    getFeatureInfoFormats,
    enablePickFeatures,
    mixinImageryProvider
  ],
  props: {
    pickFeaturesUrl: String | Object,
    urlSchemeZeroPadding: Object,
    hasAlphaChannel: {
      type: Boolean,
      default: true
    },
    customTags: Object
  }
}
</script>
