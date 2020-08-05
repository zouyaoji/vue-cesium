<template>
  <i :class="$options.name" style="display: none !important">
    <vc-entity ref="entity">
      <vc-graphics-wall
        :material="material"
        :maximumHeights="maximumHeights"
        :minimumHeights="minimumHeights"
        :outline="outline"
        :positions="positions"
        :show="show"
      ></vc-graphics-wall>
    </vc-entity>
  </i>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import { positions, minimumHeights, maximumHeights, outline, show } from '../../../mixins/mixinProps'
import { makeColor } from '../../../utils/cesiumHelpers'
import PolylineTrailMaterialProperty from '../../../exts/materialProperty/PolylineTrailMaterialProperty'
export default {
  name: 'vc-trail-wall',
  mixins: [cmp, positions, minimumHeights, maximumHeights, outline, show],
  props: {
    color: {
      type: Object | String | Array,
      default: 'yellow'
    },
    interval: {
      type: Number,
      default: 3000
    },
    imageUrl: String,
    loop: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      nowaiting: true,
      material: {}
    }
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      const { color, imageUrl, interval, loop } = this
      const colorCesium = makeColor(color)
      this.material = new PolylineTrailMaterialProperty(colorCesium, interval, imageUrl, loop)
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
