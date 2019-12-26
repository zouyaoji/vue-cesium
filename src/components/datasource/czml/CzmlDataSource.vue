
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
      const { $props, transformProps } = this
      const options = transformProps($props)
      return Cesium.CzmlDataSource.load(options.czml, options.options)
    }
  }
}
</script>
