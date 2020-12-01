<script>
import mixinDatasource from '../../../mixins/datasource/mixinDatasource'
export default {
  name: 'vc-datasource-custom',
  mixins: [mixinDatasource],
  props: {
    name: String
  },
  methods: {
    /**
     *  重写 createCesiumObject 方法
     */
    async createCesiumObject () {
      const { name } = this
      const ds = new Cesium.CustomDataSource(name)
      return ds
    }
  }
}
</script>
