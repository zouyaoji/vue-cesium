<script>
import colorTable from '../../libs/wind/colorTable.js'
import cmp from '../../mixins/virtualCmp'
import Wind3D from '../../libs/wind/wind3D.js'
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
    createCesiumObject () {
      const { viewer, particleSystemOptions } = this
      if (!this.isEmptyObj(this.data)) {
        this.data.colorTable = this.loadColorTable()
        let windMap = new Wind3D(
          viewer,
          this.data,
          particleSystemOptions
        )
        return windMap
      }
      return null
    },
    loadColorTable () {
      let json = this.colorTable
      let colorNum = json['ncolors']
      let colorTable = json['colorTable']
      let colorsArray = new Float32Array(3 * colorNum)
      for (let i = 0; i < colorNum; i++) {
        colorsArray[3 * i] = colorTable[3 * i]
        colorsArray[3 * i + 1] = colorTable[3 * i + 1]
        colorsArray[3 * i + 2] = colorTable[3 * i + 2]
      }
      let result = {}
      result.colorNum = colorNum
      result.array = colorsArray
      return result
    },
    mount () {
    },
    unload () {
      if (!this.isEmptyObj(this.windMap)) {
        this.windMap.destroy()
      }
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
