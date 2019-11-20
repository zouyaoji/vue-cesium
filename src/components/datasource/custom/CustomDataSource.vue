<script>
import mixinDatasource from '../../../mixins/datasource/mixinDatasource'
export default {
  name: 'vc-datasource-custom',
  mixins: [mixinDatasource],
  props: {
    name: String
  }
}
</script>
