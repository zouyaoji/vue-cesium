<script>
import mixinTerrainProvider from '../../../mixins/providers/mixinTerrainProvider'
export default {
  name: 'vc-provider-terrain-arcgis-tiled-elevation',
  mixins: [mixinTerrainProvider],
  props: {
    url: {
      type: String | Object,
      default: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
    },
    token: String,
    ellipsoid: Object
  }
}
</script>
