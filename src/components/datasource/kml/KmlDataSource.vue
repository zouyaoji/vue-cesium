<script>
import { data, options } from '../../../mixins/mixinProps'
import mixinDatasource from '../../../mixins/datasource/mixinDatasource'
export default {
  name: 'vc-datasource-kml',
  mixins: [data, options, mixinDatasource],
  methods: {
    async createCesiumObject () {
      const { $props, transformProps, viewer } = this
      const options = transformProps($props)
      options.options = options.options || {}
      if (!options.options.camera) {
        options.options.camera = viewer.camera
      }
      if (!options.options.canvas) {
        options.options.canvas = viewer.canvas
      }
      return Cesium.KmlDataSource.load(options.data, options.options)
    }
  }
}
</script>
