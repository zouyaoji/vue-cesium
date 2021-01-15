<template>
  <i :class="$options.name" style="display: none !important">
    <vc-entity :position="position" :show="show" ref="entity1">
      <vc-graphics-ellipse
        :height="height"
        :material="material"
        :semiMajorAxis="radius1"
        :semiMinorAxis="radius1"
      ></vc-graphics-ellipse>
    </vc-entity>
    <vc-entity :position="position" :show="show" ref="entity2">
      <vc-graphics-ellipse
        :height="height"
        :material="material"
        :semiMajorAxis="radius2"
        :semiMinorAxis="radius2"
      ></vc-graphics-ellipse>
    </vc-entity>
  </i>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import { position, show, color, height } from '../../../mixins/mixinProps'
import { makeColor } from '../../../utils/cesiumHelpers'
export default {
  name: 'vc-ripple-circle-double',
  mixins: [cmp, position, show, color, height],
  props: {
    minRadius: {
      type: Number,
      default: 0.1
    },
    maxRadius: {
      type: Number,
      default: 3000
    },
    deviationRadius: {
      type: Number,
      default: 40
    },
    interval: {
      type: Number,
      default: 1000
    },
    imageUrl: String
  },
  data () {
    return {
      material: {},
      radius1: undefined,
      radius2: undefined,
      nowaiting: true
    }
  },
  mounted () {
    this.getParent(this.$parent).createPromise.then(({ Cesium, viewer }) => {
      this.init()
    })
  },
  methods: {
    async createCesiumObject () {
      return Promise.all([this.$refs.entity1.createPromise, this.$refs.entity2.createPromise]).then((entities) => {
        if (!this.$refs.entity1._mounted || !this.$refs.entity1._mounted) {
          this.init()
          return Promise.all([this.$refs.entity1.load(), this.$refs.entity2.load()]).then((entities) => {
            return entities
          })
        } else {
          return entities
        }
      })
    },
    init () {
      const { minRadius, maxRadius, imageUrl, interval, changeRadius1, changeRadius2, color } = this
      const cesiumColor = makeColor(color)
      this.r1 = minRadius
      this.r2 = minRadius
      this.material = {
        fabric: {
          type: 'Image',
          uniforms: {
            image: imageUrl,
            transparent: true,
            color: () => {
              return cesiumColor.withAlpha(1 - this.r1 / maxRadius) // entity的颜色透明 并不影响材质，并且 entity也会透明哦
            }
          }
        }
      }
      this.radius1 = changeRadius1
      setTimeout(() => {
        this.radius2 = changeRadius2
      }, interval)
    },
    async mount () {
      return true
    },
    async unmount () {
      this.radius1 = 0
      this.radius2 = 0
      return this.$refs.entity1 && this.$refs.entity2
        ? Promise.all([this.$refs.entity1.unload(), this.$refs.entity2.unload()])
        : true
    },
    changeRadius1 () {
      const { deviationRadius, maxRadius, minRadius } = this
      if (!this.flag1) {
        this.r1 += deviationRadius
        if (this.r1 >= maxRadius) {
          this.r1 = minRadius
        }
        this.flag1 = true
      } else {
        this.flag1 = false
      }

      return this.r1
    },
    changeRadius2 () {
      const { deviationRadius, maxRadius, minRadius } = this
      if (!this.flag2) {
        this.r2 += deviationRadius
        if (this.r2 >= maxRadius) {
          this.r2 = minRadius
        }

        this.flag2 = true
      } else {
        this.flag2 = false
      }
      return this.r2
    }
  },
  created () {
    Object.defineProperties(this, {
      entities: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  }
}
</script>
