<script>
import geometryMixin from '@/mixins/geometry/geometryMixin'
import { makeCartesian3 } from '@/util/util'
export default {
  name: 'box-geometry',
  mixins: [geometryMixin],
  props: {
    dimensions: Object | Array,
    vertexFormat: Object
  },
  methods: {
    createCesiumObject () {
      return Cesium.BoxGeometry.fromDimensions(this.makeOptions())
    },
    makeOptions () {
      const { dimensions, vertexFormat } = this
      let options = {
        dimensions: makeCartesian3(dimensions),
        vertexFormat
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
