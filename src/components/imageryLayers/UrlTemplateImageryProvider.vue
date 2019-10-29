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
} from '../../mixins/entity/allProps'
import imageryProviderMixin from '../../mixins/imageryProvider/imageryProviderMixin'
import { makeRectangle } from '../../util/util'
export default {
  name: 'vc-imagery-provider-urltemplate',
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
    imageryProviderMixin
  ],
  props: {
    pickFeaturesUrl: String | Object,
    urlSchemeZeroPadding: Object,
    hasAlphaChannel: {
      type: Boolean,
      default: true
    },
    customTags: Object
  },
  methods: {
    createCesiumObject () {
      return new Cesium.UrlTemplateImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { url, pickFeaturesUrl, urlSchemeZeroPadding, subdomains, credit, minimumLevel, maximumLevel, rectangle,
        tilingScheme, ellipsoid, tileWidth, tileHeight, hasAlphaChannel, getFeatureInfoFormats, customTags, enablePickFeatures } = this
      let options = {
        url,
        pickFeaturesUrl,
        urlSchemeZeroPadding,
        subdomains,
        credit,
        minimumLevel,
        maximumLevel,
        rectangle: makeRectangle(rectangle),
        tilingScheme,
        ellipsoid,
        tileWidth,
        tileHeight,
        hasAlphaChannel,
        getFeatureInfoFormats,
        customTags,
        enablePickFeatures
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
