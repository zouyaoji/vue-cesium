<script>
import primitive from '../../mixins/primitive'
export default {
  name: 'ground-primitive',
  mixins: [primitive],
  props: {
    geometryInstances: Array | Object,
    appearance: Object,
    show: {
      type: Boolean,
      default: true
    },
    vertexCacheOptimize: {
      type: Boolean,
      default: false
    },
    interleave: {
      type: Boolean,
      default: false
    },
    compressVertices: {
      type: Boolean,
      default: true
    },
    releaseGeometryInstances: {
      type: Boolean,
      default: true
    },
    allowPicking: {
      type: Boolean,
      default: true
    },
    asynchronous: {
      type: Boolean,
      default: true
    },
    classificationType: Number,
    debugShowBoundingVolume: {
      type: Boolean,
      default: false
    },
    debugShowShadowVolume: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    geometryInstances (val) {
      this.reload()
    },
    appearance (val) {
      this.primitive.appearance = val
    },
    show (val) {
      this.primitive.show = val
    },
    vertexCacheOptimize (val) {
      this.reload()
    },
    interleave (val) {
      this.primitive.interleave = val
    },
    compressVertices (val) {
      this.reload()
    },
    releaseGeometryInstances (val) {
      this.primitive.releaseGeometryInstances = val
    },
    allowPicking (val) {
      this.reload()
    },
    asynchronous (val) {
      this.reload()
    },
    classificationType (val) {
      this.primitive.classificationType = val
    },
    debugShowBoundingVolume (val) {
      this.primitive.debugShowBoundingVolume = val
    },
    debugShowShadowVolume (val) {
      this.primitive.debugShowShadowVolume = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, geometryInstances, appearance, show, vertexCacheOptimize, interleave, compressVertices,
        releaseGeometryInstances, allowPicking, asynchronous, classificationType, debugShowBoundingVolume, debugShowShadowVolume } = this
      let options = {
        geometryInstances,
        appearance: Cesium.defaultValue(appearance, new Cesium.MaterialAppearance()),
        show,
        vertexCacheOptimize,
        interleave,
        compressVertices,
        releaseGeometryInstances,
        allowPicking,
        asynchronous,
        classificationType,
        debugShowBoundingVolume,
        debugShowShadowVolume
      }
      this.removeNullItem(options)
      return new Cesium.GroundPrimitive(options)
    },
    setGeometryInstances (geometryInstances) {
      const listener = this.$listeners['update:geometryInstances']
      if (listener) { this.$emit('update:geometryInstances', geometryInstances) } else this.primitive.geometryInstances = geometryInstances
    }
  }
}
</script>
