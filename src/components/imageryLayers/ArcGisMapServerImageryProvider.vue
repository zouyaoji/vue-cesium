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
} from '@/mixins/imageryProvider/allProps'
import imageryProviderMixin from '@/mixins/imageryProvider/imageryProviderMixin'
import { makeRectangle } from '@/util/util'
export default {
  name: 'arcgis-mapserver-imagery-provider',
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
    imageryProviderMixin
  ],
  props: {
    usePreCachedTilesIfAvailable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    createCesiumObject () {
      return new Cesium.ArcGisMapServerImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { url, token, tileDiscardPolicy, usePreCachedTilesIfAvailable, layers, enablePickFeatures, rectangle,
        tilingScheme, ellipsoid, credit, tileWidth, tileHeight, maximumLevel } = this
      let options = {
        url,
        token,
        tileDiscardPolicy,
        usePreCachedTilesIfAvailable,
        layers,
        enablePickFeatures,
        rectangle: makeRectangle(rectangle),
        tilingScheme,
        ellipsoid,
        credit,
        tileWidth,
        tileHeight,
        maximumLevel
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
