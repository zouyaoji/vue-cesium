<script>
import { credit, ellipsoid } from '../../../mixins/mixinProps'
import mixinDatasource from '../../../mixins/datasource/mixinDatasource'
export default {
  name: 'vc-datasource-kml',
  mixins: [credit, ellipsoid, mixinDatasource],
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
    }
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps, viewer } = this
      const options = transformProps($props)
      if (!options.camera) {
        options.camera = viewer.camera
      }
      if (!options.canvas) {
        options.canvas = viewer.canvas
      }
      return Cesium.KmlDataSource.load(options.data, options)
    }
  }
}
</script>
