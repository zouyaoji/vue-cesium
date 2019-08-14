<script>
import {
  fileExtension,
  rectangle,
  minimumLevel,
  maximumLevel,
  ellipsoid
} from '@/mixins/imageryProvider/allProps'
import imageryProviderMixin from '@/mixins/imageryProvider/imageryProviderMixin'
import { makeRectangle } from '@/util/util'
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
      /* eslint-disable new-cap */
      return new Cesium.createOpenStreetMapImageryProvider(this.makeOptions())
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
