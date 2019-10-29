<script>
import datasourceMinix from '../../mixins/datasource/datasourceMinix'
export default {
  name: 'vc-datasource-custom',
  mixins: [ datasourceMinix ],
  props: {
    name: String
  },
  methods: {
    async createCesiumObject () {
      const { makeOptions } = this
      return new Cesium.CustomDataSource(makeOptions())
    },
    makeOptions () {
      const { name } = this
      let options = {
        name
      }
      this.removeNullItem(options)
      return options
    }
  }
}
</script>
