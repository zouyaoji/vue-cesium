<script>
import cmp from '../../../mixins/virtualCmp'
import colorTable from '../../../exts/wind/colorTable'
import Wind3D from '../../../exts/wind/wind3D'
export default {
  name: 'vc-windmap',
  mixins: [cmp],
  props: {
    data: Object,
    colorTable: {
      type: Object,
      default: () => {
        return colorTable
      }
    },
    particleSystemOptions: {
      type: Object,
      default: function () {
        return {
          particlesTextureSize: 128,
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
    async createCesiumObject () {
      const { viewer, particleSystemOptions } = this
      if (!this.isEmptyObj(this.data)) {
        this.data.colorTable = this.loadColorTable()
        const windMap = new Wind3D(viewer, this.data, particleSystemOptions)
        return windMap
      }
      return true
    },
    loadColorTable () {
      const json = this.colorTable
      const colorNum = json.ncolors
      const colorTable = json.colorTable
      const colorsArray = new Float32Array(3 * colorNum)
      for (let i = 0; i < colorNum; i++) {
        colorsArray[3 * i] = colorTable[3 * i]
        colorsArray[3 * i + 1] = colorTable[3 * i + 1]
        colorsArray[3 * i + 2] = colorTable[3 * i + 2]
      }
      const result = {}
      result.colorNum = colorNum
      result.array = colorsArray
      return result
    },
    async mount () {
      return true
    },
    async unmount () {
      if (!this.isEmptyObj(this.windMap)) {
        this.windMap.destroy()
      }
      return true
    }
  },
  stubVNode: {
    empty () {
      return this.$options.name
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
