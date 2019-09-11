<script>
import datasourceMinix from '../../mixins/datasource/datasourceMinix'
export default {
  name: 'kml-datasource',
  mixins: [ datasourceMinix ],
  props: {
    data: {
      type: String | Object,
      required: true
    },
    camera: Object,
    canvas: Object,
    sourceUri: String,
    ellipsoid: Object
  },
  methods: {
    createCesiumObject () {
      const { data, makeOptions } = this
      return Cesium.KmlDataSource.load(data, makeOptions())
    },
    makeOptions () {
      const { camera, canvas, sourceUri, ellipsoid } = this
      let options = {
        camera, canvas, sourceUri, ellipsoid
      }
      return options
    }
  }
}
</script>
