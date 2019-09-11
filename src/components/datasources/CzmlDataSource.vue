<script>
import datasourceMinix from '../../mixins/datasource/datasourceMinix'
export default {
  name: 'czml-datasource',
  mixins: [ datasourceMinix ],
  props: {
    czml: {
      type: String | Object,
      required: true
    },
    sourceUri: String
  },
  methods: {
    createCesiumObject () {
      const { czml, makeOptions } = this
      return Cesium.CzmlDataSource.load(czml, makeOptions())
    },
    makeOptions () {
      const { sourceUri } = this
      let options = {
        sourceUri
      }
      return options
    }
  }
}
</script>
