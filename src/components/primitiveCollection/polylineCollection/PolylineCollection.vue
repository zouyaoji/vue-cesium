<script>
import { modelMatrix, debugShowBoundingVolume } from '../../../mixins/mixinProps'
import mixinPrimitiveCollection from '../../../mixins/primitives/mixinPrimitiveCollection'
export default {
  name: 'vc-collection-primitive-polyline',
  mixins: [modelMatrix, debugShowBoundingVolume, mixinPrimitiveCollection],
  props: {
    polylines: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    /**
     *  重写 createCesiumObject 方法，支持用数组加载大量 polyline
     */
    async createCesiumObject () {
      const { $props, transformProps, polylines } = this
      const options = transformProps($props)
      const polylineColletion = new Cesium.PolylineCollection(options)

      polylines.forEach((polyline) => {
        const polylineOptions = transformProps(polyline)
        polylineColletion.add(polylineOptions)
      })
      return polylineColletion
    }
  }
}
</script>
