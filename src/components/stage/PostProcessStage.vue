<script>
import {
  clearColor,
  scissorRectangle
} from '../../mixins/mixinProps'
import cmp from '../../mixins/virtualCmp'
export default {
  name: 'vc-stage-process-post',
  mixins: [clearColor, scissorRectangle, cmp],
  props: {
    fragmentShader: String,
    uniforms: Object,
    textureScale: {
      type: Number
    },
    forcePowerOfTwo: {
      type: Boolean,
      default: false
    },
    sampleMode: Number,
    pixelFormat: Number,
    pixelDatatype: Number,
    name: String
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      return new Cesium.PostProcessStage(options)
    },
    async mount () {
      const { postProcessStages, postProcessStage } = this
      return postProcessStages.add(postProcessStage)
    },
    async unmount () {
      const { postProcessStages, postProcessStage } = this
      return postProcessStages.remove(postProcessStage)
    }
  },
  created () {
    Object.defineProperties(this, {
      postProcessStage: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      postProcessStages: {
        enumerable: true,
        get: () => this.$services && this.$services.postProcessStages
      }
    })
  },
  stubVNode: {
    empty () {
      return this.$options.name
    }
  }
}
</script>
