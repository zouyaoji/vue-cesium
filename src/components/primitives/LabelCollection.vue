<script>
import primitiveCollection from '../../mixins/primitiveCollection'
export default {
  name: 'label-collection',
  mixins: [primitiveCollection],
  props: {
    modelMatrix: Object,
    debugShowBoundingVolume: {
      type: Boolean,
      default: false
    },
    scene: Object,
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
      const { Cesium, modelMatrix, debugShowBoundingVolume, scene, blendOption } = this
      let options = {
        modelMatrix,
        debugShowBoundingVolume,
        scene,
        blendOption
      }
      this.removeNullItem(options)
      let labelCollection = new Cesium.LabelCollection(options)
      return labelCollection
    }
  }
}
</script>
