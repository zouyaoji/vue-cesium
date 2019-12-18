<template>
  <div class="sm-zoom">
    <div @mousedown="handleZoomInMouseDown" @touchstart="handleZoomInMouseDown" class="sm-zoomin"></div>
    <div @mousedown="handleZoomOutMouseDown" @touchstart="handleZoomOutMouseDown" class="sm-zoomout"></div>
    <div
      :style="zoombarStyle"
      @mousedown="handleZoomBarScrollMouseDown"
      @touchstart="handleZoomBarScrollMouseDown"
      class="sm-zoombar"
    ></div>
  </div>
</template>

<script>
import { Platform } from '../../../utils/util'
export default {
  data () {
    return {
      zoombarTop: 65
    }
  },
  computed: {
    zoombarStyle: function () {
      return {
        top: this.zoombarTop + 'px'
      }
    }
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      this.viewer = viewer
      this.container = this.$parent.$refs.navigationContainer
      this.screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(this.container)
      Platform().isPc || (document.querySelector('.sm-zoom').style.visibility = 'visible')
    })
  },
  methods: {
    handleZoomBarScrollMouseDown (event, viewModel = this) {
      const { Cartesian2, defined, SceneMode } = Cesium
      document.removeEventListener('mousemove', viewModel.zoomBarScrollMouseMoveFunction, false)
      document.removeEventListener('touchmove', viewModel.zoomBarScrollMouseMoveFunction, false)
      document.removeEventListener('mouseup', viewModel.zoomBarScrollMouseUpFunction, false)
      document.removeEventListener('touchend', viewModel.zoomBarScrollMouseUpFunction, false)
      defined(viewModel.zoombarTickFunction) && viewModel.viewer.clock.onTick.removeEventListener(viewModel.zoombarTickFunction)
      viewModel.zoomBarScrollMouseUpFunction = undefined
      viewModel.zoombarTickFunction = undefined
      viewModel.isZoomBarScrolling = true
      const scene = viewModel.viewer.scene
      const camera = scene.camera

      viewModel.zoombarTickFunction = () => {
        const zoomOffset = viewModel.zoombarTop - 65
        if (zoomOffset > 0) {
          if (viewModel.viewer.scene.mode === SceneMode.COLUMBUS_VIEW) {
            camera.zoomOut()
          } else {
            handlezoom(viewModel, -1)
          }
        } else if (zoomOffset < 0) {
          if (viewModel.viewer.scene.mode === SceneMode.COLUMBUS_VIEW) {
            camera.zoomIn()
          } else {
            handlezoom(viewModel, 1)
          }
        }
      }
      viewModel.zoomBarScrollMouseMoveFunction = e => {
        const zoombarTop = viewModel.zoombarTop
        const clientRect = e.target.parentElement.getBoundingClientRect()
        const rectNavigation = viewModel.container.getBoundingClientRect()
        const endPosition = {}
        endPosition.x = e.type === 'touchmove' ? e.changedTouches[0].clientX - rectNavigation.left : e.clientX - rectNavigation.left
        endPosition.y = e.type === 'touchmove' ? e.changedTouches[0].clientY - rectNavigation.top : e.clientY - rectNavigation.top
        // 加上一个距离顶部的偏移量 rectViewer.top
        const rectViewer = viewModel.viewer._element.getBoundingClientRect()
        const padding = new Cartesian2(endPosition.x - clientRect.left, endPosition.y - clientRect.top + rectViewer.top)
        let offset = padding.y - 16
        offset = offset < 0 ? 0 : offset
        offset = offset > 120 ? 120 : offset
        viewModel.zoombarTop = offset

        const zoomFlag = viewModel.zoombarTop - zoombarTop
        if (zoomFlag > 0) {
          if (viewModel.viewer.scene.mode === SceneMode.COLUMBUS_VIEW) {
            camera.zoomOut()
          } else {
            handlezoom(viewModel, -1)
          }
        } else {
          if (viewModel.viewer.scene.mode === SceneMode.COLUMBUS_VIEW) {
            camera.zoomIn()
          } else {
            handlezoom(viewModel, 1)
          }
        }
      }

      viewModel.zoomBarScrollMouseUpFunction = () => {
        viewModel.isZoomBarScrolling = false
        document.removeEventListener('mousemove', viewModel.zoomBarScrollMouseMoveFunction, false)
        document.removeEventListener('touchmove', viewModel.zoomBarScrollMouseMoveFunction, false)
        document.removeEventListener('mouseup', viewModel.zoomBarScrollMouseUpFunction, false)
        document.removeEventListener('touchend', viewModel.zoomBarScrollMouseUpFunction, false)
        defined(viewModel.zoombarTickFunction) && viewModel.viewer.clock.onTick.removeEventListener(viewModel.zoombarTickFunction)
        viewModel.zoomBarScrollMouseUpFunction = undefined
        viewModel.zoomBarScrollMouseMoveFunction = undefined
        viewModel.zoombarTickFunction = undefined
        viewModel.zoombarTop = 65
      }
      document.addEventListener('mousemove', viewModel.zoomBarScrollMouseMoveFunction, false)
      document.addEventListener('touchmove', viewModel.zoomBarScrollMouseMoveFunction, false)
      document.addEventListener('mouseup', viewModel.zoomBarScrollMouseUpFunction, false)
      document.addEventListener('touchend', viewModel.zoomBarScrollMouseUpFunction, false)
      viewModel.viewer.clock.onTick.addEventListener(viewModel.zoombarTickFunction)
    },

    handleZoomInMouseDown (event, viewModel = this) {
      const { defined, getTimestamp, SceneMode, ScreenSpaceEventType } = Cesium
      viewModel.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
      defined(viewModel.zoominTickFunction) && viewModel.viewer.clock.onTick.removeEventListener(viewModel.zoominTickFunction)
      viewModel.zoominMouseUpFunction = undefined
      viewModel.zoominTickFunction = undefined
      viewModel.isZoomin = true
      viewModel.zoominLastTimestamp = getTimestamp()
      const scene = viewModel.viewer.scene
      const camera = scene.camera
      viewModel.zoominTickFunction = () => {
        viewModel.viewer.scene.mode === SceneMode.COLUMBUS_VIEW ? camera.zoomIn() : handlezoom(viewModel, 1)
      }

      viewModel.zoominMouseUpFunction = () => {
        viewModel.isZoomin = false
        viewModel.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
        defined(viewModel.zoominTickFunction) && viewModel.viewer.clock.onTick.removeEventListener(viewModel.zoominTickFunction)
        viewModel.zoominMouseUpFunction = undefined
        viewModel.zoominTickFunction = undefined
      }

      viewModel.screenSpaceEventHandler.setInputAction(viewModel.zoominMouseUpFunction, ScreenSpaceEventType.LEFT_UP)
      viewModel.viewer.clock.onTick.addEventListener(viewModel.zoominTickFunction)
    },

    handleZoomOutMouseDown (event, viewModel = this) {
      const { defined, getTimestamp, SceneMode, ScreenSpaceEventType } = Cesium
      viewModel.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
      defined(viewModel.zoomoutTickFunction) && viewModel.viewer.clock.onTick.removeEventListener(viewModel.zoomoutTickFunction)
      viewModel.zoomoutMouseUpFunction = undefined
      viewModel.zoomoutTickFunction = undefined
      viewModel.iszoomout = false
      viewModel.zoomoutLastTimestamp = getTimestamp()
      const scene = viewModel.viewer.scene
      const camera = scene.camera
      viewModel.zoomoutTickFunction = () => {
        viewModel.viewer.scene.mode === SceneMode.COLUMBUS_VIEW ? camera.zoomOut() : handlezoom(viewModel, -1)
      }

      viewModel.zoomoutMouseUpFunction = () => {
        viewModel.iszoomout = false
        viewModel.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
        defined(viewModel.zoomoutTickFunction) && viewModel.viewer.clock.onTick.removeEventListener(viewModel.zoomoutTickFunction)
        viewModel.zoomoutMouseUpFunction = undefined
        viewModel.zoomoutTickFunction = undefined
      }

      viewModel.screenSpaceEventHandler.setInputAction(viewModel.zoomoutMouseUpFunction, ScreenSpaceEventType.LEFT_UP)
      viewModel.viewer.clock.onTick.addEventListener(viewModel.zoomoutTickFunction)
    }
  },
  destroyed () {
    this.screenSpaceEventHandler && this.screenSpaceEventHandler.destroy()
  }
}
function handlezoom (viewModel, i) {
  const { Cartesian2, Cartesian3, defined, Ellipsoid, Math } = Cesium
  const scene = viewModel.viewer.scene
  const camera = scene.camera
  const canvas = scene.canvas
  const centerPixel = new Cartesian2()
  centerPixel.x = canvas.clientWidth / 2
  centerPixel.y = canvas.clientHeight / 2
  const centerPosition = pickGlobe(viewModel, centerPixel)
  if (defined(centerPosition)) {
    const distance = Cartesian3.distance(camera.position, centerPosition)
    let factor = 0.0618 * i * 0.2
    factor = distance > 300 ? factor : 2 * factor
    const amount = distance * factor
    const direction = {}
    Cartesian3.subtract(centerPosition, camera.position, direction)
    const cameraRight = Cartesian3.clone(camera.right)
    const dot = Cartesian3.dot(direction, cameraRight)
    const movementVector = {}
    Cartesian3.multiplyByScalar(cameraRight, dot, movementVector)
    Cartesian3.subtract(direction, movementVector, direction)
    Cartesian3.normalize(direction, direction)
    camera.move(direction, amount)
    const centerPositionNormal = {}
    Cartesian3.normalize(centerPosition, centerPositionNormal)

    const centerDistance = Cartesian3.magnitude(centerPosition)
    const ellipsoid = Ellipsoid.fromCartesian3(centerDistance)
    const pickPosition = camera.pickEllipsoid(centerPixel, ellipsoid)
    if (
      defined(pickPosition) &&
      !isNaN(pickPosition.x) &&
      !isNaN(pickPosition.y) &&
      !isNaN(pickPosition.z) &&
      !(camera.positionCartographic.height < 0)
    ) {
      Cartesian3.normalize(pickPosition, pickPosition)
      const angle = Cartesian3.angleBetween(centerPositionNormal, pickPosition)
      if (!Math.equalsEpsilon(angle, 0, Math.EPSILON10)) {
        const axis = Cartesian3.cross(centerPositionNormal, pickPosition)
        camera.rotate(axis, angle)
      }
    }
  }
}

function pickGlobe (viewModel, mousePosition) {
  const { defined, Cartesian3 } = Cesium
  const scene = viewModel.viewer.scene
  const globe = scene.globe
  const camera = scene.camera
  if (defined(globe)) {
    let depthIntersection
    if (scene.pickPositionSupported) {
      depthIntersection = scene.pickPositionWorldCoordinates(mousePosition)
    }
    const ray = camera.getPickRay(mousePosition)
    const rayIntersection = globe.pick(ray, scene)
    const pickDistance = defined(depthIntersection)
      ? Cartesian3.distance(depthIntersection, camera.positionWC)
      : Number.POSITIVE_INFINITY
    const rayDistance = defined(rayIntersection)
      ? Cartesian3.distance(rayIntersection, camera.positionWC)
      : Number.POSITIVE_INFINITY
    return rayDistance > pickDistance ? depthIntersection : rayIntersection
  }
}
</script>
