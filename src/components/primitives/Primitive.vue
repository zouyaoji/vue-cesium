<script>
import commonMixin from '../../mixins/common.js'
export default {
  name: 'primitive',
  render (h) {},
  mixins: [commonMixin('primitive')],
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

  },
  methods: {
    load () {
      const { geometryInstances, appearance, show, modelMatrix, vertexCacheOptimize, interleave, compressVertices,
        releaseGeometryInstances, allowPicking, cull, asynchronous, debugShowBoundingVolume, shadows } = this
      let point = {
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
      this.removeNullItem(point)
      this.originInstance = this.$parent.originInstance.add(point)
    }
  }
}
</script>
