<script>
import datasourceMinix from '../../mixins/datasource/datasourceMinix'
export default {
  name: 'vc-datasource-czml',
  mixins: [ datasourceMinix ],
  props: {
    czml: {
      type: String | Object,
      required: true
    },
    sourceUri: String
  },
  methods: {
    async createCesiumObject () {
      const { czml, makeOptions } = this
      return Cesium.CzmlDataSource.load(czml, makeOptions())
    },
    makeOptions () {
      const { sourceUri } = this
      let options = {
        sourceUri
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
