<script>
import { credit } from '../../../mixins/mixinProps'
import mixinDatasource from '../../../mixins/datasource/mixinDatasource'
export default {
  name: 'vc-datasource-geojson',
  mixins: [credit, mixinDatasource],
  props: {
    data: {
      type: String | Object,
      required: true
    },
    sourceUri: String,
    markerSize: {
      type: Number,
      default: 48
    },
    markerSymbol: String,
    markerColor: Object | Array | String,
    stroke: Object | Array | String,
    strokeWidth: {
      type: Number,
      default: 2
    },
    fill: Object | Array | String,
    clampToGround: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      return Cesium.GeoJsonDataSource.load(options.data, options)
    }
  }
}
</script>
