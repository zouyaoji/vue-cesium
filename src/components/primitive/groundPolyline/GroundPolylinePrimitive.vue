<script>
import {
  geometryInstances,
  appearance,
  show,
  interleave,
  releaseGeometryInstances,
  aaMixin,
  classificationType,
  debugShowBoundingVolume,
  debugShowShadowVolume
} from '../../../mixins/mixinProps'
import mixinPrimitive from '../../../mixins/primitives/mixinPrimitive'

export default {
  name: 'vc-primitive-polyline-ground',
  mixins: [
    geometryInstances,
    appearance,
    show,
    interleave,
    releaseGeometryInstances,
    aaMixin,
    classificationType,
    debugShowBoundingVolume,
    debugShowShadowVolume,
    mixinPrimitive
  ],
  methods: {
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      if (!options.asynchronous) {
        await Cesium.GroundPolylinePrimitive.initializeTerrainHeights()
      }
      return new Cesium.GroundPolylinePrimitive(options)
    }
  }
}
</script>
