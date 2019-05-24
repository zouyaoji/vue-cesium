<script>
import primitive from '../../mixins/primitive'
export default {
  name: 'primitive',
  mixins: [primitive],
  props: {
    geometryInstances: Array | Object,
    appearance: Object,
    show: {
      type: Boolean,
      default: true
    },
    modelMatrix: Object,
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
    cull: {
      type: Boolean,
      default: true
    },
    asynchronous: {
      type: Boolean,
      default: true
    },
    debugShowBoundingVolume: {
      type: Boolean,
      default: false
    },
    shadows: {
      type: Number,
      default: 0
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
    modelMatrix (val) {
      this.primitive.modelMatrix = val
    },
    vertexCacheOptimize (val) {
      this.reload()
    },
    interleave (val) {
      this.reload()
    },
    compressVertices (val) {
      this.reload()
    },
    releaseGeometryInstances (val) {
      this.reload()
    },
    allowPicking (val) {
      this.reload()
    },
    cull (val) {
      this.primitive.cull = val
    },
    asynchronous (val) {
      this.reload()
    },
    debugShowBoundingVolume (val) {
      this.primitive.debugShowBoundingVolume = val
    },
    shadows (val) {
      this.primitive.shadows = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, geometryInstances, appearance, show, modelMatrix, vertexCacheOptimize, interleave, compressVertices,
        releaseGeometryInstances, allowPicking, cull, asynchronous, debugShowBoundingVolume, shadows } = this
      let options = {
        geometryInstances,
        appearance,
        show,
        modelMatrix,
        vertexCacheOptimize,
        interleave,
        compressVertices,
        releaseGeometryInstances,
        allowPicking,
        cull,
        asynchronous,
        debugShowBoundingVolume,
        shadows
      }
      this.removeNullItem(options)
      return new Cesium.Primitive(options)
    },
    setGeometryInstances (geometryInstances) {
      const listener = this.$listeners['update:geometryInstances']
      if (listener) { this.$emit('update:geometryInstances', geometryInstances) } else this.primitive.geometryInstances = geometryInstances
    }
  }
}
</script>
