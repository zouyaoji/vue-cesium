<script>
import {
  fileExtension,
  rectangle,
  minimumLevel,
  maximumLevel,
  ellipsoid
} from '../../mixins/entity/allProps'
import imageryProviderMixin from '../../mixins/imageryProvider/imageryProviderMixin'
import { makeRectangle } from '../../util/util'
export default {
  name: 'openstreetmap-imagery-provider',
  mixins: [
    imageryProviderMixin,
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
  },
  methods: {
    createCesiumObject () {
      return Cesium.defined(Cesium.OpenStreetMapImageryProvider) ? new Cesium.OpenStreetMapImageryProvider(this.makeOptions())
        : Cesium.createOpenStreetMapImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { url, fileExtension, rectangle, minimumLevel, maximumLevel, ellipsoid, credit } = this
      let options = {
        url,
        fileExtension,
        rectangle: makeRectangle(rectangle),
        minimumLevel,
        maximumLevel,
        ellipsoid,
        credit
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
