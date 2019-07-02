<script>
import primitiveCollection from '../../mixins/primitiveCollection'
export default {
  name: 'polyline-collection',
  mixins: [primitiveCollection],
  props: {
    modelMatrix: Object,
    debugShowBoundingVolume: {
      type: Boolean,
      default: false
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
      const { Cesium, modelMatrix, debugShowBoundingVolume } = this
      let options = {
        modelMatrix,
        debugShowBoundingVolume
      }
      this.removeNullItem(options)
      return new Cesium.PolylineCollection(options)
    }
  }
}
</script>
