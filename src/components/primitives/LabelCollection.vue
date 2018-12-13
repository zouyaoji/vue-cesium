<script>
import primitiveCollection from '../../mixins/primitiveCollection'
export default {
  name: 'label-collection',
  mixins: [primitiveCollection],
  props: {
    modelMatrix: {
      type: Object
    },
    debugShowBoundingVolume: {
      type: Boolean,
      default: false
    },
    scene: {
      type: Object
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
      const { Cesium, modelMatrix, debugShowBoundingVolume, scene, blendOption } = this
      let labelCollection = new Cesium.LabelCollection({
        modelMatrix: modelMatrix,
        debugShowBoundingVolume: debugShowBoundingVolume,
        scene: scene,
        blendOption: blendOption
      })
      return labelCollection
    }
  }
}
</script>
