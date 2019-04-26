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
    data: Object,
    particleSystemOptions: {
      type: Object,
      default: function () {
        return {
          maxParticles: 128 * 128,
          particleHeight: 100.0,
          fadeOpacity: 0.996,
          dropRate: 0.003,
          dropRateBump: 0.01,
          speedFactor: 4.0,
          lineWidth: 4.0
        }
      }
    }
  },
  watch: {
    data (val) {
      this.reload()
    },
    particleSystemOptions: {
      handler (val) {
        this.windMap.particleSystem.applyParticleSystemOptions(val)
      },
      deep: true
    }
  },
  methods: {
    createCesiumObject () {
      const { viewer, particleSystemOptions } = this
      if (!this.isEmptyObj(this.data)) {
        let windMap = new Wind3D(
          viewer,
          this.data,
          particleSystemOptions
        )
        return windMap
      }
      return null
    },
    mount () {
      // const { viewer, entity } = this
    },
    unload () {
      if (!this.isEmptyObj(this.windMap)) {
        this.windMap.destroy()
      }
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
      windMap: {
        enumerable: true,
        get: () => this.$services && this.cesiumObject
      }
    })
  }
}
</script>
