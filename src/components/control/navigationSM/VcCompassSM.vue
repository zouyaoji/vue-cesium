<template>
  <div
    @dblclick="handleDoubleClick"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @touchend="handleMouseUp"
    @touchstart="handleMouseDown"
    class="vc-compass-sm"
  >
    <div class="vc-compass-tilt-sm"></div>
    <div :style="tiltbarStyle" class="vc-compass-tiltbar-sm"></div>
    <div class="vc-compass-arrows-sm"></div>
    <div :style="outerRingStyle" class="vc-compass-outer-ring-sm"></div>
    <div class="vc-arrows-e-sm"></div>
    <div class="vc-arrows-n-sm"></div>
    <div class="vc-arrows-s-sm"></div>
    <div class="vc-arrows-w-sm"></div>
  </div>
</template>

<script>
import CameraFlightPath from '../../../exts/CameraFlightPath'
import { Platform } from '../../../utils/util'
export default {
  name: 'vc-compass-sm',
  props: {
    enableCompassOuterRing: Boolean
  },
  data () {
    return {
      tiltbarLeft: 56,
      tiltbarTop: 3,
      heading: 0
    }
  },
  computed: {
    tiltbarStyle: function () {
      return {
        left: this.tiltbarLeft + 'px',
        top: this.tiltbarTop + 'px'
      }
    },
    outerRingStyle: function () {
      return {
        transform: 'rotate(-' + this.heading + 'rad)',
        '-webkit-transform': 'rotate(-' + this.heading + 'rad)'
      }
    }
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      this.viewer = viewer
      this.heading = viewer.scene.camera.heading
      this.screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(this.$parent.$refs.navigationContainer)
      this.isRotating = false
      this.rotateInitialCursorAngle = undefined
      this.rotateFrame = undefined
      this.rotateMouseMoveFunction = undefined
      this.rotateMouseUpFunction = undefined
      this._unsubcribeFromPostRender = undefined
      this.isTilting = false
      this.tiltInitialCursorAngle = 0
      getTiltbarPosition.call(this)
      viewerChange(this)
      if (!Platform().isPc) {
        document.querySelector('.vc-compass-tiltbar-sm').style.visibility = 'visible'
        document.querySelector('.vc-compass-arrows-sm').style.visibility = 'visible'
        document.querySelector('.vc-compass-tilt-sm').style.visibility = 'visible'
      }
    })
  },
  methods: {
    handleMouseDown (event) {
      const { Cartesian2, Math: CesiumMath, SceneMode } = Cesium
      const scene = this.viewer.scene
      if (scene.mode === SceneMode.MORPHING) {
        return true
      }
      const compassElement = event.currentTarget
      const compassRectangle = event.currentTarget.getBoundingClientRect()
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
      this.clickStartPosition = new Cartesian2(event.clientX, event.clientY)
      const distanceFromCenter = Cartesian2.magnitude(vector)

      if (distanceFromCenter > 30 && distanceFromCenter < 45) {
        rotate(this, compassElement, vector)
      } else if (!(distanceFromCenter > 50 && distanceFromCenter < 70)) {
        rotateEast(this, compassElement, vector)
      } else {
        const angle = CesiumMath.PI_OVER_TWO - Math.atan2(-vector.y, vector.x)
        angle >= 0 && angle <= CesiumMath.PI_OVER_TWO && tilt(this, compassElement, vector)
      }
    },
    handleDoubleClick (e) {
      const { Cartesian2, Cartesian3, defined, Ellipsoid, Matrix4, Ray, SceneMode, Transforms } = Cesium
      const scene = this.viewer.scene
      const camera = scene.camera

      if (scene.mode === SceneMode.MORPHING) {
        return true
      }
      const compassRectangle = e.currentTarget.getBoundingClientRect()
      const center = new Cartesian2(
        (compassRectangle.right - compassRectangle.left) / 2.0,
        (compassRectangle.bottom - compassRectangle.top) / 2.0
      )
      const clickLocation =
        e.type === 'dblclick'
          ? new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top)
          : new Cartesian2(
            e.changedTouches[0].clientX - compassRectangle.left,
            e.changedTouches[0].clientY - compassRectangle.top
          )
      const vector = Cartesian2.subtract(clickLocation, center, vectorScratch)
      this.clickStartPosition = new Cartesian2(e.clientX, e.clientY)
      const distanceFromCenter = Cartesian2.magnitude(vector)

      if (distanceFromCenter > 30 && distanceFromCenter < 45) {
        const windowPosition = new Cartesian2()
        windowPosition.x = scene.canvas.clientWidth / 2
        windowPosition.y = scene.canvas.clientHeight / 2
        const pickRayScratch = new Ray()
        const ray = camera.getPickRay(windowPosition, pickRayScratch)

        const center = scene.globe.pick(ray, scene, centerScratch)
        if (!defined(center)) {
          // Globe is barely visible, so reset to home view.
          return
        }

        const rotateFrame = Transforms.eastNorthUpToFixedFrame(
          center,
          Ellipsoid.WGS84
        )

        const lookVector = Cartesian3.subtract(
          center,
          camera.position,
          new Cartesian3()
        )

        const flight = CameraFlightPath.createTween(scene, {
          destination: Matrix4.multiplyByPoint(
            rotateFrame,
            new Cartesian3(0.0, 0.0, Cartesian3.magnitude(lookVector)),
            new Cartesian3()
          ),
          direction: Matrix4.multiplyByPointAsVector(
            rotateFrame,
            new Cartesian3(0.0, 0.0, -1.0),
            new Cartesian3()
          ),
          up: Matrix4.multiplyByPointAsVector(
            rotateFrame,
            new Cartesian3(0.0, 1.0, 0.0),
            new Cartesian3()
          ),
          duration: 1.5
        })
        scene.tweens.add(flight)
      }
    },
    handleMouseUp (event) {
      const { Cartesian2, Math: CesiumMath } = Cesium
      const compassRectangle = event.currentTarget.getBoundingClientRect()
      const center = new Cartesian2(
        (compassRectangle.right - compassRectangle.left) / 2.0,
        (compassRectangle.bottom - compassRectangle.top) / 2.0
      )
      const clickLocation =
        event.type === 'mouseup' ? new Cartesian2(event.clientX - compassRectangle.left, event.clientY - compassRectangle.top)
          : new Cartesian2(
            event.changedTouches[0].clientX - compassRectangle.left,
            event.changedTouches[0].clientY - compassRectangle.top
          )
      const vector = Cartesian2.subtract(clickLocation, center, vectorScratch)
      const magnitude = Cartesian2.magnitude(vector)
      if (magnitude > 30 && magnitude < 45) {
        const angle = CesiumMath.toDegrees(Math.atan2(-vector.y, vector.x))
        const clickStartPosition = new Cartesian2(event.clientX, event.clientY)
        const dX = clickStartPosition.x - this.clickStartPosition.x
        const dY = clickStartPosition.y - this.clickStartPosition.y
        const distance = Math.sqrt(dX * dX + dY * dY)
        if (distance > 5) {
          return
        }
        const heading = CesiumMath.toDegrees(this.heading)
        const m = Math.abs(angle - heading)
        const scene = this.viewer.scene
        if ((angle > 0 && heading > 0 && heading < 90 && m > 80 && m < 100) || (m > 260 && m < 280)) {
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
  },
  destroyed () {
    this.screenSpaceEventHandler && this.screenSpaceEventHandler.destroy()
  }
}
const vectorScratch = {}
const oldTransformScratch = {}
const newTransformScratch = {}
const centerScratch = {}

const positions = [
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

function rotate (viewModel, compassElement, cursorVector) {
  if (!viewModel.enableCompassOuterRing) {
    return
  }

  const { Cartesian2, Cartesian3, defined, Math: CesiumMath, Matrix4, Ellipsoid, Ray, Transforms } = Cesium
  // Remove existing event handlers, if any.
  document.removeEventListener('mousemove', viewModel.rotateMouseMoveFunction, false)
  document.removeEventListener('touchmove', viewModel.rotateMouseMoveFunction, false)
  document.removeEventListener('mouseup', viewModel.rotateMouseUpFunction, false)
  document.removeEventListener('touchend', viewModel.rotateMouseUpFunction, false)
  viewModel.rotateMouseMoveFunction = undefined
  viewModel.rotateMouseUpFunction = undefined
  viewModel.isRotating = true
  viewModel.rotateInitialCursorAngle = Math.atan2(-cursorVector.y, cursorVector.x)
  const scene = viewModel.viewer.scene
  let camera = scene.camera
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
  viewModel.rotateMouseMoveFunction = (event) => {
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

  viewModel.rotateMouseUpFunction = () => {
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

function rotateEast (viewModel, compassElement, cursorVector) {
  const { defined, getTimestamp, Math: CesiumMath, ScreenSpaceEventType } = Cesium
  viewModel.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
  defined(viewModel.rotateEastTickFunction) && viewModel.viewer.clock.onTick.removeEventListener(viewModel.rotateEastTickFunction)
  viewModel.rotateEastMouseUpFunction = undefined
  viewModel.rotateEastTickFunction = undefined
  viewModel.isrotateEasting = true
  viewModel.rotateEastLastTimestamp = getTimestamp()
  let angle = CesiumMath.PI_OVER_TWO - Math.atan2(-cursorVector.y, cursorVector.x)
  const a = Math.PI / 4
  let roateDirection = 0
  const roateType = {
    LEFT: 1,
    RIGHT: 2,
    UP: 3,
    DOWN: 4
  }
  roateDirection = angle >= -a && a >= angle ? roateType.DOWN : angle >= a && 3 * a >= angle ? roateType.RIGHT
    : angle >= 3 * a && 5 * a >= angle ? roateType.UP : roateType.LEFT
  viewModel.rotateEastTickFunction = () => {
    const scene = viewModel.viewer.scene
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
    viewModel.rotateLastTimestamp = timestamp
  }
  viewModel.rotateEastMouseUpFunction = () => {
    viewModel.isRotateEasting = false
    viewModel.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
    defined(viewModel.rotateEastTickFunction) &&
      viewModel.viewer.clock.onTick.removeEventListener(viewModel.rotateEastTickFunction)
    viewModel.rotateEastMouseUpFunction = undefined
    viewModel.rotateEastTickFunction = undefined
  }

  viewModel.screenSpaceEventHandler.setInputAction(viewModel.rotateEastMouseUpFunction, ScreenSpaceEventType.LEFT_UP)
  viewModel.viewer.clock.onTick.addEventListener(viewModel.rotateEastTickFunction)
}
function tilt (viewModel, compassElement, cursorVector) {
  const { Cartesian2, defined, Math: CesiumMath, Matrix4, ScreenSpaceEventType, Transforms } = Cesium
  // Remove existing event handlers, if any.
  viewModel.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE)
  viewModel.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
  viewModel.tiltMouseMoveFunction = undefined
  viewModel.tiltMouseUpFunction = undefined
  let tiltInitialCursorAngle = CesiumMath.PI_OVER_TWO - Math.atan2(-cursorVector.y, cursorVector.x)
  tiltInitialCursorAngle = tiltInitialCursorAngle < 0 ? 0 : tiltInitialCursorAngle
  tiltInitialCursorAngle = tiltInitialCursorAngle > CesiumMath.PI_OVER_TWO ? CesiumMath.PI_OVER_TWO : tiltInitialCursorAngle
  viewModel.tiltInitialCursorAngle = tiltInitialCursorAngle
  viewModel.isTilting = true
  const scene = viewModel.viewer.scene
  const camera = scene.camera
  const windowPosition = new Cartesian2()
  windowPosition.x = scene.canvas.clientWidth / 2
  windowPosition.y = scene.canvas.clientHeight / 2
  let pickPosition = camera.pickEllipsoid(windowPosition, scene.ellipsoid)
  if (!defined(pickPosition)) {
    for (; windowPosition.y < scene.canvas.clientHeight;) {
      windowPosition.y += 5
      pickPosition = camera.pickEllipsoid(windowPosition, scene.globe.ellipsoid)
    }
  }

  defined(pickPosition) && (viewModel.tiltFrame = Transforms.eastNorthUpToFixedFrame(pickPosition, scene.globe.ellipsoid))
  viewModel.tiltMouseMoveFunction = (e, n) => {
    viewModel.isTilting = true
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
    const camera = viewModel.viewer.scene.camera
    const oldTransform = Matrix4.clone(camera.transform, oldTransformScratch)
    camera.lookAtTransform(viewModel.tiltFrame)
    const rotateUpAngle = angle - viewModel.tiltInitialCursorAngle
    camera.rotateUp(rotateUpAngle)
    viewModel.tiltInitialCursorAngle = angle
    camera.lookAtTransform(oldTransform)
    let level = Math.ceil(angle / (Math.PI / 40))
    level = level > 19 ? 19 : level
    const position = positions[level]
    viewModel.tiltbarLeft = position.x
    viewModel.tiltbarTop = position.y
  }

  viewModel.tiltMouseUpFunction = function (e) {
    viewModel.isTilting = false
    viewModel.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE)
    viewModel.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
    viewModel.tiltMouseMoveFunction = undefined
    viewModel.tiltMouseUpFunction = undefined
  }

  viewModel.screenSpaceEventHandler.setInputAction(viewModel.tiltMouseMoveFunction, ScreenSpaceEventType.MOUSE_MOVE)
  viewModel.screenSpaceEventHandler.setInputAction(viewModel.tiltMouseUpFunction, ScreenSpaceEventType.LEFT_UP)
}

function getTiltbarPosition () {
  const { Math: CesiumMath } = Cesium
  let pitch = CesiumMath.PI_OVER_TWO + this.viewer.scene.camera.pitch
  let length = Math.PI / 2 / 20
  let level = Math.floor(pitch / length)
  level = level > 19 ? 19 : level
  level = level < 0 ? 0 : level
  this.tiltbarLeft = positions[level].x
  this.tiltbarTop = positions[level].y
}

function viewerChange (viewModel) {
  const { defined, Math: CesiumMath } = Cesium
  if (defined(viewModel.viewer)) {
    if (viewModel._unsubcribeFromPostRender) {
      viewModel._unsubcribeFromPostRender()
      viewModel._unsubcribeFromPostRender = undefined
    }
    viewModel._unsubcribeFromPostRender = viewModel.viewer.scene.postRender.addEventListener(() => {
      viewModel.heading = viewModel.viewer.scene.camera.heading
      if (!viewModel.isTilting) {
        const angle = viewModel.viewer.scene.camera.pitch + CesiumMath.PI_OVER_TWO
        const length = CesiumMath.PI_OVER_TWO / 20
        let level = Math.floor(angle / length)
        level = level > 19 ? 19 : level
        level = level < 0 ? 0 : level
        viewModel.tiltbarLeft = positions[level].x
        viewModel.tiltbarTop = positions[level].y
      }
    })
  } else {
    if (viewModel._unsubcribeFromPostRender) {
      viewModel._unsubcribeFromPostRender()
      viewModel._unsubcribeFromPostRender = undefined
    }
  }
}
</script>
