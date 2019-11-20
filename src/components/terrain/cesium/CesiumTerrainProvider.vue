<script>
import mixinTerrainProvider from '../../../mixins/providers/mixinTerrainProvider'
export default {
  name: 'vc-provider-terrain-cesium',
  mixins: [mixinTerrainProvider],
  props: {
    url: String | Object,
    requestVertexNormals: Boolean,
    requestWaterMask: Boolean,
    requestMetadata: Boolean,
    ellipsoid: Object,
    credit: String | Object
  },
  methods: {
    /**
     * 重写 createCesiumObject 方法。
     */
    async createCesiumObject () {
      const { url, requestVertexNormals, requestWaterMask, requestMetadata, ellipsoid, credit } = this
      let options = {
        url,
        requestVertexNormals,
        requestWaterMask,
        requestMetadata,
        ellipsoid,
        credit
      }
      this.removeNullItem(options)
      return options.url ? new Cesium.CesiumTerrainProvider(options) : Cesium.createWorldTerrain({ requestVertexNormals, requestWaterMask })
    }
  }
}
</script>
