<script>
import datasourceMinix from '../../mixins/datasource/datasourceMinix'
export default {
  name: 'custom-datasource',
  mixins: [ datasourceMinix ],
  props: {
    name: String
  },
  methods: {
    createCesiumObject () {
      const { makeOptions } = this
      return new Cesium.CustomDataSource(makeOptions())
    },
    makeOptions () {
      const { name } = this
      let options = {
        name
      }
      return options
    }
  }
}
</script>
