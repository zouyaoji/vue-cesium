<template>
  <div class="leaflet-control-minimap" id="overview" ref="leafletContainer"></div>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import CesiumOverviewMapControl from '../../../exts/overviewMapControl/CesiumOverviewMapControl'
import '../../../assets/styles/components/overviewmap.scss'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
export default {
  name: 'vc-map-overview',
  mixins: [cmp],
  props: {
  },
  data () {
    return {
      nowaiting: true
    }
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {

    })
  },
  methods: {
    async createCesiumObject () {
      const { viewer } = this
      var url = 'https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}'
      var layer = new L.TileLayer(url, {
        minZoom: 0,
        maxZoom: 20
      })
      var container = this.$refs.leafletContainer
      var options = {
        container: container,
        toggleDisplay: true,
        width: 150,
        height: 150,
        position: 'topright',
        aimingRectOptions: {
          color: '#ff1100',
          weight: 3
        },
        shadowRectOptions: {
          color: '#0000AA',
          weight: 1,
          opacity: 0,
          fillOpacity: 0
        }
      }
      return new CesiumOverviewMapControl(viewer, layer, options)
    },
    async mount () {
      return true
    },
    async unmount () {
      return true
    }
  },
  created () {
    Object.defineProperties(this, {
      element: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  }
}
</script>
