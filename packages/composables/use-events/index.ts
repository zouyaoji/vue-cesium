import { AnyObject, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { kebabCase, capitalize, isArray } from '@vue-cesium/utils/util'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'

export default function (props, vcInstance: VcComponentInternalInstance, logger) {
  const bindEvents = (cesiumObject: AnyObject, cesiumEvents: Array<string>, register = true) => {
    const ev = cesiumEvents || vcInstance.cesiumEvents || []
    ev &&
      ev.forEach(eventName => {
        if (cesiumObject[eventName]) {
          const listener = getInstanceListener(vcInstance, eventName)
          const methodName = register ? 'addEventListener' : 'removeEventListener'
          listener && cesiumObject[eventName][methodName](listener)
        } else if (process.env.VUECESIUM_DEBUG) {
          logger.warn('Add event linstener of ' + eventName + ' failed, try to upgrade Cesium to latest version.')
        }
      })
  }
  const registerEvents = register => {
    const { viewer, cesiumObject } = vcInstance
    if (cesiumObject === undefined || viewer === undefined) {
      return
    }
    const { ScreenSpaceEventHandler, ScreenSpaceEventType } = Cesium

    if (!viewer._vcPickScreenSpaceEventHandler || !viewer._vcViewerScreenSpaceEventHandler) {
      viewer._vcPickScreenSpaceEventHandler = new ScreenSpaceEventHandler(viewer.canvas)
      viewer._vcViewerScreenSpaceEventHandler = new ScreenSpaceEventHandler(viewer.canvas)
      viewerScreenSpaceEvents.forEach(type => {
        const listener = getInstanceListener(vcInstance, type)
        listener && viewer._vcViewerScreenSpaceEventHandler.setInputAction(listener, ScreenSpaceEventType[type])
        // vc-viewer 率先绑定
        viewer._vcPickScreenSpaceEventHandler.setInputAction(pickedAction.bind({ eventName: type, viewer }), ScreenSpaceEventType[type])
      })
    }

    bindEvents(cesiumObject, vcInstance.cesiumEvents || [], register)

    vcInstance.cesiumMembersEvents?.forEach(eventName => {
      const cesiumIntanceMember =
        isArray(eventName.name) && eventName.name.length > 0 && cesiumObject[eventName.name[0]]
          ? cesiumObject[eventName.name[0]][eventName.name[1]]
          : cesiumObject[eventName.name as string]
      cesiumIntanceMember && bindEvents(cesiumIntanceMember, eventName.events, register)
    })

    if (props.enableMouseEvent) {
      pickEvents.forEach(eventName => {
        const listener = getInstanceListener(vcInstance, eventName)
        if (register) {
          listener && (cesiumObject[`vc${eventName}`] = listener)
        } else {
          listener && delete cesiumObject[`vc${eventName}`]
        }
      })
    }
  }

  function pickedAction(this, movement) {
    if (!props.enableMouseEvent || !movement) {
      return
    }
    const viewer: Cesium.Viewer = this.viewer
    const { eventName } = this
    const position: Cesium.Cartesian2 = movement.position || movement.endPosition
    if (!position) {
      return
    }

    const pickedFeatureAndCallbackNames: Array<any> = []

    let callbackName
    if (eventName.indexOf('LEFT_DOUBLE_CLICK') !== -1) {
      callbackName = 'dblclick'
    } else if (eventName.indexOf('CLICK') !== -1) {
      callbackName = 'click'
    } else if (eventName.indexOf('DOWN') !== -1) {
      callbackName = 'mousedown'
    } else if (eventName.indexOf('UP') !== -1) {
      callbackName = 'mouseup'
    } else if (eventName.indexOf('MOUSE_MOVE') !== -1) {
      callbackName = 'mousemove'
    }

    let callbackNameOut
    if (callbackName === 'mousemove') {
      callbackNameOut = 'mouseout'
    } else if (callbackName === 'click') {
      callbackNameOut = 'clickout'
    }

    const pickedFeature = viewer.scene.pick(position)
    if (!Cesium.defined(pickedFeature)) {
      if (this.pickedFeature) {
        // 没有拾取到对象，this.pickedFeature又有记录，说明移出了。
        pickedFeatureAndCallbackNames.push({
          callbackName: callbackNameOut,
          pickedFeature: this.pickedFeature
        })
      }

      this.pickedFeature = undefined
    } else {
      if (this.pickedFeature && this.pickedFeature.id !== pickedFeature.id) {
        pickedFeatureAndCallbackNames.push({
          // 拾取到对象，this.pickedFeature也有记录，两者不同，说明操作到另外一个对象上去了
          callbackName: callbackNameOut,
          pickedFeature: this.pickedFeature
        })
      }
      if (callbackName === 'mousemove' && (!this.pickedFeature || this.pickedFeature.id !== pickedFeature.id)) {
        pickedFeatureAndCallbackNames.push({
          callbackName: 'mouseover',
          pickedFeature
        })
      }

      pickedFeatureAndCallbackNames.push({
        callbackName,
        pickedFeature
      })
    }

    if (pickedFeatureAndCallbackNames.length === 0) {
      return
    }

    let intersection: Cesium.Cartesian3 | undefined
    const scene = viewer.scene
    if (scene.mode === Cesium.SceneMode.SCENE3D) {
      const ray = scene.camera.getPickRay(position)
      intersection = scene.globe.pick(ray, scene)
    } else {
      intersection = scene.camera.pickEllipsoid(position, scene.globe.ellipsoid)
    }

    let button = -1
    if (eventName.indexOf('LEFT') !== -1) {
      button = 0
    } else if (eventName.indexOf('MIDDLE') !== -1) {
      button = 1
    } else if (eventName.indexOf('RIGHT') !== -1) {
      button = 2
    }
    const eventSourceList: Array<any> = []
    pickedFeatureAndCallbackNames.forEach(item => {
      const callbackName = item.callbackName
      const pickedFeature = item.pickedFeature
      if (pickedFeature.id) {
        if (isArray(pickedFeature.id)) {
          if (pickedFeature.id[0] instanceof Cesium.Entity) {
            // 数据源集合（集群）
            eventSourceList.push({
              callbackName,
              cesiumObject: pickedFeature.id[0].entityCollection.owner,
              pickedFeature
            })
          } else {
            // 图元集群 PrimitiveCluster
            eventSourceList.push({
              callbackName,
              cesiumObject: pickedFeature.primitive.owner,
              pickedFeature
            })
          }
        } else if (pickedFeature.id instanceof Cesium.Entity) {
          // 实体
          eventSourceList.push({
            callbackName,
            cesiumObject: pickedFeature.id,
            pickedFeature
          })
          // 数据源
          eventSourceList.push({
            callbackName,
            cesiumObject: pickedFeature.id.entityCollection.owner,
            pickedFeature
          })
        }
      }
      const getParentCollection = e => {
        eventSourceList.push({
          callbackName,
          cesiumObject: e,
          pickedFeature
        })
        if (e._vcParent) {
          getParentCollection(e._vcParent)
        }
      }
      // 图元
      // + 自定义图元 如 PolygonPrimitive
      if (pickedFeature.primitive) {
        if (pickedFeature.primitive._vcParent) {
          getParentCollection(pickedFeature.primitive._vcParent)
        }
        eventSourceList.push({
          callbackName,
          cesiumObject: pickedFeature.primitive,
          pickedFeature
        })
      }

      // 图元集合
      if (pickedFeature.collection) {
        if (pickedFeature.collection._vcParent) {
          getParentCollection(pickedFeature.collection._vcParent)
        }

        eventSourceList.push({
          callbackName,
          cesiumObject: pickedFeature.collection,
          pickedFeature
        })
      }
    })

    eventSourceList.forEach(event => {
      if (event.callbackName) {
        const fn =
          event.cesiumObject[`vc${event.callbackName}`] ||
          event.cesiumObject[`on${capitalize(event.callbackName)}`] ||
          event.cesiumObject[kebabCase(`on${capitalize(event.callbackName)}`)]

        if (Cesium.defined(fn)) {
          const payload = {
            type: `on${event.callbackName}`,
            windowPosition: position,
            surfacePosition: intersection,
            pickedFeature: event.pickedFeature,
            button,
            cesiumObject: event.cesiumObject
          }
          if (fn instanceof Cesium.CallbackProperty) {
            ;(fn as any)._callback(payload)
          } else {
            fn(payload)
          }
        }
      }
    })

    this.pickedFeature = pickedFeature
  }
  return {
    bindEvents,
    registerEvents
  }
}

const viewerScreenSpaceEvents: Array<string> = [
  'LEFT_CLICK',
  'LEFT_DOUBLE_CLICK',
  'LEFT_DOWN',
  'LEFT_UP',
  'MIDDLE_CLICK',
  'MIDDLE_DOWN',
  'MIDDLE_UP',
  'MOUSE_MOVE',
  'PINCH_END',
  'PINCH_MOVE',
  'PINCH_START',
  'RIGHT_CLICK',
  'RIGHT_DOWN',
  'RIGHT_UP',
  'WHEEL'
]

const pickEvents: Array<string> = ['mousedown', 'mouseup', 'click', 'clickout', 'dblclick', 'mousemove', 'mouseover', 'mouseout']

export { pickEvents, viewerScreenSpaceEvents }
