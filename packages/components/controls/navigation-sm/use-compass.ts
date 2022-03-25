import { ref } from 'vue'
import type { AnyFunction, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import CameraFlightPath from '../compass/CameraFlightPath'
import { getInstanceListener, $ } from '@vue-cesium/utils/private/vm'
import type { VcTooltipRef } from '@vue-cesium/components/ui'
import { isObject } from '@vue-cesium/utils/util'

export default function (props, { emit }, vcInstance: VcComponentInternalInstance) {
  // state
  const vectorScratch: any = {}
  const oldTransformScratch: any = {}
  const newTransformScratch: any = {}
  const centerScratch: any = {}

  let unsubscribeFromPostRender: AnyFunction<void>
  let unsubscribeFromClockTick: AnyFunction<void>

  let rotateEastMouseUpFunction: AnyFunction<void>
  let rotateEastTickFunction: AnyFunction<void>

  const heading = ref(0)

  let isrotateEasting = false
  let rotateEastLastTimestamp = 0

  let rotateMouseUpFunction: AnyFunction<void>
  let rotateMouseMoveFunction: AnyFunction<void>
  let isRotating = false
  let rotateInitialCursorAngle = 0
  let rotateFrame: any = {}
  let rotateIsLook = false
  let rotateInitialCameraAngle = 0
  let rotateInitialCameraDistance: any = {}

  let screenSpaceEventHandler: Cesium.ScreenSpaceEventHandler

  let tiltMouseMoveFunction: AnyFunction<void>
  let tiltMouseUpFunction: AnyFunction<void>
  let isTilting = false
  let tiltFrame: any = {}
  let tiltInitialCursorAngle = 0
  const tiltbarLeft = ref(56)
  const tiltbarTop = ref(3)
  let clickStartPosition

  const tooltipRef = ref<VcTooltipRef>(null)

  // methods
  const handleMouseDown = (e: Event) => {
    if (e.stopPropagation) e.stopPropagation()
    if (e.preventDefault) e.preventDefault()

    $(tooltipRef)?.hide()

    const { Cartesian2, SceneMode, Math: CesiumMath } = Cesium
    const scene = vcInstance.viewer.scene
    if (scene.mode === SceneMode.MORPHING) {
      return true
    }
    const compassElement = e.currentTarget as HTMLElement
    const compassRectangle = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const center = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2.0, (compassRectangle.bottom - compassRectangle.top) / 2.0)
    let clickLocation
    if (e instanceof MouseEvent) {
      clickLocation = new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top)
      clickStartPosition = new Cartesian2(e.clientX, e.clientY)
    } else if (e instanceof TouchEvent) {
      clickLocation = new Cartesian2(e.changedTouches[0].clientX - compassRectangle.left, e.changedTouches[0].clientY - compassRectangle.top)
      clickStartPosition = new Cartesian2(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
    }
    const vector = Cartesian2.subtract(clickLocation, center, vectorScratch)

    const distanceFromCenter = Cartesian2.magnitude(vector)

    if (distanceFromCenter > 30 && distanceFromCenter < 45) {
      rotate(compassElement, vector)
    } else if (!(distanceFromCenter > 50 && distanceFromCenter < 70)) {
      rotateEast(compassElement, vector)
    } else {
      const angle = CesiumMath.PI_OVER_TWO - Math.atan2(-vector.y, vector.x)
      angle >= 0 && angle <= CesiumMath.PI_OVER_TWO && tilt(compassElement, vector)
    }
  }

  const handleMouseUp = event => {
    const { Cartesian2, Math: CesiumMath } = Cesium
    const compassRectangle = event.currentTarget.getBoundingClientRect()
    const center = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2.0, (compassRectangle.bottom - compassRectangle.top) / 2.0)
    const clickLocation =
      event.type === 'mouseup'
        ? new Cartesian2(event.clientX - compassRectangle.left, event.clientY - compassRectangle.top)
        : new Cartesian2(event.changedTouches[0].clientX - compassRectangle.left, event.changedTouches[0].clientY - compassRectangle.top)
    const vector = Cartesian2.subtract(clickLocation, center, vectorScratch)
    const magnitude = Cartesian2.magnitude(vector)
    if (magnitude > 30 && magnitude < 45) {
      const angle = CesiumMath.toDegrees(Math.atan2(-vector.y, vector.x))
      const clickStartPositionUp =
        event.type === 'mouseup'
          ? new Cartesian2(event.clientX, event.clientY)
          : new Cartesian2(event.changedTouches[0].clientX, event.changedTouches[0].clientY)
      const dX = clickStartPositionUp.x - clickStartPosition.x
      const dY = clickStartPositionUp.y - clickStartPosition.y
      const distance = Math.sqrt(dX * dX + dY * dY)
      if (distance > 5) {
        return
      }
      const headingDegree = CesiumMath.toDegrees(heading.value)
      const m = Math.abs(angle - headingDegree)
      const scene = vcInstance.viewer.scene
      if ((angle > 0 && headingDegree > 0 && headingDegree < 90 && m > 80 && m < 100) || (m > 260 && m < 280)) {
        scene.camera.flyTo({
          destination: scene.camera.position,
          orientation: {
            heading: 0,
            pitch: scene.camera.pitch
          }
        })
      }
    }
  }
  const handleDoubleClick = e => {
    const { Cartesian2, Cartesian3, defined, Matrix4, Ray, SceneMode, Transforms } = Cesium
    const { viewer } = vcInstance
    const scene = viewer.scene
    const camera = scene.camera
    const sscc = scene.screenSpaceCameraController

    if (scene.mode === SceneMode.MORPHING || !sscc.enableInputs) {
      return true
    }
    if (scene.mode === SceneMode.COLUMBUS_VIEW && !sscc.enableTranslate) {
      return
    }
    if (scene.mode === SceneMode.SCENE3D || scene.mode === SceneMode.COLUMBUS_VIEW) {
      if (!sscc.enableLook) {
        return
      }

      if (scene.mode === SceneMode.SCENE3D) {
        if (!sscc.enableRotate) {
          return
        }
      }
    }

    const windowPosition = new Cartesian2()
    windowPosition.x = scene.canvas.clientWidth / 2
    windowPosition.y = scene.canvas.clientHeight / 2
    const pickRayScratch = new Ray()
    const ray = camera.getPickRay(windowPosition, pickRayScratch)

    const center = scene.globe.pick(ray, scene, centerScratch)
    if (!defined(center)) {
      // Globe is barely visible, so reset to home view.
      viewer.camera.flyHome()
      return
    }

    const listener = getInstanceListener(vcInstance, 'compassEvt')
    listener &&
      emit('compassEvt', {
        type: 'reset',
        camera: viewer.camera,
        status: 'start',
        target: e.currentTarget
      })
    const rotateFrame = Transforms.eastNorthUpToFixedFrame(center || new Cartesian3(), viewer.scene.globe.ellipsoid)
    const lookVector = Cartesian3.subtract(center || new Cartesian3(), camera.position, new Cartesian3())
    const flight = CameraFlightPath.createTween(scene, {
      destination: Matrix4.multiplyByPoint(rotateFrame, new Cartesian3(0.0, 0.0, Cartesian3.magnitude(lookVector)), new Cartesian3()),
      direction: Matrix4.multiplyByPointAsVector(rotateFrame, new Cartesian3(0.0, 0.0, -1.0), new Cartesian3()),
      up: Matrix4.multiplyByPointAsVector(rotateFrame, new Cartesian3(0.0, 1.0, 0.0), new Cartesian3()),
      duration: props.duration,
      complete: () => {
        listener &&
          emit('compassEvt', {
            type: 'reset',
            camera: viewer.camera,
            status: 'end',
            target: e.currentTarget
          })
      },
      cancel: () => {
        listener &&
          emit('compassEvt', {
            type: 'reset',
            camera: viewer.camera,
            status: 'cancel',
            target: e.currentTarget
          })
      }
    })
    ;(scene as any).tweens.add(flight)
  }

  // methods
  const viewerChange = () => {
    const { defined } = Cesium
    if (defined(vcInstance.viewer)) {
      if (unsubscribeFromPostRender) {
        unsubscribeFromPostRender()
        ;(unsubscribeFromPostRender as any) = undefined
      }

      unsubscribeFromPostRender = vcInstance.viewer.scene.postRender.addEventListener(function () {
        if (heading.value !== vcInstance.viewer.scene.camera.heading) {
          heading.value = vcInstance.viewer.scene.camera.heading
        }
      })
    } else {
      if (unsubscribeFromPostRender) {
        unsubscribeFromPostRender()
        ;(unsubscribeFromPostRender as any) = undefined
      }
    }
  }

  const rotateEast = (compassElement: HTMLElement, cursorVector: Cesium.Cartesian2) => {
    const { defined, getTimestamp, SceneMode, Math: CesiumMath, ScreenSpaceEventType } = Cesium
    const scene = vcInstance.viewer.scene
    const sscc = scene.screenSpaceCameraController
    // do not orbit if it is disabled
    if (scene.mode === SceneMode.MORPHING || !sscc.enableInputs) {
      return
    }

    switch (scene.mode) {
      case SceneMode.COLUMBUS_VIEW:
        if (sscc.enableLook) {
          break
        }
        if (!sscc.enableTranslate || !sscc.enableTilt) {
          return
        }
        break
      case SceneMode.SCENE3D:
        if (sscc.enableLook) {
          break
        }
        if (!sscc.enableTilt || !sscc.enableRotate) {
          return
        }
        break
      case Cesium.SceneMode.SCENE2D:
        if (!sscc.enableTranslate) {
          return
        }
        break
    }

    screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
    if (defined(rotateEastTickFunction)) {
      vcInstance.viewer.clock.onTick.removeEventListener(rotateEastTickFunction)
    }

    ;(rotateEastMouseUpFunction as any) = undefined
    ;(rotateEastTickFunction as any) = undefined

    isrotateEasting = true
    rotateEastLastTimestamp = getTimestamp()

    let angle = CesiumMath.PI_OVER_TWO - Math.atan2(-cursorVector.y, cursorVector.x)
    const quarterPI = Math.PI / 4
    let roateDirection = 0
    const roateType = {
      LEFT: 1,
      RIGHT: 2,
      UP: 3,
      DOWN: 4
    }
    roateDirection =
      angle >= -quarterPI && quarterPI >= angle
        ? roateType.DOWN
        : angle >= quarterPI && 3 * quarterPI >= angle
        ? roateType.RIGHT
        : angle >= 3 * quarterPI && 5 * quarterPI >= angle
        ? roateType.UP
        : roateType.LEFT

    const listener = getInstanceListener(vcInstance, 'compassEvt')
    let type = `rotateEast`
    switch (roateDirection) {
      case roateType.LEFT:
        type = 'rotateWest'
        break
      case roateType.RIGHT:
        type = 'rotateEast'
        break
      case roateType.UP:
        type = 'rotateNorth'
        break
      case roateType.DOWN:
        type = 'rotateSouth'
    }

    listener &&
      emit('compassEvt', {
        type: type,
        camera: scene.camera,
        status: 'start',
        target: compassElement
      })

    rotateEastTickFunction = function (e) {
      const scene = vcInstance.viewer.scene
      const camera = scene.camera
      const timestamp = getTimestamp()
      angle = 20 * Math.abs(camera.positionCartographic.height / 6378317) * 0.0005
      switch (roateDirection) {
        case roateType.LEFT:
          camera.rotateLeft(angle)
          break
        case roateType.RIGHT:
          camera.rotateRight(angle)
          break
        case roateType.UP:
          camera.rotate(camera.right, -angle)
          break
        case roateType.DOWN:
          camera.rotate(camera.right, angle)
      }
      rotateEastLastTimestamp = timestamp
      listener &&
        emit('compassEvt', {
          type: type,
          camera: scene.camera,
          status: 'changing',
          target: compassElement
        })
    }

    rotateEastMouseUpFunction = function (e) {
      // TODO: if mouse didn't move, reset view to looking down, north is up?

      isrotateEasting = false
      screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
      defined(rotateEastTickFunction) && vcInstance.viewer.clock.onTick.removeEventListener(rotateEastTickFunction)
      ;(rotateEastMouseUpFunction as any) = undefined
      ;(rotateEastTickFunction as any) = undefined

      listener &&
        emit('compassEvt', {
          type: type,
          camera: scene.camera,
          status: 'end',
          target: compassElement
        })
    }

    screenSpaceEventHandler.setInputAction(rotateEastMouseUpFunction, ScreenSpaceEventType.LEFT_UP)
    unsubscribeFromClockTick = vcInstance.viewer.clock.onTick.addEventListener(rotateEastTickFunction)
  }

  const rotate = (compassElement: HTMLElement, cursorVector: Cesium.Cartesian2) => {
    if (!props.enableCompassOuterRing) {
      return
    }

    const scene = vcInstance.viewer.scene
    let camera = scene.camera
    const sscc = scene.screenSpaceCameraController
    // do not rotate in 2D mode or if rotating is disabled
    if (scene.mode === Cesium.SceneMode.MORPHING || scene.mode === Cesium.SceneMode.SCENE2D || !sscc.enableInputs) {
      return
    }
    if (!sscc.enableLook && (scene.mode === Cesium.SceneMode.COLUMBUS_VIEW || (scene.mode === Cesium.SceneMode.SCENE3D && !sscc.enableRotate))) {
      return
    }
    // Remove existing event handlers, if any.
    document.removeEventListener('mousemove', rotateMouseMoveFunction, false)
    document.removeEventListener('touchmove', rotateMouseMoveFunction, false)
    document.removeEventListener('mouseup', rotateMouseUpFunction, false)
    document.removeEventListener('touchend', rotateMouseUpFunction, false)
    const { Cartesian2, Cartesian3, defined, Math: CesiumMath, Matrix4, Ray, Transforms } = Cesium
    ;(rotateMouseMoveFunction as any) = undefined
    ;(rotateMouseUpFunction as any) = undefined

    const listener = getInstanceListener(vcInstance, 'compassEvt')
    listener &&
      emit('compassEvt', {
        type: 'rotate',
        camera: scene.camera,
        status: 'start',
        target: compassElement
      })

    isRotating = true
    rotateInitialCursorAngle = Math.atan2(-cursorVector.y, cursorVector.x)

    const windowPosition = new Cartesian2()
    windowPosition.x = scene.canvas.clientWidth / 2
    windowPosition.y = scene.canvas.clientHeight / 2
    const pickRayScratch = new Ray()
    const ray = camera.getPickRay(windowPosition, pickRayScratch)

    const viewCenter = scene.globe.pick(ray, scene, centerScratch)
    if (!defined(viewCenter)) {
      rotateFrame = Transforms.eastNorthUpToFixedFrame(camera.positionWC, scene.globe.ellipsoid, newTransformScratch)
      rotateIsLook = true
    } else {
      rotateFrame = Transforms.eastNorthUpToFixedFrame(viewCenter || new Cartesian3(), scene.globe.ellipsoid, newTransformScratch)
      rotateIsLook = false
    }

    let oldTransform = Matrix4.clone(camera.transform, oldTransformScratch)
    camera.lookAtTransform(rotateFrame)
    rotateInitialCameraAngle = Math.atan2(camera.position.y, camera.position.x)
    rotateInitialCameraDistance = Cartesian3.magnitude(new Cartesian3(camera.position.x, camera.position.y, 0.0))
    camera.lookAtTransform(oldTransform)

    rotateMouseMoveFunction = function (e: MouseEvent | TouchEvent) {
      const compassRectangle = compassElement.getBoundingClientRect()
      const center = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2.0, (compassRectangle.bottom - compassRectangle.top) / 2.0)
      let clickLocation
      if (e instanceof MouseEvent) {
        clickLocation = new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top)
      } else if (e instanceof TouchEvent) {
        clickLocation = new Cartesian2(e.changedTouches[0].clientX - compassRectangle.left, e.changedTouches[0].clientY - compassRectangle.top)
      }
      const vector = Cartesian2.subtract(clickLocation, center, vectorScratch)
      const angle = Math.atan2(-vector.y, vector.x)

      const angleDifference = angle - rotateInitialCursorAngle
      const newCameraAngle = CesiumMath.zeroToTwoPi(rotateInitialCameraAngle - angleDifference)

      camera = vcInstance.viewer.scene.camera

      oldTransform = Matrix4.clone(camera.transform, oldTransformScratch)
      camera.lookAtTransform(rotateFrame)
      const currentCameraAngle = Math.atan2(camera.position.y, camera.position.x)
      camera.rotateRight(newCameraAngle - currentCameraAngle)
      camera.lookAtTransform(oldTransform)
      listener &&
        emit('compassEvt', {
          type: 'rotate',
          camera: scene.camera,
          status: 'changing',
          target: compassElement
        })
    }

    rotateMouseUpFunction = function (e) {
      isRotating = false
      document.removeEventListener('mousemove', rotateMouseMoveFunction, false)
      document.removeEventListener('touchmove', rotateMouseMoveFunction, false)
      document.removeEventListener('mouseup', rotateMouseUpFunction, false)
      document.removeEventListener('touchend', rotateMouseUpFunction, false)
      ;(rotateMouseMoveFunction as any) = undefined
      ;(rotateMouseUpFunction as any) = undefined

      listener &&
        emit('compassEvt', {
          type: 'rotate',
          camera: scene.camera,
          status: 'end',
          target: compassElement
        })
    }

    document.addEventListener('mousemove', rotateMouseMoveFunction, false)
    document.addEventListener('touchmove', rotateMouseMoveFunction, false)
    document.addEventListener('mouseup', rotateMouseUpFunction, false)
    document.addEventListener('touchend', rotateMouseUpFunction, false)
  }

  const tilt = (compassElement: HTMLElement, cursorVector: Cesium.Cartesian2) => {
    const { Cartesian2, defined, Math: CesiumMath, Matrix4, ScreenSpaceEventType, Transforms } = Cesium
    // Remove existing event handlers, if any.
    screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE)
    screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
    ;(tiltMouseMoveFunction as any) = undefined
    ;(tiltMouseUpFunction as any) = undefined
    tiltInitialCursorAngle = CesiumMath.PI_OVER_TWO - Math.atan2(-cursorVector.y, cursorVector.x)
    tiltInitialCursorAngle = tiltInitialCursorAngle < 0 ? 0 : tiltInitialCursorAngle
    tiltInitialCursorAngle = tiltInitialCursorAngle > CesiumMath.PI_OVER_TWO ? CesiumMath.PI_OVER_TWO : tiltInitialCursorAngle
    isTilting = true
    const scene = vcInstance.viewer.scene
    const camera = scene.camera
    const windowPosition = new Cartesian2()
    windowPosition.x = scene.canvas.clientWidth / 2
    windowPosition.y = scene.canvas.clientHeight / 2
    let pickPosition = camera.pickEllipsoid(windowPosition, scene.globe.ellipsoid)
    if (!defined(pickPosition)) {
      for (; windowPosition.y < scene.canvas.clientHeight; ) {
        windowPosition.y += 5
        pickPosition = camera.pickEllipsoid(windowPosition, scene.globe.ellipsoid)
      }
    }

    const listener = getInstanceListener(vcInstance, 'compassEvt')
    listener &&
      emit('compassEvt', {
        type: 'tilt',
        camera: scene.camera,
        status: 'start',
        target: compassElement
      })

    isObject(pickPosition) && defined(pickPosition) && (tiltFrame = Transforms.eastNorthUpToFixedFrame(pickPosition, scene.globe.ellipsoid))
    tiltMouseMoveFunction = e => {
      isTilting = true
      const compassRectangle = compassElement.getBoundingClientRect()
      const center = new Cesium.Cartesian2(
        (compassRectangle.right - compassRectangle.left) / 2.0,
        (compassRectangle.bottom - compassRectangle.top) / 2.0
      )
      const endPosition = Cartesian2.clone(e.endPosition)
      const vector = Cartesian2.subtract(endPosition, center, vectorScratch)
      let angle = CesiumMath.PI_OVER_TWO - Math.atan2(-vector.y, vector.x)
      angle = angle < 0 ? 0 : angle
      angle = angle > CesiumMath.PI_OVER_TWO ? CesiumMath.PI_OVER_TWO : angle
      const camera = vcInstance.viewer.scene.camera
      const oldTransform = Matrix4.clone(camera.transform, oldTransformScratch)
      camera.lookAtTransform(tiltFrame)
      const rotateUpAngle = angle - tiltInitialCursorAngle
      camera.rotateUp(rotateUpAngle)
      tiltInitialCursorAngle = angle
      camera.lookAtTransform(oldTransform)
      let level = Math.ceil(angle / (Math.PI / 40))
      level = level > 19 ? 19 : level
      const position = getPoints()[level]
      tiltbarLeft.value = position.x
      tiltbarTop.value = position.y
      listener &&
        emit('compassEvt', {
          type: 'tilt',
          camera: scene.camera,
          status: 'changing',
          target: compassElement
        })
    }

    tiltMouseUpFunction = function (e) {
      isTilting = false
      screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE)
      screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
      ;(tiltMouseMoveFunction as any) = undefined
      ;(tiltMouseUpFunction as any) = undefined
      listener &&
        emit('compassEvt', {
          type: 'tilt',
          camera: scene.camera,
          status: 'end',
          target: compassElement
        })
    }

    screenSpaceEventHandler.setInputAction(tiltMouseMoveFunction, ScreenSpaceEventType.MOUSE_MOVE)
    screenSpaceEventHandler.setInputAction(tiltMouseUpFunction, ScreenSpaceEventType.LEFT_UP)
  }

  const onTooltipBeforeShow = e => {
    if (rotateMouseMoveFunction !== undefined) {
      e.cancel = true
    }
  }

  const getTiltbarPosition = () => {
    const { Math: CesiumMath } = Cesium
    const pitch = CesiumMath.PI_OVER_TWO + vcInstance.viewer.scene.camera.pitch
    const length = Math.PI / 2 / 20
    let level = Math.floor(pitch / length)
    level = level > 19 ? 19 : level
    level = level < 0 ? 0 : level
    tiltbarLeft.value = getPoints()[level].x
    tiltbarTop.value = getPoints()[level].y
  }

  const load = async (viewer: Cesium.Viewer, el) => {
    vcInstance.viewer = viewer
    heading.value = viewer.scene.camera.heading
    viewerChange()
    screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(el)
    getTiltbarPosition()
    return true
  }

  const unload = async () => {
    document.removeEventListener('mousemove', rotateMouseMoveFunction, false)
    document.removeEventListener('touchmove', rotateMouseMoveFunction, false)
    document.removeEventListener('mouseup', rotateMouseUpFunction, false)
    document.removeEventListener('touchend', rotateMouseUpFunction, false)

    unsubscribeFromClockTick && unsubscribeFromClockTick()
    unsubscribeFromPostRender && unsubscribeFromPostRender()
    screenSpaceEventHandler?.destroy()
    return true
  }

  return {
    heading,
    handleDoubleClick,
    handleMouseDown,
    handleMouseUp,
    onTooltipBeforeShow,
    viewerChange,
    load,
    unload,
    tiltbarLeft,
    tiltbarTop,
    tooltipRef
  }
}

function getPoints() {
  return [
    {
      x: 56,
      y: 3
    },
    {
      x: 59,
      y: 4
    },
    {
      x: 64,
      y: 5
    },
    {
      x: 69,
      y: 6
    },
    {
      x: 74,
      y: 7
    },
    {
      x: 79,
      y: 9
    },
    {
      x: 84,
      y: 12
    },
    {
      x: 89,
      y: 15
    },
    {
      x: 92,
      y: 19
    },
    {
      x: 94,
      y: 20
    },
    {
      x: 99,
      y: 25
    },
    {
      x: 104,
      y: 34
    },
    {
      x: 106,
      y: 40
    },
    {
      x: 107,
      y: 44
    },
    {
      x: 107,
      y: 46
    },
    {
      x: 107,
      y: 48
    },
    {
      x: 107,
      y: 50
    },
    {
      x: 107,
      y: 52
    },
    {
      x: 107,
      y: 54
    },
    {
      x: 107,
      y: 56
    }
  ]
}
