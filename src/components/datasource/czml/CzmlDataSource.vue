
<script>
import mixinDatasource from '../../../mixins/datasource/mixinDatasource'
export default {
  name: 'vc-datasource-czml',
  mixins: [mixinDatasource],
  props: {
    czml: {
      type: String | Object,
      required: true
    },
    options: Object
  },
  methods: {
    async createCesiumObject () {
      const { czml, options } = this
      return Cesium.CzmlDataSource.load(czml, options)
    }
  }
}
</script>
