<script>
import { data, options } from '../../../mixins/mixinProps'
import mixinDatasource from '../../../mixins/datasource/mixinDatasource'
export default {
  name: 'vc-datasource-geojson',
  mixins: [data, options, mixinDatasource],
  methods: {
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      return Cesium.GeoJsonDataSource.load(options.data, options.options)
    }
  }
}
</script>
