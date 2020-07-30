<template>
  <i :class="$options.name" style="display: none !important">
    <vc-entity :position="position" ref="entity">
      <vc-graphics-point
        :color="callBackColor"
        :heightReference="2"
        :outlineWidth="0"
        :pixelSize="pixelSize"
      ></vc-graphics-point>
    </vc-entity>
  </i>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import { position, color } from '../../../mixins/mixinProps'
import { makeColor } from '../../../utils/cesiumHelpers'
export default {
  name: 'vc-shine-point',
  mixins: [cmp, position, color],
  props: {
    pixelSize: {
      type: Number,
      default: 10
    },
    deviationAlpha: {
      type: Number,
      default: 0.05
    }
  },
  data () {
    return {
      nowaiting: true,
      callBackColor: {}
    }
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      const { deviationAlpha, color } = this
      const colorObject = makeColor(color)
      this.flag = true
      this.x = 1
      this.callBackColor = () => {
        if (this.flag) {
          this.x -= deviationAlpha
          this.x <= 0 && (this.flag = false)
        } else {
          this.x += deviationAlpha
          this.x >= 1 && (this.flag = true)
        }
        return colorObject.withAlpha(this.x)
      }
    })
  },
  methods: {
    async createCesiumObject () {
      return this.$refs.entity.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
        if (!this.$refs.entity._mounted) {
          return this.$refs.entity.load().then(({ Cesium, viewer, cesiumObject }) => {
            return cesiumObject
          })
        } else {
          return cesiumObject
        }
      })
    },
    async mount () {
      return true
    },
    async unmount () {
      return this.$refs.entity && this.$refs.entity.unload()
    }
  },
  created () {
    Object.defineProperties(this, {
      entity: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  }
}
</script>
