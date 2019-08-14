<script>
import {
  accessToken,
  format,
  ellipsoid,
  minimumLevel,
  maximumLevel,
  rectangle,
  credit
} from '@/mixins/imageryProvider/allProps'
import imageryProviderMixin from '@/mixins/imageryProvider/imageryProviderMixin'
import { makeRectangle } from '@/util/util'
export default {
  name: 'mapbox-imagery-provider',
  mixins: [
    accessToken,
    format,
    ellipsoid,
    minimumLevel,
    maximumLevel,
    rectangle,
    credit,
    imageryProviderMixin
  ],
  props: {
    url: {
      type: String,
      default: 'https://api.mapbox.com/v4/'
    },
    mapId: String
  },
  methods: {
    createCesiumObject () {
      return new Cesium.MapboxImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { url, mapId, accessToken, format, ellipsoid, minimumLevel, maximumLevel, rectangle, credit } = this
      let options = {
        url,
        mapId,
        accessToken,
        format,
        ellipsoid,
        minimumLevel,
        maximumLevel,
        rectangle: makeRectangle(rectangle),
        credit
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
