<template>
  <i :class="$options.name" style="display: none !important">
    <vc-primitive-classification
      :asynchronous="false"
      :show="extrudedHeight !== 0"
      ref="primitive"
    >
      <vc-instance-geometry :attributes="attributes">
        <vc-geometry-polygon :extrudedHeight="extrudedHeight" :polygonHierarchy="polygonHierarchy"></vc-geometry-polygon>
      </vc-instance-geometry>
    </vc-primitive-classification>
    <!-- <vc-primitive
      :appearance="appearance"
      :asynchronous="false"
      :show="extrudedHeight !== 0 && extrudedHeight !== ''"
      ref="primitive"
    >
      <vc-instance-geometry>
        <vc-geometry-polygon :extrudedHeight="extrudedHeight" :polygonHierarchy="polygonHierarchy"></vc-geometry-polygon>
      </vc-instance-geometry>
    </vc-primitive> -->
  </i>
</template>
<script>
import cmp from '../../../mixins/virtualCmp'
import { makeColor } from '../../../utils/cesiumHelpers'

export default {
  name: 'vc-analytics-flood',
  data () {
    return {
      attributes: null,
      extrudedHeight: 0.1,
      flooding: false,
      appearance: null,
      vertexFormat: null,
      nowaiting: true
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
      type: [Object, Array, String],
      default: 'rgba(40,150,200,0.6)'
    }
  },
  watch: {
    flooding (val) {
      const listener = this.$listeners.activeEvt
      if (val) {
        if (this.floodDone) {
          this.extrudedHeight = this.extrudedHeight >= this.minHeight ? this.minHeight : 0.1
          this.floodDone = false
        }
        this._mounted = true
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
      const { buildModuleUrl, ColorGeometryInstanceAttribute, EllipsoidSurfaceAppearance, Material } = Cesium

      this.attributes = {
        color: ColorGeometryInstanceAttribute.fromColor(makeColor(color))
      }

      this.vertexFormat = EllipsoidSurfaceAppearance.VERTEX_FORMAT
      this.appearance = new EllipsoidSurfaceAppearance({
        material: new Material({
          fabric: {
            type: 'Water',
            uniforms: {
              normalMap: buildModuleUrl('Assets/Textures/waterNormals.jpg'),
              frequency: 1000.0,
              animationSpeed: 0.05,
              amplitude: 10.0
            }
          }
        })
      })
      this.extrudedHeight = minHeight
      return this.$refs.primitive.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
        if (!this.$refs.primitive._mounted) {
          return this.$refs.primitive.load().then(({ Cesium, viewer, cesiumObject }) => {
            return cesiumObject
          })
        } else {
          return cesiumObject
        }
      })
    },
    onTick () {
      const { maxHeight, speed } = this
      if (this.extrudedHeight < maxHeight) {
        this.extrudedHeight = this.extrudedHeight + speed / 12.0
      } else {
        this.floodDone = true
        this.flooding = false
      }
    },
    clear () {},
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
