<script>
import primitiveCollection from '../../mixins/primitiveCollection'
export default {
  name: 'polyline-collection',
  mixins: [primitiveCollection],
  props: {
    modelMatrix: {
      type: Object
    },
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
      let polylineCollection = new Cesium.PolylineCollection({
        modelMatrix: modelMatrix,
        debugShowBoundingVolume: debugShowBoundingVolume
      })
      return polylineCollection
    }
  }
}
</script>
