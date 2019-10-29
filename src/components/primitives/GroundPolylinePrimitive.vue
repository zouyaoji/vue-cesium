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
} from '../../mixins/entity/allProps'
import primitiveMixin from '../../mixins/primitive/primitiveMixin'

export default {
  name: 'vc-primitive-ground-polyline',
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
    primitiveMixin
  ],
  methods: {
    createCesiumObject () {
      const { geometryInstances, appearance, show, interleave, releaseGeometryInstances, allowPicking,
        asynchronous, classificationType, debugShowBoundingVolume, debugShowShadowVolume } = this
      let options = {
        geometryInstances,
        appearance,
        show,
        interleave,
        releaseGeometryInstances,
        allowPicking,
        asynchronous,
        classificationType,
        debugShowBoundingVolume,
        debugShowShadowVolume
      }
      this.removeNullItem(options)
      return new Cesium.GroundPolylinePrimitive(options)
    },
    setGeometryInstances (geometryInstances) {
      const listener = this.$listeners['update:geometryInstances']
      if (listener) { this.$emit('update:geometryInstances', geometryInstances) } else this.primitive.geometryInstances = geometryInstances
    }
  }
}
</script>
