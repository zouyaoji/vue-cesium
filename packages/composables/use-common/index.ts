import type { VcReadyObject, VcComponentInternalInstance, VcComponentPublicInstance, VcMittEvents, VcViewerProvider } from '@vue-cesium/utils/types'
import { inject, onBeforeUnmount, onUnmounted, WatchStopHandle } from 'vue'
import mitt, { Emitter } from 'mitt'
import { getObjClassName, isEmptyObj, isFunction } from '@vue-cesium/utils/util'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { getVcParentInstance } from '@vue-cesium/utils/private/vm'
import * as cesiumProps from '@vue-cesium/utils/cesium-props'
import { vcKey } from '@vue-cesium/utils/config'
import useLog from '../private/use-log'
import { useLocale } from '../use-locale'
import useEvents from '../use-events'
import { isEqual } from 'lodash-unified'
import useTimeout from '../private/use-timeout'
import { useGlobalConfig } from '../use-global-config'

const callbackCmpNames = ['Graphics', 'VcEntity', 'Datasource', 'VcOverlayDynamic']

export default function (props, { emit, attrs }, vcInstance: VcComponentInternalInstance) {
  const logger = useLog(vcInstance)
  const { registerTimeout, removeTimeout } = useTimeout()
  // state
  vcInstance.alreadyListening = []
  vcInstance.removeCallbacks = []
  let unwatchFns: Array<WatchStopHandle> = []
  vcInstance.mounted = false
  const vcMitt: Emitter<VcMittEvents> = mitt()
  vcInstance.vcMitt = vcMitt
  const $services = inject<VcViewerProvider>(vcKey)
  const { t } = useLocale()

  if ($services === void 0) {
    console.error(`${vcInstance.cesiumClass} ${t('vc.loadError')}`)
    return
  }

  const parentVcInstance = getVcParentInstance(vcInstance)
  const eventsState = useEvents(props, vcInstance, logger)
  vcInstance.children = []

  const entityGraphics = {
    billboard: true,
    box: true,
    corridor: true,
    cylinder: true,
    ellipse: true,
    ellipsoid: true,
    label: true,
    model: true,
    tileset: true,
    path: true,
    plane: true,
    point: true,
    polygon: true,
    polyline: true,
    polylineVolume: true,
    rectangle: true,
    wall: true
  }

  const globalConfig = useGlobalConfig()
  // methods
  const beforeLoad = async () => {
    emit('beforeLoad', vcInstance)

    if (parentVcInstance.nowaiting) {
      return true
    } else {
      await (parentVcInstance.proxy as VcComponentPublicInstance).creatingPromise
    }
  }

  const load = async () => {
    // Returns if it is already loaded. 如果已经加载则返回。
    if (vcInstance.mounted) {
      return false
    }

    logger.debug(`${vcInstance.cesiumClass}---loading`)

    await beforeLoad()

    const { Cesium, viewer } = $services
    vcInstance.viewer = viewer
    vcInstance.Cesium = Cesium

    // If you call the unload method to unload the component, the Cesium object of the parent component may be unloaded. You need to load the parent component first.
    // 如果调用过 unload 方法卸载组件，父组件的 Cesium 对象可能会被卸载 需要先加载父组件。
    if (!parentVcInstance.cesiumObject && !parentVcInstance.nowaiting) {
      return await (parentVcInstance.proxy as VcComponentPublicInstance)?.load()
    }

    setPropsWatcher(true)

    return createCesiumObject().then(async cesiumObject => {
      vcInstance.cesiumObject = cesiumObject
      // Load the created Cesium object. 加载创建的 Cesium 对象。
      return mount().then((): VcReadyObject => {
        vcInstance.mounted = true
        parentVcInstance.children.push(vcInstance)
        Object.assign(vcInstance.proxy, {
          cesiumObject: vcInstance.cesiumObject
        })
        // Trigger the component's 'ready' event. 触发该组件的 'ready' 事件。
        const readyObj: VcReadyObject = { Cesium, viewer, cesiumObject, vm: vcInstance.proxy as VcComponentPublicInstance }
        emit('ready', readyObj)
        vcMitt.emit('ready', readyObj)
        logger.debug(`${vcInstance.cesiumClass}---loaded`)
        return readyObj
      })
    })
  }

  const beforeUnload = async () => {
    await vcInstance.unloadingPromise
  }

  // eslint-disable-next-line arrow-parens
  const unload = async () => {
    await beforeUnload()

    // If the component has subcomponents, you need to remove the subcomponents first. 如果该组件带有子组件，需要先移除子组件。
    for (let i = 0; i < vcInstance.children.length; i++) {
      const vcChildCmp = vcInstance.children[i].proxy as VcComponentPublicInstance
      await vcChildCmp.unload()
    }

    vcInstance.children.length = 0

    return vcInstance.mounted
      ? unmount().then(async () => {
          setPropsWatcher(false)
          vcInstance.cesiumObject = undefined
          vcInstance.mounted = false
          vcInstance.removeCallbacks.forEach(removeCallback => {
            removeCallback()
          })
          // ensure custom events can be emitted after unmount.
          // https://github.com/vuejs/core/issues/5674
          vcInstance.isUnmounted = false
          emit('destroyed', vcInstance)
          vcInstance.isUnmounted = true
          logger.debug(`${vcInstance.cesiumClass}---unmounted`)

          // If the component cannot be rendered without the parent component, the parent component needs to be removed.
          // 如果该组件的渲染和父组件是绑定在一起的，需要移除父组件。
          return vcInstance.renderByParent && !vcInstance.unloadingPromise ? (parentVcInstance.proxy as VcComponentPublicInstance).unload() : true
        })
      : false
  }
  const beforeReload = async () => {
    await vcInstance.reloadingPromise
  }

  const reload = async () => {
    await beforeReload()

    return unload().then(() => {
      return load()
    })
  }

  const mount = async () => {
    eventsState.registerEvents(true)
    return vcInstance.mount?.() || true
  }

  const unmount = async () => {
    eventsState.registerEvents(false)
    return vcInstance.unmount?.() || true
  }

  const createCesiumObject = async () => {
    logger.debug('do createCesiumObject')
    if (isFunction(vcInstance.createCesiumObject)) {
      return vcInstance.createCesiumObject()
    } else {
      const options = transformProps(props)
      return new Cesium[vcInstance.cesiumClass](options)
    }
  }

  const deepWatchHandler = (vueProp, watcherOptions) => {
    let deep = watcherOptions?.deep
    const {
      SampledPositionProperty,
      Appearance,
      DebugAppearance,
      MaterialAppearance,
      PolylineColorAppearance,
      EllipsoidSurfaceAppearance,
      PerInstanceColorAppearance,
      PolylineMaterialAppearance
    } = Cesium

    if (vueProp === 'position') {
      // position 要排除 SampledPositionProperty 不然会卡死
      deep = !((vcInstance.proxy as any)[vueProp] instanceof SampledPositionProperty)
    } else if (vueProp === 'appearance' || vueProp === 'depthFailAppearance') {
      // appearance 要排除 Cesium 的类型 不然会卡死
      const value = (vcInstance.proxy as any)[vueProp]
      deep = !(
        value instanceof Appearance ||
        value instanceof DebugAppearance ||
        value instanceof MaterialAppearance ||
        value instanceof PolylineColorAppearance ||
        value instanceof EllipsoidSurfaceAppearance ||
        value instanceof PerInstanceColorAppearance ||
        value instanceof PolylineMaterialAppearance ||
        getObjClassName(value as any).indexOf('Appearance') !== -1
      )
    }

    return deep
  }

  const setPropsWatcher = register => {
    if (register) {
      if (!vcInstance.cesiumClass || !Cesium[vcInstance.cesiumClass]) {
        return
      }

      props &&
        Object.keys(props).forEach(vueProp => {
          let cesiumProp = vueProp
          if (vueProp === 'labelStyle' || vueProp === 'wmtsStyle') {
            cesiumProp = 'style'
          } else if (vueProp === 'bmKey') {
            cesiumProp = 'key'
          }
          // 如果在vue文件中已经监听了该 prop 这儿不再监听了
          // If you have listened to the props in the vue file, you will not add any more listeners here.
          if (vcInstance.proxy?.$options.watch?.[vueProp] || vcInstance.alreadyListening.indexOf(vueProp) !== -1) {
            return
          }

          const watcherOptions = vcInstance.proxy?.$options.props[vueProp]?.watcherOptions
          // returns an unwatch function that stops firing the callback
          const unwatch = vcInstance.proxy?.$watch(
            vueProp,
            async (val, oldVal) => {
              // Wait for child components to be created.
              // 等待子组件创建完成。否则在父组件的 `ready` 事件中就改变的属性将不起作用。
              await (vcInstance.proxy as VcComponentPublicInstance).creatingPromise
              const { cesiumObject } = vcInstance
              // Get the writability of the current cesiumobject or the props on its prototype chain to
              // detect whether the component property responds dynamically or reloads the component when the property changes.
              // 通过 cesiumObject 对象或它原型链上的 prop 的可写性，以检测属性改变时组件属性是动态响应还是重载组件。
              const pd = cesiumObject && Object.getOwnPropertyDescriptor(cesiumObject, cesiumProp)
              const pdProto = cesiumObject && Object.getOwnPropertyDescriptor(Object.getPrototypeOf(cesiumObject), cesiumProp)
              const hasSetter = (pd && (pd.writable || pd.set)) || (pdProto && (pdProto.writable || pdProto.set))
              if (hasSetter) {
                // Attributes are writable and directly respond to changes in attributes.
                // 属性可写，直接动态响应属性的改变。
                if (watcherOptions && watcherOptions.cesiumObjectBuilder) {
                  const newVal = watcherOptions.cesiumObjectBuilder.call(vcInstance, val, vcInstance.viewer.scene.globe.ellipsoid)
                  // If an exclude condition has been defined for the object, such as "_callback", Cesium will automatically handle it internally and no longer need to be assigned.
                  // 如果对象已经定义了 exclude 条件，如已经定义了“_callback”，Cesium 内部会自动处理的 不用再赋值了。
                  if (!(Cesium.defined(cesiumObject[cesiumProp]) && Cesium.defined(cesiumObject[cesiumProp]._callback))) {
                    cesiumObject[cesiumProp] = newVal
                  }
                } else {
                  cesiumObject[cesiumProp] = transformProp(cesiumProp, val)
                }
                return true
              } else {
                // The attribute is not writable, and the property is changed indirectly through reloading the component.
                // 属性不可写，通过重加载组件间接实现改变属性
                if (!isEqual(val, oldVal) || Array.isArray(val)) {
                  if (attrs['reload-mode'] === 'once' || attrs['reloadMode'] === 'once' || globalConfig.value.reloadMode === 'once') {
                    // If multiple component properties are changed at once, reload only once after the last property has been changed.
                    // 如果一瞬间多个组件属性被改变，只在最后一个属性改变完后 reload 一次。
                    removeTimeout()
                    registerTimeout(() => {
                      ;(vcInstance.proxy as VcComponentPublicInstance).reload()
                    }, 0)
                  } else {
                    // If multiple component properties are changed at once, reload them in sequence.
                    // 如果一瞬间多个组件属性被改变，只在最后一个属性改变完后 reload 一次。
                    vcInstance.reloadingPromise = new Promise((resolve, reject) => {
                      ;(vcInstance.proxy as VcComponentPublicInstance)
                        .reload()
                        .then(() => {
                          resolve(true)
                        })
                        .catch(e => {
                          reject(e)
                        })
                    })
                  }
                }
              }
            },
            {
              deep: deepWatchHandler(vueProp, watcherOptions)
            }
          )
          unwatchFns.push(unwatch!)
        })
    } else {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    }
  }

  const transformProps = <T>(props: T, childProps?: any) => {
    const options: any = {}
    props &&
      Object.keys(props).forEach(vueProp => {
        let cesiumProp = vueProp
        // The properties of the following Cesium instance objects are HTML or Vue reserved words and require special handling.
        // 以下 Cesium 实例对象的属性是 HTML 或 Vue 保留字，需要特别处理一下。
        if (vueProp === 'labelStyle' || vueProp === 'wmtsStyle') {
          cesiumProp = 'style'
        } else if (vueProp === 'bmKey') {
          cesiumProp = 'key'
        }

        if (props[vueProp] === undefined || props[vueProp] === null) {
          return
        }

        const className = getObjClassName(props[vueProp])

        // 由于 Cesium 1.96+ 版本不太好获取 Cesium 的 className 了，太耗时影响性能，干脆注释
        // className.indexOf('Graphics') === -1 &&
        // 副作用是：通过实体渲染的 point billboard label 等传原生的 Graphics 对象可能会有问题
        // 可传扁平对象来避免此问题。
        if (
          className &&
          // className.indexOf('Graphics') === -1 &&
          entityGraphics[cesiumProp] &&
          (vcInstance.cesiumClass === 'Entity' || vcInstance.cesiumClass.indexOf('DataSource') > 0 || vcInstance.cesiumClass === 'VcOverlayDynamic')
        ) {
          options[cesiumProp] = transformProps(props[vueProp], childProps)
        } else {
          options[cesiumProp] = transformProp(vueProp, props[vueProp], childProps)
        }
      })

    return options as T
  }

  const transformProp = (prop, value, childProps?) => {
    const className = getObjClassName(value)
    if (
      className &&
      // className.indexOf('Graphics') === -1 &&
      entityGraphics[prop] &&
      (vcInstance.cesiumClass === 'Entity' || vcInstance.cesiumClass.indexOf('DataSource') > 0 || vcInstance.cesiumClass === 'VcOverlayDynamic')
    ) {
      return transformProps(value, childProps)
    } else {
      const cmpName = vcInstance.proxy?.$options.name
      let supportCallbackProperty = false
      if (isFunction(value) && cmpName) {
        callbackCmpNames.forEach(v => {
          if (cmpName.indexOf(v) !== -1) {
            supportCallbackProperty = true
          }
        })
      }
      const propOption = vcInstance.proxy?.$options.props[prop] || childProps?.[prop] || (cesiumProps[prop] && cesiumProps[prop][prop])
      return propOption?.watcherOptions && !isEmptyObj(value)
        ? propOption.watcherOptions.cesiumObjectBuilder.call(vcInstance, value, vcInstance.viewer.scene.globe.ellipsoid)
        : supportCallbackProperty
        ? new Cesium.CallbackProperty(value, false)
        : value
    }
  }

  const getServices = () => {
    return mergeDescriptors({}, $services || {})
  }

  // lifecycle
  const creatingPromise = new Promise<VcReadyObject | boolean>((resolve, reject) => {
    try {
      let isLoading = false
      if ($services.viewer) {
        isLoading = true
        load()
          .then(e => {
            resolve(e)
            isLoading = false
          })
          .catch(e => {
            emit('unready', e)
            reject(e)
          })
      }
      parentVcInstance.vcMitt.on('ready', () => {
        if (!isLoading && !vcInstance.isUnmounted) {
          load()
            .then(e => {
              resolve(e)
            })
            .catch(e => {
              emit('unready', e)
              reject(e)
            })
        }
      })
    } catch (e) {
      emit('unready', e)
      reject(e)
    }
  })
  logger.debug(`${vcInstance.cesiumClass}---onCreated`)
  onUnmounted(() => {
    logger.debug(`${vcInstance.cesiumClass}---onUnmounted`)

    vcInstance.unloadingPromise = new Promise((resolve, reject) => {
      unload().then(() => {
        logger.debug(`${vcInstance.cesiumClass}---unloaded`)
        resolve(true)
        vcInstance.unloadingPromise = undefined
        vcMitt.all.clear()
      })
    })
    vcInstance.alreadyListening = []
  })

  // expose public methods
  Object.assign(vcInstance.proxy, {
    creatingPromise,
    load,
    unload,
    reload,
    getCreatingPromise: () => creatingPromise,
    getCesiumObject: () => vcInstance.cesiumObject
  })

  return {
    $services,
    load,
    unload,
    reload,
    creatingPromise,
    transformProp,
    transformProps,
    unwatchFns,
    setPropsWatcher,
    logger,
    getServices
  }
}
