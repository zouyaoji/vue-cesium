<script>
import { positions } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-polygon-coplanar',
  mixins: [positions, mixinGeometry],
  methods: {
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      return Cesium.CoplanarPolygonOutlineGeometry.fromPositions(options)
    }
  }
}
</script>
