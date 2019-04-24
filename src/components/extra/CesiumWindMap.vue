<script>
import mergeDescriptors from '../../util/mergeDescriptors'
import cmp from '../../mixins/virtualCmp'
import Wind3D from '../../libs/wind/wind3D.js'
export default {
  name: 'cesium-windmap',
  data () {
    return {
    }
  },
  mixins: [cmp],
  props: {
    windData: Object,
    particleSystemOptions: {
      type: Object,
      default: {
        maxParticles: 128 * 128,
        particleHeight: 100.0,
        fadeOpacity: 0.996,
        dropRate: 0.003,
        dropRateBump: 0.01,
        speedFactor: 4.0,
        lineWidth: 4.0
      }
    }
  },
  watch: {

  },
  methods: {
    createCesiumObject () {
      const { Cesium, viewer, particleSystemOptions } = this
      var demo = false
      const mode = { debug: !demo }
      let windMap = new Wind3D(
        Cesium,
        viewer,
        {
          dataDirectory: '/statics/data/',
          glslDirectory: '/statics/glsl/'
        },
        particleSystemOptions,
        mode
      )

      return windMap
    },
    mount () {
      // const { viewer, entity } = this
    },
    unload () {

    },

    getServices () {
      const vm = this
      return mergeDescriptors(
        cmp.methods.getServices.call(this),
        {
          get windMap () { return vm.windMap },
          get windMapContainer () { return vm }
        }
      )
    }

  },
  stubVNode: {
    attrs () {
      return {
        class: this.$options.name
      }
    }
  },
  created () {
    Object.defineProperties(this, {
      windMapInstance: {
        enumerable: true,
        get: () => this.$services && this.cesiumObject
      }
    })
  }
}
</script>
