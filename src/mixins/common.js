import services from './services'
import nameClassMap from '../utils/nameClassMap'
import specialProps from '../utils/specialProps'
import { warn } from '../utils/log'
const VM_PROP = 'vm'
/**
 * Get the parent component. 获取父组件方法。
 * @param {VueComponent} $component.
 */
const getParent = ($component) =>
  !$component.cesiumClass && $component.$options.name !== 'vc-viewer' ? getParent($component.$parent) : $component

/**
 * @vueMethods
 */
const methods = {
  /**
   * Load components asynchronously. 异步加载组件。
   * @returns {Promise<Object>} { Cesium, viewer, cesiumObject }
   */
  async load () {
    // Returns if it is already loaded. 如果已经加载则返回。
    if (this._mounted) {
      return false
    }

    const { createCesiumObject, mount, setPropWatchers } = this
    const $parent = getParent(this.$parent)
    const Cesium = (this.Cesium = $parent.Cesium)
    const viewer = (this.viewer = $parent.viewer)
    // If you call the unload method to unload the component, the Cesium object of the parent component may be unloaded. You need to load the parent component first.
    // 如果调用过 unload 方法卸载组件，父组件的 Cesium 对象可能会被卸载 需要先加载父组件。
    if (!$parent.cesiumObject) {
      return $parent.load()
    }
    // Register vue Watchers. 注册 Vue 侦听器。
    setPropWatchers(true)
    return createCesiumObject().then(async (cesiumObject) => {
      this.originInstance = cesiumObject
      // Load the created Cesium object. 加载创建的 Cesium 对象。
      return mount().then(() => {
        this._mounted = true
        // Trigger the component's 'ready' event. 触发该组件的 'ready' 事件。
        this.$emit('ready', { Cesium, viewer, cesiumObject, vm: this })
        return { Cesium, viewer, cesiumObject, vm: this }
      })
    })
  },
  /**
   * Unloading components asynchronously. 异步卸载组件。
   * @returns {Promise<Boolean>} returns true on success and false on failure. 成功返回 true，失败返回 false。
   */
  async unload () {
    // If the component has subcomponents, you need to remove the subcomponents first. 如果该组件带有子组件，需要先移除子组件。
    for (const $node of (this.$slots.default || []).map((vnode) => vnode.componentInstance).filter((cmp) => !!cmp)) {
      await $node.unload()
    }
    return this._mounted
      ? this.unmount().then(async () => {
        // Teardown the watchers. 注销 Vue 侦听器。
        this.setPropWatchers(false)
        this.originInstance = undefined
        this._mounted = false
        // If the component cannot be rendered without the parent component, the parent component needs to be removed.
        // 如果该组件的渲染和父组件是绑定在一起的，需要移除父组件。
        return this.renderByParent ? this.$parent.unload() : true
      }) : false
  },
  /**
   * Reload components asynchronously. 异步重载组件.
   * @returns {Promise<Boolean>} returns true on success and false on failure. 成功返回 true，失败返回 false。
   */
  async reload () {
    return this.unload().then(() => {
      return this.load()
    })
  },
  /**
   * Create Cesium objects asynchronously. 异步创建 Cesium 对象。
   * @returns {Promise<Object>} return the Cesium object.
   */
  async createCesiumObject () {
    const { $props, cesiumClass, transformProps } = this
    const options = transformProps($props)
    return new Cesium[cesiumClass](options)
  },
  /**
   * Register or unregister the vue watchers.
   * @param {Boolean} register
   */
  setPropWatchers (register) {
    if (register) {
      const { $props, specialPropsKeys, cesiumClass, cesiumObject, applyToConstructor } = this
      if (!cesiumClass || !Cesium[cesiumClass]) { return }
      const constructor = Cesium[cesiumClass]
      const args = []
      for (let i = 0; i < constructor.length; i++) {
        args.push({})
      }
      // Create a temporary object to get the writability of the current Cesium object or the props on its prototype chain to
      // detect whether the component property responds dynamically or reloads the component when the property changes.
      // 创建一个临时对象来获取当前 Cesium 对象或它原型链上的 prop 的可写性，以检测属性改变时组件属性是动态响应还是重载组件。
      let instance = cesiumObject || applyToConstructor(constructor, args)
      $props && Object.keys($props).forEach(vueProp => {
        let cesiumProp = vueProp
        if (vueProp === 'labelStyle' || vueProp === 'wmtsStyle') {
          cesiumProp = 'style'
        } else if (vueProp === 'bmKey') {
          cesiumProp = 'key'
        }
        const pd = instance && Object.getOwnPropertyDescriptor(instance, cesiumProp)
        const pdProto = instance && Object.getOwnPropertyDescriptor(Object.getPrototypeOf(instance), cesiumProp)
        const hasSetter = (pd && pd.writable) || (pdProto && pdProto.set)
        // 如果在vue文件中已经监听了改 props 这儿不再监听了
        // If you have listened to the props in the vue file, you will not add any more listeners here.
        if (this._watchers.filter(v => v.expression === vueProp).length > 0) {
          return
        }
        // returns an unwatch function that stops firing the callback
        const unwatch = this.$watch(
          vueProp,
          async (val) => {
            // Wait for child components to be created.
            // 等待子组件创建完成。否则在父组件的 `ready` 事件中就改变的属性将不起作用。
            await this.createPromise
            if (hasSetter) {
              // Attributes are writable and directly respond to changes in attributes.
              // 属性可写，直接动态响应属性的改变。
              const { cesiumObject } = this

              if (specialPropsKeys.indexOf(vueProp) !== -1 && specialProps[vueProp].handler) {
                const newVal = specialProps[vueProp].handler.call(this, val)
                // If an exclude condition has been defined for the object, such as "_callback", Cesium will automatically handle it internally and no longer need to be assigned.
                // 如果对象已经定义了 exclude 条件，如已经定义了“_callback”，Cesium 内部会自动处理的 不用再赋值了。
                if (!(Cesium.defined(cesiumObject[cesiumProp]) && Cesium.defined(cesiumObject[cesiumProp][specialProps[vueProp].exclude]) && specialProps[vueProp].exclude)) {
                  cesiumObject[cesiumProp] = newVal
                }
              } else {
                cesiumObject[cesiumProp] = val
              }
              return true
            } else {
              // The attribute is not writable, and the property is changed indirectly through reloading the component.
              // 属性不可写，通过重加载组件间接实现改变属性
              return this.reload()
            }
          },
          { deep: specialPropsKeys.indexOf(vueProp) !== -1 && specialProps[vueProp].deep }
        )
        this.unwatchFns.push(unwatch)
      })
      // Destroy temporary objects.
      // 销毁临时对象
      instance = undefined
    } else {
      // Stops firing the callback.
      // 注销 watchers。
      this.unwatchFns.forEach((item) => item())
      this.unwatchFns = []
    }
  },
  /**
   * Use the apply method to call the Cesium constructor to initialize the Cesium instance. 使用 apply 调用 Cesium 构造函数初始化 Cesium 实例。
   * @param {Function} constructor Cesium 构造函数。
   * @param {Array} argArray 构造函数参数。
   * @returns {Object} 返回 Cesium 实例。
   */
  applyToConstructor (constructor, argArray) {
    let instance
    try {
      const args = [{}].concat(argArray)
      // 动态创建 Cesium 临时实例，大部分都能正常创建，但有部分参数是不可省略的，暂时没想到更好的办法
      // args[1].url = ''
      args[1].mapId = {}
      args[1].geometry = {}
      args[1].rectangle = Cesium.Rectangle.MAX_VALUE
      args[1].polygonHierarchy = {}
      args[1].assetId = 1
      args[1].layers = ''
      args[2] = new Cesium.PolylineCollection({})

      const FactoryFunction = constructor.bind.apply(constructor, args)
      instance = new FactoryFunction()
    } catch (e) {
      if (process.env.VUECESIUM_DEBUG) {
        warn(e)
      }
    }
    return instance
  },
  /**
   * Mount Cesium objects asynchronously. 异步挂载 Cesium 对象，即将 Cesium 对象添加到 viewer 中。虚方法，在各 vue 组件中实现。
   * @returns {Promise<Boolean>} 操作成功返回 true，失败返回 false。
   */
  async mount () {
    return true
  },
  /**
   * Unmount Cesium objects asynchronously. 异步卸载 Cesium 对象，即将 Cesium 对象从 viewer 移除。虚方法，在各 vue 组件中实现。
   * @returns {Promise<Boolean>} 操作成功返回 true，失败返回 false。
   */
  async unmount () {
    return true
  },
  /**
   * Get the injected object. 获取注入的对象。主要是为了获取父组件和父组件的 Cesium 对象。
   * @returns {Object}
   */
  getServices () {
    return services.methods.getServices.call(this)
  },
  transformProps (props) {
    const { specialPropsKeys, isEmptyObj } = this
    const options = {}
    props && Object.keys(props).forEach((vueProp) => {
      let cesiumProp = vueProp
      // The properties of the following Cesium instance objects are HTML or Vue reserved words and require special handling.
      // 以下 Cesium 实例对象的属性是 HTML 或 Vue 保留字，需要特别处理一下。
      if (vueProp === 'labelStyle' || vueProp === 'wmtsStyle') {
        cesiumProp = 'style'
      } else if (vueProp === 'bmKey') {
        cesiumProp = 'key'
      }
      options[cesiumProp] =
        specialPropsKeys.indexOf(vueProp) !== -1 && specialProps[vueProp].handler && !isEmptyObj(props[vueProp])
          ? specialProps[vueProp].handler.call(this, props[vueProp])
          : props[vueProp]
    })
    // Remove empty objects to avoid initialization errors when Cesium objects are initialized with null values.
    // 移除空对象，避免 Cesium 对象初始化时传入空值导致初始化报错。
    this.removeNullItem(options)
    return options
  },
  /**
   * The action before the component is loaded. 组件加载前的操作。
   */
  async beforeLoad () {
    await this.$parent.createPromise
  }
}
/**
 * VueCesium common minxin
 */
export default {
  VM_PROP,
  mixins: [services],
  methods,
  data () {
    return {
      unwatchFns: []
    }
  },
  created () {
    this._mounted = false
    this.cesiumClass = nameClassMap[this.$options.name]
    this.specialPropsKeys = Object.keys(specialProps)
    const { beforeLoad, load } = this
    const $parent = getParent(this.$parent)
    // this._createPromise = Promise.resolve(beforeLoad()).then(() => load())
    this._createPromise = Promise.resolve(beforeLoad()).then(() => {
      return new Promise((resolve, reject) => {
        const viewer = $parent.viewer
        viewer && resolve(load())
        $parent.$on('ready', () => {
          resolve(load())
          // .then(val => resolve(val))
          // .catch((error) => reject(new Error(`[C_PKG_FULLNAME] ERROR: An error occurred during the initialization of the ${this.cesiumClass}!` + error)))
        })
      })
    })

    Object.defineProperties(this, {
      createPromise: {
        enumerable: true,
        get: () => this._createPromise
      },
      cesiumObject: {
        enumerable: true,
        get: () => this.originInstance
      },
      mounted: {
        enumerable: true,
        get: () => this._mounted
      }
    })
  },
  destroyed () {
    this.unload().then(() => {
      this.$emit('destroyed', this)
    })
  }
}
