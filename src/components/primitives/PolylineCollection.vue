<script>
import primitiveMixin from '../../mixins/primitive/primitiveMixin'
import { makePolylineOptions } from '../../util/util'
export default {
  name: 'polyline-collection',
  mixins: [primitiveMixin],
  props: {
    pollines: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    pollines () {
      this.reload()
    }
  },
  methods: {
    createCesiumObject () {
      const { modelMatrix, debugShowBoundingVolume } = this
      let options = {
        modelMatrix,
        debugShowBoundingVolume
      }
      this.removeNullItem(options)
      let polylineColletion = new Cesium.PolylineCollection(options)
      this.pollines.forEach(polyline => {
        let polylineOptions = makePolylineOptions(polyline)
        this.removeNullItem(polylineOptions)
        polylineColletion.add(polylineOptions)
      })
      return polylineColletion
    }
  }
}
</script>
