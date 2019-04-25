<script>
import primitiveCollection from '../../mixins/primitiveCollection'
export default {
  name: 'point-collection',
  mixins: [primitiveCollection],
  props: {
    modelMatrix: Object,
    debugShowBoundingVolume: {
      type: Boolean,
      default: false
    },
    blendOption: Number
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
      let options = {
        modelMatrix,
        debugShowBoundingVolume,
        blendOption
      }
      this.removeNullItem(options)
      let pointCollection = new Cesium.PointPrimitiveCollection(options)
      return pointCollection
    }
  }
}
</script>
