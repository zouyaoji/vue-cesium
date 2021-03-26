import { InstallOptions } from '@vue-cesium/utils/config'
import { AnyObject, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { isArray } from '@vue-cesium/utils/util'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'

export default function (props, vcInstance: VcComponentInternalInstance) {
  const $vc = vcInstance.appContext.config.globalProperties.$VueCesium as InstallOptions
  const bindEvents = (cesiumObject: AnyObject, cesiumEvents: Array<string>, register = true) => {
    const ev = cesiumEvents || vcInstance.cesiumEvents || []
    ev &&
      ev.forEach(eventName => {
        if (cesiumObject[eventName]) {
          const listener = getInstanceListener(vcInstance, eventName)
          const methodName = register ? 'addEventListener' : 'removeEventListener'
          listener && cesiumObject[eventName][methodName](listener)
        } else if (process.env.VUECESIUM_DEBUG) {
          // warn('Add event linstener of ' + eventName + ' failed, try to upgrade Cesium to latest version.')
        }
      })
  }
  const registerEvents = register => {
    console.log(`registerEvents: ${vcInstance.cesiumClass}-${register}`)
    const { viewer, cesiumObject } = vcInstance
    const { ScreenSpaceEventHandler, ScreenSpaceEventType } = Cesium
    if (register && props.enableEvent) {
      if (!$vc.pickScreenSpaceEventHandler) {
        $vc.pickScreenSpaceEventHandler = new ScreenSpaceEventHandler(viewer.canvas)
        $vc.viewerScreenSpaceEventHandler = new ScreenSpaceEventHandler(viewer.canvas)
        viewerScreenSpaceEvents.forEach(type => {
          const listener = getInstanceListener(vcInstance, type)
          listener && $vc.viewerScreenSpaceEventHandler.setInputAction(listener, ScreenSpaceEventType[type])

          $vc.pickScreenSpaceEventHandler.setInputAction(pickedAction.bind({ eventName: type, viewer }), ScreenSpaceEventType[type])
        })
      }

      bindEvents(cesiumObject, vcInstance.cesiumEvents || [], register)

      vcInstance.cesiumMembersEvents?.forEach(eventName => {
        const cesiumIntanceMember =
          isArray(eventName.name) && eventName.name.length > 0
            ? cesiumObject[eventName.name[0]][eventName.name[1]]
            : cesiumObject[eventName.name as string]
        cesiumIntanceMember && bindEvents(cesiumIntanceMember, eventName.events, register)
      })

      pickEvents.forEach(eventName => {
        const listener = getInstanceListener(vcInstance, eventName)
        listener && (cesiumObject[eventName] = listener)
      })
    } else {
      pickEvents.forEach(eventName => {
        const listener = getInstanceListener(vcInstance, eventName)
        listener && delete cesiumObject[eventName]
      })
    }
  }

  function pickedAction (movement) {
    const { viewer, eventName } = this
    const position = movement.position || movement.endPosition
    if (!position) {
      return
    }

    const pickedFeatureAndCallbackNames = []

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
          pickedFeature: this.pickedFeature,
        })
      }

      this.pickedFeature = undefined
    } else {
      if (this.pickedFeature && this.pickedFeature !== pickedFeature) {
        pickedFeatureAndCallbackNames.push({
          // 拾取到对象，this.pickedFeature也有记录，两者不同，说明操作到另外一个对象上去了
          callbackName: callbackNameOut,
          pickedFeature: this.pickedFeature,
        })
      }
      if (callbackName === 'mousemove' && (!this.pickedFeature || this.pickedFeature !== pickedFeature)) {
        pickedFeatureAndCallbackNames.push({
          callbackName: 'mouseover',
          pickedFeature,
        })
      }

      pickedFeatureAndCallbackNames.push({
        callbackName,
        pickedFeature,
      })
    }

    if (pickedFeatureAndCallbackNames.length === 0) {
      return
    }

    let intersection
    const scene = viewer.scene
    if (scene.mode === Cesium.SceneMode.SCENE3D) {
      const ray = scene.camera.getPickRay(position)
      intersection = scene.globe.pick(ray, scene)
    } else {
      intersection = scene.camera.pickEllipsoid(position, Cesium.Ellipsoid.WGS84)
    }

    let button = -1
    if (eventName.indexOf('LEFT') !== -1) {
      button = 0
    } else if (eventName.indexOf('MIDDLE') !== -1) {
      button = 1
    } else if (eventName.indexOf('RIGHT') !== -1) {
      button = 2
    }
    const eventSourceList = []
    pickedFeatureAndCallbackNames.forEach(item => {
      const callbackName = item.callbackName
      const pickedFeature = item.pickedFeature
      if (pickedFeature.id) {
        if (isArray(pickedFeature.id) && pickedFeature.id[0] instanceof Cesium.Entity) {
          // 数据源集合（集群）
          eventSourceList.push({
            callbackName,
            cesiumObject: pickedFeature.id[0].entityCollection.owner,
            pickedFeature,
          })
        } else if (pickedFeature.id instanceof Cesium.Entity) {
          // 实体
          eventSourceList.push({
            callbackName,
            cesiumObject: pickedFeature.id,
            pickedFeature,
          })
          // 数据源
          eventSourceList.push({
            callbackName,
            cesiumObject: pickedFeature.id.entityCollection.owner,
            pickedFeature,
          })
        }
      }
      // 图元
      if (pickedFeature.primitive) {
        eventSourceList.push({
          callbackName,
          cesiumObject: pickedFeature.primitive,
          pickedFeature,
        })
      }

      const getParentCollection = e => {
        eventSourceList.push({
          callbackName,
          cesiumObject: e,
          pickedFeature,
        })
        if (e._vcParent) {
          getParentCollection(e._vcParent)
        }
      }
      // 图元集合
      if (pickedFeature.collection) {
        eventSourceList.push({
          callbackName,
          cesiumObject: pickedFeature.collection,
          pickedFeature,
        })
        if (pickedFeature.collection._vcParent) {
          getParentCollection(pickedFeature.collection._vcParent)
        }
      }
    })

    eventSourceList.forEach(event => {
      event.cesiumObject[event.callbackName] &&
        event.cesiumObject[event.callbackName]({
          type: `on${event.callbackName}`,
          windowPosition: position,
          surfacePosition: intersection,
          pickedFeature: event.pickedFeature,
          button,
          cesiumObject: event.cesiumObject,
        })
    })

    this.pickedFeature = pickedFeature
  }
  return {
    bindEvents,
    registerEvents,
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
  'WHEEL',
]

const pickEvents: Array<string> = ['mousedown', 'mouseup', 'click', 'clickout', 'dblclick', 'mousemove', 'mouseover', 'mouseout']

export { pickEvents, viewerScreenSpaceEvents }
