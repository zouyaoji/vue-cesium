import { ref } from 'vue'
import { AnyFunction, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import CameraFlightPath from './CameraFlightPath'
import { getInstanceListener, $ } from '@vue-cesium/utils/private/vm'
import { VcTooltip } from '@vue-cesium/components/ui'

export default function (props, { emit }, vcInstance: VcComponentInternalInstance) {
  // state
  const vectorScratch: any = {}
  const oldTransformScratch: any = {}
  const newTransformScratch: any = {}
  const centerScratch: any = {}

  let unsubscribeFromPostRender: AnyFunction<void> = undefined
  let unsubscribeFromClockTick: AnyFunction<void> = undefined

  let orbitMouseMoveFunction: AnyFunction<void> = undefined
  let orbitMouseUpFunction: AnyFunction<void> = undefined
  let orbitTickFunction: AnyFunction<void> = undefined

  const heading = ref(0)
  const orbitCursorAngle = ref(0)
  const orbitCursorOpacity = ref(0)

  let isOrbiting = false
  let orbitLastTimestamp = 0
  let orbitFrame: any = {}
  let orbitIsLook = false

  let rotateMouseUpFunction: AnyFunction<void> = undefined
  let rotateMouseMoveFunction: AnyFunction<void> = undefined
  let isRotating = false
  let rotateInitialCursorAngle = 0
  let rotateFrame: any = {}
  let rotateIsLook = false
  let rotateInitialCameraAngle = 0
  let rotateInitialCameraDistance: any = {}

  const iconOuterTooltipRef = ref<typeof VcTooltip>(null)
  const iconInnerTooltipRef = ref<typeof VcTooltip>(null)

  // methods
  const handleMouseDown = (e: MouseEvent | TouchEvent) => {
    if (e.stopPropagation) e.stopPropagation()
    if (e.preventDefault) e.preventDefault()

    $(iconOuterTooltipRef)?.hide()
    $(iconInnerTooltipRef)?.hide()

    const { SceneMode, Cartesian2 } = Cesium
    const scene = vcInstance.viewer.scene
    if (scene.mode === SceneMode.MORPHING) {
      return true
    }

    const compassElement = e.currentTarget as HTMLElement
    const compassRectangle = compassElement.getBoundingClientRect()
    const maxDistance = compassRectangle.width / 2.0
    const center = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2.0, (compassRectangle.bottom - compassRectangle.top) / 2.0)
    let clickLocation
    if (e instanceof MouseEvent) {
      clickLocation = new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top)
    } else if (e instanceof TouchEvent) {
      clickLocation = new Cartesian2(e.changedTouches[0].clientX - compassRectangle.left, e.changedTouches[0].clientY - compassRectangle.top)
    }
    const vector = Cartesian2.subtract(clickLocation, center, vectorScratch)
    const distanceFromCenter = Cartesian2.magnitude(vector)
    const distanceFraction = distanceFromCenter / maxDistance
    const nominalTotalRadius = 145
    const norminalGyroRadius = 50

    if (distanceFraction < norminalGyroRadius / nominalTotalRadius) {
      orbit(compassElement, vector)
    } else if (distanceFraction < 1.0) {
      rotate(compassElement, vector)
    } else {
      return true
    }
  }
  const handleDoubleClick = e => {
    const { Cartesian2, Cartesian3, defined, Ellipsoid, Matrix4, Ray, SceneMode, Transforms } = Cesium
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
    const rotateFrame = Transforms.eastNorthUpToFixedFrame(center, viewer.scene.globe.ellipsoid)
    const lookVector = Cartesian3.subtract(center, camera.position, new Cartesian3())
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
            status: 'complete',
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
  const resetRotater = () => {
    orbitCursorOpacity.value = 0
    orbitCursorAngle.value = 0
  }
  // state methods
  const viewerChange = () => {
    const { defined } = Cesium
    if (defined(vcInstance.viewer)) {
      if (unsubscribeFromPostRender) {
        unsubscribeFromPostRender()
        unsubscribeFromPostRender = undefined
      }

      unsubscribeFromPostRender = vcInstance.viewer.scene.postRender.addEventListener(function () {
        if (heading.value !== vcInstance.viewer.scene.camera.heading) {
          heading.value = vcInstance.viewer.scene.camera.heading
        }
      })
    } else {
      if (unsubscribeFromPostRender) {
        unsubscribeFromPostRender()
        unsubscribeFromPostRender = undefined
      }
    }
  }

  const orbit = (compassElement: HTMLElement, cursorVector: Cesium.Cartesian2) => {
    const { Cartesian2, Cartesian3, defined, getTimestamp, Math: CesiumMath, Matrix4, Ray, SceneMode, Transforms } = Cesium
    let scene = vcInstance.viewer.scene
    let camera = scene.camera
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
    const listener = getInstanceListener(vcInstance, 'compassEvt')
    listener &&
      emit('compassEvt', {
        type: 'orbit',
        camera: scene.camera,
        status: 'start',
        target: compassElement
      })

    // Remove existing event handlers, if any.
    document.removeEventListener('mousemove', orbitMouseMoveFunction, false)
    document.removeEventListener('mouseup', orbitMouseUpFunction, false)
    document.removeEventListener('touchmove', orbitMouseMoveFunction, false)
    document.removeEventListener('touchend', orbitMouseUpFunction, false)

    if (defined(orbitTickFunction)) {
      vcInstance.viewer.clock.onTick.removeEventListener(orbitTickFunction)
    }

    orbitMouseMoveFunction = undefined
    orbitMouseUpFunction = undefined
    orbitTickFunction = undefined

    isOrbiting = true
    orbitLastTimestamp = getTimestamp()

    const windowPosition = new Cartesian2()
    windowPosition.x = scene.canvas.clientWidth / 2
    windowPosition.y = scene.canvas.clientHeight / 2
    const pickRayScratch = new Ray()
    const ray = camera.getPickRay(windowPosition, pickRayScratch)

    const center = scene.globe.pick(ray, scene, centerScratch)
    if (!defined(center)) {
      orbitFrame = Transforms.eastNorthUpToFixedFrame(camera.positionWC, scene.globe.ellipsoid, newTransformScratch)
      orbitIsLook = true
    } else {
      orbitFrame = Transforms.eastNorthUpToFixedFrame(center, scene.globe.ellipsoid, newTransformScratch)
      orbitIsLook = false
    }

    orbitTickFunction = function (e) {
      const timestamp = getTimestamp()
      const deltaT = timestamp - orbitLastTimestamp
      const rate = ((orbitCursorOpacity.value - 0.5) * 2.5) / 1000
      const distance = deltaT * rate

      const angle = orbitCursorAngle.value + CesiumMath.PI_OVER_TWO
      const x = Math.cos(angle) * distance
      const y = Math.sin(angle) * distance

      scene = vcInstance.viewer.scene
      camera = scene.camera

      const oldTransform = Matrix4.clone(camera.transform, oldTransformScratch)
      camera.lookAtTransform(orbitFrame)
      if (orbitIsLook) {
        camera.look(Cartesian3.UNIT_Z, -x)
        camera.look(camera.right, -y)
      } else {
        camera.rotateLeft(x)
        camera.rotateUp(y)
      }

      camera.lookAtTransform(oldTransform)
      orbitLastTimestamp = timestamp
    }

    function updateAngleAndOpacity(vector, compassWidth) {
      const angle = Math.atan2(-vector.y, vector.x)
      orbitCursorAngle.value = CesiumMath.zeroToTwoPi(angle - CesiumMath.PI_OVER_TWO)
      const distance = Cartesian2.magnitude(vector)
      const maxDistance = compassWidth / 2.0
      const distanceFraction = Math.min(distance / maxDistance, 1.0)
      const easedOpacity = 0.5 * distanceFraction * distanceFraction + 0.5
      orbitCursorOpacity.value = easedOpacity
    }

    orbitMouseMoveFunction = function (e) {
      const compassRectangle = compassElement.getBoundingClientRect()
      const center = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2.0, (compassRectangle.bottom - compassRectangle.top) / 2.0)
      const clickLocation =
        e.type === 'mousemove'
          ? new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top)
          : new Cartesian2(e.changedTouches[0].clientX - compassRectangle.left, e.changedTouches[0].clientY - compassRectangle.top)
      const vector = Cartesian2.subtract(clickLocation, center, vectorScratch)
      updateAngleAndOpacity(vector, compassRectangle.width)
      listener &&
        emit('compassEvt', {
          type: 'orbit',
          camera: scene.camera,
          status: 'changing',
          target: compassElement
        })
    }

    orbitMouseUpFunction = function (e) {
      // TODO: if mouse didn't move, reset view to looking down, north is up?

      isOrbiting = false
      document.removeEventListener('mousemove', orbitMouseMoveFunction, false)
      document.removeEventListener('mouseup', orbitMouseUpFunction, false)
      document.removeEventListener('touchmove', orbitMouseMoveFunction, false)
      document.removeEventListener('touchend', orbitMouseUpFunction, false)

      if (defined(orbitTickFunction)) {
        vcInstance.viewer.clock.onTick.removeEventListener(orbitTickFunction)
      }

      orbitMouseMoveFunction = undefined
      orbitMouseUpFunction = undefined
      orbitTickFunction = undefined

      resetRotater()

      listener &&
        emit('compassEvt', {
          type: 'orbit',
          camera: scene.camera,
          status: 'end',
          target: compassElement
        })
    }

    document.addEventListener('mousemove', orbitMouseMoveFunction, false)
    document.addEventListener('mouseup', orbitMouseUpFunction, false)
    document.addEventListener('touchmove', orbitMouseMoveFunction, false)
    document.addEventListener('touchend', orbitMouseUpFunction, false)
    unsubscribeFromClockTick = vcInstance.viewer.clock.onTick.addEventListener(orbitTickFunction)
    updateAngleAndOpacity(cursorVector, compassElement.getBoundingClientRect().width)
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
    rotateMouseMoveFunction = undefined
    rotateMouseUpFunction = undefined

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
      rotateFrame = Transforms.eastNorthUpToFixedFrame(viewCenter, scene.globe.ellipsoid, newTransformScratch)
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

      rotateMouseMoveFunction = undefined
      rotateMouseUpFunction = undefined

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

  const onTooltipBeforeShow = e => {
    if (rotateMouseMoveFunction !== undefined || orbitMouseMoveFunction !== undefined) {
      e.cancel = true
    }
  }

  const load = async viewer => {
    vcInstance.viewer = viewer
    viewerChange()
    return true
  }

  const unload = async () => {
    document.removeEventListener('mousemove', orbitMouseMoveFunction, false)
    document.removeEventListener('mouseup', orbitMouseUpFunction, false)
    document.removeEventListener('touchmove', orbitMouseMoveFunction, false)
    document.removeEventListener('touchend', orbitMouseUpFunction, false)
    unsubscribeFromClockTick && unsubscribeFromClockTick()
    unsubscribeFromPostRender && unsubscribeFromPostRender()
    return true
  }

  return {
    heading,
    orbitCursorAngle,
    orbitCursorOpacity,
    handleDoubleClick,
    handleMouseDown,
    resetRotater,
    onTooltipBeforeShow,
    viewerChange,
    load,
    unload,
    iconOuterTooltipRef,
    iconInnerTooltipRef
  }
}
