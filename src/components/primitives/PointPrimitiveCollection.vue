<script>
import primitiveCollection from '../../mixins/primitiveCollection'
export default {
  name: 'point-collection',
  mixins: [primitiveCollection],
  props: {
    modelMatrix: {
      type: Object
    },
    debugShowBoundingVolume: {
      type: Boolean,
      default: false
    },
    blendOption: {
      type: Number
    }
  },
  watch: {
    modelMatrix () {
      this.reload()
    },
    debugShowBoundingVolume (val) {
      this.originInstance.debugShowBoundingVolume = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, modelMatrix, debugShowBoundingVolume, blendOption } = this
      let pointCollection = new Cesium.PointPrimitiveCollection({
        modelMatrix: modelMatrix,
        debugShowBoundingVolume: debugShowBoundingVolume,
        blendOption: blendOption
      })
      return pointCollection
    }
  }
}
</script>
