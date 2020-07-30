<template>
  <i :class="$options.name" style="display: none !important">
    <vc-entity ref="entity">
      <vc-graphics-polyline
        :width="width"
        :clampToGround="clampToGround"
        :material="material"
        :positions="positions"
      ></vc-graphics-polyline>
    </vc-entity>
  </i>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import { positions, width } from '../../../mixins/mixinProps'
import { makeColor } from '../../../utils/cesiumHelpers'
import PolylineTrailMaterialProperty from '../../../exts/materialProperty/PolylineTrailMaterialProperty'
export default {
  name: 'vc-trail-polyline',
  mixins: [cmp, positions, width],
  props: {
    clampToGround: {
      type: Boolean,
      default: true
    },
    color: {
      type: Object | String | Array,
      default: 'yellow'
    },
    interval: {
      type: Number,
      default: 3000
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
    console.log('a')
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      const { color, imageUrl, interval } = this
      const colorCesium = makeColor(color)
      const data = {}
      data.flowImage = imageUrl
      Cesium.PolylineTrailMaterialProperty = PolylineTrailMaterialProperty
      this.material = new Cesium.PolylineTrailMaterialProperty(colorCesium, interval, imageUrl)
    })
  },
  methods: {
    async createCesiumObject () {
      return this.$refs.entity.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
        return cesiumObject
      })
    },
    async mount () {
      return true
    },
    async unmount () {
      return true
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
