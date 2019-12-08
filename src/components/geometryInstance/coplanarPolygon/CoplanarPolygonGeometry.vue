<script>
import { positions, stRotation, vertexFormat, ellipsoid } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-polygon-coplanar',
  mixins: [positions, stRotation, vertexFormat, ellipsoid, mixinGeometry],
  methods: {
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      return Cesium.CoplanarPolygonGeometry.fromPositions(options)
    }
  }
}
</script>
