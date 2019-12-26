<script>
import mixinDatasource from '../../../mixins/datasource/mixinDatasource'
export default {
  name: 'vc-datasource-kml',
  mixins: [mixinDatasource],
  props: {
    data: {
      type: String | Object,
      required: true
    },
    options: {
      type: Object,
      default: () => {
        return {
          clampToGround: false
        }
      }
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
      return Cesium.KmlDataSource.load(options.data, options.options)
    }
  }
}
</script>
