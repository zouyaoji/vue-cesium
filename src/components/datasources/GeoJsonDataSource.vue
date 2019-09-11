<script>
import datasourceMinix from '../../mixins/datasource/datasourceMinix'
import { makeColor } from '../../util/util'
export default {
  name: 'geojson-datasource',
  mixins: [ datasourceMinix ],
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
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    createCesiumObject () {
      const { data, makeOptions } = this
      return Cesium.GeoJsonDataSource.load(data, makeOptions())
    },
    makeOptions () {
      const { sourceUri, markerSize, markerSymbol, markerColor, stroke, strokeWidth, fill, clampToGround } = this
      let options = {
        sourceUri,
        markerSize,
        markerSymbol,
        markerColor: makeColor(markerColor),
        stroke: makeColor(stroke),
        strokeWidth,
        fill: makeColor(fill),
        clampToGround
      }
      return options
    }
  }
}
</script>
