<script>
import { url } from '../../../mixins/mixinProps'
import mixinTerrainProvider from '../../../mixins/providers/mixinTerrainProvider'
export default {
  name: 'VcProviderTerrainCesium',
  mixins: [url, mixinTerrainProvider],
  props: {
    requestVertexNormals: Boolean,
    requestWaterMask: Boolean,
    requestMetadata: Boolean,
    ellipsoid: Object,
    credit: [String, Object]
  },
  methods: {
    /**
     * 重写 createCesiumObject 方法。
     */
    async createCesiumObject () {
      const { url, requestVertexNormals, requestWaterMask, requestMetadata, ellipsoid, credit } = this
      const options = {
        url,
        requestVertexNormals,
        requestWaterMask,
        requestMetadata,
        ellipsoid,
        credit
      }
      this.removeNullItem(options)
      return options.url
        ? new Cesium.CesiumTerrainProvider(options)
        : Cesium.createWorldTerrain({ requestVertexNormals, requestWaterMask })
    }
  }
}
</script>
