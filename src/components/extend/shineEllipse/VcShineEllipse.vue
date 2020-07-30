<template>
  <i :class="$options.name" style="display: none !important">
    <vc-entity :position="position" ref="entity">
      <vc-graphics-ellipse :height="height" :material="material" :semiMajorAxis="radius" :semiMinorAxis="radius"></vc-graphics-ellipse>
    </vc-entity>
  </i>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import { position, color } from '../../../mixins/mixinProps'
import { makeColor } from '../../../utils/cesiumHelpers'
export default {
  name: 'vc-shine-ellipse',
  mixins: [cmp, position, color],
  props: {
    height: {
      type: Number,
      default: undefined
    },
    radius: {
      type: Number,
      default: 2000
    },
    deviationAlpha: {
      type: Number,
      default: 0.05
    },
    imageUrl: String
  },
  data () {
    return {
      nowaiting: true,
      material: {}
    }
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      const { deviationAlpha, color, imageUrl } = this
      const colorObject = makeColor(color)
      this.flag = true
      this.x = 1
      this.material = {
        fabric: {
          type: 'Image',
          uniforms: {
            image: imageUrl,
            color: () => {
              if (this.flag) {
                this.x -= deviationAlpha
                this.x <= 0 && (this.flag = false)
              } else {
                this.x += deviationAlpha
                this.x >= 1 && (this.flag = true)
              }
              return colorObject.withAlpha(this.x)
            }
          }
        }
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
