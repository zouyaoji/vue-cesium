import services from './services'
import specialWatchers from '../util/specialWatchers'
const VM_PROP = 'vm'
const getParent = ($component) =>
  $component.abstract || $component.$el === $component.$children[0].$el ? getParent($component.$parent) : $component
/**
 * @vueProps
 */
const props = {}
/**
 * @vueMethods
 */
const methods = {
  async load () {
    const { createCesiumObject, mount, setPropWatchers } = this
    const $parent = getParent(this.$parent)
    const Cesium = (this.Cesium = $parent.Cesium)
    const viewer = (this.viewer = $parent.viewer)
    if (!$parent.cesiumObject) {
      await $parent.load()
    }
    setPropWatchers(true)
    this._createPromise = createCesiumObject().then((cesiumObject) => {
      this.originInstance = cesiumObject
      return mount().then(() => {
        this._mounted = true
        this.$emit('ready', { Cesium, viewer, cesiumObject: cesiumObject })
        return true
      })
    })
    return this._createPromise
  },
  async createCesiumObject () {
    throw new Error('Not implemented method')
  },
  async mount () {
    throw new Error('Not implemented method')
  },
  async unmount () {
    throw new Error('Not implemented method')
  },
  async reload () {
    await this.unload()
    return this.load()
  },
  async unload () {
    return this._mounted ? this.unmount().then(async () => {
      this.setPropWatchers(false)
      this.originInstance = undefined
      this._mounted = false
      // 先移除子组件
      for (let $node of (this.$slots.default || []).map(vnode => vnode.componentInstance).filter(cmp => !!cmp)) {
        await $node.unload()
      }
      // 再移除父组件
      return this.renderByParent ? this.$parent.unload() : true
    }) : false
  },
  getServices () {
    return services.methods.getServices.call(this)
  },
  setPropWatchers (register) {
    if (register) {
      const specialWatcherKeys = Object.keys(specialWatchers)
      Object.keys(this.$props).forEach((prop) => {
        if (prop === 'labelStyle') {
          prop = 'style'
        }
        const constructor = Cesium[this.cesiumClass]
        const args = []
        for (let i = 0; i < constructor.length; i++) {
          args.push({})
        }
        const instance = this.cesiumObject || new (constructor.bind.apply(constructor, args))()
        const pd = Object.getOwnPropertyDescriptor(constructor, prop)
        const pdProto = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(instance), prop)
        const hasSetter = pd && pd.writable || pdProto && pdProto.set
        // console.log(prop + '|' + hasSetter)
        const unwatch = this.$watch(prop, async (val) => {
          await this.createPromise
          if (hasSetter) {
            this.cesiumObject[prop] =
              specialWatcherKeys.indexOf(prop) !== -1 ? specialWatchers[prop].handler.call(this, val) : val
          } else {
            this.reload()
          }
        }, { deep: specialWatcherKeys.indexOf(prop) !== -1 && specialWatchers[prop].deep })
        this.unwatchFns.push(unwatch)
      })
    } else {
      this.unwatchFns.forEach((item) => item())
      this.unwatchFns = []
    }
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
  data () {
    return {
      unwatchFns: []
    }
  },
  mounted () {
    const $parent = getParent(this.$parent)
    const viewer = $parent.viewer
    const { load } = this
    viewer ? load() : $parent.$on('ready', load)
  },
  created () {
    this._mounted = false
    this.specialWatchers = specialWatchers
    Object.defineProperties(this, {
      createPromise: {
        enumerable: true,
        get: () => this._createPromise
      },
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
