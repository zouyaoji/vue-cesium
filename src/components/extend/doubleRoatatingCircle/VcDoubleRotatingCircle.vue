<template>
  <i :class="$options.name" style="display: none !important">
    <vc-entity :position="position" :show="show" ref="entity1">
      <vc-graphics-ellipse
        :height="height"
        :material="material1"
        :rotation="rotation1"
        :semiMajorAxis="radius1"
        :semiMinorAxis="radius1"
        :stRotation="stRotation1"
      ></vc-graphics-ellipse>
    </vc-entity>
    <vc-entity :position="position" :show="show" ref="entity2">
      <vc-graphics-ellipse
        :height="height"
        :material="material2"
        :rotation="rotation2"
        :semiMajorAxis="radius2"
        :semiMinorAxis="radius2"
        :stRotation="stRotation2"
      ></vc-graphics-ellipse>
    </vc-entity>
  </i>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import { position, show, height } from '../../../mixins/mixinProps'
export default {
  name: 'vc-circle-roatating-double',
  mixins: [cmp, position, show, height],
  props: {
    radius1: {
      type: Number,
      default: 1500
    },
    radius2: {
      type: Number,
      default: 3000
    },
    material1: [Object, String, Array],
    material2: [Object, String, Array],
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
      rotation1: 0,
      stRotation1: 0,
      rotation2: 0,
      stRotation2: 0,
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
      const { deviationRotation1, deviationRotation2 } = this

      let startrotation1 = Cesium.Math.toRadians(30)
      const getRotationValue1 = () => {
        startrotation1 += deviationRotation1
        return startrotation1
      }
      this.rotation1 = getRotationValue1
      this.stRotation1 = getRotationValue1

      let startrotation2 = Cesium.Math.toRadians(30)

      const getRotationValue2 = () => {
        startrotation2 += deviationRotation2
        return startrotation2
      }
      this.rotation2 = getRotationValue2
      this.stRotation2 = getRotationValue2
    },
    async mount () {
      return true
    },
    async unmount () {
      this.rotation1 = undefined
      this.rotation2 = undefined
      this.stRotation1 = undefined
      this.stRotation2 = undefined
      return this.$refs.entity1 && this.$refs.entity2
        ? Promise.all([this.$refs.entity1.unload(), this.$refs.entity2.unload()])
        : true
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
