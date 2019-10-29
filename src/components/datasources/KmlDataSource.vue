<script>
import datasourceMinix from '../../mixins/datasource/datasourceMinix'
export default {
  name: 'vc-datasource-kml',
  mixins: [ datasourceMinix ],
  props: {
    data: {
      type: String | Object,
      required: true
    },
    camera: Object,
    canvas: Object,
    sourceUri: String,
    clampToGround: {
      type: Boolean,
      default: false
    },
    ellipsoid: Object,
    credit: String | Object
  },
  methods: {
    createCesiumObject () {
      const { data, makeOptions, viewer } = this
      let options = makeOptions()
      options.camera = Cesium.defaultValue(options.camera, viewer.scene.camera)
      options.canvas = Cesium.defaultValue(options.canvas, viewer.scene.canvas)
      this.removeNullItem(options)
      return Cesium.KmlDataSource.load(data, options)
    },
    makeOptions () {
      const { camera, canvas, sourceUri, clampToGround, ellipsoid, credit } = this
      let options = {
        camera,
        canvas,
        sourceUri,
        clampToGround,
        ellipsoid,
        credit
      }
      return options
    }
  }
}
</script>
