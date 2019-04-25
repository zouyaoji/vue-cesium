
import services from './services'
const VM_PROP = 'vm'
const getParent = $component => $component.abstract || $component.$el === $component.$children[0].$el ? getParent($component.$parent) : $component
/**
 * @vueProps
 */
const props = {}
/**
 * @vueMethods
 */
const methods = {
  load () {
    const $parent = getParent(this.$parent)
    const Cesium = (this.Cesium = $parent.Cesium)
    const viewer = (this.viewer = $parent.viewer)
    this.originInstance = this.createCesiumObject()
    this.mount()
    this.$emit('ready', { Cesium, viewer })
  },
  createCesiumObject () {
    throw new Error('Not implemented method')
  },
  mount () {
    throw new Error('Not implemented method')
  },
  reload () {
    this && this.Cesium && this.$nextTick(() => {
      this.unload()
      this.$nextTick(this.load)
    })
  },
  refresh () {
    throw new Error('Not implemented method')
  },
  getServices () {
    return services.methods.getServices.call(this)
  }
}
/**
 * Basic cesium component mixin.
 */
export default {
  VM_PROP,
  mixins: [services],
  props,
  methods,
  mounted () {
    const $parent = getParent(this.$parent)
    const viewer = $parent.viewer
    const { load } = this
    viewer ? load() : $parent.$on('ready', load)
  },
  created () {
    Object.defineProperties(this, {
      cesiumObject: {
        enumerable: true,
        get: () => this.originInstance
      }
    })
  },
  destroyed () {
    this.unload()
  }
}
