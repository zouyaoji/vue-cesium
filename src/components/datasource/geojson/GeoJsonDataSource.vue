<script>
import mixinDatasource from '../../../mixins/datasource/mixinDatasource'
export default {
  name: 'vc-datasource-geojson',
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
          markerSize: 48,
          strokeWidth: 2,
          clampToGround: false
        }
      }
    }
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      return Cesium.GeoJsonDataSource.load(options.data, options.options)
    }
  }
}
</script>
