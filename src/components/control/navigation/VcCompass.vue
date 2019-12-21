<template>
  <div
    :title="$vc.lang.navigation.compass.description"
    @dblclick="handleDoubleClick"
    @mousedown="handleMouseDown"
    @mouseup="resetRotater"
    @touchend="resetRotater"
    @touchstart="handleMouseDown"
    class="vc-compass"
  >
    <div :style="outerCircleStyle" class="vc-compass-outerRing">
      <vc-icon-svg name="compass-outer"></vc-icon-svg>
    </div>
    <div class="vc-compass-innerRing">
      <vc-icon-svg name="compass-inner"></vc-icon-svg>
    </div>
    <div :style="rotationMarkerStyle" class="vc-compass-rotation-marker">
      <vc-icon-svg name="compass-rotation-marker"></vc-icon-svg>
    </div>
  </div>
</template>
<script>

import './icon/compass-outer'
import './icon/compass-inner'
import './icon/compass-rotation-marker'
import '../../../assets/styles/components/compass.scss'
import VcIconSvg from './icon/VcIconSvg.vue'
import CameraFlightPath from '../../../exts/CameraFlightPath'
const vectorScratch = {}
const oldTransformScratch = {}
const newTransformScratch = {}
const centerScratch = {}
export default {
  name: 'vc-compass',
  props: {
    enableCompassOuterRing: Boolean
  },
  data () {
    return {
      heading: 0,
      orbitCursorAngle: 0,
      orbitCursorOpacity: 0
    }
  },
  components: {
    VcIconSvg
  },
  computed: {
    outerCircleStyle: function () {
      return {
        transform: 'rotate(-' + this.heading + 'rad)',
        WebkitTransform: 'rotate(-' + this.heading + 'rad)',
        opacity: ''
      }
    },
    rotationMarkerStyle: function () {
      return {
        transform: 'rotate(-' + this.orbitCursorAngle + 'rad)',
        WebkitTransform: 'rotate(-' + this.orbitCursorAngle + 'rad)',
        opacity: this.orbitCursorOpacity
      }
    }
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
      this.viewer = viewer
      this._unsubscribeFromViewerChange = this.viewer.afterViewerChanged.addEventListener(() => viewerChange(this))
      viewerChange(this)
    })
  },
  destroyed () {
    document.removeEventListener('mousemove', this.orbitMouseMoveFunction, false)
    document.removeEventListener('mouseup', this.orbitMouseUpFunction, false)
    document.removeEventListener('touchmove', this.orbitMouseMoveFunction, false)
    document.removeEventListener('touchend', this.orbitMouseUpFunction, false)
    this._unsubscribeFromClockTick && this._unsubscribeFromClockTick()
    this._unsubscribeFromPostRender && this._unsubscribeFromPostRender()
    this._unsubscribeFromViewerChange && this._unsubscribeFromViewerChange()
  },
  methods: {
    handleMouseDown (e) {
      if (e.stopPropagation) e.stopPropagation()
      if (e.preventDefault) e.preventDefault()
      const { SceneMode } = Cesium
      const scene = this.viewer.scene
      if (scene.mode === SceneMode.MORPHING) {
        return true
      }
      const { Cartesian2 } = Cesium
      const compassElement = e.currentTarget
      const compassRectangle = e.currentTarget.getBoundingClientRect()
      const maxDistance = compassRectangle.width / 2.0
      const center = new Cartesian2(
        (compassRectangle.right - compassRectangle.left) / 2.0,
        (compassRectangle.bottom - compassRectangle.top) / 2.0
      )
      const clickLocation =
        event.type === 'mousedown'
          ? new Cartesian2(event.clientX - compassRectangle.left, event.clientY - compassRectangle.top)
          : new Cartesian2(
            event.changedTouches[0].clientX - compassRectangle.left,
            event.changedTouches[0].clientY - compassRectangle.top
          )
      const vector = Cartesian2.subtract(clickLocation, center, vectorScratch)
      const distanceFromCenter = Cartesian2.magnitude(vector)

      const distanceFraction = distanceFromCenter / maxDistance

      const nominalTotalRadius = 145
      const norminalGyroRadius = 50

      if (distanceFraction < norminalGyroRadius / nominalTotalRadius) {
        orbit(this, compassElement, vector)
      } else if (distanceFraction < 1.0) {
        rotate(this, compassElement, vector)
      } else {
        return true
      }
    },
    handleDoubleClick (e) {
      const { Cartesian2, Cartesian3, defined, Ellipsoid, Matrix4, Ray, SceneMode, Transforms } = Cesium

      const scene = this.viewer.scene
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
        this.viewer.camera.flyHome()
        return
      }

      const rotateFrame = Transforms.eastNorthUpToFixedFrame(center, Ellipsoid.WGS84)

      const lookVector = Cartesian3.subtract(center, camera.position, new Cartesian3())

      const flight = CameraFlightPath.createTween(scene, {
        destination: Matrix4.multiplyByPoint(
          rotateFrame,
          new Cartesian3(0.0, 0.0, Cartesian3.magnitude(lookVector)),
          new Cartesian3()
        ),
        direction: Matrix4.multiplyByPointAsVector(rotateFrame, new Cartesian3(0.0, 0.0, -1.0), new Cartesian3()),
        up: Matrix4.multiplyByPointAsVector(rotateFrame, new Cartesian3(0.0, 1.0, 0.0), new Cartesian3()),
        duration: 1.5
      })
      scene.tweens.add(flight)
    },
    resetRotater () {
      this.orbitCursorOpacity = 0
      this.orbitCursorAngle = 0
    }
  }
}

function viewerChange (viewModel) {
  const { defined } = Cesium
  if (defined(viewModel.viewer)) {
    if (viewModel._unsubscribeFromPostRender) {
      viewModel._unsubscribeFromPostRender()
      viewModel._unsubscribeFromPostRender = undefined
    }

    viewModel._unsubscribeFromPostRender = viewModel.viewer.scene.postRender.addEventListener(function () {
      viewModel.heading = viewModel.viewer.scene.camera.heading
    })
  } else {
    if (viewModel._unsubscribeFromPostRender) {
      viewModel._unsubscribeFromPostRender()
      viewModel._unsubscribeFromPostRender = undefined
    }
    viewModel.showCompass = false
  }
}

function orbit (viewModel, compassElement, cursorVector) {
  const { Cartesian2, Cartesian3, defined, getTimestamp, Math: CesiumMath, Matrix4, Ellipsoid, Ray, SceneMode, Transforms } = Cesium
  let scene = viewModel.viewer.scene
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
  // Remove existing event handlers, if any.
  document.removeEventListener('mousemove', viewModel.orbitMouseMoveFunction, false)
  document.removeEventListener('mouseup', viewModel.orbitMouseUpFunction, false)
  document.removeEventListener('touchmove', viewModel.orbitMouseMoveFunction, false)
  document.removeEventListener('touchend', viewModel.orbitMouseUpFunction, false)

  if (defined(viewModel.orbitTickFunction)) {
    viewModel.viewer.clock.onTick.removeEventListener(viewModel.orbitTickFunction)
  }

  viewModel.orbitMouseMoveFunction = undefined
  viewModel.orbitMouseUpFunction = undefined
  viewModel.orbitTickFunction = undefined

  viewModel.isOrbiting = true
  viewModel.orbitLastTimestamp = getTimestamp()

  const windowPosition = new Cartesian2()
  windowPosition.x = scene.canvas.clientWidth / 2
  windowPosition.y = scene.canvas.clientHeight / 2
  const pickRayScratch = new Ray()
  const ray = camera.getPickRay(windowPosition, pickRayScratch)

  let center = scene.globe.pick(ray, scene, centerScratch)
  if (!defined(center)) {
    viewModel.orbitFrame = Transforms.eastNorthUpToFixedFrame(camera.positionWC, Ellipsoid.WGS84, newTransformScratch)
    viewModel.orbitIsLook = true
  } else {
    viewModel.orbitFrame = Transforms.eastNorthUpToFixedFrame(center, Ellipsoid.WGS84, newTransformScratch)
    viewModel.orbitIsLook = false
  }

  viewModel.orbitTickFunction = function (e) {
    const timestamp = getTimestamp()
    const deltaT = timestamp - viewModel.orbitLastTimestamp
    const rate = ((viewModel.orbitCursorOpacity - 0.5) * 2.5) / 1000
    const distance = deltaT * rate

    const angle = viewModel.orbitCursorAngle + CesiumMath.PI_OVER_TWO
    const x = Math.cos(angle) * distance
    const y = Math.sin(angle) * distance

    scene = viewModel.viewer.scene
    camera = scene.camera

    const oldTransform = Matrix4.clone(camera.transform, oldTransformScratch)

    camera.lookAtTransform(viewModel.orbitFrame)

    if (viewModel.orbitIsLook) {
      camera.look(Cartesian3.UNIT_Z, -x)
      camera.look(camera.right, -y)
    } else {
      camera.rotateLeft(x)
      camera.rotateUp(y)
    }

    camera.lookAtTransform(oldTransform)

    viewModel.orbitLastTimestamp = timestamp
  }

  function updateAngleAndOpacity (vector, compassWidth) {
    const angle = Math.atan2(-vector.y, vector.x)
    viewModel.orbitCursorAngle = CesiumMath.zeroToTwoPi(angle - CesiumMath.PI_OVER_TWO)
    const distance = Cartesian2.magnitude(vector)
    const maxDistance = compassWidth / 2.0
    const distanceFraction = Math.min(distance / maxDistance, 1.0)
    const easedOpacity = 0.5 * distanceFraction * distanceFraction + 0.5
    viewModel.orbitCursorOpacity = easedOpacity
  }

  viewModel.orbitMouseMoveFunction = function (e) {
    const compassRectangle = compassElement.getBoundingClientRect()
    center = new Cartesian2(
      (compassRectangle.right - compassRectangle.left) / 2.0,
      (compassRectangle.bottom - compassRectangle.top) / 2.0
    )
    const clickLocation =
      event.type === 'mousemove'
        ? new Cartesian2(event.clientX - compassRectangle.left, event.clientY - compassRectangle.top)
        : new Cartesian2(
          event.changedTouches[0].clientX - compassRectangle.left,
          event.changedTouches[0].clientY - compassRectangle.top
        )
    const vector = Cartesian2.subtract(clickLocation, center, vectorScratch)
    updateAngleAndOpacity(vector, compassRectangle.width)
  }

  viewModel.orbitMouseUpFunction = function (e) {
    // TODO: if mouse didn't move, reset view to looking down, north is up?

    viewModel.isOrbiting = false
    document.removeEventListener('mousemove', viewModel.orbitMouseMoveFunction, false)
    document.removeEventListener('mouseup', viewModel.orbitMouseUpFunction, false)
    document.removeEventListener('touchmove', viewModel.orbitMouseMoveFunction, false)
    document.removeEventListener('touchend', viewModel.orbitMouseUpFunction, false)

    if (defined(viewModel.orbitTickFunction)) {
      viewModel.viewer.clock.onTick.removeEventListener(viewModel.orbitTickFunction)
    }

    viewModel.orbitMouseMoveFunction = undefined
    viewModel.orbitMouseUpFunction = undefined
    viewModel.orbitTickFunction = undefined
  }

  document.addEventListener('mousemove', viewModel.orbitMouseMoveFunction, false)
  document.addEventListener('mouseup', viewModel.orbitMouseUpFunction, false)
  document.addEventListener('touchmove', viewModel.orbitMouseMoveFunction, false)
  document.addEventListener('touchend', viewModel.orbitMouseUpFunction, false)
  viewModel._unsubscribeFromClockTick = viewModel.viewer.clock.onTick.addEventListener(viewModel.orbitTickFunction)

  updateAngleAndOpacity(cursorVector, compassElement.getBoundingClientRect().width)
}

function rotate (viewModel, compassElement, cursorVector) {
  if (!viewModel.enableCompassOuterRing) {
    return
  }

  const scene = viewModel.viewer.scene
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
  document.removeEventListener('mousemove', viewModel.rotateMouseMoveFunction, false)
  document.removeEventListener('touchmove', viewModel.rotateMouseMoveFunction, false)
  document.removeEventListener('mouseup', viewModel.rotateMouseUpFunction, false)
  document.removeEventListener('touchend', viewModel.rotateMouseUpFunction, false)
  const { Cartesian2, Cartesian3, defined, Math: CesiumMath, Matrix4, Ellipsoid, Ray, Transforms } = Cesium
  viewModel.rotateMouseMoveFunction = undefined
  viewModel.rotateMouseUpFunction = undefined

  viewModel.isRotating = true
  viewModel.rotateInitialCursorAngle = Math.atan2(-cursorVector.y, cursorVector.x)

  const windowPosition = new Cartesian2()
  windowPosition.x = scene.canvas.clientWidth / 2
  windowPosition.y = scene.canvas.clientHeight / 2
  const pickRayScratch = new Ray()
  const ray = camera.getPickRay(windowPosition, pickRayScratch)

  const viewCenter = scene.globe.pick(ray, scene, centerScratch)
  if (!defined(viewCenter)) {
    viewModel.rotateFrame = Transforms.eastNorthUpToFixedFrame(camera.positionWC, Ellipsoid.WGS84, newTransformScratch)
    viewModel.rotateIsLook = true
  } else {
    viewModel.rotateFrame = Transforms.eastNorthUpToFixedFrame(viewCenter, Ellipsoid.WGS84, newTransformScratch)
    viewModel.rotateIsLook = false
  }

  let oldTransform = Matrix4.clone(camera.transform, oldTransformScratch)
  camera.lookAtTransform(viewModel.rotateFrame)
  viewModel.rotateInitialCameraAngle = Math.atan2(camera.position.y, camera.position.x)
  viewModel.rotateInitialCameraDistance = Cartesian3.magnitude(new Cartesian3(camera.position.x, camera.position.y, 0.0))
  camera.lookAtTransform(oldTransform)

  viewModel.rotateMouseMoveFunction = function (e) {
    const compassRectangle = compassElement.getBoundingClientRect()
    const center = new Cartesian2(
      (compassRectangle.right - compassRectangle.left) / 2.0,
      (compassRectangle.bottom - compassRectangle.top) / 2.0
    )
    const clickLocation =
      event.type === 'mousedown' || event.type === 'mousemove'
        ? new Cartesian2(event.clientX - compassRectangle.left, event.clientY - compassRectangle.top)
        : new Cartesian2(
          event.changedTouches[0].clientX - compassRectangle.left,
          event.changedTouches[0].clientY - compassRectangle.top
        )
    const vector = Cartesian2.subtract(clickLocation, center, vectorScratch)
    const angle = Math.atan2(-vector.y, vector.x)

    const angleDifference = angle - viewModel.rotateInitialCursorAngle
    const newCameraAngle = CesiumMath.zeroToTwoPi(viewModel.rotateInitialCameraAngle - angleDifference)

    camera = viewModel.viewer.scene.camera

    oldTransform = Matrix4.clone(camera.transform, oldTransformScratch)
    camera.lookAtTransform(viewModel.rotateFrame)
    const currentCameraAngle = Math.atan2(camera.position.y, camera.position.x)
    camera.rotateRight(newCameraAngle - currentCameraAngle)
    camera.lookAtTransform(oldTransform)
  }

  viewModel.rotateMouseUpFunction = function (e) {
    viewModel.isRotating = false
    document.removeEventListener('mousemove', viewModel.rotateMouseMoveFunction, false)
    document.removeEventListener('touchmove', viewModel.rotateMouseMoveFunction, false)
    document.removeEventListener('mouseup', viewModel.rotateMouseUpFunction, false)
    document.removeEventListener('touchend', viewModel.rotateMouseUpFunction, false)

    viewModel.rotateMouseMoveFunction = undefined
    viewModel.rotateMouseUpFunction = undefined
  }

  document.addEventListener('mousemove', viewModel.rotateMouseMoveFunction, false)
  document.addEventListener('touchmove', viewModel.rotateMouseMoveFunction, false)
  document.addEventListener('mouseup', viewModel.rotateMouseUpFunction, false)
  document.addEventListener('touchend', viewModel.rotateMouseUpFunction, false)
}
</script>
