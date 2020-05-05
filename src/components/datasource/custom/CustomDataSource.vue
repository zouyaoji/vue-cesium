<script>
import mixinDatasource from '../../../mixins/datasource/mixinDatasource'
export default {
  name: 'vc-datasource-custom',
  mixins: [mixinDatasource],
  props: {
    name: String,
    entities: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    /**
     *  重写 createCesiumObject 方法，支持用数组加载大量 entities
     */
    async createCesiumObject () {
      const { $props, transformProps, entities } = this
      const options = transformProps($props)
      const ds = new Cesium.CustomDataSource(options)

      entities.forEach(entity => {
        const entityOptions = transformProps(entity)
        ds.entities.add(entityOptions)
      })
      return ds
    }
  }
}
</script>
