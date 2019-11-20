<script>
import cmp from '../../mixins/virtualCmp.js'
export default {
  name: 'vc-post-process-stage',
  mixins: [cmp],
  props: {
    fragmentShader: String,
    uniforms: Object,
    textureScale: {
      type: Number
    },
    forcePowerOfTwo: {
      type: false
    },
    sampleMode: Number,
    pixelFormat: Number,
    pixelDatatype: Number,
    clearColor: Object | Array | String,
    scissorRectangle: Object,
    name: String
  },
  computed: {
    changeProps () {
      return this.makeOptions()
    }
  },
  watch: {
    changeProps: {
      handler () {
        this.reload()
      },
      deep: true
    }
  },
  methods: {
    createCesiumObject () {
      let options = this.makeOptions()

      this.removeNullItem(options)
      return new Cesium.PostProcessStage(options)
    },
    makeOptions () {
      const { fragmentShader, uniforms, textureScale, forcePowerOfTwo, sampleMode, pixelFormat,
        pixelDatatype, clearColor, scissorRectangle, name } = this
      let options = {
        fragmentShader,
        uniforms,
        textureScale,
        forcePowerOfTwo,
        sampleMode,
        pixelFormat,
        pixelDatatype,
        clearColor,
        scissorRectangle,
        name
      }
      this.removeNullItem(options)
      return options
    },
    mount () {
      const { viewer, postProcessStage } = this
      viewer.scene.postProcessStages.add(postProcessStage)
    },
    unload () {
      const { viewer, postProcessStage } = this
      viewer.scene.postProcessStages.remove(postProcessStage)
    }
  },
  created () {
    Object.defineProperties(this, {
      postProcessStage: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  },
  stubVNode: {
    attrs () {
      return {
        class: this.$options.name
      }
    }
  }
}
</script>
