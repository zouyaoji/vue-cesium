<script>
import cmp from '../../mixins/virtualCmp.js'
export default {
  name: 'arcgis-tiledelevation-terrain-provider',
  mixins: [cmp],
  props: {
    url: String | Object,
    token: String,
    ellipsoid: Object
  },
  watch: {
    url () {
      this.reload()
    },
    token () {
      this.reload()
    },
    credit () {
      this.reload()
    }
  },
  methods: {
    createCesiumObject () {
      const { url, token, ellipsoid } = this
      let options = {
        url,
        token,
        ellipsoid
      }

      this.removeNullItem(options)
      return new Cesium.ArcGISTiledElevationTerrainProvider(options)
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
