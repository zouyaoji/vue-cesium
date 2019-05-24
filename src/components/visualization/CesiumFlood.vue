<template>
  <i style="display: none !important">
    <classification-primitive ref="primitive" :asynchronous="false" :show="extrudedHeight !== 0 && extrudedHeight !== ''">
      <geometry-instance :geometry.sync="geometry" :attributes="attributes">
        <polygon-geometry :polygonHierarchy="polygonHierarchy" :extrudedHeight="extrudedHeight"></polygon-geometry>
      </geometry-instance>
    </classification-primitive>
  </i>
</template>
<script>
import cmp from '../../mixins/virtualCmp'
export default {
  name: 'flood-anaysis',
  data () {
    return {
      geometry: null,
      attributes: null,
      extrudedHeight: 0.1,
      flooding: false,
      floodDone: false
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
    createCesiumObject () {
      const { Cesium, minHeight } = this
      this.attributes = {
        // eslint-disable-next-line new-cap
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 155))
      }
      this.extrudedHeight = minHeight
      return this.$refs.primitive.primitive
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
    mount () {
    },
    unload () {
      this.extrudedHeight = this.minHeight
      this.flooding = false
      this.$refs.primitive && this.$refs.primitive.unload()
    }
  },
  stubVNode: {
    empty () {
      return this.$options.name
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
