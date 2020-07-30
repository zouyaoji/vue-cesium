<template>
  <i :class="$options.name" style="display: none !important">
    <vc-entity :position="position" ref="entity1">
      <vc-graphics-ellipse :height="height" :material="material" :semiMajorAxis="radius1" :semiMinorAxis="radius1"></vc-graphics-ellipse>
    </vc-entity>
    <vc-entity :position="position" ref="entity2" v-if="showEntity2">
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
import { position } from '../../../mixins/mixinProps'
export default {
  name: 'vc-ripple-circle-double',
  mixins: [cmp, position],
  props: {
    height: {
      type: Number,
      default: undefined
    },
    minRadius: {
      type: Number,
      default: 0
    },
    maxRadius: {
      type: Number,
      default: 3000
    },
    deviationRadius: {
      type: Number,
      default: 20
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
      radius1: 0,
      radius2: 0,
      showEntity2: false,
      nowaiting: true
    }
  },
  mounted () {
    this._entity2Promise = new Promise((resolve, reject) => {
      this._resolve = resolve
      this._reject = reject
    })
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      const { minRadius, maxRadius, imageUrl, interval, changeRadius1, changeRadius2 } = this
      this.r1 = minRadius
      this.r2 = maxRadius
      this.material = {
        fabric: {
          type: 'Image',
          uniforms: {
            image: imageUrl,
            transparent: true,
            color: () => {
              return Cesium.Color.WHITE.withAlpha(1 - this.r1 / maxRadius) // entity的颜色透明 并不影响材质，并且 entity也会透明哦
            }
          }
        }
      }
      this.radius1 = new Cesium.CallbackProperty(changeRadius1, false)
      this.radius2 = new Cesium.CallbackProperty(changeRadius2, false)
      setTimeout(() => {
        this.showEntity2 = true
        this._resolve(true)
      }, interval)
    })
  },
  methods: {
    async createCesiumObject () {
      return this._entity2Promise.then(() => {
        return Promise.all([this.$refs.entity1.createPromise, this.$refs.entity2.createPromise]).then((entities) => {
          if (!this.$refs.entity1._mounted || !this.$refs.entity1._mounted) {
            return Promise.all([this.$refs.entity1.load(), this.$refs.entity2.load()]).then((entities) => {
              return entities
            })
          } else {
            return entities
          }
        })
      })
    },
    async mount () {
      return true
    },
    async unmount () {
      return this.$refs.entity1 && this.$refs.entity2 ? Promise.all([this.$refs.entity1.unload(), this.$refs.entity2.unload()]) : true
    },
    changeRadius1 () {
      const { deviationRadius, maxRadius, minRadius } = this
      this.r1 += deviationRadius
      if (this.r1 >= maxRadius) {
        this.r1 = minRadius
      }
      return this.r1
    },
    changeRadius2 () {
      const { deviationRadius, maxRadius, minRadius } = this
      this.r2 += deviationRadius
      if (this.r2 >= maxRadius) {
        this.r2 = minRadius
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
