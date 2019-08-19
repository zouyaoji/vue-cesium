<script>
import cmp from '../../mixins/virtualCmp.js'
export default {
  name: 'cesium-terrain-provider',
  mixins: [cmp],
  props: {
    url: String,
    requestVertexNormals: Boolean,
    requestWaterMask: Boolean,
    requestMetadata: Boolean,
    ellipsoid: Object,
    credit: String | Object
  },
  watch: {
    url () {
      this.reload()
    },
    requestVertexNormals (val) {
      this.terrainProvider.requestVertexNormals = val
    },
    requestWaterMask (val) {
      this.terrainProvider.requestWaterMask = val
    },
    requestMetadata (val) {
      this.terrainProvider.requestMetadata = val
    },
    ellipsoid () {
      this.reload()
    },
    credit () {
      this.reload()
    }
  },
  methods: {
    createCesiumObject () {
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
    },
    mount () {
      const { viewer, terrainProvider } = this
      viewer.terrainProvider = terrainProvider
    },
    unload () {
      const { Cesium, viewer } = this
      viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider()
    }
  },
  created () {
    Object.defineProperties(this, {
      terrainProvider: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  },
  stubVNode: {
    empty () {
      return this.$options.name
    }
  }
}
</script>
