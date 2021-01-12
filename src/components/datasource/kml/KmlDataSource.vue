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
