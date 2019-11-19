
<script>
import { credit } from '../../../mixins/mixinProps'
import mixinDatasource from '../../../mixins/datasource/mixinDatasource'
export default {
  name: 'vc-datasource-czml',
  mixins: [credit, mixinDatasource],
  props: {
    czml: {
      type: String | Object,
      required: true
    },
    sourceUri: String
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      return Cesium.CzmlDataSource.load(options.czml, options)
    }
  }
}
</script>
