<script>
import mixinTerrainProvider from '../../../mixins/providers/mixinTerrainProvider'
export default {
  name: 'vc-provider-terrain-arcgis-tiled-elevation',
  mixins: [mixinTerrainProvider],
  props: {
    url: String | Object,
    token: String,
    ellipsoid: Object
  }
}
</script>
