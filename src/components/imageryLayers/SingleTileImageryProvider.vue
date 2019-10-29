<script>
import {
  url,
  rectangle,
  credit,
  ellipsoid
} from '../../mixins/entity/allProps'
import imageryProviderMixin from '../../mixins/imageryProvider/imageryProviderMixin'
import { makeRectangle } from '../../util/util'
export default {
  name: 'vc-imagery-provider-singletile',
  mixins: [
    url,
    rectangle,
    credit,
    ellipsoid,
    imageryProviderMixin
  ],
  methods: {
    createCesiumObject () {
      return new Cesium.SingleTileImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { url, rectangle, credit, ellipsoid } = this
      let options = {
        url,
        rectangle: makeRectangle(rectangle),
        credit,
        ellipsoid
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
