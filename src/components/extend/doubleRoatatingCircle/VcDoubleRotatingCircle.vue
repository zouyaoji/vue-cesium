<template>
  <i :class="$options.name" style="display: none !important">
    <vc-entity :position="position" :show="show" ref="entity1">
      <vc-graphics-ellipse
        :height="height"
        :material="material1"
        :rotation="rotation1"
        :semiMajorAxis="r1"
        :semiMinorAxis="r1"
        :stRotation="stRotation1"
      ></vc-graphics-ellipse>
    </vc-entity>
    <vc-entity :position="position" :show="show" ref="entity2">
      <vc-graphics-ellipse
        :height="height"
        :material="material2"
        :rotation="rotation2"
        :semiMajorAxis="r2"
        :semiMinorAxis="r2"
        :stRotation="stRotation2"
      ></vc-graphics-ellipse>
    </vc-entity>
  </i>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import { position, show } from '../../../mixins/mixinProps'
export default {
  name: 'vc-circle-roatating-double',
  mixins: [cmp, position, show],
  props: {
    height: {
      type: Number,
      default: undefined
    },
    radius1: {
      type: Number,
      default: 1500
    },
    radius2: {
      type: Number,
      default: 3000
    },
    material1: Object | String | Array,
    material2: Object | String | Array,
    deviationRotation1: {
      type: Number,
      default: -0.03
    },
    deviationRotation2: {
      type: Number,
      default: 0.05
    }
  },
  data () {
    return {
      r1: 0,
      r2: 0,
      rotation1: 0,
      stRotation1: 0,
      rotation2: 0,
      stRotation2: 0,
      nowaiting: true
    }
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      this.init()
    })
  },
  methods: {
    async createCesiumObject () {
      return Promise.all([this.$refs.entity1.createPromise, this.$refs.entity2.createPromise]).then((entities) => {
        if (!this.$refs.entity1._mounted || !this.$refs.entity1._mounted) {
          return Promise.all([this.$refs.entity1.load(), this.$refs.entity2.load()]).then((entities) => {
            this.init()
            return entities
          })
        } else {
          return entities
        }
      })
    },
    init () {
      const { deviationRotation1, deviationRotation2, radius1, radius2 } = this
      let scratchR1 = 0.01
      let scratchR2 = 0.01
      let startFlag = false
      setTimeout(() => {
        startFlag = true
      })
      this.r1 = new Cesium.CallbackProperty(() => {
        if (startFlag) {
          scratchR1 += radius1 / 20
          if (scratchR1 >= radius1) {
            scratchR1 = radius1
          }
        }
        return scratchR1
      }, false)

      this.r2 = new Cesium.CallbackProperty(() => {
        if (startFlag) {
          scratchR2 += radius2 / 20
          if (scratchR2 >= radius2) {
            scratchR2 = radius2
          }
        }
        return scratchR2
      }, false)

      let startrotation1 = Cesium.Math.toRadians(30)
      this.rotation1 = new Cesium.CallbackProperty(() => {
        startrotation1 += deviationRotation1
        return startrotation1
      }, false)
      this.stRotation1 = new Cesium.CallbackProperty(() => {
        startrotation1 += deviationRotation1
        return startrotation1
      }, false)

      let startrotation2 = Cesium.Math.toRadians(30)
      this.rotation2 = new Cesium.CallbackProperty(() => {
        startrotation2 += deviationRotation2
        return startrotation2
      }, false)
      this.stRotation2 = new Cesium.CallbackProperty(() => {
        startrotation2 += deviationRotation2
        return startrotation2
      }, false)
    },
    async mount () {
      return true
    },
    async unmount () {
      this.r1 = undefined
      this.r2 = undefined
      this.rotation1 = undefined
      this.rotation2 = undefined
      this.stRotation1 = undefined
      this.stRotation2 = undefined
      return this.$refs.entity1 && this.$refs.entity2 ? Promise.all([this.$refs.entity1.unload(), this.$refs.entity2.unload()]) : true
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
