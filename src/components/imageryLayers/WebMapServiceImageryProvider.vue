<script>
import {
  url,
  layers,
  enablePickFeatures,
  getFeatureInfoFormats,
  rectangle,
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight,
  minimumLevel,
  maximumLevel,
  credit,
  subdomains,
  clock,
  times,
  token
} from '../../mixins/entity/allProps'
import imageryProviderMixin from '../../mixins/imageryProvider/imageryProviderMixin'
import { makeRectangle } from '../../util/util'
export default {
  name: 'vc-imagery-provider-wms',
  mixins: [
    url,
    layers,
    enablePickFeatures,
    getFeatureInfoFormats,
    rectangle,
    tilingScheme,
    ellipsoid,
    tileWidth,
    tileHeight,
    minimumLevel,
    maximumLevel,
    credit,
    subdomains,
    clock,
    times,
    token,
    imageryProviderMixin
  ],
  props: {
    parameters: Object,
    getFeatureInfoParameters: Object,
    crs: String,
    srs: String
  },
  methods: {
    createCesiumObject () {
      return new Cesium.WebMapServiceImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { url, layers, parameters, getFeatureInfoParameters, enablePickFeatures, getFeatureInfoFormats, rectangle, tilingScheme, ellipsoid, tileWidth, tileHeight,
        minimumLevel, maximumLevel, crs, srs, credit, subdomains, clock, times, token } = this
      let options = {
        url,
        layers,
        parameters,
        getFeatureInfoParameters,
        enablePickFeatures,
        getFeatureInfoFormats,
        rectangle: makeRectangle(rectangle),
        tilingScheme,
        ellipsoid,
        tileWidth,
        tileHeight,
        minimumLevel,
        maximumLevel,
        crs,
        srs,
        credit,
        subdomains,
        clock,
        times,
        token
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
