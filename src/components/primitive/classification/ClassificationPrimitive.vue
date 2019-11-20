<script>
import {
  vcMixin,
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
  name: 'vc-primitive-classification',
  mixins: [
    vcMixin,
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
  ]
}
</script>
