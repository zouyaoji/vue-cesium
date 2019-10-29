<script>
import primitiveMixin from '../../mixins/primitive/primitiveMixin'
import { makePolylineOptions } from '../../util/util'
export default {
  name: 'vc-primitive-polyline-collection',
  mixins: [primitiveMixin],
  props: {
    polylines: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    polylines () {
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
      this.polylines.forEach(polyline => {
        let polylineOptions = makePolylineOptions(polyline)
        this.removeNullItem(polylineOptions)
        polylineColletion.add(polylineOptions)
      })
      return polylineColletion
    }
  }
}
</script>
