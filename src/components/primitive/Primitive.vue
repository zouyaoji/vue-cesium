<script>
import {
  vcMixin,
  modelMatrix,
  shadows,
  geometryInstances,
  appearance,
  show,
  interleave,
  releaseGeometryInstances,
  aaMixin,
  classificationType,
  debugShowBoundingVolume,
  debugShowShadowVolume
} from '../../mixins/mixinProps'
import mixinPrimitive from '../../mixins/primitives/mixinPrimitive'
export default {
  name: 'vc-primitive',
  mixins: [
    vcMixin,
    modelMatrix,
    shadows,
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
  props: {
    cull: {
      type: Boolean,
      default: true
    }
  }
}
</script>
