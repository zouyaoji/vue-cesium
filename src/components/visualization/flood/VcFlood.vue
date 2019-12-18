<template>
  <i :class="$options.name" style="display: none !important">
    <vc-primitive-classification
      :appearance="appearance"
      :asynchronous="false"
      :show="extrudedHeight !== 0 && extrudedHeight !== ''"
      ref="primitive"
    >
      <vc-instance-geometry :attributes="attributes" :geometry.sync="geometry">
        <vc-geometry-polygon :extrudedHeight="extrudedHeight" :polygonHierarchy="polygonHierarchy"></vc-geometry-polygon>
      </vc-instance-geometry>
    </vc-primitive-classification>
  </i>
</template>
<script>
import cmp from '../../../mixins/virtualCmp'
import { makeColor } from '../../../utils/util'

export default {
  name: 'vc-analytics-flood',
  data () {
    return {
      geometry: null,
      attributes: null,
      extrudedHeight: 0.1,
      flooding: false,
      floodDone: false,
      appearance: null
    }
  },
  mixins: [cmp],
  props: {
    minHeight: {
      type: Number,
      default: 0
    },
    maxHeight: Number,
    polygonHierarchy: Array,
    speed: {
      type: Number,
      default: 10
    },
    color: {
      type: Object | Array | String,
      default: 'rgba(40,150,200,0.6)'
    }
  },
  watch: {
    flooding (val) {
      const listener = this.$listeners['activeEvt']
      if (val) {
        if (this.floodDone) {
          this.extrudedHeight = this.extrudedHeight >= this.minHeight ? this.minHeight : 0.1
          this.floodDone = false
        }
        this.viewer.clock.onTick.addEventListener(this.onTick)
        listener && this.$emit('activeEvt', { isActive: val })
      } else {
        this.viewer.clock.onTick.removeEventListener(this.onTick)
        listener && this.$emit('activeEvt', { isActive: val })
      }
    },
    minHeight (val) {
      this.extrudedHeight = val
    }
  },
  methods: {
    async createCesiumObject () {
      const { Cesium, minHeight, color } = this
      this.attributes = {
        // eslint-disable-next-line new-cap
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(makeColor(color))
      }
      this.extrudedHeight = minHeight
      return true
    },
    onTick () {
      const { maxHeight, speed } = this
      if (this.extrudedHeight < maxHeight) {
        this.extrudedHeight = this.extrudedHeight + speed
      } else {
        this.floodDone = true
        this.flooding = false
      }
    },
    async mount () {
      return true
    },
    async unmount () {
      this.extrudedHeight = this.minHeight
      this.flooding = false
      this.$refs.primitive && this.$refs.primitive.unload()
    }
  },
  created () {
    Object.defineProperties(this, {
      floodObject: {
        enumerable: true,
        get: () => this.$services && this.cesiumObject
      }
    })
  }
}
</script>
