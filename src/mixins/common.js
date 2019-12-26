import services from './services'
import nameClassMap from '../utils/nameClassMap'
import specialProps from '../utils/specialProps'
import { warn } from '../utils/log'
const VM_PROP = 'vm'
/**
 * 获取父组件方法。
 * @param {VueComponent} $component Vue 组件。
 */
const getParent = ($component) =>
  $component.abstract || $component.$el === $component.$children[0].$el ? getParent($component.$parent) : $component

/**
 * @vueMethods
 */
const methods = {
  /**
   * 异步加载组件。
   * @returns {Promise<Boolean>} 操作成功返回 {Cesium, viewer, cesiumObject}
   */
  async load () {
    if (this._mounted) {
      return false
    }

    const { createCesiumObject, mount, setPropWatchers } = this
    const $parent = getParent(this.$parent)
    const Cesium = (this.Cesium = $parent.Cesium)
    const viewer = (this.viewer = $parent.viewer)
    // 如果调用过 unload 方法卸载组件，父组件的 Cesium 对象可能会被卸载 需要先加载父组件。
    if (!$parent.cesiumObject) {
      return $parent.load()
    }
    // 注册 Vue 侦听器
    // 在 Cesium 对象创建前就注册侦听器有一个好处：
    // 在父组件如 `vc-viewer` 的 `ready` 事件中给子组件的属性赋值能被侦听到。
    // 从而兼容v1版本的写法。
    setPropWatchers(true)
    return createCesiumObject().then(async (cesiumObject) => {
      this.originInstance = cesiumObject
      // Cesium 对象创建成功后再将其挂载渲染。
      return mount().then(() => {
        this._mounted = true
        // 触发该组件的 'ready' 事件。
        // v2.0.1 增加回传一个当前组件的 vue 实例 vm, 方便在 promise 操作时取一些组件本身属性，如文档中对 geometry 的定位操作。
        this.$emit('ready', { Cesium, viewer, cesiumObject, vm: this })
        return { Cesium, viewer, cesiumObject, vm: this }
      })
    })
  },
  /**
   * 异步卸载组件，vue 组件本身不会销毁，但 Cesium 对象会被移除。
   * @returns {Promise<Boolean>} 操作成功返回 true，失败返回 false。
   */
  async unload () {
    // 如果该组件带有子组件，需要先移除子组件。
    for (const $node of (this.$slots.default || []).map((vnode) => vnode.componentInstance).filter((cmp) => !!cmp)) {
      await $node.unload()
    }
    return this._mounted
      ? this.unmount().then(async () => {
        // 注销 Vue 侦听器
        this.setPropWatchers(false)
        this.originInstance = undefined
        this._mounted = false
        // 如果该组件的渲染和父组件是绑定在一起的，需要移除父组件。
        return this.renderByParent ? this.$parent.unload() : true
      }) : false
  },
  /**
   * 异步重载组件，重新加载 Cesium 对象。
   * @returns {Promise<Boolean>} 操作成功返回 true，失败返回 false。
   */
  async reload () {
    return this.unload().then(() => {
      return this.load()
    })
  },
  /**
   * 异步创建 Cesium 对象。
   * @returns {Promise<Object>} 操作成功将返回 Cesium 对象。
   */
  async createCesiumObject () {
    const { $props, cesiumClass, transformProps } = this
    const options = transformProps($props)
    return new Cesium[cesiumClass](options)
  },
  /**
   * 注册或注销 vue watcher 对象。
   * @param {Boolean} register true 代表注册，false 代表注销。
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
      // 创建一个临时对象来获取当前 Cesium 对象或它原型链上的 prop 的可写性，以检测 watcher 改变时组件属性是动态响应还是重载组件。
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
        const unwatch = this.$watch(
          vueProp,
          async (val) => {
            // 如果是在父组件的 `ready` 事件中就改变了属性，这儿能侦听到，但子组件实际上还没创建完成
            await this.createPromise
            if (hasSetter) {
              // 属性可写，直接动态响应属性的改变
              const { cesiumObject } = this

              if (specialPropsKeys.indexOf(vueProp) !== -1 && specialProps[vueProp].handler) {
                const newVal = specialProps[vueProp].handler.call(this, val)
                // 如果对象已经定义了 exclude 条件如已经定义了“_callback”，Cesium 内部会自动处理的 不用再赋值了。
                if (!(Cesium.defined(cesiumObject[cesiumProp]) && Cesium.defined(cesiumObject[cesiumProp][specialProps[vueProp].exclude]) && specialProps[vueProp].exclude)) {
                  cesiumObject[cesiumProp] = newVal
                }
              } else {
                cesiumObject[cesiumProp] = val
              }
              return true
            } else {
              // 属性不可写，通过重加载组件间接实现改变属性
              return this.reload()
            }
          },
          { deep: specialPropsKeys.indexOf(vueProp) !== -1 && specialProps[vueProp].deep }
        )
        this.unwatchFns.push(unwatch)
      })
      // 销毁临时对象
      instance && Cesium.destroyObject(instance)
      instance = null
    } else {
      // 注销 watcher 对象
      this.unwatchFns.forEach((item) => item())
      this.unwatchFns = []
    }
  },
  /**
   * 使用 apply 方式调用 Cesium 构造函数初始化 Cesium 实例。
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
   * 异步挂载 Cesium 对象，即将 Cesium 对象添加到 viewer 中。虚方法，在各 vue 组件中实现。
   * @returns {Promise<Boolean>} 操作成功返回 true，失败返回 false。
   */
  async mount () {
    return true
  },
  /**
   * 异步卸载 Cesium 对象，即将 Cesium 对象从 viewer 移除。虚方法，在各 vue 组件中实现。
   * @returns {Promise<Boolean>} 操作成功返回 true，失败返回 false。
   */
  async unmount () {
    return true
  },
  /**
   * 获取注入的对象。主要是为了获取父组件和父组件的 Cesium 对象。
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
    // 移除空对象，避免 Cesium 对象初始化时传入空值导致初始化报错。
    this.removeNullItem(options)
    return options
  },
  /**
   * 组件加载前的操作。
   */
  async beforeLoad () {
    await this.$parent.createPromise
  }
}
/**
 * VueCesium 组件通用混入。
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
    const { beforeLoad, load, $parent } = this
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
