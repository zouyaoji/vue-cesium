import type { AnyFunction, VcComponentInternalInstance, VcViewerProvider } from '@vue-cesium/utils/types'
import { $, getInstanceListener } from '@vue-cesium/utils/private/vm'
import { ref } from 'vue'
import type { VcTooltipRef } from '@vue-cesium/components/ui'
import { isObject } from '@vue-cesium/utils/util'

export default function (props, { emit }, vcInstance: VcComponentInternalInstance, $services: VcViewerProvider) {
  // state
  const zoombarTop = ref(65)
  const zoomInTooltipRef = ref<VcTooltipRef>(null)
  const zoomOutTooltipRef = ref<VcTooltipRef>(null)
  const zoomBarTooltipRef = ref<VcTooltipRef>(null)
  let screenSpaceEventHandler: Cesium.ScreenSpaceEventHandler

  let zoominTickFunction: AnyFunction<void>
  let zoominMouseUpFunction: AnyFunction<void>
  let isZoomin = false
  let zoominLastTimestamp = 0
  let unsubscribeFromClockTickZoomin: AnyFunction<void>

  let zoomoutTickFunction: AnyFunction<void>
  let zoomoutMouseUpFunction: AnyFunction<void>
  let iszoomout = false
  let zoomoutLastTimestamp = 0
  let unsubscribeFromClockTickZoomout: AnyFunction<void>

  let zoomBarScrollMouseMoveFunction: AnyFunction<void>
  let zoomBarScrollMouseUpFunction: AnyFunction<void>
  let zoombarTickFunction: AnyFunction<void>
  let isZoomBarScrolling = false
  let unsubscribeFromClockTickZoomBar: AnyFunction<void>
  let container: HTMLElement

  // methods
  const handleZoomInMouseDown = e => {
    const { defined, getTimestamp, SceneMode, ScreenSpaceEventType } = Cesium
    const { viewer } = $services
    $(zoomInTooltipRef)?.hide()
    $(zoomOutTooltipRef)?.hide()
    $(zoomBarTooltipRef)?.hide()
    screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
    defined(zoominTickFunction) && viewer.clock.onTick.removeEventListener(zoominTickFunction)
    ;(zoominMouseUpFunction as any) = undefined
    ;(zoominTickFunction as any) = undefined
    isZoomin = true
    zoominLastTimestamp = getTimestamp()
    const scene = viewer.scene
    const camera = scene.camera
    zoominTickFunction = () => {
      viewer.scene.mode === SceneMode.COLUMBUS_VIEW || viewer.scene.mode === SceneMode.SCENE2D ? camera.zoomIn() : handlezoom(1)
    }

    zoominMouseUpFunction = () => {
      isZoomin = false
      screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
      defined(zoominTickFunction) && viewer.clock.onTick.removeEventListener(zoominTickFunction)
      ;(zoominMouseUpFunction as any) = undefined
      ;(zoominTickFunction as any) = undefined
    }

    screenSpaceEventHandler.setInputAction(zoominMouseUpFunction, ScreenSpaceEventType.LEFT_UP)
    unsubscribeFromClockTickZoomin = viewer.clock.onTick.addEventListener(zoominTickFunction)
  }

  const handleZoomOutMouseDown = event => {
    $(zoomInTooltipRef)?.hide()
    $(zoomOutTooltipRef)?.hide()
    $(zoomBarTooltipRef)?.hide()
    const { defined, getTimestamp, SceneMode, ScreenSpaceEventType } = Cesium
    const { viewer } = $services
    screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
    defined(zoomoutTickFunction) && viewer.clock.onTick.removeEventListener(zoomoutTickFunction)
    ;(zoomoutMouseUpFunction as any) = undefined
    ;(zoomoutTickFunction as any) = undefined
    iszoomout = false
    zoomoutLastTimestamp = getTimestamp()
    const scene = viewer.scene
    const camera = scene.camera
    zoomoutTickFunction = () => {
      viewer.scene.mode === SceneMode.COLUMBUS_VIEW || viewer.scene.mode === SceneMode.SCENE2D ? camera.zoomOut() : handlezoom(-1)
    }

    zoomoutMouseUpFunction = () => {
      iszoomout = false
      screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
      defined(zoomoutTickFunction) && viewer.clock.onTick.removeEventListener(zoomoutTickFunction)
      ;(zoomoutMouseUpFunction as any) = undefined
      ;(zoomoutTickFunction as any) = undefined
    }

    screenSpaceEventHandler.setInputAction(zoomoutMouseUpFunction, ScreenSpaceEventType.LEFT_UP)
    unsubscribeFromClockTickZoomout = viewer.clock.onTick.addEventListener(zoomoutTickFunction)
  }

  const handleZoomBarScrollMouseDown = event => {
    $(zoomInTooltipRef)?.hide()
    $(zoomOutTooltipRef)?.hide()
    $(zoomBarTooltipRef)?.hide()
    const { Cartesian2, defined, SceneMode } = Cesium
    const { viewer } = $services
    document.removeEventListener('mousemove', zoomBarScrollMouseMoveFunction, false)
    document.removeEventListener('touchmove', zoomBarScrollMouseMoveFunction, false)
    document.removeEventListener('mouseup', zoomBarScrollMouseUpFunction, false)
    document.removeEventListener('touchend', zoomBarScrollMouseUpFunction, false)
    defined(zoombarTickFunction) && viewer.clock.onTick.removeEventListener(zoombarTickFunction)
    ;(zoomBarScrollMouseUpFunction as any) = undefined
    ;(zoombarTickFunction as any) = undefined
    isZoomBarScrolling = true
    const scene = viewer.scene
    const camera = scene.camera

    zoombarTickFunction = () => {
      const zoomOffset = zoombarTop.value - 65
      if (zoomOffset > 0) {
        if (viewer.scene.mode === SceneMode.COLUMBUS_VIEW || viewer.scene.mode === SceneMode.SCENE2D) {
          camera.zoomOut()
        } else {
          handlezoom(-1)
        }
      } else if (zoomOffset < 0) {
        if (viewer.scene.mode === SceneMode.COLUMBUS_VIEW || viewer.scene.mode === SceneMode.SCENE2D) {
          camera.zoomIn()
        } else {
          handlezoom(1)
        }
      }
    }
    zoomBarScrollMouseMoveFunction = e => {
      const zoombarTopMove = zoombarTop.value
      const clientRect = e.target.parentElement.getBoundingClientRect()
      const rectNavigation = container.getBoundingClientRect()
      const endPosition = new Cesium.Cartesian2()
      endPosition.x = e.type === 'touchmove' ? e.changedTouches[0].clientX - rectNavigation.left : e.clientX - rectNavigation.left
      endPosition.y = e.type === 'touchmove' ? e.changedTouches[0].clientY - rectNavigation.top : e.clientY - rectNavigation.top
      const padding = new Cartesian2(clientRect.width - endPosition.x, clientRect.height - endPosition.y)
      let offset = padding.y - 16
      offset = offset < 0 ? 0 : offset
      offset = offset > 120 ? 120 : offset
      zoombarTop.value = 120 - offset

      const zoomFlag = zoombarTop.value - zoombarTopMove
      if (zoomFlag > 0) {
        if (viewer.scene.mode === SceneMode.COLUMBUS_VIEW || viewer.scene.mode === SceneMode.SCENE2D) {
          camera.zoomOut()
        } else {
          handlezoom(-1)
        }
      } else {
        if (viewer.scene.mode === SceneMode.COLUMBUS_VIEW || viewer.scene.mode === SceneMode.SCENE2D) {
          camera.zoomIn()
        } else {
          handlezoom(1)
        }
      }
    }

    zoomBarScrollMouseUpFunction = () => {
      isZoomBarScrolling = false
      document.removeEventListener('mousemove', zoomBarScrollMouseMoveFunction, false)
      document.removeEventListener('touchmove', zoomBarScrollMouseMoveFunction, false)
      document.removeEventListener('mouseup', zoomBarScrollMouseUpFunction, false)
      document.removeEventListener('touchend', zoomBarScrollMouseUpFunction, false)
      defined(zoombarTickFunction) && viewer.clock.onTick.removeEventListener(zoombarTickFunction)
      ;(zoomBarScrollMouseUpFunction as any) = undefined
      ;(zoomBarScrollMouseMoveFunction as any) = undefined
      ;(zoombarTickFunction as any) = undefined
      zoombarTop.value = 65
    }
    document.addEventListener('mousemove', zoomBarScrollMouseMoveFunction, false)
    document.addEventListener('touchmove', zoomBarScrollMouseMoveFunction, false)
    document.addEventListener('mouseup', zoomBarScrollMouseUpFunction, false)
    document.addEventListener('touchend', zoomBarScrollMouseUpFunction, false)
    unsubscribeFromClockTickZoomBar = viewer.clock.onTick.addEventListener(zoombarTickFunction)
  }

  const handlezoom = i => {
    const { Cartesian2, Cartesian3, defined, Ellipsoid, Math } = Cesium
    const { viewer } = $services
    const scene = viewer.scene
    const camera = scene.camera
    const canvas = scene.canvas
    const centerPixel = new Cartesian2()
    centerPixel.x = canvas.clientWidth / 2
    centerPixel.y = canvas.clientHeight / 2
    const centerPosition = pickGlobe(centerPixel)
    if (defined(centerPosition)) {
      const distance = Cartesian3.distance(camera.position, centerPosition)
      let factor = 0.0618 * i * 0.2
      factor = distance > 300 ? factor : 2 * factor
      const amount = distance * factor
      const direction = new Cartesian3()
      Cartesian3.subtract(centerPosition, camera.position, direction)
      const cameraRight = Cartesian3.clone(camera.right)
      const dot = Cartesian3.dot(direction, cameraRight)
      const movementVector = new Cartesian3()
      Cartesian3.multiplyByScalar(cameraRight, dot, movementVector)
      Cartesian3.subtract(direction, movementVector, direction)
      Cartesian3.normalize(direction, direction)
      camera.move(direction, amount)
      const centerPositionNormal = new Cartesian3()
      Cartesian3.normalize(centerPosition, centerPositionNormal)

      const pickPosition = camera.pickEllipsoid(centerPixel, viewer.scene.globe.ellipsoid)
      if (
        isObject(pickPosition) &&
        defined(pickPosition) &&
        !isNaN(pickPosition.x) &&
        !isNaN(pickPosition.y) &&
        !isNaN(pickPosition.z) &&
        !(camera.positionCartographic.height < 0)
      ) {
        Cartesian3.normalize(pickPosition, pickPosition)
        const angle = Cartesian3.angleBetween(centerPositionNormal, pickPosition)
        if (!Math.equalsEpsilon(angle, 0, Math.EPSILON10)) {
          const axis = Cartesian3.cross(centerPositionNormal, pickPosition, new Cartesian3())
          camera.rotate(axis, angle)
          const listener = getInstanceListener(vcInstance, 'zoomEvt')
          listener &&
            emit('zoomEvt', {
              type: i === 1 ? 'zoomIn' : 'zoomOut',
              camera: viewer.camera,
              status: 'end'
            })
        }
      }
    }
  }

  const pickGlobe = mousePosition => {
    const { defined, Cartesian3 } = Cesium
    const { viewer } = $services
    const scene = viewer.scene
    const globe = scene.globe
    const camera = scene.camera
    if (defined(globe)) {
      let depthIntersection
      if (scene.pickPositionSupported) {
        depthIntersection = scene.pickPositionWorldCoordinates(mousePosition)
      }
      const ray = camera.getPickRay(mousePosition)
      const rayIntersection = globe.pick(ray, scene)
      const pickDistance = defined(depthIntersection) ? Cartesian3.distance(depthIntersection, camera.positionWC) : Number.POSITIVE_INFINITY
      const rayDistance =
        isObject(rayIntersection) && defined(rayIntersection) ? Cartesian3.distance(rayIntersection, camera.positionWC) : Number.POSITIVE_INFINITY
      return rayDistance > pickDistance ? depthIntersection : rayIntersection
    }
  }

  const onTooltipBeforeShow = e => {
    if (zoomBarScrollMouseMoveFunction !== undefined || zoominTickFunction !== undefined || zoomoutTickFunction !== undefined) {
      e.cancel = true
    }
  }

  const load = el => {
    container = el
    screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(el)
    return true
  }

  const unload = () => {
    document.removeEventListener('mousemove', zoomBarScrollMouseMoveFunction, false)
    document.removeEventListener('touchmove', zoomBarScrollMouseMoveFunction, false)
    document.removeEventListener('mouseup', zoomBarScrollMouseUpFunction, false)
    document.removeEventListener('touchend', zoomBarScrollMouseUpFunction, false)
    unsubscribeFromClockTickZoomin?.()
    unsubscribeFromClockTickZoomout?.()
    unsubscribeFromClockTickZoomBar?.()
    screenSpaceEventHandler?.destroy()
    return true
  }

  return {
    handleZoomInMouseDown,
    handleZoomOutMouseDown,
    handleZoomBarScrollMouseDown,
    load,
    unload,
    zoombarTop,
    zoomInTooltipRef,
    zoomOutTooltipRef,
    zoomBarTooltipRef,
    onTooltipBeforeShow
  }
}
